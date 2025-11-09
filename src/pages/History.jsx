import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Compass, Globe, Landmark, ScrollText, Sparkles, Users } from 'lucide-react';

const eras = [
  {
    title: 'Roots & Agrarian Stewardship',
    period: 'Before 12th Century',
    summary:
      'Early Kamma clans nurtured irrigation, agrarian resilience, and self-governance across the fertile Krishna and Godavari deltas.',
    highlights: [
      'Community-led irrigation tanks and canals across the delta',
      'Village assemblies balancing agrarian, military, and cultural duties',
      'Stewardship of temples, fortifications, and trade corridors',
    ],
    icon: Landmark,
  },
  {
    title: 'Kakatiya Renaissance',
    period: '12th – 14th Century',
    summary:
      'Served as military commanders, administrators, and town-builders, reinforcing a legacy of valor and civic innovation under the Kakatiyas.',
    highlights: [
      'Administrative reforms championing decentralised governance',
      'Architectural marvels like stepwells, forts, and market hubs',
      'Women leadership exemplified by Rani Rudrama Devi',
    ],
    icon: Building2,
  },
  {
    title: 'Modern Awakening',
    period: '19th – mid 20th Century',
    summary:
      'Farmer federations, reformists, and freedom fighters mobilised around education, cooperative wealth, and social justice.',
    highlights: [
      'Establishment of Kamma Mahajana Sangham in 1921',
      'Founding of educational trusts and hostels for rural youth',
      'Participation in Independence Movement and rural upliftment',
    ],
    icon: ScrollText,
  },
  {
    title: 'Global Emergence',
    period: 'Late 20th Century – Present',
    summary:
      'A vibrant diaspora leading in entrepreneurship, politics, academia, and philanthropy—connecting chapters across continents.',
    highlights: [
      'IT corridors, media ventures, and large-scale infrastructure projects',
      'Global community networks in North America, Europe, GCC, and Oceania',
      'Philanthropic initiatives in health, education, and disaster relief',
    ],
    icon: Globe,
  },
];

const milestones = [
  {
    year: 1921,
    title: 'Kamma Mahajana Sangham Established',
    description:
      'Created to foster unity, education, and socio-economic progress—laying the foundation for organised community service.',
    category: 'Institution',
  },
  {
    year: 1930,
    title: 'Freedom Fighters Lead Reform',
    description:
      'Families like the Jetti lineage joined Gandhi’s movements, urging agrarian rights and social reform across coastal Andhra.',
    category: 'Freedom Movement',
  },
  {
    year: 1956,
    title: 'Educational Trusts Expand Access',
    description:
      'Hostels, scholarships, and professional colleges amplified higher education pipelines for rural students.',
    category: 'Education',
  },
  {
    year: 1983,
    title: 'N. T. Rama Rao Becomes Chief Minister',
    description:
      'Cinema icon turned statesman ignited Telugu pride, pioneering welfare schemes and reshaping Andhra politics.',
    category: 'Leadership',
  },
  {
    year: 1995,
    title: 'Digital Revolution Led by N. Chandrababu Naidu',
    description:
      'Hyderabad’s transformation into a global IT hub showcased the community’s vision for technology-led governance.',
    category: 'Innovation',
  },
  {
    year: 2024,
    title: 'Kamma Global Summit Announced',
    description:
      'A worldwide convocation uniting chapters, investors, and thought leaders to chart a collective roadmap for the future.',
    category: 'Global Summit',
  },
];

const changemakers = [
  {
    name: 'Sri Jetti Kusuma Kumar',
    role: 'Founder & President, Kamma Global Federation',
    impact:
      'Mobilised global chapters for the Kamma Global Summit 2024, advocating for socio-economic renaissance, political participation, and global solidarity.',
    focus: ['Leadership', 'Community Strategy', 'Global Chapters'],
  },
  {
    name: 'Rani Rudrama Devi',
    role: 'Warrior Queen, Kakatiya Dynasty',
    impact:
      'Iconic strategist who fortified the Deccan through inclusive governance, irrigation reforms, and a progressive military ethos.',
    focus: ['Governance', 'Military Strategy', 'Women Leadership'],
  },
  {
    name: 'N. Chandrababu Naidu',
    role: 'Statesman & Technocrat',
    impact:
      'Pioneered IT corridors, e-governance, and knowledge economy blueprints, inspiring a generation of technocrats and entrepreneurs.',
    focus: ['Technology', 'Governance', 'Economic Development'],
  },
];

