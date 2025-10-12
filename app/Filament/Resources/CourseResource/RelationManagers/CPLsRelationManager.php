<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

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

    protected static ?string $navigationLabel = 'CPL';
    protected static ?string $title = 'CPL';
    protected static ?string $pluralLabel = 'CPL';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('code')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('bloom_level')
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
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('title')
                    ->label('Judul CPL')
                    ->wrap()
                    ->searchable(),

                Tables\Columns\TextColumn::make('bloom_level')
                    ->searchable()
                    ->badge(),
            ])
            ->headerActions([
                // Tambahkan CPL yang sudah ada ke Course
                // Tables\Actions\AttachAction::make()
                //     ->label('Hubungkan CPL'),
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
