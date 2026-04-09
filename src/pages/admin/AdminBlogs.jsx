import React, { useState, useEffect, useRef } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Pencil, Plus, ImagePlus, X, GripVertical } from 'lucide-react';
import { getBlogs, saveBlog, deleteBlog } from '@/lib/dataStore';
import { toast } from 'sonner';

const emptyBlog = { title: '', category: '', excerpt: '', author: '', coverImage: '', contentBlocks: [] };

const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const compressImage = (base64, maxWidth = 1200) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ratio = Math.min(maxWidth / img.width, 1);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', 0.7));
    };
    img.src = base64;
  });

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyBlog);
  const [saving, setSaving] = useState(false);
  const coverInputRef = useRef(null);
  const blockImageRef = useRef(null);

  const loadBlogs = async () => { setBlogs(await getBlogs()); };
  useEffect(() => { loadBlogs(); }, []);

  const openNew = () => { setEditing(null); setForm({ ...emptyBlog, contentBlocks: [] }); setDialogOpen(true); };
  const openEdit = (b) => {
    // Migrate old blogs that have plain content string
    const blocks = b.contentBlocks || (b.content ? [{ type: 'text', value: b.content }] : []);
    setEditing(b);
    setForm({ ...emptyBlog, ...b, contentBlocks: blocks });
    setDialogOpen(true);
  };

  const handleCoverImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const base64 = await fileToBase64(file);
    const compressed = await compressImage(base64);
    setForm((f) => ({ ...f, coverImage: compressed }));
  };

  const addTextBlock = () => {
    setForm((f) => ({ ...f, contentBlocks: [...f.contentBlocks, { type: 'text', value: '' }] }));
  };

  const addImageBlock = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const base64 = await fileToBase64(file);
    const compressed = await compressImage(base64);
    setForm((f) => ({
      ...f,
      contentBlocks: [...f.contentBlocks, { type: 'image', value: compressed, caption: '' }],
    }));
  };

  const updateBlock = (index, updates) => {
    setForm((f) => ({
      ...f,
      contentBlocks: f.contentBlocks.map((b, i) => (i === index ? { ...b, ...updates } : b)),
    }));
  };

  const removeBlock = (index) => {
    setForm((f) => ({ ...f, contentBlocks: f.contentBlocks.filter((_, i) => i !== index) }));
  };

  const moveBlock = (index, direction) => {
    const newBlocks = [...form.contentBlocks];
    const target = index + direction;
    if (target < 0 || target >= newBlocks.length) return;
    [newBlocks[index], newBlocks[target]] = [newBlocks[target], newBlocks[index]];
    setForm((f) => ({ ...f, contentBlocks: newBlocks }));
  };

  const handleSave = async () => {
    if (!form.title) { toast.error('Title is required'); return; }
    setSaving(true);
    try {
      const payload = {
        title: form.title,
        category: form.category,
        excerpt: form.excerpt,
        author: form.author,
        coverImage: form.coverImage,
        contentBlocks: form.contentBlocks,
      };
      await saveBlog(editing
        ? { ...payload, id: editing.id }
        : { ...payload, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }
      );
      await loadBlogs();
      setDialogOpen(false);
      toast.success(editing ? 'Blog updated' : 'Blog published');
    } catch (err) {
      toast.error(err.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this blog post?')) return;
    await deleteBlog(id);
    await loadBlogs();
    toast.success('Blog deleted');
  };

  return (
    <AdminLayout title="Blog Management">
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground text-sm">{blogs.length} posts</p>
        <Button onClick={openNew} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" /> New Post
        </Button>
      </div>

      <Card className="border-border">
        <CardContent className="p-0">
          {blogs.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">No blog posts yet. Create your first post!</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cover</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Author</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.map((b) => (
                  <TableRow key={b.id}>
                    <TableCell>
                      {b.coverImage ? (
                        <img src={b.coverImage} alt="" className="w-16 h-10 object-cover rounded" />
                      ) : (
                        <div className="w-16 h-10 bg-muted rounded flex items-center justify-center">
                          <ImagePlus className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{b.title}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{b.author || '—'}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{b.category}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{b.date}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" onClick={() => openEdit(b)}><Pencil className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(b.id)}><Trash2 className="w-4 h-4" /></Button>
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? 'Edit Post' : 'New Blog Post'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Cover Image */}
            <div className="space-y-2">
              <Label>Cover Image</Label>
              {form.coverImage ? (
                <div className="relative">
                  <img src={form.coverImage} alt="Cover" className="w-full h-48 object-cover rounded-lg" />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-7 w-7"
                    onClick={() => setForm((f) => ({ ...f, coverImage: '' }))}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div
                  onClick={() => coverInputRef.current?.click()}
                  className="w-full h-32 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors"
                >
                  <ImagePlus className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">Click to add cover image</span>
                </div>
              )}
              <input ref={coverInputRef} type="file" accept="image/*" className="hidden" onChange={handleCoverImage} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>Author</Label>
                <Input value={form.author} onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))} placeholder="Author name" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Input value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} placeholder="e.g. Events, Stories" />
              </div>
              <div className="space-y-2">
                <Label>Excerpt</Label>
                <Input value={form.excerpt} onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))} placeholder="Short summary" />
              </div>
            </div>

            {/* Content Blocks */}
            <div className="space-y-2">
              <Label>Article Content</Label>
              <div className="space-y-3">
                {form.contentBlocks.map((block, i) => (
                  <div key={i} className="flex gap-2 items-start border border-border rounded-lg p-3 bg-muted/30">
                    <div className="flex flex-col gap-1 pt-1">
                      <button onClick={() => moveBlock(i, -1)} className="text-muted-foreground hover:text-foreground text-xs">▲</button>
                      <GripVertical className="w-4 h-4 text-muted-foreground" />
                      <button onClick={() => moveBlock(i, 1)} className="text-muted-foreground hover:text-foreground text-xs">▼</button>
                    </div>
                    <div className="flex-1">
                      {block.type === 'text' ? (
                        <Textarea
                          value={block.value}
                          onChange={(e) => updateBlock(i, { value: e.target.value })}
                          rows={4}
                          placeholder="Write your paragraph..."
                          className="bg-background"
                        />
                      ) : (
                        <div className="space-y-2">
                          <img src={block.value} alt="" className="w-full h-40 object-cover rounded" />
                          <Input
                            value={block.caption || ''}
                            onChange={(e) => updateBlock(i, { caption: e.target.value })}
                            placeholder="Image caption (optional)"
                            className="bg-background"
                          />
                        </div>
                      )}
                    </div>
                    <Button variant="ghost" size="icon" className="text-destructive shrink-0" onClick={() => removeBlock(i)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                <Button type="button" variant="outline" size="sm" onClick={addTextBlock}>
                  <Plus className="w-3 h-3 mr-1" /> Text Block
                </Button>
                <Button type="button" variant="outline" size="sm" onClick={() => blockImageRef.current?.click()}>
                  <ImagePlus className="w-3 h-3 mr-1" /> Image Block
                </Button>
                <input ref={blockImageRef} type="file" accept="image/*" className="hidden" onChange={addImageBlock} />
              </div>
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

export default AdminBlogs;
