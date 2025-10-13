import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Layers, BookOpen } from "lucide-react";
import { Badge } from "@/Components/ui/badge";

interface SubCpmk {
    id: number;
    title: string;
    description: string;
    relatedCpmk?: string;
    cpmk_id?: number;
}

interface Cpmk {
    id: number;
    title: string;
}

interface SubCpmkTabProps {
    subCpmkItems: SubCpmk[];
    cpmkItems: Cpmk[];
}

const SubCpmkTab: FC<SubCpmkTabProps> = ({ subCpmkItems, cpmkItems }) => {
    // Grouping berdasarkan CPMK induk
    const grouped = subCpmkItems.reduce<Record<string, SubCpmk[]>>(
        (acc, item) => {
            const relatedCpmkTitle =
                cpmkItems.find((c) => c.id === item.cpmk_id)?.title ||
                "Tanpa CPMK";

            if (!acc[relatedCpmkTitle]) acc[relatedCpmkTitle] = [];
            acc[relatedCpmkTitle].push(item);
            return acc;
        },
        {}
    );

    return (
        <div className="p-6 border shadow-xl bg-white/80 rounded-2xl border-gray-100/50">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 text-white shadow-lg bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                    <Layers className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                    Sub-Capaian Pembelajaran Mata Kuliah (Sub-CPMK)
                </h2>
            </div>

            {Object.keys(grouped).length > 0 ? (
                <div className="space-y-6">
                    {Object.entries(grouped).map(([cpmkTitle, subItems]) => (
                        <div
                            key={cpmkTitle}
                            className="p-6 transition-all duration-300 border shadow-sm group bg-gradient-to-r from-gray-50 to-white border-gray-200/60 rounded-xl hover:shadow-md"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                                    <BookOpen className="w-5 h-5 text-orange-600" />
                                    Sub-CPMK dari {cpmkTitle}
                                </h3>
                                <Badge
                                    variant="secondary"
                                    className="text-xs font-medium text-orange-700 bg-orange-100 border-orange-200"
                                >
                                    {subItems.length} Sub-CPMK
                                </Badge>
                            </div>

                            {/* List Sub-CPMK */}
                            <div className="space-y-3">
                                {subItems.map((sub) => (
                                    <div
                                        key={sub.id}
                                        className="p-4 transition-colors duration-200 bg-white border border-l-4 rounded-lg border-gray-200/50 hover:bg-blue-50/50 border-l-blue-400"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-sm font-semibold leading-tight text-gray-900">
                                                {sub.title}
                                            </h4>
                                            <p className="text-sm leading-relaxed text-gray-700">
                                                {sub.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 mb-4 bg-gray-100 rounded-full">
                        <Layers className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        Belum Ada Sub-CPMK
                    </h3>
                    <p className="max-w-md text-gray-500">
                        Tidak ada sub-capaian pembelajaran untuk mata kuliah ini
                        saat ini. Silakan periksa kembali nanti.
                    </p>
                </div>
            )}
        </div>
    );
};

export default SubCpmkTab;
