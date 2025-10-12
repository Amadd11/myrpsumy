<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\CPMK;
use Filament\Tables;
use App\Models\Course;
use Filament\Forms\Get;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\CPMKResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\CPMKResource\RelationManagers;
use App\Filament\Resources\CourseResource\RelationManagers\CPMKRelationManager;
use App\Filament\Resources\CPMKResource\RelationManagers\SubCpmksRelationManager;

class CPMKResource extends Resource
{
    protected static ?string $model = CPMK::class;

    protected static ?string $navigationIcon = 'heroicon-o-list-bullet';
    protected static ?string $navigationLabel = 'CP Mata Kuliah (CPMK)';
    protected static ?string $pluralModelLabel = 'CPMK';
    protected static ?int $navigationSort = 3; // Mengatur urutan di sidebar

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informasi Utama')
                    ->schema([
                        // PERBAIKAN: Menggunakan Select dropdown untuk memilih Course
                        Forms\Components\Select::make('course_id')
                            ->relationship('course', 'name')
                            ->searchable()
                            ->preload()
                            ->required()
                            ->live(), // Membuat field ini reaktif

                        // PERBAIKAN: Dropdown CPL yang dinamis berdasarkan Course yang dipilih
                        Forms\Components\Select::make('cpl_id')
                            ->label('Turunan dari CPL')
                            ->options(function (Get $get): Collection {
                                $courseId = $get('course_id');
                                if (!$courseId) {
                                    return collect();
                                }
                                // Hanya tampilkan CPL yang sudah terhubung dengan Course yang dipilih
                                return Course::find($courseId)->cpls()->pluck('code', 'cpls.id');
                            })
                            ->searchable()
                            ->preload()
                            ->helperText('Pilih CPL yang menjadi induk dari CPMK ini.'),

                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\Textarea::make('description')
                            ->columnSpanFull(),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                // PERBAIKAN: Menampilkan nama Course, bukan ID
                Tables\Columns\TextColumn::make('course.name')
                    ->numeric()
                    ->sortable()
                    ->searchable(),

                // PERBAIKAN: Menampilkan kode CPL, bukan ID
                Tables\Columns\TextColumn::make('cpl.code')
                    ->label('Dari CPL')
                    ->numeric()
                    ->sortable()
                    ->badge(),

                Tables\Columns\TextColumn::make('title')
                    ->searchable(),

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
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCPMKS::route('/'),
            'create' => Pages\CreateCPMK::route('/create'),
            'edit' => Pages\EditCPMK::route('/{record}/edit'),
        ];
    }
}
