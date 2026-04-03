import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Newspaper, Image, Star } from 'lucide-react';
import { getMembers, getBlogs, getGalleryImages, getHighlightedMembers } from '@/lib/dataStore';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Members', value: getMembers().length, icon: Users, color: 'text-primary' },
    { label: 'Highlighted', value: getHighlightedMembers().length, icon: Star, color: 'text-yellow-500' },
    { label: 'Blog Posts', value: getBlogs().length, icon: Newspaper, color: 'text-blue-500' },
    { label: 'Gallery Images', value: getGalleryImages().length, icon: Image, color: 'text-green-500' },
  ];

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
      <Card className="border-border">
        <CardContent className="p-6">
          <h3 className="font-heading font-bold text-lg mb-2">Welcome to RISE Admin Panel</h3>
          <p className="text-muted-foreground text-sm">
            Manage your members, blog posts, and gallery images from here. Use the sidebar to navigate between sections.
          </p>
          <p className="text-xs text-muted-foreground mt-4 p-3 bg-muted rounded-lg">
            ⚠️ Currently using localStorage. Connect Firebase to persist data permanently.
          </p>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default AdminDashboard;
