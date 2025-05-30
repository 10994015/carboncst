<?php

return [
    /*
    |--------------------------------------------------------------------------
    | ECPay 金流設定
    |--------------------------------------------------------------------------
    */

    // 商店代號
    'merchant_id' => env('ECPAY_MERCHANT_ID', '2000132'),

    // HashKey
    'hash_key' => env('ECPAY_HASH_KEY', '5294y06JbISpM5x9'),

    // HashIV
    'hash_iv' => env('ECPAY_HASH_IV', 'v77hoKGq4kWxNNIS'),

    // 測試模式
    'test_mode' => env('ECPAY_TEST_MODE', true),

    // API URLs
    'urls' => [
        'test' => [
            'aio_check_out' => 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5',
            'query_trade_info' => 'https://payment-stage.ecpay.com.tw/Cashier/QueryTradeInfo/V5',
        ],
        'production' => [
            'aio_check_out' => 'https://payment.ecpay.com.tw/Cashier/AioCheckOut/V5',
            'query_trade_info' => 'https://payment.ecpay.com.tw/Cashier/QueryTradeInfo/V5',
        ],
    ],
];
