import React, { FC, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { ListChecks, Plus, Edit, Trash2, Save } from "lucide-react";

export interface Cpmk {
    id: number;
    title: string;
    description: string;
    borderColor: string;
    bgColor: string;
    relatedCpl?: string;
}

interface CpmkTabProps {
    cpmkItems: Cpmk[];
    setCpmkItems: React.Dispatch<React.SetStateAction<Cpmk[]>>;
    onGenerateFromCpl: () => void;
}

const CpmkTab: FC<CpmkTabProps> = ({
    cpmkItems,
    setCpmkItems,
    onGenerateFromCpl,
}) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<Cpmk | null>(null);

    // Group CPMK by related CPL
    const grouped = cpmkItems.reduce<Record<string, Cpmk[]>>((acc, item) => {
        const key = item.relatedCpl || "Tanpa CPL";
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});

    const handleSave = (itemToSave: Cpmk) => {
        if (itemToSave.id === 0) {
            setCpmkItems((prev) => [
                ...prev,
                { ...itemToSave, id: Date.now() },
            ]);
        } else {
            setCpmkItems((prev) =>
                prev.map((item) =>
                    item.id === itemToSave.id ? itemToSave : item
                )
            );
        }
        setIsDialogOpen(false);
        setEditingItem(null);
    };

    const handleDelete = (id: number) => {
        setCpmkItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-800">
                        <ListChecks className="w-6 h-6 text-purple-600" />
                        <span className="text-xl font-bold">
                            Capaian Pembelajaran Mata Kuliah (CPMK)
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={onGenerateFromCpl}
                            variant="outline"
                            size="sm"
                        >
                            Generate dari CPL
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => {
                                setEditingItem({
                                    id: 0,
                                    title: "",
                                    description: "",
                                    borderColor: "border-gray-300",
                                    bgColor: "bg-gray-50",
                                });
                                setIsDialogOpen(true);
                            }}
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            Tambah Manual
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {Object.keys(grouped).length > 0 ? (
                    Object.entries(grouped).map(([cpl, items]) => (
                        <div key={cpl} className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-gray-800">
                                    CPMK dari {cpl}{" "}
                                    <Badge variant="secondary">
                                        {items.length} CPMK
                                    </Badge>
                                </h3>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                        setEditingItem({
                                            id: 0,
                                            title: "",
                                            description: "",
                                            borderColor: "border-gray-300",
                                            bgColor: "bg-gray-50",
                                            relatedCpl: cpl,
                                        });
                                        setIsDialogOpen(true);
                                    }}
                                >
                                    <Plus className="w-4 h-4 mr-2" /> Tambah
                                    CPMK
                                </Button>
                            </div>

                            {items.map((item: Cpmk) => (
                                <div
                                    key={item.id}
                                    className={`p-4 border rounded-lg ${item.borderColor} ${item.bgColor}`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h4 className="font-semibold text-gray-800">
                                                {item.title}
                                            </h4>
                                            {item.relatedCpl && (
                                                <Badge
                                                    variant="outline"
                                                    className="my-1 text-xs text-gray-700"
                                                >
                                                    Dari {item.relatedCpl}
                                                </Badge>
                                            )}
                                            <p className="text-sm text-gray-700">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => {
                                                    setEditingItem(item);
                                                    setIsDialogOpen(true);
                                                }}
                                            >
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                            >
                                                <Trash2 className="w-4 h-4 text-red-500" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <p className="py-6 text-center text-gray-500">
                        Belum ada CPMK. Silakan generate dari CPL atau tambahkan
                        secara manual.
                    </p>
                )}
            </CardContent>

            {/* Dialog Tambah/Edit */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {editingItem?.id === 0 ? "Tambah" : "Edit"} CPMK
                        </DialogTitle>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                        <div>
                            <label className="text-sm font-medium">
                                Judul CPMK
                            </label>
                            <Input
                                value={editingItem?.title || ""}
                                onChange={(e) =>
                                    setEditingItem((prev) =>
                                        prev
                                            ? { ...prev, title: e.target.value }
                                            : null
                                    )
                                }
                                placeholder="Contoh: CPMK-1"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">
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
                                placeholder="Deskripsi capaian pembelajaran..."
                                rows={4}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setIsDialogOpen(false)}
                        >
                            Batal
                        </Button>
                        <Button
                            onClick={() =>
                                editingItem && handleSave(editingItem)
                            }
                        >
                            <Save className="w-4 h-4 mr-2" /> Simpan
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Card>
    );
};

export default CpmkTab;
