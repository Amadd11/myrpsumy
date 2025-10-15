<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EvaluasiResource\Pages;
use App\Models\Evaluasi;
use App\Models\Rps; // Import Rps
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

    // Resource ini tidak akan muncul di navigasi utama,
    // karena akan dikelola melalui Relation Manager di dalam RPS.
    protected static bool $shouldRegisterNavigation = false;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // Mengganti course_id menjadi rps_id
                Forms\Components\Select::make('rps_id')
                    ->label('RPS Terkait')
                    ->relationship('rps', 'id') // Placeholder, akan kita perbaiki tampilannya
                    ->getOptionLabelFromRecordUsing(fn(Rps $record) => "{$record->course->name} ({$record->tahun_ajaran})")
                    ->searchable()
                    ->preload()
                    ->required(),

                Forms\Components\TextInput::make('minggu_ke')
                    ->label('Minggu Ke-')
                    ->maxLength(255),

                // Menambahkan relasi ke CPL, CPMK, Sub-CPMK
                Forms\Components\Select::make('cpl_id')->relationship('cpl', 'code')->label('CPL'),
                Forms\Components\Select::make('cpmk_id')->relationship('cpmk', 'title')->label('CPMK'),
                Forms\Components\Select::make('sub_cpmk_id')->relationship('subCpmk', 'title')->label('Sub-CPMK'),

                Forms\Components\Textarea::make('indikator')
                    ->label('Indikator Penilaian')
                    ->columnSpanFull(),

                Forms\Components\Textarea::make('bentuk_penilaian')
                    ->label('Bentuk Penilaian (Tugas/Metode)')
                    ->columnSpanFull(),

                Forms\Components\TextInput::make('bobot_sub_cpmk')
                    ->label('Bobot Sub-CPMK (%)')
                    ->numeric()
                    ->suffix('%'),

                Forms\Components\TextInput::make('bobot_cpmk')
                    ->label('Bobot CPMK (%)')
                    ->numeric()
                    ->suffix('%'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('rps.course.name')
                    ->label('Mata Kuliah')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('minggu_ke')
                    ->label('Minggu')
                    ->sortable(),

                Tables\Columns\TextColumn::make('subCpmk.title')
                    ->label('Sub-CPMK')
                    ->limit(30)
                    ->toggleable(),

                Tables\Columns\TextColumn::make('indikator')
                    ->label('Indikator')
                    ->limit(40)
                    ->toggleable(),

                Tables\Columns\TextColumn::make('bentuk_penilaian')
                    ->label('Bentuk Penilaian')
                    ->limit(40)
                    ->toggleable(),

                Tables\Columns\TextColumn::make('bobot_cpmk')
                    ->label('Bobot CPMK')
                    ->suffix('%')
                    ->sortable(),
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
