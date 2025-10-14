import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { BookOpen, User, Calendar } from "lucide-react";

interface DeskripsiTabProps {
    courseInfo: {
        penanggungJawab: string;
        tahunAjaran: string;
        deskripsi?: string;
    };
    setCourseInfo: React.Dispatch<React.SetStateAction<any>>;
}

const DeskripsiTab: FC<DeskripsiTabProps> = ({ courseInfo }) => {
    return (
        <div className="p-6 space-y-6 border shadow-xl bg-white/80 rounded-2xl border-gray-100/50">
            <div className="flex items-center gap-3">
                <div className="p-2 text-white shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                    <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                    Deskripsi Mata Kuliah
                </h2>
            </div>

            {/* Informasi Umum */}
            <div className="space-y-4">
                <h4 className="text-base font-semibold text-gray-900">
                    Informasi Umum
                </h4>
                <div className="grid gap-6 p-6 border bg-gradient-to-r from-gray-50 to-white rounded-xl border-gray-200/60 md:grid-cols-2">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                            <User className="w-4 h-4 text-gray-400" />
                            Penanggung Jawab
                        </div>
                        <p className="font-medium text-gray-900">
                            {courseInfo.penanggungJawab || "—"}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            Tahun Ajaran
                        </div>
                        <p className="font-medium text-gray-900">
                            {courseInfo.tahunAjaran || "—"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Deskripsi Mata Kuliah */}
            <div className="space-y-4">
                <h4 className="text-base font-semibold text-gray-900">
                    Deskripsi Mata Kuliah
                </h4>
                <div className="p-6 bg-white border shadow-sm border-gray-200/50 rounded-xl">
                    {courseInfo.deskripsi ? (
                        <div
                            className="leading-relaxed prose-sm prose text-gray-700 max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: courseInfo.deskripsi,
                            }}
                        />
                    ) : (
                        <p className="italic text-gray-500">
                            Belum ada deskripsi mata kuliah yang ditambahkan.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DeskripsiTab;
