import React from "react";
import {
    Phone,
    Printer,
    MessageCircle,
    Mail,
    MapPin,
    GraduationCap,
    Globe,
    AtSign,
    Map,
} from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="py-8 text-white bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Hubungi Kami */}
                    <div className="p-4 space-y-3 border rounded-xl bg-white/5 border-white/10">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-yellow-300">
                            <GraduationCap className="w-5 h-5" />
                            Hubungi Kami
                        </h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 transition-colors hover:text-yellow-300">
                                <Phone className="w-4 h-4" /> +62 274 387656
                                Ext. 218
                            </div>
                            <div className="flex items-center gap-2 transition-colors hover:text-yellow-300">
                                <Printer className="w-4 h-4" /> +62 274 387646
                            </div>
                            <div className="flex items-center gap-2 transition-colors hover:text-yellow-300">
                                <MessageCircle className="w-4 h-4" /> WA: +62
                                274 387646
                            </div>
                            <div className="flex items-center gap-2 transition-colors hover:text-yellow-300">
                                <Mail className="w-4 h-4" /> mrs@umy.ac.id
                            </div>
                            <p className="text-xs italic text-yellow-200">
                                MARS UMY
                            </p>
                        </div>
                    </div>

                    {/* Alamat */}
                    <div className="p-4 space-y-3 border rounded-xl bg-white/5 border-white/10">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-yellow-300">
                            <MapPin className="w-5 h-5" />
                            Alamat
                        </h3>
                        <div className="text-sm leading-tight">
                            <p className="text-yellow-100">
                                Jl. Lingkar Selatan Tamantirto, Kasihan, Bantul,
                                Yogyakarta 55183
                            </p>
                            <p className="mt-1 font-medium text-yellow-200">
                                Terpadu UMY JL. Brawijaya
                            </p>
                        </div>
                    </div>

                    {/* Layanan */}
                    <div className="p-4 space-y-3 border rounded-xl bg-white/5 border-white/10">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-yellow-300">
                            <Globe className="w-5 h-5" />
                            Layanan
                        </h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 transition-colors hover:text-yellow-300">
                                <GraduationCap className="w-4 h-4" /> Info
                                Pendaftaran
                            </div>
                            <div className="flex items-center gap-2 transition-colors hover:text-yellow-300">
                                <Globe className="w-4 h-4" /> Website
                                Pascasarjana
                            </div>
                            <div className="flex items-center gap-2 transition-colors hover:text-yellow-300">
                                <AtSign className="w-4 h-4" /> Webmail UMY
                            </div>
                            <div className="flex items-center gap-2 transition-colors hover:text-yellow-300">
                                <Map className="w-4 h-4" /> Peta Kampus
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-4 text-xs text-center text-yellow-200 border-t border-yellow-500/30">
                    <p>&copy; 2025 Universitas Muhammadiyah Yogyakarta</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
