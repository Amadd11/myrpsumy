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
        'bobot',
        'description',
        'taksonomi',
        'bg_color',
    ];
    public function rps(): BelongsToMany
    {
        return $this->belongsToMany(
            Rps::class,      // Model tujuan
            'rps_cpl',    // Nama tabel pivot
            'rps_id',     // Foreign key di pivot untuk model ini (Course)
            'cpl_id'         // Foreign key di pivot untuk model tujuan (Cpl)
        );
    }
    // Relasi ke CPMK
    public function cpmks()
    {
        return $this->hasMany(CPMK::class);
    }
}
