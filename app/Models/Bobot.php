<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bobot extends Model
{
    //
    use HasFactory;

    /**
     * Kolom yang dapat diisi secara massal (mass assignable).
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'course_id',
        'name',
        'description',
        'bobot',
    ];

    /**
     * Mendefinisikan relasi "dimiliki oleh" (inverse one-to-many) ke model Course.
     * Setiap komponen penilaian dimiliki oleh satu mata kuliah.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}
