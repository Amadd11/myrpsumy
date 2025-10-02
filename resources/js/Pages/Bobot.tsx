import Layout from "@/Components/Layout";
import { BarChart, ArrowLeft } from "lucide-react";
import { Head, Link } from "@inertiajs/react";

const Bobot = () => {
    return (
        <Layout>
            <div className="container px-4 py-8 mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href="/"
                        className="p-2 transition-colors rounded-lg bg-muted hover:bg-muted/80"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-gradient-primary">
                            <BarChart className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Bobot (Persentase)
                        </h1>
                    </div>
                </div>

                <div className="max-w-4xl card-academic">
                    <div className="prose prose-lg max-w-none">
                        <p className="mb-6 text-muted-foreground">
                            Bobot atau persentase menunjukkan distribusi nilai
                            untuk setiap komponen penilaian dalam mata kuliah,
                            yang digunakan untuk menghitung nilai akhir
                            mahasiswa secara objektif dan proporsional.
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 border rounded-lg bg-primary/5 border-primary/20">
                                <h3 className="mb-4 text-lg font-semibold text-primary">
                                    Distribusi Bobot Penilaian
                                </h3>

                                <div className="space-y-4">
                                    <div className="overflow-hidden border rounded-lg bg-card">
                                        <div className="p-4 bg-muted/30">
                                            <h4 className="font-semibold">
                                                Komponen Penilaian dan Bobot
                                            </h4>
                                        </div>
                                        <div className="p-4">
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between p-3 border-l-4 rounded bg-primary/5 border-l-primary">
                                                    <div>
                                                        <h5 className="font-medium">
                                                            Kehadiran &
                                                            Partisipasi
                                                        </h5>
                                                        <p className="text-sm text-muted-foreground">
                                                            Keaktifan dalam
                                                            kelas dan diskusi
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-bold text-primary">
                                                            10%
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">
                                                            Bobot minimum
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between p-3 border-l-4 rounded bg-secondary/5 border-l-secondary">
                                                    <div>
                                                        <h5 className="font-medium">
                                                            Tugas & Quiz
                                                        </h5>
                                                        <p className="text-sm text-muted-foreground">
                                                            Tugas individu,
                                                            kelompok, dan kuis
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-bold text-secondary">
                                                            20%
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">
                                                            Formatif
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between p-3 border-l-4 rounded bg-accent/5 border-l-accent">
                                                    <div>
                                                        <h5 className="font-medium">
                                                            Ujian Tengah
                                                            Semester (UTS)
                                                        </h5>
                                                        <p className="text-sm text-muted-foreground">
                                                            Evaluasi pada
                                                            pertengahan semester
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-bold text-accent">
                                                            30%
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">
                                                            Sumatif 1
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between p-3 border-l-4 rounded bg-destructive/5 border-l-destructive">
                                                    <div>
                                                        <h5 className="font-medium">
                                                            Ujian Akhir Semester
                                                            (UAS)
                                                        </h5>
                                                        <p className="text-sm text-muted-foreground">
                                                            Evaluasi
                                                            komprehensif akhir
                                                            semester
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-bold text-destructive">
                                                            40%
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">
                                                            Sumatif 2
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-3 mt-4 border rounded bg-success/10 border-success/20">
                                                <div className="flex items-center justify-between">
                                                    <span className="font-semibold text-success">
                                                        Total Bobot
                                                    </span>
                                                    <span className="text-2xl font-bold text-success">
                                                        100%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="p-6 border rounded-lg bg-secondary/10 border-secondary/20">
                                    <h3 className="mb-3 text-lg font-semibold text-secondary">
                                        Rumus Perhitungan
                                    </h3>
                                    <div className="p-4 font-mono text-sm border rounded bg-card">
                                        <p className="mb-2">
                                            <strong>Nilai Akhir =</strong>
                                        </p>
                                        <p>(Kehadiran × 0.10) +</p>
                                        <p>(Tugas × 0.20) +</p>
                                        <p>(UTS × 0.30) +</p>
                                        <p>(UAS × 0.40)</p>
                                    </div>
                                    <div className="mt-3 text-xs text-muted-foreground">
                                        <p>
                                            <strong>Contoh:</strong> Kehadiran:
                                            85, Tugas: 90, UTS: 80, UAS: 85
                                        </p>
                                        <p>
                                            <strong>Nilai Akhir:</strong>{" "}
                                            (85×0.1) + (90×0.2) + (80×0.3) +
                                            (85×0.4) = 84.5
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 border rounded-lg bg-accent/10 border-accent/20">
                                    <h3 className="mb-3 text-lg font-semibold text-accent">
                                        Ketentuan Bobot
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            •{" "}
                                            <strong>Kehadiran minimum:</strong>{" "}
                                            5-15% dari total nilai
                                        </li>
                                        <li>
                                            • <strong>Tugas formatif:</strong>{" "}
                                            15-25% untuk evaluasi berkala
                                        </li>
                                        <li>
                                            • <strong>UTS:</strong> 25-35% untuk
                                            evaluasi tengah semester
                                        </li>
                                        <li>
                                            • <strong>UAS:</strong> 35-45%
                                            sebagai evaluasi komprehensif
                                        </li>
                                        <li>
                                            • <strong>Total bobot:</strong>{" "}
                                            Harus tepat 100%
                                        </li>
                                        <li>
                                            • <strong>Transparansi:</strong>{" "}
                                            Diinformasikan di awal semester
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="p-6 rounded-lg bg-muted/30">
                                <h3 className="mb-3 text-lg font-semibold">
                                    Prinsip Pembobotan
                                </h3>
                                <div className="grid gap-4 text-sm md:grid-cols-3">
                                    <div>
                                        <h4 className="mb-2 font-medium text-primary">
                                            Proporsional
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Bobot sesuai dengan tingkat
                                            kesulitan dan pentingnya komponen
                                            penilaian
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="mb-2 font-medium text-secondary">
                                            Adil
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Memberikan kesempatan yang sama bagi
                                            semua mahasiswa untuk meraih nilai
                                            optimal
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="mb-2 font-medium text-accent">
                                            Terukur
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Setiap komponen dapat dinilai secara
                                            objektif dan konsisten
                                        </p>
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

export default Bobot;
