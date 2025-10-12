<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Course extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'code',
        'deskripsi',
        'sks',
        'semester',
        'penanggung_jawab',
        'tahun_ajaran',
        'icon_name',
    ];

    /**
     * Relasi ke CPMK
     */
    public function cpmks()
    {
        return $this->hasMany(CPMK::class);
    }

    public function evaluasi()
    {
        return $this->hasMany(Evaluasi::class);
    }
    public function bobot()
    {
        return $this->hasMany(Bobot::class);
    }

    public function tugas()
    {
        return $this->hasMany(Tugas::class);
    }

    public function rencana()
    {
        return $this->hasMany(Rencana::class);
    }

    public function referensi()
    {
        return $this->hasMany(Referensi::class);
    }

    public function cpls(): BelongsToMany
    {
        return $this->belongsToMany(
            CPL::class,      // Model tujuan
            'course_cpl',    // Nama tabel pivot
            'course_id',     // Foreign key di pivot untuk model ini (Course)
            'cpl_id'         // Foreign key di pivot untuk model tujuan (Cpl)
        );
    }

    public function subCpmks()
    {
        return $this->hasManyThrough(
            SubCPMK::class,
            Cpmk::class,
            'course_id', // Foreign key di tabel cpmks yang mengarah ke courses
            'cpmk_id',   // Foreign key di tabel sub_cpmks yang mengarah ke cpmks
            'id',        // Local key di tabel courses
            'id'         // Local key di tabel cpmks
        );
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
}
