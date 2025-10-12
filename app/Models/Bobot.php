<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bobot extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'course_id',
        'name',
        'description',
        'bobot',
    ];

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}
