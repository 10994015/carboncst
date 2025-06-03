<?php

namespace App\Listeners;

use App\Events\PaymentSuccessful;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class UpdateOrderStatusToPaid
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
    public function handle(PaymentSuccessful $event): void
    {
        try {
            DB::beginTransaction();

            $order = $event->order;
            $paymentData = $event->paymentData;

            // 檢查訂單是否已經處理過（避免重複處理）
            if ($order->status === 'paid') {
                Log::info('Order already processed as paid', ['order_id' => $order->id]);
                DB::commit();
                return;
            }

            // 更新訂單狀態為已付款
            $order->update([
                'status' => 'paid',
                'ecpay_trade_no' => $paymentData['ecpay_trade_no'] ?? '',
                'payment_date' => now(),
                'ecpay_response' => [
                    'ecpay_trade_no' => $paymentData['ecpay_trade_no'] ?? '',
                    'payment_date' => $paymentData['payment_date'] ?? '',
                    'payment_type' => $paymentData['payment_type'] ?? '',
                    'payment_type_charge_fee' => $paymentData['payment_type_charge_fee'] ?? '',
                    'trade_amt' => $paymentData['trade_amt'] ?? 0,
                    'raw_data' => $paymentData['raw_data'] ?? [],
                    'processed_at' => now()->toDateTimeString(),
                ]
            ]);

            Log::info('Order status updated to paid', [
                'order_id' => $order->id,
                'user_id' => $order->user_id,
                'merchant_trade_no' => $order->merchant_trade_no,
                'amount' => $order->amount,
            ]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            Log::error('Failed to update order status to paid', [
                'order_id' => $event->order->id,
                'error' => $e->getMessage()
            ]);

            // 不再拋出異常，因為沒有 queue 重試機制
            // throw $e;
        }
    }
}
