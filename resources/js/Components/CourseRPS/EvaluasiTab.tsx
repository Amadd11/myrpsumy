import React, { FC, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Target, ChevronDown, ChevronUp } from "lucide-react";

interface Evaluasi {
    id: number;
    week: number;
    cpl_id: number;
    cpmk_id: number;
    sub_cpmk_id: number;
    indikator: string;
    bentuk_penilaian: string;
    bobot_sub_cpmk: number;
    bobot_cpmk: number; // Ini tidak digunakan lagi, karena dihitung dari sum bobot_sub_cpmk
}

interface Cpl {
    id: number;
    code: string;
    description: string;
}

interface Cpmk {
    id: number;
    title: string;
}

interface SubCpmk {
    id: number;
    title: string;
}

interface EvaluasiTabProps {
    evaluasiItems: Evaluasi[];
    setEvaluasiItems: React.Dispatch<React.SetStateAction<Evaluasi[]>>;
    cplItems: Cpl[];
    cpmkItems: Cpmk[];
    subCpmkItems: SubCpmk[];
}

interface ExpandableCellProps {
    content: string;
    defaultContent?: string;
}

const ExpandableCell: FC<ExpandableCellProps> = ({
    content,
    defaultContent = "-",
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayContent = content || defaultContent;
    const isLong = displayContent.length > 200;

    if (!isLong) {
        return (
            <div
                dangerouslySetInnerHTML={{ __html: displayContent }}
                className="prose-sm prose text-left align-top max-w-none"
            />
        );
    }

    const shortContent =
        displayContent.length > 300
            ? `${displayContent.substring(0, 300)}...`
            : displayContent;

    return (
        <div className="space-y-1 text-left align-top">
            <div
                dangerouslySetInnerHTML={{
                    __html: isExpanded ? displayContent : shortContent,
                }}
                className="prose-sm prose max-w-none"
            />
            {isLong && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-1 -ml-1 text-xs font-medium text-indigo-600 hover:text-indigo-800"
                >
                    {isExpanded ? "Baca Lebih Sedikit" : "Baca Selengkapnya"}
                    {isExpanded ? (
                        <ChevronUp className="w-3 h-3" />
                    ) : (
                        <ChevronDown className="w-3 h-3" />
                    )}
                </button>
            )}
        </div>
    );
};

