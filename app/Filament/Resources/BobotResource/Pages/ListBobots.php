<?php

namespace App\Filament\Resources\BobotResource\Pages;

use App\Filament\Resources\BobotResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBobots extends ListRecords
{
    protected static string $resource = BobotResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
