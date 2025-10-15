import React from "react";
import {
    BookMarked,
    ExternalLink,
    BookOpen,
    User,
    Building,
    Calendar,
} from "lucide-react";
import { Badge } from "@/Components/ui/badge";

interface Referensi {
    id: number;
    tipe: string;
    penulis?: string;
    judul: string;
    tahun?: string;
    penerbit?: string;
    tautan?: string;
}

interface ReferensiTabProps {
    referensi: Referensi[];
}

const ReferensiTab: React.FC<ReferensiTabProps> = ({ referensi = [] }) => {
    const getTipeVariant = (tipe: string) => {
        if (tipe === "utama")
            return "bg-cyan-100 text-cyan-800 border-cyan-200";
        return "bg-gray-100 text-gray-700 border-gray-200";
    };

    return (
        <div className="p-6 space-y-6 border shadow-xl bg-white/80 rounded-2xl border-gray-100/50">
            <div className="flex items-center gap-3">
                <div className="p-2 text-white shadow-lg bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                    <BookMarked className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                    Daftar Referensi
                </h2>
            </div>

            {referensi.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 mb-4 bg-gray-100 rounded-full">
                        <BookMarked className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        Belum Ada Referensi
                    </h3>
                    <p className="max-w-md text-gray-500">
                        Tidak ada referensi yang tersedia untuk mata kuliah ini
                        saat ini. Silakan periksa kembali nanti.
                    </p>
                </div>
            ) : (
                <div className="overflow-hidden border shadow-xl bg-white/80 backdrop-blur-sm border-gray-100/50 rounded-2xl">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead className="text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100">
                                <tr>
                                    <th className="px-6 py-4 font-semibold tracking-wide text-left border-b border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <BookOpen className="w-4 h-4 text-gray-400" />
                                            Tipe
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 font-semibold tracking-wide text-left border-b border-gray-200">
                                        Judul
                                    </th>
                                    <th className="px-6 py-4 font-semibold tracking-wide text-left border-b border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-gray-400" />
                                            Penulis
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 font-semibold tracking-wide text-left border-b border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <Building className="w-4 h-4 text-gray-400" />
                                            Penerbit
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 font-semibold tracking-wide text-left border-b border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-gray-400" />
                                            Tahun
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 font-semibold tracking-wide text-left border-b border-gray-200">
                                        Tautan
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {referensi.map((ref, index) => (
                                    <tr
                                        key={ref.id}
                                        className={`transition-all duration-300 hover:bg-cyan-50/50 ${
                                            index % 2 === 0
                                                ? "bg-white/80"
                                                : "bg-gray-50/80"
                                        }`}
                                    >
                                        <td className="px-6 py-5 border-b border-gray-100">
                                            <Badge
                                                className={`font-semibold capitalize transition-colors ${getTipeVariant(
                                                    ref.tipe
                                                )}`}
                                            >
                                                {ref.tipe}
                                            </Badge>
                                        </td>
                                        <td className="max-w-xs px-6 py-5 font-medium text-gray-900 border-b border-gray-100">
                                            <p className="break-words">
                                                {ref.judul}
                                            </p>
                                        </td>
                                        <td className="px-6 py-5 text-gray-700 border-b border-gray-100">
                                            {ref.penulis || "-"}
                                        </td>
                                        <td className="px-6 py-5 text-gray-700 border-b border-gray-100">
                                            {ref.penerbit || "-"}
                                        </td>
                                        <td className="px-6 py-5 text-gray-600 border-b border-gray-100">
                                            {ref.tahun || "-"}
                                        </td>
                                        <td className="px-6 py-5 border-b border-gray-100">
                                            {ref.tautan ? (
                                                <a
                                                    href={ref.tautan}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 font-medium transition-colors text-cyan-600 hover:text-cyan-700"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Kunjungi
                                                </a>
                                            ) : (
                                                <span className="text-gray-400">
                                                    —
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReferensiTab;
