<?php

namespace App\Filament\Resources\RpsResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ReferensisRelationManager extends RelationManager
{
    protected static string $relationship = 'referensi';

    protected static ?string $title = 'Referensi';
    protected static ?string $modelLabel = 'Referensi';
    protected static ?string $pluralModelLabel = 'Referensi';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('tipe')
                    ->label('Tipe Referensi')
                    ->options([
                        'utama' => 'Utama',
                        'tambahan' => 'Tambahan',
                    ])
                    ->required()
                    ->default('utama'),

                Forms\Components\RichEditor::make('referensi')
                    ->label('referensi')
                    ->columnSpanFull(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('judul')
            ->columns([
                Tables\Columns\TextColumn::make('tipe')
                    ->label('Tipe')
                    ->badge()
                    ->colors([
                        'primary' => 'utama',
                        'success' => 'pendukung',
                    ]),

                Tables\Columns\TextColumn::make('referensi')
                    ->label('Referensi')
                    ->limit(250)
                    ->html()
                    ->wrap(),

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
