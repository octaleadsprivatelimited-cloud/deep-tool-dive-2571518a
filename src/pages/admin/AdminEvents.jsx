import React, { useState, useEffect, useRef } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Pencil, Plus, Search, Upload, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getEvents, saveEvent, deleteEvent } from '@/lib/dataStore';
import { toast } from 'sonner';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const compressImage = (base64, maxWidth = 800, quality = 0.4) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        let w = img.width;
        let h = img.height;
        if (w > maxWidth) { h = (maxWidth / w) * h; w = maxWidth; }
        // Further reduce if still large
        const maxH = 600;
        if (h > maxH) { w = (maxH / h) * w; h = maxH; }
        canvas.width = Math.round(w);
        canvas.height = Math.round(h);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        let result = canvas.toDataURL('image/jpeg', quality);
        // If still > 800KB, compress more
        if (result.length > 800000) {
          result = canvas.toDataURL('image/jpeg', 0.2);
        }
        resolve(result);
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = base64;
  });

const emptyEvent = {
  title: '', date: '', time: '', venue: '', description: '', image: '',
  registrationLink: '', speakers: '', type: 'upcoming',
};

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyEvent);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);

  const loadEvents = async () => {
    setEvents(await getEvents());
  };

  useEffect(() => { loadEvents(); }, []);

  const openNew = () => { setEditing(null); setForm(emptyEvent); setDialogOpen(true); };
  const openEdit = (e) => { setEditing(e); setForm(e); setDialogOpen(true); };

  const fileInputRef = useRef(null);
  const [imageLoading, setImageLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_FILE_SIZE) {
      toast.error('File size must be under 5MB');
      return;
    }
    setImageLoading(true);
    const reader = new FileReader();
    reader.onload = async (ev) => {
      try {
        const compressed = await compressImage(ev.target.result);
        setForm((f) => ({ ...f, image: compressed }));
      } catch (err) {
        toast.error('Failed to process image');
      } finally {
        setImageLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setForm((f) => ({ ...f, image: '' }));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSave = async () => {
    if (!form.title || !form.date) { toast.error('Title and date are required'); return; }
    setSaving(true);
    try {
      await saveEvent(editing ? { ...form, id: editing.id } : form);
      await loadEvents();
      setDialogOpen(false);
      toast.success(editing ? 'Event updated' : 'Event added');
    } catch (err) {
      toast.error(err.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this event?')) return;
    await deleteEvent(id);
    await loadEvents();
    toast.success('Event deleted');
  };

  const filtered = events.filter((e) =>
    e.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Events Management">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search events..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <Button onClick={openNew} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" /> Add Event
        </Button>
      </div>

      <Card className="border-border">
        <CardContent className="p-0">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">No events found. Add your first event!</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="hidden md:table-cell">Venue</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((e) => (
                  <TableRow key={e.id}>
                    <TableCell className="font-medium">{e.title}</TableCell>
                    <TableCell className="text-muted-foreground">{e.date}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{e.venue}</TableCell>
                    <TableCell>
                      <Badge variant={e.type === 'upcoming' ? 'default' : 'secondary'}>
                        {e.type || 'upcoming'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" onClick={() => openEdit(e)}><Pencil className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(e.id)}><Trash2 className="w-4 h-4" /></Button>
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
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? 'Edit Event' : 'Add Event'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Title *</Label>
              <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date *</Label>
                <Input value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} placeholder="e.g. May 15, 2026" />
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <Input value={form.time} onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))} placeholder="e.g. 9:00 AM - 6:00 PM" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Venue</Label>
              <Input value={form.venue} onChange={(e) => setForm((f) => ({ ...f, venue: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} rows={3} />
            </div>
            <div className="space-y-2">
              <Label>Speakers (comma separated)</Label>
              <Input value={form.speakers} onChange={(e) => setForm((f) => ({ ...f, speakers: e.target.value }))} placeholder="Speaker 1, Speaker 2" />
            </div>
            <div className="space-y-2">
              <Label>Registration Link</Label>
              <Input value={form.registrationLink} onChange={(e) => setForm((f) => ({ ...f, registrationLink: e.target.value }))} placeholder="https://..." />
            </div>
            <div className="space-y-2">
              <Label>Event Image</Label>
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
              {form.image ? (
                <div className="relative group">
                  <img src={form.image} alt="Preview" className="w-full h-32 object-cover rounded-lg border border-border" />
                  <button onClick={removeImage} className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <X className="w-4 h-4" />
                  </button>
                  <button onClick={() => fileInputRef.current?.click()} className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                    <span className="text-secondary-foreground text-sm font-medium">Change Image</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={imageLoading}
                  className="w-full border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center gap-2 hover:border-primary/50 hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <Upload className="w-8 h-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{imageLoading ? 'Processing...' : 'Click to upload image'}</span>
                  <span className="text-xs text-muted-foreground/60">Max 5MB • JPG, PNG, WebP</span>
                </button>
              )}
            </div>
            <div className="space-y-2">
              <Label>Type</Label>
              <select
                value={form.type}
                onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                className="w-full border border-border rounded-md px-3 py-2 bg-background text-foreground"
              >
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
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

export default AdminEvents;
