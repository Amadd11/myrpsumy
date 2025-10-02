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
        'title',
        'description',
        'bloom_level',
        'bg_color',
    ];
    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class, 'course_cpl');
    }

    // Relasi ke CPMK
    public function cpmks()
    {
        return $this->hasMany(CPMK::class);
    }
}
