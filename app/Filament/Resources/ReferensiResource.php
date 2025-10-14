<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReferensiResource\Pages;
use App\Models\Referensi;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ReferensiResource extends Resource
{
    protected static ?string $model = Referensi::class;

    protected static ?string $navigationIcon = 'heroicon-o-book-open';
    protected static ?string $navigationLabel = 'Referensi';
    protected static ?string $modelLabel = 'Referensi';
    protected static ?string $pluralModelLabel = 'Daftar Referensi';
    protected static bool $shouldRegisterNavigation = false;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('course_id')
                    ->label('Mata Kuliah')
                    ->relationship('course', 'name') // sesuaikan 'name' dengan kolom nama di tabel courses
                    ->searchable()
                    ->required(),

                Forms\Components\Select::make('tipe')
                    ->label('Tipe Referensi')
                    ->options([
                        'utama' => 'Utama',
                        'tambahan' => 'Tambahan',
                    ])
                    ->default('utama')
                    ->required(),

                Forms\Components\TextInput::make('penulis')
                    ->label('Penulis')
                    ->maxLength(255),

                Forms\Components\TextInput::make('judul')
                    ->label('Judul')
                    ->required()
                    ->maxLength(255),

                Forms\Components\TextInput::make('tahun')
                    ->label('Tahun')
                    ->maxLength(255),

                Forms\Components\TextInput::make('penerbit')
                    ->label('Penerbit')
                    ->maxLength(255),

                Forms\Components\Textarea::make('tautan')
                    ->label('Tautan (jika online)')
                    ->rows(2)
                    ->columnSpanFull(),
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

                Tables\Columns\TextColumn::make('tipe')
                    ->badge()
                    ->label('Tipe')
                    ->colors([
                        'success' => 'utama',
                        'warning' => 'tambahan',
                    ])
                    ->sortable(),

                Tables\Columns\TextColumn::make('penulis')
                    ->label('Penulis')
                    ->limit(25)
                    ->searchable(),

                Tables\Columns\TextColumn::make('judul')
                    ->label('Judul')
                    ->limit(40)
                    ->searchable(),

                Tables\Columns\TextColumn::make('tahun')
                    ->label('Tahun')
                    ->sortable(),

                Tables\Columns\TextColumn::make('penerbit')
                    ->label('Penerbit')
                    ->limit(30)
                    ->searchable(),

                Tables\Columns\TextColumn::make('tautan')
                    ->label('Tautan')
                    ->limit(30)
                    ->url(fn($record) => $record->tautan, true)
                    ->openUrlInNewTab(),

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
            'index' => Pages\ListReferensis::route('/'),
            'create' => Pages\CreateReferensi::route('/create'),
            'edit' => Pages\EditReferensi::route('/{record}/edit'),
        ];
    }
}
