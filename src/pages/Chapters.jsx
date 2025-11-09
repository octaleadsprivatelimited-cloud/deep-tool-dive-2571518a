import React from 'react';
import { ArrowRight, MapPin, Users, Compass } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const stats = [
  { label: 'Total Chapters', value: '40+' },
  { label: 'Countries Covered', value: '10+' },
  { label: 'Continents Connected', value: '5' },
  { label: 'Community Members', value: '100k+' },
];

const chapters = [
  { name: 'Hyderabad', region: 'Telangana', country: 'India', continent: 'Asia' },
  { name: 'Vijayawada', region: 'Andhra Pradesh', country: 'India', continent: 'Asia' },
  { name: 'Chennai', region: 'Tamil Nadu', country: 'India', continent: 'Asia' },
  { name: 'Bangalore', region: 'Karnataka', country: 'India', continent: 'Asia' },
  { name: 'Mumbai', region: 'Maharashtra', country: 'India', continent: 'Asia' },
  { name: 'Delhi', region: 'Delhi', country: 'India', continent: 'Asia' },
  { name: 'Pune', region: 'Maharashtra', country: 'India', continent: 'Asia' },
  { name: 'Kolkata', region: 'West Bengal', country: 'India', continent: 'Asia' },
  { name: 'Dallas', region: 'Texas', country: 'United States', continent: 'North America' },
  { name: 'New York', region: 'New York', country: 'United States', continent: 'North America' },
  { name: 'San Francisco', region: 'California', country: 'United States', continent: 'North America' },
  { name: 'Chicago', region: 'Illinois', country: 'United States', continent: 'North America' },
  { name: 'Houston', region: 'Texas', country: 'United States', continent: 'North America' },
  { name: 'Los Angeles', region: 'California', country: 'United States', continent: 'North America' },
  { name: 'Seattle', region: 'Washington', country: 'United States', continent: 'North America' },
  { name: 'Boston', region: 'Massachusetts', country: 'United States', continent: 'North America' },
  { name: 'London', region: 'England', country: 'United Kingdom', continent: 'Europe' },
  { name: 'Manchester', region: 'England', country: 'United Kingdom', continent: 'Europe' },
  { name: 'Birmingham', region: 'England', country: 'United Kingdom', continent: 'Europe' },
  { name: 'Dubai', region: 'Dubai', country: 'United Arab Emirates', continent: 'Asia' },
  { name: 'Abu Dhabi', region: 'Abu Dhabi', country: 'United Arab Emirates', continent: 'Asia' },
  { name: 'Sharjah', region: 'Sharjah', country: 'United Arab Emirates', continent: 'Asia' },
  { name: 'Sydney', region: 'New South Wales', country: 'Australia', continent: 'Oceania' },
  { name: 'Melbourne', region: 'Victoria', country: 'Australia', continent: 'Oceania' },
  { name: 'Brisbane', region: 'Queensland', country: 'Australia', continent: 'Oceania' },
  { name: 'Perth', region: 'Western Australia', country: 'Australia', continent: 'Oceania' },
  { name: 'Toronto', region: 'Ontario', country: 'Canada', continent: 'North America' },
  { name: 'Vancouver', region: 'British Columbia', country: 'Canada', continent: 'North America' },
  { name: 'Calgary', region: 'Alberta', country: 'Canada', continent: 'North America' },
  { name: 'Singapore', region: 'Singapore', country: 'Singapore', continent: 'Asia' },
  { name: 'Kuala Lumpur', region: 'Selangor', country: 'Malaysia', continent: 'Asia' },
  { name: 'Penang', region: 'Penang', country: 'Malaysia', continent: 'Asia' },
  { name: 'Auckland', region: 'Auckland', country: 'New Zealand', continent: 'Oceania' },
  { name: 'Wellington', region: 'Wellington', country: 'New Zealand', continent: 'Oceania' },
  { name: 'Johannesburg', region: 'Gauteng', country: 'South Africa', continent: 'Africa' },
  { name: 'Cape Town', region: 'Western Cape', country: 'South Africa', continent: 'Africa' },
];

