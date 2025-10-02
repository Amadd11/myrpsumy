import React, { useState, ReactNode } from "react";
import { Head, usePage } from "@inertiajs/react";
import Layout from "@/Components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Badge } from "@/Components/ui/badge";
import * as LucideIcons from "lucide-react";
import { useToast } from "@/Components/hooks/use-toast";

// Impor komponen-komponen tab
import DeskripsiTab from "@/Components/CourseRPS/DeskripsiTab";
import CplTab from "@/Components/CourseRPS/CPLTab";
import CpmkTab from "@/Components/CourseRPS/CPMKTab";
import SubCpmkTab from "@/Components/CourseRPS/SubCPMKTab";
import RencanaTab from "@/Components/CourseRPS/RencanaTab";
import BobotTab from "@/Components/CourseRPS/BobotTab";

// --- Tipe Data ---
interface Course {
    name: string;
    code: string;
    sks: number;
    semester: string;
}
interface Cpl {
    id: number;
    code: string;
    title: string;
    description: string;
    bloomLevel: string;
}
interface Cpmk {
    id: number;
    title: string;
    description: string;
    borderColor: string;
    bgColor: string;
    relatedCpl?: string;
}
interface Rencana {
    id: number;
    week: number;
    materi_pembelajaran: string;
    metode: string;
    pengalaman_belajar: string;
    waktu: string;
    sub_cpmk_id: number;
}
interface Bobot {
    id: number;
    courseName: string;
    name: string;
    description: string;
    bobot: number;
}
interface SubCpmk {
    id: number;
    code: string;
    description: string;
    relatedCpmk: string;
    bloomLevel: string;
}
type PageProps = {
    course: Course;
    allCpls: Cpl[];
    selectedCplIds: number[];
    initialCpmks: Cpmk[];
    initialSubCpmks: SubCpmk[];
    initialRencanas: Rencana[];
    initialBobots: Bobot[];
    initialCourseInfo: { penanggungJawab: string; tahunAjaran: string };
};

// --- Konfigurasi Tabs ---
const tabsConfig = [
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
        value: "bobot",
        label: "Bobot",
        Icon: LucideIcons.BarChart3,
        color: "amber",
    },
    {
        value: "referensi",
        label: "Referensi",
        Icon: LucideIcons.BookMarked,
        color: "cyan",
    },
];

const colorClasses: Record<string, string> = {
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

const CourseRPS = () => {
    const {
        course,
        allCpls,
        selectedCplIds: initialSelectedCpls,
        initialCpmks,
        initialSubCpmks,
        initialRencanas,
        initialBobots,
        initialCourseInfo,
    } = usePage<PageProps>().props;

    const { toast } = useToast();

    // --- State ---
    const [courseInfo, setCourseInfo] = useState(initialCourseInfo);
    const [rencanaItems, setRencanaItems] =
        useState<Rencana[]>(initialRencanas);
    const [selectedCplIds, setSelectedCplIds] =
        useState<number[]>(initialSelectedCpls);
    const [cpmkItems, setCpmkItems] = useState<Cpmk[]>(initialCpmks);
    const [subCpmkItems, setSubCpmkItems] =
        useState<SubCpmk[]>(initialSubCpmks);
    const [bobotItems, setBobotItems] = useState<Bobot[]>(initialBobots || []);

    // --- Generate fungsi ---
    const generateCpmkFromCpl = () => {
        const newCpmks: Cpmk[] = allCpls
            .filter((cpl) => selectedCplIds.includes(cpl.id))
            .map((cpl) => ({
                id: Date.now() + Math.random(),
                title: `CPMK untuk ${cpl.code}`,
                description: cpl.description,
                borderColor: "border-purple-600",
                bgColor: "bg-purple-50",
                relatedCpl: cpl.code,
            }));

        setCpmkItems((prev) => [...prev, ...newCpmks]);

        toast({
            title: "Berhasil generate CPMK",
            description: "CPMK berhasil dibuat dari CPL terpilih",
        });
    };

    const generateSubCpmkFromCpmk = () => {
        const newSubCpmks: SubCpmk[] = cpmkItems.map((cpmk) => ({
            id: Date.now() + Math.random(),
            code: `Sub-${cpmk.id}-1`,
            description: `Sub-CPMK untuk ${cpmk.title}`,
            relatedCpmk: cpmk.title,
            bloomLevel: "C2",
        }));

        setSubCpmkItems((prev) => [...prev, ...newSubCpmks]);

        toast({
            title: "Berhasil generate Sub-CPMK",
            description: "Sub-CPMK berhasil dibuat dari CPMK yang ada",
        });
    };

    return (
        <>
            <Head title={`RPS - ${course.name}`} />

            {/* Header */}
            <section className="text-white bg-blue-600">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex items-center gap-4 mb-3">
                        <LucideIcons.BookOpen className="w-6 h-6" />
                        <Badge className="text-white bg-blue-500 border border-blue-400">
                            {course.code}
                        </Badge>
                        <Badge className="text-white bg-blue-500 border border-blue-400">
                            {course.sks} SKS
                        </Badge>
                    </div>
                    <h1 className="text-3xl font-bold md:text-4xl">
                        {course.name}
                    </h1>
                    <p className="mt-1 text-lg text-blue-100">
                        Rencana Pembelajaran Semester - {course.semester}
                    </p>
                </div>
            </section>

            {/* Tabs */}
            <section className="py-8 bg-gray-50">
                <div className="container px-6 mx-auto">
                    <Tabs defaultValue="deskripsi" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 gap-2 mb-8 sm:grid-cols-5 lg:grid-cols-9">
                            {tabsConfig.map(({ value, label, Icon, color }) => (
                                <TabsTrigger
                                    key={value}
                                    value={value}
                                    className={`${colorClasses[color]} flex items-center justify-center gap-2 text-xs font-bold p-2 rounded-md transition-colors`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{label}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <TabsContent value="deskripsi">
                            <DeskripsiTab
                                courseInfo={courseInfo}
                                setCourseInfo={setCourseInfo}
                            />
                        </TabsContent>
                        <TabsContent value="cpl">
                            <CplTab
                                allCpls={allCpls}
                                selectedCplIds={selectedCplIds}
                                setSelectedCplIds={setSelectedCplIds}
                            />
                        </TabsContent>
                        <TabsContent value="cpmk">
                            <CpmkTab
                                cpmkItems={cpmkItems}
                                setCpmkItems={setCpmkItems}
                                onGenerateFromCpl={generateCpmkFromCpl}
                            />
                        </TabsContent>
                        <TabsContent value="subcpmk">
                            <SubCpmkTab
                                subCpmkItems={subCpmkItems}
                                setSubCpmkItems={setSubCpmkItems}
                                cpmkItems={cpmkItems}
                                onGenerateFromCpmk={generateSubCpmkFromCpmk}
                            />
                        </TabsContent>
                        <TabsContent value="rencana">
                            <RencanaTab
                                rencanaItems={rencanaItems}
                                setRencanaItems={setRencanaItems}
                                subCpmkItems={subCpmkItems}
                            />
                        </TabsContent>
                        <TabsContent value="bobot">
                            <BobotTab bobotItems={bobotItems} />
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
};

CourseRPS.layout = (page: ReactNode) => <Layout>{page}</Layout>;

export default CourseRPS;
