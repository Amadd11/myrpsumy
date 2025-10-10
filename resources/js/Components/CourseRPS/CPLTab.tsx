import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Target, CheckCircle2 } from "lucide-react";

interface Cpl {
    id: number;
    code: string;
    title: string;
    description: string;
    bloom_level: string;
    bg_color: string;
}

interface CplTabProps {
    allCpls: Cpl[];
    relatedCpls: Cpl[];
}

const CplTab: FC<CplTabProps> = ({ allCpls, relatedCpls }) => {
    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-800">
                    <Target className="w-6 h-6 text-green-600" />
                    <span className="text-xl font-bold">
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
                                        Taksonomi: {cpl.bloom_level}
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
                <div className="pt-4 mt-4 border-t">
                    <h3 className="mb-3 font-bold text-gray-800">
                        CPL Terpilih untuk Mata Kuliah Ini ({relatedCpls.length}{" "}
                        dari {allCpls.length})
                    </h3>

                    {relatedCpls.length > 0 ? (
                        <div className="space-y-2">
                            {relatedCpls.map((cpl) => (
                                <div
                                    key={cpl.id}
                                    className="flex items-start gap-2"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                                    <p className="text-gray-700">
                                        <strong>{cpl.code}</strong> –{" "}
                                        {cpl.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="italic text-gray-500">
                            Belum ada CPL yang terpilih untuk mata kuliah ini.
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default CplTab;
