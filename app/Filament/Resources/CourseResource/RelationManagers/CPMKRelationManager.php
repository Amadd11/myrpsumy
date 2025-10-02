<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class CPMKRelationManager extends RelationManager
{
    protected static string $relationship = 'cpmks';

    public function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('title')
                ->label('Judul CPMK')
                ->required()
                ->columnSpanFull(),

            // PERBAIKAN: Menggunakan dropdown dinamis
            // Opsi CPL sekarang difilter berdasarkan Course induk
            Forms\Components\Select::make('cpl_id')
                ->label('Terkait CPL (Induk)')
                ->options(function (RelationManager $livewire): array {
                    // $livewire->ownerRecord adalah objek model Course yang sedang diedit.
                    // Kita hanya mengambil CPL yang sudah berelasi dengan Course ini.
                    return $livewire->ownerRecord->cpls()->pluck('title', 'cpls.id')->toArray();
                })
                ->searchable()
                ->preload()
                ->nullable()
                ->helperText('Hanya CPL yang sudah terhubung dengan mata kuliah ini yang akan tampil.'),

            Forms\Components\Textarea::make('description')
                ->label('Deskripsi')
                ->nullable()
                ->columnSpanFull(),
        ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('title')
            ->columns([
                Tables\Columns\TextColumn::make('title')->label('Judul')->searchable(),
                Tables\Columns\TextColumn::make('cpl.code')->label('Dari CPL')->badge(),
                Tables\Columns\TextColumn::make('description')->label('Deskripsi')->limit(50)->toggleable(),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }
}
