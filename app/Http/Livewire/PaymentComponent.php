<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Ecpay\Sdk\Factories\Factory;
use Ecpay\Sdk\Services\UrlService;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use Illuminate\Support\Facades\Log;

class PaymentComponent extends Component
{
    public $selectedPlan = 'early_bird';
    public $includeBanquet = false;
    public $userType = 'guest'; // guest, regular, premium, student
    public $membershipType = 'guest'; // 會員身分類型
    public $isEarlyBird = true; // 根據當前日期判斷是否還在早鳥期間

    public $plans = [
        'general' => [
            'early_bird' => [
                'name' => '早鳥 Early-Bird 優惠註冊費',
                'subtitle' => '(10月31日前完成繳費者)',
                'prices' => [
                    'guest' => 3500,      // 訪客
                    'regular' => 3100,    // 一般會員
                    'premium' => 2500,    // 永久會員
                ],
                'banquet_included' => true,
            ],
            'regular' => [
                'name' => '非早鳥網路及現場報名',
                'subtitle' => 'Regular & On-site 註冊費',
                'prices' => [
                    'guest' => 4000,      // 訪客
                    'regular' => 3500,    // 一般會員
                    'premium' => 3000,    // 永久會員
                ],
                'banquet_included' => true,
            ]
        ],
        'student' => [
            'early_bird' => [
                'name' => '學生身份早鳥',
                'subtitle' => '(10月31日前完成繳費者)',
                'price' => 2000,
                'banquet_price' => 1200,
                'banquet_included' => false,
            ],
            'regular' => [
                'name' => '學生身分一般',
                'subtitle' => 'Regular & On-site 註冊費',
                'price' => 2500,
                'banquet_price' => 1200,
                'banquet_included' => false,
            ]
        ]
    ];

    public function mount()
    {
        // 檢查用戶身分 - 改用 membership_type
        if (Auth::check()) {
            $this->membershipType = Auth::user()->membership_type ?? 'guest';
            $this->userType = $this->membershipType === 'student' ? 'student' : 'general';
        }

        // 判斷是否還在早鳥期間 (假設10月31日前)
        $this->isEarlyBird = now() <= now()->parse('2025-10-31 23:59:59');

        // 設定預設方案
        $this->selectedPlan = $this->isEarlyBird ? 'early_bird' : 'regular';
    }

    public function selectPlan($plan)
    {
        $this->selectedPlan = $plan;
    }

    public function toggleBanquet()
    {
        $this->includeBanquet = !$this->includeBanquet;
    }

    public function getCurrentPrice()
    {
        if ($this->userType === 'student') {
            $basePrice = $this->plans['student'][$this->selectedPlan]['price'];
            $banquetPrice = $this->includeBanquet ? $this->plans['student'][$this->selectedPlan]['banquet_price'] : 0;
            return $basePrice + $banquetPrice;
        } else {
            // 根據會員身分返回對應價格
            return $this->plans['general'][$this->selectedPlan]['prices'][$this->membershipType];
        }
    }

    public function getCurrentPlanName()
    {
        if ($this->userType === 'student') {
            $planName = $this->plans['student'][$this->selectedPlan]['name'];
            if ($this->includeBanquet) {
                $planName .= ' + 大會晚宴';
            }
            return $planName;
        } else {
            $membershipLabel = $this->getMembershipLabel();
            return $this->plans['general'][$this->selectedPlan]['name'] . ' (' . $membershipLabel . ')';
        }
    }

    public function getMembershipLabel()
    {
        switch ($this->membershipType) {
            case 'guest':
                return '訪客';
            case 'regular':
                return '一般會員';
            case 'premium':
                return '永久會員';
            case 'student':
                return '學生身分';
            default:
                return '訪客';
        }
    }

    public function getUserTypeLabel()
    {
        return $this->userType === 'student' ? '學生身分' : '一般身分';
    }

