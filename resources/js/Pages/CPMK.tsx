import Layout from "@/Components/Layout";
import { Award, ArrowLeft } from "lucide-react";
import { Head, Link } from "@inertiajs/react";

const CPMK = () => {
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
                        <div className="p-3 rounded-lg bg-gradient-primary">
                            <Award className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Capaian Pembelajaran Mata Kuliah (CPMK)
                        </h1>
                    </div>
                </div>

                <div className="max-w-4xl card-academic">
                    <div className="prose prose-lg max-w-none">
                        <p className="mb-6 text-muted-foreground">
                            CPMK adalah kemampuan yang dijabarkan secara
                            spesifik dari CPL yang dibebankan pada mata kuliah,
                            dan bersifat spesifik terhadap bahan kajian atau
                            materi pembelajaran mata kuliah tersebut.
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 border rounded-lg bg-primary/5 border-primary/20">
                                <h3 className="mb-4 text-lg font-semibold text-primary">
                                    Struktur CPMK
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-4 border-l-4 rounded bg-card border-l-primary">
                                        <h4 className="mb-2 font-medium">
                                            CPMK 1
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Mahasiswa mampu memahami dan
                                            menjelaskan konsep dasar [topik mata
                                            kuliah] sesuai dengan standar
                                            profesi
                                        </p>
                                    </div>
                                    <div className="p-4 border-l-4 rounded bg-card border-l-secondary">
                                        <h4 className="mb-2 font-medium">
                                            CPMK 2
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Mahasiswa mampu menganalisis dan
                                            mengevaluasi [aspek khusus mata
                                            kuliah] dengan menggunakan metode
                                            yang tepat
                                        </p>
                                    </div>
                                    <div className="p-4 border-l-4 rounded bg-card border-l-accent">
                                        <h4 className="mb-2 font-medium">
                                            CPMK 3
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Mahasiswa mampu menerapkan
                                            pengetahuan [mata kuliah] dalam
                                            situasi nyata sesuai dengan standar
                                            operasional
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-lg bg-muted/30">
                                <h3 className="mb-3 text-lg font-semibold">
                                    Karakteristik CPMK yang Baik
                                </h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            <strong>Spesifik:</strong> Jelas dan
                                            terarah pada kemampuan tertentu
                                        </li>
                                        <li>
                                            <strong>Measurable:</strong> Dapat
                                            diukur dan dinilai
                                        </li>
                                        <li>
                                            <strong>Achievable:</strong> Dapat
                                            dicapai oleh mahasiswa
                                        </li>
                                    </ul>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            <strong>Relevant:</strong> Sesuai
                                            dengan CPL dan profil lulusan
                                        </li>
                                        <li>
                                            <strong>Time-bound:</strong>{" "}
                                            Memiliki batasan waktu yang jelas
                                        </li>
                                        <li>
                                            <strong>Observable:</strong> Dapat
                                            diamati pencapaiannya
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CPMK;
