<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('membership_type', [
                'guest',        // 訪客/陌生人
                'regular',      // 一般會員
                'premium',      // 永久會員
                'student'       // 學生身分
            ])->default('guest')->after('email');

            // 如果需要索引以提升查詢效能
            $table->index('membership_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropIndex(['membership_type']);
            $table->dropColumn('membership_type');
        });
    }
};
