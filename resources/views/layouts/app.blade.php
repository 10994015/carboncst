<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', '臺灣碳材料學會Carbon Society of Taiwan') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Scripts -->
        <link rel="stylesheet" href="/css/app.css">
        <link rel="stylesheet" href="/slick/slick.css">
        <link rel="stylesheet" href="/slick/slick-theme.css">
        <link rel="stylesheet" href="/css/style.css">
       
        

    </head>
    <body class="font-sans antialiased">
        <div class="min-h-screen ">

            <header class="shadow " id="header" >
                <a href="/" class="logo"><img src="/images/logo.png" alt="臺灣碳材料學會"></a>
                <nav>
                    <a href="/">最新消息</a>
                    <a href="/">關於學會</a>
                    <a href="/">學會獎項</a>
                    <a href="/">加入會員</a>
                    <a href="/">『碳才』資料庫</a>
                    <a href="/">論壇&研討會資訊</a>
                    <a href="/">聯絡我們</a>
                </nav>
            </header>

            <!-- Page Content -->
            <main>
                {{ $slot }}
            </main>
        </div>

        <script src="/js/jquery-1.11.0.min.js"></script>
        <script src="/js/jquery-migrate-1.2.1.min.js"></script>
        <script src="/js/app.js"></script>
        <script src="/slick/slick.min.js"></script>
        @stack('scripts')
    </body>
</html>
