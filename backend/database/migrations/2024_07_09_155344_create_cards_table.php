<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('set');
            $table->string('image_url');
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('cards');
    }
};
