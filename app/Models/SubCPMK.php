<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SubCPMK extends Model
{
    //
    use HasFactory;

    protected $table = 'sub_cpmks';

    protected $fillable = [
        'cpmk_id',
        'code',
        'description',
        'bloom_level',
    ];

    /**
     * Relasi Inverse One-to-Many: Setiap SubCpmk dimiliki oleh satu Cpmk.
     */
    public function cpmk(): BelongsTo
    {
        return $this->belongsTo(CPMK::class);
    }
}
