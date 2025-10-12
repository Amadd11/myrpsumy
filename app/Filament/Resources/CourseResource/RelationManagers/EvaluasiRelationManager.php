<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class EvaluasisRelationManager extends RelationManager
{
    protected static string $relationship = 'evaluasi';

    protected static ?string $title = 'Evaluasi';
    
    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('komponen_penilaian')
                    ->label('Komponen Penilaian')
                    ->required()
                    ->maxLength(255),

                Forms\Components\Textarea::make('teknik_penilaian')
                    ->label('Teknik Penilaian')
                    ->rows(2),

                Forms\Components\Textarea::make('kriteria_penilaian')
                    ->label('Kriteria Penilaian')
                    ->rows(2),

                Forms\Components\TextInput::make('waktu_pelaksanaan')
                    ->label('Waktu Pelaksanaan')
                    ->maxLength(255),

                Forms\Components\TextInput::make('bobot')
                    ->label('Bobot (%)')
                    ->numeric()
                    ->suffix('%')
                    ->maxLength(10),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('komponen_penilaian')
            ->columns([
                Tables\Columns\TextColumn::make('komponen_penilaian')
                    ->label('Komponen Penilaian')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('teknik_penilaian')
                    ->label('Teknik Penilaian')
                    ->limit(30),

                Tables\Columns\TextColumn::make('kriteria_penilaian')
                    ->label('Kriteria Penilaian')
                    ->limit(30),

                Tables\Columns\TextColumn::make('waktu_pelaksanaan')
                    ->label('Waktu Pelaksanaan')
                    ->sortable(),

                Tables\Columns\TextColumn::make('bobot')
                    ->label('Bobot (%)')
                    ->suffix('%')
                    ->sortable(),
            ])
            ->filters([])
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
