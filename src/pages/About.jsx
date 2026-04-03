import React from 'react';
import { Target, Eye, Users, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="About" />

      <section className="pt-32 pb-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">
            About <span className="text-primary">RISE</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Royal Information System for Excellence — empowering the Royal community through connection, mentorship, and opportunity.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/20 hover:border-primary transition-all">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-heading font-bold uppercase mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To build a global platform that connects Royal community professionals — fostering networking, mentorship, and collective growth across industries and borders.
                </p>
              </CardContent>
            </Card>
            <Card className="border-gold/20 hover:border-gold transition-all">
              <CardContent className="p-8">
                <Eye className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-heading font-bold uppercase mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A united, empowered community where every member has access to opportunities, guidance, and a network that accelerates their personal and professional journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, title: 'Unity', desc: 'Bringing our community together across the globe.' },
              { icon: Heart, title: 'Service', desc: 'Giving back and uplifting every member.' },
              { icon: Target, title: 'Excellence', desc: 'Striving for the highest standards in everything.' },
              { icon: Eye, title: 'Transparency', desc: 'Open, honest, and accountable governance.' },
            ].map((v) => (
              <div key={v.title} className="p-6">
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold uppercase mb-2">{v.title}</h3>
                <p className="text-secondary-foreground/60 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
