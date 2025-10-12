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
        'taksonomi',
        'bg_color',
    ];
    public function courses()
    {
        return $this->belongsToMany(
            Course::class,
            'course_cpl',
            'cpl_id',
            'course_id'
        );
    }

    // Relasi ke CPMK
    public function cpmks()
    {
        return $this->hasMany(CPMK::class);
    }
}
