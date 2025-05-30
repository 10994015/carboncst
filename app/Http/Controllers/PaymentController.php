<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Ecpay\Sdk\Factories\Factory;
use App\Models\Order;
use App\Models\User;

// 引入 Events
use App\Events\PaymentSuccessful;
use App\Events\PaymentFailed;
use App\Events\PaymentCancelled;

class PaymentController extends Controller
{
    /**
     * 綠界付款完成後的回調處理
     */
    public function ecpayReturn(Request $request)
    {
        log::info('ECPay Return Callback Received', $request->all());
        log::info('ECPay Return Callback Received', $request->all());
        log::info('ECPay Return Callback Received', $request->all());
        log::info('ECPay Return Callback Received', $request->all());
        log::info('ECPay Return Callback Received', $request->all());
        try {
            // 建立綠界工廠實例
            $factory = new Factory([
                'hashKey' => config('ecpay.hash_key'),
                'hashIv' => config('ecpay.hash_iv'),
            ]);

            $checkoutResponse = $factory->create('CheckoutResponseService');

            // 取得回傳的資料
            $feedback = $checkoutResponse->get($request->all());

            // 記錄回調資料
            Log::info('ECPay Return Callback', $feedback);

            // 根據交易編號查找訂單
            $order = Order::where('merchant_trade_no', $feedback['MerchantTradeNo'] ?? '')->first();

            if (!$order) {
                Log::error('Order not found for MerchantTradeNo: ' . ($feedback['MerchantTradeNo'] ?? 'N/A'));
                return response('0|Order not found');
            }

            // 檢查付款狀態
            if (isset($feedback['RtnCode']) && $feedback['RtnCode'] == '1') {
                // 觸發付款成功事件
                $this->handleSuccessfulPayment($feedback, $order);
                return response('1|OK');
            } else {
                // 觸發付款失敗事件
                $this->handleFailedPayment($feedback, $order);
                return response('0|' . ($feedback['RtnMsg'] ?? 'Payment failed'));
            }
        } catch (\Exception $e) {
            Log::error('ECPay Return Error: ' . $e->getMessage());
            return response('0|Exception occurred');
        }
    }

    /**
     * 付款成功頁面
     */
    public function paymentSuccess(Request $request)
    {
        $user = auth()->user();
        $latestOrder = null;

        if ($user) {
            $latestOrder = Order::where('user_id', $user->id)
                ->where('status', 'paid')
                ->latest()
                ->first();
        }

        return view('livewire.payment.success', [
            'message' => '付款成功！您的註冊已完成。',
            'order' => $latestOrder
        ]);
    }

    /**
     * 付款記錄頁面
     */
    public function paymentHistory(Request $request)
    {
        $user = auth()->user();

        if (!$user) {
            return redirect()->route('login');
        }

        $orders = Order::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return view('livewire.payment.history', compact('orders'));
    }

    /**
     * 付款結果頁面
     */
    public function paymentResult(Request $request)
    {
        $rtnCode = $request->get('RtnCode');

        if ($rtnCode == '1') {
            return view('livewire.payment.success', [
                'message' => '付款成功！感謝您的購買。'
            ]);
        } else {
            return view('livewire.payment.failed', [
                'message' => '付款失敗，請重新嘗試。',
                'error' => $request->get('RtnMsg', '未知錯誤')
            ]);
        }
    }

    /**
     * 訂單詳情頁面
     */
    public function orderDetail($id)
    {
        $user = auth()->user();

        if (!$user) {
            return redirect()->route('login');
        }

        $order = Order::where('id', $id)
            ->where('user_id', $user->id)
            ->firstOrFail();

        return view('livewire.payment.order-detail', compact('order'));
    }

    /**
     * 手動取消訂單
     */
    public function cancelOrder(Request $request, $id)
    {
        $user = auth()->user();

        if (!$user) {
            return redirect()->route('login');
        }

        try {
            $order = Order::where('id', $id)
                ->where('user_id', $user->id)
                ->where('status', 'pending')
                ->firstOrFail();

            // 觸發付款取消事件
            PaymentCancelled::dispatch($order, '用戶手動取消訂單');

            return response()->json([
                'success' => true,
                'message' => '訂單已成功取消'
            ]);
        } catch (\Exception $e) {
            Log::error('Cancel order error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => '取消訂單失敗，請稍後再試'
            ], 500);
        }
    }

    /**
     * 處理付款成功的邏輯 - 觸發事件
     */
    private function handleSuccessfulPayment($feedback, Order $order)
    {
        try {
            // 準備付款資料
            $paymentData = [
                'ecpay_trade_no' => $feedback['TradeNo'] ?? '',
                'payment_date' => $feedback['PaymentDate'] ?? '',
                'payment_type' => $feedback['PaymentType'] ?? '',
                'payment_type_charge_fee' => $feedback['PaymentTypeChargeFee'] ?? '',
                'trade_amt' => $feedback['TradeAmt'] ?? 0,
                'raw_data' => $feedback,
            ];

            // 觸發付款成功事件
            PaymentSuccessful::dispatch($order, $paymentData);

            Log::info('Payment successful event dispatched', [
                'order_id' => $order->id,
                'user_id' => $order->user_id,
                'trade_no' => $feedback['MerchantTradeNo'] ?? '',
                'ecpay_trade_no' => $feedback['TradeNo'] ?? '',
                'amount' => $feedback['TradeAmt'] ?? 0,
            ]);
        } catch (\Exception $e) {
            Log::error('Handle successful payment error: ' . $e->getMessage(), [
                'order_id' => $order->id,
                'feedback' => $feedback
            ]);
            throw $e;
        }
    }

    /**
     * 處理付款失敗的邏輯 - 觸發事件
     */
    private function handleFailedPayment($feedback, Order $order)
    {
        try {
            // 準備錯誤資料
            $errorData = [
                'error_message' => $feedback['RtnMsg'] ?? 'Unknown error',
                'return_code' => $feedback['RtnCode'] ?? '',
                'raw_data' => $feedback,
            ];

            // 觸發付款失敗事件
            PaymentFailed::dispatch($order, $errorData);

            Log::warning('Payment failed event dispatched', [
                'order_id' => $order->id,
                'user_id' => $order->user_id,
                'trade_no' => $feedback['MerchantTradeNo'] ?? '',
                'error_message' => $feedback['RtnMsg'] ?? 'Unknown error',
                'return_code' => $feedback['RtnCode'] ?? '',
            ]);
        } catch (\Exception $e) {
            Log::error('Handle failed payment error: ' . $e->getMessage(), [
                'order_id' => $order->id,
                'feedback' => $feedback
            ]);
            throw $e;
        }
    }

    /**
     * 批量處理過期的待付款訂單
     */
    public function cancelExpiredOrders()
    {
        try {
            // 取消超過 30 分鐘未付款的訂單
            $expiredOrders = Order::where('status', 'pending')
                ->where('created_at', '<', now()->subMinutes(30))
                ->get();

            foreach ($expiredOrders as $order) {
                // 觸發付款取消事件
                PaymentCancelled::dispatch($order, '付款超時自動取消');
            }

            Log::info('Expired orders cancelled', [
                'count' => $expiredOrders->count()
            ]);

            return response()->json([
                'success' => true,
                'cancelled_count' => $expiredOrders->count()
            ]);
        } catch (\Exception $e) {
            Log::error('Cancel expired orders error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
