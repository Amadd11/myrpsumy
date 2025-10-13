import Layout from "@/Components/Layout";
import { Calendar, ArrowLeft } from "lucide-react";
import { Head, Link } from "@inertiajs/react";

const RencanaKegiatanPembelajaran = () => {
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
                            <Calendar className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Rencana Kegiatan Pembelajaran
                        </h1>
                    </div>
                </div>

                <div className="max-w-6xl card-academic">
                    <div className="prose prose-lg max-w-none">
                        <p className="mb-6 text-muted-foreground">
                            Rencana Kegiatan Pembelajaran berisi rencana proses
                            pembelajaran untuk mencapai CPMK yang disusun secara
                            sistematis dalam bentuk rencana pembelajaran
                            mingguan selama satu semester.
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 border rounded-lg bg-primary/5 border-primary/20">
                                <h3 className="mb-4 text-lg font-semibold text-primary">
                                    Contoh Struktur Mingguan
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="p-3 font-semibold text-left bg-muted/30">
                                                    Minggu
                                                </th>
                                                <th className="p-3 font-semibold text-left bg-muted/30">
                                                    Sub-CPMK
                                                </th>
                                                <th className="p-3 font-semibold text-left bg-muted/30">
                                                    Bahan Kajian
                                                </th>
                                                <th className="p-3 font-semibold text-left bg-muted/30">
                                                    Metode Pembelajaran
                                                </th>
                                                <th className="p-3 font-semibold text-left bg-muted/30">
                                                    Waktu
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-border/50">
                                                <td className="p-3">1</td>
                                                <td className="p-3">
                                                    Sub-CPMK 1.1
                                                </td>
                                                <td className="p-3">
                                                    Pengenalan konsep dasar
                                                </td>
                                                <td className="p-3">
                                                    Ceramah, Diskusi
                                                </td>
                                                <td className="p-3">
                                                    2x50 menit
                                                </td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="p-3">2</td>
                                                <td className="p-3">
                                                    Sub-CPMK 1.2
                                                </td>
                                                <td className="p-3">
                                                    Komponen dan struktur
                                                </td>
                                                <td className="p-3">
                                                    Presentasi, Studi kasus
                                                </td>
                                                <td className="p-3">
                                                    2x50 menit
                                                </td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="p-3">3-4</td>
                                                <td className="p-3">
                                                    Sub-CPMK 2.1
                                                </td>
                                                <td className="p-3">
                                                    Analisis praktis
                                                </td>
                                                <td className="p-3">
                                                    Workshop, Praktek
                                                </td>
                                                <td className="p-3">
                                                    4x50 menit
                                                </td>
                                            </tr>
                                            <tr className="border-b border-border/50 bg-accent/5">
                                                <td className="p-3 font-medium">
                                                    8
                                                </td>
                                                <td className="p-3 font-medium">
                                                    -
                                                </td>
                                                <td className="p-3 font-medium">
                                                    Ujian Tengah Semester
                                                </td>
                                                <td className="p-3 font-medium">
                                                    Ujian tertulis
                                                </td>
                                                <td className="p-3 font-medium">
                                                    100 menit
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="p-6 border rounded-lg bg-secondary/10 border-secondary/20">
                                    <h3 className="mb-3 text-lg font-semibold text-secondary">
                                        Metode Pembelajaran
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>
                                            • <strong>Ceramah:</strong>{" "}
                                            Penyampaian materi secara langsung
                                        </li>
                                        <li>
                                            • <strong>Diskusi:</strong>{" "}
                                            Interaksi dua arah mahasiswa-dosen
                                        </li>
                                        <li>
                                            • <strong>Studi Kasus:</strong>{" "}
                                            Analisis kasus nyata
                                        </li>
                                        <li>
                                            •{" "}
                                            <strong>
                                                Problem Based Learning:
                                            </strong>{" "}
                                            Pembelajaran berbasis masalah
                                        </li>
                                        <li>
                                            •{" "}
                                            <strong>
                                                Praktek Laboratorium:
                                            </strong>{" "}
                                            Praktik langsung
                                        </li>
                                        <li>
                                            • <strong>Presentasi:</strong>{" "}
                                            Penyajian hasil kerja mahasiswa
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 border rounded-lg bg-accent/10 border-accent/20">
                                    <h3 className="mb-3 text-lg font-semibold text-accent">
                                        Pengalaman Belajar
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Mengikuti kuliah tatap muka</li>
                                        <li>
                                            • Membaca dan menganalisis literatur
                                        </li>
                                        <li>
                                            • Mengerjakan tugas individu dan
                                            kelompok
                                        </li>
                                        <li>• Melakukan observasi lapangan</li>
                                        <li>• Mempresentasikan hasil karya</li>
                                        <li>
                                            • Berpartisipasi dalam diskusi kelas
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

export default RencanaKegiatanPembelajaran;
