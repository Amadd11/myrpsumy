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
        'course_id',
        'cpl_id',
        'title',
        'description',
        'border_color',
        'bg_color',
    ];

    // Relasi ke Course
    // PERBAIKAN: Menambahkan return type hint : BelongsTo
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
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
