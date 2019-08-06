<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title')->default("");
            $table->string('phonetic')->default("");
            $table->string('author')->default("");
            $table->integer('volume')->default(1);
            $table->integer('chapter')->default(1);
            $table->boolean('completed')->default(false);
            $table->integer('user_id')->references('id')->on('users')->unsigned()->index();
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
        Schema::dropIfExists('books');
    }
}
