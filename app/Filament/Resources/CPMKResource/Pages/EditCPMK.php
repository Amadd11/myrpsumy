<?php

namespace App\Filament\Resources\CPMKResource\Pages;

use App\Filament\Resources\CPMKResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCPMK extends EditRecord
{
    protected static string $resource = CPMKResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
