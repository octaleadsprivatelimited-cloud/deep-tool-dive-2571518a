import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Briefcase, Building2, Mail, Phone, Calendar, Linkedin, Instagram, Facebook, ArrowLeft, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getMemberById } from '@/lib/dataStore';
import { format } from 'date-fns';

const MemberProfile = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getMemberById(id);
        if (!data || data.status !== 'approved') {
          setNotFound(true);
        } else {
          setMember(data);
        }
      } catch (err) {
        console.error(err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header currentPage="Directory" />
        <div className="pt-32 pb-20 text-center">
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header currentPage="Directory" />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Profile Not Found</h1>
          <p className="text-muted-foreground mb-6">This member profile does not exist or is not yet approved.</p>
          <Link to="/directory">
            <Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Directory</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const m = member;
  const fullName = m.fullName || `${m.surname || ''} ${m.name || ''}`.trim();
  const dob = m.dateOfBirth?.toDate ? m.dateOfBirth.toDate() : m.dateOfBirth ? new Date(m.dateOfBirth) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Directory" />

      <section className="pt-32 pb-10 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-black uppercase mb-2">
            Member <span className="text-primary">Profile</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>
      </section>

      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/directory" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Directory
          </Link>

          <Card className="border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Photo */}
                <div className="w-full md:w-64 shrink-0 bg-secondary flex items-center justify-center">
                  <div className="aspect-[3/4] w-full max-w-[250px] md:max-w-none overflow-hidden flex items-center justify-center">
                    {(m.image || m.photo) ? (
                      <img src={m.image || m.photo} alt={fullName} className="w-full h-full object-contain" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl font-heading font-bold text-primary bg-primary/10">
                        {fullName.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 p-5 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-1">{fullName}</h2>
                  
                  {m.profession && (
                    <div className="flex items-center gap-2 text-primary text-sm mb-1">
                      <Briefcase className="w-4 h-4 shrink-0" /> {m.profession}
                    </div>
                  )}

                  {m.company && (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <Building2 className="w-4 h-4 shrink-0" /> {m.company}
                    </div>
                  )}

                  {(m.workingPlace || m.location) && (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <MapPin className="w-4 h-4 shrink-0" /> {m.workingPlace || m.location}
                    </div>
                  )}

                  {m.nativePlace && (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <Globe className="w-4 h-4 shrink-0" /> Native: {m.nativePlace}
                    </div>
                  )}

                  <Separator className="my-4" />

                  {m.showContactPublicly && m.email && (
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <a href={`mailto:${m.email}`} className="hover:text-primary">{m.email}</a>
                    </div>
                  )}

                  {m.showContactPublicly && m.phone && (
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <a href={`tel:${m.phone}`} className="hover:text-primary">{m.phone}</a>
                    </div>
                  )}

                  {dob && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 shrink-0" /> {format(dob, 'dd MMM yyyy')}
                    </div>
                  )}

                  {/* Social Links */}
                  {(m.linkedin || m.instagram || m.facebook) && (
                    <>
                      <Separator className="my-4" />
                      <div className="flex items-center gap-3">
                        {m.linkedin && (
                          <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {m.instagram && (
                          <a href={m.instagram.startsWith('http') ? m.instagram : `https://instagram.com/${m.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Instagram className="w-5 h-5" />
                          </a>
                        )}
                        {m.facebook && (
                          <a href={m.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Facebook className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MemberProfile;
