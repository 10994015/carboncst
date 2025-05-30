<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);

        // 檢查是否通過 ngrok 或其他 HTTPS 代理訪問
        if (
            request()->server('HTTP_X_FORWARDED_PROTO') === 'https' ||
            request()->server('HTTP_X_FORWARDED_SSL') === 'on' ||
            str_contains(request()->server('HTTP_HOST', ''), '.ngrok.io') ||
            str_contains(request()->server('HTTP_HOST', ''), '.ngrok-free.app')
        ) {
            URL::forceScheme('https');
            request()->server->set('HTTPS', 'on');
        }

        // 或者，如果您想在特定環境下強制使用 HTTPS
        if (config('app.env') === 'production' || config('app.force_https')) {
            URL::forceScheme('https');
        }
    }
}
