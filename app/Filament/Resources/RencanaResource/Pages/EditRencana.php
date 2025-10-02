<?php

namespace App\Filament\Resources\RencanaResource\Pages;

use App\Filament\Resources\RencanaResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditRencana extends EditRecord
{
    protected static string $resource = RencanaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
