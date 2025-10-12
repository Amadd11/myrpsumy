import React from "react";

interface Tugas {
    id: number;
    tugas: string;
    created_at: string;
}

interface Props {
    tugas: Tugas[];
    courseName?: string;
}

const TugasTab: React.FC<Props> = ({ tugas, courseName }) => {
    return (
        <div className="p-6 bg-white shadow rounded-xl">
            <h2 className="mb-4 text-lg font-semibold">
                Daftar Tugas & Ujian {courseName ? `- ${courseName}` : ""}
            </h2>

            {tugas.length === 0 ? (
                <p className="italic text-gray-500">
                    Belum ada tugas untuk mata kuliah ini.
                </p>
            ) : (
                <ul className="space-y-4">
                    {tugas.map((item) => (
                        <li
                            key={item.id}
                            className="p-4 transition border border-gray-200 rounded-lg hover:bg-gray-50"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-gray-800 whitespace-pre-line">
                                    {item.tugas}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TugasTab;
