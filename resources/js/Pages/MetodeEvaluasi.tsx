import Layout from "@/Components/Layout";
import { ClipboardCheck, ArrowLeft } from "lucide-react";
import { Head, Link } from "@inertiajs/react";

const MetodeEvaluasi = () => {
    return (
        <Layout>
            <div className="container px-4 py-6 mx-auto md:px-8 md:py-8 lg:px-16 lg:py-12">
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href="/"
                        className="p-2 transition-colors rounded-lg bg-muted hover:bg-muted/80"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-gradient-secondary">
                            <ClipboardCheck className="w-6 h-6 text-secondary-foreground" />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Metode Evaluasi
                        </h1>
                    </div>
                </div>

                <div className="max-w-5xl card-academic">
                    <div className="prose prose-lg max-w-none">
                        <p className="mb-6 text-muted-foreground">
                            Metode evaluasi berisi cara penilaian kemajuan
                            belajar mahasiswa berupa komponen penilaian,
                            indikator penilaian, dan kriteria penilaian yang
                            digunakan untuk mengukur ketercapaian CPMK.
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 border rounded-lg bg-secondary/5 border-secondary/20">
                                <h3 className="mb-4 text-lg font-semibold text-secondary">
                                    Komponen Penilaian
                                </h3>
                                <div className="grid gap-4">
                                    <div className="p-4 border rounded bg-card">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-primary">
                                                Partisipasi & Kehadiran
                                            </h4>
                                            <span className="text-lg font-bold text-primary">
                                                10%
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Keaktifan dalam diskusi kelas dan
                                            kehadiran perkuliahan
                                        </p>
                                    </div>

                                    <div className="p-4 border rounded bg-card">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-secondary">
                                                Tugas & Praktikum
                                            </h4>
                                            <span className="text-lg font-bold text-secondary">
                                                25%
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Tugas individu, kelompok, dan
                                            laporan praktikum
                                        </p>
                                    </div>

                                    <div className="p-4 border rounded bg-card">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-accent">
                                                Ujian Tengah Semester
                                            </h4>
                                            <span className="text-lg font-bold text-accent">
                                                30%
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Evaluasi pencapaian CPMK 1-4 di
                                            pertengahan semester
                                        </p>
                                    </div>

                                    <div className="p-4 border rounded bg-card">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-destructive">
                                                Ujian Akhir Semester
                                            </h4>
                                            <span className="text-lg font-bold text-destructive">
                                                35%
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Evaluasi komprehensif seluruh CPMK
                                            semester
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="p-6 border rounded-lg bg-primary/10 border-primary/20">
                                    <h3 className="mb-3 text-lg font-semibold text-primary">
                                        Teknik Penilaian
                                    </h3>
                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="text-sm font-medium">
                                                Penilaian Tertulis
                                            </h4>
                                            <p className="text-xs text-muted-foreground">
                                                Ujian objektif, esai, dan
                                                analisis kasus
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium">
                                                Penilaian Praktik
                                            </h4>
                                            <p className="text-xs text-muted-foreground">
                                                Demonstrasi keterampilan dan
                                                simulasi
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium">
                                                Penilaian Portofolio
                                            </h4>
                                            <p className="text-xs text-muted-foreground">
                                                Kumpulan karya dan refleksi
                                                pembelajaran
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium">
                                                Penilaian Proyek
                                            </h4>
                                            <p className="text-xs text-muted-foreground">
                                                Hasil kerja individual atau
                                                kelompok
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 border rounded-lg bg-success/10 border-success/20">
                                    <h3 className="mb-3 text-lg font-semibold text-success">
                                        Kriteria Penilaian
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>A (Sangat Baik)</span>
                                            <span className="font-semibold">
                                                86 - 100
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>A- (Baik Sekali)</span>
                                            <span className="font-semibold">
                                                81 - 85
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>B+ (Baik)</span>
                                            <span className="font-semibold">
                                                76 - 80
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>B (Cukup Baik)</span>
                                            <span className="font-semibold">
                                                71 - 75
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>B- (Cukup)</span>
                                            <span className="font-semibold">
                                                66 - 70
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>C+ (Kurang Baik)</span>
                                            <span className="font-semibold">
                                                61 - 65
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>C (Kurang)</span>
                                            <span className="font-semibold">
                                                56 - 60
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>D (Sangat Kurang)</span>
                                            <span className="font-semibold">
                                                41 - 55
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>E (Tidak Lulus)</span>
                                            <span className="font-semibold">
                                                ≤ 40
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MetodeEvaluasi;
