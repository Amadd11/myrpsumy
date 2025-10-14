<?php

namespace App\Http\Controllers;

use App\Models\CPL;
use Inertia\Inertia;
use App\Models\Bobot;
use Inertia\Response;
use App\Models\Course;
use App\Models\Rencana;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class RPSController extends Controller
{
    /**
     * Display the RPS dashboard index.
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
     * Display the RPS for a specific course.
     */
    public function show(string $semesterSlug, string $courseSlug): Response
    {
        $course = Course::with(['cpls', 'cpmks.subCpmks'])
            ->where('slug', $courseSlug)
            ->firstOrFail();

        $rencanas = Rencana::with('subCpmk.cpmk')
            ->whereHas('subCpmk.cpmk', fn($query) => $query->where('course_id', $course->id))
            ->orderBy('week')
            ->get();

        $bobots = $this->formatBobotsForCourse($course->id);

        return Inertia::render('CourseRPS', [
            'course' => [
                'name' => $course->name,
                'code' => $course->code,
                'sks' => $course->sks,
                'deskripsi' => $course->deskripsi,
                'semester' => 'Semester ' . $course->semester,
            ],
            'allCpls' => CPL::orderBy('code')->get(),
            'relatedCpls' => $course->cpls->map(fn($cpl) => [
                'id' => $cpl->id,
                'code' => $cpl->code,
                'description' => $cpl->description,
            ]),
            'evaluasi' => $course->evaluasi,
            'tugas' => $course->tugas,
            'referensi' => $course->referensi,
            'initialCpmks' => $course->cpmks,
            'initialSubCpmks' => $course->cpmks->flatMap->subCpmks,
            'initialRencanas' => $rencanas,
            'initialBobots' => $bobots,
            'initialCourseInfo' => [
                'penanggungJawab' => $course->dosen->name ?? 'Belum Diatur',
                'tahunAjaran' => $course->tahun_ajaran ?? '2024/2025',
                'deskripsi' => $course->deskripsi ?? 'Belum ada deskripsi',
            ],
        ]);
    }

    /**
     * Format bobots for a specific course.
     */
    private function formatBobotsForCourse(int $courseId): Collection
    {
        return Bobot::with('course')
            ->where('course_id', $courseId)
            ->get()
            ->map(fn(Bobot $bobot) => [
                'id' => $bobot->id,
                'courseName' => $bobot->course->name ?? '-',
                'name' => $bobot->name,
                'description' => $bobot->description,
                'bobot' => $bobot->bobot,
            ]);
    }
}
