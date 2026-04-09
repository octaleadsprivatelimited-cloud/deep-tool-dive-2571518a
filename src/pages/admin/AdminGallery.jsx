import React, { useState, useEffect, useRef } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trash2, Plus, ImageIcon, Upload, X } from 'lucide-react';
import { getGalleryImages, saveGalleryImage, deleteGalleryImage } from '@/lib/dataStore';
import { toast } from 'sonner';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const compressImage = (base64, maxWidth = 800, quality = 0.4) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        let w = img.width;
        let h = img.height;
        if (w > maxWidth) { h = (maxWidth / w) * h; w = maxWidth; }
        const maxH = 600;
        if (h > maxH) { w = (maxH / h) * w; h = maxH; }
        canvas.width = Math.round(w);
        canvas.height = Math.round(h);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        let result = canvas.toDataURL('image/jpeg', quality);
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

const AdminGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ title: '', image: '' });
  const [saving, setSaving] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const fileInputRef = useRef(null);

  const loadGallery = async () => { setGallery(await getGalleryImages()); };
  useEffect(() => { loadGallery(); }, []);

  const handleImageChange = async (e) => {
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
      const compressed = await compressImage(ev.target.result);
      setForm((f) => ({ ...f, image: compressed }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (!form.image) { toast.error('Image is required'); return; }
    setSaving(true);
    try {
      await saveGalleryImage({ title: form.title, image: form.image });
      await loadGallery();
      setDialogOpen(false);
      setForm({ title: '', image: '' });
      toast.success('Image added to gallery');
    } catch (err) {
      toast.error(err.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this image?')) return;
    await deleteGalleryImage(id);
    await loadGallery();
    toast.success('Image deleted');
  };

  return (
    <AdminLayout title="Gallery Management">
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground text-sm">{gallery.length} images</p>
        <Button onClick={() => { setForm({ title: '', image: '' }); setDialogOpen(true); }} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" /> Add Image
        </Button>
      </div>

      {gallery.length === 0 ? (
        <Card className="border-border">
          <CardContent className="p-12 text-center text-muted-foreground">
            <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-30" />
            No gallery images yet. Add your first image!
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((img) => (
            <Card key={img.id} className="border-border overflow-hidden group relative">
              <div className="aspect-square">
                <img src={img.image} alt={img.title || 'Gallery'} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                {img.title && <p className="text-secondary-foreground text-sm font-medium text-center px-4">{img.title}</p>}
                <Button variant="destructive" size="sm" onClick={() => handleDelete(img.id)}>
                  <Trash2 className="w-4 h-4 mr-1" /> Delete
                </Button>
              </div>
              {img.title && (
                <CardContent className="p-3">
                  <p className="text-sm font-medium truncate">{img.title}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Gallery Image</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Image *</Label>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
              {form.image && <img src={form.image} alt="Preview" className="w-full h-48 object-cover rounded-lg mt-2" />}
            </div>
            <div className="space-y-2">
              <Label>Caption (optional)</Label>
              <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} placeholder="Image description..." />
            </div>
            <div className="flex gap-3 pt-2">
              <Button onClick={handleSave} disabled={saving} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                {saving ? 'Uploading...' : 'Add'}
              </Button>
              <Button variant="outline" onClick={() => setDialogOpen(false)} className="flex-1">Cancel</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default AdminGallery;
