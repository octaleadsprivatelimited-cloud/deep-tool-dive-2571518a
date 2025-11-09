import React, { useState } from 'react';
import { Briefcase, Search, MapPin, GraduationCap, Clock, Building2, ArrowRight, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const jobs = [
  {
    id: 1,
    title: 'Head of Community Partnerships',
    company: 'KGF Impact Labs',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '8+ years',
    tags: ['Community', 'Leadership', 'Non-profit'],
  },
  {
    id: 2,
    title: 'Senior Data Scientist',
    company: 'Diaspora Analytics',
    location: 'San Jose, USA',
    type: 'Hybrid',
    experience: '5+ years',
    tags: ['Data', 'AI/ML', 'Technology'],
  },
  {
    id: 3,
    title: 'Healthcare Program Manager',
    company: 'Kamma Health Mission',
    location: 'Singapore',
    type: 'Full-time',
    experience: '6+ years',
    tags: ['Healthcare', 'Operations', 'Program Management'],
  },
];

const filters = {
  locations: ['All Locations', 'India', 'United States', 'Canada', 'United Kingdom', 'Australia', 'Singapore', 'UAE'],
  experience: ['All Levels', '0-2 years', '3-5 years', '6-10 years', '10+ years'],
  functions: ['Any Function', 'Technology', 'Healthcare', 'Finance', 'Operations', 'Community', 'Research'],
};

const JobsPortal = () => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('All Locations');
  const [experience, setExperience] = useState('All Levels');
  const [jobFunction, setJobFunction] = useState('Any Function');

  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPage="Jobs Portal" />

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute -right-48 -top-32 h-80 w-80 rounded-full bg-[#f6c344]/25 blur-3xl" />
        <div className="absolute -left-36 bottom-0 h-96 w-96 rounded-full bg-red-200/25 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <Badge className="mx-auto mb-6 bg-black/5 text-black border border-black/10 uppercase tracking-wide">
            Careers & Opportunities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">KGF Jobs & Talent Portal</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            Discover mission-driven opportunities across the global KGF network. From startups to social impact
            programs, find roles that match your expertise and passion for community advancement.
          </p>
          <div className="grid gap-4 md:grid-cols-[2fr,1fr,1fr,1fr] bg-white border border-slate-200 shadow-lg rounded-2xl p-4">
            <div className="flex items-center gap-3 border border-black/10 rounded-lg px-3 py-2">
              <Search className="h-5 w-5 text-slate-500" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search roles, companies, or skills"
                className="border-none focus-visible:ring-0"
              />
            </div>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="border border-black/10">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {filters.locations.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger className="border border-black/10">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                {filters.experience.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={jobFunction} onValueChange={setJobFunction}>
              <SelectTrigger className="border border-black/10">
                <SelectValue placeholder="Function" />
              </SelectTrigger>
              <SelectContent>
                {filters.functions.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Opportunities Posted', value: '480+' },
              { label: 'Hiring Organizations', value: '210+' },
              { label: 'Global Cities', value: '65' },
              { label: 'Talent Referrals', value: '1,800+' },
            ].map((stat) => (
              <Card key={stat.label} className="bg-white border border-slate-200 shadow-sm text-center py-6">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-600">{stat.value}</CardTitle>
                  <CardDescription className="text-slate-600 font-medium uppercase tracking-wide">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Opportunities</h2>
              <p className="text-slate-600">
                Curated roles aligned with community development, innovation, and leadership pathways.
              </p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">Post a Job</Button>
          </div>
          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="border border-slate-200 shadow-sm">
                <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-red-50 p-3">
                        <Briefcase className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className="text-sm text-slate-500">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-red-600" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4 text-red-600" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-red-600" />
                        {job.experience}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <Badge key={tag} className="bg-black/5 text-black border border-black/10">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="bg-[#f6c344] hover:bg-[#e3b030] text-black border border-black/10 font-semibold">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Talent Mobility Desk',
                description:
                  'Visa guidance, relocation support, and onboarding playbooks backed by diaspora professionals.',
                icon: <Building2 className="h-6 w-6 text-red-600" />,
              },
              {
                title: 'Career Elevation Tracks',
                description: 'Leadership academies and mentorship pods for rising professionals and mid-career talent.',
                icon: <Sparkles className="h-6 w-6 text-red-600" />,
              },
              {
                title: 'Campus to Corporate',
                description: 'Internships, apprenticeships, and early career programs curated with KGF industry councils.',
                icon: <GraduationCap className="h-6 w-6 text-red-600" />,
              },
            ].map((item) => (
              <Card key={item.title} className="bg-white border border-slate-200 shadow-sm">
                <CardHeader className="space-y-3">
                  <div className="inline-flex items-center justify-center rounded-full bg-red-50 p-3 w-fit">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-slate-600">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#f6c344] text-black">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-5">
          <h3 className="text-3xl font-bold">Let the KGF Network Power Your Career</h3>
          <p className="text-lg text-black/70">
            Share your profile and goals. We will introduce you to mentors, hiring leaders, and opportunity circles across
            the globe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
              Submit Career Profile
            </Button>
            <Button
              variant="outline"
              className="border border-black text-black hover:bg-black hover:text-white font-semibold px-6 py-3 rounded-lg"
            >
              Request Mentor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobsPortal;

