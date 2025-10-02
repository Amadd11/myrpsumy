import Layout from "@/Components/Layout";
import { TrendingUp, ArrowLeft } from "lucide-react";
import { Head, Link } from "@inertiajs/react";

const SubCPMK = () => {
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
                        <div className="p-3 rounded-lg bg-gradient-secondary">
                            <TrendingUp className="w-6 h-6 text-secondary-foreground" />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Sub-Capaian Pembelajaran Mata Kuliah
                        </h1>
                    </div>
                </div>

                <div className="max-w-4xl card-academic">
                    <div className="prose prose-lg max-w-none">
                        <p className="mb-6 text-muted-foreground">
                            Sub-CPMK adalah penjabaran lebih detail dari CPMK
                            yang menggambarkan kemampuan spesifik yang harus
                            dicapai mahasiswa pada setiap tahapan pembelajaran
                            dalam satu semester.
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 border rounded-lg bg-secondary/5 border-secondary/20">
                                <h3 className="mb-4 text-lg font-semibold text-secondary">
                                    Hierarki Sub-CPMK
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-4 border rounded bg-card">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold rounded-full bg-primary text-primary-foreground">
                                                1
                                            </div>
                                            <h4 className="font-medium">
                                                CPMK 1: Memahami Konsep Dasar
                                            </h4>
                                        </div>
                                        <div className="space-y-2 ml-11">
                                            <div className="p-3 text-sm rounded bg-primary/5">
                                                <strong>Sub-CPMK 1.1:</strong>{" "}
                                                Menjelaskan definisi dan ruang
                                                lingkup
                                            </div>
                                            <div className="p-3 text-sm rounded bg-primary/5">
                                                <strong>Sub-CPMK 1.2:</strong>{" "}
                                                Mengidentifikasi
                                                komponen-komponen utama
                                            </div>
                                            <div className="p-3 text-sm rounded bg-primary/5">
                                                <strong>Sub-CPMK 1.3:</strong>{" "}
                                                Membandingkan berbagai
                                                pendekatan teoritis
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 border rounded bg-card">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="flex items-center justify-center w-8 h-8 text-sm font-semibold rounded-full bg-secondary text-secondary-foreground">
                                                2
                                            </div>
                                            <h4 className="font-medium">
                                                CPMK 2: Menganalisis dan
                                                Mengevaluasi
                                            </h4>
                                        </div>
                                        <div className="space-y-2 ml-11">
                                            <div className="p-3 text-sm rounded bg-secondary/5">
                                                <strong>Sub-CPMK 2.1:</strong>{" "}
                                                Melakukan analisis situasional
                                            </div>
                                            <div className="p-3 text-sm rounded bg-secondary/5">
                                                <strong>Sub-CPMK 2.2:</strong>{" "}
                                                Mengevaluasi efektivitas metode
                                            </div>
                                            <div className="p-3 text-sm rounded bg-secondary/5">
                                                <strong>Sub-CPMK 2.3:</strong>{" "}
                                                Menyimpulkan hasil analisis
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border rounded-lg bg-accent/10 border-accent/20">
                                <h3 className="mb-3 text-lg font-semibold text-accent">
                                    Pedoman Penyusunan Sub-CPMK
                                </h3>
                                <div className="grid gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-accent"></div>
                                        <div>
                                            <p className="text-sm font-medium">
                                                Gunakan kata kerja operasional
                                                yang terukur
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                Contoh: menjelaskan,
                                                mengidentifikasi, menganalisis,
                                                mengevaluasi
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-accent"></div>
                                        <div>
                                            <p className="text-sm font-medium">
                                                Sesuaikan dengan tingkat
                                                taksonomi Bloom
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                Dari C1 (mengingat) hingga C6
                                                (mencipta)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-2 h-2 mt-2 rounded-full bg-accent"></div>
                                        <div>
                                            <p className="text-sm font-medium">
                                                Pastikan dapat dinilai secara
                                                objektif
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                Setiap sub-CPMK harus memiliki
                                                indikator penilaian yang jelas
                                            </p>
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

export default SubCPMK;
