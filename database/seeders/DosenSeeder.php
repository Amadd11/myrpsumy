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
        //
        $dosens = [
            [
                'name' => 'Dr. Ahmad Fauzi, M.Kes', // Kalau ada auth
            ],
            [
                'name' => 'Dr. Siti Nurjanah, M.Kes',
            ],
            // Tambah lebih banyak kalau perlu
        ];

        foreach ($dosens as $dosen) {
            Dosen::create($dosen);
        }
    }
}
