<?php

namespace App\Listeners;

use App\Events\PaymentCancelled;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class UpdateOrderStatusToCancelled implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(PaymentCancelled $event): void
    {
        try {
            DB::beginTransaction();

            $order = $event->order;
            $reason = $event->reason;

            // 只有待付款的訂單才能取消
            if ($order->status !== 'pending') {
                Log::warning('Attempted to cancel non-pending order', [
                    'order_id' => $order->id,
                    'current_status' => $order->status
                ]);
                DB::commit();
                return;
            }

            // 更新訂單狀態為取消
            $order->update([
                'status' => 'cancelled',
                'notes' => $reason ?: '訂單已取消'
            ]);

            Log::info('Order status updated to cancelled', [
                'order_id' => $order->id,
                'user_id' => $order->user_id,
                'merchant_trade_no' => $order->merchant_trade_no,
                'reason' => $reason,
            ]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Failed to update order status to cancelled', [
                'order_id' => $event->order->id,
                'error' => $e->getMessage()
            ]);

            throw $e;
        }
    }

    /**
     * Handle a job failure.
     */
    public function failed(PaymentCancelled $event, \Throwable $exception): void
    {
        Log::error('UpdateOrderStatusToCancelled listener failed', [
            'order_id' => $event->order->id,
            'error' => $exception->getMessage(),
            'trace' => $exception->getTraceAsString()
        ]);
    }
}
