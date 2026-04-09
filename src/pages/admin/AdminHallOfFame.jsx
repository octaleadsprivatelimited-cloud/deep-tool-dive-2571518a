import React, { useState, useEffect, useRef } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Pencil, Plus, Search, Upload, X, Award } from 'lucide-react';
import { getHallOfFame, saveHallOfFameMember, deleteHallOfFameMember } from '@/lib/dataStore';
import { compressImageToFirestoreLimit } from '@/lib/imageCompression';
import { toast } from 'sonner';

const emptyForm = {
  fullName: '', title: '', achievement: '', year: '', description: '', image: '',
};

const AdminHallOfFame = () => {
  const [members, setMembers] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const fileInputRef = useRef(null);

  const load = async () => setMembers(await getHallOfFame());
  useEffect(() => { load(); }, []);

  const resetDialog = () => {
    setEditing(null);
    setForm(emptyForm);
    setImageLoading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const openNew = () => { resetDialog(); setDialogOpen(true); };
  const openEdit = (m) => { setEditing(m); setForm(m); setDialogOpen(true); };
  const handleDialogChange = (open) => { setDialogOpen(open); if (!open) resetDialog(); };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageLoading(true);
    try {
      const compressed = await compressImageToFirestoreLimit(file);
      setForm((f) => ({ ...f, image: compressed }));
    } catch (err) {
      toast.error(err.message || 'Failed to process image');
    } finally {
      setImageLoading(false);
    }
  };

  const removeImage = () => {
    setForm((f) => ({ ...f, image: '' }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSave = async () => {
    if (!form.fullName || !form.achievement) {
      toast.error('Name and achievement are required');
      return;
    }
    setSaving(true);
    try {
      await saveHallOfFameMember(editing ? { ...form, id: editing.id } : form);
      await load();
      handleDialogChange(false);
      toast.success(editing ? 'Updated' : 'Added to Hall of Fame');
    } catch (err) {
      toast.error(err.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Remove from Hall of Fame?')) return;
    await deleteHallOfFameMember(id);
    await load();
    toast.success('Removed');
  };

  const filtered = members.filter((m) =>
    m.fullName?.toLowerCase().includes(search.toLowerCase()) ||
    m.achievement?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Hall of Fame">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <Button onClick={openNew} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" /> Add Member
        </Button>
      </div>

      <Card className="border-border">
        <CardContent className="p-0">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <Award className="w-12 h-12 mx-auto mb-4 opacity-30" />
              No Hall of Fame members yet. Add your first!
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Photo</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Achievement</TableHead>
                  <TableHead className="hidden md:table-cell">Year</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell>
                      {m.image ? (
                        <img src={m.image} alt={m.fullName} className="w-10 h-10 rounded object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {m.fullName?.charAt(0)}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{m.fullName}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{m.achievement}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{m.year}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" onClick={() => openEdit(m)}><Pencil className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(m.id)}><Trash2 className="w-4 h-4" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? 'Edit' : 'Add'} Hall of Fame Member</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input value={form.fullName} onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Title / Designation</Label>
              <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} placeholder="e.g. CEO, Doctor, Entrepreneur" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Achievement *</Label>
                <Input value={form.achievement} onChange={(e) => setForm((f) => ({ ...f, achievement: e.target.value }))} placeholder="e.g. National Award Winner" />
              </div>
              <div className="space-y-2">
                <Label>Year</Label>
                <Input value={form.year} onChange={(e) => setForm((f) => ({ ...f, year: e.target.value }))} placeholder="e.g. 2024" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} rows={3} placeholder="Brief description of the achievement..." />
            </div>
            <div className="space-y-2">
              <Label>Photo</Label>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              {form.image ? (
                <div className="group relative">
                  <img src={form.image} alt="Preview" className="w-full h-32 object-cover rounded-lg border border-border" />
                  <button type="button" onClick={removeImage} className="absolute top-2 right-2 rounded-full bg-destructive p-1 text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    <X className="w-4 h-4" />
                  </button>
                  <button type="button" onClick={() => fileInputRef.current?.click()} className="absolute inset-0 flex items-center justify-center rounded-lg bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium text-secondary-foreground">Change Photo</span>
                  </button>
                </div>
              ) : (
                <button type="button" onClick={() => fileInputRef.current?.click()} disabled={imageLoading} className="w-full border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center gap-2 hover:border-primary/50 hover:bg-accent/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{imageLoading ? 'Processing...' : 'Click to upload photo'}</span>
                  <span className="text-xs text-muted-foreground/60">Up to 5MB • auto-optimized</span>
                </button>
              )}
            </div>
            <div className="flex gap-3 pt-2">
              <Button onClick={handleSave} disabled={saving || imageLoading} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                {saving ? 'Saving...' : 'Save'}
              </Button>
              <Button variant="outline" onClick={() => handleDialogChange(false)} className="flex-1">Cancel</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminHallOfFame;
