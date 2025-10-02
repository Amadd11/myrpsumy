<?php

namespace App\Filament\Resources\SubCPMKResource\Pages;

use App\Filament\Resources\SubCPMKResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSubCPMK extends EditRecord
{
    protected static string $resource = SubCPMKResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
