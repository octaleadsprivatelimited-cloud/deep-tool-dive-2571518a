import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Users as UsersIcon, ArrowLeft, ExternalLink, Share2, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getEvents } from '@/lib/dataStore';
import { toast } from 'sonner';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getEvents();
        const found = data.find((e) => e.id === id);
        setEvent(found || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: event?.title, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      toast.success('Event link copied to clipboard!');
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header currentPage="Events" />
        <div className="pt-32 pb-20 text-center text-muted-foreground">Loading event...</div>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header currentPage="Events" />
        <div className="pt-32 pb-20 text-center">
          <p className="text-muted-foreground mb-4">Event not found.</p>
          <Button asChild variant="outline">
            <Link to="/events"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Events</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const statusLabel = event.type === 'completed' ? 'Completed' : event.type === 'ongoing' ? 'Ongoing' : event.type === 'cancelled' ? 'Cancelled' : 'Upcoming';
  const isActive = event.type === 'upcoming' || event.type === 'ongoing';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Events" />

      {/* Hero Banner */}
      <section className="pt-24 pb-0">
        {event.image ? (
          <div className="w-full relative overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-auto object-contain" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-background/80 backdrop-blur-sm">
              <div className="container mx-auto flex items-center gap-3">
                <Badge className={isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}>
                  {statusLabel}
                </Badge>
                <h1 className="text-xl md:text-3xl font-heading font-black uppercase text-foreground">
                  {event.title}
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-secondary pt-8 pb-6">
            <div className="container mx-auto px-4 flex items-center gap-3">
              <Badge className={isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}>
                {statusLabel}
              </Badge>
              <h1 className="text-xl md:text-3xl font-heading font-black uppercase text-secondary-foreground">
                {event.title}
              </h1>
            </div>
          </div>
        )}
      </section>

      {/* Back button */}
      <div className="container mx-auto px-4 pt-6">
        <Button asChild variant="ghost" size="sm">
          <Link to="/events"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Events</Link>
        </Button>
      </div>

      {/* Event Details + Quick Access - Horizontal */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Event Details Card */}
            <Card className="border-border">
              <CardContent className="p-4">
                <h3 className="text-base font-heading font-bold mb-3">Event Details</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-primary font-semibold">Status</p>
                      <p className="text-sm font-medium">{statusLabel}</p>
                    </div>
                  </div>

                  {event.category && (
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-primary font-semibold">Category</p>
                        <p className="text-sm font-medium">{event.category}</p>
                      </div>
                    </div>
                  )}

                  {event.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-primary font-semibold">Date</p>
                        <p className="text-sm font-medium">{event.date}</p>
                      </div>
                    </div>
                  )}

                  {event.time && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-primary font-semibold">Time</p>
                        <p className="text-sm font-medium">{event.time}</p>
                      </div>
                    </div>
                  )}


                  {event.speakers && (
                    <div className="flex items-center gap-2">
                      <UsersIcon className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-primary font-semibold">Speakers</p>
                        <p className="text-sm font-medium">{event.speakers}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Access Card */}
            <Card className="border-border bg-secondary">
              <CardContent className="p-4">
                <h3 className="text-base font-heading font-bold mb-1 text-secondary-foreground">Quick Access</h3>
                <p className="text-xs text-secondary-foreground/70 mb-3">
                  Share the event with others.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" onClick={handleShare} variant="outline" className="rounded-full font-semibold text-sm">
                    <Share2 className="w-3.5 h-3.5 mr-2" /> Share Event
                  </Button>
                  {isActive && event.registrationLink && (
                    <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold text-sm">
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        Register Now <ExternalLink className="w-3.5 h-3.5 ml-2" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About This Event */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <Card className="border-border">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-heading font-bold mb-4">About This Event</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {event.description || 'No description available for this event.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EventDetail;
