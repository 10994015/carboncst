<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserFieldsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            Schema::table('users', function (Blueprint $table) {
                // 是否為學生 (預設為 false)
                $table->boolean('is_student')->default(false)->after('email_verified_at');

                // 學校名稱 (可為空，因為非學生不需要填寫)
                $table->string('school')->nullable()->after('is_student');

                // 生日 (可為空)
                $table->date('birthday')->nullable()->after('school');

                // 學號 (可為空，因為非學生不需要填寫)
                $table->string('student_id')->nullable()->after('birthday');

                // 為學號建立索引，方便查詢
                $table->index('student_id');
            });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            // 移除索引
            $table->dropIndex(['student_id']);

            // 移除欄位
            $table->dropColumn([
                'is_student',
                'school',
                'birthday',
                'student_id'
            ]);
        });
    }
}
