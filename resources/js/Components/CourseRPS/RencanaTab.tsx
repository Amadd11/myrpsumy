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
    title: string;
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
                                                        ? `${subCpmk.title} `
                                                        : "-"}
                                                </TableCell>
                                                <TableCell>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                activity.materi_pembelajaran ||
                                                                "Materi sesuai Sub-CPMK",
                                                        }}
                                                    />
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

                {/* Metode Pembelajaran */}
                <div className="p-6 border bg-gradient-to-r from-green-50 to-blue-50 border-green-200/60 rounded-xl">
                    <h3 className="flex items-center gap-2 mb-6 text-lg font-bold text-green-900">
                        <BookOpen className="w-5 h-5" />
                        Metode Pembelajaran
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                        {[
                            {
                                title: "1. Ceramah Interaktif",
                                border: "border-green-400",
                                text: "text-green-800",
                                desc: "Penyampaian materi dengan melibatkan partisipasi aktif mahasiswa melalui tanya jawab dan diskusi.",
                            },
                            {
                                title: "2. Diskusi Kelompok",
                                border: "border-blue-400",
                                text: "text-blue-800",
                                desc: "Pembahasan kasus dan permasalahan dalam kelompok kecil untuk mengembangkan kemampuan analisis.",
                            },
                            {
                                title: "3. Studi Kasus",
                                border: "border-purple-400",
                                text: "text-purple-800",
                                desc: "Analisis kasus nyata untuk mengaplikasikan teori dalam situasi praktis.",
                            },
                            {
                                title: "4. Presentasi",
                                border: "border-orange-400",
                                text: "text-orange-800",
                                desc: "Penyajian hasil analisis dan penelitian oleh mahasiswa untuk melatih kemampuan komunikasi.",
                            },
                            {
                                title: "5. Praktik Lapangan",
                                border: "border-red-400",
                                text: "text-red-800",
                                desc: "Observasi dan praktik langsung di lapangan untuk mengaplikasikan teori.",
                            },
                            {
                                title: "6. E-Learning",
                                border: "border-indigo-400",
                                text: "text-indigo-800",
                                desc: "Pembelajaran daring melalui platform digital untuk fleksibilitas waktu dan akses.",
                            },
                        ].map((m, i) => (
                            <div
                                key={i}
                                className={`group p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border-l-4 ${m.border}`}
                            >
                                <h4
                                    className={`mb-3 font-semibold leading-tight ${m.text}`}
                                >
                                    {m.title}
                                </h4>
                                <p className="text-sm leading-relaxed text-gray-700">
                                    {m.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pengalaman Belajar Mahasiswa */}
                <div className="p-6 border bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200/60 rounded-xl">
                    <h3 className="flex items-center gap-2 mb-6 text-lg font-bold text-orange-900">
                        <Target className="w-5 h-5" />
                        Pengalaman Belajar Mahasiswa
                    </h3>

                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Teoritis */}
                        <div className="p-5 transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-md hover:-translate-y-1">
                            <h4 className="flex items-center gap-2 mb-4 font-semibold text-yellow-800">
                                <BookOpen className="w-4 h-4" />
                                Pembelajaran Teoritis
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Mengikuti kuliah dan membuat catatan</li>
                                <li>• Membaca literatur yang ditugaskan</li>
                                <li>• Menganalisis konsep dan teori</li>
                                <li>• Mengerjakan latihan soal</li>
                            </ul>
                        </div>

                        {/* Praktis */}
                        <div className="p-5 transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-md hover:-translate-y-1">
                            <h4 className="flex items-center gap-2 mb-4 font-semibold text-orange-800">
                                <Target className="w-4 h-4" />
                                Pembelajaran Praktis
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Melakukan studi kasus</li>
                                <li>• Praktik di laboratorium</li>
                                <li>• Observasi lapangan</li>
                                <li>• Simulasi situasi nyata</li>
                            </ul>
                        </div>

                        {/* Kolaboratif */}
                        <div className="p-5 transition-all duration-300 bg-white shadow-sm group rounded-xl hover:shadow-md hover:-translate-y-1">
                            <h4 className="flex items-center gap-2 mb-4 font-semibold text-red-800">
                                <GitBranch className="w-4 h-4" />
                                Pembelajaran Kolaboratif
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
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
