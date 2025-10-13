<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class ReferensisRelationManager extends RelationManager
{
    protected static string $relationship = 'referensi';

    protected static ?string $title = 'Referensi';
    protected static ?string $modelLabel = 'Referensi';
    protected static ?string $pluralModelLabel = 'Referensi';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('tipe')
                    ->label('Tipe Referensi')
                    ->options([
                        'utama' => 'Utama',
                        'pendukung' => 'Pendukung',
                    ])
                    ->required()
                    ->default('utama'),

                Forms\Components\TextInput::make('penulis')
                    ->label('Penulis')
                    ->maxLength(255),

                Forms\Components\TextInput::make('judul')
                    ->label('Judul')
                    ->required()
                    ->maxLength(255),

                Forms\Components\TextInput::make('tahun')
                    ->label('Tahun')
                    ->maxLength(4),

                Forms\Components\TextInput::make('penerbit')
                    ->label('Penerbit')
                    ->maxLength(255),

                Forms\Components\Textarea::make('tautan')
                    ->label('Tautan (opsional)')
                    ->placeholder('https://contoh.com/referensi')
                    ->columnSpanFull(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('judul')
            ->columns([
                Tables\Columns\TextColumn::make('tipe')
                    ->label('Tipe')
                    ->badge()
                    ->colors([
                        'primary' => 'utama',
                        'success' => 'pendukung',
                    ]),

                Tables\Columns\TextColumn::make('penulis')
                    ->label('Penulis')
                    ->searchable(),

                Tables\Columns\TextColumn::make('judul')
                    ->label('Judul')
                    ->searchable(),

                Tables\Columns\TextColumn::make('tahun')
                    ->label('Tahun')
                    ->sortable(),

                Tables\Columns\TextColumn::make('penerbit')
                    ->label('Penerbit'),

                Tables\Columns\TextColumn::make('tautan')
                    ->label('Tautan')
                    ->limit(30)
                    ->url(fn($record) => $record->tautan, true),
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
