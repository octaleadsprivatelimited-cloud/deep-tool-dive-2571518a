import React, { useMemo, useState } from 'react';
import { Heart, Users, CalendarHeart, Shield, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

const matches = [
  {
    id: 1,
    name: 'Priya & Naveen',
    chapter: 'USA – Bay Area',
    story: 'Met through the diaspora alumni circle and built a shared vision across continents.',
    milestone: 'Married in 2023 • Tech & Healthcare Professionals',
  },
  {
    id: 2,
    name: 'Deepika & Kishore',
    chapter: 'India – Hyderabad',
    story: 'Shared passion for entrepreneurship sparked during the KGF Founders Lab.',
    milestone: 'Engaged in 2024 • Co-founders of a social enterprise',
  },
  {
    id: 3,
    name: 'Swathi & Arun',
    chapter: 'Singapore',
    story: 'Families connected while volunteering for the KGF scholarship drive.',
    milestone: 'Celebrated in 2022 • Education & Finance leaders',
  },
];

const filters = {
  professions: ['Technology', 'Healthcare', 'Entrepreneur', 'Finance', 'Academia', 'Public Service'],
  locations: ['India', 'United States', 'Canada', 'United Kingdom', 'Australia', 'Singapore', 'Gulf'],
  interests: ['Community Service', 'Entrepreneurship', 'Arts & Culture', 'STEM', 'Agriculture'],
};

const Matrimonial = () => {
  const [selectedProfession, setSelectedProfession] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('');
  const [searchName, setSearchName] = useState('');

  const stats = useMemo(
    () => [
      { label: 'Global Profiles', value: '8,200+' },
      { label: 'Success Stories', value: '560+' },
      { label: 'Family Matchmakers', value: '120+' },
      { label: 'Diaspora Regions', value: '18' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPage="Matrimonial" />

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute -right-40 -top-32 h-80 w-80 rounded-full bg-[#f6c344]/30 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-red-200/30 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <Badge className="mx-auto mb-6 bg-red-50 text-red-700 border border-red-200 uppercase tracking-wide">
            Community Connections
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Matrimonial & Family Alliances</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            A culturally rooted, privacy-first space to help Kamma families connect, discover shared values, and build
            meaningful alliances across the globe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
              Start Profile
            </Button>
            <Button className="bg-[#f6c344] hover:bg-[#e3b030] text-black font-semibold px-6 py-3 rounded-lg border border-black/10">
              Family Concierge
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
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
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                <Heart className="h-7 w-7 text-red-600" />
                Trusted Matching Framework
              </h2>
              <p className="text-lg text-slate-600">
                Our concierge team combines verified profiles, family references, and community mentors to curate
                introductions aligned with your values, aspirations, and cultural preferences.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Verified Profiles',
                    description: 'Identity, education, and professional validations reviewed by our trust desk.',
                    icon: <Shield className="h-6 w-6 text-red-600" />,
                  },
                  {
                    title: 'Family Circles',
                    description: 'Private meetups and introductions with support from elders and alumni mentors.',
                    icon: <Users className="h-6 w-6 text-red-600" />,
                  },
                  {
                    title: 'Value Journeys',
                    description: 'Focus areas include entrepreneurship, social impact, education, and diaspora leadership.',
                    icon: <Sparkles className="h-6 w-6 text-red-600" />,
                  },
                  {
                    title: 'Lifetime Community',
                    description: 'Access to couple retreats, leadership forums, and KGF family networks.',
                    icon: <CalendarHeart className="h-6 w-6 text-red-600" />,
                  },
                ].map((feature) => (
                  <Card key={feature.title} className="border border-slate-200 shadow-sm">
                    <CardHeader className="flex flex-row items-start gap-3">
                      <div className="rounded-full bg-red-50 p-3">{feature.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="text-slate-600">{feature.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Discover Profiles</CardTitle>
                <CardDescription className="text-slate-600">
                  Filter by professional background, location, and shared interests to begin a curated conversation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  value={searchName}
                  onChange={(event) => setSearchName(event.target.value)}
                  placeholder="Search by name, family, or alumni network"
                  className="border border-black/10"
                />
                <Select value={selectedProfession} onValueChange={setSelectedProfession}>
                  <SelectTrigger className="border border-black/10">
                    <SelectValue placeholder="Profession" />
                  </SelectTrigger>
                  <SelectContent>
                    {filters.professions.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
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
                <Select value={selectedInterest} onValueChange={setSelectedInterest}>
                  <SelectTrigger className="border border-black/10">
                    <SelectValue placeholder="Shared Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    {filters.interests.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">View Curated Matches</Button>
                <p className="text-xs text-slate-500 text-center">
                  Our team will connect you with profiles that match your preferences within 48 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold">Success Stories & Celebrations</h2>
              <p className="text-slate-600">
                Families who found the right match share experiences, learnings, and advice for the next generation.
              </p>
            </div>
            <Button className="bg-[#f6c344] hover:bg-[#e3b030] text-black border border-black/10">
              Submit Story
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {matches.map((match) => (
              <Card key={match.id} className="bg-white border border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">{match.name}</CardTitle>
                  <CardDescription className="text-slate-500">{match.chapter}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-600">{match.story}</p>
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {match.milestone}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Parent & Elder Circles',
                description: 'Monthly forums guiding families on expectations, compatibility, and modern dynamics.',
              },
              {
                title: 'Community Mentors',
                description: 'Access chapter champions, alumni leaders, and diaspora advisors to support the journey.',
              },
              {
                title: 'Private Concierge',
                description: 'Dedicated relationship managers orchestrate introductions with complete privacy.',
              },
            ].map((item) => (
              <Card key={item.title} className="border border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-slate-600">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
          <h3 className="text-3xl font-bold">Begin Your KGF Matrimonial Journey</h3>
          <p className="text-lg text-red-100">
            Sign up for a personalized onboarding call with our matrimonial concierge to learn how we can support your
            family.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-white text-red-600 hover:bg-red-100 font-semibold px-6 py-3 rounded-lg">
              Schedule Call
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Matrimonial;

