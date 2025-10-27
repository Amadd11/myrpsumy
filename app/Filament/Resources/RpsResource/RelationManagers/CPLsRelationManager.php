<?php

namespace App\Filament\Resources\RpsResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class CplsRelationManager extends RelationManager
{
    protected static string $relationship = 'cpls';

    protected static ?string $title = 'CPL';
    protected static ?string $modelLabel = 'CPL';
    protected static ?string $pluralModelLabel = 'CPL';

    public function form(Form $form): Form
    {
        return $form->schema([
            // Field dari model CPL
            Forms\Components\TextInput::make('code')
                ->label('Kode CPL')
                ->disabled()
                ->dehydrated(false), // Jangan simpan ke pivot
            Forms\Components\Textarea::make('description')
                ->label('Deskripsi')
                ->disabled()
                ->dehydrated(false),
            Forms\Components\TextInput::make('taksonomi')
                ->disabled()
                ->dehydrated(false),

            // Field dari pivot table (rps_cpl)
            Forms\Components\TextInput::make('bobot')
                ->label('Bobot CPL (%)')
                ->numeric()
                ->required()
                ->helperText('Masukkan bobot CPL untuk mata kuliah ini')
                ->suffix('%'),
        ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('code')
            ->columns([
                Tables\Columns\TextColumn::make('code')
                    ->label('Kode CPL')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('description')
                    ->label('Deskripsi')
                    ->limit(60),

                Tables\Columns\TextColumn::make('taksonomi')
                    ->label('Taksonomi')
                    ->badge(),

                // ✅ Ambil bobot dari pivot
                Tables\Columns\TextColumn::make('pivot.bobot')
                    ->label('Bobot (%)')
                    ->sortable()
                    ->alignCenter()
                    ->color('success'),
            ])
            ->headerActions([
                // Hubungkan CPL Existing + input bobot pivot
                Tables\Actions\AttachAction::make()
                    ->preloadRecordSelect()
                    ->label('Hubungkan CPL')
                    ->form(fn($action) => [
                        $action->getRecordSelect(), // dropdown CPL
                        Forms\Components\TextInput::make('bobot')
                            ->label('Bobot CPL (%)')
                            ->numeric()
                            ->required()
                            ->suffix('%')
                            ->helperText('Masukkan bobot CPL untuk mata kuliah ini'),
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make()
                    ->label('Edit Bobot') // edit hanya pivot field
                    ->form([
                        Forms\Components\TextInput::make('bobot')
                            ->label('Bobot CPL (%)')
                            ->numeric()
                            ->required()
                            ->suffix('%'),
                    ]),
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
