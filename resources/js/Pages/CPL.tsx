import Layout from "@/Components/Layout";
import { Target, ArrowLeft } from "lucide-react";
import { Head, Link } from "@inertiajs/react";

const CapaianPembelajaran = () => {
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
                            <Target className="w-6 h-6 text-secondary-foreground" />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">
                            Capaian Pembelajaran (CPL)
                        </h1>
                    </div>
                </div>
                <div className="max-w-4xl card-academic">
                    <div className="prose prose-lg max-w-none">
                        <p className="mb-6 text-muted-foreground">
                            Capaian Pembelajaran Lulusan (CPL) adalah kemampuan
                            yang diperoleh melalui internalisasi pengetahuan,
                            sikap, keterampilan, kompetensi, dan akumulasi
                            pengalaman kerja yang sesuai dengan profil lulusan
                            program studi MARS.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="p-6 border rounded-lg bg-primary/10 border-primary/20">
                                <h3 className="mb-3 text-lg font-semibold text-primary">
                                    CPL Sikap
                                </h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>
                                        • Bertakwa kepada Tuhan Yang Maha Esa
                                    </li>
                                    <li>
                                        • Menjunjung tinggi nilai kemanusiaan
                                    </li>
                                    <li>
                                        • Berperan sebagai warga negara yang
                                        bangga dan cinta tanah air
                                    </li>
                                    <li>
                                        • Berkontribusi dalam peningkatan mutu
                                        kehidupan bermasyarakat
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 border rounded-lg bg-secondary/10 border-secondary/20">
                                <h3 className="mb-3 text-lg font-semibold text-secondary">
                                    CPL Pengetahuan
                                </h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>
                                        • Menguasai konsep teoritis bidang rekam
                                        medis
                                    </li>
                                    <li>
                                        • Menguasai prinsip dan teknik analisis
                                        data kesehatan
                                    </li>
                                    <li>
                                        • Menguasai sistem informasi kesehatan
                                    </li>
                                    <li>
                                        • Memahami aspek hukum dan etika profesi
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 border rounded-lg bg-accent/10 border-accent/20">
                                <h3 className="mb-3 text-lg font-semibold text-accent">
                                    CPL Keterampilan Umum
                                </h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>
                                        • Mampu menerapkan pemikiran logis,
                                        kritis, sistematis, dan inovatif
                                    </li>
                                    <li>
                                        • Mampu menunjukkan kinerja mandiri,
                                        bermutu, dan terukur
                                    </li>
                                    <li>
                                        • Mampu mengkaji implikasi pengembangan
                                        ilmu pengetahuan
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 border rounded-lg bg-success/10 border-success/20">
                                <h3 className="mb-3 text-lg font-semibold text-success">
                                    CPL Keterampilan Khusus
                                </h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>
                                        • Mampu melakukan pengkodean diagnosis
                                        dan tindakan medis
                                    </li>
                                    <li>
                                        • Mampu mengelola rekam medis elektronik
                                    </li>
                                    <li>
                                        • Mampu melakukan analisis data rekam
                                        medis
                                    </li>
                                    <li>
                                        • Mampu melakukan audit klinis sederhana
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CapaianPembelajaran;
