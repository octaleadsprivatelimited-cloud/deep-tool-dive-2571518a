import React, { useState, useEffect, useRef } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Trash2, Plus, ImageIcon, Upload, X } from 'lucide-react';
import { getGalleryImages, saveGalleryImage, deleteGalleryImage } from '@/lib/dataStore';
import { compressImageToFirestoreLimit } from '@/lib/imageCompression';
import { toast } from 'sonner';

const emptyForm = { title: '', image: '' };

const AdminGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const fileInputRef = useRef(null);

  const resetImageInput = () => {
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const resetDialog = () => {
    setForm(emptyForm);
    setImageLoading(false);
    resetImageInput();
  };

  const loadGallery = async () => {
    setGallery(await getGalleryImages());
  };

  useEffect(() => {
    loadGallery();
  }, []);

  const openDialog = () => {
    resetDialog();
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
    if (!form.image) {
      toast.error('Image is required');
      return;
    }

    setSaving(true);
    try {
      await saveGalleryImage({ title: form.title, image: form.image });
      await loadGallery();
      handleDialogChange(false);
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
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{gallery.length} images</p>
        <Button onClick={openDialog} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Add Image
        </Button>
      </div>

      {gallery.length === 0 ? (
        <Card className="border-border">
          <CardContent className="p-12 text-center text-muted-foreground">
            <ImageIcon className="mx-auto mb-4 h-12 w-12 opacity-30" />
            No gallery images yet. Add your first image!
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((img) => (
            <Card key={img.id} className="group relative overflow-hidden border-border">
              <div className="aspect-square">
                <img src={img.image} alt={img.title || 'Gallery'} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-secondary/80 opacity-0 transition-opacity group-hover:opacity-100">
                {img.title && <p className="px-4 text-center text-sm font-medium text-secondary-foreground">{img.title}</p>}
                <Button variant="destructive" size="sm" onClick={() => handleDelete(img.id)}>
                  <Trash2 className="mr-1 h-4 w-4" /> Delete
                </Button>
              </div>
              {img.title && (
                <CardContent className="p-3">
                  <p className="truncate text-sm font-medium">{img.title}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Gallery Image</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Image *</Label>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              {form.image ? (
                <div className="group relative">
                  <img src={form.image} alt="Preview" className="h-48 w-full rounded-lg border border-border object-cover" />
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
                  className="flex w-full cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-border p-8 transition-colors hover:border-primary/50 hover:bg-accent/50"
                >
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{imageLoading ? 'Processing...' : 'Click to upload image'}</span>
                  <span className="text-xs text-muted-foreground/60">Up to 5MB • auto-optimized for upload</span>
                </button>
              )}
            </div>

            <div className="space-y-2">
              <Label>Caption (optional)</Label>
              <Input
                value={form.title}
                onChange={(e) => setForm((current) => ({ ...current, title: e.target.value }))}
                placeholder="Image description..."
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button onClick={handleSave} disabled={saving || imageLoading} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                {saving ? 'Uploading...' : 'Add'}
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

export default AdminGallery;
