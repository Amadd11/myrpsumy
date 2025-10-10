<?php

namespace App\Http\Controllers;

use App\Models\CPL;
use Inertia\Inertia;
use App\Models\Bobot;
use Inertia\Response;
use App\Models\Course;
use App\Models\Rencana;

class RPSController extends Controller
{
    public function index()
    {
        $courses = Course::orderBy('semester')->get()
            ->groupBy('semester')
            ->mapWithKeys(function ($group, $semesterNumber) {
                $courses = $group->map(function ($course) {
                    return [
                        'name' => $course->name,
                        'slug' => $course->slug,
                        'sks'  => $course->sks,
                    ];
                });
                return ['Semester ' . $semesterNumber => $courses];
            });

        return Inertia::render('Index', [
            'semesterCourses' => $courses,
        ]);
    }

    public function show(string $semesterSlug, string $courseSlug): Response
    {
        $course = Course::with(['cpls', 'cpmks.subCpmks'])
            ->where('slug', $courseSlug)
            ->firstOrFail();

        // Ambil rencana pembelajaran berdasarkan course -> cpmk -> sub_cpmk
        $rencanas = Rencana::with('subCpmk.cpmk')
            ->whereHas('subCpmk.cpmk', function ($query) use ($course) {
                $query->where('course_id', $course->id);
            })
            ->orderBy('week')
            ->get();
        $bobots = Bobot::with('course')
            ->where('course_id', $course->id)
            ->get()
            ->map(function ($bobot) {
                return [
                    'id' => $bobot->id,
                    'courseName' => $bobot->course->name ?? '-', // <- kirim nama course
                    'name' => $bobot->name,
                    'description' => $bobot->description,
                    'bobot' => $bobot->bobot,
                ];
            });


        return Inertia::render('CourseRPS', [
            'course' => [
                'name' => $course->name,
                'code' => $course->code,
                'sks' => $course->sks,
                'semester' => 'Semester ' . $course->semester,
            ],
            'allCpls' => CPL::orderBy('code')->get(), // semua CPL
            'relatedCpls' => $course->cpls->map(fn($cpl) => [
                'id' => $cpl->id,
                'code' => $cpl->code,
                'description' => $cpl->description,
            ]),
            'initialCpmks' => $course->cpmks,
            'initialSubCpmks' => $course->cpmks->flatMap->subCpmks,
            'initialRencanas' => $rencanas,
            'initialBobots' => $bobots,
            'initialCourseInfo' => [
                'penanggungJawab' => $course->penanggung_jawab ?? 'Belum Diatur',
                'tahunAjaran' => $course->tahun_ajaran ?? '2024/2025',
            ]
        ]);
    }
}
