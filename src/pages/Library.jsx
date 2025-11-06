import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { BookOpen, Feather, Globe, Landmark, Award } from 'lucide-react';

const sections = [
  {
    title: 'History & Heritage',
    icon: Landmark,
    items: [
      {
        title: 'Origins and Historical Mentions of Kammas',
        summary: 'An overview of Kamma roots in Andhra-Telangana, agrarian leadership, and historic records across dynasties.',
        tags: ['history', 'origins', 'heritage']
      },
      {
        title: 'Rani Rudrama Devi and the Kakatiya Legacy',
        summary: 'The Kakatiya era’s administrative reforms, temple architecture, water tanks, and regional self-reliance.',
        tags: ['kakatiya', 'legacy', 'polity']
      },
    ],
  },
  {
    title: 'Notable Figures',
    icon: Award,
    items: [
      {
        title: 'N. T. Rama Rao (Sr. NTR): Cinema, Culture, and Public Life',
        summary: 'A concise look at Sr. NTR’s film legacy, Telugu cultural identity, and later public service.',
        tags: ['cinema', 'public-life']
      },
      {
        title: 'N. Chandrababu Naidu: Governance and Technology Initiatives',
        summary: 'Key governance themes: digital infrastructure, IT corridors, and institutional capacity building.',
        tags: ['governance', 'technology']
      },
    ],
  },
  {
    title: 'Culture & Community',
    icon: BookOpen,
    items: [
      {
        title: 'Festivals, Rituals, and Community Traditions',
        summary: 'Cultural practices, weddings, harvest festivals, and evolving community institutions.',
        tags: ['culture', 'tradition']
      },
      {
        title: 'Foodways and Regional Cuisine',
        summary: 'Staples, festive dishes, and how migration shaped culinary exchange across regions.',
        tags: ['cuisine', 'migration']
      },
    ],
  },
  {
    title: 'Entrepreneurship & Education',
    icon: Feather,
    items: [
      {
        title: 'Entrepreneurship Journeys: From Farms to Global Firms',
        summary: 'Stories of business formation, networks, philanthropy, and mentorship traditions.',
        tags: ['enterprise', 'philanthropy']
      },
      {
        title: 'Education, Scholarships, and Alumni Networks',
        summary: 'Scholarship culture, alumni groups, and how education drives mobility and service.',
        tags: ['education', 'scholarships']
      },
    ],
  },
  {
    title: 'Diaspora & Global Chapters',
    icon: Globe,
    items: [
      {
        title: 'The Global Kamma Diaspora',
        summary: 'Migration patterns, professional clusters, and chapter-led service initiatives worldwide.',
        tags: ['diaspora', 'chapters']
      },
      {
        title: 'Community Service & Cultural Exchange Abroad',
        summary: 'Festivals, health drives, student mentorship, and cross‑regional collaborations.',
        tags: ['service', 'culture']
      },
    ],
  },
];

