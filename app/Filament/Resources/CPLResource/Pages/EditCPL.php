<?php

namespace App\Filament\Resources\CPLResource\Pages;

use App\Filament\Resources\CPLResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCPL extends EditRecord
{
    protected static string $resource = CPLResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
