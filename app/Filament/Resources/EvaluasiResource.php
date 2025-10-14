<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EvaluasiResource\Pages;
use App\Models\Evaluasi;
use App\Models\Course;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class EvaluasiResource extends Resource
{
    protected static ?string $model = Evaluasi::class;

    protected static ?string $navigationIcon = 'heroicon-o-clipboard-document-check';
    protected static ?string $navigationLabel = 'Evaluasi';
    protected static ?string $pluralModelLabel = 'Evaluasi';
    protected static ?string $modelLabel = 'Evaluasi';
    protected static bool $shouldRegisterNavigation = false;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('course_id')
                    ->label('Mata Kuliah')
                    ->relationship('course', 'name') // pastikan kolom di model Course bernama 'name' atau sesuaikan
                    ->searchable()
                    ->required(),

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
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('course.name')
                    ->label('Mata Kuliah')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('komponen_penilaian')
                    ->label('Komponen')
                    ->searchable(),

                Tables\Columns\TextColumn::make('teknik_penilaian')
                    ->label('Teknik')
                    ->limit(30)
                    ->toggleable(),

                Tables\Columns\TextColumn::make('kriteria_penilaian')
                    ->label('Kriteria')
                    ->limit(30)
                    ->toggleable(),

                Tables\Columns\TextColumn::make('waktu_pelaksanaan')
                    ->label('Waktu')
                    ->sortable(),

                Tables\Columns\TextColumn::make('bobot')
                    ->label('Bobot (%)')
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y H:i')
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Diperbarui')
                    ->dateTime('d M Y H:i')
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([])
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

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListEvaluasis::route('/'),
            'create' => Pages\CreateEvaluasi::route('/create'),
            'edit' => Pages\EditEvaluasi::route('/{record}/edit'),
        ];
    }
}
