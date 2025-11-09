import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/contexts/AuthContext';
import {
  Bell,
  BookmarkCheck,
  CalendarCheck,
  FileSpreadsheet,
  HeartHandshake,
  MapPin,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react';

const membershipPerks = [
  'VIP access to KGF global summits and regional forums',
  'Priority seating for leadership roundtables and policy briefings',
  'Dedicated concierge for volunteering, mentoring, and business connects',
];

const upcomingEvents = [
  { name: 'KGF Leadership Conclave', date: '11 Dec 2025', location: 'Hyderabad, India', type: 'Summit' },
  { name: 'Global Mentorship Marathon', date: '7 Jan 2026', location: 'Virtual', type: 'Mentorship' },
  { name: 'Community Impact Hackathon', date: '2 Feb 2026', location: 'San Francisco, USA', type: 'Innovation' },
];

const recommendedResources = [
  { title: 'Diaspora Start-up Fund Playbook', format: 'Guide', action: 'Download' },
  { title: 'Policy Navigator: Agriculture to AI', format: 'Report', action: 'Read' },
  { title: 'Volunteer Impact Blueprint', format: 'Toolkit', action: 'Launch' },
];

const communityFeed = [
  {
    title: 'Toronto Chapter Launches Scholarship Cohort',
    summary: 'New cohort supports 50 grad students with mentorship and cross-border internships.',
    chapter: 'Canada Chapter',
  },
  {
    title: 'Hyderabad Health Camp',
    summary: 'Cardio-screening camp served 1,200 families with preventive health support.',
    chapter: 'Hyderabad Chapter',
  },
  {
    title: 'Digital Literacy Drive',
    summary: 'Women entrepreneurs from Amaravati adopted new digital finance platforms.',
    chapter: 'Andhra Chapter',
  },
];

const DashboardUser = () => {
  const { role, isAuthenticated, loginAs } = useAuth();
  const allowedRoles = ['user', 'admin', 'super-admin'];

  if (!allowedRoles.includes(role)) {
    return (
      <div className="min-h-screen bg-white text-black">
        <Header currentPage="User Dashboard" />
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
            <Badge className="mx-auto border border-black/10 bg-black/5 text-black uppercase tracking-wide">Secured Area</Badge>
            <h1 className="text-4xl font-bold">Sign in to view your dashboard</h1>
            <p className="text-slate-600">
              Your personalised membership insights, events, and resources live here. Switch to the appropriate role or sign in to continue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white" onClick={() => loginAs('user')}>
                Continue as Member
              </Button>
              {!isAuthenticated && (
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white" asChild>
                  <a href="/login">Log In</a>
                </Button>
              )}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPage="User Dashboard" />

      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute -right-48 -top-24 h-72 w-72 rounded-full bg-[#b99b4c]/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <Badge className="mb-4 border border-black/10 bg-black/5 text-black uppercase tracking-wide">
                Global Patron Member
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Welcome back, Visionary Leader</h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Track your membership, upcoming engagements, and personalised resources to amplify community impact.
              </p>
            </div>
            <Card className="border-slate-200 shadow-sm rounded-3xl max-w-sm">
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl">Engagement Score</CardTitle>
                <CardDescription className="text-slate-600">Measured across events, volunteering, and mentorship.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-black">Current Level</span>
                  <span className="text-[#b99b4c] font-semibold">82%</span>
                </div>
                <Progress value={82} className="h-2 bg-slate-200" />
                <p className="text-xs text-slate-500">
                  Boost your score by joining the Global Mentorship Marathon and logging service hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-semibold text-slate-700">Membership Status</CardTitle>
                <Star className="h-5 w-5 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-2xl font-bold">Global Patron</div>
                <p className="text-sm text-slate-600">Valid until 30 Sep 2026</p>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full">
                  Upgrade Plan
                </Button>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-semibold text-slate-700">Volunteer Hours</CardTitle>
                <HeartHandshake className="h-5 w-5 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-2xl font-bold">54 hrs</div>
                <p className="text-sm text-slate-600">Goal: 120 hrs for Platinum Laureate badge</p>
                <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white w-full">Log Service</Button>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base font-semibold text-slate-700">Mentorship Matches</CardTitle>
                <TrendingUp className="h-5 w-5 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-2xl font-bold">8 active</div>
                <p className="text-sm text-slate-600">Next session: 15 Nov 2025 with Hyderabad STEM cohort</p>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full">
                  View Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <Card className="flex-1 rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Upcoming Engagements</CardTitle>
                  <CardDescription className="text-slate-600">
                    Global and regional events recommended for your leadership track.
                  </CardDescription>
                </div>
                <CalendarCheck className="h-6 w-6 text-[#b99b4c]" />
              </CardHeader>
              <CardContent className="space-y-5">
                {upcomingEvents.map((event) => (
                  <div key={event.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 px-4 py-3">
                    <div>
                      <div className="font-semibold text-black">{event.name}</div>
                      <div className="text-sm text-slate-600">{event.type} • {event.date}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin className="h-4 w-4 text-[#b99b4c]" />
                        {event.location}
                      </div>
                      <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                        RSVP
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="w-full lg:w-80 rounded-3xl border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Membership Perks</CardTitle>
                <CardDescription className="text-slate-600">Exclusive benefits unlocked at Patron tier.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {membershipPerks.map((perk) => (
                  <div key={perk} className="flex items-start gap-3">
                    <Sparkles className="h-4 w-4 mt-1 text-[#b99b4c]" />
                    <p className="text-sm text-slate-600">{perk}</p>
                  </div>
                ))}
                <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white w-full">View Full Benefits</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="xl:col-span-2 rounded-3xl border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Recommended Resources</CardTitle>
                  <CardDescription className="text-slate-600">Handpicked dossiers tailored to your leadership focus.</CardDescription>
                </div>
                <BookmarkCheck className="h-6 w-6 text-[#b99b4c]" />
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Format</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recommendedResources.map((resource) => (
                      <TableRow key={resource.title}>
                        <TableCell className="font-medium">{resource.title}</TableCell>
                        <TableCell>{resource.format}</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                            {resource.action}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Alerts & Notifications</CardTitle>
                <CardDescription className="text-slate-600">Stay informed about tasks, approvals, and new updates.</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="updates" className="w-full">
                  <TabsList className="grid grid-cols-2 bg-slate-100 border border-slate-200">
                    <TabsTrigger value="updates" className="data-[state=active]:bg-white">Updates</TabsTrigger>
                    <TabsTrigger value="tasks" className="data-[state=active]:bg-white">Tasks</TabsTrigger>
                  </TabsList>
                  <TabsContent value="updates" className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-slate-200 px-4 py-3 flex gap-3">
                      <Bell className="h-4 w-4 text-[#b99b4c]" />
                      <div>
                        <div className="text-sm font-semibold text-black">Regional council invite</div>
                        <div className="text-xs text-slate-500">RSVP by 25 Nov to join the Americas policy working group.</div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 px-4 py-3 flex gap-3">
                      <Bell className="h-4 w-4 text-[#b99b4c]" />
                      <div>
                        <div className="text-sm font-semibold text-black">Impact report released</div>
                        <div className="text-xs text-slate-500">Annual social impact report now available in your library.</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="tasks" className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-slate-200 px-4 py-3 flex gap-3">
                      <FileSpreadsheet className="h-4 w-4 text-[#b99b4c]" />
                      <div>
                        <div className="text-sm font-semibold text-black">Submit mentorship feedback</div>
                        <div className="text-xs text-slate-500">Due 18 Nov for Hyderabad STEM mentees.</div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 px-4 py-3 flex gap-3">
                      <FileSpreadsheet className="h-4 w-4 text-[#b99b4c]" />
                      <div>
                        <div className="text-sm font-semibold text-black">Update service diary</div>
                        <div className="text-xs text-slate-500">Log hours from the telemedicine drive in Warangal.</div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-3">
              <h3 className="text-3xl font-bold">Amplify Your Impact</h3>
              <p className="text-slate-600">
                Lead a working group, adopt a community project, or invest in micro-entrepreneurs. Our concierge team will craft a personalised roadmap.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white px-6 py-3 rounded-lg">
                Book Strategy Session
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg">
                Explore Initiatives
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DashboardUser;


