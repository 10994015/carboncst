<?php

namespace App\Listeners;

use App\Events\PaymentFailed;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendPaymentFailedNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\PaymentFailed  $event
     * @return void
     */
    public function handle(PaymentFailed $event)
    {
        //
    }
}
