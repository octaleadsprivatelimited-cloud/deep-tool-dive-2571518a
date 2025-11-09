import React from 'react';
import { Building2, MapPin, Phone, Globe, BadgeCheck, Users, Factory } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const companies = [
  {
    id: 1,
    name: 'Sri Venkateswara Foods',
    sector: 'Agri & Food Processing',
    location: 'Vijayawada, India',
    scale: 'Enterprise',
    contact: '+91 90555 17555',
    website: 'venkateswarafoods.com',
  },
  {
    id: 2,
    name: 'Diaspora Capital Advisors',
    sector: 'Financial Services',
    location: 'New Jersey, USA',
    scale: 'SMB',
    contact: '+1 (732) 555-0145',
    website: 'diasporacapital.com',
  },
  {
    id: 3,
    name: 'Kamma Tech Studios',
    sector: 'Technology & Media',
    location: 'Singapore',
    scale: 'Startup',
    contact: '+65 6123 4567',
    website: 'kgftechstudios.com',
  },
];

const filters = {
  sectors: [
    'All Sectors',
    'Technology',
    'Agriculture',
    'Healthcare',
    'Real Estate',
    'Education',
    'Hospitality',
    'Manufacturing',
  ],
  regions: ['All Regions', 'India', 'North America', 'Europe', 'Middle East', 'Asia Pacific', 'Africa'],
  scale: ['Any Scale', 'Startup', 'SMB', 'Enterprise'],
};

const BusinessDirectory = () => (
  <div className="min-h-screen bg-white text-black">
    <Header currentPage="Business Directory" />

    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute -right-48 -top-32 h-80 w-80 rounded-full bg-[#f6c344]/30 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/10 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        <Badge className="mx-auto mb-6 bg-black/5 text-black border border-black/10 uppercase tracking-wide">
          Trade & Partnerships
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">KGF Business Directory</h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
          Discover verified Kamma-owned and diaspora-led enterprises across the world. Source partners, suppliers, and
          service leaders advancing excellence with community-first values.
        </p>
        <div className="grid gap-3 md:grid-cols-[2fr,1fr,1fr,1fr] bg-white border border-slate-200 shadow-lg rounded-2xl p-4">
          <Input placeholder="Search companies, services, or keywords" className="border border-black/10" />
          <Select defaultValue="All Sectors">
            <SelectTrigger className="border border-black/10">
              <SelectValue placeholder="Sector" />
            </SelectTrigger>
            <SelectContent>
              {filters.sectors.map((sector) => (
                <SelectItem key={sector} value={sector}>
                  {sector}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="All Regions">
            <SelectTrigger className="border border-black/10">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              {filters.regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="Any Scale">
            <SelectTrigger className="border border-black/10">
              <SelectValue placeholder="Scale" />
            </SelectTrigger>
            <SelectContent>
              {filters.scale.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
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
            { label: 'Verified Listings', value: '2,450+' },
            { label: 'Industry Verticals', value: '48' },
            { label: 'Cross-border Deals', value: '380+' },
            { label: 'Procurement Leads', value: '5,200+' },
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
      <div className="container mx-auto px-4 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Building2 className="h-7 w-7 text-red-600" />
              Featured Enterprises
            </h2>
            <p className="text-slate-600">
              Spotlighting businesses that drive innovation, social impact, and global trade partnerships.
            </p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">List Your Business</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card key={company.id} className="border border-slate-200 shadow-sm">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{company.name}</CardTitle>
                  <Badge className="bg-[#f6c344] text-black border border-black/10">{company.scale}</Badge>
                </div>
                <CardDescription className="text-slate-500 text-sm uppercase tracking-wide">
                  {company.sector}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-600" />
                  {company.location}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-600" />
                  {company.contact}
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-red-600" />
                  {company.website}
                </div>
                <Button className="w-full bg-black text-white hover:bg-black/90 mt-4">Request Intro</Button>
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
              title: 'Supplier Collaboration Hub',
              description: 'Connect manufacturers, exporters, and service providers with procurement teams worldwide.',
              icon: <Factory className="h-6 w-6 text-red-600" />,
            },
            {
              title: 'Leadership Circles',
              description: 'Executive cohorts sharing governance, succession, and scale-up strategies across regions.',
              icon: <Users className="h-6 w-6 text-red-600" />,
            },
            {
              title: 'Verified Excellence Badge',
              description: 'KGF trust mark recognizing quality, compliance, and social responsibility standards.',
              icon: <BadgeCheck className="h-6 w-6 text-red-600" />,
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

    <section className="py-14 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center space-y-5">
        <h3 className="text-3xl font-bold">Amplify Your Business With the KGF Network</h3>
        <p className="text-lg text-slate-200">
          Share your growth plans and we will align you with partners, investors, and chapter councils ready to
          collaborate.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="bg-white text-black hover:bg-slate-200 font-semibold px-6 py-3 rounded-lg">
            Submit Company Profile
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg">
            Request Partnership Call
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default BusinessDirectory;

