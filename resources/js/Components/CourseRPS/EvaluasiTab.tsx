import React from "react";

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
    return (
        <div className="space-y-6">
            <h2 className="pb-2 text-2xl font-semibold text-gray-800 border-b">
                Evaluasi Pembelajaran
            </h2>

            {evaluasi.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                        <thead className="text-gray-700 bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left border">
                                    Komponen Penilaian
                                </th>
                                <th className="px-4 py-2 text-left border">
                                    Teknik Penilaian
                                </th>
                                <th className="px-4 py-2 text-left border">
                                    Kriteria Penilaian
                                </th>
                                <th className="px-4 py-2 text-left border">
                                    Waktu Pelaksanaan
                                </th>
                                <th className="px-4 py-2 text-center border">
                                    Bobot (%)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {evaluasi.map((item) => (
                                <tr
                                    key={item.id}
                                    className="transition hover:bg-gray-50"
                                >
                                    <td className="px-4 py-2 font-medium text-gray-800 border">
                                        {item.komponen_penilaian}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {item.teknik_penilaian}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {item.kriteria_penilaian}
                                    </td>
                                    <td className="px-4 py-2 text-gray-600 border">
                                        {item.waktu_pelaksanaan}
                                    </td>
                                    <td className="px-4 py-2 font-semibold text-center text-gray-700 border">
                                        {item.bobot}%
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="italic text-gray-500">
                    Belum ada data evaluasi yang ditambahkan.
                </p>
            )}
        </div>
    );
};

export default EvaluasiTab;
