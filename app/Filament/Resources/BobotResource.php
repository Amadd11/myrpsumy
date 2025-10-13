<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BobotResource\Pages;
use App\Filament\Resources\BobotResource\RelationManagers;
use App\Models\Bobot;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BobotResource extends Resource
{
    protected static ?string $model = Bobot::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Bobot';
    protected static ?string $pluralModelLabel = 'Bobot';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('course_id')
                    ->label('Mata Kuliah')
                    ->relationship('course', 'name')
                    ->required(),

                Forms\Components\TextInput::make('name')
                    ->label('Nama Bobot')
                    ->required()
                    ->maxLength(255),

                Forms\Components\Textarea::make('description')
                    ->label('Deskripsi')
                    ->columnSpanFull(),

                Forms\Components\TextInput::make('bobot')
                    ->label('Bobot (%)')
                    ->numeric()
                    ->required(),
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

                Tables\Columns\TextColumn::make('name')
                    ->label('Nama Bobot')
                    ->searchable(),

                Tables\Columns\TextColumn::make('bobot')
                    ->label('Bobot (%)')
                    ->sortable()
                    ->numeric(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Diubah')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('created_at', 'desc')
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
            // tambahkan RelationManager kalau ada relasi, misalnya ke Nilai
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBobots::route('/'),
            'create' => Pages\CreateBobot::route('/create'),
            'edit' => Pages\EditBobot::route('/{record}/edit'),
        ];
    }
}
