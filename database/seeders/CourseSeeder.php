<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $courses = [
            [
                'name' => 'Manajemen Pelayanan Rumah Sakit',
                'name_en' => 'Hospital Service Management', // Jika ada field bahasa inggris
                'slug' => Str::slug('Manajemen Pelayanan Rumah Sakit'),
                'code' => 'MRS101',
                'sks' => '3',
                'semester' => '1',
            ],
            [
                'name' => 'Administrasi Rumah Sakit',
                'name_en' => 'Hospital Administration',
                'slug' => Str::slug('Administrasi Rumah Sakit'),
                'code' => 'ARS102',
                'sks' => '2',
                'semester' => '2',
            ],
            [
                'name' => 'Sistem Informasi Kesehatan',
                'name_en' => 'Health Information System',
                'slug' => Str::slug('Sistem Informasi Kesehatan'),
                'code' => 'SIK103',
                'sks' => '3',
                'semester' => '3',
            ],
            // Tambah lebih banyak
        ];

        foreach ($courses as $course) {
            Course::create($course);
        }
    }
}
