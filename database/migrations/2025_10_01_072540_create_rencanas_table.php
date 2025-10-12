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
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->foreignId('sub_cpmk_id')->unique()->constrained()->onDelete('cascade');
            $table->unsignedTinyInteger('week'); // Minggu ke-
            $table->text('materi_pembelajaran')->nullable(); // Materi Pembelajaran
            $table->string('metode')->nullable(); // Metode (Offline)
            $table->string('pengalaman_belajar')->nullable(); // Pengalaman Belajar (Online)
            $table->string('waktu')->nullable(); // Waktu
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
