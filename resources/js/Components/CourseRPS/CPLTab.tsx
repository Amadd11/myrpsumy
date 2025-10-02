import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Target } from "lucide-react";

// Tipe Data untuk CPL
interface Cpl {
    id: number;
    code: string;
    title: string;
    description: string;
    bloomLevel: string;
    bgColor?: string; // warna background (contoh: bg-yellow-100)
    borderColor?: string; // warna border (contoh: border-yellow-400)
}

// Props untuk CplTab
interface CplTabProps {
    allCpls: Cpl[];
    selectedCplIds: number[];
    setSelectedCplIds: React.Dispatch<React.SetStateAction<number[]>>;
}

const CplTab: FC<CplTabProps> = ({
    allCpls,
    selectedCplIds,
    setSelectedCplIds,
}) => {
    const toggleCplSelection = (cplId: number) => {
        setSelectedCplIds((prev) =>
            prev.includes(cplId)
                ? prev.filter((id) => id !== cplId)
                : [...prev, cplId]
        );
    };

    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-800">
                        <Target className="w-6 h-6 text-green-600" />
                        <span className="text-xl font-bold">
                            Capaian Pembelajaran Lulusan (CPL)
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                                setSelectedCplIds(allCpls.map((c) => c.id))
                            }
                        >
                            Pilih Semua
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedCplIds([])}
                        >
                            Hapus Semua
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="p-4 text-sm text-green-800 border border-green-200 rounded-lg bg-green-50/50">
                    Pilih CPL dari Program Studi yang relevan dan akan
                    dibebankan pada mata kuliah ini. CPMK akan diturunkan dari
                    CPL yang dipilih.
                </div>

                <div className="space-y-3">
                    {allCpls.map((cpl) => {
                        const isSelected = selectedCplIds.includes(cpl.id);

                        return (
                            <div
                                key={cpl.id}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 flex flex-col gap-2
                                    ${isSelected ? "ring-2 ring-blue-400" : ""}
                                    ${cpl.bgColor ?? "bg-white"}
                                    ${cpl.borderColor ?? "border-gray-300"}
                                `}
                                onClick={() => toggleCplSelection(cpl.id)}
                            >
                                <div className="flex items-start gap-4">
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        readOnly
                                        className="w-5 h-5 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h4 className="font-bold text-gray-900">
                                                {cpl.code} - {cpl.title}
                                            </h4>
                                            <Badge
                                                variant="outline"
                                                className="text-yellow-800 bg-yellow-100 border-yellow-400"
                                            >
                                                Taksonomi: {cpl.bloomLevel}
                                            </Badge>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-700">
                                            {cpl.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
};

export default CplTab;
