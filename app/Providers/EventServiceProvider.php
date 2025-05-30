<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

// 引入 Events 和 Listeners
use App\Events\PaymentSuccessful;
use App\Events\PaymentFailed;
use App\Events\PaymentCancelled;
use App\Listeners\UpdateOrderStatusToPaid;
use App\Listeners\UpdateOrderStatusToFailed;
use App\Listeners\UpdateOrderStatusToCancelled;
use App\Listeners\SendPaymentConfirmationEmail;
use App\Listeners\SendPaymentFailedNotification;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],

        // 付款成功事件
        PaymentSuccessful::class => [
            UpdateOrderStatusToPaid::class,
            SendPaymentConfirmationEmail::class, // 可選：發送確認郵件
        ],

        // 付款失敗事件
        PaymentFailed::class => [
            UpdateOrderStatusToFailed::class,
            SendPaymentFailedNotification::class, // 可選：發送失敗通知
        ],

        // 付款取消事件
        PaymentCancelled::class => [
            UpdateOrderStatusToCancelled::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
