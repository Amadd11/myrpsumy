import { GraduationCap, ChevronDown, Menu, X } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { useState, useRef, useEffect, FC } from "react";

interface Course {
    name: string;
    slug: string;
    sks: number;
}
interface SemesterCourses {
    [semester: string]: Course[];
}

const createSemesterSlug = (semester: string): string => {
    return semester.toLowerCase().replace(/\s+/g, "-");
};

const Header: FC = () => {
    const { props } = usePage<{ semesterCourses: SemesterCourses }>();
    const semesterCourses = props.semesterCourses;

    const [isRPSOpen, setIsRPSOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileRPSOpen, setIsMobileRPSOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsRPSOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const closeMobileMenus = () => {
        setIsMobileMenuOpen(false);
        setIsMobileRPSOpen(false);
    };

    const navLinks = [
        { href: "/", label: "Beranda" },
        { href: "/kurikulum", label: "Kurikulum" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b bg-card border-border backdrop-blur-sm">
            <div className="container flex items-center justify-between px-2 py-4 mx-auto md:px-16">
                {/* Logo - Agak ke kiri dengan mr-auto */}
                <Link
                    href="/"
                    className="flex items-center mr-auto space-x-3 group"
                >
                    <div className="p-2 transition-transform rounded-lg bg-gradient-primary group-hover:scale-105">
                        <GraduationCap className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-primary">
                            My RPS
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Prodi MARS UMY
                        </p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="items-center hidden space-x-6 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-medium transition-colors text-foreground hover:text-primary"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Dropdown RPS */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsRPSOpen(!isRPSOpen)}
                            className="flex items-center gap-1 font-medium text-foreground hover:text-primary"
                        >
                            RPS
                            <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                    isRPSOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        {isRPSOpen && (
                            <div className="absolute right-0 z-50 mt-2 overflow-y-auto border rounded-lg shadow-lg top-full w-80 bg-card border-border max-h-96">
                                <div className="p-2">
                                    {Object.entries(semesterCourses || {}).map(
                                        ([semester, courses]) => (
                                            <div
                                                key={semester}
                                                className="mb-2 last:mb-0"
                                            >
                                                <div className="px-4 py-2 text-sm font-semibold border-b text-primary border-border/50">
                                                    {semester}
                                                </div>
                                                <div className="mt-1 space-y-1">
                                                    {courses.map((course) => (
                                                        <Link
                                                            key={course.slug}
                                                            href={`/rps/${course.slug}`} // FIX: Hapus createSemesterSlug(semester) — cuma course.slug
                                                            className="block w-full px-4 py-2 text-sm text-left transition-colors rounded-lg text-foreground hover:bg-muted"
                                                            onClick={() =>
                                                                setIsRPSOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <span>
                                                                    {
                                                                        course.name
                                                                    }
                                                                </span>
                                                                <span className="ml-2 text-xs text-muted-foreground whitespace-nowrap">
                                                                    {course.sks}{" "}
                                                                    SKS
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <Link
                        href="/referensi"
                        className="font-medium transition-colors text-foreground hover:text-primary"
                    >
                        Referensi
                    </Link>
                </nav>

                {/* Hamburger for mobile - Sudah di kanan dengan justify-between */}
                <button
                    className="rounded-lg hover:bg-muted md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Navigasi Mobile (Drawer) */}
            {isMobileMenuOpen && (
                <div className="border-t bg-card md:hidden">
                    <nav className="flex flex-col p-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-3 py-2 rounded-md text-foreground hover:bg-muted"
                                onClick={closeMobileMenus}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div>
                            <button
                                onClick={() =>
                                    setIsMobileRPSOpen(!isMobileRPSOpen)
                                }
                                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-foreground hover:bg-muted"
                            >
                                <span>RPS</span>
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${
                                        isMobileRPSOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {isMobileRPSOpen && (
                                <div className="pl-6 mt-2 space-y-1">
                                    {Object.entries(semesterCourses || {}).map(
                                        ([semester, courses]) => (
                                            <div key={semester}>
                                                <div className="mt-2 text-sm font-semibold text-primary">
                                                    {semester}
                                                </div>
                                                <div className="pl-4 mt-1 space-y-1 border-l-2 border-border/50">
                                                    {courses.map((course) => (
                                                        <Link
                                                            key={course.slug}
                                                            href={`/rps/${course.slug}`} // FIX: Hapus createSemesterSlug(semester) — cuma course.slug
                                                            className="block px-3 py-1 text-sm rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
                                                            onClick={
                                                                closeMobileMenus
                                                            }
                                                        >
                                                            {course.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                        <Link
                            href="/referensi"
                            className="px-3 py-2 rounded-md text-foreground hover:bg-muted"
                            onClick={closeMobileMenus}
                        >
                            Referensi
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
