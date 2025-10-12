import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { GitBranch } from "lucide-react";
import { Badge } from "@/Components/ui/badge";

interface SubCpmk {
    id: number;
    title: string;
    description: string;
    relatedCpmk?: string; // boleh undefined biar aman
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
    // Debug: lihat isi di console browser
    console.log("🧩 Data CPMK:", cpmkItems);
    console.log("📘 Data Sub-CPMK:", subCpmkItems);

    // --- Grouping berdasarkan CPMK induk ---
    // --- Grouping berdasarkan CPMK induk ---
    const grouped = subCpmkItems.reduce<Record<string, SubCpmk[]>>(
        (acc, item) => {
            // Ambil judul CPMK dari cpmkItems berdasarkan cpmk_id
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
        <Card className="border border-gray-200 shadow-md">
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-gray-800">
                    <GitBranch className="w-6 h-6 text-orange-600" />
                    <span className="text-xl font-bold">
                        Sub-Capaian Pembelajaran Mata Kuliah (Sub-CPMK)
                    </span>
                </CardTitle>
            </CardHeader>

            <CardContent className="p-6 space-y-8 bg-gray-50">
                {Object.keys(grouped).length > 0 ? (
                    Object.entries(grouped).map(([cpmkTitle, subItems]) => (
                        <div
                            key={cpmkTitle}
                            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="flex items-center gap-2 font-semibold text-gray-800">
                                    <span>Sub-CPMK dari {cpmkTitle}</span>
                                    <Badge
                                        variant="secondary"
                                        className="text-sm font-normal"
                                    >
                                        {subCpmkItems.length} CPMK
                                    </Badge>
                                </h3>
                            </div>

                            {/* List Sub-CPMK */}
                            <div className="space-y-2">
                                {subItems.map((sub) => (
                                    <div
                                        key={sub.id}
                                        className="p-3 border-l-4 border-blue-400 rounded-md bg-blue-50"
                                    >
                                        <div className="flex flex-col gap-1">
                                            <span className="font-medium text-gray-800">
                                                {sub.title}
                                            </span>
                                            <p className="text-sm text-gray-700">
                                                {sub.description}
                                            </p>
                                            <span className="text-xs text-gray-500">
                                                Taksonomi Bloom:{" "}
                                                <span className="font-medium text-blue-700"></span>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        Belum ada Sub-CPMK untuk mata kuliah ini.
                    </p>
                )}
            </CardContent>
        </Card>
    );
};

export default SubCpmkTab;
