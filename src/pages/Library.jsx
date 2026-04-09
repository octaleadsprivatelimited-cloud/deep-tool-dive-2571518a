import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { getBooks } from '@/lib/dataStore';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  const filtered = books.filter((b) =>
    b.title?.toLowerCase().includes(search.toLowerCase()) ||
    b.author?.toLowerCase().includes(search.toLowerCase()) ||
    b.category?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Library</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collection of books and resources available for reading.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, author or category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground">Loading books...</p>
          ) : filtered.length === 0 ? (
            <p className="text-center text-muted-foreground">No books found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filtered.map((book) => (
                <Card key={book.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={book.thumbnail}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-3 space-y-1">
                    <h3 className="font-semibold text-sm line-clamp-2 text-foreground">{book.title}</h3>
                    {book.author && (
                      <p className="text-xs text-muted-foreground">{book.author}</p>
                    )}
                    {book.category && (
                      <span className="inline-block text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {book.category}
                      </span>
                    )}
                    <Button size="sm" className="w-full mt-2" asChild>
                      <a href={book.driveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" /> Read PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Library;
