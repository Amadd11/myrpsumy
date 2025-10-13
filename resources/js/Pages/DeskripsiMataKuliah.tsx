import Layout from "@/Components/Layout"; // Menggunakan Layout dari folder Layouts
import { Head, Link } from "@inertiajs/react"; // Menggunakan Head dan Link dari Inertia
import { BookOpen, ArrowLeft } from "lucide-react";
import React, { ReactNode } from "react";

const DeskripsiMataKuliah = () => {
    return (
        <Layout>
            <div className="container px-4 py-6 mx-auto md:px-8 md:py-8 lg:px-16 lg:py-12">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <Link
                        href="/"
                        className="p-2 transition-colors rounded-lg bg-muted hover:bg-muted/80"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-gradient-primary">
                            <BookOpen className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h1 className="text-xl font-bold text-foreground md:text-2xl">
                            Deskripsi Mata Kuliah
                        </h1>
                    </div>
                </div>

                <div className="max-w-4xl card-academic">
                    <div className="prose prose-base md:prose-lg max-w-none">
                        <p className="mb-4 md:mb-6 text-muted-foreground">
                            Bagian ini berisi deskripsi lengkap mengenai mata
                            kuliah yang akan dipelajari, termasuk tujuan
                            pembelajaran, ruang lingkup materi, dan konteks mata
                            kuliah dalam kurikulum program studi MARS.
                        </p>

                        <div className="space-y-4 md:space-y-6">
                            <div className="p-4 rounded-lg md:p-6 bg-muted/30">
                                <h3 className="mb-2 text-base font-semibold md:mb-3 text-primary md:text-lg">
                                    Format Deskripsi
                                </h3>
                                <ul className="space-y-1 text-sm md:space-y-2 text-muted-foreground md:text-base">
                                    <li>• Gambaran umum mata kuliah</li>
                                    <li>• Tujuan pembelajaran umum</li>
                                    <li>• Ruang lingkup materi</li>
                                    <li>• Prasyarat mata kuliah (jika ada)</li>
                                    <li>• Bobot SKS dan jam pembelajaran</li>
                                </ul>
                            </div>

                            <div className="p-4 border rounded-lg md:p-6 bg-secondary/10 border-secondary/20">
                                <h3 className="mb-2 text-base font-semibold md:mb-3 text-secondary md:text-lg">
                                    Contoh Template
                                </h3>
                                <div className="p-3 text-xs border rounded md:p-4 md:text-sm bg-card">
                                    <p className="italic text-muted-foreground">
                                        "Mata kuliah ini membahas tentang [topik
                                        utama] yang mencakup [ruang lingkup
                                        materi]. Mahasiswa akan mempelajari
                                        [komponen pembelajaran utama] untuk
                                        mencapai kemampuan [tujuan
                                        pembelajaran]. Mata kuliah ini merupakan
                                        [posisi dalam kurikulum] dengan bobot
                                        [jumlah SKS] SKS."
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

export default DeskripsiMataKuliah;