const History = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPage="History" />

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute -left-44 top-12 h-72 w-72 rounded-full bg-[#b99b4c]/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <Badge className="mx-auto mb-6 border border-black/10 bg-black/5 text-black uppercase tracking-wide">
            Legacy & Heritage
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Journey of the Kamma Community
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            From agrarian stewards and empire-builders to global leaders in public life, technology, and philanthropy—the Kamma legacy spans centuries of
            courage, innovation, and community-first leadership.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Chronicles Across Eras</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Explore pivotal eras that shaped the community’s resolve—from defensive fortifications and agrarian glory to policy innovation and global
              expansion.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eras.map(({ title, period, summary, highlights, icon: Icon }) => (
              <Card key={title} className="border-slate-200 shadow-sm rounded-3xl">
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-3 text-sm uppercase tracking-wide text-slate-500">
                    <Icon className="h-5 w-5 text-[#b99b4c]" />
                    {period}
                  </div>
                  <CardTitle className="text-2xl">{title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <Sparkles className="h-4 w-4 text-[#b99b4c] mt-1" />
                      <p className="text-slate-700">{highlight}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Milestones & Movements</h2>
              <p className="text-slate-600">
                Key moments that inspired collective action—education drives, democratic leadership, and global summits for future-ready strategy.
              </p>
            </div>
            <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white font-semibold px-6 py-3 rounded-lg">
              Download Heritage Timeline
            </Button>
          </div>
          <div className="relative">
            <div className="absolute left-5 md:left-1/2 h-full w-px bg-slate-200 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <div key={milestone.title} className={`flex flex-col md:flex-row md:items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2">
                    <Card className="border-slate-200 shadow-sm rounded-2xl">
                      <CardHeader>
                        <Badge className="w-fit border border-[#b99b4c]/40 bg-[#b99b4c]/10 text-[#8a6f2c] uppercase tracking-wide">{milestone.category}</Badge>
                        <CardTitle className="text-2xl mt-4">{milestone.title}</CardTitle>
                        <CardDescription className="text-slate-600 leading-relaxed">{milestone.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className="flex flex-col items-center md:w-1/2 text-center md:text-left">
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#b99b4c] uppercase tracking-wide">
                      <Compass className="h-4 w-4" />
                      {milestone.year}
                    </div>
                    <p className="text-slate-500 mt-2 max-w-md">
                      Strategic alliances, grassroots movements, and visionary leadership shaped this period of transformation.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Voices of Leadership</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Stories of iconic leaders who exemplify service, innovation, and the relentless pursuit of community empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {changemakers.map(({ name, role, impact, focus }) => (
              <Card key={name} className="border-slate-200 shadow-sm rounded-3xl">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl">{name}</CardTitle>
                  <CardDescription className="text-slate-600">{role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">{impact}</p>
                  <div className="flex flex-wrap gap-2">
                    {focus.map((item) => (
                      <span key={item} className="text-xs px-3 py-1 rounded-full bg-black/5 text-slate-700 border border-black/10 uppercase tracking-wide">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Documenting Tomorrow&apos;s Legacy</h3>
              <p className="text-slate-600 leading-relaxed">
                Kamma Global Federation is compiling oral histories, archival footage, manuscripts, and digital exhibits in partnership with scholars,
                chapter historians, and cultural institutions worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <Users className="h-6 w-6 text-[#b99b4c] mb-3" />
                  <h4 className="text-lg font-semibold mb-1">Community Researchers</h4>
                  <p className="text-sm text-slate-600">
                    Volunteer historians collaborating with chapters to document local narratives and hero stories.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <ScrollText className="h-6 w-6 text-[#b99b4c] mb-3" />
                  <h4 className="text-lg font-semibold mb-1">Digital Archives</h4>
                  <p className="text-sm text-slate-600">
                    Centralised repositories preserving manuscripts, photographs, and summit proceedings with scholarly annotations.
                  </p>
                </div>
              </div>
            </div>
            <Card className="border-slate-200 shadow-sm rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl">Contribute a Memory</CardTitle>
                <CardDescription className="text-slate-600">
                  Submit photographs, letters, or oral history clips. Our heritage desk will help digitise, fact-check, and attribute content.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Every story reinforces the collective spirit—from village reformers to global entrepreneurs. We welcome contributions in English or Telugu.
                </p>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full">
                  Share Your Story
                </Button>
                <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white w-full">
                  Volunteer as a Curator
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;


