import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Pencil, Plus } from 'lucide-react';
import { getBlogs, saveBlog, deleteBlog } from '@/lib/dataStore';
import { toast } from 'sonner';

const emptyBlog = { title: '', category: '', excerpt: '', content: '' };

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyBlog);

  useEffect(() => { setBlogs(getBlogs()); }, []);

  const openNew = () => { setEditing(null); setForm(emptyBlog); setDialogOpen(true); };
  const openEdit = (b) => { setEditing(b); setForm(b); setDialogOpen(true); };

  const handleSave = () => {
    if (!form.title) { toast.error('Title is required'); return; }
    const updated = saveBlog(editing ? { ...form, id: editing.id } : { ...form, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) });
    setBlogs(updated);
    setDialogOpen(false);
    toast.success(editing ? 'Blog updated' : 'Blog published');
  };

  const handleDelete = (id) => {
    if (!confirm('Delete this blog post?')) return;
    setBlogs(deleteBlog(id));
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
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.map((b) => (
                  <TableRow key={b.id}>
                    <TableCell className="font-medium">{b.title}</TableCell>
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
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? 'Edit Post' : 'New Blog Post'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Title *</Label>
              <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Input value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} placeholder="e.g. Events, Stories, Community" />
            </div>
            <div className="space-y-2">
              <Label>Excerpt</Label>
              <Input value={form.excerpt} onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))} placeholder="Short summary" />
            </div>
            <div className="space-y-2">
              <Label>Content</Label>
              <Textarea value={form.content} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))} rows={6} placeholder="Full blog content..." />
            </div>
            <div className="flex gap-3 pt-2">
              <Button onClick={handleSave} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">Save</Button>
              <Button variant="outline" onClick={() => setDialogOpen(false)} className="flex-1">Cancel</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminBlogs;
