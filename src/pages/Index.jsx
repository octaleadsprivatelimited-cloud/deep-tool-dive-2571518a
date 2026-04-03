import React from 'react';
import { ArrowRight, Users, Handshake, Calendar, TrendingUp, Star, Award, Quote, ChevronRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const highlights = [
    { icon: Users, title: 'Networking', desc: 'Connect with professionals across industries and regions.' },
    { icon: Handshake, title: 'Mentorship', desc: 'Get guidance from experienced leaders and mentors.' },
    { icon: Calendar, title: 'Events', desc: 'Attend exclusive community events, summits, and workshops.' },
    { icon: TrendingUp, title: 'Growth', desc: 'Unlock career and business opportunities within the community.' },
  ];

  const featuredMembers = [
    { name: 'Dr. Ramesh Kumar', profession: 'Cardiologist', location: 'Hyderabad' },
    { name: 'Priya Reddy', profession: 'Software Architect', location: 'Bangalore' },
    { name: 'Venkat Naidu', profession: 'Entrepreneur', location: 'Dallas, USA' },
    { name: 'Lakshmi Devi', profession: 'Advocate', location: 'Vijayawada' },
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Home" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-secondary-foreground overflow-hidden pt-20">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-secondary/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Exploring the Excellence
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black uppercase leading-[0.95] mb-6">
              RISE<br />
              <span className="text-primary">Global</span><br />
              Directory
            </h1>
            <p className="text-base md:text-lg text-secondary-foreground/70 max-w-2xl mb-10 leading-relaxed">
              Royal Information System for Excellence — connecting Royal (Balija Kapu, Telaga, Munnuru & Turpu Kapu) community professionals for networking, mentorship, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 text-lg h-14">
                <a href="/register">
                  Join Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-secondary font-bold rounded-full px-8 text-lg h-14">
                <a href="/directory">
                  Explore Members <ChevronRight className="ml-1 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase mb-6">
              About <span className="text-primary">RISE</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              RISE is a premier platform dedicated to empowering Royal community professionals worldwide. We bridge generations, geographies, and industries — fostering collaboration, celebrating excellence, and creating opportunities for growth.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why RISE — Full-width immersive */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left: text content */}
          <div className="flex items-center justify-center p-10 md:p-16 lg:p-20 relative z-10">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-5xl font-heading font-black uppercase mb-3">
                Why <span className="text-primary">RISE</span>?
              </h2>
              <div className="w-16 h-1 bg-primary mb-8" />
              <p className="text-secondary-foreground/60 mb-10 leading-relaxed">
                A platform built for impact — connecting professionals, enabling mentorship, and accelerating collective growth.
              </p>
              <div className="space-y-6">
                {highlights.map((h) => (
                  <div key={h.title} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <h.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold uppercase text-sm mb-1">{h.title}</h3>
                      <p className="text-secondary-foreground/50 text-sm">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right: large visual block */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-primary" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center">
              <div className="text-center text-primary-foreground p-16">
                <div className="text-8xl font-heading font-black mb-4">4</div>
                <div className="text-2xl font-heading font-bold uppercase tracking-wide mb-2">Pillars of Strength</div>
                <div className="w-16 h-1 bg-gold mx-auto mb-6" />
                <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                  {highlights.map((h) => (
                    <div key={h.title} className="bg-primary-foreground/10 rounded-lg px-4 py-3 backdrop-blur">{h.title}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Members — Immersive overlap style */}
      <section className="relative bg-background overflow-hidden">
        <div className="bg-secondary h-48 md:h-64" />
        <div className="container mx-auto px-4 -mt-28 md:-mt-40 relative z-10 pb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-heading font-black uppercase text-secondary-foreground mb-3">
              Featured <span className="text-primary">Members</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {featuredMembers.map((m, i) => (
              <div
                key={m.name}
                className={`relative p-8 text-center border border-border transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-2xl ${
                  i % 2 === 0 ? 'bg-background' : 'bg-muted'
                }`}
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 border-4 border-primary/20 flex items-center justify-center mx-auto mb-4 text-2xl font-heading font-bold text-primary">
                  {m.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <h3 className="font-heading font-bold text-lg mb-1">{m.name}</h3>
                <p className="text-primary text-sm font-semibold">{m.profession}</p>
                <p className="text-muted-foreground text-xs mt-1">{m.location}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 font-bold h-12">
              <a href="/directory">View All Members <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events — Full-width magazine layout */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Left highlight */}
          <div className="lg:col-span-5 bg-primary text-primary-foreground p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-heading font-black uppercase mb-3">
              Upcoming<br />Events
            </h2>
            <div className="w-16 h-1 bg-gold mb-6" />
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Join us at our next events — summits, workshops, and networking nights designed to inspire and connect.
            </p>
            <Button asChild variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full px-8 font-bold w-fit">
              <a href="/events">View All Events</a>
            </Button>
          </div>
          {/* Right event list */}
          <div className="lg:col-span-7 flex flex-col">
            {upcomingEvents.map((e, i) => (
              <div
                key={e.title}
                className={`flex-1 p-8 md:p-10 flex items-center border-b border-secondary-foreground/10 last:border-b-0 hover:bg-secondary-foreground/5 transition-all group ${
                  i === 0 ? 'bg-secondary-foreground/5' : ''
                }`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex flex-col items-center justify-center shrink-0 mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Calendar className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg md:text-xl mb-1 group-hover:text-primary transition-colors">{e.title}</h3>
                  <p className="text-secondary-foreground/60 text-sm">{e.date} · {e.location}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-secondary-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-center mb-4">
            Hall of <span className="text-gold">Fame</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a) => (
              <div key={a.name} className="relative border border-gold/30 rounded-xl p-6 bg-gold/5 hover:bg-gold/10 transition-all">
                <Award className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">{a.name}</h3>
                <p className="text-secondary-foreground/70 text-sm">{a.achievement}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-secondary rounded-full px-8 font-bold">
              <a href="/achievements">View All Achievements</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase text-center mb-4">
            What Members <span className="text-primary">Say</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground/80 italic leading-relaxed mb-6">"{t.quote}"</p>
                  <div>
                    <p className="font-heading font-bold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black uppercase mb-6">
            Ready to Rise?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join thousands of community professionals. Network, grow, and make an impact together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-full px-10 text-lg h-14">
              <a href="/register">
                Join RISE Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold rounded-full px-10 text-lg h-14">
              <a href="/directory">Explore Members</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
