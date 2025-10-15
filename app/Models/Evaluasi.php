<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Evaluasi extends Model
{
    use HasFactory;

    protected $table = 'evaluasis';

    protected $fillable = [
        'rps_id',
        'cpl_id',
        'cpmk_id',
        'sub_cpmk_id',
        'minggu_ke',
        'bobot_sub_cpmk',
        'indikator',
        'bentuk_penilaian',
        'bobot_cpmk',
    ];

    /**
     * Relasi ke model Course
     */
    public function rps(): BelongsTo
    {
        return $this->belongsTo(Rps::class);
    }
    public function cpl(): BelongsTo
    {
        return $this->belongsTo(CPL::class);
    }

    /**
     * Get the CPMK associated with the evaluation.
     */
    public function cpmk(): BelongsTo
    {
        return $this->belongsTo(Cpmk::class);
    }

    /**
     * Get the Sub-CPMK associated with the evaluation.
     */
    public function subCpmk(): BelongsTo
    {
        return $this->belongsTo(SubCpmk::class);
    }
}
