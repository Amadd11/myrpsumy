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
        Schema::create('rencanas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rps_id')->constrained()->onDelete('cascade');
            $table->foreignId('sub_cpmk_id')->unique()->constrained()->onDelete('cascade');
            $table->string('week')->nullable();
            $table->text('indikator')->nullable();
            $table->text('kriteria_teknik')->nullable();
            $table->text('materi_pembelajaran');
            $table->text('luring')->nullable();
            $table->text('daring')->nullable();
            $table->unsignedBigInteger('bobot_penilaian')->nullable();;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rencanas');
    }
};
