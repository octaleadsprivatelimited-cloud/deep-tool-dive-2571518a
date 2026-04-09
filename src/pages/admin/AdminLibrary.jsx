import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Plus, Pencil, X, BookOpen } from 'lucide-react';
import { getBooks, saveBook, deleteBook } from '@/lib/dataStore';
import { toast } from 'sonner';

const emptyForm = { title: '', author: '', category: '', thumbnail: '', driveLink: '' };

const AdminLibrary = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(false);

  const load = () => {
    setLoading(true);
    getBooks().then((data) => { setBooks(data); setLoading(false); });
  };

  useEffect(() => { load(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.thumbnail || !form.driveLink) {
      toast.error('Title, thumbnail and drive link are required');
      return;
    }
    try {
      await saveBook(form);
      toast.success(form.id ? 'Book updated' : 'Book added');
      setForm(emptyForm);
      setEditing(false);
      load();
    } catch (err) {
      toast.error('Failed to save book');
    }
  };

  const handleEdit = (book) => {
    setForm(book);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this book?')) return;
    await deleteBook(id);
    toast.success('Book deleted');
    load();
  };

  return (
    <AdminLayout title="Library Management">
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              {editing ? <><Pencil className="w-4 h-4" /> Edit Book</> : <><Plus className="w-4 h-4" /> Add Book</>}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Title *</Label>
                <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              </div>
              <div>
                <Label>Author</Label>
                <Input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
              </div>
              <div>
                <Label>Category</Label>
                <Input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. Fiction, Science" />
              </div>
              <div>
                <Label>Thumbnail URL *</Label>
                <Input value={form.thumbnail} onChange={(e) => setForm({ ...form, thumbnail: e.target.value })} placeholder="Image URL for book cover" />
              </div>
              <div>
                <Label>Google Drive Link *</Label>
                <Input value={form.driveLink} onChange={(e) => setForm({ ...form, driveLink: e.target.value })} placeholder="https://drive.google.com/..." />
              </div>
              {form.thumbnail && (
                <div className="aspect-[3/4] w-24 rounded overflow-hidden border">
                  <img src={form.thumbnail} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">{form.id ? 'Update' : 'Add Book'}</Button>
                {editing && (
                  <Button type="button" variant="outline" onClick={() => { setForm(emptyForm); setEditing(false); }}>
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="w-4 h-4" /> Books ({books.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-muted-foreground">Loading...</p>
            ) : books.length === 0 ? (
              <p className="text-muted-foreground">No books yet.</p>
            ) : (
              <div className="space-y-3">
                {books.map((book) => (
                  <div key={book.id} className="flex items-center gap-3 p-3 rounded-lg border">
                    <div className="w-12 h-16 rounded overflow-hidden bg-muted shrink-0">
                      <img src={book.thumbnail} alt={book.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{book.title}</p>
                      {book.author && <p className="text-xs text-muted-foreground">{book.author}</p>}
                      {book.category && <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{book.category}</span>}
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <Button size="icon" variant="ghost" onClick={() => handleEdit(book)}><Pencil className="w-4 h-4" /></Button>
                      <Button size="icon" variant="ghost" className="text-destructive" onClick={() => handleDelete(book.id)}><Trash2 className="w-4 h-4" /></Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminLibrary;
