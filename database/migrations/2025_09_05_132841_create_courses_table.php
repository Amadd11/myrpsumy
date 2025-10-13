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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nama mata kuliah, cth: "Manajemen Pelayanan RS"
            $table->string('slug')->unique(); // Untuk URL, cth: "manajemen-pelayanan-rs"
            $table->string('code')->unique(); // Kode mata kuliah, cth: "MRS102"
            $table->text('deskripsi')->nullable(); // Kode mata kuliah, cth: "MRS102"
            $table->string('sks');
            $table->string('semester'); // Semester 1, 2, atau 3
            $table->string('penanggung_jawab')->nullable();
            $table->string('tahun_ajaran')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