const countries = [
  { name: 'India', continent: 'Asia', description: 'Flagship chapters building community movements across the subcontinent.' },
  { name: 'United States', continent: 'North America', description: 'Thriving diaspora hubs collaborating on innovation and philanthropy.' },
  { name: 'United Kingdom', continent: 'Europe', description: 'Historic centers strengthening cultural exchange and leadership.' },
  { name: 'United Arab Emirates', continent: 'Asia', description: 'Strategic Middle East presence powering trade, tech, and social impact.' },
  { name: 'Australia', continent: 'Oceania', description: 'Future-focused chapters nurturing youth leadership and education.' },
  { name: 'Canada', continent: 'North America', description: 'Supportive networks connecting professionals and students across provinces.' },
  { name: 'Singapore', continent: 'Asia', description: 'Gateway to Southeast Asia fostering entrepreneurship and collaboration.' },
  { name: 'Malaysia', continent: 'Asia', description: 'Growing chapters preserving heritage while embracing modern enterprise.' },
  { name: 'New Zealand', continent: 'Oceania', description: 'Tight-knit communities promoting mentorship and community service.' },
  { name: 'South Africa', continent: 'Africa', description: 'Emerging chapters dedicated to grassroots empowerment and outreach.' },
];

const groupedChapters = countries.map((country) => ({
  ...country,
  chapters: chapters.filter((chapter) => chapter.country === country.name),
}));

const Chapters = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPage="Chapters" />

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute -right-48 -top-32 h-80 w-80 rounded-full bg-[#b99b4c]/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <Badge className="mx-auto mb-6 bg-black/5 text-black border border-black/10 uppercase tracking-wide">Global Network</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Connect with KGF Chapters Worldwide</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            The Kamma Global Federation links vibrant chapters across continents to celebrate heritage, accelerate opportunity, and extend community support wherever our people call home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/membership"
              className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-white font-semibold hover:bg-red-700 transition-all"
            >
              Become a Member
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="/contact" className="inline-flex items-center rounded-lg border border-black px-6 py-3 text-black font-semibold hover:bg-black hover:text-white transition-all">
              Start a Chapter
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white border border-slate-200 shadow-sm px-6 py-6 text-center">
                <div className="text-3xl font-bold text-[#b99b4c]">{stat.value}</div>
                <div className="text-sm uppercase tracking-wide text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Regional Communities</h2>
          <p className="text-lg text-slate-600">
            Explore chapters by country and connect with leaders who are championing mentorship, entrepreneurship, and service-led initiatives in their regions.
          </p>
        </div>
        <div className="container mx-auto px-4 mt-12 space-y-12">
          {groupedChapters.map(({ name, continent, description, chapters: list }) => (
            <div key={name} className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 px-6 py-6 md:px-10 md:py-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-slate-500 uppercase tracking-wide">
                    <Compass className="h-4 w-4 text-[#b99b4c]" />
                    {continent}
                  </div>
                  <h3 className="text-2xl font-semibold text-black">{name}</h3>
                  <p className="text-slate-600 max-w-2xl">{description}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Users className="h-4 w-4 text-[#b99b4c]" />
                    <span>{list.length} chapters</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <MapPin className="h-4 w-4 text-[#b99b4c]" />
                    <span>{continent}</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 py-6 md:px-10">
                {list.map((chapter) => (
                  <div
                    key={`${chapter.name}-${chapter.region}`}
                    className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-5 shadow-sm hover:border-[#b99b4c]/60 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-black">{chapter.name}</h4>
                      <Badge className="bg-[#b99b4c]/15 text-[#5a4a1f] border-[#b99b4c]/30 text-xs uppercase tracking-wide">
                        {chapter.continent}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{chapter.region}</p>
                    <p className="text-xs text-[#b99b4c] font-medium mt-2">{chapter.country}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Partner With Us to Launch New Chapters</h2>
          <p className="text-lg text-slate-600">
            Wherever there is passion for community impact, the Kamma Global Federation helps organize local chapters with governance, mentorship, and program playbooks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/contact" className="inline-flex items-center rounded-lg bg-[#b99b4c] px-6 py-3 text-white font-semibold hover:bg-[#a3893f] transition-all">
              Connect with Chapter Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="/resources" className="inline-flex items-center rounded-lg border border-black px-6 py-3 text-black font-semibold hover:bg-black hover:text-white transition-all">
              Download Chapter Toolkit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chapters;
