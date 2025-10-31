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
                'code' => 'CPL 1',
                'description' => 'Menganalisis teori dan konsep manajemen serta nilai Islam sebagai dasar pengambilan keputusan strategis di rumah sakit.',
                'taksonomi' => 'C4',
                'bg_color' => '#3B82F6', // Biru
            ],
            [
                'code' => 'CPL 2',
                'description' => 'Mengevaluasi kinerja dan daya saing rumah sakit berdasarkan analisis faktor internal dan eksternal berbasis bukti.',
                'taksonomi' => 'C5',
                'bg_color' => '#10B981', // Hijau
            ],
            [
                'code' => 'CPL 3',
                'description' => 'Merumuskan solusi terhadap masalah manajerial rumah sakit melalui kolaborasi lintas profesi dan pendekatan ilmiah.',
                'taksonomi' => 'C6',
                'bg_color' => '#F59E0B', // Kuning
            ],
            [
                'code' => 'CPL 4',
                'description' => 'Menyusun dan menyajikan hasil kajian ilmiah dalam format akademik, profesional, dan digital.',
                'taksonomi' => 'C6',
                'bg_color' => '#8B5CF6', // Ungu
            ],
            [
                'code' => 'CPL 5',
                'description' => 'Menciptakan inovasi manajerial yang meningkatkan mutu dan efisiensi pengelolaan rumah sakit menuju smart hospital.',
                'taksonomi' => 'C6',
                'bg_color' => '#EC4899', // Pink
            ],
            [
                'code' => 'CPL 6',
                'description' => 'Mengembangkan sistem pelayanan berbasis teknologi untuk memperkuat efektivitas dan integrasi layanan rumah sakit.',
                'taksonomi' => 'C6',
                'bg_color' => '#EF4444', // Merah
            ],
        ];

        foreach ($cpls as $cpl) {
            CPL::firstOrCreate(['code' => $cpl['code']], $cpl);
        }
    }
}
