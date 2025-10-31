<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $courses = [
            // ====== Semester 1 (Kuning) ======
            [
                'name' => 'Literasi Digital Akademik',
                'name_en' => 'Literacy Digital Academic',
                'slug' => Str::slug('Literasi Digital Akademik'),
                'code' => 'MARS-1001',
                'sks' => 2,
                'semester' => 1,
            ],
            [
                'name' => 'Keuangan dan Akuntansi Rumah Sakit',
                'name_en' => 'Hospital Finance and Accounting',
                'slug' => Str::slug('Pengantar Manajemen Keuangan'),
                'code' => 'MARS-1002',
                'sks' => 2,
                'semester' => 1,
            ],
            [
                'name' => 'Metodologi Penelitian Pelayanan Kesehatan',
                'name_en' => 'Research Methodology in Healthcare',
                'slug' => Str::slug('Metodologi Penelitian Pelayanan Kesehatan'),
                'code' => 'MARS-1101',
                'sks' => 3,
                'semester' => 1,
            ],
            [
                'name' => 'Digitalisasi RS',
                'name_en' => 'Hospital Digitalizations',
                'slug' => Str::slug('Digitalisasi RS'),
                'code' => 'MARS-1102',
                'sks' => 3,
                'semester' => 1,
            ],
            [
                'name' => 'Manajemen Keuangan Strategis RS',
                'name_en' => 'Strategic Financial Management of Hospitals',
                'slug' => Str::slug('Manajemen Keuangan RS'),
                'code' => 'MARS-1203',
                'sks' => 3,
                'semester' => 1,
            ],
            [
                'name' => 'Manajemen Mutu dan Pelayanan RS',
                'name_en' => 'Hospital Quality and Service Management',
                'slug' => Str::slug('Manajemen Pelayanan RS'),
                'code' => 'MARS-1204',
                'sks' => 3,
                'semester' => 1,
            ],

            // ====== Semester 2 (Hijau) ======
            [
                'name' => 'Manajemen Sumber Daya Manusia, Perilaku dan Kepemimpinan RS',
                'name_en' => 'Hospital Human Resources Management, Behaviour, and Leadership',
                'slug' => Str::slug('Manajemen Sumber Daya Manusia Perilaku dan Kepemimpinan RS'),
                'code' => 'MARS-2105',
                'sks' => 3,
                'semester' => 2,
            ],
            [
                'name' => 'Manajemen Pencegahan dan Pengendalian Infeksi RS',
                'name_en' => 'Hospital Infection Prevention and Control Management',
                'slug' => Str::slug('Manajemen Pencegahan dan Pengendalian Infeksi RS'),
                'code' => 'MARS-2106',
                'sks' => 2,
                'semester' => 2,
            ],
            [
                'name' => 'Entrepreneurship dan Pemberdayaan Masyarakat Kesehatan',
                'name_en' => 'Health Entrepreneurship and Community Empowerment',
                'slug' => Str::slug('Entrepreneurship dan Pemberdayaan Masyarakat Kesehatan'),
                'code' => 'MARS-2107',
                'sks' => 3,
                'semester' => 2,
            ],
            [
                'name' => 'Manajemen Pemasaran Jasa Kesehatan',
                'name_en' => 'Health Services Marketing Management',
                'slug' => Str::slug('Manajemen Pemasaran Jasa Kesehatan'),
                'code' => 'MARS-2208',
                'sks' => 3,
                'semester' => 2,
            ],
            [
                'name' => 'Manajemen Pelayanan Khusus RS',
                'name_en' => 'Hospital Specific Services Management',
                'slug' => Str::slug('Manajemen Pelayanan Khusus RS'),
                'code' => 'MARS-2209',
                'sks' => 3,
                'semester' => 2,
            ],
            [
                'name' => 'Manajemen Strategik RS',
                'name_en' => 'Hospital Strategic Management',
                'slug' => Str::slug('Manajemen Strategik RS'),
                'code' => 'MARS-2210',
                'sks' => 3,
                'semester' => 2,
            ],
            [
                'name' => 'Publikasi Ilmiah',
                'name_en' => 'Scientific Publication',
                'slug' => Str::slug('Publikasi Ilmiah'),
                'code' => 'MARS-2211',
                'sks' => 2,
                'semester' => 2,
            ],
            [
                'name' => 'Manajemen Bencana (Elektif)',
                'name_en' => 'Disaster Management (Elective)',
                'slug' => Str::slug('Manajemen Bencana (Elektif)'),
                'code' => 'MARS-3112A',
                'sks' => 2,
                'semester' => 3,
            ],
            [
                'name' => 'Akreditasi Layanan Primer (Elektif)',
                'name_en' => 'Primary Health Services Accreditation (Elective)',
                'slug' => Str::slug('Akreditasi Layanan Primer (Elektif)'),
                'code' => 'MARS-3112B',
                'sks' => 2,
                'semester' => 3,
            ],
            [
                'name' => 'Akreditasi RS (Elektif)',
                'name_en' => 'Hospital Accreditation (Elective)',
                'slug' => Str::slug('Akreditasi RS (Elektif)'),
                'code' => 'MARS-3112C',
                'sks' => 2,
                'semester' => 3,
            ],
            [
                'name' => 'Pemasaran Digital (Elektif)',
                'name_en' => 'Digital Marketing (Elective)',
                'slug' => Str::slug('Pemasaran Digital (Elektif)'),
                'code' => 'MARS-3112D',
                'sks' => 2,
                'semester' => 3,
            ],
            [
                'name' => 'Hukum & Kebijakan Kesehatan (Elektif)',
                'name_en' => 'Health Law and Policy (Elective)',
                'slug' => Str::slug('Hukum & Kebijakan Kesehatan (Elektif)'),
                'code' => 'MARS-3112E',
                'sks' => 2,
                'semester' => 3,
            ],
            [
                'name' => 'Akreditasi RS Shariah (Elektif)',
                'name_en' => 'Hospital Shariah Accreditation (Elective)',
                'slug' => Str::slug('Akreditasi RS Shariah (Elektif)'),
                'code' => 'MARS-3112F',
                'sks' => 2,
                'semester' => 3,
            ],
            [
                'name' => 'Residensi',
                'name_en' => 'Residency',
                'slug' => Str::slug('Residensi'),
                'code' => 'MARS-3113',
                'sks' => 2,
                'semester' => 3,
            ],
            [
                'name' => 'Tesis',
                'name_en' => 'Thesis',
                'slug' => Str::slug('Tesis'),
                'code' => 'MARS-3114',
                'sks' => 6,
                'semester' => 3,
            ],
        ];

        foreach ($courses as $course) {
            Course::create($course);
        }
    }
}
