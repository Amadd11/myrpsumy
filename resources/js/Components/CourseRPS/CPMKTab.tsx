import React, { FC } from "react";
import { ListChecks, BookOpen } from "lucide-react";
import { Badge } from "@/Components/ui/badge";

export interface Cpmk {
    id: number;
    title: string;
    description: string;
    cpl_id?: number;
    bg_color: string;
}

export interface Cpl {
    id: number;
    code: string;
    bobot: string;
    description: string;
    taksonomi: string;
    bg_color: string;
}

interface CpmkTabProps {
    cpmkItems: Cpmk[];
    allCpls: Cpl[];
    courseName?: string;
}

const CpmkTab: FC<CpmkTabProps> = ({ cpmkItems, allCpls, courseName }) => {
    const groupedByCpl = cpmkItems.reduce<Record<string, Cpmk[]>>(
        (acc, item) => {
            const relatedCpl =
                allCpls.find((cpl) => cpl.id === item.cpl_id)?.code ||
                "Tanpa CPL";

            if (!acc[relatedCpl]) acc[relatedCpl] = [];
            acc[relatedCpl].push(item);
            return acc;
        },
        {}
    );

    // Helper: Render description dengan support HTML (jika dari rich text)
    const renderDescription = (desc: string) => {
        if (!desc)
            return (
                <p className="text-sm italic text-gray-500">
                    Deskripsi tidak tersedia
                </p>
            );
        return (
            <div
                className="text-sm leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: desc }}
            />
        );
    };

    return (
        <div className="p-6 space-y-6 border shadow-xl bg-white/80 rounded-2xl border-gray-100/50">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="p-2 text-white shadow-lg bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl">
                    <ListChecks className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                    Capaian Pembelajaran Mata Kuliah (CPMK)
                    {courseName ? ` - ${courseName}` : ""}
                </h2>
            </div>

            {/* Info section */}
            <div className="p-4 border border-purple-200 rounded-xl bg-gradient-to-r from-purple-50 to-white">
                <h3 className="font-semibold text-purple-700">
                    CPMK Otomatis dari CPL Terpilih
                </h3>
                <p className="mt-1 text-sm text-purple-600">
                    CPMK di bawah ini digenerate otomatis berdasarkan CPL yang
                    dipilih. Tampilan ini bersifat <b>read-only</b>.
                </p>
            </div>

            {/* List */}
            {Object.keys(groupedByCpl).length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 mb-4 bg-gray-100 rounded-full">
                        <BookOpen className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        Belum Ada CPMK
                    </h3>
                    <p className="max-w-md text-gray-500">
                        Tidak ada CPMK yang terdaftar untuk mata kuliah ini.
                        Silakan periksa kembali setelah CPL diatur.
                    </p>
                </div>
            ) : (
                <div className="space-y-6">
                    {Object.entries(groupedByCpl).map(([cplCode, cpmks]) => (
                        <div
                            key={cplCode}
                            className="transition-all duration-300 border shadow-sm group bg-gradient-to-r from-gray-50 to-white border-gray-200/60 rounded-xl hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="p-5 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-gray-800">
                                            CPMK dari {cplCode}
                                        </span>
                                        <Badge
                                            variant="secondary"
                                            className="text-sm font-normal"
                                        >
                                            {cpmks.length} CPMK
                                        </Badge>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {cpmks.length === 0 ? (
                                        <p className="py-4 text-sm italic text-center text-gray-500">
                                            Tidak ada CPMK untuk grup ini.
                                        </p>
                                    ) : (
                                        cpmks.map((cpmk) => (
                                            <div
                                                key={cpmk.id}
                                                className={`p-4 border-l-4 rounded-lg transition-all duration-200 hover:shadow-inner ${
                                                    cpmk.bg_color
                                                        ? `bg-${cpmk.bg_color}-50 border-${cpmk.bg_color}-400`
                                                        : "bg-blue-50 border-blue-400"
                                                }`}
                                            >
                                                <p className="mb-1 font-medium leading-relaxed text-gray-900">
                                                    {cpmk.title}
                                                </p>
                                                {renderDescription(
                                                    cpmk.description
                                                )}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CpmkTab;
