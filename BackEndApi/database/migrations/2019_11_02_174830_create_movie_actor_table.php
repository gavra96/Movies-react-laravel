<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMovieActorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movie_actor', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('movies_id');
            $table->unsignedBigInteger('actors_id');
            $table->foreign('movies_id')
                    ->references('id')->on('movies')
                    ->onDelete('cascade');
            $table->foreign('actors_id')
                    ->references('id')->on('actors')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movie_actor');
    }
}
