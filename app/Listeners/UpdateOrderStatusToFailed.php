<?php

namespace App\Listeners;

use App\Events\PaymentFailed;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class UpdateOrderStatusToFailed implements ShouldQueue
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
    public function handle(PaymentFailed $event): void
    {
        try {
            DB::beginTransaction();

            $order = $event->order;
            $errorData = $event->errorData;

            // 更新訂單狀態為失敗
            $order->update([
                'status' => 'failed',
                'ecpay_response' => [
                    'error_message' => $errorData['error_message'] ?? 'Unknown error',
                    'return_code' => $errorData['return_code'] ?? '',
                    'raw_data' => $errorData['raw_data'] ?? [],
                    'failed_at' => now()->toDateTimeString(),
                ]
            ]);

            Log::info('Order status updated to failed', [
                'order_id' => $order->id,
                'user_id' => $order->user_id,
                'merchant_trade_no' => $order->merchant_trade_no,
                'error_message' => $errorData['error_message'] ?? 'Unknown error',
            ]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Failed to update order status to failed', [
                'order_id' => $event->order->id,
                'error' => $e->getMessage()
            ]);

            throw $e;
        }
    }

    /**
     * Handle a job failure.
     */
    public function failed(PaymentFailed $event, \Throwable $exception): void
    {
        Log::error('UpdateOrderStatusToFailed listener failed', [
            'order_id' => $event->order->id,
            'error' => $exception->getMessage(),
            'trace' => $exception->getTraceAsString()
        ]);
    }
}
