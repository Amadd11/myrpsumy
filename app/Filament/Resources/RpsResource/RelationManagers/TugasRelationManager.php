<?php

namespace App\Filament\Resources\RpsResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class TugasesRelationManager extends RelationManager
{
    protected static string $relationship = 'tugas';

    protected static ?string $title = 'Tugas & Ujian';
    protected static ?string $modelLabel = 'Tugas & Ujian';
    protected static ?string $pluralModelLabel = 'Tugas & Ujian';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Grid::make(2)->schema([
                    Forms\Components\TextInput::make('judul_penilaian')
                        ->label('Judul Penilaian')
                        ->required()
                        ->columnSpan(1),

                    Forms\Components\TextInput::make('jadwal_pelaksanaan')
                        ->label('Jadwal Pelaksanaan')
                        ->placeholder('Contoh: Minggu ke-5')
                        ->columnSpan(1),
                ]),

                Forms\Components\RichEditor::make('sub_cpmk')
                    ->label('Deskripsi Sub-CPMK')
                    ->columnSpanFull(),

                Forms\Components\RichEditor::make('deskripsi_penilaian')
                    ->label('Deskripsi Penilaian')
                    ->columnSpanFull(),

                Forms\Components\RichEditor::make('bentuk_penilaian')
                    ->label('Bentuk Penilaian (Tugas/Metode)')
                    ->columnSpanFull(),

                Forms\Components\RichEditor::make('indikator_kriteria_bobot')
                    ->label('Indikator, Kriteria, dan Bobot Penilaian')
                    ->columnSpanFull(),

                Forms\Components\RichEditor::make('metode_penilaian')
                    ->label('Metode Penilaian')
                    ->columnSpanFull(1),

                Forms\Components\RichEditor::make('bentuk_dan_format_luaran')
                    ->label('Bentuk dan Format Luaran')
                    ->columnSpanFull(1),

                Forms\Components\RichEditor::make('pustaka')
                    ->label('Pustaka / Referensi')
                    ->columnSpanFull(),

                Forms\Components\RichEditor::make('lain_lain')
                    ->label('Lain-lain')
                    ->columnSpanFull(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('judul_penilaian') // Menggunakan judul sebagai judul record
            ->columns([
                Tables\Columns\TextColumn::make('judul_penilaian')
                    ->label('Judul Penilaian')
                    ->searchable()
                    ->limit(40),
                Tables\Columns\TextColumn::make('sub_cpmk')
                    ->label('Sub-CPMK')
                    ->limit(50)
                    ->html()
                    ->wrap(),
                Tables\Columns\TextColumn::make('jadwal_pelaksanaan')
                    ->label('Jadwal')
                    ->searchable(),
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
