<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SubCPMKResource\Pages;
use App\Filament\Resources\SubCPMKResource\RelationManagers;
use App\Models\SubCpmk; // PERBAIKAN: Menggunakan nama model PascalCase
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

// PERBAIKAN: Menggunakan nama resource PascalCase
class SubCpmkResource extends Resource
{
    protected static ?string $model = SubCpmk::class;

    protected static ?string $navigationIcon = 'heroicon-o-bars-3-bottom-left';
    protected static ?string $navigationLabel = 'Sub-CP Mata Kuliah (Sub-CPMK)';
    protected static ?string $pluralModelLabel = 'Sub-CPMK';
    protected static ?int $navigationSort = 4; // Mengatur urutan di sidebar
    protected static bool $shouldRegisterNavigation = true; // Sembunyikan dari sidebar utama

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Detail Sub-CPMK')
                    ->schema([
                        // Dropdown untuk memilih CPMK induk
                        Forms\Components\Select::make('cpmk_id')
                            ->relationship('cpmk', 'title')
                            ->searchable()
                            ->preload()
                            ->required(),

                        Forms\Components\TextInput::make('code')
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
                // Menampilkan judul CPMK dari relasi
                Tables\Columns\TextColumn::make('cpmk.title')
                    ->label('CPMK Induk')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('code')
                    ->searchable(),

                Tables\Columns\TextColumn::make('bloom_level')
                    ->badge()
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
        return [
            // Sub-CPMK adalah level terdalam, jadi tidak ada relation manager
        ];
    }

    public static function getPages(): array
    {
        return [
            // PERBAIKAN: Menggunakan nama halaman PascalCase
            'index' => Pages\ListSubCpmks::route('/'),
            'create' => Pages\CreateSubCpmk::route('/create'),
            'edit' => Pages\EditSubCpmk::route('/{record}/edit'),
        ];
    }
}
