<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class CPL extends Model
{
    //
    use HasFactory;

    protected $table = 'cpls';

    protected $fillable = [
        'code',
        'description',
        'taksonomi',
        'bg_color',
    ];

    public function rps(): BelongsToMany
    {
        return $this->belongsToMany(
            Rps::class,
            'rps_cpl',
            'rps_id',
            'cpl_id'
        );
    }
    // Relasi ke CPMK
    public function cpmks()
    {
        return $this->hasMany(CPMK::class);
    }
}
