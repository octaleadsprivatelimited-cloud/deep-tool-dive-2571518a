import React, { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { usePlatform } from '@/contexts/PlatformContext';
import {
  ActivitySquare,
  BarChart3,
  Crown,
  KeyRound,
  Network,
  ShieldPlus,
  UserPlus,
  Users,
  UsersRound,
} from 'lucide-react';

const governanceUpdates = [
  { title: 'Data privacy audit complete', detail: 'Zero critical findings; new retention policy activated.' },
  { title: 'Admin onboarding SOP refreshed', detail: 'Includes mentorship pairing and security sign-off checklists.' },
  { title: 'Chapter escalation matrix', detail: 'Unified triage process across compliance, finance, and media.' },
];

const DashboardSuperAdmin = () => {
  const { role, loginAs } = useAuth();
  const { users, metrics, addUser, updateUser, removeUser } = usePlatform();
  const allowedRoles = ['super-admin'];
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    email: '',
    role: 'admin',
    region: 'asia',
    status: 'Invited',
  });

  const regionLabels = useMemo(
    () => ({
      asia: 'Asia',
      'north-america': 'North America',
      europe: 'Europe',
      australia: 'Australia & Oceania',
      africa: 'Africa',
    }),
    []
  );

  const handleCreateAdmin = (event) => {
    event.preventDefault();
    if (!newAdmin.name.trim() || !newAdmin.email.trim()) {
      return;
    }

    addUser({
      name: newAdmin.name.trim(),
      email: newAdmin.email.trim(),
      role: newAdmin.role,
      chapter: regionLabels[newAdmin.region],
      status: newAdmin.status,
    });

    setNewAdmin({
      name: '',
      email: '',
      role: 'admin',
      region: 'asia',
      status: 'Invited',
    });
  };

  const handleRoleUpdate = (id, nextRole) => {
    updateUser(id, { role: nextRole });
  };

  const handleStatusUpdate = (id, nextStatus) => {
    updateUser(id, { status: nextStatus });
  };

  if (!allowedRoles.includes(role)) {
    return (
      <div className="min-h-screen bg-white text-black">
        <Header currentPage="Super Admin" />
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
            <Badge className="mx-auto border border-black/10 bg-black/5 text-black uppercase tracking-wide">Top Level</Badge>
            <h1 className="text-4xl font-bold">Super admin privileges required</h1>
            <p className="text-slate-600">
              This control tower is reserved for federation leadership with authority to manage admins, chapters, and system policies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white" onClick={() => loginAs('super-admin')}>
                Continue as Super Admin
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white" asChild>
                <a href="/contact">Request Elevation</a>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPage="Super Admin" />

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute -right-48 -top-24 h-72 w-72 rounded-full bg-[#b99b4c]/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <Badge className="mb-4 border border-black/10 bg-black/5 text-black uppercase tracking-wide">Federation Control Tower</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Super Admin Command Hub</h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Govern the entire KGF ecosystem, orchestrate admin teams, and drive growth across continents with unified intelligence.
              </p>
            </div>
            <Card className="border-slate-200 shadow-sm rounded-3xl max-w-sm">
              <CardHeader>
                <CardTitle className="text-xl">Platform Pulse</CardTitle>
                <CardDescription className="text-slate-600">Real-time score based on stability, compliance, and engagement.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Current Index</span>
                  <span className="text-3xl font-bold text-[#b99b4c]">91</span>
                </div>
                <Progress value={91} className="h-2 bg-slate-200" />
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-500">
                  <div className="rounded-2xl border border-slate-200 px-3 py-2">
                    <div className="font-semibold text-black">System Uptime</div>
                    <div>99.2% this quarter</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 px-3 py-2">
                    <div className="font-semibold text-black">Gov Score</div>
                    <div>Audit closed 100%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base text-slate-700">Federation Admins</CardTitle>
                <UsersRound className="h-5 w-5 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-2">
            <div className="text-3xl font-bold">{metrics.adminsCount}</div>
            <p className="text-xs text-slate-500">Includes onboarding and active federation admins.</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base text-slate-700">Total Members</CardTitle>
                <Users className="h-5 w-5 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-2">
            <div className="text-3xl font-bold">{Intl.NumberFormat().format(metrics.membersCount)}</div>
            <p className="text-xs text-slate-500">Growth momentum 12% QoQ.</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base text-slate-700">Chapters Live</CardTitle>
                <Network className="h-5 w-5 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-2">
            <div className="text-3xl font-bold">{metrics.chaptersCount}</div>
            <p className="text-xs text-slate-500">Expansion blueprint ready for 6 more regions.</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base text-slate-700">Alerts Resolved</CardTitle>
                <ShieldPlus className="h-5 w-5 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-2">
            <div className="text-3xl font-bold">{metrics.alertsResolvedPercentage}%</div>
            <p className="text-xs text-slate-500">Critical alerts closed within 36 hours.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">User Governance Directory</CardTitle>
                  <CardDescription className="text-slate-600">
                    Manage roles, chapters, and account states with centralised oversight.
                  </CardDescription>
                </div>
                <KeyRound className="h-6 w-6 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Chapter</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Commands</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          <div>{user.name}</div>
                          <div className="text-xs text-slate-500">{user.email}</div>
                        </TableCell>
                        <TableCell className="capitalize">
                          <Select value={user.role} onValueChange={(next) => handleRoleUpdate(user.id, next)}>
                            <SelectTrigger className="border border-black/10 h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="user">Member</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                              <SelectItem value="super-admin">Super Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>{user.chapter}</TableCell>
                        <TableCell>
                          <Select value={user.status} onValueChange={(next) => handleStatusUpdate(user.id, next)}>
                            <SelectTrigger className="border border-black/10 h-8">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Active">Active</SelectItem>
                              <SelectItem value="Invited">Invited</SelectItem>
                              <SelectItem value="Suspended">Suspended</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border border-red-500 text-red-600 hover:bg-red-600 hover:text-white"
                            onClick={() => removeUser(user.id)}
                          >
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="rounded-2xl border border-slate-200 px-4 py-3 flex flex-wrap gap-3 justify-between items-center text-xs text-slate-500">
                  <span>Need to offboard users or archive inactive admins?</span>
                  <Button size="sm" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                    Launch Bulk Action
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Create Admin / Chapter Lead</CardTitle>
                <CardDescription className="text-slate-600">
                  Issue secure invitations with role presets and onboarding kits.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleCreateAdmin} className="space-y-4">
                  <Input
                    placeholder="Full Name"
                    className="border border-black/20"
                    value={newAdmin.name}
                    onChange={(event) => setNewAdmin((prev) => ({ ...prev, name: event.target.value }))}
                    required
                  />
                  <Input
                    placeholder="Email Address"
                    type="email"
                    className="border border-black/20"
                    value={newAdmin.email}
                    onChange={(event) => setNewAdmin((prev) => ({ ...prev, email: event.target.value }))}
                    required
                  />
                  <Select value={newAdmin.role} onValueChange={(value) => setNewAdmin((prev) => ({ ...prev, role: value }))}>
                    <SelectTrigger className="border border-black/20">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="super-admin">Super Admin</SelectItem>
                      <SelectItem value="user">Member</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={newAdmin.region} onValueChange={(value) => setNewAdmin((prev) => ({ ...prev, region: value }))}>
                    <SelectTrigger className="border border-black/20">
                      <SelectValue placeholder="Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asia">Asia</SelectItem>
                      <SelectItem value="north-america">North America</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="australia">Australia & Oceania</SelectItem>
                      <SelectItem value="africa">Africa</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={newAdmin.status} onValueChange={(value) => setNewAdmin((prev) => ({ ...prev, status: value }))}>
                    <SelectTrigger className="border border-black/20">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Invited">Invited</SelectItem>
                      <SelectItem value="Suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full bg-[#b99b4c] hover:bg-[#a3893f] text-white">
                    Send Secure Invite
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="rounded-3xl border-slate-200 shadow-sm lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Strategic Intelligence</CardTitle>
                  <CardDescription className="text-slate-600">
                    Federation-wide KPIs for growth, retention, and philanthropic velocity.
                  </CardDescription>
                </div>
                <BarChart3 className="h-6 w-6 text-[#b99b4c]" />
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="growth">
                  <TabsList className="bg-slate-100 border border-slate-200 flex flex-wrap">
                    <TabsTrigger value="growth" className="data-[state=active]:bg-white">Growth</TabsTrigger>
                    <TabsTrigger value="retention" className="data-[state=active]:bg-white">Retention</TabsTrigger>
                    <TabsTrigger value="philanthropy" className="data-[state=active]:bg-white">Philanthropy</TabsTrigger>
                    <TabsTrigger value="innovation" className="data-[state=active]:bg-white">Innovation</TabsTrigger>
                  </TabsList>
                  <TabsContent value="growth" className="mt-4 text-sm text-slate-600 leading-relaxed space-y-3">
                    <p>
                      Membership growth sustained at <strong>12% QoQ</strong>, driven by diaspora chapters in North America and GCC. Aim to unlock 15%+
                      momentum by launching micro-community pods in Europe and Africa.
                    </p>
                    <p>
                      Recommendation: Activate the referral accelerator, offering premium mentorship seats to top advocates.
                    </p>
                  </TabsContent>
                  <TabsContent value="retention" className="mt-4 text-sm text-slate-600 leading-relaxed">
                    Retention steady at 88%. Focus on unlocking new benefits and concierge services for mid-tier donors to cross the 92% mark.
                  </TabsContent>
                  <TabsContent value="philanthropy" className="mt-4 text-sm text-slate-600 leading-relaxed">
                    Philanthropic funds deployed: ₹52 crore YTD. Prioritise rural education and telehealth infrastructure while scaling diaspora philanthropy
                    bonds.
                  </TabsContent>
                  <TabsContent value="innovation" className="mt-4 text-sm text-slate-600 leading-relaxed">
                    Innovation runway: 14 active pilots spanning agri-tech, health AI, and diaspora entrepreneurship labs. Pipeline ready for investor demos in
                    Q2 2026.
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Governance Broadcasts</CardTitle>
                <CardDescription className="text-slate-600">Latest decisions and directives for admin councils.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {governanceUpdates.map((update) => (
                  <div key={update.title} className="rounded-2xl border border-slate-200 px-4 py-3">
                    <div className="font-semibold text-black">{update.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{update.detail}</div>
                  </div>
                ))}
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                  Publish Announcement
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <Card className="rounded-3xl border-slate-200 shadow-sm">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl">Command Actions</CardTitle>
                <CardDescription className="text-slate-600">
                  Execute high-priority federation tasks with a single command.
                </CardDescription>
              </div>
              <Crown className="h-6 w-6 text-[#b99b4c]" />
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white flex items-center gap-2 px-4 py-6 h-auto">
                    <UserPlus className="h-5 w-5" />
                    <span>Promote Admin</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Promote Admin</DialogTitle>
                    <DialogDescription>Designate a new admin with role presets and onboarding workflows.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input placeholder="Member email" className="border border-black/20" />
                    <Select defaultValue="admin">
                      <SelectTrigger className="border border-black/20">
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="chapter-lead">Chapter Lead</SelectItem>
                        <SelectItem value="council">Council Chair</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white w-full">Send Promotion</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white flex items-center gap-2 px-4 py-6 h-auto">
                <ActivitySquare className="h-5 w-5" />
                <span>Launch Audit</span>
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white flex items-center gap-2 px-4 py-6 h-auto">
                <ShieldPlus className="h-5 w-5" />
                <span>Trigger Safeguard</span>
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white flex items-center gap-2 px-4 py-6 h-auto">
                <ActivitySquare className="h-5 w-5 rotate-45" />
                <span>Deploy Taskforce</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl space-y-3">
              <h3 className="text-3xl font-bold">Future-Proof the Federation</h3>
              <p className="text-slate-600">
                Activate scenario planning, strategic investments, and leadership pipelines to shape the next decade of Kamma global impact.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white px-6 py-3 rounded-lg">
                Schedule Strategy Council
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg">
                Review Long-Term Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DashboardSuperAdmin;

