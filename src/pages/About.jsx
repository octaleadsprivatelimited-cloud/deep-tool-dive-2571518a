import React from 'react';
import {
  Shield,
  Users,
  Award,
  Target,
  CheckCircle,
  ArrowRight,
  Globe,
  TrendingUp,
  Star,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const stats = [
    { number: '50+', label: 'Global Chapters' },
    { number: '100k+', label: 'Members & Supporters' },
    { number: '200+', label: 'Annual Events' },
    { number: '10+', label: 'Countries Active' },
  ];

  const movementPoints = [
    'Beacon of unity for Kammas, Kammardukas, and Chowdary communities across the globe.',
    'Platform for cultural pride, professional excellence, entrepreneurship, and service-oriented leadership.',
    'Legacy of empowerment powered by visionary leaders, volunteers, and partners worldwide.',
  ];

  const visionMissionCards = [
    {
      title: 'Our Vision',
      description: 'To make the community vibrant, dynamic, and competitive at various levels across the globe.',
      icon: Target,
    },
    {
      title: 'Our Mission',
      description: 'Elevating the needy by promoting self-reliance and empowering the less fortunate towards sustainable independence.',
      icon: Award,
    },
  ];

  const valuePillars = [
    {
      title: 'Unity',
      description: 'We strengthen bonds across global Kamma communities and celebrate shared heritage.',
      icon: Shield,
    },
    {
      title: 'Service',
      description: 'We promote philanthropy, mentorship, and chapter-led community service.',
      icon: Users,
    },
    {
      title: 'Excellence',
      description: 'We deliver programs with rigor and inspire high performance in every endeavor.',
      icon: Award,
    },
    {
      title: 'Progress',
      description: 'We empower youth, professionals, and entrepreneurs with resources and opportunities.',
      icon: TrendingUp,
    },
  ];

  const distribution = [
    { state: 'Tamil Nadu', population: '65L', description: 'Largest Kamma population in India' },
    { state: 'Karnataka', population: '40L', description: 'Strong presence in Bengaluru and surrounding regions' },
    { state: 'Andhra Pradesh', population: '36.5L', description: 'Significant community across coastal and Rayalaseema regions' },
    { state: 'Telangana', population: '22L', description: 'Growing presence in Hyderabad and emerging districts' },
  ];

  const evolutionSections = [
    {
      title: 'Kamma Community History',
      tag: 'Heritage',
      icon: Users,
      summary:
        'Everyone in our community—especially the younger generation—should understand our heritage, history, and ethos. Here is a concise retelling of our journey.',
      paragraphs: [
        'The name “Kamma” in the Krishna valley traces back to the Theravada Buddhist concept of Kamma or “Karma,” influenced by the region’s ancient identity known as Kammanadu. Historically linked to the Aryan Varidir clan Kamboja, Kammas have maintained a strong presence in Southern India for centuries.',
        'During the Kakatiya reign, Kammas rose to prominence and later empowered the Vijayanagar kingdom, influencing substantial parts of the subcontinent. Even after the decline of major kingdoms, Kammas embraced education, pioneered schools and libraries, and led modern agricultural practices.',
        'Known for perseverance and enterprise, Kammas diversified into trade, medicine, arts, engineering, and technology. Many of the most efficient educational institutions in Southern India are driven by our community’s vision.',
        'Also known as Kamma Naidus or Kammavar Naidus in Tamil Nadu and Choudharys in coastal Andhra Pradesh, the community expanded globally in the late 1900s—particularly to the United States, Canada, the United Kingdom, Europe, Australia, and the GCC nations.',
      ],
    },
    {
      title: 'Kamma Mahajana Sangham (1910)',
      tag: 'Collective Action',
      icon: Award,
      summary:
        'The earliest recorded community congregation was the Kamma Mahajana Sangham, convened in 1910 at Kautavararam in Krishna district.',
      paragraphs: [
        'Formed with a noble objective, the Sangham united community leaders to promote education, trade, and welfare initiatives. It marks a pivotal milestone that demonstrated a shared responsibility to uplift every member of the community and champion holistic development.',
      ],
    },
    {
      title: 'Community Achievements & Characteristics',
      tag: 'Identity',
      icon: TrendingUp,
      summary:
        'Though comprising a small percentage of the population, Kammas wield influence across corporate, political, and social spheres—thanks to a relentless focus on education and enterprise.',
      paragraphs: [
        'Research on the community highlights our enduring stewardship of agrarian resources—land, water, and irrigation—fueling socio-economic progress. Historically village-centric and resourceful, Kammas reinforced rural economies while investing in cultural and educational institutions.',
        'The Green Revolution and government focus on agriculture amplified the community’s innovations in farming techniques. Our progressive, risk-taking mindset opened pathways into commerce, transportation, publishing, media, construction, engineering, pharma, healthcare, technology, politics, and more.',
      ],
    },
    {
      title: 'Modern Era & Information Technology',
      tag: 'Innovation',
      icon: Zap,
      summary:
        'Economic reforms of the 1990s and the global IT boom opened new frontiers. Because education was always a priority, Kamma families seized these opportunities early.',
      paragraphs: [
        'Students pursued engineering and medicine in large numbers, and private colleges created further avenues. Kammas embraced information technology roles in India and overseas—especially in the United States. The diaspora now supports families back home with guidance, scholarships, and employment pathways.',
      ],
    },
  ];

  const highlightCards = [
    {
      title: '5% Population, outsized impact',
      description: 'Kammas’ influence spans governance, enterprise, philanthropy, and education despite a modest population footprint.',
      icon: Target,
    },
    {
      title: 'Diverse Excellence',
      description: 'From agriculture to artificial intelligence, Kammas lead and innovate across industries and continents.',
      icon: Award,
    },
    {
      title: 'Global Presence',
      description: 'A vibrant diaspora thrives in the US, Canada, the UK, Australia, GCC, and beyond—supporting chapters back home.',
      icon: Globe,
    },
  ];

  const leaderCards = [
    {
      name: 'Rani Rudrama Devi',
      years: '(1245–1289)',
      subtitle: 'Queen of the Kakatiya Dynasty',
      initials: 'RRD',
      summary:
        'A trailblazing monarch whose reign symbolised resilience, administrative brilliance, and unwavering duty to her people.',
      details: [
        'Led the Kakatiya kingdom—deeply connected with Kamma heritage—between 1263 and 1289 CE.',
        'Celebrated for strategic warfare, social welfare, and safeguarding the dynasty’s independence.',
      ],
    },
    {
      name: 'Sri Raja Vasireddy Venkatadri Naidu',
      years: '(1783–1817)',
      subtitle: 'Zamindar of Amaravathi, Palnadu',
      initials: 'VVN',
      summary:
        'A visionary landholder who governed 552 villages across Guntur and Krishna districts under the British East India Company.',
      details: [
        'Revered devotee of Lord Shiva and a patron of temples, education, and agrarian reforms.',
        'Guided the transformation of Chinthapally into modern-day Amaravathi while nurturing community welfare.',
      ],
    },
  ];

  const founderBadges = [
    'Freedom Fighter Legacy',
    'Business Leader',
    'Community Visionary',
    'Kamma Global Summit 2024',
  ];

  const summitHighlights = [
    'First-of-its-kind platform to unite community visionaries, entrepreneurs, and chapter leaders worldwide.',
    'Spotlights cultural heritage, leadership forums, youth incubation, and philanthropic partnerships.',
    'Inspired by Sri Jetti Kusuma Kumar’s clarion call to blueprint the community’s future success.',
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPage="About" />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-24 bg-white">
        <div className="absolute -right-32 -top-10 h-72 w-72 rounded-full bg-[#b99b4c]/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-black/5 blur-3xl" />
        <div className="container mx-auto px-4 text-center relative z-10 max-w-5xl">
          <Badge className="mx-auto mb-6 bg-black/5 text-black border border-black/10">Our Movement</Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            About Kamma Global Federation
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
            Kamma Global Federation is a catalyst for empowerment—inviting Kammas, Kammardukas, and Chowdary across continents to share a space of cultural pride, professional excellence, entrepreneurship, and social responsibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-lg">
              <a href="/membership" className="flex items-center">
                Become a Member
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-[#f6c344] hover:bg-[#e3b030] text-black font-semibold px-8 py-4 rounded-lg text-lg border border-black/10"
            >
              <a href="/chapters" className="flex items-center">
                Explore Chapters
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white border border-slate-200 shadow-sm text-center py-6">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-3xl font-bold text-[#b99b4c]">{stat.number}</CardTitle>
                  <CardDescription className="text-slate-600 text-sm md:text-base">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Movement Narrative */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr] items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">A Movement, Not Just an Organization</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                KGF harnesses collective potential to build a brighter future for the community. We invite every voice, mentor, investor, and volunteer to amplify the legacy of unity, empowerment, and generational progress that stretches well beyond borders.
              </p>
              <div className="space-y-3">
                {movementPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 mt-0.5 text-[#b99b4c]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-[#b99b4c]/40 bg-[#b99b4c]/10 p-6">
                <h3 className="text-xl font-semibold text-[#5a4a1f] mb-2">Why we exist</h3>
                <p className="text-slate-600">
                  The Kamma Global Federation (KGF) was initiated to recognise the evolving aspirations of our community and to provide holistic support for present and future generations—through education, entrepreneurship, cultural preservation, and service.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {visionMissionCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Card key={index} className="bg-white border border-slate-200 shadow-sm">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center gap-3 text-[#b99b4c]">
                        <Icon className="h-6 w-6" />
                        <span className="uppercase tracking-wide text-xs font-semibold">Strategic Pillar</span>
                      </div>
                      <CardTitle className="text-2xl text-black">{card.title}</CardTitle>
                      <CardDescription className="text-slate-600 text-base leading-relaxed">
                        {card.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
              <Card className="bg-white border border-slate-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-black mb-4">Our Values</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {valuePillars.map((pillar, index) => {
                    const Icon = pillar.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <Icon className="h-5 w-5 mt-0.5 text-[#b99b4c]" />
                        <div>
                          <h4 className="font-semibold text-black">{pillar.title}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Narrative */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">About KGF</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                KGF is a global, non-profit federation that enables collaboration between chapters, entrepreneurs, educators, philanthropists, and youth leaders. We champion mentorship, sustainable development, and community-first innovation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Together, we are building a legacy of unity and progress that transcends geography—creating pathways for learning, pride, and shared prosperity for generations to come.
              </p>
            </div>
            <Card className="bg-white border border-slate-200 shadow-sm">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl text-black">What Drives Us</CardTitle>
                <CardDescription className="text-slate-600">
                  A snapshot of how KGF makes impact tangible across chapters.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                      <span className="text-slate-600">{stat.label}</span>
                      <span className="text-xl font-semibold text-[#b99b4c]">{stat.number}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Geographic Distribution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Geographic Distribution</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The Kamma community has a strong presence in Southern India and a flourishing diaspora worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {distribution.map((region, index) => (
              <Card key={index} className="bg-white border border-slate-200 shadow-sm text-center p-6">
                <CardHeader className="space-y-3">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#b99b4c]/15 text-[#b99b4c]">
                    <Globe className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl text-black">{region.state}</CardTitle>
                  <div className="text-3xl font-bold text-[#b99b4c]">{region.population}</div>
                  <CardDescription className="text-slate-600">{region.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <div className="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-center shadow-sm">
              <span className="text-sm uppercase tracking-wide text-slate-500">Total community base</span>
              <div className="text-2xl font-semibold text-[#b99b4c]">163.5L+</div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution & Progress */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Evolution & Progress of the Kamma Community</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              A glimpse into our heritage, collective achievements, and modern transformation.
            </p>
          </div>
          <div className="space-y-8">
            {evolutionSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="bg-white border border-slate-200 shadow-sm">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b99b4c]/15 text-[#b99b4c]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge className="bg-black/5 text-black border border-black/10 text-xs uppercase tracking-wide">
                        {section.tag}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-black">{section.title}</CardTitle>
                    <CardDescription className="text-slate-600">
                      {section.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                    {section.paragraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card key={index} className="bg-white border border-slate-200 shadow-sm text-center p-6">
                  <CardHeader className="space-y-4">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#b99b4c]/15 text-[#b99b4c]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-black">{card.title}</CardTitle>
                    <CardDescription className="text-slate-600 text-sm leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notable Leaders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Notable Leaders</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Leaders from the Kamma community whose courage and stewardship continue to inspire generations.
            </p>
          </div>
          <div className="space-y-8 max-w-5xl mx-auto">
            {leaderCards.map((leader, index) => (
              <Card key={index} className="bg-white border border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-black">
                        {leader.name} <span className="text-slate-500">{leader.years}</span>
                      </CardTitle>
                      <CardDescription className="text-[#b99b4c] text-base font-semibold">
                        {leader.subtitle}
                      </CardDescription>
                    </div>
                    <div className="mx-auto md:mx-0 flex h-20 w-20 items-center justify-center rounded-full bg-[#b99b4c]/15 text-[#b99b4c] text-2xl font-semibold">
                      {leader.initials}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 text-slate-600 leading-relaxed">
                  <p>{leader.summary}</p>
                  <div className="space-y-3">
                    {leader.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-0.5 text-[#b99b4c]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Highlight */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr] items-start">
            <Card className="bg-white border border-slate-200 shadow-sm">
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#b99b4c]/15 text-[#b99b4c] text-4xl font-bold">
                  JK
                </div>
                <CardTitle className="text-3xl text-black">Sri Jetti Kusuma Kumar</CardTitle>
                <CardDescription className="text-[#b99b4c] text-lg font-semibold">
                  Founder & President – Kamma Global Federation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Sri Jetti Kusuma Kumar descends from a revered lineage of freedom fighters dedicated to justice and self-governance. His father, Sri Jetti Nageswara Rao, endured imprisonment during the Quit India Movement, while his maternal grandfather, Sakunthl Anjalah, was jailed during the Salt Satyagraha.
                </p>
                <p>
                  A multifaceted entrepreneur spanning media, construction, real estate, and more, Sri Kusuma Kumar is also an active leader within the Indian National Congress Party. His vision energises the federation’s mission and the upcoming Kamma Global Summit 2024.
                </p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200">
                  {founderBadges.map((badge, index) => (
                    <Badge key={index} className="bg-[#b99b4c]/15 text-[#5a4a1f] border-[#b99b4c]/30">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#b99b4c]/10 border border-[#b99b4c]/30 shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3 text-[#5a4a1f]">
                  <Award className="h-6 w-6" />
                  <span className="uppercase tracking-wide text-xs font-semibold">Summit Highlight</span>
                </div>
                <CardTitle className="text-2xl text-[#403615] mt-2">
                  Kamma Global Summit 2024
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-[#403615]">
                {summitHighlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="h-5 w-5 mt-0.5 text-[#a3893f]" />
                    <span>{item}</span>
                  </div>
                ))}
                <div className="pt-4">
                  <Button className="bg-[#5a4a1f] hover:bg-[#403615] text-white">
                    <a href="/events" className="flex items-center">
                      View Summit Updates
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Join the Movement</h2>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            Support culture, education, entrepreneurship, and community service through KGF chapters worldwide. Collaborate with us to grow opportunities for the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0f172a] hover:bg-slate-100 font-semibold px-8 py-4 rounded-lg text-lg">
              <a href="/donate" className="flex items-center">
                Support Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg">
              <a href="/contact" className="flex items-center">
                Connect with Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
