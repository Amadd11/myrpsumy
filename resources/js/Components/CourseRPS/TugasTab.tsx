import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import {
    FileText,
    CalendarDays,
    Info,
    ClipboardCheck,
    Target,
    Waypoints,
    Book,
    FilePlus,
    // BadgeCheck tidak lagi digunakan di sini
} from "lucide-react";

interface Tugas {
    id: number;
    judul_penilaian: string;
    bentuk_penilaian?: string;
    sub_cpmk?: string;
    deskripsi_penilaian?: string;
    metode_penilaian?: string;
    bentuk_dan_format_luaran?: string;
    indikator_kriteria_bobot?: string;
    jadwal_pelaksanaan?: string;
    pustaka?: string;
    lain_lain?: string;
}

interface Props {
    tugas?: Tugas[]; // Optional array
    courseName?: string;
}

// PERUBAHAN DI DetailItem: Desain ikon lebih simple dan sejajar
const DetailItem: FC<{
    icon: React.ReactNode;
    label: string;
    content?: string;
    isHtml?: boolean;
    className?: string;
}> = ({ icon, label, content, isHtml = false, className = "" }) => {
    if (!content) return null; // Jangan tampilkan jika tidak ada konten

    return (
        <div
            className={`space-y-2 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-blue-100/50 hover:border-blue-200/50 transition-all duration-300 ${className}`}
        >
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-1 text-blue-600 rounded-lg">
                    {/* Tanpa gradien background */}
                    {React.cloneElement(icon as React.ReactElement, {
                        className: "w-5 h-5",
                    })}

                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-800">
                        {label}
                    </h4>
                    {isHtml ? (
                        <div
                            className="mt-1 leading-relaxed prose-sm prose text-gray-700 max-w-none"
                            dangerouslySetInnerHTML={{ __html: content || "-" }}
                        />
                    ) : (
                        <p className="mt-1 text-sm text-gray-700">{content}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

const TugasTab: FC<Props> = ({ tugas, courseName }) => {
    const tugasList = tugas || [];

    return (
        <Card className="overflow-hidden border shadow-2xl border-gray-200/50 bg-gradient-to-br from-white/90 to-blue-50/50 rounded-3xl">
            <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="flex items-center gap-4 text-gray-800">
                    <div className="p-3 text-white shadow-lg bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl">
                        <FileText className="w-6 h-6" />
                    </div>
                    <div>
                        <span className="text-2xl font-bold tracking-tight">
                            Rencana Penilaian Tugas/Ujian
                        </span>
                        {courseName && (
                            <span className="ml-2 text-lg font-medium text-gray-600">
                                - {courseName}
                            </span>
                        )}
                    </div>
                </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
                {tugasList.length === 0 ? (
                    // Modern Empty State (Tidak berubah)
                    <div className="flex flex-col items-center justify-center px-8 py-16 text-center bg-gradient-to-b from-gray-50 to-blue-50 rounded-2xl">
                        <div className="p-6 mb-6 border shadow-lg bg-white/60 backdrop-blur-sm rounded-2xl border-gray-200/50">
                            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-gray-900">
                            Belum Ada Tugas
                        </h3>
                        <p className="max-w-md leading-relaxed text-gray-600">
                            Tidak ada tugas untuk mata kuliah ini saat ini.
                            Silakan periksa kembali nanti atau hubungi dosen
                            pengampu.
                        </p>
                    </div>
                ) : (
                    // Modern Accordion
                    <Accordion type="multiple" className="w-full">
                        <div className="divide-y divide-gray-200/50">
                            {tugasList.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    value={`item-${item.id}`}
                                    className="border-0"
                                >
                                    {/* PERUBAHAN DI AccordionTrigger: Ikon lebih simpel dan sejajar */}
                                    <AccordionTrigger className="px-6 py-5 hover:no-underline focus:no-underline group">
                                        <div className="flex items-center w-full gap-4 text-left">
                                            {" "}
                                            {/* items-center untuk sejajar di tengah */}
                                            {/* Ikon di AccordionTrigger */}
                                            <div className="flex-shrink-0 p-1 text-blue-600 rounded-lg">
                                                {" "}
                                                {/* Tanpa gradien background & shadow */}
                                                <FileText className="w-5 h-5" />{" "}
                                            </div>
                                            <h3 className="flex-1 text-lg font-bold text-gray-900 truncate">
                                                {item.judul_penilaian}
                                            </h3>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="px-6 pb-6 space-y-4">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                            <DetailItem
                                                icon={
                                                    <Info /> /* Tidak perlu w-4 h-4 lagi, sudah ditangani di DetailItem */
                                                }
                                                label="Bentuk Penilaian"
                                                content={item.bentuk_penilaian}
                                                isHtml={true}
                                            />
                                            <DetailItem
                                                icon={<Target />}
                                                label="Sub-CPMK"
                                                content={item.sub_cpmk}
                                                isHtml={true}
                                            />
                                            <DetailItem
                                                icon={<FileText />}
                                                label="Deskripsi"
                                                content={
                                                    item.deskripsi_penilaian
                                                }
                                                isHtml={true}
                                            />
                                            <DetailItem
                                                icon={<Waypoints />}
                                                label="Metode"
                                                content={item.metode_penilaian}
                                                isHtml={true}
                                            />
                                            <DetailItem
                                                icon={<ClipboardCheck />}
                                                label="Luaran"
                                                content={
                                                    item.bentuk_dan_format_luaran
                                                }
                                                isHtml={true}
                                            />
                                            <DetailItem
                                                icon={<Target />}
                                                label="Indikator & Bobot"
                                                content={
                                                    item.indikator_kriteria_bobot
                                                }
                                                isHtml={true}
                                            />
                                            <DetailItem
                                                icon={<CalendarDays />}
                                                label="Jadwal"
                                                content={
                                                    item.jadwal_pelaksanaan
                                                }
                                            />
                                            <DetailItem
                                                icon={<Book />}
                                                label="Pustaka"
                                                content={item.pustaka}
                                                isHtml={true}
                                            />
                                            <DetailItem
                                                icon={<FilePlus />}
                                                label="Lain-lain"
                                                content={item.lain_lain}
                                                isHtml={true}
                                            />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </div>
                    </Accordion>
                )}
            </CardContent>
        </Card>
    );
};

export default TugasTab;
