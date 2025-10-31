import React from "react";
import { BookMarked, BookOpen } from "lucide-react";
import { Badge } from "@/Components/ui/badge";

interface Referensi {
    id: number;
    tipe: string;
    referensi: string;
}

interface ReferensiTabProps {
    referensi: Referensi[];
}

const ReferensiTab: React.FC<ReferensiTabProps> = ({ referensi }) => {
    const safeReferensi = Array.isArray(referensi) ? referensi : [];

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

            {safeReferensi.length === 0 ? (
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
                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                    {safeReferensi.map((ref, index) => (
                        <div
                            key={ref.id}
                            className={`group relative overflow-hidden rounded-2xl border border-gray-100/50 bg-white/80  shadow-lg transition-all duration-300 hover:shadow-xl hover:border-cyan-200/50 ${
                                index % 2 === 0
                                    ? "hover:bg-cyan-50/30"
                                    : "hover:bg-gray-50/30"
                            }`}
                        >
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <Badge
                                        className={`font-semibold capitalize transition-colors ${getTipeVariant(
                                            ref.tipe
                                        )}`}
                                    >
                                        {ref.tipe}
                                    </Badge>
                                    <div className="p-1.5 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500 to-blue-600">
                                        <BookOpen className="w-4 h-4" />
                                    </div>
                                </div>
                                <div
                                    className="leading-relaxed prose-sm prose text-gray-800 prose-gray max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: ref.referensi,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReferensiTab;
