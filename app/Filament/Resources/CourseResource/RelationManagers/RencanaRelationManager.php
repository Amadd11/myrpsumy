<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

use Filament\Forms;
use Filament\Tables;
use App\Models\SubCPMK;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Filament\Resources\RelationManagers\RelationManager;

class RencanasRelationManager extends RelationManager
{
    protected static string $relationship = 'rencana'; // pastikan relasi ini ada di model Course

    protected static ?string $title = 'Rencana';
    protected static ?string $modelLabel = 'Rencana';
    protected static ?string $pluralModelLabel = 'Rencana';

    public function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Select::make('sub_cpmk_id')
                ->label('Sub-CPMK')
                ->options(function (RelationManager $livewire) {
                    // Pastikan hanya ambil Sub-CPMK milik course ini
                    $course = $livewire->getOwnerRecord(); // Record course aktif
                    return SubCPMK::whereHas('cpmk', function (Builder $query) use ($course) {
                        $query->where('course_id', $course->id); // Asumsikan relasi cpmk di SubCpmk
                    })
                        ->orderBy('title')
                        ->pluck('title', 'id');
                })
                ->required()
                ->searchable()
                ->placeholder('Pilih Sub-CPMK dari course ini...'),

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

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('materi_pembelajaran')
            ->columns([
                Tables\Columns\TextColumn::make('subCpmk.title')
                    ->label('Sub-CPMK')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('week')
                    ->label('Minggu ke-')
                    ->sortable(),

                Tables\Columns\TextColumn::make('materi_pembelajaran')
                    ->label('Materi')
                    ->limit(50),

                Tables\Columns\TextColumn::make('metode')
                    ->label('Metode')
                    ->toggleable(),

                Tables\Columns\TextColumn::make('pengalaman_belajar')
                    ->label('Pengalaman Belajar')
                    ->toggleable(),

                Tables\Columns\TextColumn::make('waktu')
                    ->label('Durasi Waktu')
                    ->toggleable(),

                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Diperbarui')
                    ->dateTime('d M Y H:i')
                    ->toggleable(isToggledHiddenByDefault: true),
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
