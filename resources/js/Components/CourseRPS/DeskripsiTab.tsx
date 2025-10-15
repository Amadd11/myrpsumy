import React, { FC } from "react";
import { BookOpen, User, Calendar, ClipboardList } from "lucide-react";

interface DeskripsiTabProps {
    courseInfo?: {
        penanggungJawab: string;
        tahunAjaran: string;
        deskripsi?: string;
        materiPembelajaran?: string;
        tglPenyusunan?: string;
    };
}

const DeskripsiTab: FC<DeskripsiTabProps> = ({ courseInfo }) => {
    // Fallback jika data courseInfo belum ada
    console.log("Data yang diterima oleh DeskripsiTab:", courseInfo);

    const info = courseInfo || {
        penanggungJawab: "Belum Diatur",
        tahunAjaran: "—",
        deskripsi: undefined,
        materiPembelajaran: undefined,
        tglPenyusunan: undefined,
    };

    return (
        <div className="p-6 space-y-8 border shadow-xl bg-white/80 rounded-2xl border-gray-100/50">
            {/* 🧭 Header */}
            <div className="flex items-center gap-3">
                <div className="p-2 text-white shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                    <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                    Deskripsi Mata Kuliah
                </h2>
            </div>

            {/* 📘 Informasi Umum */}
            <div className="space-y-4">
                <h4 className="text-base font-semibold text-gray-900">
                    Informasi Umum
                </h4>

                <div className="grid gap-6 p-6 border bg-gradient-to-r from-gray-50 to-white rounded-xl border-gray-200/60 md:grid-cols-3">
                    {/* 👨‍🏫 Penanggung Jawab */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                            <User className="w-4 h-4 text-gray-400" />
                            Penanggung Jawab
                        </div>
                        <p className="font-medium text-gray-900">
                            {info.penanggungJawab || "—"}
                        </p>
                    </div>

                    {/* 🗓 Tahun Ajaran */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            Tahun Ajaran
                        </div>
                        <p className="font-medium text-gray-900">
                            {info.tahunAjaran || "—"}
                        </p>
                    </div>

                    {/* ✅ TAMBAHAN: Tanggal Penyusunan */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            Tanggal Penyusunan
                        </div>
                        <p className="font-medium text-gray-900">
                            {info.tglPenyusunan || "—"}
                        </p>
                    </div>
                </div>
            </div>

            {/* 📄 Deskripsi Mata Kuliah */}
            <div className="space-y-4">
                <h4 className="text-base font-semibold text-gray-900">
                    Deskripsi Mata Kuliah
                </h4>
                <div className="p-6 bg-white border shadow-sm border-gray-200/50 rounded-xl">
                    {info.deskripsi ? (
                        <div
                            className="leading-relaxed prose-sm prose text-gray-700 max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: info.deskripsi,
                            }}
                        />
                    ) : (
                        <p className="italic text-gray-500">
                            Belum ada deskripsi mata kuliah yang ditambahkan.
                        </p>
                    )}
                </div>
            </div>

            {/* ✅ TAMBAHAN: Materi Pembelajaran */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 text-white shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                        <ClipboardList className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-bold tracking-tight text-gray-900">
                        Materi Pembelajaran
                    </h4>
                </div>
                <div className="p-6 bg-white border shadow-sm border-gray-200/50 rounded-xl">
                    {info.materiPembelajaran ? (
                        <div
                            className="leading-relaxed prose-sm prose text-gray-700 max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: info.materiPembelajaran,
                            }}
                        />
                    ) : (
                        <p className="italic text-gray-500">
                            Belum ada materi pembelajaran yang ditambahkan.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DeskripsiTab;