const Library = () => {
  const profiles = [
    { name: 'N. T. Rama Rao (Sr. NTR)', gender: 'male', age: 72, country: 'India', achievements: ['Cinema', 'Public Service'], netWorth: 50, tags: ['cinema', 'public-life'] },
    { name: 'N. Chandrababu Naidu', gender: 'male', age: 74, country: 'India', achievements: ['Governance', 'Technology Initiatives'], netWorth: 70, tags: ['governance', 'technology'] },
    { name: 'Rani Rudrama Devi', gender: 'female', age: 40, country: 'India', achievements: ['Leadership', 'Administration'], netWorth: null, tags: ['kakatiya', 'legacy'] },
    { name: 'Entrepreneur A', gender: 'male', age: 55, country: 'USA', achievements: ['Entrepreneurship', 'Philanthropy'], netWorth: 120, tags: ['enterprise'] },
    { name: 'Scholar B', gender: 'female', age: 28, country: 'UK', achievements: ['Academia', 'Research'], netWorth: 1, tags: ['education'] },
  ];

  const [query, setQuery] = React.useState('');
  const [gender, setGender] = React.useState('any');
  const [country, setCountry] = React.useState('any');
  const [minAge, setMinAge] = React.useState('');
  const [maxAge, setMaxAge] = React.useState('');
  const [minNet, setMinNet] = React.useState('');
  const [achv, setAchv] = React.useState('');

  const countries = Array.from(new Set(profiles.map(p => p.country))).sort();

  const filtered = profiles.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchQuery = q ? (
      p.name.toLowerCase().includes(q) ||
      p.tags?.some(t => t.toLowerCase().includes(q)) ||
      p.achievements?.some(a => a.toLowerCase().includes(q))
    ) : true;

    const matchGender = gender === 'any' ? true : p.gender === gender;

    const minAgeNum = minAge === '' ? -Infinity : parseInt(minAge, 10);
    const maxAgeNum = maxAge === '' ? Infinity : parseInt(maxAge, 10);
    const matchAge = typeof p.age === 'number' ? (p.age >= minAgeNum && p.age <= maxAgeNum) : true;

    const matchCountry = country === 'any' ? true : p.country === country;

    const minNetNum = minNet === '' ? -Infinity : parseFloat(minNet);
    const pNet = (typeof p.netWorth === 'number') ? p.netWorth : -Infinity;
    const matchNet = pNet >= minNetNum;

    const ach = achv.trim().toLowerCase();
    const matchAch = ach ? p.achievements?.some(a => a.toLowerCase().includes(ach)) : true;

    return matchQuery && matchGender && matchAge && matchCountry && matchNet && matchAch;
  });
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Library" />

      <section className="py-16 md:py-12 bg-white text-black">
        <div className="container mx-auto px-4 text-center">
          <Badge className="inline-flex items-center justify-center border border-black/10 bg-black/5 text-black mb-4 px-3 py-1.5">
            Community Library
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kamma Community Library</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Curated, readable summaries about Kamma history, notable figures, culture, entrepreneurship, and the global diaspora.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-6 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 items-end">
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Search</label>
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search names, tags, achievements" className="border-black/20" />
            </div>
            <div>
              <label className="block text-sm mb-1">Gender</label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="border-black/20"><SelectValue placeholder="Any" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm mb-1">Country</label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger className="border-black/20"><SelectValue placeholder="Any" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm mb-1">Min Age</label>
                <Input inputMode="numeric" value={minAge} onChange={(e) => setMinAge(e.target.value)} placeholder="e.g. 18" className="border-black/20" />
              </div>
              <div>
                <label className="block text-sm mb-1">Max Age</label>
                <Input inputMode="numeric" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} placeholder="e.g. 80" className="border-black/20" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:col-span-2">
              <div>
                <label className="block text-sm mb-1">Achievement Contains</label>
                <Input value={achv} onChange={(e) => setAchv(e.target.value)} placeholder="e.g. cinema, research" className="border-black/20" />
              </div>
              <div>
                <label className="block text-sm mb-1">Min Net Worth (₹ crore)</label>
                <Input inputMode="numeric" value={minNet} onChange={(e) => setMinNet(e.target.value)} placeholder="e.g. 10" className="border-black/20" />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white" onClick={() => { setQuery(''); setGender('any'); setCountry('any'); setMinAge(''); setMaxAge(''); setMinNet(''); setAchv(''); }}>Clear</Button>
              <div className="text-sm text-slate-600 self-center">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-6 bg-white text-black">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Card key={p.name} className="border-black/10">
              <CardHeader>
                <CardTitle className="text-lg">{p.name}</CardTitle>
                <CardDescription className="text-slate-600">
                  {p.gender ? (p.gender.charAt(0).toUpperCase() + p.gender.slice(1)) : '—'} • {typeof p.age === 'number' ? p.age : '—'} • {p.country}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <div className="text-sm font-medium">Achievements</div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {p.achievements?.map(a => (
                      <span key={a} className="text-xs px-2 py-1 rounded bg-black/5 text-slate-700 border border-black/10">{a}</span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-slate-700">
                  Net Worth: {typeof p.netWorth === 'number' ? `₹ ${p.netWorth} crore` : 'N/A'}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags?.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-black/5 text-slate-700 border border-black/10">#{t}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 bg-white text-black">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((sec) => (
            <div key={sec.title} className="space-y-4">
              <div className="flex items-center gap-2">
                <sec.icon className="w-5 h-5" />
                <h2 className="text-2xl font-semibold">{sec.title}</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {sec.items.map((item) => (
                  <Card key={item.title} className="border-black/10">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="text-slate-600">
                        {item.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded bg-black/5 text-slate-700 border border-black/10">{t}</span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-white text-black">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-2">Want to contribute?</h3>
          <p className="text-slate-600 mb-4 max-w-2xl mx-auto">
            Share references, articles, and stories to expand this community knowledge base. We’ll add citations and structured summaries.
          </p>
          <a href="/contact" className="inline-block border border-black text-black hover:bg-black hover:text-white px-5 py-2 rounded">Submit Content</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Library;


