<?php

namespace App\Filament\Resources\RpsResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class CPMKRelationManager extends RelationManager
{
    protected static string $relationship = 'cpmks';
    protected static ?string $title = 'CPMK';
    protected static ?string $modelLabel = 'CPMK';
    protected static ?string $pluralModelLabel = 'CPMK';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->label('Judul CPMK')
                    ->required()
                    ->columnSpanFull(),

                // PERBAIKAN: Opsi CPL difilter dari inherited RPS->course->cpls
                Forms\Components\Select::make('cpl_id')
                    ->label('Terkait CPL (Induk)')
                    ->options(function (RelationManager $livewire): array {
                        $rps = $livewire->ownerRecord; // Ini Rps instance

                        if (!$rps) {
                            return [];
                        }

                        // Ambil CPL yang sudah dipilih di RPS ini
                        return $rps->cpls()->pluck('cpls.code', 'cpls.id')->toArray();
                    })
                    ->searchable()
                    ->preload()
                    ->nullable()
                    ->helperText('Hanya CPL yang sudah dipilih pada RPS ini yang akan tampil.'),
                Forms\Components\Textarea::make('description')
                    ->label('Deskripsi')
                    ->nullable()
                    ->rows(6)
                    ->columnSpanFull(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('title')
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('cpl.code')
                    ->label('Dari CPL')
                    ->badge()
                    ->sortable(),

                Tables\Columns\TextColumn::make('description')
                    ->label('Deskripsi')
                    ->limit(50)
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                // Opsional: Filter table kalau perlu
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
