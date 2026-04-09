import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users as UsersIcon, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import YouTubeSection from '@/components/YouTubeSection';
import PageMembersSection from '@/components/PageMembersSection';
import { getEvents } from '@/lib/dataStore';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

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
          {loading ? (
            <div className="text-center text-muted-foreground py-12">Loading events...</div>
          ) : (
            <>
              <h2 className="text-2xl font-heading font-bold uppercase mb-8">Upcoming Events</h2>
              {upcoming.length === 0 ? (
                <p className="text-muted-foreground mb-16">No upcoming events at the moment. Check back soon!</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {upcoming.map((e) => (
                    <Link to={`/events/${e.id}`} key={e.id}>
                    <Card className="border-border hover:border-primary transition-all hover:shadow-lg hover:scale-[1.02] overflow-hidden cursor-pointer">
                      {e.image && (
                        <img src={e.image} alt={e.title} className="w-full h-40 object-cover" />
                      )}
                      <CardContent className="p-6">
                        <Badge className="bg-primary text-primary-foreground mb-4">Upcoming</Badge>
                        <h3 className="font-heading font-bold text-lg mb-2">{e.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{e.description}</p>
                        <div className="space-y-1 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {e.date}</div>
                          {e.time && <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {e.time}</div>}
                          {e.venue && <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {e.venue}</div>}
                          {e.speakers && <div className="flex items-center gap-2"><UsersIcon className="w-4 h-4 text-primary" /> {e.speakers}</div>}
                        </div>
                        {e.registrationLink ? (
                          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold">
                            <a href={e.registrationLink} target="_blank" rel="noopener noreferrer">
                              Register <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                        ) : (
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold">Register</Button>
                        )}
                      </CardContent>
                    </Card>
                    </Link>
                  ))}
                </div>
              )}

              <h2 className="text-2xl font-heading font-bold uppercase mb-8">Past Events</h2>
              {past.length === 0 ? (
                <p className="text-muted-foreground">No past events recorded yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {past.map((e) => (
                    <Link to={`/events/${e.id}`} key={e.id}>
                    <Card className="border-border opacity-75 overflow-hidden hover:opacity-100 transition-all cursor-pointer">
                      {e.image && (
                        <img src={e.image} alt={e.title} className="w-full h-40 object-cover grayscale" />
                      )}
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-4">Past</Badge>
                        <h3 className="font-heading font-bold text-lg mb-2">{e.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{e.description}</p>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {e.date}</div>
                          {e.venue && <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {e.venue}</div>}
                        </div>
                      </CardContent>
                    </Card>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <YouTubeSection pageName="Events" title="Event Videos" />
      <PageMembersSection pageName="Events" title="Event" />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Events;
