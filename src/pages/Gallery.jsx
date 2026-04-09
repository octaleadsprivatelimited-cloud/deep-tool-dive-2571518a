import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import YouTubeSection from '@/components/YouTubeSection';
import PageMembersSection from '@/components/PageMembersSection';
import { getGalleryImages } from '@/lib/dataStore';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getGalleryImages();
        if (data.length > 0) {
          setGalleryImages(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, []);

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
          {galleryImages.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">Gallery images coming soon!</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="rounded-xl aspect-square overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 border border-border"
                  onClick={() => setSelectedImage(img)}
                >
                  {img.image ? (
                    <img src={img.image} alt={img.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-sm text-center px-4">{img.title}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="rounded-2xl w-full max-w-2xl aspect-video relative overflow-hidden">
            <button className="absolute top-4 right-4 text-foreground z-10" onClick={() => setSelectedImage(null)}>
              <X className="w-6 h-6" />
            </button>
            {selectedImage.image ? (
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading font-bold text-2xl">{selectedImage.title}</span>
              </div>
            )}
          </div>
        </div>
      )}

      <YouTubeSection pageName="Gallery" title="Video Gallery" />
      <PageMembersSection pageName="Gallery" title="Featured" />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
