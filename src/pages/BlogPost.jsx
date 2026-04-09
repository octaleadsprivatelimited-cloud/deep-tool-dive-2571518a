import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getBlogs } from '@/lib/dataStore';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const blogs = await getBlogs();
        const found = blogs.find((b) => b.id === id);
        setPost(found || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const contentBlocks = post?.contentBlocks || (post?.content ? [{ type: 'text', value: post.content }] : []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Blog" />

      {loading ? (
        <div className="pt-32 pb-20 text-center text-muted-foreground">Loading...</div>
      ) : !post ? (
        <div className="pt-32 pb-20 text-center">
          <p className="text-muted-foreground mb-4">Post not found.</p>
          <Button variant="outline" onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
      ) : (
        <>
          {/* Cover Image */}
          {post.coverImage && (
            <div className="pt-16 md:pt-20">
              <img src={post.coverImage} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
            </div>
          )}

          <article className={`${post.coverImage ? 'pt-8' : 'pt-32'} pb-16`}>
            <div className="container mx-auto px-4 max-w-3xl">
              <Button variant="ghost" size="sm" className="mb-6 text-muted-foreground" onClick={() => navigate('/blog')}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
              </Button>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                {post.category && <Badge className="bg-primary/10 text-primary border-none">{post.category}</Badge>}
                {post.date && (
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                )}
                {post.author && (
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> {post.author}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-heading font-black mb-6">{post.title}</h1>

              {post.excerpt && (
                <p className="text-lg text-muted-foreground mb-8 border-l-4 border-primary pl-4 italic">{post.excerpt}</p>
              )}

              {/* Article Content */}
              <div className="space-y-6">
                {contentBlocks.map((block, i) => (
                  <div key={i}>
                    {block.type === 'text' ? (
                      <p className="text-foreground/90 leading-relaxed whitespace-pre-line">{block.value}</p>
                    ) : (
                      <figure className="my-4">
                        <img src={block.value} alt={block.caption || ''} className="w-full rounded-lg shadow-md" />
                        {block.caption && (
                          <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">{block.caption}</figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
