<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $dosen = Role::firstOrCreate(['name' => 'dosen']);
        $admin = Role::firstOrCreate(['name' => 'admin']);

        $admin = User::create([
            'name' => 'Admin',
            'email' => 'prodimarsumy@mail.com',
            'password' => Hash::make('marsumy21'),
        ]);

        $admin->assignRole('admin');

        // Membuat perawat
        $dosen = User::create([
            'name' => 'Dosen',
            'email' => 'dosenmarsumy@mail.com',
            'password' => Hash::make('dosenmars'),
        ]);

        // Menetapkan role 'perawat' ke pengguna ini
        $dosen->assignRole('dosen');
    }
}
