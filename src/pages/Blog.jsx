import React, { useState, useEffect } from 'react';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import YouTubeSection from '@/components/YouTubeSection';
import PageMembersSection from '@/components/PageMembersSection';
import { getBlogs } from '@/lib/dataStore';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getBlogs();
        setPosts(data);
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
          {loading ? (
            <p className="text-center text-muted-foreground py-12">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No blog posts yet. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((p) => (
                <Card
                  key={p.id}
                  className="border-border hover:border-primary transition-all hover:shadow-lg hover:scale-[1.01] cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/blog/${p.id}`)}
                >
                  {p.coverImage && (
                    <img src={p.coverImage} alt={p.title} className="w-full h-48 object-cover" />
                  )}
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {p.category && <Badge className="bg-primary/10 text-primary border-none">{p.category}</Badge>}
                      {p.date && <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.date}</span>}
                      {p.author && <span className="text-xs text-muted-foreground flex items-center gap-1"><User className="w-3 h-3" /> {p.author}</span>}
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">{p.title}</h3>
                    {p.excerpt && <p className="text-muted-foreground text-sm line-clamp-2">{p.excerpt}</p>}
                    {!p.excerpt && p.contentBlocks?.[0]?.type === 'text' && (
                      <p className="text-muted-foreground text-sm line-clamp-2">{p.contentBlocks[0].value}</p>
                    )}
                    {!p.excerpt && !p.contentBlocks?.length && p.content && (
                      <p className="text-muted-foreground text-sm line-clamp-2">{p.content}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <YouTubeSection pageName="Blog" title="Blog Videos" />
      <PageMembersSection pageName="Blog" title="Featured" />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
