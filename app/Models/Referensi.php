<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referensi extends Model
{
    use HasFactory;

    protected $table = 'referensis';

    protected $fillable = [
        'rps_id',
        'tipe',
        'referensi',
    ];

    /**
     * Relasi ke model Course
     */
      public function rps()
    {
        return $this->belongsTo(Rps::class);
    }
}
