import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { getVideosByPage } from '@/lib/dataStore';

const extractVideoId = (url) => {
  const match = url?.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
};

const YouTubeSection = ({ pageName, title = 'Videos', className = '' }) => {
  const [videos, setVideos] = useState([]);
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await getVideosByPage(pageName);
      setVideos(data.sort((a, b) => (a.order || 0) - (b.order || 0)));
    };
    load();
  }, [pageName]);

  if (videos.length === 0) return null;

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            <span className="text-primary">{title}</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => {
            const videoId = extractVideoId(v.youtubeUrl);
            if (!videoId) return null;
            return (
              <div key={v.id} className="relative group cursor-pointer" onClick={() => setPlayingId(playingId === v.id ? null : v.id)}>
                {playingId === v.id ? (
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <>
                    <div className="aspect-video bg-secondary rounded-lg overflow-hidden relative">
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={v.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                    <p className="text-center mt-3 font-medium text-sm text-foreground">{v.title}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
