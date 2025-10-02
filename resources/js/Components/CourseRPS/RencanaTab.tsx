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
import { BookOpen, Calendar, GitBranch, Target } from "lucide-react";

// =======================
// Interfaces
// =======================
interface Rencana {
    id: number;
    week: number;
    sub_cpmk_id: number;
    materi_pembelajaran: string;
    metode: string;
    pengalaman_belajar: string;
    waktu: string;
}

interface SubCpmk {
    id: number;
    code: string;
    description: string;
}

interface RencanaTabProps {
    rencanaItems: Rencana[];
    setRencanaItems: React.Dispatch<React.SetStateAction<Rencana[]>>;
    subCpmkItems: SubCpmk[];
}

// =======================
// Component
// =======================
const RencanaTab: FC<RencanaTabProps> = ({
    rencanaItems,
    setRencanaItems,
    subCpmkItems,
}) => {
    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-gray-800">
                    <Calendar className="w-6 h-6 text-indigo-600" />
                    <span className="text-xl font-bold">
                        Rencana Kegiatan Pembelajaran
                    </span>
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">
                {/* =======================
                    TABEL RENCANA MINGGUAN
                ======================= */}
                <div className="p-6 border rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
                    <h3 className="mb-4 text-lg font-bold text-indigo-900">
                        Rencana Pembelajaran Mingguan
                    </h3>

                    <div className="overflow-x-auto bg-white border rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-indigo-100">
                                    <TableHead className="w-16 font-bold text-center text-indigo-900">
                                        Minggu
                                    </TableHead>
                                    <TableHead className="font-bold text-indigo-900">
                                        Sub-CPMK
                                    </TableHead>
                                    <TableHead className="font-bold text-indigo-900">
                                        Materi Pembelajaran
                                    </TableHead>
                                    <TableHead className="font-bold text-indigo-900">
                                        Metode
                                    </TableHead>
                                    <TableHead className="font-bold text-center text-indigo-900 w-28">
                                        Waktu
                                    </TableHead>
                                    <TableHead className="font-bold text-indigo-900">
                                        Pengalaman Belajar
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {rencanaItems.length > 0 ? (
                                    rencanaItems.map((activity, index) => {
                                        const subCpmk = subCpmkItems.find(
                                            (s) => s.id === activity.sub_cpmk_id
                                        );

                                        return (
                                            <TableRow
                                                key={activity.id ?? index}
                                                className={
                                                    index % 2 === 0
                                                        ? "bg-white"
                                                        : "bg-indigo-50/50"
                                                }
                                            >
                                                <TableCell className="font-medium text-center">
                                                    {activity.week}
                                                </TableCell>
                                                <TableCell className="font-medium text-purple-800">
                                                    {subCpmk
                                                        ? `${subCpmk.code} - ${subCpmk.description}`
                                                        : "-"}
                                                </TableCell>
                                                <TableCell>
                                                    {activity.materi_pembelajaran ||
                                                        "Materi sesuai Sub-CPMK"}
                                                </TableCell>
                                                <TableCell>
                                                    {activity.metode ||
                                                        "Ceramah, Diskusi"}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {activity.waktu ||
                                                        "3 x 50 menit"}
                                                </TableCell>
                                                <TableCell>
                                                    {activity.pengalaman_belajar ||
                                                        "Mahasiswa mengikuti kuliah dan diskusi"}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={6}
                                            className="py-4 text-center text-gray-500"
                                        >
                                            Belum ada rencana pembelajaran
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                {/* =======================
                    METODE PEMBELAJARAN
                ======================= */}
                <div className="p-6 rounded-lg bg-gradient-to-r from-green-50 to-blue-50">
                    <h3 className="mb-4 text-lg font-bold text-green-900">
                        Metode Pembelajaran
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-3">
                            {[
                                {
                                    title: "1. Ceramah Interaktif",
                                    color: "green",
                                    desc: "Penyampaian materi dengan melibatkan partisipasi aktif mahasiswa melalui tanya jawab dan diskusi.",
                                },
                                {
                                    title: "2. Diskusi Kelompok",
                                    color: "blue",
                                    desc: "Pembahasan kasus dan permasalahan dalam kelompok kecil untuk mengembangkan kemampuan analisis.",
                                },
                                {
                                    title: "3. Studi Kasus",
                                    color: "purple",
                                    desc: "Analisis kasus nyata untuk mengaplikasikan teori dalam situasi praktis.",
                                },
                            ].map((m, i) => (
                                <div
                                    key={i}
                                    className={`p-4 bg-white border-l-4 border-${m.color}-500 rounded-lg shadow-sm`}
                                >
                                    <h4
                                        className={`mb-2 font-semibold text-${m.color}-800`}
                                    >
                                        {m.title}
                                    </h4>
                                    <p className="text-sm text-gray-700">
                                        {m.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3">
                            {[
                                {
                                    title: "4. Presentasi",
                                    color: "orange",
                                    desc: "Penyajian hasil analisis dan penelitian oleh mahasiswa untuk melatih kemampuan komunikasi.",
                                },
                                {
                                    title: "5. Praktik Lapangan",
                                    color: "red",
                                    desc: "Observasi dan praktik langsung di lapangan untuk mengaplikasikan teori.",
                                },
                                {
                                    title: "6. E-Learning",
                                    color: "indigo",
                                    desc: "Pembelajaran daring melalui platform digital untuk fleksibilitas waktu dan akses.",
                                },
                            ].map((m, i) => (
                                <div
                                    key={i}
                                    className={`p-4 bg-white border-l-4 border-${m.color}-500 rounded-lg shadow-sm`}
                                >
                                    <h4
                                        className={`mb-2 font-semibold text-${m.color}-800`}
                                    >
                                        {m.title}
                                    </h4>
                                    <p className="text-sm text-gray-700">
                                        {m.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* =======================
                    PENGALAMAN BELAJAR
                ======================= */}
                <div className="p-6 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50">
                    <h3 className="mb-4 text-lg font-bold text-orange-900">
                        Pengalaman Belajar Mahasiswa
                    </h3>

                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Teoritis */}
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <h4 className="flex items-center gap-2 mb-3 font-semibold text-yellow-800">
                                <BookOpen className="w-4 h-4" />
                                Pembelajaran Teoritis
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• Mengikuti kuliah dan membuat catatan</li>
                                <li>• Membaca literatur yang ditugaskan</li>
                                <li>• Menganalisis konsep dan teori</li>
                                <li>• Mengerjakan latihan soal</li>
                            </ul>
                        </div>

                        {/* Praktis */}
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <h4 className="flex items-center gap-2 mb-3 font-semibold text-orange-800">
                                <Target className="w-4 h-4" />
                                Pembelajaran Praktis
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• Melakukan studi kasus</li>
                                <li>• Praktik di laboratorium</li>
                                <li>• Observasi lapangan</li>
                                <li>• Simulasi situasi nyata</li>
                            </ul>
                        </div>

                        {/* Kolaboratif */}
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                            <h4 className="flex items-center gap-2 mb-3 font-semibold text-red-800">
                                <GitBranch className="w-4 h-4" />
                                Pembelajaran Kolaboratif
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• Diskusi kelompok</li>
                                <li>• Presentasi hasil kerja</li>
                                <li>• Peer review dan feedback</li>
                                <li>• Proyek kelompok</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default RencanaTab;
