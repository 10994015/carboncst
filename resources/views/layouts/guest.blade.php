<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', '臺灣碳材料學會Carbon Society of Taiwan') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Scripts -->
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/slick/slick.css">
    <link rel="stylesheet" href="/slick/slick-theme.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/payment.css">
    <link rel="stylesheet" href="/css/auth.css">

    @livewireStyles

</head>

<body class="font-sans antialiased">
    <div class="min-h-screen">

        @include('components.header')
        @include('components.md-nav')

        <!-- Page Content -->
        <main>
            {{ $slot }}
        </main>

        @include('components.footer')
    </div>
    @livewireScripts
    <script src="/js/jquery-1.11.0.min.js"></script>
    <script src="/js/jquery-migrate-1.2.1.min.js"></script>
    <script src="/js/app.js"></script>
    <script src="/slick/slick.min.js"></script>
    <script src="/js/header.js"></script>
    @stack('scripts')
</body>

</html>
