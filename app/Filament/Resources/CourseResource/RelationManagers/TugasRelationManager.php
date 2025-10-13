<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class TugasesRelationManager extends RelationManager
{
    protected static string $relationship = 'tugas';

    protected static ?string $title = 'Tugas & Ujian';
    protected static ?string $modelLabel = 'Tugas & Ujian';
    protected static ?string $pluralModelLabel = 'Tugas & Ujian';

    public function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\RichEditor::make('tugas')
                ->label('Deskripsi Tugas / Ujian')
                ->required()
                ->columnSpanFull(),
        ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('tugas')
            ->columns([
                Tables\Columns\TextColumn::make('tugas')
                    ->label('Deskripsi Tugas / Ujian')
                    ->limit(50)
                    ->wrap(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
