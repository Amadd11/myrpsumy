<?php

namespace App\Filament\Resources;

use App\Models\CPL;
use App\Models\Rps;
use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\RpsResource\Pages;
use App\Models\Course; // Import untuk reactive

use App\Filament\Resources\RpsResource\RelationManagers\CplsRelationManager;
use App\Filament\Resources\RpsResource\RelationManagers\CPMKRelationManager;
use App\Filament\Resources\RpsResource\RelationManagers\BobotRelationManager;
use App\Filament\Resources\RpsResource\RelationManagers\TugasesRelationManager;
use App\Filament\Resources\RpsResource\RelationManagers\RencanasRelationManager;
use App\Filament\Resources\RpsResource\RelationManagers\SubCpmksRelationManager;
use App\Filament\Resources\RpsResource\RelationManagers\EvaluasisRelationManager;
use App\Filament\Resources\RpsResource\RelationManagers\ReferensisRelationManager;

class RpsResource extends Resource
{
    protected static ?string $model = Rps::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'RPS';
    protected static ?string $pluralLabel = 'RPS';
    protected static ?string $navigationGroup = 'Akademik'; // Grup sama dengan Course

    public static function form(Form $form): Form
    {
        $years = range(2021, 2028); // Membuat rentang tahun dari 2021 sampai 2028
        $academicYears = [];
        foreach ($years as $year) {
            $nextYear = $year + 1;
            $academicYears["{$year}/{$nextYear}"] = "{$year}/{$nextYear}";
        }
        return $form
            ->schema([
                Forms\Components\Section::make('Detail RPS')
                    ->description('Buat RPS baru dengan memilih mata kuliah existing.')
                    ->schema([
                        Forms\Components\Grid::make(2) // Grid 2 kolom untuk layout rapi
                            ->schema([
                                // Kolom 1
                                Forms\Components\Select::make('course_id')
                                    ->relationship('course', 'name')
                                    ->label('Mata Kuliah')
                                    ->searchable()
                                    ->preload()
                                    ->required()
                                    ->helperText('Pilih dari daftar mata kuliah yang sudah ada.')
                                    ->reactive() // Auto-update preview setelah pilih
                                    ->afterStateUpdated(function ($state, callable $set, callable $get) {
                                        $course = Course::find($state);
                                        if ($course) {
                                            // Bisa tambah hidden field atau placeholder untuk auto-fill
                                            // Misal: $set('course_code_preview', $course->code);
                                        }
                                    })
                                    ->columnSpan(1),

                                Forms\Components\Select::make('dosen_id')
                                    ->relationship('dosen', 'name')
                                    ->label('Penanggung Jawab')
                                    ->searchable()
                                    ->preload()
                                    ->required()
                                    ->helperText('Pilih dosen yang bertanggung jawab atas RPS ini.')
                                    ->columnSpan(1),

                                // Kolom 2 (placeholder full di atas, tapi disini lanjut grid)
                                Forms\Components\Placeholder::make('course_info')
                                    ->label('Info Mata Kuliah')
                                    ->content(function ($get) {
                                        $courseId = $get('course_id');
                                        if (!$courseId) return 'Pilih mata kuliah dulu.';
                                        $course = Course::find($courseId);
                                        return $course ?
                                            "Kode: {$course->code} | SKS: {$course->sks} | Semester: {$course->semester}" :
                                            'Tidak ditemukan.';
                                    })
                                    ->columnSpan(2), // Full width untuk preview

                                Forms\Components\Select::make('tahun_ajaran')
                                    ->label('Tahun Ajaran')
                                    ->options($academicYears) // Gunakan array yang sudah kita buat
                                    ->default(now()->format('Y') . '/' . (now()->addYear()->format('Y'))) // Default tetap tahun sekarang
                                    ->searchable()
                                    ->required(),
                                Forms\Components\DatePicker::make('tgl_penyusunan')
                                    ->label('Tanggal Penyusunan')
                                    ->default(now())
                                    ->required(),
                                Forms\Components\RichEditor::make('deskripsi')
                                    ->label('Deskripsi RPS')
                                    ->columnSpan(2),
                                Forms\Components\RichEditor::make('materi_pembelajaran')
                                    ->label('Mater Pembelajaran/Bahan Kajian')
                                    ->columnSpan(2),
                            ]),
                    ]),

                // Section preview CPL (inherit dari course) - Grid opsional, karena single component
                Forms\Components\Section::make('Capaian Pembelajaran Lulusan (CPL)')
                    ->description('Pilih CPL yang dibebankan pada mata kuliah ini.')
                    ->schema([
                        Forms\Components\CheckboxList::make('cpls')
                            ->relationship('cpls', 'code')
                            ->label('CPL')
                            ->columns(2)
                            ->helperText('Pilih satu atau lebih CPL yang sesuai.')
                            ->required()
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('course.name')
                    ->label('Mata Kuliah')
                    ->searchable()
                    ->sortable()
                    ->badge(), // Bukan numeric, ganti ke text biasa

                Tables\Columns\TextColumn::make('course.code')
                    ->label('Kode Course')
                    ->badge()
                    ->sortable(),

                Tables\Columns\TextColumn::make('dosen.name')
                    ->label('Dosen')
                    ->searchable()
                    ->sortable()
                    ->badge(), // Bukan numeric

                Tables\Columns\TextColumn::make('tahun_ajaran')
                    ->label('Tahun Ajaran')
                    ->sortable()
                    ->badge(),

                Tables\Columns\TextColumn::make('deskripsi')
                    ->label('Deskripsi')
                    ->limit(50) // Truncate panjang
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime('d M Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime('d M Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('course_id')
                    ->relationship('course', 'name')
                    ->label('Filter per Mata Kuliah'),
                Tables\Filters\Filter::make('tahun_ajaran')
                    ->form([
                        Forms\Components\TextInput::make('tahun_ajaran')
                            ->placeholder('Contoh: 2025/2026'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query->when(
                            $data['tahun_ajaran'],
                            fn(Builder $query, $tahun) => $query->where('tahun_ajaran', $tahun),
                        );
                    })
            ])
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
            // Tambah relation manager nanti, misal untuk Rencana, Bobot, dll.
            CplsRelationManager::class,
            CPMKRelationManager::class,
            SubCpmksRelationManager::class,
            RencanasRelationManager::class,
            TugasesRelationManager::class,
            EvaluasisRelationManager::class,
            ReferensisRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListRps::route('/'),
            'create' => Pages\CreateRps::route('/create'),
            'edit' => Pages\EditRps::route('/{record}/edit'),
        ];
    }
}
