<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tugas extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'rps_id',
        'tugas',
    ];

    public function rps()
    {
        return $this->belongsTo(Rps::class);
    }
}
