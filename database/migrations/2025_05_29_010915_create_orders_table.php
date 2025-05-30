<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('merchant_trade_no')->unique(); // 綠界交易編號
            $table->string('ecpay_trade_no')->nullable(); // 綠界系統交易編號
            $table->enum('status', ['pending', 'paid', 'failed', 'cancelled'])->default('pending');
            $table->decimal('amount', 10, 2); // 總金額
            $table->json('order_details'); // 訂單詳細資訊 (JSON格式)
            $table->enum('registration_type', ['early_bird', 'regular']); // 註冊類型
            $table->boolean('include_banquet')->default(false); // 是否包含晚宴
            $table->decimal('banquet_fee', 8, 2)->default(0); // 晚宴費用
            $table->enum('payment_method', ['credit_card', 'atm', 'cvs'])->default('credit_card'); // 付款方式
            $table->timestamp('payment_date')->nullable(); // 付款完成時間
            $table->json('ecpay_response')->nullable(); // 綠界回應資料
            $table->text('notes')->nullable(); // 備註
            $table->timestamps();

            // 索引
            $table->index(['user_id', 'status']);
            $table->index('merchant_trade_no');
            $table->index('payment_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
