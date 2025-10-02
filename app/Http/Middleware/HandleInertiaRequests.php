<?php

namespace App\Http\Middleware;

use App\Models\Course; // 1. Jangan lupa impor model Course
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            // 2. TAMBAHKAN LOGIKA INI
            // Membagikan data mata kuliah ke semua halaman secara global.
            'semesterCourses' => function () {
                return Course::orderBy('semester')->orderBy('name')->get()
                    ->groupBy('semester')
                    ->mapWithKeys(function ($group, $semesterNumber) {
                        $courses = $group->map(fn($course) => [
                            'name' => $course->name,
                            'slug' => $course->slug,
                            'sks'  => $course->sks,
                        ]);
                        // Kunci objeknya adalah "Semester X"
                        return ['Semester ' . $semesterNumber => $courses];
                    });
            },
        ];
    }
}
