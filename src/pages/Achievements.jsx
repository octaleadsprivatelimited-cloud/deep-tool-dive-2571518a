import React, { useState, useEffect } from 'react';
import { Trophy, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import YouTubeSection from '@/components/YouTubeSection';
import PageMembersSection from '@/components/PageMembersSection';
import { getHallOfFame, getLeaders } from '@/lib/dataStore';

const Achievements = () => {
  const [hallOfFame, setHallOfFame] = useState([]);
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [hof, ld] = await Promise.all([getHallOfFame(), getLeaders()]);
        setHallOfFame(hof);
        setLeaders(ld);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Achievements" />

      <section className="pt-32 pb-10 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">
            Hall of <span className="text-primary">Fame</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-secondary-foreground/70 max-w-xl mx-auto">Celebrating excellence and inspiring the next generation.</p>
        </div>
      </section>

      {/* Leaders Gallery */}
      {!loading && leaders.length > 0 && (
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-heading font-bold">
                Our <span className="text-primary">Leaders</span>
              </h2>
              <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {leaders.map((l) => (
                <div key={l.id} className="group">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden border border-border bg-secondary">
                    {l.image ? (
                      <img src={l.image} alt={l.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary/30">{l.name?.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="font-heading font-bold text-xs sm:text-sm truncate">{l.name}</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      {l.yearFrom}{l.yearTo ? ` – ${l.yearTo}` : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hall of Fame Gallery */}
      {!loading && hallOfFame.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold">
                <Award className="inline-block w-8 h-8 text-primary mr-2 -mt-1" />
                Hall of <span className="text-primary">Fame</span>
              </h2>
              <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {hallOfFame.map((m) => (
                <div key={m.id} className="group cursor-pointer">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden border border-border bg-secondary relative">
                    {m.image ? (
                      <img src={m.image} alt={m.fullName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <Trophy className="w-12 h-12 text-primary/30" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      {m.achievement && (
                        <span className="text-xs text-primary font-semibold">{m.achievement}</span>
                      )}
                      {m.year && <span className="text-[10px] text-primary-foreground/60">{m.year}</span>}
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <h3 className="font-heading font-bold text-xs sm:text-sm truncate">{m.fullName}</h3>
                    {m.title && <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{m.title}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageMembersSection pageName="Achievements" title="Our Achievers" />
      <YouTubeSection pageName="Achievements" title="Achievement Stories" />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Achievements;
