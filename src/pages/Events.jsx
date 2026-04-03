import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const events = [
  { id: 1, title: 'RISE Annual Summit 2026', date: 'May 15-16, 2026', time: '9:00 AM - 6:00 PM', location: 'HICC, Hyderabad', type: 'upcoming', desc: 'The flagship annual gathering of RISE members from across the globe.' },
  { id: 2, title: 'Networking Night', date: 'Apr 20, 2026', time: '6:00 PM - 9:00 PM', location: 'Virtual (Zoom)', type: 'upcoming', desc: 'An evening of professional networking and idea exchange.' },
  { id: 3, title: 'Youth Leadership Workshop', date: 'Jun 8, 2026', time: '10:00 AM - 4:00 PM', location: 'Bangalore', type: 'upcoming', desc: 'Empowering the next generation of community leaders.' },
  { id: 4, title: 'Community Health Camp', date: 'Feb 10, 2026', time: '8:00 AM - 2:00 PM', location: 'Vijayawada', type: 'past', desc: 'Free health screenings and wellness sessions for the community.' },
];

const Events = () => {
  const upcoming = events.filter((e) => e.type === 'upcoming');
  const past = events.filter((e) => e.type === 'past');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Events" />

      <section className="pt-32 pb-10 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">
            Events & <span className="text-primary">Programs</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold uppercase mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {upcoming.map((e) => (
              <Card key={e.id} className="border-border hover:border-primary transition-all hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6">
                  <Badge className="bg-primary text-primary-foreground mb-4">Upcoming</Badge>
                  <h3 className="font-heading font-bold text-lg mb-2">{e.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{e.desc}</p>
                  <div className="space-y-1 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {e.date}</div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {e.time}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {e.location}</div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold">Register</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-heading font-bold uppercase mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map((e) => (
              <Card key={e.id} className="border-border opacity-75">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4">Past</Badge>
                  <h3 className="font-heading font-bold text-lg mb-2">{e.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{e.desc}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {e.date}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {e.location}</div>
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
};

export default Events;
