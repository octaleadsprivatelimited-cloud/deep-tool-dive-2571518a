import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Pencil, Plus, Search, Youtube } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getVideos, saveVideo, deleteVideo } from '@/lib/dataStore';
import { toast } from 'sonner';

const PAGE_OPTIONS = ['Home', 'About', 'Events', 'Mentorship', 'Gallery', 'Achievements', 'Blog', 'Directory'];

const emptyVideo = { title: '', youtubeUrl: '', displayPages: [], order: 0 };

const extractVideoId = (url) => {
  const match = url?.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
};

const AdminVideos = () => {
  const [videos, setVideos] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyVideo);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);

  const loadVideos = async () => {
    setVideos(await getVideos());
  };

  useEffect(() => { loadVideos(); }, []);

  const openNew = () => { setEditing(null); setForm(emptyVideo); setDialogOpen(true); };
  const openEdit = (v) => { setEditing(v); setForm(v); setDialogOpen(true); };

  const togglePage = (page) => {
    setForm((f) => ({
      ...f,
      displayPages: f.displayPages?.includes(page)
        ? f.displayPages.filter((p) => p !== page)
        : [...(f.displayPages || []), page],
    }));
  };

  const handleSave = async () => {
    if (!form.title || !form.youtubeUrl) { toast.error('Title and YouTube URL are required'); return; }
    if (!extractVideoId(form.youtubeUrl)) { toast.error('Invalid YouTube URL'); return; }
    setSaving(true);
    try {
      await saveVideo(editing ? { ...form, id: editing.id } : form);
      await loadVideos();
      setDialogOpen(false);
      toast.success(editing ? 'Video updated' : 'Video added');
    } catch (err) {
      toast.error(err.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this video?')) return;
    await deleteVideo(id);
    await loadVideos();
    toast.success('Video deleted');
  };

  const filtered = videos.filter((v) =>
    v.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="YouTube Videos">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search videos..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <Button onClick={openNew} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" /> Add Video
        </Button>
      </div>

      <Card className="border-border">
        <CardContent className="p-0">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">No videos found. Add your first YouTube video!</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Preview</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Pages</TableHead>
                  <TableHead className="hidden md:table-cell">Order</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((v) => {
                  const videoId = extractVideoId(v.youtubeUrl);
                  return (
                    <TableRow key={v.id}>
                      <TableCell>
                        {videoId ? (
                          <img src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} alt={v.title} className="w-24 h-14 object-cover rounded" />
                        ) : (
                          <div className="w-24 h-14 bg-muted rounded flex items-center justify-center">
                            <Youtube className="w-6 h-6 text-muted-foreground" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">{v.title}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {(v.displayPages || []).map((p) => (
                            <Badge key={p} variant="secondary" className="text-xs">{p}</Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground">{v.order || 0}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon" onClick={() => openEdit(v)}><Pencil className="w-4 h-4" /></Button>
                          <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(v.id)}><Trash2 className="w-4 h-4" /></Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? 'Edit Video' : 'Add Video'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Title *</Label>
              <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>YouTube URL *</Label>
              <Input value={form.youtubeUrl} onChange={(e) => setForm((f) => ({ ...f, youtubeUrl: e.target.value }))} placeholder="https://www.youtube.com/watch?v=..." />
              {extractVideoId(form.youtubeUrl) && (
                <img src={`https://img.youtube.com/vi/${extractVideoId(form.youtubeUrl)}/mqdefault.jpg`} alt="Preview" className="w-full h-40 object-cover rounded mt-2" />
              )}
            </div>
            <div className="space-y-2">
              <Label>Display on Pages</Label>
              <div className="flex flex-wrap gap-2">
                {PAGE_OPTIONS.map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => togglePage(page)}
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
            <div className="space-y-2">
              <Label>Display Order</Label>
              <Input type="number" value={form.order || 0} onChange={(e) => setForm((f) => ({ ...f, order: parseInt(e.target.value) || 0 }))} />
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

export default AdminVideos;