const EvaluasiTab: FC<EvaluasiTabProps> = ({
    evaluasiItems,
    setEvaluasiItems,
    cplItems,
    cpmkItems,
    subCpmkItems,
}) => {
    // Kelompokkan evaluasi berdasarkan CPMK
    const groupedByCpmk = Object.entries(
        evaluasiItems.reduce((acc, item) => {
            if (!acc[item.cpmk_id]) acc[item.cpmk_id] = [];
            acc[item.cpmk_id].push(item);
            return acc;
        }, {} as Record<number, Evaluasi[]>)
    );

    // Hitung grand total bobot dari semua sub-CPMK (sama dengan total CPMK)
    const grandTotal = groupedByCpmk.reduce(
        (sum, [_, group]) =>
            sum +
            group.reduce((gSum, item) => gSum + (item.bobot_sub_cpmk || 0), 0),
        0
    );

    return (
        <Card className="border shadow-xl border-gray-200/50 bg-white/80 rounded-2xl">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-800">
                    <div className="p-2 text-white shadow-lg bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                        <Target className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        Evaluasi Pembelajaran
                    </span>
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">
                <div className="p-6 border rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
                    <h3 className="mb-4 text-lg font-bold text-green-900">
                        Rencana Evaluasi Mingguan
                    </h3>

                    <div className="overflow-x-auto bg-white border rounded-lg">
                        <Table className="min-w-full">
                            <TableHeader>
                                <TableRow className="bg-green-100">
                                    <TableHead className="w-16 font-bold text-center text-green-900">
                                        Minggu
                                    </TableHead>
                                    <TableHead className="w-32 font-bold text-left text-green-900">
                                        CPL
                                    </TableHead>
                                    <TableHead className="w-32 font-bold text-left text-green-900">
                                        CPMK
                                    </TableHead>
                                    <TableHead className="w-40 font-bold text-left text-green-900">
                                        Sub-CPMK
                                    </TableHead>
                                    <TableHead className="w-24 font-bold text-center text-green-900">
                                        Bobot Sub-CPMK (%)
                                    </TableHead>
                                    <TableHead className="w-48 font-bold text-left text-green-900">
                                        Indikator Penilaian
                                    </TableHead>
                                    <TableHead className="w-48 font-bold text-left text-green-900">
                                        Bentuk Penilaian
                                    </TableHead>
                                    <TableHead className="w-24 font-bold text-center text-green-900">
                                        Bobot CPMK (%)
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {evaluasiItems.length > 0 ? (
                                    groupedByCpmk.map(([cpmkId, group]) => {
                                        const cpmk = cpmkItems.find(
                                            (c) => c.id === Number(cpmkId)
                                        );
                                        const cpl = cplItems.find(
                                            (c) => c.id === group[0].cpl_id
                                        );

                                        // Hitung total bobot CPMK sebagai sum bobot_sub_cpmk di group ini
                                        const totalBobotCpmk = group.reduce(
                                            (sum, item) =>
                                                sum +
                                                (item.bobot_sub_cpmk || 0),
                                            0
                                        );

                                        return group.map((item, index) => {
                                            const subCpmk = subCpmkItems.find(
                                                (s) => s.id === item.sub_cpmk_id
                                            );

                                            return (
                                                <TableRow
                                                    key={item.id}
                                                    className={
                                                        index % 2 === 0
                                                            ? "bg-white"
                                                            : "bg-green-50/50"
                                                    }
                                                >
                                                    {/* Kolom Minggu (gabung juga per CPMK) */}
                                                    {index === 0 && (
                                                        <TableCell
                                                            rowSpan={
                                                                group.length
                                                            }
                                                            className="py-3 font-medium text-center align-top"
                                                        >
                                                            {item.week}
                                                        </TableCell>
                                                    )}

                                                    {/* Kolom CPL */}
                                                    {index === 0 && (
                                                        <TableCell
                                                            rowSpan={
                                                                group.length
                                                            }
                                                            className="py-3 font-medium text-left text-blue-800 align-top"
                                                        >
                                                            {cpl
                                                                ? cpl.code
                                                                : "-"}
                                                        </TableCell>
                                                    )}

                                                    {/* Kolom CPMK */}
                                                    {index === 0 && (
                                                        <TableCell
                                                            rowSpan={
                                                                group.length
                                                            }
                                                            className="py-3 font-semibold text-left text-green-900 align-top"
                                                        >
                                                            {cpmk
                                                                ? cpmk.title
                                                                : "-"}
                                                        </TableCell>
                                                    )}

                                                    {/* Kolom Sub-CPMK */}
                                                    <TableCell className="py-3 text-left align-top">
                                                        {subCpmk
                                                            ? subCpmk.title
                                                            : "-"}
                                                    </TableCell>

                                                    {/* Kolom Bobot Sub-CPMK */}
                                                    <TableCell className="py-3 font-medium text-center text-green-900 align-top">
                                                        {item.bobot_sub_cpmk
                                                            ? `${item.bobot_sub_cpmk}%`
                                                            : "-"}
                                                    </TableCell>
                                                    {/* Kolom Indikator */}
                                                    <TableCell className="py-3 text-left align-top">
                                                        <ExpandableCell
                                                            content={
                                                                item.indikator
                                                            }
                                                        />
                                                    </TableCell>

                                                    {/* Kolom Bentuk Penilaian */}
                                                    <TableCell className="py-3 text-left align-top">
                                                        <ExpandableCell
                                                            content={
                                                                item.bentuk_penilaian
                                                            }
                                                        />
                                                    </TableCell>

                                                    {/* Kolom Bobot CPMK (total dari sub-CPMK) */}
                                                    {index === 0 && (
                                                        <TableCell
                                                            rowSpan={
                                                                group.length
                                                            }
                                                            className="py-3 font-medium text-center text-green-900 align-top"
                                                        >
                                                            {totalBobotCpmk
                                                                ? `${totalBobotCpmk}%`
                                                                : "-"}
                                                        </TableCell>
                                                    )}
                                                </TableRow>
                                            );
                                        });
                                    })
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={8}
                                            className="py-8 text-center text-gray-500"
                                        >
                                            Belum ada data evaluasi
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                            {evaluasiItems.length > 0 && (
                                <TableFooter>
                                    <TableRow className="bg-green-100">
                                        <TableCell colSpan={3} />
                                        <TableCell className="py-3 font-semibold text-center text-green-900">
                                            Jumlah
                                        </TableCell>
                                        <TableCell className="py-3 font-semibold text-center text-green-900">
                                            {grandTotal}%
                                        </TableCell>
                                        <TableCell colSpan={2} />
                                        <TableCell className="py-3 font-semibold text-center text-green-900">
                                            {grandTotal}%
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            )}
                        </Table>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default EvaluasiTab;
