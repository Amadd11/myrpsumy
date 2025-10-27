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
        Schema::create('tugas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rps_id')->constrained()->onDelete('cascade');
            $table->string('bentuk_penilaian')->nullable(); // contoh: Ujian online berupa kuis MyKlass
            $table->string('judul_penilaian')->nullable(); // contoh: UCPMK1: Kuis MyKlass
            $table->text('sub_cpmk')->nullable(); // contoh: Sub-CPMK1, Sub-CPMK2
            $table->text('deskripsi_penilaian')->nullable();
            $table->text('metode_penilaian')->nullable();
            $table->text('bentuk_dan_format_luaran')->nullable();
            $table->text('indikator_kriteria_bobot')->nullable();
            $table->text('jadwal_pelaksanaan')->nullable(); // contoh: Minggu ke 4 setelah perkuliahan
            $table->text('pustaka')->nullable();
            $table->text('lain_lain')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tugas');
    }
};
