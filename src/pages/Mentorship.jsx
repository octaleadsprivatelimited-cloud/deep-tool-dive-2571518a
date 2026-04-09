import React from 'react';
import { Handshake, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import YouTubeSection from '@/components/YouTubeSection';
import PageMembersSection from '@/components/PageMembersSection';

const Mentorship = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header currentPage="Mentorship" />

    <section className="pt-32 pb-10 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">
          <span className="text-primary">Mentorship</span> Program
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        <p className="text-secondary-foreground/70 max-w-xl mx-auto">Learn from the best. Grow with purpose.</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8 text-center">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Request a Mentor</h3>
              <p className="text-muted-foreground text-sm mb-4">Looking for guidance? Submit your request and we'll match you.</p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 font-semibold">Apply Now</Button>
            </CardContent>
          </Card>
          <Card className="border-gold/20 bg-gold/5">
            <CardContent className="p-8 text-center">
              <Handshake className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Become a Mentor</h3>
              <p className="text-muted-foreground text-sm mb-4">Share your experience and help the next generation grow.</p>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-secondary rounded-full px-8 font-semibold">Sign Up</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <PageMembersSection pageName="Mentorship" title="Our Mentor" />
    <YouTubeSection pageName="Mentorship" title="Mentorship Stories" />

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Mentorship;
