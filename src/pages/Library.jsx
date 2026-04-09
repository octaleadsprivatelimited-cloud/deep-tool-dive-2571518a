import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { getBooks } from '@/lib/dataStore';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  const categories = ['All', ...new Set(books.map((b) => b.category).filter(Boolean))];

  const filtered = books.filter((b) => {
    const matchesSearch =
      b.title?.toLowerCase().includes(search.toLowerCase()) ||
      b.author?.toLowerCase().includes(search.toLowerCase()) ||
      b.category?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || b.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Library</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collection of books and resources available for reading.
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <section className="py-8 border-b border-border bg-background sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search books..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[2/3] rounded-lg bg-muted mb-3" />
                  <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground mb-1">No books found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or filter.</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-6">{filtered.length} book{filtered.length !== 1 ? 's' : ''}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                {filtered.map((book) => (
                  <a
                    key={book.id}
                    href={book.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="aspect-[2/3] rounded-lg overflow-hidden bg-muted mb-3 ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                      <img
                        src={book.thumbnail}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-1 px-0.5">
                      <h3 className="font-medium text-sm leading-snug line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                      {book.author && (
                        <p className="text-xs text-muted-foreground">{book.author}</p>
                      )}
                      {book.category && (
                        <p className="text-xs text-muted-foreground/70">{book.category}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Library;
