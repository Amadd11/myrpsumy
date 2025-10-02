<?php

namespace App\Filament\Resources\CPLResource\Pages;

use App\Filament\Resources\CPLResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCPLS extends ListRecords
{
    protected static string $resource = CPLResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
