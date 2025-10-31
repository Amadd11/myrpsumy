<?php

namespace App\Http\Controllers;

use App\Models\CPL;
use App\Models\Rps;
use App\Models\Course;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

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
                return [
                    'Semester ' . $semesterNumber => $group->map(fn(Course $course) => [
                        'name' => $course->name,
                        'slug' => $course->slug,
                        'sks'  => $course->sks,
                    ]),
                ];
            });

        return Inertia::render('Index', [
            'semesterCourses' => $semesterCourses,
        ]);
    }

    /**
     * Halaman detail RPS per mata kuliah
     */
    public function show(string $courseSlug): Response
    {
        try {
            $course = Course::where('slug', $courseSlug)->firstOrFail();

            $rps = Rps::with([
                'dosen',
                'cpmks.subCpmks',
                'rencanas.subCpmk.cpmk',
                'cpls' => fn($q) => $q->withPivot('bobot'),
                'evaluasis.cpl',
                'evaluasis.cpmk',
                'evaluasis.subCpmk'
            ])
                ->where('course_id', $course->id)
                ->first();

            return Inertia::render('CourseRPS', [
                'course' => [
                    'name' => $course->name,
                    'code' => $course->code,
                    'sks' => $course->sks,
                    'semester' => 'Semester ' . $course->semester,
                ],
                'initialCourseInfo' => [
                    'penanggungJawab' => $rps?->dosen?->name ?? 'Belum Diatur',
                    'tahunAjaran' => $rps?->tahun_ajaran ?? '-',
                    'deskripsi' => $rps?->deskripsi ?? 'Deskripsi belum tersedia.',
                    'file_pdf' => $rps?->file_pdf ? asset('storage/' . $rps->file_pdf) : null,
                    'materiPembelajaran' => $rps?->materi_pembelajaran ?? null,
                    'tglPenyusunan' => $rps?->tgl_penyusunan
                        ? Carbon::parse($rps->tgl_penyusunan)->translatedFormat('d F Y')
                        : null,
                ],
                'allCpls' => CPL::orderBy('code')->get(),
                'relatedCpls' => $rps?->cpls->map(fn($cpl) => [
                    'id' => $cpl->id,
                    'code' => $cpl->code,
                    'description' => $cpl->description,
                    'taksonomi' => $cpl->taksonomi,
                    'bg_color' => $cpl->bg_color,
                    'bobot' => $cpl->pivot?->bobot,
                ]) ?? collect(),
                'initialCpmks'    => $rps?->cpmks ?? collect(),
                'initialSubCpmks' => $rps?->subCpmks ?? collect(),
                'initialRencanas' => $rps?->rencanas ?? collect(),
                'evaluasi' => $rps?->evaluasis ?? collect(),
                'tugas' => $rps?->tugas ?? null,
                'referensi' => $rps?->referensi ?? null,
            ]);
        } catch (\Exception $e) {
            Log::error('Error in RPS show: ' . $e->getMessage(), [
                'course_slug' => $courseSlug,
                'trace' => $e->getTraceAsString(),
            ]);

            return Inertia::render('CourseRPS', [
                'course' => [
                    'name' => 'Tidak ditemukan',
                    'code' => '-',
                    'sks' => 0,
                    'semester' => '-',
                ],
                'initialCourseInfo' => [
                    'penanggungJawab' => 'Belum Diatur',
                    'tahunAjaran' => '-',
                    'deskripsi' => 'Deskripsi belum tersedia.',
                    'file_pdf' => null,
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
