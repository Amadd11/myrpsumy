import React, { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { BookOpen } from "lucide-react";

interface DeskripsiTabProps {
    courseInfo: { penanggungJawab: string; tahunAjaran: string };
    setCourseInfo: React.Dispatch<React.SetStateAction<any>>;
}

const DeskripsiTab: FC<DeskripsiTabProps> = ({ courseInfo, setCourseInfo }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                    <BookOpen className="w-5 h-5" /> Deskripsi Mata Kuliah
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <h4 className="font-semibold">Informasi Umum</h4>
                <div className="grid gap-4 p-4 bg-gray-100 rounded-lg md:grid-cols-2">
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Penanggung Jawab
                        </label>
                        <Input
                            value={courseInfo.penanggungJawab}
                            onChange={(e) =>
                                setCourseInfo((prev: any) => ({
                                    ...prev,
                                    penanggungJawab: e.target.value,
                                }))
                            }
                            className="w-full mt-1"
                            placeholder="Nama Dosen Penanggung Jawab"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-600">
                            Tahun Ajaran
                        </label>
                        <Input
                            value={courseInfo.tahunAjaran}
                            onChange={(e) =>
                                setCourseInfo((prev: any) => ({
                                    ...prev,
                                    tahunAjaran: e.target.value,
                                }))
                            }
                            className="w-full mt-1"
                            placeholder="Contoh: 2024/2025"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default DeskripsiTab;
