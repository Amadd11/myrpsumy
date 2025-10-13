import React from "react";
import { Clock, FileText } from "lucide-react"; // Assuming Lucide React icons are installed for modern icons

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
    // Helper to format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="p-6 space-y-6 border shadow-xl bg-white/80 rounded-2xl border-gray-100/50">
            <div className="flex items-center gap-3">
                <div className="p-2 text-white shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                    <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                    Daftar Tugas & Ujian {courseName ? `- ${courseName}` : ""}
                </h2>
                {tugas.length > 0 && (
                    <span className="ml-auto text-sm font-medium text-gray-500">
                        Total: {tugas.length}
                    </span>
                )}
            </div>

            {tugas.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 mb-4 bg-gray-100 rounded-full">
                        <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        Belum Ada Tugas
                    </h3>
                    <p className="max-w-md text-gray-500">
                        Tidak ada tugas atau ujian untuk mata kuliah ini saat
                        ini. Silakan periksa kembali nanti.
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {tugas.map((item) => (
                        <div
                            key={item.id}
                            className="transition-all duration-300 border shadow-sm group bg-gradient-to-r from-gray-50 to-white border-gray-200/60 rounded-xl hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between p-5 space-x-4">
                                <div className="flex-1">
                                    <p className="mb-3 font-medium leading-relaxed text-gray-900 transition-colors group-hover:text-blue-600">
                                        {item.tugas}
                                    </p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <Clock className="w-4 h-4" />
                                            <span>
                                                {formatDate(item.created_at)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 p-2 transition-colors rounded-lg bg-blue-50 group-hover:bg-blue-100">
                                    <FileText className="w-5 h-5 text-blue-600" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TugasTab;
