import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Film, Landmark } from 'lucide-react';

const collections = [
  {
    title: 'Community Summits',
    description: 'Moments from global KGF conventions, panel discussions, and award ceremonies celebrating collective leadership.',
    cover:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Events', 'Leadership', 'Global'],
  },
  {
    title: 'Heritage & Architecture',
    description: 'Temple architecture, ancient forts, and irrigation marvels that trace the lineage of Kamma stewardship.',
    cover:
      'https://images.unsplash.com/photo-1560857013-6b025c2ac6c8?auto=format&fit=crop&w=1200&q=80',
    tags: ['Heritage', 'Architecture', 'Culture'],
  },
  {
    title: 'Entrepreneurial Journeys',
    description: 'Snapshots of innovators, founders, and philanthropists building enterprises and social impact.',
    cover:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    tags: ['Business', 'Innovation', 'Impact'],
  },
];

const galleryItems = [
  {
    title: 'KGF Global Summit Roundtable',
    caption: 'Delegates collaborate on diaspora policy, education roadmaps, and investment partnerships.',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    orientation: 'landscape',
  },
  {
    title: 'Heritage Walk - Warangal Fort',
    caption: 'Volunteers documenting sculptural motifs and fortification plans from the Kakatiya period.',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1606122017369-d782bbb78f32?auto=format&fit=crop&w=1200&q=80',
    orientation: 'portrait',
  },
  {
    title: 'Youth Leadership Bootcamp',
    caption: 'Emerging leaders co-design community service playbooks across technology, health, and education.',
    category: 'Youth',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    orientation: 'landscape',
  },
  {
    title: 'Agrarian Innovation Lab',
    caption: 'Farmers and technologists pilots AI-enabled crop advisory platforms for rural resilience.',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
    orientation: 'landscape',
  },
  {
    title: 'Cultural Performance',
    caption: 'Dance ensembles narrating Kamma folklore at the diaspora cultural evening.',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    orientation: 'portrait',
  },
  {
    title: 'Healthcare Outreach Camp',
    caption: 'Chapter-led telemedicine screenings supporting preventive care initiatives.',
    category: 'Service',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=80',
    orientation: 'landscape',
  },
  {
    title: 'Heritage Irrigation Sites',
    caption: 'Documenting ancient tanks and sluice gates engineered for delta irrigation.',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=1200&q=80',
    orientation: 'landscape',
  },
  {
    title: 'Global Chapter Meetup - Toronto',
    caption: 'Cross-border collaboration on mentorship, scholarships, and youth fellowships.',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80',
    orientation: 'landscape',
  },
];

const categories = ['All', ...Array.from(new Set(galleryItems.map((item) => item.category)))];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredItems = activeCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header currentPage="Gallery" />

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute -right-48 -top-24 h-72 w-72 rounded-full bg-[#b99b4c]/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <Badge className="mx-auto mb-6 border border-black/10 bg-black/5 text-black uppercase tracking-wide">
            Media Gallery
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Visual Stories of KGF</h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Travel through summits, service missions, heritage walks, and cultural celebrations that capture the spirit of a global community.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Signature Collections</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Curated clusters of photographs, interviews, and footage from across the world—ready for exhibition, research, or chapter storytelling.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Card key={collection.title} className="border-slate-200 shadow-sm rounded-3xl overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={collection.cover} alt={collection.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <CardHeader className="space-y-3">
                  <CardTitle className="text-2xl">{collection.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{collection.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {collection.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-black/5 text-slate-700 border border-black/10 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Gallery Highlights</h2>
              <p className="text-slate-600">
                Filter by theme to view moments from leadership summits, community service, cultural heritage, and innovation showcases.
              </p>
            </div>
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
              <TabsList className="flex flex-wrap justify-center md:justify-end gap-2 bg-slate-100 border border-slate-200">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="px-4 py-2 data-[state=active]:bg-white data-[state=active]:text-black">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Dialog key={item.title}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b99b4c]"
                  >
                    <div className={`w-full ${item.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 pb-5 text-left transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                      <Badge className="border border-white/40 bg-white/20 text-white uppercase tracking-wide mb-3">{item.category}</Badge>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-slate-100 mt-1">{item.caption}</p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                    <DialogDescription className="text-slate-600">{item.caption}</DialogDescription>
                  </DialogHeader>
                  <div className="aspect-video w-full overflow-hidden rounded-xl">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 shadow-sm rounded-3xl">
              <CardHeader className="space-y-3">
                <Camera className="h-6 w-6 text-[#b99b4c]" />
                <CardTitle className="text-2xl">Contribute Photography</CardTitle>
                <CardDescription className="text-slate-600">
                  Submit high-resolution imagery from events, field visits, and cultural celebrations. We credit all contributors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full">
                  Upload Assets
                </Button>
              </CardContent>
            </Card>
            <Card className="border-slate-200 shadow-sm rounded-3xl">
              <CardHeader className="space-y-3">
                <Film className="h-6 w-6 text-[#b99b4c]" />
                <CardTitle className="text-2xl">Curate Documentary Footage</CardTitle>
                <CardDescription className="text-slate-600">
                  Partner with the media cell to produce short films and oral histories. Access storyboards, shot lists, and archival references.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white w-full">
                  Join Media Cell
                </Button>
              </CardContent>
            </Card>
            <Card className="border-slate-200 shadow-sm rounded-3xl">
              <CardHeader className="space-y-3">
                <Landmark className="h-6 w-6 text-[#b99b4c]" />
                <CardTitle className="text-2xl">Exhibit the Gallery</CardTitle>
                <CardDescription className="text-slate-600">
                  Chapters can host pop-up exhibits with curated prints, narratives, and interactive digital displays.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white w-full">
                  Request Exhibit Kit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-3">
              <h3 className="text-3xl font-bold">Build the Living Archive</h3>
              <p className="text-slate-600 leading-relaxed">
                Volunteer as a storyteller, photographer, or archivist. Every contribution powers the collective memory of the Kamma Global Federation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white px-6 py-3 rounded-lg">
                Become a Storyteller
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg">
                Partner With Media Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

