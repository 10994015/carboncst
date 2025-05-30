<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>跳轉到付款頁面</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-md p-8 mx-auto text-center bg-white rounded-lg shadow-md">
        <div class="mb-6">
            <svg class="w-12 h-12 mx-auto text-blue-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>

        <h1 class="mb-4 text-xl font-bold text-gray-800">正在跳轉到付款頁面...</h1>
        <p class="mb-4 text-gray-600">請稍候，系統正在為您處理付款資訊</p>
        <p class="text-sm text-gray-500">如果頁面沒有自動跳轉，請點擊下方按鈕</p>
    </div>

    <!-- 綠界自動提交表單 -->
    {!! $formHtml !!}
</body>
</html>
