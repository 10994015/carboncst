{{-- resources/views/payment/form.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>選擇付費方案</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    @livewireStyles
</head>
<body class="bg-gray-100">
    <div class="min-h-screen py-8">
        <livewire:payment-component />
    </div>
    @livewireScripts
</body>
</html>

{{-- resources/views/payment/redirect.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>跳轉到綠界付款</title>
    <meta charset="utf-8">
</head>
<body>
    <div style="text-align: center; padding: 50px;">
        <h3>正在跳轉到綠界付款頁面...</h3>
        <p>請稍候，不要關閉瀏覽器</p>
    </div>

    {!! $formHtml !!}

    <script>
        // 自動提交表單
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('form');
            if (form) {
                form.submit();
            }
        });
    </script>
</body>
</html>

{{-- resources/views/payment/success.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>付款成功</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="flex items-center justify-center min-h-screen">
        <div class="max-w-md p-6 mx-auto text-center bg-white rounded-lg shadow-lg">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <h2 class="mb-2 text-2xl font-bold text-gray-800">付款成功！</h2>
            <p class="mb-4 text-gray-600">感謝您的購買，服務已開通。</p>
            <div class="p-4 mb-4 rounded-lg bg-gray-50">
                <p class="text-sm text-gray-600">訂單編號: {{ $merchantTradeNo }}</p>
                <p class="text-sm text-gray-600">付款金額: NT$ {{ number_format($amount) }}</p>
            </div>
            <a href="/" class="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700">
                返回首頁
            </a>
        </div>
    </div>
</body>
</html>

{{-- resources/views/payment/failed.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>付款失敗</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="flex items-center justify-center min-h-screen">
        <div class="max-w-md p-6 mx-auto text-center bg-white rounded-lg shadow-lg">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full">
                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </div>
            <h2 class="mb-2 text-2xl font-bold text-gray-800">付款失敗</h2>
            <p class="mb-4 text-gray-600">{{ $errorMsg }}</p>
            <div class="p-4 mb-4 rounded-lg bg-gray-50">
                <p class="text-sm text-gray-600">訂單編號: {{ $merchantTradeNo }}</p>
            </div>
            <div class="space-x-2">
                <a href="/payment" class="px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700">
                    重新付款
                </a>
                <a href="/" class="px-4 py-2 font-bold text-white bg-gray-600 rounded hover:bg-gray-700">
                    返回首頁
                </a>
            </div>
        </div>
    </div>
</body>
</html>
