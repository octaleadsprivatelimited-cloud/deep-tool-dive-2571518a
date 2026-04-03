import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const sampleMembers = [
  { id: 1, name: 'Dr. Ramesh Kumar', profession: 'Cardiologist', location: 'Hyderabad', category: 'Healthcare' },
  { id: 2, name: 'Priya Reddy', profession: 'Software Architect', location: 'Bangalore', category: 'Technology' },
  { id: 3, name: 'Venkat Naidu', profession: 'Entrepreneur', location: 'Dallas, USA', category: 'Business' },
  { id: 4, name: 'Lakshmi Devi', profession: 'Advocate', location: 'Vijayawada', category: 'Legal' },
  { id: 5, name: 'Suresh Babu', profession: 'Civil Engineer', location: 'Chennai', category: 'Engineering' },
  { id: 6, name: 'Anitha Kumari', profession: 'Teacher', location: 'London, UK', category: 'Education' },
];

const Directory = () => {
  const [search, setSearch] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const locations = [...new Set(sampleMembers.map((m) => m.location))];
  const categories = [...new Set(sampleMembers.map((m) => m.category))];

  const filtered = sampleMembers.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.profession.toLowerCase().includes(search.toLowerCase());
    const matchLocation = !filterLocation || m.location === filterLocation;
    const matchCategory = !filterCategory || m.category === filterCategory;
    return matchSearch && matchLocation && matchCategory;
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
          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search by name or profession..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <select className="border border-input rounded-md px-3 py-2 text-sm bg-background" value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)}>
              <option value="">All Locations</option>
              {locations.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
            <select className="border border-input rounded-md px-3 py-2 text-sm bg-background" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
              <option value="">All Categories</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Member Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((m) => (
              <Card key={m.id} className="border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-xl font-heading font-bold text-primary">
                    {m.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                  <h3 className="font-heading font-bold text-center text-lg mb-1">{m.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-primary text-sm mb-1">
                    <Briefcase className="w-3 h-3" /> {m.profession}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-3 h-3" /> {m.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No members found matching your criteria.</p>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Directory;
