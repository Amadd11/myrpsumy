import { Head } from "@inertiajs/react";
import Layout from "@/Components/Layout"; // Menggunakan Layout dari folder Layouts
import { Card, CardContent } from "@/Components/ui/card"; // Asumsi path komponen UI
import { Badge } from "@/Components/ui/badge"; // Asumsi path komponen UI
import {
    BookOpen,
    GraduationCap,
    Users,
    FileText,
    Microscope,
    Calculator,
    Laptop,
    Search,
    TrendingUp,
    Heart,
    Globe,
    Stethoscope,
    Building,
} from "lucide-react";
import { ReactNode, ReactElement } from "react";

// --- Definisi Tipe untuk TypeScript ---
interface Course {
    name: string;
    sks: number;
    icon: ReactElement;
}

interface Semester {
    semester: string;
    totalSKS: number;
    color: string;
    courses: Course[];
}

// --- Data Kurikulum ---
const semesterData: Semester[] = [
    {
        semester: "SEMESTER 1",
        totalSKS: 15,
        color: "bg-blue-50 border-blue-200",
        courses: [
            {
                name: "Literasi Digital Akademik",
                sks: 1,
                icon: <Laptop className="w-4 h-4" />,
            },
            {
                name: "Manajemen Pelayanan RS",
                sks: 4,
                icon: <Building className="w-4 h-4" />,
            },
            {
                name: "Pengantar Manajemen Keuangan",
                sks: 2,
                icon: <Calculator className="w-4 h-4" />,
            },
            {
                name: "Digitalisasi RS",
                sks: 2,
                icon: <Laptop className="w-4 h-4" />,
            },
            {
                name: "Metodologi Penelitian Pelayanan Kesehatan",
                sks: 4,
                icon: <Search className="w-4 h-4" />,
            },
            {
                name: "Manajemen Keuangan RS",
                sks: 2,
                icon: <Calculator className="w-4 h-4" />,
            },
        ],
    },
    {
        semester: "SEMESTER 2",
        totalSKS: 22,
        color: "bg-purple-50 border-purple-200",
        courses: [
            {
                name: "Manajemen SDM, Perilaku dan Kepemimpinan RS",
                sks: 3,
                icon: <Users className="w-4 h-4" />,
            },
            {
                name: "Manajemen Pencegahan dan Pengendalian Infeksi RS",
                sks: 2,
                icon: <Microscope className="w-4 h-4" />,
            },
            {
                name: "Pemberdayaan Masyarakat Kesehatan",
                sks: 4,
                icon: <Globe className="w-4 h-4" />,
            },
            {
                name: "Manajemen Pemasaran Jasa Kesehatan",
                sks: 2,
                icon: <TrendingUp className="w-4 h-4" />,
            },
            {
                name: "Manajemen Pelayanan Khusus RS",
                sks: 2,
                icon: <Heart className="w-4 h-4" />,
            },
            {
                name: "Manajemen Strategik RS",
                sks: 3,
                icon: <Building className="w-4 h-4" />,
            },
            {
                name: "Publikasi Ilmiah",
                sks: 6,
                icon: <FileText className="w-4 h-4" />,
            },
        ],
    },
    {
        semester: "SEMESTER 3",
        totalSKS: 17,
        color: "bg-yellow-50 border-yellow-200",
        courses: [
            {
                name: "Blok Elektif",
                sks: 2,
                icon: <BookOpen className="w-4 h-4" />,
            },
            {
                name: "Residensi",
                sks: 3,
                icon: <Stethoscope className="w-4 h-4" />,
            },
            {
                name: "Tesis",
                sks: 12,
                icon: <GraduationCap className="w-4 h-4" />,
            },
        ],
    },
];

const Kurikulum = () => {
    return (
        <>
            <Head title="Kurikulum" />
            {/* Header Section */}
            <section className="text-white bg-gradient-to-r from-blue-600 to-cyan-500">
                <div className="container px-6 py-12 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                <BookOpen className="w-12 h-12" />
                            </div>
                        </div>
                        <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                            Peta Kurikulum Prodi MARS UMY
                        </h1>
                        <p className="text-lg text-white/90">
                            Struktur mata kuliah dan distribusi SKS per semester
                            dalam Program Studi Manajemen dan Administrasi Rumah
                            Sakit.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visual Curriculum Map */}
            <section className="py-20 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="relative mx-auto max-w-7xl">
                        {/* Garis Penghubung antar Semester */}
                        <div className="absolute inset-0 items-center justify-center hidden pointer-events-none lg:flex">
                            <div className="w-full h-1 max-w-5xl rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-yellow-300"></div>
                        </div>

                        {/* Semester Sections */}
                        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                            {semesterData.map((semester, semesterIndex) => (
                                <div
                                    key={semesterIndex}
                                    className="flex flex-col items-center"
                                >
                                    {/* Semester Badge */}
                                    <div className="z-10 mb-8 text-center">
                                        <div
                                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold text-lg shadow-lg ${
                                                semesterIndex === 0
                                                    ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                                    : semesterIndex === 1
                                                    ? "bg-gradient-to-r from-purple-500 to-purple-600"
                                                    : "bg-gradient-to-r from-yellow-500 to-yellow-600"
                                            }`}
                                        >
                                            <span>{semester.semester}</span>
                                        </div>
                                        <div className="mt-3">
                                            <Badge
                                                variant="secondary"
                                                className="px-4 py-1 text-base font-semibold"
                                            >
                                                Total: {semester.totalSKS} SKS
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Course Cards */}
                                    <div className="w-full space-y-3">
                                        {semester.courses.map(
                                            (course, courseIndex) => (
                                                <Card
                                                    key={courseIndex}
                                                    className={`group hover:scale-105 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ${
                                                        semesterIndex === 0
                                                            ? "bg-blue-50 border-blue-200 hover:border-blue-300"
                                                            : semesterIndex ===
                                                              1
                                                            ? "bg-purple-50 border-purple-200 hover:border-purple-300"
                                                            : "bg-yellow-50 border-yellow-200 hover:border-yellow-300"
                                                    }`}
                                                >
                                                    <CardContent className="p-4">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center flex-1 gap-3">
                                                                <div
                                                                    className={`p-2.5 rounded-lg ${
                                                                        semesterIndex ===
                                                                        0
                                                                            ? "bg-blue-100 text-blue-700"
                                                                            : semesterIndex ===
                                                                              1
                                                                            ? "bg-purple-100 text-purple-700"
                                                                            : "bg-yellow-100 text-yellow-700"
                                                                    }`}
                                                                >
                                                                    {
                                                                        course.icon
                                                                    }
                                                                </div>
                                                                <h3 className="text-sm font-semibold leading-tight text-gray-800">
                                                                    {
                                                                        course.name
                                                                    }
                                                                </h3>
                                                            </div>
                                                            <Badge
                                                                variant="outline"
                                                                className={`font-semibold ${
                                                                    semesterIndex ===
                                                                    0
                                                                        ? "border-blue-300 text-blue-700 bg-blue-100"
                                                                        : semesterIndex ===
                                                                          1
                                                                        ? "border-purple-300 text-purple-700 bg-purple-100"
                                                                        : "border-yellow-300 text-yellow-700 bg-yellow-100"
                                                                }`}
                                                            >
                                                                {course.sks} SKS
                                                            </Badge>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

// Menerapkan persistent layout khas Inertia
Kurikulum.layout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Kurikulum;
