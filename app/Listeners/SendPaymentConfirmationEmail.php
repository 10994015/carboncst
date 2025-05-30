<?php

namespace App\Listeners;

use App\Events\PaymentSuccessful;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendPaymentConfirmationEmail
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
     * @param  \App\Events\PaymentSuccessful  $event
     * @return void
     */
    public function handle(PaymentSuccessful $event)
    {
        //
    }
}
