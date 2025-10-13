import {
    BookOpen,
    Target,
    Award,
    TrendingUp,
    Calendar,
    ClipboardCheck,
    GraduationCap,
    BarChart,
    BookMarked,
} from "lucide-react";
import React, { ReactElement, ReactNode } from "react";
import Layout from "@/Components/Layout";
import RPSCard from "@/Components/RPSCard";
import Footer from "@/Components/Footer"; // Import Footer baru

interface RpsMenuItem {
    title: string;
    description: string;
    icon: ReactElement;
    href: string;
    color: "blue" | "green" | "yellow";
}

const Index = () => {
    const rpsMenuItems = [
        {
            title: "Deskripsi Mata Kuliah",
            description:
                "Gambaran umum, tujuan pembelajaran, dan ruang lingkup mata kuliah dalam kurikulum program studi MARS.",
            icon: <BookOpen className="w-6 h-6" />,
            href: "/deskripsi-mata-kuliah",
            color: "primary" as const,
        },
        {
            title: "Capaian Pembelajaran (CPL)",
            description:
                "Kemampuan yang diperoleh lulusan melalui internalisasi pengetahuan, sikap, dan keterampilan sesuai profil lulusan.",
            icon: <Target className="w-6 h-6" />,
            href: "/capaian-pembelajaran",
            color: "secondary" as const,
        },
        {
            title: "Capaian Pembelajaran Mata Kuliah (CPMK)",
            description:
                "Kemampuan spesifik yang dijabarkan dari CPL dan dibebankan pada mata kuliah tertentu.",
            icon: <Award className="w-6 h-6" />,
            href: "/cpmk",
            color: "primary" as const,
        },
        {
            title: "Sub-Capaian Pembelajaran Mata Kuliah",
            description:
                "Penjabaran detail CPMK yang menggambarkan kemampuan spesifik pada setiap tahapan pembelajaran.",
            icon: <TrendingUp className="w-6 h-6" />,
            href: "/sub-cpmk",
            color: "secondary" as const,
        },
        {
            title: "Rencana Kegiatan Pembelajaran",
            description:
                "Rencana proses pembelajaran mingguan yang disusun sistematis untuk mencapai CPMK selama satu semester.",
            icon: <Calendar className="w-6 h-6" />,
            href: "/rencana-kegiatan-pembelajaran",
            color: "accent" as const,
        },
        {
            title: "Metode Evaluasi",
            description:
                "Cara penilaian kemajuan belajar berupa komponen, indikator, dan kriteria penilaian CPMK.",
            icon: <ClipboardCheck className="w-6 h-6" />,
            href: "/metode-evaluasi",
            color: "secondary" as const,
        },
        {
            title: "Bobot (Persentase)",
            description:
                "Distribusi dan persentase penilaian untuk setiap komponen evaluasi mata kuliah.",
            icon: <BarChart className="w-6 h-6" />,
            href: "/bobot",
            color: "primary" as const,
        },
        {
            title: "Referensi",
            description:
                "Sumber pustaka berupa buku teks, jurnal ilmiah, dan sumber digital yang mendukung pembelajaran.",
            icon: <BookMarked className="w-6 h-6" />,
            href: "/referensi",
            color: "accent" as const,
        },
    ];

    return (
        <>
            <Layout>
                {/* Hero Section */}
                <section className="text-white bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
                    <div className="container px-4 py-16 mx-auto">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                                    <GraduationCap className="w-16 h-16" />
                                </div>
                            </div>
                            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                                My RPS Prodi MARS UMY
                            </h1>
                            <p className="mb-8 text-xl md:text-2xl text-white/90">
                                Sistem Manajemen Rencana Pembelajaran Semester
                            </p>
                            <p className="max-w-2xl mx-auto text-lg text-white/80">
                                Platform digital untuk mengelola dan mengakses
                                semua komponen RPS mata kuliah di Program Studi
                                Manajemen dan Administrasi Rumah Sakit (MARS)
                                Universitas Muhammadiyah Yogyakarta.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 bg-background">
                    <div className="container px-4 mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-foreground">
                                Komponen Rencana Pembelajaran Semester
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                                Akses dan kelola seluruh elemen RPS untuk
                                memastikan kualitas pembelajaran yang
                                terstruktur dan terintegrasi
                            </p>
                        </div>

                        <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
                            {rpsMenuItems.map((item, index) => (
                                <RPSCard
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    icon={item.icon}
                                    href={item.href}
                                    color={item.color}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Info Section */}
                <section className="py-16 bg-muted/30">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid gap-8 text-center md:grid-cols-3">
                                <div className="space-y-4">
                                    <div className="inline-block p-4 rounded-lg bg-primary/10">
                                        <BookOpen className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        Standar Akademik
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Mengikuti standar kurikulum nasional dan
                                        akreditasi program studi
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="inline-block p-4 rounded-lg bg-secondary/10">
                                        <Target className="w-8 h-8 text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        Terintegrasi
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Semua komponen RPS saling terhubung
                                        untuk mencapai profil lulusan
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="inline-block p-4 rounded-lg bg-accent/10">
                                        <Award className="w-8 h-8 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        Berkualitas
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Pembelajaran berbasis kompetensi untuk
                                        menghasilkan lulusan berkualitas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Index;
