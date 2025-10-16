<?php

namespace App\Filament\Resources\RpsResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use App\Models\CPL;
use App\Models\CPMK;
use App\Models\SubCpmk;
use Illuminate\Support\Collection;

class EvaluasisRelationManager extends RelationManager
{
    protected static string $relationship = 'evaluasis';

    protected static ?string $title = 'Evaluasi';
    protected static ?string $modelLabel = 'Evaluasi';
    protected static ?string $pluralModelLabel = 'Evaluasi';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('week')
                    ->label('Minggu Ke-')
                    ->numeric()
                    ->required()
                    ->columnSpan(1),

                // -- Dropdown Berantai Dimulai --
                Forms\Components\Select::make('cpl_id')
                    ->label('Pilih CPL Terkait')
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
                    ->live()
                    ->afterStateUpdated(fn(Forms\Set $set) => $set('cpmk_id', null))
                    ->required()
                    ->columnSpan(1),

                Forms\Components\Select::make('cpmk_id')
                    ->label('Pilih CPMK Terkait')
                    ->options(function (Forms\Get $get): Collection {
                        $cplId = $get('cpl_id');
                        if (!$cplId) {
                            return collect();
                        }
                        // ✅ PERBAIKAN FINAL: Ambil semua data, filter di PHP, baru pluck. Ini paling aman.
                        return CPMK::where('cpl_id', $cplId)
                            ->get()
                            ->filter(fn($cpmk) => !empty($cpmk->title))
                            ->pluck('title', 'id');
                    })
                    ->searchable()
                    ->preload()
                    ->live()
                    ->afterStateUpdated(fn(Forms\Set $set) => $set('sub_cpmk_id', null))
                    ->required()
                    ->columnSpan(1),

                Forms\Components\Select::make('sub_cpmk_id')
                    ->label('Pilih Sub-CPMK Terkait')
                    ->options(function (Forms\Get $get): Collection {
                        $cpmkId = $get('cpmk_id');
                        if (!$cpmkId) {
                            return collect();
                        }
                        // ✅ PERBAIKAN FINAL: Ambil semua data, filter di PHP, baru pluck.
                        return SubCpmk::where('cpmk_id', $cpmkId)
                            ->get()
                            ->filter(fn($subcpmk) => !empty($subcpmk->title))
                            ->pluck('title', 'id');
                    })
                    ->searchable()
                    ->preload()
                    ->required()
                    ->columnSpan(1),
                Forms\Components\RichEditor::make('indikator')
                    ->label('Indikator Penilaian')
                    ->columnSpanFull(),

                Forms\Components\RichEditor::make('bentuk_penilaian')
                    ->label('Bentuk Penilaian (Tugas/Metode)')
                    ->columnSpanFull(),

                Forms\Components\TextInput::make('bobot_sub_cpmk')
                    ->label('Bobot Sub-CPMK (%)')
                    ->numeric()
                    ->suffix('%')
                    ->columnSpan(1),

                Forms\Components\TextInput::make('bobot_cpmk')
                    ->label('Bobot CPMK (%)')
                    ->numeric()
                    ->suffix('%')
                    ->columnSpan(1),
            ])->columns(2);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('week')
            ->columns([
                Tables\Columns\TextColumn::make('week'),
                Tables\Columns\TextColumn::make('subCpmk.title')->label('Sub-CPMK')->limit(50),
                Tables\Columns\TextColumn::make('bobot_cpmk')->suffix('%'),
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
