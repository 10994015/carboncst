<?php

namespace App\Listeners;

use App\Events\PaymentFailed;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class UpdateOrderStatusToFailed
{
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

            // 不再拋出異常，因為沒有 queue 重試機制
            // throw $e;
        }
    }
}
