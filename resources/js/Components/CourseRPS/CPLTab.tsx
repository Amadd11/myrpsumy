import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Target, CheckCircle } from "lucide-react";

interface Cpl {
    id: number;
    code: string;
    title: string;
    description: string;
    taksonomi: string;
    bg_color: string;
}

interface CplTabProps {
    allCpls: Cpl[];
    relatedCpls: Cpl[];
}

const CplTab: FC<CplTabProps> = ({ allCpls, relatedCpls }) => {
    return (
        <Card className="border shadow-xl border-gray-200/50 bg-white/80 rounded-2xl">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-800">
                    <div className="p-2 text-white shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                        <Target className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        Capaian Pembelajaran Lulusan (CPL)
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                {/* --- Semua CPL --- */}
                <div className="space-y-3">
                    <h3 className="mb-2 text-lg font-bold text-gray-800">
                        Daftar CPL
                    </h3>
                    {allCpls.map((cpl) => {
                        const isSelected = relatedCpls.some(
                            (rc) => rc.id === cpl.id
                        );
                        return (
                            <div
                                key={cpl.id}
                                className={`p-4 rounded-lg border-2 transition`}
                                style={{
                                    borderColor: cpl.bg_color || "#e5e7eb", // fallback abu-abu
                                    backgroundColor: cpl.bg_color
                                        ? `${cpl.bg_color}20`
                                        : "white", // transparan versi warna
                                }}
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <h4 className="font-bold text-gray-900">
                                        {cpl.code} - {cpl.title}
                                    </h4>
                                    <Badge
                                        variant="outline"
                                        className="text-yellow-800 bg-yellow-100 border-yellow-400"
                                    >
                                        Taksonomi: {cpl.taksonomi}
                                    </Badge>
                                </div>
                                <p className="mt-1 text-sm text-gray-700">
                                    {cpl.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* --- CPL Terpilih --- */}
                {relatedCpls.length > 0 ? (
                    <div className="p-6 border shadow-sm bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200/60 rounded-xl">
                        <h4 className="flex items-center gap-2 mb-4 text-lg font-semibold tracking-tight text-blue-900">
                            <CheckCircle className="w-5 h-5" />
                            CPL Terpilih untuk Mata Kuliah Ini
                            <span className="text-sm font-medium text-blue-700">
                                ({relatedCpls.length} CPL)
                            </span>
                        </h4>
                        <div className="space-y-3">
                            {relatedCpls.map((cpl) => (
                                <div
                                    key={cpl.id}
                                    className="flex items-start gap-3 p-4 bg-white border border-gray-200/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div className="flex-1">
                                        <div className="mb-1 font-semibold leading-tight text-gray-900">
                                            {cpl.code} {cpl.title}
                                        </div>
                                        <p className="text-sm leading-relaxed text-gray-700">
                                            {cpl.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="p-6 text-center border bg-blue-50 rounded-xl border-blue-200/50">
                        <p className="text-sm italic text-gray-500">
                            Belum ada CPL yang dipilih untuk mata kuliah ini.
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default CplTab;
