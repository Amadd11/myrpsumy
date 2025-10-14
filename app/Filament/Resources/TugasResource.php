<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TugasResource\Pages;
use App\Models\Tugas;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class TugasResource extends Resource
{
    protected static ?string $model = Tugas::class;

    protected static ?string $navigationIcon = 'heroicon-o-clipboard-document-list';
    protected static ?string $navigationLabel = 'Tugas & Ujian';
    protected static ?string $pluralModelLabel = 'Tugas & Ujian';

    // Sembunyikan dari navigasi utama agar tidak membingungkan
    protected static bool $shouldRegisterNavigation = false;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // PERBAIKAN: Menggunakan dropdown untuk memilih Course
                Forms\Components\Select::make('course_id')
                    ->relationship('course', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),

                Forms\Components\Textarea::make('tugas')
                    ->label('Deskripsi Tugas/Ujian')
                    ->required()
                    ->columnSpanFull(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                // PERBAIKAN: Menampilkan nama Course, bukan ID
                Tables\Columns\TextColumn::make('course.name')
                    ->sortable()
                    ->searchable(),

                // PERBAIKAN: Menampilkan kolom 'tugas'
                Tables\Columns\TextColumn::make('tugas')
                    ->label('Deskripsi')
                    ->limit(50)
                    ->wrap(),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
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
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTugas::route('/'),
            'create' => Pages\CreateTugas::route('/create'),
            'edit' => Pages\EditTugas::route('/{record}/edit'),
        ];
    }
}
