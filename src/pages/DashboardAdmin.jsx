import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAuth } from '@/contexts/AuthContext';
import { Activity, CalendarRange, ClipboardList, Globe2, Layers3, ShieldCheck, Users2 } from 'lucide-react';

const eventPipeline = [
  { name: 'Asia-Pacific Convergence', date: '15 Dec 2025', status: 'Awaiting budget', owner: 'Priya N' },
  { name: 'Global Mentors Summit', date: '22 Jan 2026', status: 'Speakers pending', owner: 'Rahul V' },
  { name: 'Diaspora Innovation Week', date: '12 Feb 2026', status: 'Ready for launch', owner: 'Anjali R' },
];

const approvalsQueue = [
  { title: 'Scholarship Impact Report', type: 'Resource', submittedBy: 'Canada Chapter', status: 'Review' },
  { title: 'Dubai Chapter Volunteer Drive', type: 'Event', submittedBy: 'Dubai Chapter', status: 'Approve' },
  { title: 'Heritage Photo Archive', type: 'Gallery', submittedBy: 'Heritage Team', status: 'Review' },
];

const riskAlerts = [
  { name: 'Membership payment gateway', severity: 'Medium', note: 'Latency spikes observed last 48 hrs' },
  { name: 'Volunteer compliance forms', severity: 'High', note: '30% pending renewals in AP chapter' },
  { name: 'Event insurance coverage', severity: 'Low', note: 'Awaiting confirmation for Singapore Summit' },
];

