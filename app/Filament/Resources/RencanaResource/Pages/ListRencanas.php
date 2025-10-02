<?php

namespace App\Filament\Resources\RencanaResource\Pages;

use App\Filament\Resources\RencanaResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListRencanas extends ListRecords
{
    protected static string $resource = RencanaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
