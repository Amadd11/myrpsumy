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
        Schema::create('referensis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rps_id')->constrained()->onDelete('cascade');
            $table->string('tipe')->default('utama'); // 'utama' atau 'tambahan'
            $table->string('penulis')->nullable();
            $table->string('judul');
            $table->string('tahun')->nullable();
            $table->string('penerbit')->nullable();
            $table->text('tautan')->nullable(); // jika berupa sumber online
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('referensis');
    }
};
