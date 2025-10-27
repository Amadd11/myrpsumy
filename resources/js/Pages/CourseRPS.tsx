import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import Layout from "@/Components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Badge } from "@/Components/ui/badge";
import * as LucideIcons from "lucide-react";

// Custom Components
import DeskripsiTab from "@/Components/CourseRPS/DeskripsiTab";
import CplTab from "@/Components/CourseRPS/CPLTab";
import CpmkTab from "@/Components/CourseRPS/CPMKTab";
import SubCpmkTab from "@/Components/CourseRPS/SubCPMKTab";
import RencanaTab from "@/Components/CourseRPS/RencanaTab";
import EvaluasiTab from "@/Components/CourseRPS/EvaluasiTab";
import TugasTab from "@/Components/CourseRPS/TugasTab";
import ReferensiTab from "@/Components/CourseRPS/ReferensiTab";

// --- Types ---
interface Course {
    name: string;
    code: string;
    sks: number;
    semester: string;
}

interface Cpl {
    id: number;
    code: string;
    bobot: string;
    description: string;
    taksonomi: string;
    bg_color: string;
}

interface Cpmk {
    id: number;
    title: string;
    description: string;
    bg_color: string;
    relatedCpl?: string;
}

interface SubCpmk {
    id: number;
    title: string;
    description: string;
    relatedCpmk?: string;
    cpmk_id?: number;
}

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

interface Evaluasi {
    id: number;
    week: number;
    cpl_id: number;
    cpmk_id: number;
    sub_cpmk_id: number;
    indikator: string;
    bentuk_penilaian: string;
    bobot_sub_cpmk: number;
    bobot_cpmk: number;
}

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

interface Referensi {
    id: number;
    tipe: string;
    penulis?: string;
    judul: string;
    tahun?: string;
    penerbit?: string;
    tautan?: string;
}

type PageProps = {
    course: Course;
    relatedCpls: Cpl[];
    allCpls: Cpl[];
    referensi: Referensi[];
    evaluasi: Evaluasi[];
    tugas: Tugas[];
    initialCpmks: Cpmk[];
    initialSubCpmks: SubCpmk[];
    initialRencanas: Rencana[];
    initialCourseInfo: {
        penanggungJawab: string;
        tahunAjaran: string;
        deskripsi: string;
        materiPembelajaran: string;
        tglPenyusunan: string;
    };
};

// Color Keys (Break circular dependency)
type ColorKey =
    | "blue"
    | "green"
    | "purple"
    | "orange"
    | "indigo"
    | "red"
    | "teal"
    | "amber"
    | "cyan";

// Tab Config
type TabConfig = {
    value: string;
    label: string;
    Icon: React.ComponentType<any>;
    color: ColorKey;
};

const tabsConfig: TabConfig[] = [
    {
        value: "deskripsi",
        label: "Deskripsi",
        Icon: LucideIcons.BookOpen,
        color: "blue",
    },
    { value: "cpl", label: "CPL", Icon: LucideIcons.Target, color: "green" },
    {
        value: "cpmk",
        label: "CPMK",
        Icon: LucideIcons.ListChecks,
        color: "purple",
    },
    {
        value: "subcpmk",
        label: "Sub-CPMK",
        Icon: LucideIcons.GitBranch,
        color: "orange",
    },
    {
        value: "rencana",
        label: "Rencana",
        Icon: LucideIcons.Calendar,
        color: "indigo",
    },
    {
        value: "tugas",
        label: "Tugas/Ujian",
        Icon: LucideIcons.ClipboardCheck,
        color: "red",
    },
    {
        value: "evaluasi",
        label: "Evaluasi",
        Icon: LucideIcons.CheckCircle,
        color: "teal",
    },
    {
        value: "referensi",
        label: "Referensi",
        Icon: LucideIcons.BookMarked,
        color: "cyan",
    },
];

// Color Classes
const colorClasses: Record<ColorKey, string> = {
    blue: "bg-blue-100 text-blue-800 hover:bg-blue-200 data-[state=active]:bg-blue-500 data-[state=active]:text-white",
    green: "bg-green-100 text-green-800 hover:bg-green-200 data-[state=active]:bg-green-500 data-[state=active]:text-white",
    purple: "bg-purple-100 text-purple-800 hover:bg-purple-200 data-[state=active]:bg-purple-500 data-[state=active]:text-white",
    orange: "bg-orange-100 text-orange-800 hover:bg-orange-200 data-[state=active]:bg-orange-500 data-[state=active]:text-white",
    indigo: "bg-indigo-100 text-indigo-800 hover:bg-indigo-200 data-[state=active]:bg-indigo-500 data-[state=active]:text-white",
    red: "bg-red-100 text-red-800 hover:bg-red-200 data-[state=active]:bg-red-500 data-[state=active]:text-white",
    teal: "bg-teal-100 text-teal-800 hover:bg-teal-200 data-[state=active]:bg-teal-500 data-[state=active]:text-white",
    amber: "bg-amber-100 text-amber-800 hover:bg-amber-200 data-[state=active]:bg-amber-500 data-[state=active]:text-white",
    cyan: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200 data-[state=active]:bg-cyan-500 data-[state=active]:text-white",
};

