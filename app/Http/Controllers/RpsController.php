<?php

namespace App\Http\Controllers;

use App\Models\CPL;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Course;
use App\Models\Rps;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class RPSController extends Controller
{
    /**
     * Halaman daftar RPS (index)
     */
    public function index(): Response
    {
        $semesterCourses = Course::orderBy('semester')->get()
            ->groupBy('semester')
            ->mapWithKeys(function (Collection $group, string $semesterNumber) {
                return ['Semester ' . $semesterNumber => $group->map(fn(Course $course) => [
                    'name' => $course->name,
                    'slug' => $course->slug,
                    'sks'  => $course->sks,
                ])];
            });

        return Inertia::render('Index', [
            'semesterCourses' => $semesterCourses,
        ]);
    }

    /**
     * Halaman detail RPS per mata kuliah
     */
    public function show(string $courseSlug, ?string $tahunAjaran = null): Response
    {
        try {
            // Ambil data course berdasarkan slug
            $course = Course::where('slug', $courseSlug)->firstOrFail();

            if (!$tahunAjaran) {
                $latestTahun = Rps::where('course_id', $course->id)
                    ->orderBy('tahun_ajaran', 'desc') // DESC biar ambil yang paling baru dulu
                    ->value('tahun_ajaran'); // Cuma ambil kolom tahun, lebih efisien
                $tahunAjaran = $latestTahun ?? date('Y') . '/' . (date('Y') + 1);
            }

            // Ambil RPS jika ada
            $rps = Rps::with(['dosen', 'cpmks.subCpmks', 'rencanas.subCpmk.cpmk', 'cpls'])
                ->where('course_id', $course->id)
                ->where('tahun_ajaran', $tahunAjaran)
                ->first();

            return Inertia::render('CourseRPS', [
                // Informasi mata kuliah
                'course' => [
                    'name' => $course->name,
                    'code' => $course->code,
                    'sks' => $course->sks,
                    'semester' => 'Semester ' . $course->semester,
                ],

                // Informasi umum RPS (default kalau kosong)
                'initialCourseInfo' => [
                    'penanggungJawab' => $rps?->dosen?->name ?? 'Belum Diatur',
                    'tahunAjaran' => $rps?->tahun_ajaran ?? $tahunAjaran,
                    'deskripsi' => $rps?->deskripsi ?? 'Deskripsi belum tersedia.',
                    'materiPembelajaran' => $rps?->materi_pembelajaran ?? null,
                    'tglPenyusunan' => $rps?->tgl_penyusunan
                        ? \Carbon\Carbon::parse($rps->tgl_penyusunan)->translatedFormat('d F Y')
                        : null,
                ],

                // Data CPL, CPMK, Rencana, dsb
                'allCpls' => CPL::orderBy('code')->get(),
                'relatedCpls' => $rps?->cpls->map(fn($cpl) => [
                    'id' => $cpl->id,
                    'bobot' => $cpl->bobot,
                    'code' => $cpl->code,
                    'description' => $cpl->description,
                ]) ?? collect(),

                'initialCpmks'    => $rps?->cpmks ?? collect(),
                'initialSubCpmks' => $rps?->subCpmks ?? collect(),
                'initialRencanas' => $rps?->rencanas ?? collect(),

                'evaluasi'  => $rps?->evaluasi ?? null,
                'tugas'     => $rps?->tugas ?? null,
                'referensi' => $rps?->referensi ?? null,
            ]);
        } catch (\Exception $e) {
            Log::error('Error in RPS show: ' . $e->getMessage(), [
                'course_slug' => $courseSlug,
                'trace' => $e->getTraceAsString(),
            ]);

            // Tidak redirect ke halaman lain, tetap di halaman RPS dengan data default
            return Inertia::render('CourseRPS', [
                'course' => [
                    'name' => 'Tidak ditemukan',
                    'code' => '-',
                    'sks' => 0,
                    'semester' => '-',
                ],
                'initialCourseInfo' => [
                    'penanggungJawab' => 'Belum Diatur',
                    'tahunAjaran' => $tahunAjaran ?? '-',
                    'deskripsi' => 'Deskripsi belum tersedia.',
                    'materiPembelajaran' => null,
                    'tglPenyusunan' => null,
                ],
                'allCpls' => collect(),
                'relatedCpls' => collect(),
                'initialCpmks' => collect(),
                'initialSubCpmks' => collect(),
                'initialRencanas' => collect(),
                'evaluasi' => null,
                'tugas' => null,
                'referensi' => null,
            ]);
        }
    }
}
