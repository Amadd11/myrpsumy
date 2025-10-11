import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Target, CheckCircle } from "lucide-react";

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
                {relatedCpls && relatedCpls.length > 0 ? (
                    <div className="p-4 mt-6 border rounded-lg bg-primary/5 border-primary/20">
                        <h4 className="mb-3 font-semibold text-primary">
                            CPL Terpilih untuk Mata Kuliah Ini{" "}
                            <span className="text-sm text-muted-foreground">
                                ({relatedCpls.length} total)
                            </span>
                        </h4>

                        <div className="space-y-2">
                            {relatedCpls.map((cpl) => (
                                <div
                                    key={cpl.id}
                                    className="flex items-start gap-2 text-sm"
                                >
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                    <div>
                                        <div className="font-medium text-gray-800">
                                            {cpl.code} {cpl.title}
                                        </div>
                                        <div className="text-gray-600">
                                            {cpl.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="mt-6 text-sm italic text-gray-500">
                        Belum ada CPL yang dipilih untuk mata kuliah ini.
                    </p>
                )}
            </CardContent>
        </Card>
    );
};

export default CplTab;
