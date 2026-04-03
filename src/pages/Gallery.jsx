import React, { useState } from 'react';
import { X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const galleryImages = [
  { id: 1, title: 'RISE Summit 2025', color: 'bg-primary/20' },
  { id: 2, title: 'Networking Night', color: 'bg-gold/20' },
  { id: 3, title: 'Community Health Camp', color: 'bg-secondary/20' },
  { id: 4, title: 'Youth Workshop', color: 'bg-primary/10' },
  { id: 5, title: 'Award Ceremony', color: 'bg-gold/10' },
  { id: 6, title: 'Cultural Event', color: 'bg-primary/15' },
  { id: 7, title: 'Mentorship Meet', color: 'bg-secondary/10' },
  { id: 8, title: 'Annual Gala', color: 'bg-gold/15' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Gallery" />

      <section className="pt-32 pb-10 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">
            <span className="text-primary">Gallery</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className={`${img.color} rounded-xl aspect-square flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 border border-border`}
                onClick={() => setSelectedImage(img)}
              >
                <span className="font-heading font-bold text-sm text-center px-4">{img.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className={`${selectedImage.color} rounded-2xl w-full max-w-2xl aspect-video flex items-center justify-center relative`}>
            <button className="absolute top-4 right-4 text-foreground" onClick={() => setSelectedImage(null)}>
              <X className="w-6 h-6" />
            </button>
            <span className="font-heading font-bold text-2xl">{selectedImage.title}</span>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
