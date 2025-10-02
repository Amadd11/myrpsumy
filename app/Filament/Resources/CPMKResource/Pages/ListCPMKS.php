<?php

namespace App\Filament\Resources\CPMKResource\Pages;

use App\Filament\Resources\CPMKResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCPMKS extends ListRecords
{
    protected static string $resource = CPMKResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
