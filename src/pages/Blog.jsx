import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const posts = [
  { id: 1, title: 'RISE Summit 2026: What to Expect', category: 'Events', date: 'Mar 28, 2026', excerpt: 'A preview of the upcoming annual summit — speakers, sessions, and networking opportunities.' },
  { id: 2, title: 'How Mentorship Changed My Career', category: 'Stories', date: 'Mar 15, 2026', excerpt: 'A personal account from a RISE mentee on finding guidance and growth.' },
  { id: 3, title: 'Building Bridges: Diaspora Networking', category: 'Community', date: 'Mar 5, 2026', excerpt: 'How RISE is connecting professionals across continents for collaboration.' },
  { id: 4, title: 'Youth Leadership in the Modern Age', category: 'Leadership', date: 'Feb 20, 2026', excerpt: 'Insights from our Youth Leadership Workshop on building tomorrow\'s leaders.' },
];

const Blog = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header currentPage="Blog" />

    <section className="pt-32 pb-10 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">
          News & <span className="text-primary">Blog</span>
        </h1>
        <div className="w-20 h-1 bg-primary mx-auto mb-6" />
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <Card key={p.id} className="border-border hover:border-primary transition-all hover:shadow-lg hover:scale-[1.01] cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-primary/10 text-primary border-none">{p.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.date}</span>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.excerpt}</p>
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

export default Blog;
