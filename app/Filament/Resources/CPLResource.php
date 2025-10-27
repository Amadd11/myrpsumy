<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CourseResource\RelationManagers\CplsRelationManager;
use App\Filament\Resources\CPLResource\Pages;
use App\Filament\Resources\CPLResource\RelationManagers;
use App\Models\CPL;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CPLResource extends Resource
{
    protected static ?string $model = CPL::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Capaian Lulusan (CPL)';
    protected static ?string $pluralModelLabel = 'CPL';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // 2. Kolom 'course_id' dihapus karena tidak relevan di sini
                Forms\Components\TextInput::make('code')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('taksonomi')
                    ->label('Taksonomi Bloom')
                    ->maxLength(255),
                Forms\Components\ColorPicker::make('bg_color')
                    ->label('Warna CPL')
                    ->default('#16a34a') // warna hijau
                    ->required(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                // 3. Kolom 'course_id' dihapus
                Tables\Columns\TextColumn::make('code')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('taksonomi')
                    ->searchable()
                    ->badge(),
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
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCPLS::route('/'),
            'create' => Pages\CreateCPL::route('/create'),
            'edit' => Pages\EditCPL::route('/{record}/edit'),
        ];
    }
}
