<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rps extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'course_id',
        'dosen_id',
        'deskripsi',
        'materi_pembelajaran',
        'tgl_penyusunan',
        'tahun_ajaran',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'tahun_ajaran' => 'string',
    ];

    /**
     * Get the course that owns the RPS.
     */

    public function cpls()
    {
        return $this->belongsToMany(
            CPL::class,
            'rps_cpl',
            'rps_id',
            'cpl_id'
        );
    }
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
    public function cpmks()
    {
        return $this->hasMany(Cpmk::class);
    }

    public function evaluasis()
    {
        return $this->hasMany(Evaluasi::class);
    }

    public function tugas()
    {
        return $this->hasMany(Tugas::class);
    }

    public function rencanas()
    {
        return $this->hasMany(Rencana::class);
    }

    public function referensi()
    {
        return $this->hasMany(Referensi::class);
    }

    public function dosen()
    {
        return $this->belongsTo(Dosen::class);
    }
    public function subCpmks()
    {
        return $this->hasManyThrough(
            SubCPMK::class,
            Cpmk::class,
            'rps_id', // Foreign key di tabel cpmks yang mengarah ke courses
            'cpmk_id',   // Foreign key di tabel sub_cpmks yang mengarah ke cpmks
            'id',        // Local key di tabel courses
            'id'         // Local key di tabel cpmks
        );
    }
}
