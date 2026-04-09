import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import YouTubeSection from '@/components/YouTubeSection';
import PageMembersSection from '@/components/PageMembersSection';
import { getMembers } from '@/lib/dataStore';

const Directory = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterProfession, setFilterProfession] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getMembers();
        // Only show approved members in directory
        setMembers(data.filter((m) => m.status === 'approved'));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const locations = [...new Set(members.map((m) => m.workingPlace || m.location).filter(Boolean))];
  const professions = [...new Set(members.map((m) => m.profession).filter(Boolean))];

  const filtered = members.filter((m) => {
    const name = m.fullName || m.name || '';
    const prof = m.profession || '';
    const loc = m.workingPlace || m.location || '';
    const matchSearch = name.toLowerCase().includes(search.toLowerCase()) || prof.toLowerCase().includes(search.toLowerCase());
    const matchLocation = !filterLocation || loc === filterLocation;
    const matchProfession = !filterProfession || prof === filterProfession;
    return matchSearch && matchLocation && matchProfession;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Directory" />

      <section className="pt-32 pb-10 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">
            Member <span className="text-primary">Directory</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-secondary-foreground/70 max-w-xl mx-auto">Find and connect with community professionals across the globe.</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-10 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search by name or profession..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <select className="border border-input rounded-md px-3 py-2 text-sm bg-background" value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
              <option value="">All Locations</option>
              {locations.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
            <select className="border border-input rounded-md px-3 py-2 text-sm bg-background" value={filterProfession} onChange={(e) => setFilterProfession(e.target.value)}>
              <option value="">All Professions</option>
              {professions.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground py-12">Loading members...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((m) => (
                <Card key={m.id} className="border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-0">
                    {(m.image || m.photo) ? (
                      <img src={m.image || m.photo} alt={m.fullName} className="w-full h-48 object-cover" />
                    ) : (
                      <div className="w-full h-48 bg-primary/10 flex items-center justify-center text-3xl font-heading font-bold text-primary">
                        {(m.fullName || m.name || '?').split(' ').map((n) => n[0]).join('').slice(0, 2)}
                      </div>
                    )}
                    <div className="p-4">
                    <h3 className="font-heading font-bold text-center text-lg mb-1">{m.fullName || m.name}</h3>
                    {m.profession && (
                      <div className="flex items-center justify-center gap-1 text-primary text-sm mb-1">
                        <Briefcase className="w-3 h-3" /> {m.profession}
                      </div>
                    )}
                    {(m.workingPlace || m.location) && (
                      <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mb-3">
                        <MapPin className="w-3 h-3" /> {m.workingPlace || m.location}
                      </div>
                    )}
                    {/* Social links */}
                    <div className="flex items-center justify-center gap-3">
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {m.instagram && (
                        <a href={m.instagram.startsWith('http') ? m.instagram : `https://instagram.com/${m.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                      {m.facebook && (
                        <a href={m.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                          <Facebook className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    {m.showContactPublicly && m.phone && (
                      <p className="text-center text-xs text-muted-foreground mt-2">{m.phone}</p>
                    )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {!loading && filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No members found matching your criteria.</p>
          )}
        </div>
      </section>

      <YouTubeSection pageName="Directory" title="Community Videos" />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Directory;
