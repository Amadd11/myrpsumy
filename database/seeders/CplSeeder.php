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
                'code' => 'CPL1MARS',
                'description' => 'Menguasai teori dan konsep manajemen, prinsip bisnis visioner serta pelayanan yang islami',
                'taksonomi' => 'C1',
                'bg_color' => '#3B82F6', // Biru
            ],
            [
                'code' => 'CPL2MARS',
                'description' => 'Mampu menganalisis faktor internal dan eksternal rumah sakit dengan menggunakan pendekatan Evidence Based Management Practice untuk sustainability organization',
                'taksonomi' => 'C2',
                'bg_color' => '#10B981', // Hijau
            ],
            [
                'code' => 'CPL3MARS',
                'description' => 'Mampu menerapkan hasil kajian kritis dan kajian analisis untuk menyelesaikan masalah perumahsakitan dan proses pengambilan keputusan, melalui kolaborasi inter, multi dan trans-disiplin',
                'taksonomi' => 'C3',
                'bg_color' => '#F59E0B', // Kuning
            ],
            [
                'code' => 'CPL4MARS',
                'description' => 'Mampu mengintegrasikan inisiatif, argumen saintifik, data hasil penelitian, serta mampu mengkomunikasikan melalui berbagai media ilmiah',
                'taksonomi' => 'C4',
                'bg_color' => '#8B5CF6', // Ungu
            ],
            [
                'code' => 'CPL5MARS',
                'description' => 'Mampu menghasilkan nilai tambah dalam pengelolaan rumah sakit yang siap menuju smart hospital',
                'taksonomi' => 'C5',
                'bg_color' => '#EC4899', // Pink
            ],
            [
                'code' => 'CPL6MARS',
                'description' => 'Mampu mengembangkan pelayanan rumah sakit yang efektivitas dan efisiensi menggunakan pendekatan teknologi',
                'taksonomi' => 'C6',
                'bg_color' => '#EF4444', // Merah
            ],
        ];

        foreach ($cpls as $cpl) {
            CPL::firstOrCreate(['code' => $cpl['code']], $cpl);
        }
    }
}
