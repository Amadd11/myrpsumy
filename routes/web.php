<?php

use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\RpsController;
use App\Http\Controllers\ProfileController;

// routes/web.php
Route::get('/', [RPSController::class, 'index']);


Route::get('/kurikulum', function () {
    return Inertia::render('Kurikulum');
});

Route::get('/referensi', function () {
    return Inertia::render('Referensi');
});

Route::get('/deskripsi-mata-kuliah', function () {
    return Inertia::render('DeskripsiMataKuliah');
});
Route::get('/cpmk', function () {
    return Inertia::render('CPMK');
});

Route::get('/capaian-pembelajaran', function () {
    return Inertia::render('CPL');
});

Route::get('/sub-cpmk', function () {
    return Inertia::render('SubCPMK');
});
Route::get('/bobot', function () {
    return Inertia::render('Bobot');
});
Route::get('/metode-evaluasi', function () {
    return Inertia::render('MetodeEvaluasi');
});
Route::get('/rencana-kegiatan-pembelajaran', function () {
    return Inertia::render('RencanaKegiatanPembelajaran');
});

Route::get('/rps/{courseSlug}/{tahunAjaran?}', [RPSController::class, 'show'])->name('rps.show');
require __DIR__ . '/auth.php';
