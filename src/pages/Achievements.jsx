import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const achievers = [
  { name: 'Dr. Suresh Babu', achievement: 'Padma Shri for contributions to Medicine', year: '2024' },
  { name: 'Kavitha Naidu', achievement: 'Forbes 30 Under 30 — Tech Innovator', year: '2023' },
  { name: 'Rajendra Prasad', achievement: 'Built 100+ schools across rural India', year: '2022' },
  { name: 'Dr. Lakshmi Rao', achievement: 'WHO Recognition for Public Health Work', year: '2023' },
  { name: 'Anil Kumar Reddy', achievement: 'National Entrepreneurship Award', year: '2024' },
  { name: 'Sravya Devi', achievement: 'Olympic Medal in Badminton', year: '2024' },
];

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

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievers.map((a) => (
            <Card key={a.name} className="border-gold/30 bg-gold/5 hover:border-gold hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <Trophy className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg">{a.name}</h3>
                    <p className="text-primary text-sm font-medium">{a.year}</p>
                    <p className="text-muted-foreground text-sm mt-1">{a.achievement}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

export default Achievements;
