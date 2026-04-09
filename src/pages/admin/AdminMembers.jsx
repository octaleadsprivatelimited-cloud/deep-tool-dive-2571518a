import React, { useState, useEffect, useRef } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Pencil, Plus, Star, StarOff, Search, Upload, FileSpreadsheet, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { getMembers, saveMember, deleteMember, uploadFile, upsertMemberByEmail } from '@/lib/dataStore';
import { parseCSV, mapCSVToMember } from '@/lib/csvParser';
import { toast } from 'sonner';

const PAGE_OPTIONS = ['Home', 'About', 'Events', 'Mentorship', 'Gallery', 'Achievements', 'Blog', 'Directory'];
const emptyMember = { fullName: '', email: '', mobile: '', profession: '', location: '', image: '', highlighted: false, displayPages: [], showImagePublicly: true, showContactPublicly: false };

const AdminMembers = () => {
  const [members, setMembers] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyMember);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  // CSV import state
  const [csvDialogOpen, setCsvDialogOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);
  const [csvImporting, setCsvImporting] = useState(false);
  const [csvResult, setCsvResult] = useState(null);
  const csvInputRef = useRef(null);

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

  // --- CSV Import ---
  const handleCSVFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith('.csv')) {
      toast.error('Please select a .csv file');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = parseCSV(ev.target.result);
        if (parsed.length === 0) {
          toast.error('No data rows found in CSV');
          return;
        }
        const mapped = parsed.map(mapCSVToMember).filter((m) => m.email);
        if (mapped.length === 0) {
          toast.error('No valid rows with email found. Make sure your CSV has an "email" column.');
          return;
        }
        setCsvData(mapped);
        setCsvResult(null);
        setCsvDialogOpen(true);
      } catch (err) {
        toast.error('Failed to parse CSV file');
      }
    };
    reader.readAsText(file);
    if (csvInputRef.current) csvInputRef.current.value = '';
  };

  const handleCSVImport = async () => {
    setCsvImporting(true);
    setCsvResult(null);
    let added = 0;
    let updated = 0;
    let failed = 0;

    for (const member of csvData) {
      try {
        const result = await upsertMemberByEmail(member);
        if (result === 'added') added++;
        else updated++;
      } catch {
        failed++;
      }
    }

    setCsvResult({ added, updated, failed });
    setCsvImporting(false);
    await loadMembers();
    toast.success(`Import complete: ${added} added, ${updated} updated${failed ? `, ${failed} failed` : ''}`);
  };

  const downloadSampleCSV = () => {
    const headers = 'fullName,email,mobile,profession,location,workingPlace,linkedin,instagram,facebook,highlighted,status';
    const sample = 'John Doe,john@example.com,+1234567890,Engineer,New York,Acme Corp,https://linkedin.com/in/john,,https://facebook.com/john,false,Approved';
    const blob = new Blob([headers + '\n' + sample], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'members_sample.csv';
    a.click();
    URL.revokeObjectURL(url);
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
        <div className="flex items-center gap-2">
          <input ref={csvInputRef} type="file" accept=".csv" onChange={handleCSVFileChange} className="hidden" />
          <Button variant="outline" onClick={() => csvInputRef.current?.click()} className="gap-2">
            <FileSpreadsheet className="w-4 h-4" /> Import CSV
          </Button>
          <Button onClick={openNew} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" /> Add Member
          </Button>
        </div>
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
            <div className="flex items-center gap-2">
              <input type="checkbox" id="showImagePublicly" checked={form.showImagePublicly ?? true} onChange={(e) => setForm((f) => ({ ...f, showImagePublicly: e.target.checked }))} />
              <Label htmlFor="showImagePublicly" className="cursor-pointer">Show image publicly</Label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="showContactPublicly" checked={form.showContactPublicly || false} onChange={(e) => setForm((f) => ({ ...f, showContactPublicly: e.target.checked }))} />
              <Label htmlFor="showContactPublicly" className="cursor-pointer">Show mobile number publicly</Label>
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

      {/* CSV Import Dialog */}
      <Dialog open={csvDialogOpen} onOpenChange={(open) => { setCsvDialogOpen(open); if (!open) { setCsvData([]); setCsvResult(null); } }}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-primary" /> Import Members from CSV
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {/* Download sample */}
            <button onClick={downloadSampleCSV} className="flex items-center gap-2 text-sm text-primary hover:underline">
              <Download className="w-4 h-4" /> Download sample CSV template
            </button>

            {/* Preview */}
            {csvData.length > 0 && !csvResult && (
              <>
                <div className="rounded-lg border border-border overflow-hidden">
                  <div className="bg-muted px-4 py-2 text-sm font-medium text-foreground">
                    Preview — {csvData.length} member{csvData.length !== 1 ? 's' : ''} found
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Profession</TableHead>
                          <TableHead>Location</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {csvData.map((m, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{m.fullName}</TableCell>
                            <TableCell className="text-muted-foreground text-sm">{m.email}</TableCell>
                            <TableCell className="text-muted-foreground text-sm">{m.profession}</TableCell>
                            <TableCell className="text-muted-foreground text-sm">{m.location}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  Members with matching emails will be <strong>updated</strong>. New emails will be <strong>added</strong>.
                </p>

                <div className="flex gap-3">
                  <Button onClick={handleCSVImport} disabled={csvImporting} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    {csvImporting ? 'Importing...' : `Import ${csvData.length} Members`}
                  </Button>
                  <Button variant="outline" onClick={() => setCsvDialogOpen(false)} className="flex-1">Cancel</Button>
                </div>
              </>
            )}

            {/* Results */}
            {csvResult && (
              <div className="space-y-3">
                <div className="rounded-lg border border-border p-4 space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle className="w-5 h-5 text-green-600" /> Import Complete
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center text-sm">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-700 dark:text-green-400">{csvResult.added}</div>
                      <div className="text-muted-foreground">Added</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">{csvResult.updated}</div>
                      <div className="text-muted-foreground">Updated</div>
                    </div>
                    {csvResult.failed > 0 && (
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                        <div className="text-2xl font-bold text-red-700 dark:text-red-400">{csvResult.failed}</div>
                        <div className="text-muted-foreground">Failed</div>
                      </div>
                    )}
                  </div>
                </div>
                <Button onClick={() => setCsvDialogOpen(false)} className="w-full">Done</Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminMembers;
