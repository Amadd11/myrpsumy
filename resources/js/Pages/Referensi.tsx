import { Link } from "@inertiajs/react";
import Layout from "@/Components/Layout";
import { BookMarked, ArrowLeft } from "lucide-react";

const Referensi = () => {
    return (
        <Layout>
            <div className="container px-16 py-8 mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href="/"
                        className="p-2 transition-colors rounded-lg bg-muted hover:bg-muted/80"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-gradient-primary">
                            <BookMarked className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Referensi
                        </h1>
                    </div>
                </div>

                <div className="max-w-4xl card-academic">
                    <div className="prose prose-lg max-w-none">
                        <p className="mb-6 text-muted-foreground">
                            Daftar referensi berisi sumber-sumber pustaka yang
                            digunakan dalam pembelajaran mata kuliah, meliputi
                            buku teks, jurnal ilmiah, artikel, dan sumber
                            digital yang relevan dengan capaian pembelajaran.
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 border rounded-lg bg-primary/5 border-primary/20">
                                <h3 className="mb-4 text-lg font-semibold text-primary">
                                    Referensi Utama
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-4 border-l-4 rounded bg-card border-l-primary">
                                        <h4 className="mb-1 text-sm font-medium">
                                            Buku Teks Wajib
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            [Nama Pengarang]. (Tahun).{" "}
                                            <em>
                                                Judul Buku Utama Mata Kuliah
                                            </em>
                                            . Edisi ke-X. Kota Penerbit: Nama
                                            Penerbit.
                                        </p>
                                    </div>

                                    <div className="p-4 border-l-4 rounded bg-card border-l-secondary">
                                        <h4 className="mb-1 text-sm font-medium">
                                            Buku Pendukung
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            [Nama Pengarang]. (Tahun).{" "}
                                            <em>Judul Buku Pendukung</em>. Kota
                                            Penerbit: Nama Penerbit.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border rounded-lg bg-secondary/5 border-secondary/20">
                                <h3 className="mb-4 text-lg font-semibold text-secondary">
                                    Jurnal dan Artikel Ilmiah
                                </h3>
                                <div className="space-y-3">
                                    <div className="p-3 text-sm rounded bg-card">
                                        <p className="text-muted-foreground">
                                            [Nama Pengarang]. (Tahun). Judul
                                            artikel jurnal. <em>Nama Jurnal</em>
                                            , Volume(Nomor), halaman. DOI atau
                                            URL
                                        </p>
                                    </div>
                                    <div className="p-3 text-sm rounded bg-card">
                                        <p className="text-muted-foreground">
                                            [Nama Pengarang]. (Tahun). Judul
                                            artikel penelitian terkait.{" "}
                                            <em>Nama Jurnal Internasional</em>,
                                            Volume(Nomor), halaman. DOI
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="p-6 border rounded-lg bg-accent/10 border-accent/20">
                                    <h3 className="mb-3 text-lg font-semibold text-accent">
                                        Sumber Digital
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <h4 className="font-medium">
                                                Database Online
                                            </h4>
                                            <p className="text-xs text-muted-foreground">
                                                PubMed, ScienceDirect, ProQuest
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">
                                                E-Learning Platform
                                            </h4>
                                            <p className="text-xs text-muted-foreground">
                                                Coursera, edX, Khan Academy
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">
                                                Website Profesional
                                            </h4>
                                            <p className="text-xs text-muted-foreground">
                                                Asosiasi profesi dan organisasi
                                                terkait
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 border rounded-lg bg-success/10 border-success/20">
                                    <h3 className="mb-3 text-lg font-semibold text-success">
                                        Pedoman Penulisan
                                    </h3>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <p>
                                            • Gunakan format APA Style untuk
                                            konsistensi
                                        </p>
                                        <p>
                                            • Prioritaskan sumber terbaru (5-10
                                            tahun terakhir)
                                        </p>
                                        <p>
                                            • Sertakan minimal 70% referensi
                                            primer
                                        </p>
                                        <p>
                                            • Pastikan semua referensi dapat
                                            diakses mahasiswa
                                        </p>
                                        <p>
                                            • Verifikasi keakuratan semua data
                                            bibliografi
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-lg bg-muted/30">
                                <h3 className="mb-3 text-lg font-semibold">
                                    Catatan Penting
                                </h3>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <p>
                                        <strong>Aksesibilitas:</strong> Pastikan
                                        mahasiswa dapat mengakses semua
                                        referensi yang diperlukan melalui
                                        perpustakaan atau sumber legal lainnya.
                                    </p>
                                    <p>
                                        <strong>Relevansi:</strong> Semua
                                        referensi harus relevan dengan CPMK dan
                                        mendukung pencapaian tujuan pembelajaran
                                        mata kuliah.
                                    </p>
                                    <p>
                                        <strong>Update:</strong> Lakukan
                                        pembaruan referensi secara berkala untuk
                                        memastikan kesesuaian dengan
                                        perkembangan ilmu pengetahuan terkini.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Referensi;
