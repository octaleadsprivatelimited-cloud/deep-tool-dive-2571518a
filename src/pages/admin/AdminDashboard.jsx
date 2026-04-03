import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Newspaper, Image, Star, KeyRound, IndianRupee } from 'lucide-react';
import { getMembers, getBlogs, getGalleryImages, getHighlightedMembers, getDonations } from '@/lib/dataStore';
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const AdminDashboard = () => {
  const [stats, setStats] = useState([
    { label: 'Total Members', value: 0, icon: Users, color: 'text-primary' },
    { label: 'Highlighted', value: 0, icon: Star, color: 'text-accent' },
    { label: 'Blog Posts', value: 0, icon: Newspaper, color: 'text-primary' },
    { label: 'Gallery Images', value: 0, icon: Image, color: 'text-accent' },
    { label: 'Donations', value: 0, icon: IndianRupee, color: 'text-primary' },
  ]);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [changingPw, setChangingPw] = useState(false);

  useEffect(() => {
    const load = async () => {
      const [members, highlighted, blogs, gallery, donations] = await Promise.all([
        getMembers(), getHighlightedMembers(), getBlogs(), getGalleryImages(), getDonations(),
      ]);
      setStats([
        { label: 'Total Members', value: members.length, icon: Users, color: 'text-primary' },
        { label: 'Highlighted', value: highlighted.length, icon: Star, color: 'text-accent' },
        { label: 'Blog Posts', value: blogs.length, icon: Newspaper, color: 'text-primary' },
        { label: 'Gallery Images', value: gallery.length, icon: Image, color: 'text-accent' },
        { label: 'Donations', value: donations.length, icon: IndianRupee, color: 'text-primary' },
      ]);
    };
    load();
  }, []);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    setChangingPw(true);
    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      toast.success('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      toast.error(err.message || 'Failed to change password');
    } finally {
      setChangingPw(false);
    }
  };

  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((s) => (
          <Card key={s.label} className="border-border">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center ${s.color}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-heading font-bold">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardContent className="p-6">
            <h3 className="font-heading font-bold text-lg mb-2">Welcome to RISE Admin Panel</h3>
            <p className="text-muted-foreground text-sm">
              Manage your members, blog posts, and gallery images from here. Use the sidebar to navigate between sections.
            </p>
            <p className="text-xs text-muted-foreground mt-4 p-3 bg-muted rounded-lg">
              🔥 Connected to Firebase — data is persisted in Firestore.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <KeyRound className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-bold text-lg">Change Password</h3>
            </div>
            <form onSubmit={handleChangePassword} className="space-y-3">
              <div className="space-y-1">
                <Label className="text-xs">Current Password</Label>
                <Input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Enter current password" required />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">New Password</Label>
                <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter new password" required />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Confirm New Password</Label>
                <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" required />
              </div>
              <Button type="submit" disabled={changingPw} className="w-full h-10 font-bold">
                {changingPw ? 'Updating...' : 'Update Password'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
