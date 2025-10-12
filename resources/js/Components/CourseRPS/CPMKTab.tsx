import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { ListChecks } from "lucide-react";

// --- Tipe Data ---
export interface Cpmk {
    id: number;
    title: string;
    description: string;
    cpl_id?: number; // relasi ke CPL
    bg_color: string;
}

export interface Cpl {
    id: number;
    code: string;
    title: string;
    description: string;
    taksonomi: string;
    bg_color: string;
}

interface CpmkTabProps {
    cpmkItems: Cpmk[];
    allCpls: Cpl[];
}

const CpmkTab: FC<CpmkTabProps> = ({ cpmkItems, allCpls }) => {
    // --- Kelompokkan CPMK berdasarkan CPL ---
    const groupedByCpl = cpmkItems.reduce<Record<string, Cpmk[]>>(
        (acc, item) => {
            // Cari kode CPL terkait
            const relatedCpl =
                allCpls.find((cpl) => cpl.id === item.cpl_id)?.code ||
                "Tanpa CPL";

            if (!acc[relatedCpl]) acc[relatedCpl] = [];
            acc[relatedCpl].push(item);
            return acc;
        },
        {}
    );

    return (
        <Card className="shadow-md">
            {/* --- Header --- */}
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-800">
                    <ListChecks className="w-6 h-6 text-purple-600" />
                    <span className="text-xl font-bold">
                        Capaian Pembelajaran Mata Kuliah (CPMK)
                    </span>
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">
                {/* --- Info Section --- */}
                <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
                    <h3 className="font-semibold text-purple-700">
                        CPMK Otomatis dari CPL Terpilih
                    </h3>
                    <p className="mt-1 text-sm text-purple-600">
                        CPMK di bawah ini digenerate otomatis berdasarkan CPL
                        yang dipilih. Tampilan ini bersifat <b>read-only</b>.
                    </p>
                </div>

                {/* --- Daftar CPMK per CPL --- */}
                {Object.keys(groupedByCpl).length > 0 ? (
                    Object.entries(groupedByCpl).map(([cplCode, cpmks]) => (
                        <div key={cplCode} className="space-y-3">
                            {/* Judul Grup CPL */}
                            <div className="flex items-center justify-between">
                                <h3 className="flex items-center gap-2 font-semibold text-gray-800">
                                    <span>CPMK dari {cplCode}</span>
                                    <Badge
                                        variant="secondary"
                                        className="text-sm font-normal"
                                    >
                                        {cpmks.length} CPMK
                                    </Badge>
                                </h3>
                            </div>

                            {/* Daftar CPMK */}
                            <div className="space-y-2">
                                {cpmks.map((cpmk) => (
                                    <div
                                        key={cpmk.id}
                                        className={`p-4 border-l-4 rounded-lg ${"border-blue-400"} ${
                                            cpmk.bg_color || "bg-blue-50"
                                        }`}
                                    >
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-gray-800">
                                                    {cpmk.title}
                                                </span>
                                                <Badge
                                                    variant="outline"
                                                    className="text-xs text-gray-600 border-gray-300"
                                                >
                                                    Dari {cplCode}
                                                </Badge>
                                            </div>
                                            <p className="text-sm leading-relaxed text-gray-700">
                                                {cpmk.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="py-6 text-center text-gray-500">
                        Belum ada CPMK untuk mata kuliah ini.
                    </p>
                )}
            </CardContent>
        </Card>
    );
};

export default CpmkTab;
