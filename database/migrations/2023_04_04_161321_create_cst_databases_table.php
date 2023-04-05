<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCstDatabasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cst_databases', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('units');
            $table->string('job_title');
            $table->string('field', 2000)->comment('研究領域');
            $table->string('button_1')->nullable();
            $table->string('link_1', 2000)->nullable();
            $table->string('button_2')->nullable();
            $table->string('link_2', 2000)->nullable();
            $table->string('button_3')->nullable();
            $table->string('link_3', 2000)->nullable();
            $table->string('button_4')->nullable();
            $table->string('link_4', 2000)->nullable();
            $table->string('button_5')->nullable();
            $table->string('link_5', 2000)->nullable();
            $table->boolean('hidden')->default(false);
            $table->foreignIdFor(User::class, 'created_by')->nullable();
            $table->foreignIdFor(User::class, 'updated_by')->nullable();
            $table->softDeletes();
            $table->foreignIdFor(User::class, 'deleted_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cst_databases');
    }
}