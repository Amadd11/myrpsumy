<?php

namespace Database\Seeders;

use App\Models\Dosen;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DosenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dosens = [
            ['name' => 'Prof. Dr. dr. Arlina Dewi, M.Kes'],
            ['name' => 'Dr. Firman Pribadi, M.Si'],
            ['name' => 'Dr. Qurratul Aini, SKG., M.Kes'],
            ['name' => 'Dr. Elsye Maria Rosa, M.Kep'],
            ['name' => 'Dr. Kusbaryanto, M.Kes'],
            ['name' => 'Dr. Mahendro Prasetyo Kusumo, M.M.'],
            ['name' => 'Dr. Merita Arini, MMR.'],
        ];

        foreach ($dosens as $dosen) {
            Dosen::firstOrCreate($dosen);
        }
    }
}
