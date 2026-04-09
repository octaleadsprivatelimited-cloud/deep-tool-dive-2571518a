import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Users, Newspaper, Image, LayoutDashboard, LogOut, IndianRupee, Calendar, Youtube, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const sidebarItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { label: 'Registrations', icon: UserPlus, href: '/admin/registrations' },
  { label: 'Members', icon: Users, href: '/admin/members' },
  { label: 'Events', icon: Calendar, href: '/admin/events' },
  { label: 'Blogs', icon: Newspaper, href: '/admin/blogs' },
  { label: 'Gallery', icon: Image, href: '/admin/gallery' },
  { label: 'Videos', icon: Youtube, href: '/admin/videos' },
  { label: 'Donations', icon: IndianRupee, href: '/admin/donations' },
];

const AdminLayout = ({ children, title }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, setUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) navigate('/admin-login');
      setUser(u);
    });
    return unsub;
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin-login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted flex">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary text-secondary-foreground flex flex-col shrink-0 hidden md:flex">
        <div className="p-6 border-b border-border/20">
          <h2 className="font-heading font-bold text-lg text-primary">RISE Admin</h2>
          <p className="text-xs text-secondary-foreground/60 mt-1">Management Panel</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-secondary-foreground/70 hover:bg-secondary-foreground/10 hover:text-secondary-foreground'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border/20">
          <Button variant="ghost" className="w-full justify-start text-secondary-foreground/70 hover:text-secondary-foreground" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-background border-b border-border px-6 py-4 flex items-center justify-between md:justify-start gap-4">
          <h1 className="font-heading font-bold text-xl">{title || 'Dashboard'}</h1>
          <div className="flex md:hidden gap-2">
            {sidebarItems.map((item) => (
              <Link key={item.href} to={item.href} className={`p-2 rounded-lg ${pathname === item.href ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
                <item.icon className="w-5 h-5" />
              </Link>
            ))}
            <button onClick={handleLogout} className="p-2 text-muted-foreground">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
