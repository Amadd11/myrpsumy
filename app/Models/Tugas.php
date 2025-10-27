<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tugas extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'rps_id',
        'bentuk_penilaian',
        'judul_penilaian',
        'sub_cpmk',
        'deskripsi_penilaian',
        'metode_penilaian',
        'bentuk_dan_format_luaran',
        'indikator_kriteria_bobot',
        'jadwal_pelaksanaan',
        'pustaka',
        'lain_lain',
    ];

    public function rps()
    {
        return $this->belongsTo(Rps::class);
    }
}
