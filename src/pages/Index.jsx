import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Handshake, Calendar, TrendingUp, Star, Award, Quote, ChevronRight, UserPlus, Heart, Mail, Play } from 'lucide-react';
import { getHighlightedMembers, getEvents, getVideosByPage } from '@/lib/dataStore';
import heroBg from '@/assets/hero-bg.jpg';
import riseLogo from '@/assets/rise-logo.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [featuredMembers, setFeaturedMembers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const highlighted = await getHighlightedMembers();
      if (highlighted.length > 0) {
        setFeaturedMembers(highlighted.map((m) => ({ name: m.fullName || m.name, profession: m.profession, location: m.location || m.workingPlace, image: m.image || m.photo })));
      } else {
        setFeaturedMembers([
          { name: 'Dr. Ramesh Kumar', profession: 'Cardiologist', location: 'Hyderabad' },
          { name: 'Priya Reddy', profession: 'Software Architect', location: 'Bangalore' },
          { name: 'Venkat Naidu', profession: 'Entrepreneur', location: 'Dallas, USA' },
          { name: 'Lakshmi Devi', profession: 'Advocate', location: 'Vijayawada' },
        ]);
      }
    };
    load();
  }, []);

  const highlights = [
    { icon: Users, title: 'Networking', desc: 'Connect with professionals across industries and regions.' },
    { icon: Handshake, title: 'Mentorship', desc: 'Get guidance from experienced leaders and mentors.' },
    { icon: Calendar, title: 'Events', desc: 'Attend exclusive community events, summits, and workshops.' },
    { icon: TrendingUp, title: 'Growth', desc: 'Unlock career and business opportunities within the community.' },
  ];

  const upcomingEvents = [
    { title: 'RISE Annual Summit 2026', date: 'May 15-16, 2026', location: 'Hyderabad' },
    { title: 'Networking Night', date: 'Apr 20, 2026', location: 'Virtual' },
    { title: 'Youth Leadership Workshop', date: 'Jun 8, 2026', location: 'Bangalore' },
  ];

  const achievements = [
    { name: 'Dr. Suresh Babu', achievement: 'Padma Shri for contributions to Medicine' },
    { name: 'Kavitha Naidu', achievement: 'Forbes 30 Under 30 — Tech Innovator' },
    { name: 'Rajendra Prasad', achievement: 'Built 100+ schools across rural India' },
  ];

  const testimonials = [
    { quote: 'RISE connected me with a mentor who changed my career trajectory. Truly life-changing.', name: 'Harini T.', role: 'Software Engineer, Hyderabad' },
    { quote: 'The community events are world-class. I found my co-founder at a RISE networking night.', name: 'Srinivas K.', role: 'Startup Founder, Mumbai' },
    { quote: 'Being part of RISE gave me a sense of belonging and purpose beyond my profession.', name: 'Anita P.', role: 'Teacher, London' },
  ];

  const actionItems = [
    { icon: UserPlus, label: 'Get', highlight: 'Membership', href: '/register' },
    { icon: Users, label: 'Become a', highlight: 'Volunteer', href: '/register' },
    { icon: Mail, label: 'Get Email', highlight: 'Updates', href: '/contact' },
    { icon: Heart, label: 'Make a', highlight: 'Donation', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Home" />

      {/* Hero Banner — Full width image with bottom-left text overlay */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 pb-16 md:pb-24">
          <div className="flex items-end justify-between gap-8">
          <div className="max-w-3xl flex-1">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black uppercase leading-tight mb-4 text-primary-foreground">
              RISE Global Directory
            </h1>
            <div className="w-24 h-1.5 bg-primary mb-6" />
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              Exploring the Excellence — Connecting Royal community professionals for networking, mentorship, and growth.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center flex-shrink-0">
            <img src={riseLogo} alt="RISE Global Directory" className="w-52 lg:w-72 xl:w-80 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-[float_3s_ease-in-out_infinite]" />
          </div>
          </div>
        </div>
      </section>

      {/* Mission / About — Centered heading + quote style */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            <span className="text-primary">RISE</span> Mission
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto my-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
            "Royal Information System for Excellence — a platform empowering Balija Kapu, Telaga, Munnuru & Turpu Kapu community professionals worldwide through unity, mentorship, and collective growth."
          </p>
        </div>
      </section>

      {/* Video / Image Thumbnails — 3 column grid like Jana Sena */}
      <section className="bg-background pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Community Summit 2025', 'Mentorship Program', 'Youth Leadership'].map((title) => (
              <div key={title} className="relative group cursor-pointer">
                <div className="aspect-video bg-secondary rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60" />
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </div>
                </div>
                <p className="text-center mt-3 font-medium text-sm text-foreground">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Strip — Horizontal bar with icons like Jana Sena */}
      <section className="bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {actionItems.map((item, i) => (
              <a
                key={item.highlight}
                href={item.href}
                className={`flex items-center gap-3 px-6 py-6 md:py-8 text-primary-foreground hover:bg-primary-foreground/10 transition-colors border-r border-primary-foreground/10 last:border-r-0 ${
                  i >= 2 ? 'border-t md:border-t-0 border-primary-foreground/10' : ''
                }`}
              >
                <item.icon className="w-8 h-8 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-primary-foreground/70">{item.label}</div>
                  <div className="font-heading font-bold text-sm md:text-base italic">{item.highlight}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why RISE — Clean centered section with icon cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block">
              <span className="text-6xl md:text-8xl font-heading font-black text-primary/10">4</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold -mt-6">
              <span className="text-primary">RISE</span> Pillars
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border rounded-xl overflow-hidden">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`p-8 text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group cursor-pointer ${
                  i < 3 ? 'border-r border-border' : ''
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <h.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold uppercase text-sm mb-2">{h.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/70 text-xs leading-relaxed transition-colors">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Members — Simple clean cards */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Featured <span className="text-primary">Members</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMembers.map((m) => (
              <div key={m.name} className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:border-primary border border-transparent transition-all duration-300 group">
                {/* Profile image area */}
                <div className="h-48 bg-secondary flex items-center justify-center">
                  {m.image ? (
                    <img src={m.image} alt={m.name} className="w-24 h-24 rounded-full object-cover border-4 border-primary/30 group-hover:border-primary transition-colors" />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-primary/30 flex items-center justify-center text-3xl font-heading font-bold text-primary group-hover:border-primary transition-colors">
                      {m.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading font-bold text-base mb-1">{m.name}</h3>
                  <p className="text-primary text-sm font-medium">{m.profession}</p>
                  <p className="text-muted-foreground text-xs mt-1">{m.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-8 font-bold h-12">
              <a href="/directory">View All Members <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events — Clean list with side accent */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left heading */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                Upcoming <span className="text-primary">Events</span>
              </h2>
              <div className="w-16 h-0.5 bg-primary mb-6" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Join us at summits, workshops, and networking nights designed to inspire and connect the community.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md px-6 font-semibold">
                <a href="/events">View All Events</a>
              </Button>
            </div>
            {/* Right event cards */}
            <div className="lg:col-span-2 space-y-4">
              {upcomingEvents.map((e) => (
                <div key={e.title} className="flex items-center gap-5 p-5 bg-muted rounded-lg border-l-4 border-primary hover:shadow-md transition-all group">
                  <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-base group-hover:text-primary transition-colors">{e.title}</h3>
                    <p className="text-muted-foreground text-sm">{e.date} · {e.location}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Hall of <span className="text-gold">Fame</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <div key={a.name} className="bg-secondary-foreground/5 border border-gold/20 rounded-lg p-6 hover:border-gold/60 transition-all">
                <Award className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{a.name}</h3>
                <p className="text-secondary-foreground/60 text-sm">{a.achievement}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-secondary rounded-md px-8 font-bold">
              <a href="/achievements">View All Achievements</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              What Members <span className="text-primary">Say</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-background rounded-lg p-6 border border-border hover:border-primary/30 transition-all">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-foreground/80 italic text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-heading font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — Full-width background like Jana Sena volunteer banner */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 text-center py-16">
            <p className="text-primary-foreground/70 text-lg mb-4 italic">
              "Every long journey begins with a single step."
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-black uppercase text-primary-foreground mb-8">
              Ready to Rise with us?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-md px-10 text-lg h-14">
                <a href="/register">
                  Join RISE Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary font-bold rounded-md px-10 text-lg h-14 bg-transparent">
                <a href="/directory">Explore Members</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
