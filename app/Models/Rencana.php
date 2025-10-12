<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Rencana extends Model
{
    //
    use HasFactory;

    protected $table = 'rencanas';

    protected $fillable = [
        'sub_cpmk_id',
        'course_id',
        'week',
        'materi_pembelajaran',
        'metode',
        'pengalaman_belajar',
        'waktu',
    ];

    /**
     * Mendefinisikan relasi "dimiliki oleh" (inverse one-to-one) ke model SubCpmk.
     * Setiap Rencana dimiliki oleh satu SubCpmk.
     */
    public function subCpmk(): BelongsTo
    {
        return $this->belongsTo(SubCpmk::class,);
    }
}
