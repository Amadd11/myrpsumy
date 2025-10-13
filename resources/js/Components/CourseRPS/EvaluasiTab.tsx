import React from "react";
import { Percent, Ruler, Calendar, CheckCircle } from "lucide-react";

interface Evaluasi {
    id: number;
    komponen_penilaian: string;
    teknik_penilaian: string;
    kriteria_penilaian: string;
    waktu_pelaksanaan: string;
    bobot: number;
}

interface EvaluasiTabProps {
    evaluasi: Evaluasi[];
}

const EvaluasiTab: React.FC<EvaluasiTabProps> = ({ evaluasi }) => {
    // Helper to format date if needed, but assuming waktu_pelaksanaan is already formatted
    const getBobotColor = (bobot: number) => {
        if (bobot >= 40)
            return "bg-emerald-100 text-emerald-700 border-emerald-200";
        if (bobot >= 20) return "bg-amber-100 text-amber-700 border-amber-200";
        return "bg-gray-100 text-gray-700 border-gray-200";
    };

    return (
        <div className="p-6 space-y-6 border shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl border-gray-100/50">
            <div className="flex items-center gap-3">
                <div className="p-2 text-white shadow-lg bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                    <Percent className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                    Evaluasi Pembelajaran
                </h2>
                {evaluasi.length > 0 && (
                    <span className="ml-auto text-sm font-medium text-gray-500">
                        Total: {evaluasi.length}
                    </span>
                )}
            </div>

            {evaluasi.length > 0 ? (
                <div className="overflow-hidden bg-white border shadow-sm border-gray-200/50 rounded-xl">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead className="text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100">
                                <tr>
                                    <th className="px-6 py-4 font-semibold tracking-wide text-left border-b border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <Ruler className="w-4 h-4 text-gray-400" />
                                            Komponen Penilaian
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 font-semibold tracking-wide text-left border-b border-gray-200">
                                        Teknik Penilaian
                                    </th>
                                    <th className="px-6 py-4 font-semibold tracking-wide text-left border-b border-gray-200">
                                        Kriteria Penilaian
                                    </th>
                                    <th className="px-6 py-4 font-semibold tracking-wide text-left border-b border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-gray-400" />
                                            Waktu Pelaksanaan
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 font-semibold tracking-wide text-center border-b border-gray-200">
                                        Bobot
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {evaluasi.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className={`transition-all duration-300 hover:bg-cyan-50/50 ${
                                            index % 2 === 0
                                                ? "bg-white/80"
                                                : "bg-gray-50/80"
                                        }`}
                                    >
                                        <td className="px-6 py-5 font-medium text-gray-900 border-b border-gray-100">
                                            {item.komponen_penilaian}
                                        </td>
                                        <td className="px-6 py-5 text-gray-700 border-b border-gray-100">
                                            {item.teknik_penilaian}
                                        </td>
                                        <td className="w-64 px-6 py-5 text-gray-700 border-b border-gray-100">
                                            <p className="break-words">
                                                {item.kriteria_penilaian}
                                            </p>
                                        </td>
                                        <td className="px-6 py-5 text-gray-600 border-b border-gray-100">
                                            {item.waktu_pelaksanaan}
                                        </td>
                                        <td className="px-6 py-5 text-center border-b border-gray-100">
                                            <span
                                                className={`inline-flex items-center justify-center px-3 py-1.5 text-xs font-bold rounded-full border transition-colors ${getBobotColor(
                                                    item.bobot
                                                )}`}
                                            >
                                                <CheckCircle className="w-3 h-3 mr-1" />
                                                {item.bobot}%
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 mb-4 bg-gray-100 rounded-full">
                        <Percent className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        Belum Ada Evaluasi
                    </h3>
                    <p className="max-w-md text-gray-500">
                        Tidak ada data evaluasi pembelajaran yang tersedia saat
                        ini. Silakan periksa kembali nanti.
                    </p>
                </div>
            )}
        </div>
    );
};

export default EvaluasiTab;
