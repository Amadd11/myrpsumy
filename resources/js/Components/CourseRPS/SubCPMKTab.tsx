import React, { FC, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogDescription,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { GitBranch, ListChecks, Plus, Edit, Trash2, Save } from "lucide-react";
import { useToast } from "@/Components/hooks/use-toast";

// Tipe Data
interface SubCpmk {
    id: number;
    code: string;
    description: string;
    relatedCpmk: string;
    bloomLevel: string;
}
interface Cpmk {
    id: number;
    title: string;
}

interface SubCpmkTabProps {
    subCpmkItems: SubCpmk[];
    setSubCpmkItems: React.Dispatch<React.SetStateAction<SubCpmk[]>>;
    cpmkItems: Cpmk[]; // Dibutuhkan untuk grouping dan dropdown
    onGenerateFromCpmk: () => void;
}

const SubCpmkTab: FC<SubCpmkTabProps> = ({
    subCpmkItems,
    setSubCpmkItems,
    cpmkItems,
    onGenerateFromCpmk,
}) => {
    const { toast } = useToast();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<SubCpmk | null>(null);

    const getSubCpmkGroupedByCpmk = () => {
        // Fungsi grouping berdasarkan relatedCpmk
        const grouped = subCpmkItems.reduce((acc, item) => {
            if (!acc[item.relatedCpmk]) {
                acc[item.relatedCpmk] = [];
            }
            acc[item.relatedCpmk].push(item);
            return acc;
        }, {} as Record<string, SubCpmk[]>);
        return grouped;
    };

    const handleSave = () => {
        if (!editingItem) return;

        if (editingItem.id === 0) {
            // Menambah item baru
            setSubCpmkItems((prev) => [
                ...prev,
                { ...editingItem, id: Date.now() },
            ]);
            toast({
                title: "Berhasil!",
                description: "Sub-CPMK baru telah ditambahkan.",
            });
        } else {
            // Mengedit item yang ada
            setSubCpmkItems((prev) =>
                prev.map((item) =>
                    item.id === editingItem.id ? editingItem : item
                )
            );
            toast({
                title: "Berhasil!",
                description: "Perubahan Sub-CPMK telah disimpan.",
            });
        }
        setIsDialogOpen(false);
        setEditingItem(null);
    };

    const handleDelete = (id: number) => {
        setSubCpmkItems((prev) => prev.filter((item) => item.id !== id));
        toast({ title: "Dihapus!", description: "Sub-CPMK telah dihapus." });
    };

    const handleAddNew = () => {
        setEditingItem({
            id: 0,
            code: `Sub-CPMK-${subCpmkItems.length + 1} C2-C3`,
            description: "",
            relatedCpmk: cpmkItems[0]?.title || "",
            bloomLevel: "C2",
        });
        setIsDialogOpen(true);
    };

    const handleEdit = (item: SubCpmk) => {
        setEditingItem({ ...item });
        setIsDialogOpen(true);
    };

    return (
        <Card className="border border-gray-200 shadow-md">
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-800">
                        <GitBranch className="w-6 h-6 text-orange-600" />
                        <span className="text-xl font-bold">
                            Sub-Capaian Pembelajaran Mata Kuliah (Sub-CPMK)
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={onGenerateFromCpmk}
                            disabled={cpmkItems.length === 0}
                            className="gap-2 text-gray-700 border-gray-300 hover:bg-gray-50"
                        >
                            <ListChecks className="w-4 h-4" /> Generate dari
                            CPMK
                        </Button>
                        <Button
                            size="sm"
                            className="gap-2 text-white bg-blue-600 hover:bg-blue-700"
                            onClick={handleAddNew}
                            disabled={cpmkItems.length === 0}
                        >
                            <Plus className="w-4 h-4" /> Tambah Manual
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className="p-6 space-y-6 bg-gray-50">
                    {/* Section Sub-CPMK Otomatis */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-blue-600">
                            Sub-CPMK Otomatis dari CPMK
                        </h4>
                        <p className="text-xs text-gray-500">
                            Sub-CPMK di dalam ini digenerate otomatis
                            berdasarkan 3 CPMK yang telah diinputkan. Setiap
                            CPMK akan menghasilkan 3 Sub-CPMK dengan tingkat
                            kognitif yang berbeda.
                        </p>
                        <div className="p-3 border rounded-lg bg-amber-50 border-amber-200">
                            <p className="text-xs italic text-gray-400">
                                Belum ada Sub-CPMK otomatis.
                            </p>
                        </div>
                    </div>

                    {/* Section Sub-CPMK Manual */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-blue-600">
                            Sub-CPMK Manual ({subCpmkItems.length} Sub-CPMK)
                        </h4>
                        {subCpmkItems.length === 0 ? (
                            <p className="text-sm text-gray-500">
                                Belum ada Sub-CPMK manual.
                            </p>
                        ) : (
                            <div className="space-y-3">
                                {subCpmkItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-start justify-between p-3 border rounded-lg bg-amber-50 border-amber-200"
                                    >
                                        <div className="flex-1">
                                            <strong className="block text-sm font-medium text-gray-800">
                                                {item.code}
                                            </strong>
                                            <p className="mt-1 text-sm text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-shrink-0 gap-1 ml-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="w-6 h-6 p-0 rounded hover:bg-gray-200"
                                                onClick={() => handleEdit(item)}
                                            >
                                                <Edit className="w-3 h-3 text-gray-600" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="w-6 h-6 p-0 rounded hover:bg-gray-200"
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                            >
                                                <Trash2 className="w-3 h-3 text-gray-600" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>
                            {editingItem?.id === 0 ? "Tambah" : "Edit"} Sub-CPMK
                        </DialogTitle>
                        <DialogDescription>
                            Masukkan detail untuk Sub-CPMK.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Turunan dari CPMK
                            </label>
                            <Select
                                value={editingItem?.relatedCpmk || ""}
                                onValueChange={(value) =>
                                    setEditingItem((prev) =>
                                        prev
                                            ? { ...prev, relatedCpmk: value }
                                            : null
                                    )
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih CPMK Induk..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {cpmkItems.map((cpmk) => (
                                        <SelectItem
                                            key={cpmk.id}
                                            value={cpmk.title}
                                        >
                                            {cpmk.title}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Kode Sub-CPMK
                            </label>
                            <Input
                                value={editingItem?.code || ""}
                                onChange={(e) =>
                                    setEditingItem((prev) =>
                                        prev
                                            ? { ...prev, code: e.target.value }
                                            : null
                                    )
                                }
                                className="text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Deskripsi
                            </label>
                            <Textarea
                                value={editingItem?.description || ""}
                                onChange={(e) =>
                                    setEditingItem((prev) =>
                                        prev
                                            ? {
                                                  ...prev,
                                                  description: e.target.value,
                                              }
                                            : null
                                    )
                                }
                                rows={3}
                                className="text-sm resize-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Taksonomi Bloom
                            </label>
                            <Input
                                value={editingItem?.bloomLevel || ""}
                                onChange={(e) =>
                                    setEditingItem((prev) =>
                                        prev
                                            ? {
                                                  ...prev,
                                                  bloomLevel: e.target.value,
                                              }
                                            : null
                                    )
                                }
                                className="text-sm"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setIsDialogOpen(false);
                                setEditingItem(null);
                            }}
                            className="text-sm"
                        >
                            Batal
                        </Button>
                        <Button
                            onClick={handleSave}
                            className="text-sm bg-blue-600 hover:bg-blue-700"
                        >
                            <Save className="w-4 h-4 mr-2" /> Simpan
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Card>
    );
};

export default SubCpmkTab;
