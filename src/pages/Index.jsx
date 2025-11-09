import React from 'react';
import { Shield, Lock, Eye, Users, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe, Zap, Target, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
 

const Index = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: 'white'}}>
      <Header currentPage="Home" />

      {/* Hero Section - Clean UI */}
      <section className="py-16 md:py-24 relative min-h-[70vh] flex items-center bg-white text-black overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-[#b99b4c]/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[520px] h-[520px] bg-black/5 blur-3xl rounded-full pointer-events-none" />
        <div className="container mx-auto text-center px-4 w-full max-w-5xl">
          <Badge className="inline-flex items-center justify-center border border-black/10 bg-black/5 text-black mb-6 px-4 py-2 rounded-full">
            <Shield className="w-4 h-4 mr-2" />
            Building a Strong Global Community
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
            Kamma Global Federation
          </h1>
          <div className="mx-auto mb-8 h-1 w-24 bg-[#b99b4c] rounded" />
          <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Kamma Global Federation stands as a beacon of unity and a catalyst for empowerment, beckoning all Kammas, Kammardukas, and Chowdary, irrespective of their geographical borders, to step into a shared space of cultural pride, professional excellence, entrepreneurship, and social responsibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-lg">
              <a href="/membership" className="flex items-center">
                Become a Member
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-[#f6c344] hover:bg-[#e3b030] text-black font-semibold px-8 py-4 rounded-lg text-lg border border-black/10"
            >
              <a href="/donate">Support Our Mission</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "50+", label: "Global Chapters" },
              { number: "100k+", label: "Members & Supporters" },
              { number: "200+", label: "Annual Events" },
              { number: "5,000+", label: "Scholarships Awarded" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-slate-800/60 rounded-2xl p-6 border border-slate-700 hover:border-[#b99b4c]/60 transition-all">
                <div className="text-3xl md:text-4xl font-extrabold text-[#b99b4c] mb-2 tracking-tight">{stat.number}</div>
                <div className="text-slate-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Kamma Achievements</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Celebrating our community’s impact across chapters: culture, education, entrepreneurship,
              health, and youth leadership around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-[#b99b4c]" size={48} />,
                title: "Cultural Preservation",
                description: "Festivals, heritage programs, and cultural nights across chapters.",
                features: ["200+ events annually", "Heritage workshops", "Community awards", "Global meet"]
              },
              {
                icon: <Users className="text-[#b99b4c]" size={48} />,
                title: "Scholarships & Education",
                description: "Supporting students with scholarships and mentorship.",
                features: ["5,000+ scholarships", "Mentor network", "Career guidance", "Alumni circles"]
              },
              {
                icon: <Target className="text-[#b99b4c]" size={48} />,
                title: "Entrepreneurship",
                description: "Incubation, networking, and founder mentorship across regions.",
                features: ["1,000+ mentees", "Pitch forums", "Investor connects", "Founder panels"]
              },
              {
                icon: <Globe className="text-[#b99b4c]" size={48} />,
                title: "Global Chapters",
                description: "Expanding our footprint to connect the diaspora worldwide.",
                features: ["50+ chapters", "Regional councils", "Local leadership", "Global coordination"]
              },
              {
                icon: <Zap className="text-[#b99b4c]" size={48} />,
                title: "Health & Wellness",
                description: "Community health drives, screenings, and wellness workshops.",
                features: ["100+ camps", "Specialist talks", "Wellness guides", "Local partnerships"]
              },
              {
                icon: <Award className="text-[#b99b4c]" size={48} />,
                title: "Youth Leadership",
                description: "Leadership workshops and volunteer opportunities for youth.",
                features: ["10k+ participants", "Chapter projects", "Mentor hours", "Recognition"]
              }
            ].map((service, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800 hover:border-cyan-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="text-[#b99b4c] mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Personalities */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Kamma Personalities</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Celebrating leaders who shaped our culture, service, and progress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rani Rudrama Devi',
                title: 'Kakatiya Ruler',
                description: 'A symbol of leadership and administrative reform; remembered for resilience and statecraft.',
              },
              {
                name: 'N. T. Rama Rao (Sr. NTR)',
                title: 'Actor & Public Leader',
                description: 'Icon of Telugu cinema who inspired cultural pride and later served the people in public life.',
              },
              {
                name: 'N. Chandrababu Naidu',
                title: 'Technocratic Statesman',
                description: 'Known for governance and technology initiatives that fostered growth and innovation.',
              },
            ].map((p) => (
              <Card key={p.name} className="bg-slate-800/60 backdrop-blur border-slate-700 hover:border-[#b99b4c] transition-all duration-300 hover:translate-y-[-2px]">
                <CardHeader className="space-y-2">
                  <div className="w-14 h-14 rounded-full bg-[#b99b4c]/20 border border-[#b99b4c]/40 flex items-center justify-center text-[#b99b4c] font-bold text-lg">
                    {p.name.split(' ').map(n=>n[0]).join('').slice(0,3)}
                  </div>
                  <CardTitle className="text-xl text-white">{p.name}</CardTitle>
                  <CardDescription className="text-[#b99b4c]">{p.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm leading-relaxed">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Highlights */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Achievements & Impact</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From culture to entrepreneurship, KGF celebrates excellence and service across generations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award className="text-[#b99b4c]" size={28} />, title: 'Scholarships', desc: '5,000+ scholarships for students and researchers.' },
              { icon: <Users className="text-[#b99b4c]" size={28} />, title: 'Mentorship', desc: 'Global mentor network for youth and founders.' },
              { icon: <Globe className="text-[#b99b4c]" size={28} />, title: 'Diaspora Chapters', desc: '50+ chapters enabling service worldwide.' },
              { icon: <Target className="text-[#b99b4c]" size={28} />, title: 'Entrepreneurship', desc: 'Pitch forums, investor connects, and incubation.' },
              { icon: <Zap className="text-[#b99b4c]" size={28} />, title: 'Health Drives', desc: 'Camps, screenings, and wellness programs.' },
              { icon: <Shield className="text-[#b99b4c]" size={28} />, title: 'Heritage', desc: 'Festivals and cultural preservation initiatives.' },
            ].map((a) => (
              <div key={a.title} className="rounded-2xl border border-black/10 p-6 hover:shadow-xl transition-all bg-white/80">
                <div className="w-12 h-12 rounded-xl bg-[#b99b4c]/15 border border-[#b99b4c]/30 flex items-center justify-center mb-3">
                  {a.icon}
                </div>
                <div className="font-semibold text-lg mb-1">{a.title}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Community Stories</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Voices from chapters and members making a difference.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'KGF mentorship helped me land my first role and give back as a mentor.', name: 'Harini T', role: 'Volunteer, Hyderabad' },
              { quote: 'Our chapter health camp served 1,000+ families this year.', name: 'Raj K', role: 'Member, Dallas' },
              { quote: 'Scholarship support and guidance changed my academic journey.', name: 'Anita P', role: 'Student, London' },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl p-6 border border-black/10 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="text-slate-800 italic leading-relaxed mb-4">“{t.quote}”</div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-slate-600">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Sponsors */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-slate-700">Partners & Sponsors</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
            {Array.from({length:6}).map((_,i) => (
              <div key={i} className="h-10 bg-black/5 rounded-md border border-black/10" />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Get updates from KGF</h3>
          <p className="text-slate-300 mb-6">News on chapters, scholarships, and events—straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Input type="email" placeholder="Enter your email" className="bg-white text-black border-none" />
            <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#b99b4c] to-[#a3893f]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Join KGF</h2>
          <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
            Become a member, support scholarships, and help build thriving Kamma communities across the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-lg">
              <a href="/membership" className="flex items-center">
                Become a Member
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg text-lg">
              <a href="/donate">Donate Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <Footer />
    </div>
  );
};

export default Index;
