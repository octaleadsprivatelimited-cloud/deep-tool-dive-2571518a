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
import { compressImageToFirestoreLimit } from '@/lib/imageCompression';
import { toast } from 'sonner';

const emptyEvent = {
  title: '',
  date: '',
  time: '',
  venue: '',
  description: '',
  image: '',
  registrationLink: '',
  speakers: '',
  category: '',
  type: 'upcoming',
};

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyEvent);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const fileInputRef = useRef(null);

  const resetImageInput = () => {
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const resetDialog = () => {
    setEditing(null);
    setForm(emptyEvent);
    setImageLoading(false);
    resetImageInput();
  };

  const loadEvents = async () => {
    setEvents(await getEvents());
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const openNew = () => {
    resetDialog();
    setDialogOpen(true);
  };

  const openEdit = (event) => {
    const { id, ...eventData } = event;
    setEditing({ id });
    setForm({ ...emptyEvent, ...eventData });
    resetImageInput();
    setImageLoading(false);
    setDialogOpen(true);
  };

  const handleDialogChange = (open) => {
    setDialogOpen(open);
    if (!open) resetDialog();
  };

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageLoading(true);
    try {
      const compressed = await compressImageToFirestoreLimit(file);
      setForm((current) => ({ ...current, image: compressed }));
    } catch (err) {
      toast.error(err.message || 'Failed to process image');
      resetImageInput();
    } finally {
      setImageLoading(false);
    }
  };

  const removeImage = () => {
    setForm((current) => ({ ...current, image: '' }));
    resetImageInput();
  };

  const handleSave = async () => {
    if (!form.title || !form.date) {
      toast.error('Title and date are required');
      return;
    }

    setSaving(true);
    try {
      await saveEvent(editing ? { ...form, id: editing.id } : form);
      await loadEvents();
      handleDialogChange(false);
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

  const filtered = events.filter((event) => event.title?.toLowerCase().includes(search.toLowerCase()));

  return (
    <AdminLayout title="Events Management">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search events..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <Button onClick={openNew} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Add Event
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
                {filtered.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium">{event.title}</TableCell>
                    <TableCell className="text-muted-foreground">{event.date}</TableCell>
                    <TableCell className="hidden text-muted-foreground md:table-cell">{event.venue}</TableCell>
                    <TableCell>
                      <Badge variant={event.type === 'upcoming' ? 'default' : event.type === 'ongoing' ? 'default' : event.type === 'cancelled' ? 'destructive' : 'secondary'}>
                        {event.type || 'upcoming'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" onClick={() => openEdit(event)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(event.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
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
        <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? 'Edit Event' : 'Add Event'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Title *</Label>
              <Input value={form.title} onChange={(e) => setForm((current) => ({ ...current, title: e.target.value }))} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date *</Label>
                <Input
                  value={form.date}
                  onChange={(e) => setForm((current) => ({ ...current, date: e.target.value }))}
                  placeholder="e.g. May 15, 2026"
                />
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <Input
                  value={form.time}
                  onChange={(e) => setForm((current) => ({ ...current, time: e.target.value }))}
                  placeholder="e.g. 9:00 AM - 6:00 PM"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Venue</Label>
              <Input value={form.venue} onChange={(e) => setForm((current) => ({ ...current, venue: e.target.value }))} />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea value={form.description} onChange={(e) => setForm((current) => ({ ...current, description: e.target.value }))} rows={3} />
            </div>

            <div className="space-y-2">
              <Label>Speakers (comma separated)</Label>
              <Input
                value={form.speakers}
                onChange={(e) => setForm((current) => ({ ...current, speakers: e.target.value }))}
                placeholder="Speaker 1, Speaker 2"
              />
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Input
                value={form.category}
                onChange={(e) => setForm((current) => ({ ...current, category: e.target.value }))}
                placeholder="e.g. Summit, Workshop, Webinar"
              />
            </div>

            <div className="space-y-2">
              <Label>Registration Link</Label>
              <Input
                value={form.registrationLink}
                onChange={(e) => setForm((current) => ({ ...current, registrationLink: e.target.value }))}
                placeholder="https://..."
              />
            </div>

            <div className="space-y-2">
              <Label>Event Image</Label>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              {form.image ? (
                <div className="group relative">
                  <img src={form.image} alt="Preview" className="h-32 w-full rounded-lg border border-border object-cover" />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute right-2 top-2 rounded-full bg-destructive p-1 text-destructive-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 flex items-center justify-center rounded-lg bg-secondary/60 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <span className="text-sm font-medium text-secondary-foreground">Change Image</span>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={imageLoading}
                  className="flex w-full cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-border p-6 transition-colors hover:border-primary/50 hover:bg-accent/50"
                >
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{imageLoading ? 'Processing...' : 'Click to upload image'}</span>
                  <span className="text-xs text-muted-foreground/60">Up to 5MB • auto-optimized for upload</span>
                </button>
              )}
            </div>

            <div className="space-y-2">
              <Label>Status</Label>
              <select
                value={form.type}
                onChange={(e) => setForm((current) => ({ ...current, type: e.target.value }))}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div className="flex gap-3 pt-2">
              <Button onClick={handleSave} disabled={saving || imageLoading} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                {saving ? 'Saving...' : 'Save'}
              </Button>
              <Button variant="outline" onClick={() => handleDialogChange(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminEvents;
