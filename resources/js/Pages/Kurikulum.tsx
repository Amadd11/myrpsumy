import { Head } from "@inertiajs/react";
import Layout from "@/Components/Layout";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
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
    ChevronDown,
} from "lucide-react";
import { ReactNode, ReactElement, useState } from "react";

interface Course {
    name: string;
    englishName: string;
    sks: number;
    icon: ReactElement;
    subCourses?: Array<{ name: string; englishName: string }>; // untuk blok elektif
}

interface Semester {
    semester: string;
    totalSKS: number;
    color: string;
    courses: Course[];
}

const semesterData: Semester[] = [
    {
        semester: "SEMESTER 1",
        totalSKS: 13,
        color: "bg-blue-50 border-blue-200",
        courses: [
            {
                name: "Literasi Digital Akademik",
                englishName: "Digital Academic Literacy",
                sks: 1,
                icon: <Laptop className="w-4 h-4" />,
            },
            {
                name: "Pengantar Manajemen Keuangan",
                englishName: "Introduction to Financial Management",
                sks: 2,
                icon: <Calculator className="w-4 h-4" />,
            },
            {
                name: "Metodologi Penelitian Pelayanan Kesehatan",
                englishName: "Research Methodology in Health Services",
                sks: 3,
                icon: <Search className="w-4 h-4" />,
            },
            {
                name: "Digitalisasi RS",
                englishName: "Hospital Digitalization",
                sks: 2,
                icon: <Laptop className="w-4 h-4" />,
            },
            {
                name: "Manajemen Keuangan RS",
                englishName: "Hospital Financial Management",
                sks: 2,
                icon: <Calculator className="w-4 h-4" />,
            },
            {
                name: "Manajemen Pelayanan RS",
                englishName: "Hospital Service Management",
                sks: 3,
                icon: <Building className="w-4 h-4" />,
            },
        ],
    },
    {
        semester: "SEMESTER 2",
        totalSKS: 17,
        color: "bg-purple-50 border-purple-200",
        courses: [
            {
                name: "Manajemen SDM, Perilaku dan Kepemimpinan RS",
                englishName: "HRM, Behavior, and Leadership in Hospitals",
                sks: 3,
                icon: <Users className="w-4 h-4" />,
            },
            {
                name: "Manajemen Pencegahan dan Pengendalian Infeksi RS",
                englishName:
                    "Hospital Infection Prevention and Control Management",
                sks: 2,
                icon: <Microscope className="w-4 h-4" />,
            },
            {
                name: "Entrepreneurship dan Pemberdayaan Masyarakat Kesehatan",
                englishName:
                    "Entrepreneurship and Community Health Empowerment",
                sks: 3,
                icon: <Globe className="w-4 h-4" />,
            },
            {
                name: "Manajemen Pemasaran Jasa Kesehatan",
                englishName: "Health Service Marketing Management",
                sks: 2,
                icon: <TrendingUp className="w-4 h-4" />,
            },
            {
                name: "Manajemen Pelayanan Khusus RS",
                englishName: "Special Hospital Services Management",
                sks: 2,
                icon: <Heart className="w-4 h-4" />,
            },
            {
                name: "Manajemen Strategik RS",
                englishName: "Strategic Hospital Management",
                sks: 3,
                icon: <Building className="w-4 h-4" />,
            },
            {
                name: "Publikasi Ilmiah",
                englishName: "Scientific Publication",
                sks: 2,
                icon: <FileText className="w-4 h-4" />,
            },
        ],
    },
    {
        semester: "SEMESTER 3",
        totalSKS: 10,
        color: "bg-yellow-50 border-yellow-200",
        courses: [
            {
                name: "Blok Elektif (Elective Block)",
                englishName: "Elective Block",
                sks: 2,
                icon: <BookOpen className="w-4 h-4" />,
                subCourses: [
                    {
                        name: "Manajemen Bencana (Disaster Management)",
                        englishName: "Disaster Management",
                    },
                    {
                        name: "Akreditasi Layanan Primer (Primary Health Services Accreditation)",
                        englishName: "Primary Health Services Accreditation",
                    },
                    {
                        name: "Akreditasi RS (Hospital Accreditation)",
                        englishName: "Hospital Accreditation",
                    },
                    {
                        name: "Pemasaran Digital (Digital Marketing)",
                        englishName: "Digital Marketing",
                    },
                    {
                        name: "Hukum dan Kebijakan Kesehatan (Health Law and Policy)",
                        englishName: "Health Law and Policy",
                    },
                    {
                        name: "Akreditasi RS Syariah (Hospital Sharia Accreditation)",
                        englishName: "Hospital Sharia Accreditation",
                    },
                ],
            },
            {
                name: "Residensi (Residency)",
                englishName: "Residency",
                sks: 2,
                icon: <Stethoscope className="w-4 h-4" />,
            },
            {
                name: "Tesis (Thesis)",
                englishName: "Thesis",
                sks: 6,
                icon: <GraduationCap className="w-4 h-4" />,
            },
        ],
    },
];

