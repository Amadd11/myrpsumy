<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo; // 1. Impor tipe relasi
use Illuminate\Database\Eloquent\Relations\HasMany;   // 1. Impor tipe relasi

// PERBAIKAN: Nama kelas diubah menjadi PascalCase
class Cpmk extends Model
{
    use HasFactory;

    protected $table = 'cpmks';

    protected $fillable = [
        'rps_id',
        'cpl_id',
        'bobot',
        'title',
        'description',
        'bg_color',
    ];

    // Relasi ke Course
    // PERBAIKAN: Menambahkan return type hint : BelongsTo
    public function rps(): BelongsTo
    {
        return $this->belongsTo(Rps::class);
    }

    // Relasi ke CPL
    // PERBAIKAN: Menambahkan return type hint : BelongsTo
    public function cpl(): BelongsTo
    {
        return $this->belongsTo(Cpl::class);
    }

    // Relasi ke SubCPMK
    // PERBAIKAN: Menambahkan return type hint : HasMany
    public function subCpmks(): HasMany
    {
        return $this->hasMany(SubCpmk::class, 'cpmk_id');
    }
}
