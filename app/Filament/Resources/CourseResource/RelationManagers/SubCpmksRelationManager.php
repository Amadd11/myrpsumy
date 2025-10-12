<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

use App\Models\Cpmk;
use Filament\Forms;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class SubCpmksRelationManager extends RelationManager
{
    protected static string $relationship = 'subCpmks';

    protected static ?string $title = 'Sub-CPMK';
    protected static ?string $modelLabel = 'Sub-CPMK';
    protected static ?string $pluralModelLabel = 'Sub-CPMK';

    public function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('cpmk_id')
                    ->label('CPMK Induk')
                    ->options(function (RelationManager $livewire) {
                        // Pastikan hanya ambil CPMK milik course ini
                        $course = $livewire->getOwnerRecord(); // Record course aktif
                        return Cpmk::where('course_id', $course->id)
                            ->orderBy('title')
                            ->pluck('title', 'id');
                    })
                    ->required()
                    ->searchable(),
                Forms\Components\TextInput::make('code')
                    ->label('Kode Sub-CPMK')
                    ->required(),
                Forms\Components\TextInput::make('bloom_level')
                    ->label('Tingkat Taksonomi Bloom'),
                Forms\Components\Textarea::make('description')
                    ->label('Deskripsi')
                    ->rows(2),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('cpmk.title')->label('CPMK Induk'),
                Tables\Columns\TextColumn::make('code')->label('Kode Sub-CPMK'),
                Tables\Columns\TextColumn::make('bloom_level')->label('Taksonomi Bloom'),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ]);
    }
}
