<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referensi extends Model
{
    use HasFactory;

    protected $table = 'referensis';

    protected $fillable = [
        'course_id',
        'tipe',
        'penulis',
        'judul',
        'tahun',
        'penerbit',
        'tautan',
    ];

    /**
     * Relasi ke model Course
     */
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
