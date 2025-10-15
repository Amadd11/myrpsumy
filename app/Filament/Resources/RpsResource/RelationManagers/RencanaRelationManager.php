<?php

namespace App\Filament\Resources\RpsResource\RelationManagers;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use App\Models\SubCpmk; // Import untuk dropdown
use Filament\Resources\RelationManagers\RelationManager;

class RencanasRelationManager extends RelationManager
{
    protected static string $relationship = 'rencanas';

    protected static ?string $title = 'Rencana Pembelajaran';
    protected static ?string $modelLabel = 'Rencana';
    protected static ?string $pluralModelLabel = 'Rencana';

    public function form(Form $form): Form
    {
        return $form->schema([
            // --- SEKSI 1: INFORMASI DASAR ---
            Forms\Components\Section::make('Informasi Dasar')
                ->description('Tentukan pertemuan minggu ke berapa dan Sub-CPMK yang ingin dicapai.')
                ->schema([
                    Forms\Components\TextInput::make('week')
                        ->label('Minggu ke-')
                        ->required()
                        ->maxLength(255),

                    Forms\Components\Select::make('sub_cpmk_id')
                        ->label('Sub-CPMK')
                        ->options(function (RelationManager $livewire) {
                            // Pastikan hanya ambil Sub-CPMK milik course ini
                            $rps = $livewire->getOwnerRecord(); // Record course aktif
                            return SubCPMK::whereHas('cpmk', function (Builder $query) use ($rps) {
                                $query->where('rps_id', $rps->id); // Asumsikan relasi cpmk di SubCpmk
                            })
                                ->orderBy('title')
                                ->pluck('title', 'id');
                        })
                        ->required()
                        ->searchable()
                        ->placeholder('Pilih Sub-CPMK dari course ini...'),
                ])->columns(2),

            // --- SEKSI 2: MATERI PEMBELAJARAN ---
            Forms\Components\Section::make('Materi Pembelajaran')
                ->schema([
                    Forms\Components\RichEditor::make('materi_pembelajaran')
                        ->label('Detail Materi Pembelajaran (Pokok Bahasan)')
                        ->required()
                        ->columnSpanFull(),
                ]),

            // --- SEKSI 3: DETAIL PENILAIAN ---
            Forms\Components\Section::make('Detail Penilaian')
                ->description('Jelaskan bagaimana pencapaian Sub-CPMK akan dinilai.')
                ->schema([
                    Forms\Components\RichEditor::make('indikator')
                        ->label('Indikator Penilaian')
                        ->columnSpanFull(),
                    Forms\Components\RichEditor::make('kriteria_penilaian')
                        ->label('Kriteria Penilaian')
                        ->columnSpanFull(),
                    Forms\Components\RichEditor::make('teknik_penilaian')
                        ->label('Teknik Penilaian')
                        ->columnSpanFull(),
                ])->columns(2),

            // --- SEKSI 4: STRATEGI PEMBELAJARAN ---
            Forms\Components\Section::make('Strategi Pembelajaran')
                ->schema([
                    Forms\Components\Select::make('metode')
                        ->label('Bentuk & Metode Pembelajaran (Luring/Daring)')
                        ->options([
                            'Luring' => 'Luring (Tatap Muka)',
                            'Daring' => 'Daring (Online)',
                        ])
                        ->required(),
                    Forms\Components\RichEditor::make('deskripi_belajar')
                        ->label('Pengalaman Belajar Mahasiswa')
                        ->columnSpanFull(),
                ]),

            // --- SEKSI 5: ALOKASI WAKTU & BOBOT ---
            Forms\Components\Section::make('Alokasi Waktu dan Bobot')
                ->schema([
                    Forms\Components\TextInput::make('waktu')
                        ->label('Alokasi Waktu')
                        ->default('3 x 50 menit')
                        ->maxLength(255),

                    Forms\Components\TextInput::make('bobot_penilaian')
                        ->label('Bobot Penilaian (%)')
                        ->numeric()
                        ->suffix('%'),
                ])->columns(2),
        ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('week')
            ->columns([
                Tables\Columns\TextColumn::make('week')
                    ->label('Minggu')
                    ->sortable(),

                Tables\Columns\TextColumn::make('subCpmk.title')
                    ->label('Sub-CPMK')
                    ->limit(40)
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('materi_pembelajaran')
                    ->label('Materi Pembelajaran')
                    ->limit(250)
                    ->html()
                    ->wrap(),

                Tables\Columns\TextColumn::make('bobot_penilaian')
                    ->label('Bobot')
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
