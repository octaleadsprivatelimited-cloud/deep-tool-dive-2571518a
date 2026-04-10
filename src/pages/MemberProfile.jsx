import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Briefcase, Building2, Mail, Phone, Calendar, Linkedin, Instagram, Facebook, ArrowLeft, Globe, Share2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getMemberBySlug } from '@/lib/dataStore';
import { format } from 'date-fns';
import { toast } from 'sonner';

const MemberProfile = () => {
  const { slug } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getMemberBySlug(slug);
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
  }, [slug]);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: fullName, url });
    } else {
      navigator.clipboard.writeText(url);
      toast.success('Profile link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header currentPage="Directory" />
        <div className="pt-32 pb-20 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
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
        <div className="pt-32 pb-20 text-center px-4">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🔍</span>
          </div>
          <h1 className="text-2xl font-heading font-bold mb-2">Profile Not Found</h1>
          <p className="text-muted-foreground mb-6">This member profile does not exist or is not yet approved.</p>
          <Link to="/directory">
            <Button><ArrowLeft className="w-4 h-4 mr-2" /> Back to Directory</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const m = member;
  const fullName = m.fullName || `${m.surname || ''} ${m.name || ''}`.trim();
  const initials = fullName.split(' ').map((n) => n[0]).join('').slice(0, 2);
  const dob = m.dateOfBirth?.toDate ? m.dateOfBirth.toDate() : m.dateOfBirth ? new Date(m.dateOfBirth) : null;

  const socialLinks = [
    { icon: Linkedin, url: m.linkedin, label: 'LinkedIn' },
    { icon: Instagram, url: m.instagram ? (m.instagram.startsWith('http') ? m.instagram : `https://instagram.com/${m.instagram.replace('@', '')}`) : null, label: 'Instagram' },
    { icon: Facebook, url: m.facebook, label: 'Facebook' },
  ].filter(s => s.url);

  const infoItems = [
    { icon: Briefcase, value: m.profession, label: 'Profession' },
    { icon: Building2, value: m.company, label: 'Company' },
    { icon: MapPin, value: m.workingPlace || m.location, label: 'Location' },
    { icon: Globe, value: m.nativePlace, label: 'Native Place' },
    { icon: Calendar, value: dob ? format(dob, 'dd MMM yyyy') : null, label: 'Date of Birth' },
  ].filter(i => i.value);

  const contactItems = [
    { icon: Mail, value: m.email, href: `mailto:${m.email}`, label: 'Email' },
    { icon: Phone, value: m.phone, href: `tel:${m.phone}`, label: 'Phone' },
  ].filter(c => c.value && m.showContactPublicly);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Directory" />

      {/* Hero Banner */}
      <section className="relative pt-24 bg-secondary overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back link */}
          <Link to="/directory" className="inline-flex items-center gap-1.5 text-sm text-secondary-foreground/70 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Directory
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10 pb-10 md:pb-16">
            {/* Photo */}
            <div className="relative group">
              <div className="w-40 h-52 md:w-52 md:h-68 rounded-lg border-4 border-primary/30 overflow-hidden shadow-2xl shadow-primary/20 bg-secondary">
                {(m.image || m.photo) ? (
                  <img src={m.image || m.photo} alt={fullName} className="w-full h-full object-contain" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl font-heading font-bold text-primary bg-primary/10">
                    {initials}
                  </div>
                )}
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-lg">
                RISE Member
              </div>
            </div>

            {/* Name & Title */}
            <div className="text-center md:text-left pb-2">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-secondary-foreground leading-tight tracking-tight">
                {fullName}
              </h1>
              {m.profession && (
                <p className="text-lg md:text-xl text-primary font-semibold mt-2">{m.profession}</p>
              )}
              {(m.company || m.workingPlace || m.location) && (
                <p className="text-secondary-foreground/60 text-sm md:text-base mt-1">
                  {[m.company, m.workingPlace || m.location].filter(Boolean).join(' • ')}
                </p>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-5 justify-center md:justify-start">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground text-secondary-foreground rounded-lg text-sm font-medium transition-all duration-200">
                    <Icon className="w-4 h-4" /> {label}
                  </a>
                ))}
                <button onClick={handleShare}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-secondary-foreground rounded-lg text-sm font-medium transition-all duration-200">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-background" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      {/* Details Section */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Personal Info Card */}
            {infoItems.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-5 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full" />
                  Personal Details
                </h3>
                <div className="space-y-4">
                  {infoItems.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
                        <p className="font-semibold text-foreground">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Card */}
            {contactItems.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-5 flex items-center gap-2">
                  <div className="w-1 h-6 bg-accent rounded-full" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactItems.map(({ icon: Icon, value, href, label }) => (
                    <a key={label} href={href} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Social Links Card (if no contact, show full width) */}
            {socialLinks.length > 0 && (
              <div className={`bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${contactItems.length === 0 ? 'md:col-span-1' : ''}`}>
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-5 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full" />
                  Connect Online
                </h3>
                <div className="space-y-3">
                  {socialLinks.map(({ icon: Icon, url, label }) => (
                    <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="font-medium">{label}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Share CTA */}
          <div className="mt-10 text-center bg-secondary/50 rounded-xl p-6 md:p-8 border border-border">
            <p className="text-muted-foreground text-sm mb-3">Share this profile with others</p>
            <div className="flex items-center justify-center gap-2">
              <input readOnly value={window.location.href} className="bg-background border border-input rounded-lg px-4 py-2 text-sm w-full max-w-md text-muted-foreground" />
              <Button onClick={handleShare} size="sm" className="shrink-0">
                <Share2 className="w-4 h-4 mr-1" /> Copy
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MemberProfile;
