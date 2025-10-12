<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluasi extends Model
{
    use HasFactory;

    protected $table = 'evaluasis';

    protected $fillable = [
        'course_id',
        'komponen_penilaian',
        'teknik_penilaian',
        'kriteria_penilaian',
        'waktu_pelaksanaan',
        'bobot',
    ];

    /**
     * Relasi ke model Course
     */
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
