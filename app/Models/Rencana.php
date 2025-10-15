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
        'rps_id',
        'sub_cpmk_id',
        'week',
        'indikator',
        'kriteria_penilaian',
        'teknik_penilaian',
        'materi_pembelajaran',
        'metode',
        'deskripi_belajar',
        'waktu',
        'bobot_penilaian',
    ];

    /**
     * Mendefinisikan relasi "dimiliki oleh" (inverse one-to-one) ke model SubCpmk.
     * Setiap Rencana dimiliki oleh satu SubCpmk.
     */
    public function subCpmk(): BelongsTo
    {
        return $this->belongsTo(SubCpmk::class,);
    }

    public function rps()
    {
        return $this->belongsTo(Rps::class);
    }
}