    private function createOrder($merchantTradeNo)
    {
        $totalAmount = $this->getCurrentPrice();
        $banquetFee = ($this->userType === 'student' && $this->includeBanquet)
            ? $this->plans['student'][$this->selectedPlan]['banquet_price']
            : 0;

        // 準備訂單詳細資訊
        $orderDetails = [
            'user_type' => $this->userType,
            'membership_type' => $this->membershipType,
            'plan_name' => $this->getCurrentPlanName(),
            'base_amount' => $this->userType === 'student'
                ? $this->plans['student'][$this->selectedPlan]['price']
                : $this->plans['general'][$this->selectedPlan]['prices'][$this->membershipType],
            'banquet_included' => $this->includeBanquet,
            'banquet_fee' => $banquetFee,
            'registration_date' => now()->toDateTimeString(),
        ];

        return Order::create([
            'user_id' => Auth::id(),
            'merchant_trade_no' => $merchantTradeNo,
            'status' => 'pending',
            'amount' => $totalAmount,
            'order_details' => $orderDetails,
            'registration_type' => $this->selectedPlan,
            'include_banquet' => $this->includeBanquet,
            'banquet_fee' => $banquetFee,
            'payment_method' => 'credit_card',
        ]);
    }

    public function checkout()
    {
        try {
            // 檢查用戶是否已登入
            if (!Auth::check()) {
                session()->flash('error', '請先登入後再進行付款');
                return redirect()->route('login');
            }

            // 檢查用戶是否已有未完成的訂單
            $existingOrder = Order::where('user_id', Auth::id())
                ->where('status', 'pending')
                ->first();

            if ($existingOrder) {
                session()->flash('error', '您已有未完成的訂單，請先完成付款或取消該訂單');
                return;
            }

            // 檢查用戶是否已有已付款的訂單
            $paidOrder = Order::where('user_id', Auth::id())
                ->where('status', 'paid')
                ->first();

            if ($paidOrder) {
                session()->flash('error', '您已經完成註冊繳費');
                return redirect()->route('payment.history');
            }

            require base_path('vendor/autoload.php');

            // 產生訂單編號
            $merchantTradeNo = 'REG' . time() . Auth::id();

            // 建立訂單記錄
            $order = $this->createOrder($merchantTradeNo);

            // 設定綠界參數
            $factory = new Factory([
                'hashKey' => config('ecpay.hash_key'),
                'hashIv' => config('ecpay.hash_iv'),
            ]);

            $autoSubmitFormService = $factory->create('AutoSubmitFormWithCmvService');

            $totalAmount = $this->getCurrentPrice();
            $totalAmount = $totalAmount;
            $planName = $this->getCurrentPlanName();

            $input = [
                'MerchantID' => config('ecpay.merchant_id'),
                'MerchantTradeNo' => $merchantTradeNo,
                'MerchantTradeDate' => date('Y/m/d H:i:s'),
                'PaymentType' => 'aio',
                'TotalAmount' => $totalAmount,
                'TradeDesc' => UrlService::ecpayUrlEncode($planName),
                'ItemName' => $planName . ' x 1',
                'ChoosePayment' => 'Credit',
                'EncryptType' => 1,
                'ReturnURL' => url('/ecpay/return'),
                'ClientBackURL' => url('/payment/success'),
                // 加入自訂參數
                'CustomField1' => $order->id, // 傳遞訂單ID
            ];

            Log::info('Creating ECPay payment', [
                'merchant_trade_no' => $merchantTradeNo,
                'return_url' => url('/ecpay/return'),
                'amount' => $totalAmount,
                'order_id' => $order->id ?? 'unknown'
            ]);
            // 根據配置檔案決定使用測試或正式環境
            $action = config('ecpay.test_mode') ?
                'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5' :
                'https://payment.ecpay.com.tw/Cashier/AioCheckOut/V5';

            // 將表單 HTML 儲存到 session
            $formHtml = $autoSubmitFormService->generate($input, $action);
            session(['ecpay_form' => $formHtml]);

            // 跳轉到專門顯示表單的頁面
            return redirect()->route('ecpay.form');
        } catch (\Exception $e) {
            session()->flash('error', '付款處理失敗：' . $e->getMessage());
        }
    }

    public function render()
    {
        return view('livewire.payment-component');
    }
}
