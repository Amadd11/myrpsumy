import React, { FC, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import {
    BookOpen,
    Calendar,
    GitBranch,
    Target,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

interface Rencana {
    id: number;
    week: string | number;
    sub_cpmk_id: number;
    materi_pembelajaran: string;
    indikator: string;
    kriteria_teknik: string;
    luring: string;
    daring: string;
    bobot_penilaian: string | number;
}

interface SubCpmk {
    id: number;
    title: string;
    description: string;
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
        </div>
    );
};

interface RencanaTabProps {
    rencanaItems: Rencana[];
    setRencanaItems: React.Dispatch<React.SetStateAction<Rencana[]>>;
    subCpmkItems: SubCpmk[];
}

const RencanaTab: FC<RencanaTabProps> = ({
    rencanaItems,
    setRencanaItems,
    subCpmkItems,
}) => {
    return (
        <Card className="border shadow-xl border-gray-200/50 bg-white/80 rounded-2xl">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-gray-800">
                    <div className="p-2 text-white shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        Rencana Kegiatan Pembelajaran
                    </span>
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">
                {/* Scrollable Table */}
                <div className="overflow-x-auto bg-white border rounded-lg scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-indigo-100">
                    <div className="min-w-[1200px]">
                        <Table className="w-full">
                            <TableHeader>
                                {/* Baris Header Utama */}
                                <TableRow className="text-indigo-900 bg-indigo-200 border-b-2 border-black">
                                    <TableHead
                                        rowSpan={2}
                                        className="w-12 font-semibold text-center border border-indigo-400"
                                    >
                                        Minggu ke <br /> (1)
                                    </TableHead>
                                    <TableHead
                                        rowSpan={2}
                                        className="w-40 font-semibold text-center border border-indigo-400"
                                    >
                                        Kemampuan Akhir (Sub-CPMK) <br /> (2)
                                    </TableHead>
                                    <TableHead
                                        colSpan={2}
                                        className="font-semibold text-center border border-indigo-400"
                                    >
                                        Penilaian
                                    </TableHead>
                                    <TableHead
                                        colSpan={2}
                                        className="font-semibold text-center border border-indigo-400"
                                    >
                                        Bentuk / Strategi Pembelajaran <br />{" "}
                                        (Metode & Tugas)
                                    </TableHead>
                                    <TableHead
                                        rowSpan={2}
                                        className="w-40 font-semibold text-center border border-indigo-400"
                                    >
                                        Materi Pembelajaran <br /> (7)
                                    </TableHead>
                                    <TableHead
                                        rowSpan={2}
                                        className="w-24 font-semibold text-center border border-indigo-400"
                                    >
                                        Bobot Penilaian (%) <br /> (8)
                                    </TableHead>
                                </TableRow>

                                {/* Baris Subheader */}
                                <TableRow className="text-indigo-900 bg-indigo-100 border border-indigo-400">
                                    <TableHead className="w-40 font-semibold text-center border border-indigo-400">
                                        Indikator (3)
                                    </TableHead>
                                    <TableHead className="w-40 font-semibold text-center border border-indigo-400">
                                        Kriteria & Teknik (4)
                                    </TableHead>
                                    <TableHead className="font-semibold text-center border border-indigo-400 w-28">
                                        Luring (5)
                                    </TableHead>
                                    <TableHead className="font-semibold text-center border border-indigo-400 w-28">
                                        Daring (6)
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {rencanaItems.length > 0 ? (
                                    <>
                                        {rencanaItems.map((activity, index) => {
                                            const subCpmk = subCpmkItems.find(
                                                (s) =>
                                                    s.id ===
                                                    activity.sub_cpmk_id
                                            );

                                            return (
                                                <TableRow
                                                    key={activity.id ?? index}
                                                    className={`border-b border-gray-200 ${
                                                        index % 2 === 0
                                                            ? "bg-white"
                                                            : "bg-indigo-50/50"
                                                    } hover:bg-indigo-50 transition-colors`}
                                                >
                                                    <TableCell className="text-center align-top border border-indigo-200">
                                                        {activity.week}
                                                    </TableCell>
                                                    <TableCell className="text-left align-top border border-indigo-200">
                                                        {subCpmk ? (
                                                            <div className="space-y-1">
                                                                <span className="font-semibold text-purple-800">
                                                                    {
                                                                        subCpmk.title
                                                                    }
                                                                </span>
                                                                <span className="text-sm text-gray-600">
                                                                    -{" "}
                                                                    {
                                                                        subCpmk.description
                                                                    }
                                                                </span>
                                                            </div>
                                                        ) : (
                                                            <span className="text-gray-400">
                                                                -
                                                            </span>
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="align-top border border-indigo-200">
                                                        <ExpandableCell
                                                            content={
                                                                activity.indikator
                                                            }
                                                        />
                                                    </TableCell>
                                                    <TableCell className="align-top border border-indigo-200">
                                                        <ExpandableCell
                                                            content={
                                                                activity.kriteria_teknik
                                                            }
                                                        />
                                                    </TableCell>
                                                    <TableCell className="align-top border border-indigo-200">
                                                        <ExpandableCell
                                                            content={
                                                                activity.luring ??
                                                                "-"
                                                            }
                                                        />
                                                    </TableCell>
                                                    <TableCell className="align-top border border-indigo-200">
                                                        <ExpandableCell
                                                            content={
                                                                activity.daring ??
                                                                "-"
                                                            }
                                                        />
                                                    </TableCell>
                                                    <TableCell className="align-top border border-indigo-200">
                                                        <ExpandableCell
                                                            content={
                                                                activity.materi_pembelajaran
                                                            }
                                                        />
                                                    </TableCell>
                                                    <TableCell className="font-medium text-center text-indigo-900 align-top border border-indigo-200">
                                                        {activity.bobot_penilaian ??
                                                            "-"}
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}

                                        {/* Baris Total Bobot */}
                                        <TableRow className="font-semibold text-indigo-800 shadow-sm bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-300">
                                            <TableCell
                                                colSpan={7}
                                                className="py-4 tracking-wide text-center uppercase border-t border-indigo-400"
                                            >
                                                Total Bobot Penilaian (%)
                                            </TableCell>
                                            <TableCell className="py-4 text-lg font-semibold text-center border-t border-indigo-400">
                                                {rencanaItems.reduce(
                                                    (total, item) =>
                                                        total +
                                                        (Number(
                                                            item.bobot_penilaian
                                                        ) || 0),
                                                    0
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    </>
                                ) : (
                                    <TableRow className="border-b border-gray-200">
                                        <TableCell
                                            colSpan={8}
                                            className="py-8 text-center text-gray-500"
                                        >
                                            Belum ada rencana pembelajaran
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default RencanaTab;
