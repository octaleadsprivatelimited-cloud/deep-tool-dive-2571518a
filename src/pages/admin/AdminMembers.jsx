import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Pencil, Plus, Star, StarOff, Search } from 'lucide-react';
import { getMembers, saveMember, deleteMember, uploadFile } from '@/lib/dataStore';
import { toast } from 'sonner';

const PAGE_OPTIONS = ['Home', 'About', 'Events', 'Mentorship', 'Gallery', 'Achievements', 'Blog', 'Directory'];
const emptyMember = { fullName: '', email: '', mobile: '', profession: '', location: '', image: '', highlighted: false, displayPages: [] };

const AdminMembers = () => {
  const [members, setMembers] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyMember);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const loadMembers = async () => {
    setMembers(await getMembers());
  };

  useEffect(() => { loadMembers(); }, []);

  const openNew = () => { setEditing(null); setForm(emptyMember); setImageFile(null); setDialogOpen(true); };
  const openEdit = (m) => { setEditing(m); setForm(m); setImageFile(null); setDialogOpen(true); };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setForm((f) => ({ ...f, image: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (!form.fullName || !form.email) { toast.error('Name and email are required'); return; }
    setSaving(true);
    try {
      let imageUrl = form.image;
      if (imageFile) {
        imageUrl = await uploadFile(imageFile, `members/${Date.now()}_${imageFile.name}`);
      }
      await saveMember(editing ? { ...form, id: editing.id, image: imageUrl } : { ...form, image: imageUrl });
      await loadMembers();
      setDialogOpen(false);
      toast.success(editing ? 'Member updated' : 'Member added');
    } catch (err) {
      toast.error(err.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this member?')) return;
    await deleteMember(id);
    await loadMembers();
    toast.success('Member deleted');
  };

  const toggleHighlight = async (m) => {
    await saveMember({ ...m, highlighted: !m.highlighted });
    await loadMembers();
    toast.success(m.highlighted ? 'Removed from homepage' : 'Added to homepage');
  };

  const filtered = members.filter((m) =>
    m.fullName?.toLowerCase().includes(search.toLowerCase()) ||
    m.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Members Management">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search members..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <Button onClick={openNew} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" /> Add Member
        </Button>
      </div>

      <Card className="border-border">
        <CardContent className="p-0">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">No members found. Add your first member!</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Photo</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden md:table-cell">Profession</TableHead>
                  <TableHead className="hidden lg:table-cell">Location</TableHead>
                  <TableHead>Homepage</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell>
                      {m.image ? (
                        <img src={m.image} alt={m.fullName} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {m.fullName?.charAt(0)}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{m.fullName}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{m.email}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{m.profession}</TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground">{m.location}</TableCell>
                    <TableCell>
                      <button onClick={() => toggleHighlight(m)} className="p-1">
                        {m.highlighted ? <Star className="w-5 h-5 text-accent fill-accent" /> : <StarOff className="w-5 h-5 text-muted-foreground" />}
                      </button>
                    </TableCell>
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

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? 'Edit Member' : 'Add Member'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input value={form.fullName} onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Email *</Label>
              <Input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Mobile</Label>
                <Input value={form.mobile} onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>Location</Label>
                <Input value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Profession</Label>
              <Input value={form.profession} onChange={(e) => setForm((f) => ({ ...f, profession: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Profile Photo</Label>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
              {form.image && <img src={form.image} alt="Preview" className="w-16 h-16 rounded-full object-cover mt-2" />}
            </div>
            <div className="space-y-2">
              <Label>Display on Pages</Label>
              <div className="flex flex-wrap gap-2">
                {PAGE_OPTIONS.map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setForm((f) => ({
                      ...f,
                      displayPages: f.displayPages?.includes(page)
                        ? f.displayPages.filter((p) => p !== page)
                        : [...(f.displayPages || []), page],
                    }))}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                      form.displayPages?.includes(page)
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-muted text-muted-foreground border-border hover:border-primary'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="highlighted" checked={form.highlighted || false} onChange={(e) => setForm((f) => ({ ...f, highlighted: e.target.checked }))} />
              <Label htmlFor="highlighted" className="cursor-pointer">Show on homepage (highlighted)</Label>
            </div>
            <div className="flex gap-3 pt-2">
              <Button onClick={handleSave} disabled={saving} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                {saving ? 'Saving...' : 'Save'}
              </Button>
              <Button variant="outline" onClick={() => setDialogOpen(false)} className="flex-1">Cancel</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminMembers;
