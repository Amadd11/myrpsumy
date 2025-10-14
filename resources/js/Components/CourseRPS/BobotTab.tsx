import React, { FC } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Percent, BookOpen, FileText } from "lucide-react";

interface Bobot {
    id: number;
    courseName?: string;
    name: string;
    description?: string;
    bobot: number;
}

interface BobotTabProps {
    bobotItems: Bobot[];
}

const BobotTab: FC<BobotTabProps> = ({ bobotItems }) => {
    const getBobotColor = (bobot: number) => {
        if (bobot >= 40)
            return "bg-emerald-100 text-emerald-700 border-emerald-200";
        if (bobot >= 20) return "bg-amber-100 text-amber-700 border-amber-200";
        return "bg-gray-100 text-gray-700 border-gray-200";
    };

    return (
        <div className="p-6 space-y-6 border shadow-xl bg-white/80 rounded-2xl border-gray-100/50">
            <div className="flex items-center gap-3">
                <div className="p-2 text-white shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                    <Percent className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                    Bobot Penilaian
                </h2>
            </div>

            {bobotItems.length > 0 ? (
                <div className="overflow-hidden bg-white border shadow-sm border-gray-200/50 rounded-xl">
                    <div className="overflow-x-auto">
                        <Table className="min-w-full text-sm">
                            <TableHeader>
                                <TableRow className="bg-gradient-to-r from-indigo-50 to-purple-50">
                                    <TableHead className="px-6 py-4 font-semibold tracking-wide text-left text-indigo-900 border-b border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <BookOpen className="w-4 h-4 text-indigo-400" />
                                            Nama Bobot
                                        </div>
                                    </TableHead>
                                    <TableHead className="px-6 py-4 font-semibold tracking-wide text-left text-indigo-900 border-b border-gray-200">
                                        Deskripsi
                                    </TableHead>
                                    <TableHead className="px-6 py-4 font-semibold tracking-wide text-center text-indigo-900 border-b border-gray-200">
                                        <div className="flex items-center justify-center gap-2">
                                            <FileText className="w-4 h-4 text-indigo-400" />
                                            Bobot (%)
                                        </div>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="divide-y divide-gray-100">
                                {bobotItems.map((item, index) => (
                                    <TableRow
                                        key={item.id}
                                        className={`transition-all duration-300 hover:bg-indigo-50/50 ${
                                            index % 2 === 0
                                                ? "bg-white/80"
                                                : "bg-gray-50/80"
                                        }`}
                                    >
                                        <TableCell className="px-6 py-5 font-medium text-gray-900 border-b border-gray-100">
                                            {item.name}
                                        </TableCell>
                                        <TableCell className="max-w-md px-6 py-5 text-gray-700 border-b border-gray-100">
                                            <p className="break-words">
                                                {item.description || "-"}
                                            </p>
                                        </TableCell>
                                        <TableCell className="px-6 py-5 text-center border-b border-gray-100">
                                            <span
                                                className={`inline-flex items-center justify-center px-3 py-1.5 text-xs font-bold rounded-full border transition-colors ${getBobotColor(
                                                    item.bobot
                                                )}`}
                                            >
                                                <Percent className="w-3 h-3 mr-1" />
                                                {item.bobot}%
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 mb-4 bg-gray-100 rounded-full">
                        <Percent className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        Belum Ada Bobot Penilaian
                    </h3>
                    <p className="max-w-md text-gray-500">
                        Tidak ada data bobot penilaian yang tersedia saat ini.
                        Silakan periksa kembali nanti.
                    </p>
                </div>
            )}
        </div>
    );
};

export default BobotTab;
