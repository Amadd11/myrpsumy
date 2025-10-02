import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Percent } from "lucide-react";

// Tipe Data untuk Bobot
interface Bobot {
    id: number;
    courseName?: string; // ambil dari relasi course.name
    name: string;
    description?: string;
    bobot: number;
}

interface BobotTabProps {
    bobotItems: Bobot[];
}

const BobotTab: FC<BobotTabProps> = ({ bobotItems }) => {
    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-800">
                    <Percent className="w-6 h-6 text-indigo-600" />
                    <span className="text-xl font-bold">
                        Bobot Penilaian
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="p-6 border rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
                    <h3 className="mb-4 text-lg font-bold text-indigo-900">
                        Daftar Bobot Penilaian
                    </h3>
                    <div className="overflow-x-auto bg-white border rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-indigo-100">
                                    <TableHead className="font-bold text-indigo-900">Mata Kuliah</TableHead>
                                    <TableHead className="font-bold text-indigo-900">Nama Bobot</TableHead>
                                    <TableHead className="font-bold text-indigo-900">Deskripsi</TableHead>
                                    <TableHead className="font-bold text-center text-indigo-900">Bobot (%)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {bobotItems.length > 0 ? (
                                    bobotItems.map((item, index) => (
                                        <TableRow
                                            key={item.id}
                                            className={
                                                index % 2 === 0 ? "bg-white" : "bg-indigo-50/50"
                                            }
                                        >
                                            <TableCell className="font-medium">
                                                {item.courseName || "-"}
                                            </TableCell>
                                            <TableCell className="font-medium text-purple-800">
                                                {item.name}
                                            </TableCell>
                                            <TableCell>
                                                {item.description || "-"}
                                            </TableCell>
                                            <TableCell className="font-semibold text-center text-indigo-700">
                                                {item.bobot}%
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={4}
                                            className="py-4 text-center text-gray-500"
                                        >
                                            Belum ada data bobot penilaian
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

export default BobotTab;
