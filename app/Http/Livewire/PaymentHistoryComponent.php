<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithPagination;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;

class PaymentHistoryComponent extends Component
{
    use WithPagination;

    public $search = '';
    public $statusFilter = '';
    public $sortBy = 'created_at';
    public $sortDirection = 'desc';
    public $selectedOrder = null;
    public $showOrderDetail = false;

    protected $queryString = [
        'search' => ['except' => ''],
        'statusFilter' => ['except' => ''],
        'sortBy' => ['except' => 'created_at'],
        'sortDirection' => ['except' => 'desc'],
    ];

    public function mount()
    {
        // 檢查用戶是否已登入
        if (!Auth::check()) {
            return redirect()->route('login');
        }
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function updatingStatusFilter()
    {
        $this->resetPage();
    }

    public function sortBy($field)
    {
        if ($this->sortBy === $field) {
            $this->sortDirection = $this->sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            $this->sortBy = $field;
            $this->sortDirection = 'asc';
        }
        $this->resetPage();
    }

    public function showDetail($orderId)
    {
        $this->selectedOrder = Order::where('id', $orderId)
            ->where('user_id', Auth::id())
            ->first();

        if ($this->selectedOrder) {
            $this->showOrderDetail = true;
        }
    }

    public function closeDetail()
    {
        $this->showOrderDetail = false;
        $this->selectedOrder = null;
    }

    public function retryPayment($orderId)
    {
        $order = Order::where('id', $orderId)
            ->where('user_id', Auth::id())
            ->where('status', 'failed')
            ->first();

        if ($order) {
            // 重新導向到付款頁面，可以考慮重新使用該訂單
            session()->flash('info', '正在重新處理付款...');
            return redirect()->route('payment.form');
        }
    }

    public function cancelOrder($orderId)
    {
        $order = Order::where('id', $orderId)
            ->where('user_id', Auth::id())
            ->where('status', 'pending')
            ->first();

        if ($order) {
            $order->update(['status' => 'cancelled']);
            session()->flash('success', '訂單已取消');
        }
    }

    public function getOrdersProperty()
    {
        $query = Order::where('user_id', Auth::id());

        // 搜尋功能
        if ($this->search) {
            $query->where(function ($q) {
                $q->where('merchant_trade_no', 'like', '%' . $this->search . '%')
                    ->orWhere('ecpay_trade_no', 'like', '%' . $this->search . '%')
                    ->orWhereJsonContains('order_details->plan_name', $this->search);
            });
        }

        // 狀態篩選
        if ($this->statusFilter) {
            $query->where('status', $this->statusFilter);
        }

        // 排序
        $query->orderBy($this->sortBy, $this->sortDirection);

        return $query->paginate(10);
    }

    public function render()
    {
        $orders = $this->orders;

        // 統計資料
        $statistics = [
            'total' => Order::where('user_id', Auth::id())->count(),
            'paid' => Order::where('user_id', Auth::id())->where('status', 'paid')->count(),
            'pending' => Order::where('user_id', Auth::id())->where('status', 'pending')->count(),
            'failed' => Order::where('user_id', Auth::id())->where('status', 'failed')->count(),
            'total_amount' => Order::where('user_id', Auth::id())->where('status', 'paid')->sum('amount'),
        ];

        return view('livewire.payment-history-component', compact('orders', 'statistics'));
    }
}
