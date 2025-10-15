<?php

namespace Database\Seeders;

use App\Models\CPL;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CplSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cpls = [
            [
                'code' => 'CPL01',
                'bobot' => '20%',
                'description' => 'Mahasiswa mampu merancang sistem manajemen pelayanan rumah sakit yang efektif.',
                'taksonomi' => 'Kognitif', // Asumsi field taksonomi
                'bg_color' => '#3B82F6', // Warna untuk UI
            ],
            [
                'code' => 'CPL02',
                'bobot' => '20%',
                'description' => 'Mahasiswa mampu menganalisis regulasi dan etika dalam administrasi rumah sakit.',
                'taksonomi' => 'Afektif',
                'bg_color' => '#10B981',
            ],
            [
                'code' => 'CPL03',
                'bobot' => '20%',
                'description' => 'Mahasiswa mampu menerapkan teknologi informasi dalam manajemen kesehatan.',
                'taksonomi' => 'Psikomotorik',
                'bg_color' => '#F59E0B',
            ],
            // Tambah lebih banyak
        ];

        foreach ($cpls as $cpl) {
            CPL::create($cpl);
        }
    }
}