const DashboardAdmin = () => {
  const { role, loginAs } = useAuth();
  const allowedRoles = ['admin', 'super-admin'];

  if (!allowedRoles.includes(role)) {
    return (
      <div className="min-h-screen bg-white text-black">
        <Header currentPage="Admin Dashboard" />
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
            <Badge className="mx-auto border border-black/10 bg-black/5 text-black uppercase tracking-wide">Restricted</Badge>
            <h1 className="text-4xl font-bold">Administrative access required</h1>
            <p className="text-slate-600">
              The command center is reserved for chapter administrators and federation executives. Switch to an admin role to proceed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white" onClick={() => loginAs('admin')}>
                Continue as Admin
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white" asChild>
                <a href="/contact">Request Access</a>
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
      <Header currentPage="Admin Dashboard" />

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute -left-44 top-12 h-72 w-72 rounded-full bg-[#b99b4c]/20 blur-3xl" />
        <div className="absolute -right-48 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <Badge className="mb-4 border border-black/10 bg-black/5 text-black uppercase tracking-wide">Federation Command</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Administrator Control Center</h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Orchestrate events, chapters, resources, and compliance pipelines with live telemetry and collaboration insights.
              </p>
            </div>
            <Card className="border-slate-200 shadow-sm rounded-3xl max-w-sm">
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl">Operational Health</CardTitle>
                <CardDescription className="text-slate-600">Chapter readiness across active initiatives.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>Chapters Green</span>
                  <span className="text-[#b99b4c]">86%</span>
                </div>
                <Progress value={86} className="h-2 bg-slate-200" />
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-500">
                  <div className="rounded-2xl border border-slate-200 px-3 py-2">
                    <div className="font-semibold text-black">Hotline SLA</div>
                    <div>92% within 4 hrs</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 px-3 py-2">
                    <div className="font-semibold text-black">Compliance</div>
                    <div>11 pending renewals</div>
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
                <CardTitle className="text-base text-slate-700">Active Chapters</CardTitle>
                <Globe2 className="h-5 w-5 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold">41</div>
                <p className="text-xs text-slate-500">Up 4 new chapters in the last quarter.</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base text-slate-700">Event Pipeline</CardTitle>
                <CalendarRange className="h-5 w-5 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold">18</div>
                <p className="text-xs text-slate-500">5 awaiting approvals, 3 ready for launch.</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base text-slate-700">Volunteer Network</CardTitle>
                <Users2 className="h-5 w-5 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold">9.2k</div>
                <p className="text-xs text-slate-500">+620 new sign-ups this month.</p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base text-slate-700">Service Hours</CardTitle>
                <Activity className="h-5 w-5 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold">48,320</div>
                <p className="text-xs text-slate-500">Goal: 75,000 hours by fiscal year end.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Event Command Board</CardTitle>
                  <CardDescription className="text-slate-600">
                    Track approvals, owners, and launch readiness across the federation calendar.
                  </CardDescription>
                </div>
                <Layers3 className="h-6 w-6 text-[#b99b4c]" />
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Owner</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {eventPipeline.map((event) => (
                      <TableRow key={event.name}>
                        <TableCell className="font-medium">
                          <div>{event.name}</div>
                          <div className="text-xs text-slate-500">{event.date}</div>
                        </TableCell>
                        <TableCell>{event.status}</TableCell>
                        <TableCell>{event.owner}</TableCell>
                        <TableCell className="text-right">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" className="bg-[#b99b4c] hover:bg-[#a3893f] text-white">
                                Manage
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-xl">
                              <DialogHeader>
                                <DialogTitle>{event.name}</DialogTitle>
                                <DialogDescription>
                                  Update logistics, budgets, or communication status for this programme.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 text-sm text-slate-600">
                                <p>
                                  <strong>Status:</strong> {event.status}
                                </p>
                                <p>
                                  <strong>Owner:</strong> {event.owner}
                                </p>
                                <p>
                                  <strong>Next steps:</strong> Schedule weekly check-in with chapter leads and finalise collateral for marketing.
                                </p>
                                <div className="flex gap-3">
                                  <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white flex-1">Approve Launch</Button>
                                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white flex-1">
                                    Request Update
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Approval Workflow</CardTitle>
                  <CardDescription className="text-slate-600">Content and requests awaiting your decision.</CardDescription>
                </div>
                <ClipboardList className="h-6 w-6 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-4">
                {approvalsQueue.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 px-4 py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-semibold text-black">{item.title}</div>
                        <div className="text-xs uppercase tracking-wide text-[#b99b4c]">{item.type}</div>
                        <div className="text-xs text-slate-500 mt-1">Submitted by {item.submittedBy}</div>
                      </div>
                      <Badge className="border border-[#b99b4c]/40 bg-[#b99b4c]/10 text-[#8a6f2c] uppercase">{item.status}</Badge>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white flex-1">Approve</Button>
                      <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white flex-1">
                        View Submission
                      </Button>
                    </div>
                  </div>
                ))}
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
                  <CardTitle className="text-2xl">Compliance & Risk Desk</CardTitle>
                  <CardDescription className="text-slate-600">
                    Monitor alerts in real time, assign owners, and close the loop on pending items.
                  </CardDescription>
                </div>
                <ShieldCheck className="h-6 w-6 text-[#b99b4c]" />
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="alerts">
                  <TabsList className="bg-slate-100 border border-slate-200">
                    <TabsTrigger value="alerts" className="data-[state=active]:bg-white">Alerts</TabsTrigger>
                    <TabsTrigger value="policies" className="data-[state=active]:bg-white">Policies</TabsTrigger>
                    <TabsTrigger value="audits" className="data-[state=active]:bg-white">Audits</TabsTrigger>
                  </TabsList>
                  <TabsContent value="alerts" className="mt-4 space-y-4">
                    {riskAlerts.map((alert) => (
                      <div key={alert.name} className="rounded-2xl border border-slate-200 px-4 py-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <div className="font-semibold text-black">{alert.name}</div>
                            <div className="text-xs text-slate-500">{alert.note}</div>
                          </div>
                          <Badge className={`uppercase ${
                            alert.severity === 'High'
                              ? 'bg-red-100 text-red-700 border border-red-200'
                              : alert.severity === 'Medium'
                                ? 'bg-amber-100 text-amber-700 border border-amber-200'
                                : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                          }`}>
                            {alert.severity} risk
                          </Badge>
                        </div>
                        <div className="mt-3 flex gap-3">
                          <Button size="sm" className="bg-[#b99b4c] hover:bg-[#a3893f] text-white">Assign Owner</Button>
                          <Button size="sm" variant="outline" className="border-black text-black hover:bg-black hover:text-white">Dismiss</Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="policies" className="mt-4 text-sm text-slate-600 leading-relaxed">
                    Updated policy handbook released on 1 Nov 2025. Ensure all chapters acknowledge receipt by 30 Nov. Automated reminders will trigger every 72
                    hours for pending sign-offs.
                  </TabsContent>
                  <TabsContent value="audits" className="mt-4 text-sm text-slate-600 leading-relaxed">
                    Internal audit sprint scheduled for Q1 2026 covering finance, data privacy, and volunteer compliance. Upload evidence packs one week prior to
                    the audit window.
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Admin Actions</CardTitle>
                <CardDescription className="text-slate-600">Quick commands to execute high-impact tasks.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-[#b99b4c] hover:bg-[#a3893f] text-white">Launch Volunteer Campaign</Button>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">Open Chapter Playbook</Button>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">Schedule Broadcast</Button>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">Download KPI Report</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl space-y-3">
              <h3 className="text-3xl font-bold">Scale chapters with confidence</h3>
              <p className="text-slate-600">
                Deploy the chapter accelerator toolkit, onboard leadership councils, and launch new regions within six weeks.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white px-6 py-3 rounded-lg">
                Launch Accelerator
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg">
                View Playbooks
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DashboardAdmin;

