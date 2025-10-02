<?php

namespace App\Filament\Resources\SubCPMKResource\Pages;

use App\Filament\Resources\SubCPMKResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSubCPMKS extends ListRecords
{
    protected static string $resource = SubCPMKResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
