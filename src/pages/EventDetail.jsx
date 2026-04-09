import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users as UsersIcon, ArrowLeft, ExternalLink, Share2, Tag } from 'lucide-react';
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

  const openInMaps = () => {
    if (event?.venue) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.venue)}`, '_blank');
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

  const isPast = event.type === 'past';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Events" />

      {/* Hero Banner */}
      <section className="pt-24 pb-0">
        {event.image ? (
          <div className="w-full h-64 md:h-96 relative">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="container mx-auto">
                <Badge className={isPast ? 'bg-muted text-muted-foreground' : 'bg-primary text-primary-foreground'}>
                  {isPast ? 'Completed' : 'Upcoming'}
                </Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-black uppercase mt-2 text-foreground drop-shadow-lg">
                  {event.title}
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-secondary pt-8 pb-10">
            <div className="container mx-auto px-4">
              <Badge className={isPast ? 'bg-muted text-muted-foreground' : 'bg-primary text-primary-foreground'}>
                {isPast ? 'Completed' : 'Upcoming'}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-heading font-black uppercase mt-2 text-secondary-foreground">
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

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* About This Event */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-heading font-bold mb-4">About This Event</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {event.description || 'No description available for this event.'}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event Details Card */}
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-bold mb-4">Event Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs uppercase tracking-wider text-primary font-semibold">Status</p>
                        <p className="font-medium">{isPast ? 'Completed' : 'Upcoming'}</p>
                      </div>
                    </div>

                    {event.category && (
                      <div className="flex items-start gap-3">
                        <Tag className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs uppercase tracking-wider text-primary font-semibold">Category</p>
                          <p className="font-medium">{event.category}</p>
                        </div>
                      </div>
                    )}

                    {event.date && (
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs uppercase tracking-wider text-primary font-semibold">Date</p>
                          <p className="font-medium">{event.date}</p>
                        </div>
                      </div>
                    )}

                    {event.time && (
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs uppercase tracking-wider text-primary font-semibold">Time</p>
                          <p className="font-medium">{event.time}</p>
                        </div>
                      </div>
                    )}

                    {event.venue && (
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs uppercase tracking-wider text-primary font-semibold">Venue</p>
                          <p className="font-medium">{event.venue}</p>
                          <button onClick={openInMaps} className="text-sm text-primary hover:underline mt-1">
                            View location on map
                          </button>
                        </div>
                      </div>
                    )}

                    {event.speakers && (
                      <div className="flex items-start gap-3">
                        <UsersIcon className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs uppercase tracking-wider text-primary font-semibold">Speakers</p>
                          <p className="font-medium">{event.speakers}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Access Card */}
              <Card className="border-border bg-secondary">
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-bold mb-2 text-secondary-foreground">Quick Access</h3>
                  <p className="text-sm text-secondary-foreground/70 mb-4">
                    Get directions and share the event with your community.
                  </p>
                  <div className="space-y-3">
                    {event.venue && (
                      <Button onClick={openInMaps} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold">
                        Open in Google Maps
                      </Button>
                    )}
                    <Button onClick={handleShare} variant="outline" className="w-full rounded-full font-semibold">
                      <Share2 className="w-4 h-4 mr-2" /> Share Event
                    </Button>
                    {!isPast && event.registrationLink && (
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold">
                        <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                          Register Now <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EventDetail;
