<?php

namespace App\Filament\Resources\RpsResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CplsRelationManager extends RelationManager
{
    protected static string $relationship = 'cpls';

    protected static ?string $title = 'CPL';
    protected static ?string $modelLabel = 'CPL';
    protected static ?string $pluralModelLabel = 'CPL';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('code')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('bobot')
                    ->numeric()
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('taksonomi')
                    ->maxLength(255),
                Forms\Components\ColorPicker::make('bg_color')
                    ->label('Warna CPL')
                    ->default('#16a34a') // warna hijau
                    ->required(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('code')
            ->columns([
                Tables\Columns\TextColumn::make('code')
                    ->label('Kode')
                    ->sortable(),
                Tables\Columns\TextColumn::make('bobot')
                    ->label('Judul CPL')
                    ->sortable(),
                Tables\Columns\TextColumn::make('taksonomi')
                    ->badge(),
            ])
            ->headerActions([
                Tables\Actions\AttachAction::make()
                    ->preloadRecordSelect() // Membuat dropdown CPL bisa dicari dan di-scroll
                    ->label('Hubungkan CPL Existing'),
            ])
            ->actions([
                Tables\Actions\DetachAction::make()
                    ->label('Lepas CPL'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DetachBulkAction::make()
                        ->label('Lepas Terpilih'),
                ]),
            ]);
    }
}