const Kurikulum = () => {
    // State untuk toggle blok elektif (pakai Set untuk multiple, key = course.name)
    const [expandedCourses, setExpandedCourses] = useState<Set<string>>(
        new Set()
    );

    const toggleExpanded = (courseName: string) => {
        setExpandedCourses((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(courseName)) {
                newSet.delete(courseName);
            } else {
                newSet.add(courseName);
            }
            return newSet;
        });
    };

    return (
        <>
            {/* Header Section */}
            <section className="relative text-white bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden min-h-[400px]">
                <div className="container px-6 py-20 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-4 shadow-lg bg-white/10 rounded-xl backdrop-blur-sm">
                                <BookOpen className="w-12 h-12" />
                            </div>
                        </div>
                        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                            Peta Kurikulum Prodi MARS UMY
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-white/90">
                            Struktur mata kuliah dan distribusi SKS dalam
                            Program Studi Manajemen dan Administrasi Rumah
                            Sakit. Total keseluruhan adalah 40 SKS.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visual Curriculum Map */}
            <section className="py-20 bg-slate-50">
                <div className="container px-6 mx-auto">
                    <div className="relative mx-auto max-w-7xl">
                        {/* Garis penghubung antar semester */}
                        <div className="absolute inset-0 items-center justify-center hidden pointer-events-none lg:flex">
                            <div className="w-full h-1 max-w-5xl rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-yellow-300"></div>
                        </div>

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
                                            {semester.semester}
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
                                    <div className="w-full space-y-4">
                                        {semester.courses.map(
                                            (course, courseIndex) => (
                                                <div key={courseIndex}>
                                                    <Card
                                                        className={`group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer ${
                                                            semesterIndex === 0
                                                                ? "bg-blue-50 border-blue-200 hover:border-blue-300"
                                                                : semesterIndex ===
                                                                  1
                                                                ? "bg-purple-50 border-purple-200 hover:border-purple-300"
                                                                : "bg-yellow-50 border-yellow-200 hover:border-yellow-300"
                                                        }`}
                                                        onClick={() => {
                                                            console.log(
                                                                "Clicked:",
                                                                course.name
                                                            ); // Debug log
                                                            if (
                                                                course.subCourses
                                                            ) {
                                                                toggleExpanded(
                                                                    course.name
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        <CardContent className="relative p-4">
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center flex-1 gap-3">
                                                                    <div
                                                                        className={`p-2.5 rounded-lg shadow-sm ${
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
                                                                    <div className="flex-1">
                                                                        <h3 className="text-sm font-semibold leading-tight text-gray-800 group-hover:text-gray-900">
                                                                            {
                                                                                course.name
                                                                            }
                                                                        </h3>
                                                                        <p className="mt-1 text-xs text-gray-500">
                                                                            {
                                                                                course.englishName
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <Badge
                                                                        variant="outline"
                                                                        className={`font-semibold text-xs ${
                                                                            semesterIndex ===
                                                                            0
                                                                                ? "border-blue-300 text-blue-700 bg-blue-100"
                                                                                : semesterIndex ===
                                                                                  1
                                                                                ? "border-purple-300 text-purple-700 bg-purple-100"
                                                                                : "border-yellow-300 text-yellow-700 bg-yellow-100"
                                                                        }`}
                                                                    >
                                                                        {
                                                                            course.sks
                                                                        }{" "}
                                                                        SKS
                                                                    </Badge>
                                                                    {course.subCourses && (
                                                                        <ChevronDown
                                                                            className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                                                                                expandedCourses.has(
                                                                                    course.name
                                                                                )
                                                                                    ? "rotate-180"
                                                                                    : ""
                                                                            }`}
                                                                        />
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {/* Sub-Courses (Blok Elektif) - Konsisten styling */}
                                                            {course.subCourses &&
                                                                expandedCourses.has(
                                                                    course.name
                                                                ) && (
                                                                    <div className="pl-6 mt-4 space-y-3 border-l-2 border-gray-300 border-dashed rounded-r-lg bg-gray-50/50">
                                                                        {course.subCourses.map(
                                                                            (
                                                                                sub,
                                                                                subIndex
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        subIndex
                                                                                    }
                                                                                    className="flex items-center gap-3 p-3 transition-all duration-200 border border-gray-200 rounded-lg bg-white/70 hover:bg-white"
                                                                                >
                                                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                                                                                    <div className="flex-1">
                                                                                        <p className="text-xs font-medium text-gray-700">
                                                                                            {
                                                                                                sub.name
                                                                                            }
                                                                                        </p>
                                                                                        <p className="text-xs text-gray-500">
                                                                                            {
                                                                                                sub.englishName
                                                                                            }
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        )}
                                                                        <button
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                e.stopPropagation(); // Stop bubble ke parent Card
                                                                                console.log(
                                                                                    "Closing:",
                                                                                    course.name
                                                                                ); // Debug
                                                                                toggleExpanded(
                                                                                    course.name
                                                                                );
                                                                            }}
                                                                            className="self-start px-3 py-1 text-xs font-medium text-blue-600 transition-colors rounded-md bg-blue-50 hover:bg-blue-100"
                                                                        >
                                                                            Tutup
                                                                            daftar
                                                                        </button>
                                                                    </div>
                                                                )}
                                                        </CardContent>
                                                    </Card>
                                                </div>
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

Kurikulum.layout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Kurikulum;
