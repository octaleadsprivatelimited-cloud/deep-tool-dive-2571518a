import React, { useState, useEffect } from 'react';
import { Trophy, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import YouTubeSection from '@/components/YouTubeSection';
import PageMembersSection from '@/components/PageMembersSection';
import { getHallOfFame } from '@/lib/dataStore';

const Achievements = () => {
  const [hallOfFame, setHallOfFame] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setHallOfFame(await getHallOfFame());
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

      {/* Hall of Fame Members */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {hallOfFame.map((m) => (
                <Card key={m.id} className="overflow-hidden border-border hover:shadow-xl transition-shadow group">
                  <div className="h-56 bg-secondary overflow-hidden">
                    {m.image ? (
                      <img src={m.image} alt={m.fullName} className="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy" />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <Trophy className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading font-bold text-lg">{m.fullName}</h3>
                    {m.title && <p className="text-sm text-muted-foreground">{m.title}</p>}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                        {m.achievement}
                      </span>
                      {m.year && <span className="text-xs text-muted-foreground">{m.year}</span>}
                    </div>
                    {m.description && (
                      <p className="text-sm text-muted-foreground mt-3 line-clamp-3">{m.description}</p>
                    )}
                  </CardContent>
                </Card>
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