// Hero Section Component
const HeroSection = ({ course }: { course: Course }) => (
    <section className="relative overflow-hidden text-white bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 min-h-[300px]">
        <div className="absolute bottom-0 left-0 right-0 h-32 origin-bottom transform -skew-y-3 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-600/70 to-transparent" />

        <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 md:px-8 lg:px-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
                <LucideIcons.BookOpen className="w-6 h-6 text-blue-200 shrink-0" />
                <Badge className="px-3 py-1 text-sm text-white border shadow-lg bg-blue-500/80 backdrop-blur-sm border-blue-400/50">
                    {course.code}
                </Badge>
                <Badge className="px-3 py-1 text-sm text-white border shadow-lg bg-blue-500/80 backdrop-blur-sm border-blue-400/50">
                    {course.sks} SKS
                </Badge>
            </div>
            <h1 className="mb-3 text-3xl font-bold leading-tight break-words md:text-4xl lg:text-5xl">
                {course.name}
            </h1>
            <p className="text-base font-medium text-blue-100 md:text-lg">
                Rencana Pembelajaran Semester - {course.semester}
            </p>
        </div>
    </section>
);

const CourseRPS = () => {
    const {
        course,
        allCpls,
        evaluasi,
        tugas,
        referensi,
        relatedCpls,
        initialCpmks,
        initialSubCpmks,
        initialRencanas,
        initialCourseInfo,
    } = usePage<PageProps>().props;

    const [courseInfo, setCourseInfo] = useState(initialCourseInfo);
    const [rencanaItems, setRencanaItems] =
        useState<Rencana[]>(initialRencanas);
    const [cpmkItems, setCpmkItems] = useState<Cpmk[]>(initialCpmks);
    const [subCpmkItems, setSubCpmkItems] =
        useState<SubCpmk[]>(initialSubCpmks);
    const [evaluasiItems, setEvaluasiItems] = useState<Evaluasi[]>(
        evaluasi || []
    );

    return (
        <Layout>
            <HeroSection course={course} />
            <section className="py-8 bg-gray-50">
                <div className="container px-4 mx-auto sm:px-6 md:px-8">
                    <Tabs defaultValue="deskripsi" className="w-full">
                        <div className="mb-8 overflow-x-auto scrollbar-hide sm:overflow-visible">
                            <TabsList>
                                {tabsConfig.map(
                                    ({ value, label, Icon, color }) => (
                                        <TabsTrigger
                                            key={value}
                                            value={value}
                                            className={`${colorClasses[color]} flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold px-3 py-2 sm:px-4 sm:py-2.5 rounded-md whitespace-nowrap transition-colors leading-tight min-w-[90px] sm:min-w-0`}
                                        >
                                            <Icon className="w-4 h-4 shrink-0" />
                                            <span className="relative top-[0.5px]">
                                                {label}
                                            </span>
                                        </TabsTrigger>
                                    )
                                )}
                            </TabsList>
                        </div>

                        <TabsContent value="deskripsi">
                            <DeskripsiTab courseInfo={courseInfo} />
                        </TabsContent>
                        <TabsContent value="cpl">
                            <CplTab
                                allCpls={allCpls}
                                relatedCpls={relatedCpls}
                            />
                        </TabsContent>
                        <TabsContent value="cpmk">
                            <CpmkTab cpmkItems={cpmkItems} allCpls={allCpls} />
                        </TabsContent>
                        <TabsContent value="subcpmk">
                            <SubCpmkTab
                                subCpmkItems={subCpmkItems}
                                cpmkItems={cpmkItems}
                            />
                        </TabsContent>
                        <TabsContent value="rencana">
                            <RencanaTab
                                rencanaItems={rencanaItems}
                                setRencanaItems={setRencanaItems}
                                subCpmkItems={subCpmkItems}
                            />
                        </TabsContent>
                        <TabsContent value="evaluasi">
                            <EvaluasiTab
                                evaluasiItems={evaluasiItems}
                                setEvaluasiItems={setEvaluasiItems}
                                cplItems={allCpls}
                                cpmkItems={cpmkItems}
                                subCpmkItems={subCpmkItems}
                            />
                        </TabsContent>
                        <TabsContent value="tugas">
                            <TugasTab tugas={tugas} />
                        </TabsContent>
                        <TabsContent value="referensi">
                            <ReferensiTab referensi={referensi} />
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </Layout>
    );
};

export default CourseRPS;
