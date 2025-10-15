<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Course;
use Filament\Forms\Set;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use RelationManagers\CPLsRelationManager;
use App\Filament\Resources\CourseResource\Pages;
use App\Models\CPL;

class CourseResource extends Resource
{
    protected static ?string $model = Course::class;

    protected static ?string $navigationIcon = 'heroicon-o-book-open';
    protected static ?string $navigationLabel = 'Mata Kuliah';
    protected static ?string $pluralLabel = 'Mata Kuliah';
    protected static ?string $navigationGroup = 'Akademik';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label('Nama Mata Kuliah')
                    ->required()
                    ->maxLength(255)
                    ->lazy() // Update slug setelah user selesai mengetik
                    ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                    ->placeholder('contoh: Manajemen Pelayanan RS'),
                Forms\Components\TextInput::make('name_en')
                    ->label('Course Name (English)')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('slug')
                    ->hidden()
                    ->required()
                    ->maxLength(255)
                    ->disabled()
                    ->dehydrated(),

                Forms\Components\TextInput::make('code')
                    ->label('Kode')
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(50)
                    ->placeholder('contoh: MRS102'),

                Forms\Components\TextInput::make('sks')
                    ->label('SKS')
                    ->numeric()
                    ->required()
                    ->placeholder('contoh: 3'),

                Forms\Components\TextInput::make('semester')
                    ->label('Semester')
                    ->numeric()
                    ->required()
                    ->placeholder('contoh: 1'),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Mata Kuliah')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('name_en')
                    ->label('Mata Kuliah (EN)')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('code')
                    ->label('Kode')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('sks')
                    ->badge()
                    ->label('SKS')
                    ->sortable(),

                Tables\Columns\TextColumn::make('semester')
                    ->badge()
                    ->label('Semester')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Diperbarui')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\ViewAction::make(),
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
            // Contoh nanti bisa tambah Relation Manager: CPMK, CPL, dll.
        ];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListCourses::route('/'),
            'create' => Pages\CreateCourse::route('/create'),
            'edit'   => Pages\EditCourse::route('/{record}/edit'),
        ];
    }
}
