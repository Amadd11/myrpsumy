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

        Schema::create('evaluasis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rps_id')->constrained()->onDelete('cascade');
            $table->foreignId('cpl_id')->nullable()->constrained('cpls')->nullOnDelete();
            $table->foreignId('cpmk_id')->nullable()->constrained('cpmks')->nullOnDelete();
            $table->foreignId('sub_cpmk_id')->nullable()->constrained('sub_cpmks')->nullOnDelete();
            $table->string('week')->nullable();
            $table->unsignedTinyInteger('bobot_sub_cpmk')->nullable();
            $table->text('indikator')->nullable();
            $table->text('bentuk_penilaian')->nullable();
            $table->unsignedTinyInteger('bobot_cpmk')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evaluasis');
    }
};
