<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAwardprogramFileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('awardprograms', function (Blueprint $table){
            $table->string('file', 2000)->nullable()->after('link');
            $table->string('file_mime')->nullable()->after('file');
            $table->integer('file_size')->nullable()->after('file_mime');
            $table->string('file_name', 2000)->default('檔案')->after('file_size');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('awardprograms', function (Blueprint $table){
            $table->dropColumn('file');
            $table->dropColumn('file_mime');
            $table->dropColumn('file_size');
            $table->dropColumn('file_name');
        });
    }
}