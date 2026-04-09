import React from 'react';
import { Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import YouTubeSection from '@/components/YouTubeSection';
import PageMembersSection from '@/components/PageMembersSection';

const Achievements = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header currentPage="Achievements" />

    <section className="pt-32 pb-10 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">
          Hall of <span className="text-gold">Fame</span>
        </h1>
        <div className="w-20 h-1 bg-gold mx-auto mb-6" />
        <p className="text-secondary-foreground/70 max-w-xl mx-auto">Celebrating excellence and inspiring the next generation.</p>
      </div>
    </section>

    <PageMembersSection pageName="Achievements" title="Our Achiever" />
    <YouTubeSection pageName="Achievements" title="Achievement Stories" />

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Achievements;
