<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>付款結果</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-md p-8 mx-auto text-center bg-white rounded-lg shadow-md">

        <!-- 付款成功 -->
        @if(isset($order) && $order->status === 'paid')
            <div class="mb-6">
                <svg class="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h1 class="mb-4 text-2xl font-bold text-green-600">付款成功！</h1>
            <p class="mb-6 text-gray-600">您的註冊已完成，感謝您的購買。</p>

            @if($order)
                <div class="p-4 mb-6 text-left rounded-lg bg-green-50">
                    <h3 class="mb-2 font-semibold text-green-800">訂單資訊</h3>
                    <p class="text-sm text-green-700">訂單編號：{{ $order->merchant_trade_no }}</p>
                    <p class="text-sm text-green-700">付款金額：NT$ {{ number_format($order->amount) }}</p>
                    <p class="text-sm text-green-700">付款時間：{{ $order->payment_date ? $order->payment_date->format('Y-m-d H:i:s') : '處理中' }}</p>
                </div>
            @endif

            <div class="space-y-3">
                <a href="/" class="block w-full px-4 py-3 font-bold text-white transition duration-200 bg-green-600 rounded-lg hover:bg-green-700">
                    返回首頁
                </a>
                <a href="/dashboard" class="block w-full px-4 py-3 font-bold text-gray-800 transition duration-200 bg-gray-200 rounded-lg hover:bg-gray-300">
                    前往會員中心
                </a>
            </div>
        @endif

        <!-- 付款失敗 -->
        @if(isset($order) && $order->status === 'failed')
            <div class="mb-6">
                <svg class="w-16 h-16 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <h1 class="mb-4 text-2xl font-bold text-red-600">付款失敗</h1>
            <p class="mb-6 text-gray-600">很抱歉，您的付款未能成功處理。</p>

            @if($order && isset($order->ecpay_response['error_message']))
                <div class="p-4 mb-6 rounded-lg bg-red-50">
                    <p class="text-sm text-red-700">
                        <strong>錯誤原因：</strong>{{ $order->ecpay_response['error_message'] }}
                    </p>
                </div>
            @endif

            <div class="space-y-3">
                @if($order)
                    <form method="POST" action="{{ route('payment.retry', $order->id) }}">
                        @csrf
                        <button type="submit" class="block w-full px-4 py-3 font-bold text-white transition duration-200 bg-red-600 rounded-lg hover:bg-red-700">
                            重新付款
                        </button>
                    </form>
                @endif
                <a href="/" class="block w-full px-4 py-3 font-bold text-gray-800 transition duration-200 bg-gray-200 rounded-lg hover:bg-gray-300">
                    返回首頁
                </a>
                <a href="/payment/history" class="block w-full px-4 py-3 font-bold text-blue-800 transition duration-200 bg-blue-100 rounded-lg hover:bg-blue-200">
                    查看付款記錄
                </a>
            </div>
        @endif

        <!-- 付款取消 -->
        @if(isset($order) && $order->status === 'cancelled')
            <div class="mb-6">
                <svg class="w-16 h-16 mx-auto text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
            </div>
            <h1 class="mb-4 text-2xl font-bold text-yellow-600">付款已取消</h1>
            <p class="mb-6 text-gray-600">您已取消此次付款，如需要可重新嘗試。</p>

            <div class="space-y-3">
                @if($order)
                    <form method="POST" action="{{ route('payment.retry', $order->id) }}">
                        @csrf
                        <button type="submit" class="block w-full px-4 py-3 font-bold text-white transition duration-200 bg-yellow-600 rounded-lg hover:bg-yellow-700">
                            重新付款
                        </button>
                    </form>
                @endif
                <a href="/" class="block w-full px-4 py-3 font-bold text-gray-800 transition duration-200 bg-gray-200 rounded-lg hover:bg-gray-300">
                    返回首頁
                </a>
            </div>
        @endif

        <!-- 付款處理中 -->
        @if(isset($order) && $order->status === 'pending')
            <div class="mb-6">
                <svg class="w-16 h-16 mx-auto text-blue-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
            </div>
            <h1 class="mb-4 text-2xl font-bold text-blue-600">付款處理中</h1>
            <p class="mb-6 text-gray-600">您的付款正在處理中，請稍候...</p>

            <div class="space-y-3">
                <button onclick="location.reload()" class="block w-full px-4 py-3 font-bold text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700">
                    重新整理頁面
                </button>
                <a href="/payment/history" class="block w-full px-4 py-3 font-bold text-gray-800 transition duration-200 bg-gray-200 rounded-lg hover:bg-gray-300">
                    查看付款記錄
                </a>
            </div>
        @endif

        <!-- 找不到訂單 -->
        @if(!isset($order))
            <div class="mb-6">
                <svg class="w-16 h-16 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.563M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            </div>
            <h1 class="mb-4 text-2xl font-bold text-gray-600">找不到訂單</h1>
            <p class="mb-6 text-gray-600">很抱歉，找不到相關的訂單記錄。</p>

            <div class="space-y-3">
                <a href="/" class="block w-full px-4 py-3 font-bold text-white transition duration-200 bg-gray-600 rounded-lg hover:bg-gray-700">
                    返回首頁
                </a>
                <a href="/payment/history" class="block w-full px-4 py-3 font-bold text-gray-800 transition duration-200 bg-gray-200 rounded-lg hover:bg-gray-300">
                    查看付款記錄
                </a>
            </div>
        @endif

    </div>

    <!-- 自動重新整理處理中的訂單 -->
    @if(isset($order) && $order->status === 'pending')
        <script>
            // 10秒後自動重新整理
            setTimeout(function() {
                location.reload();
            }, 10000);
        </script>
    @endif
</body>
</html>
