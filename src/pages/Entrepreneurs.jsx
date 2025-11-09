import React from 'react';
import { Rocket, Lightbulb, Users, BarChart3, Globe, ArrowRight, Target, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ventureTracks = [
  {
    title: 'Startup Studio',
    description: 'Rapid validation sprints, prototype labs, and pitch readiness in 90 days.',
    focus: 'Pre-seed & Seed',
    icon: <Lightbulb className="h-6 w-6 text-red-600" />,
  },
  {
    title: 'Scale Catalyst',
    description: 'Growth roadmaps, investor councils, and global expansion playbooks.',
    focus: 'Series A+',
    icon: <BarChart3 className="h-6 w-6 text-red-600" />,
  },
  {
    title: 'Heritage Ventures',
    description: 'Transforming family enterprises with digitization, governance, and new markets.',
    focus: 'Legacy Businesses',
    icon: <Users className="h-6 w-6 text-red-600" />,
  },
];

const featuredPrograms = [
  {
    title: 'KGF Founders Lab',
    description: 'Cohort-based mentorship blending diaspora experience with local execution.',
    highlights: ['Global mentor network', 'Customer discovery bootcamps', 'Investor demo day'],
  },
  {
    title: 'Diaspora Angels Syndicate',
    description: 'Member-led capital syndicates supporting high-impact startups across continents.',
    highlights: ['Cross-border capital', 'Sector specialization', 'Quarterly deal rooms'],
  },
  {
    title: 'Innovation Residencies',
    description: 'Immersive residencies in Hyderabad, Bay Area, and Singapore to co-build industry solutions.',
    highlights: ['Corporate partnerships', 'Product co-creation', 'Talent residencies'],
  },
];

const successSnapshots = [
  {
    name: 'Navika BioTech',
    sector: 'HealthTech',
    outcome: 'Raised $4.5M seed round with support from KGF Angels Asia.',
  },
  {
    name: 'AgriGrid',
    sector: 'AgriTech',
    outcome: 'Expanded to 1,200 villages through KGF heritage enterprise accelerator.',
  },
  {
    name: 'DiasporaDesk',
    sector: 'SaaS',
    outcome: 'Secured enterprise pilots in North America via KGF corporate council.',
  },
];

const Entrepreneurs = () => (
  <div className="min-h-screen bg-white text-black">
    <Header currentPage="Entrepreneurs" />

    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute -right-40 -top-32 h-80 w-80 rounded-full bg-[#f6c344]/25 blur-3xl" />
      <div className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-red-200/30 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        <Badge className="mx-auto mb-6 bg-red-50 text-red-700 border border-red-200 uppercase tracking-wide">
          Venture & Innovation
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">KGF Entrepreneurs Network</h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
          Fuel bold ideas with capital, mentorship, and market access. From founders to family business leaders, the KGF
          Entrepreneurs Network helps you build ventures that scale globally and uplift communities.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg">
            Join the Network
          </Button>
          <Button className="bg-[#f6c344] hover:bg-[#e3b030] text-black font-semibold px-6 py-3 rounded-lg border border-black/10">
            Apply for Mentor Match
          </Button>
        </div>
      </div>
    </section>

    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Active Founders', value: '1,200+' },
            { label: 'Mentors & Advisors', value: '320+' },
            { label: 'Capital Raised', value: '$180M+' },
            { label: 'Countries Represented', value: '22' },
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
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
              <Rocket className="h-7 w-7 text-red-600" />
              Curated Growth Tracks
            </h2>
            <p className="text-lg text-slate-600">
              Whether you are validating your first prototype or managing multi-generational enterprises, our growth
              tracks help you match the right talent, capital, and playbooks to accelerate impact.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {ventureTracks.map((track) => (
                <Card key={track.title} className="border border-slate-200 shadow-sm">
                  <CardHeader className="space-y-3">
                    <div className="inline-flex items-center justify-center rounded-full bg-red-50 p-3 w-fit">
                      {track.icon}
                    </div>
                    <CardTitle className="text-xl">{track.title}</CardTitle>
                    <Badge className="w-fit bg-black/5 text-black border border-black/10 uppercase tracking-wide">
                      {track.focus}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{track.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="border border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Capital & Market Concierge</CardTitle>
              <CardDescription className="text-slate-600">
                Personalized navigation across KGF investor cohorts, industry councils, and diaspora partners.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                'Investor readiness diagnostics',
                'Cross-border entity support',
                'Corporate innovation matches',
                'Government & policy liaisons',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-red-600 mt-1" />
                  <p className="text-slate-600">{item}</p>
                </div>
              ))}
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
                Book Strategy Session
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {featuredPrograms.map((program) => (
            <Card key={program.title} className="bg-white border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">{program.title}</CardTitle>
                <CardDescription className="text-slate-600">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  {program.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-red-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {successSnapshots.map((company) => (
            <Card key={company.name} className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">{company.name}</CardTitle>
                <CardDescription className="text-sm uppercase tracking-wide text-slate-500">
                  {company.sector}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{company.outcome}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-14 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center space-y-5">
        <h3 className="text-3xl font-bold">Scale With the KGF Entrepreneurs Network</h3>
        <p className="text-lg text-slate-200">
          Tell us about your venture, and we will map you to mentors, investors, and chapter councils that accelerate
          your next milestone.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="bg-white text-black hover:bg-slate-200 font-semibold px-6 py-3 rounded-lg">
            Submit Venture Brief
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg">
            Become a Mentor
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Entrepreneurs;

