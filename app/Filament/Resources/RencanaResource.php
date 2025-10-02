<?php

namespace App\Filament\Resources;

use App\Filament\Resources\RencanaResource\Pages;
use App\Models\Rencana;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class RencanaResource extends Resource
{
    protected static ?string $model = Rencana::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Rencana Pembelajaran';
    protected static ?string $pluralModelLabel = 'Rencana Pembelajaran';
    protected static ?string $modelLabel = 'Rencana';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Select::make('sub_cpmk_id')
                ->label('Sub-CPMK')
                ->relationship('subCpmk', 'code')
                ->searchable()
                ->preload()
                ->required(),

            Forms\Components\TextInput::make('week')
                ->label('Minggu ke-')
                ->numeric()
                ->required(),

            Forms\Components\Textarea::make('materi_pembelajaran')
                ->label('Materi Pembelajaran')
                ->columnSpanFull(),

            Forms\Components\TextInput::make('metode')
                ->label('Metode Pembelajaran')
                ->maxLength(255),

            Forms\Components\TextInput::make('pengalaman_belajar')
                ->label('Pengalaman Belajar')
                ->maxLength(255),

            Forms\Components\TextInput::make('waktu')
                ->label('Durasi Waktu')
                ->default('3 x 50 menit')
                ->maxLength(255)
                ->required(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('subCpmk.code')
                    ->label('Sub-CPMK')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('week')
                    ->label('Minggu ke-')
                    ->sortable(),

                Tables\Columns\TextColumn::make('materi_pembelajaran')
                    ->label('Materi')
                    ->limit(50)
                    ->toggleable(),

                Tables\Columns\TextColumn::make('metode')
                    ->label('Metode')
                    ->searchable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('pengalaman_belajar')
                    ->label('Pengalaman Belajar')
                    ->searchable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('waktu')
                    ->label('Durasi Waktu')
                    ->searchable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Diperbarui')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListRencanas::route('/'),
            'create' => Pages\CreateRencana::route('/create'),
            'edit'   => Pages\EditRencana::route('/{record}/edit'),
        ];
    }
}
