{{-- resources/views/livewire/payment/order-detail.blade.php --}}
@extends('layouts.app')

@section('title', '訂單詳情')

@section('content')
<div class="max-w-4xl px-4 py-8 mx-auto">
    <div class="overflow-hidden bg-white rounded-lg shadow-lg">
        <!-- 頁面標題 -->
        <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div class="flex items-center justify-between">
                <h1 class="text-2xl font-bold text-gray-900">訂單詳情</h1>
                <a href="{{ route('payment.history') }}"
                   class="text-sm font-medium text-blue-600 hover:text-blue-800">
                    ← 返回付款記錄
                </a>
            </div>
        </div>

        <div class="p-6 space-y-8">
            <!-- 訂單狀態卡片 -->
            <div class="border rounded-lg p-4
                        @if($order->status === 'paid') bg-green-50 border-green-200
                        @elseif($order->status === 'pending') bg-yellow-50 border-yellow-200
                        @elseif($order->status === 'failed') bg-red-50 border-red-200
                        @else bg-gray-50 border-gray-200 @endif">
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-900">訂單狀態</h3>
                        <p class="text-2xl font-bold mt-1
                                  @if($order->status === 'paid') text-green-600
                                  @elseif($order->status === 'pending') text-yellow-600
                                  @elseif($order->status === 'failed') text-red-600
                                  @else text-gray-600 @endif">
                            {{ $order->status_name }}
                        </p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-gray-600">訂單編號</p>
                        <p class="font-mono text-lg font-semibold">{{ $order->merchant_trade_no }}</p>
                    </div>
                </div>
            </div>

            <!-- 基本資訊 -->
            <div>
                <h3 class="mb-4 text-lg font-semibold text-gray-900">基本資訊</h3>
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-600">訂單編號</label>
                            <p class="p-2 mt-1 font-mono text-sm bg-gray-100 rounded">{{ $order->merchant_trade_no }}</p>
                        </div>
                        @if($order->ecpay_trade_no)
                        <div>
                            <label class="block text-sm font-medium text-gray-600">綠界交易編號</label>
                            <p class="p-2 mt-1 font-mono text-sm bg-gray-100 rounded">{{ $order->ecpay_trade_no }}</p>
                        </div>
                        @endif
                        <div>
                            <label class="block text-sm font-medium text-gray-600">付款方式</label>
                            <p class="mt-1 text-sm">{{ $order->payment_method_name }}</p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-600">建立時間</label>
                            <p class="mt-1 text-sm">{{ $order->created_at->format('Y年m月d日 H:i:s') }}</p>
                        </div>
                        @if($order->payment_date)
                        <div>
                            <label class="block text-sm font-medium text-gray-600">付款時間</label>
                            <p class="mt-1 text-sm font-medium text-green-600">{{ $order->payment_date->format('Y年m月d日 H:i:s') }}</p>
                        </div>
                        @endif
                        <div>
                            <label class="block text-sm font-medium text-gray-600">總金額</label>
                            <p class="mt-1 text-xl font-bold text-red-600">NT$ {{ number_format($order->amount) }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 註冊資訊 -->
            <div>
                <h3 class="mb-4 text-lg font-semibold text-gray-900">註冊資訊</h3>
                <div class="p-6 rounded-lg bg-gray-50">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label class="block text-sm font-medium text-gray-600">註冊類型</label>
                            <p class="mt-1 text-lg font-semibold">{{ $order->registration_type_name }}</p>
                        </div>
                        @if(isset($order->order_details['user_type']))
                        <div>
                            <label class="block text-sm font-medium text-gray-600">身分別</label>
                            <p class="mt-1">{{ $order->order_details['user_type'] === 'student' ? '學生身分' : '一般身分' }}</p>
                        </div>
                        @endif
                        @if(isset($order->order_details['plan_name']))
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-gray-600">方案名稱</label>
                            <p class="mt-1 text-lg">{{ $order->order_details['plan_name'] }}</p>
                        </div>
                        @endif
                        @if($order->include_banquet)
                        <div class="md:col-span-2">
                            <div class="flex items-center p-3 bg-green-100 rounded-lg">
                                <svg class="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span class="font-medium text-green-800">已包含大會晚宴 (NT$ {{ number_format($order->banquet_fee) }})</span>
                            </div>
                        </div>
                        @endif
                    </div>
                </div>
            </div>

            <!-- 費用明細 -->
            <div>
                <h3 class="mb-4 text-lg font-semibold text-gray-900">費用明細</h3>
                <div class="p-6 rounded-lg bg-gray-50">
                    <div class="space-y-3">
                        @if(isset($order->order_details['base_amount']))
                        <div class="flex justify-between">
                            <span class="text-gray-700">基本註冊費</span>
                            <span class="font-semibold">NT$ {{ number_format($order->order_details['base_amount']) }}</span>
                        </div>
                        @endif
                        @if($order->banquet_fee > 0)
                        <div class="flex justify-between">
                            <span class="text-gray-700">大會晚宴費</span>
                            <span class="font-semibold">NT$ {{ number_format($order->banquet_fee) }}</span>
                        </div>
                        @endif
                        <hr class="border-gray-300">
                        <div class="flex justify-between text-lg font-bold">
                            <span class="text-gray-900">總計</span>
                            <span class="text-red-600">NT$ {{ number_format($order->amount) }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 付款資訊 (僅已付款訂單顯示) -->
            @if($order->status === 'paid' && $order->ecpay_response)
            <div>
                <h3 class="mb-4 text-lg font-semibold text-gray-900">付款資訊</h3>
                <div class="p-6 rounded-lg bg-green-50">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        @if(isset($order->ecpay_response['payment_type']))
                        <div>
                            <label class="block text-sm font-medium text-gray-600">付款方式</label>
                            <p class="mt-1">{{ $order->ecpay_response['payment_type'] }}</p>
                        </div>
                        @endif
                        @if(isset($order->ecpay_response['payment_date']))
                        <div>
                            <label class="block text-sm font-medium text-gray-600">付款時間</label>
                            <p class="mt-1">{{ $order->ecpay_response['payment_date'] }}</p>
                        </div>
                        @endif
                        @if(isset($order->ecpay_response['payment_type_charge_fee']) && $order->ecpay_response['payment_type_charge_fee'] > 0)
                        <div>
                            <label class="block text-sm font-medium text-gray-600">手續費</label>
                            <p class="mt-1">NT$ {{ $order->ecpay_response['payment_type_charge_fee'] }}</p>
                        </div>
                        @endif
                    </div>
                </div>
            </div>
            @endif

            <!-- 錯誤資訊 (僅失敗訂單顯示) -->
            @if($order->status === 'failed' && $order->ecpay_response)
            <div>
                <h3 class="mb-4 text-lg font-semibold text-gray-900">錯誤資訊</h3>
                <div class="p-6 rounded-lg bg-red-50">
                    @if(isset($order->ecpay_response['error_message']))
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-600">錯誤訊息</label>
                        <p class="mt-1 font-medium text-red-600">{{ $order->ecpay_response['error_message'] }}</p>
                    </div>
                    @endif
                    @if(isset($order->ecpay_response['return_code']))
                    <div>
                        <label class="block text-sm font-medium text-gray-600">錯誤代碼</label>
                        <p class="mt-1 font-mono">{{ $order->ecpay_response['return_code'] }}</p>
                    </div>
                    @endif
                </div>
            </div>
            @endif

            <!-- 備註 -->
            @if($order->notes)
            <div>
                <h3 class="mb-4 text-lg font-semibold text-gray-900">備註</h3>
                <div class="p-6 rounded-lg bg-gray-50">
                    <p class="text-gray-700">{{ $order->notes }}</p>
                </div>
            </div>
            @endif

            <!-- 操作按鈕 -->
            <div class="flex justify-between pt-6 border-t border-gray-200">
                <a href="{{ route('payment.history') }}"
                   class="px-6 py-2 font-medium text-gray-700 transition duration-150 ease-in-out bg-gray-300 rounded-lg hover:bg-gray-400">
                    返回付款記錄
                </a>

                <div class="space-x-3">
                    @if($order->status === 'failed')
                        <a href="{{ route('payment.form') }}"
                           class="px-6 py-2 font-medium text-white transition duration-150 ease-in-out bg-green-600 rounded-lg hover:bg-green-700">
                            重新付款
                        </a>
                    @endif

                    @if($order->status === 'paid')
                        <button onclick="window.print()"
                                class="px-6 py-2 font-medium text-white transition duration-150 ease-in-out bg-blue-600 rounded-lg hover:bg-blue-700">
                            列印收據
                        </button>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('styles')
<style>
@media print {
    .no-print {
        display: none !important;
    }

    body {
        -webkit-print-color-adjust: exact;
    }
}
</style>
@endsection
