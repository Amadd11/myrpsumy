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
        'kriteria_teknik',
        'materi_pembelajaran',
        'luring',
        'daring',
        'bobot_penilaian',
    ];

    public function subCpmk(): BelongsTo
    {
        return $this->belongsTo(SubCPMK::class,);
    }

    public function rps()
    {
        return $this->belongsTo(Rps::class);
    }
}
