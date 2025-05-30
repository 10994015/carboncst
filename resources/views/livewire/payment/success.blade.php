<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>付款成功</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-md p-8 mx-auto text-center bg-white rounded-lg shadow-md">
        <div class="mb-6">
            <svg class="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>

        <h1 class="mb-4 text-2xl font-bold text-gray-800">付款成功！</h1>

        <p class="mb-6 text-gray-600">{{ $message }}</p>

        <div class="space-y-3">
            <a href="/" class="block w-full px-4 py-3 font-bold text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700">
                返回首頁
            </a>
            <a href="/dashboard" class="block w-full px-4 py-3 font-bold text-gray-800 transition duration-200 bg-gray-200 rounded-lg hover:bg-gray-300">
                前往會員中心
            </a>
        </div>
    </div>
</body>
</html>
