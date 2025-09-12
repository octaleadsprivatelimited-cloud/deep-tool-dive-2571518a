import React from 'react';
import { Search, Wrench, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400">AI Tool Tester</div>
          <nav>
            <ul className="flex space-x-4">
              {['Home', 'About', 'Tools', 'Reviews', 'Trends', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-green-400">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="relative">
            <Input type="text" placeholder="Search AI Tools" className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-green-900 to-blue-900">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Your Ultimate AI Tools Resource</h1>
          <p className="text-xl mb-8">Testing, Reviewing, and Trending AI Innovations</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">
            Explore Tools
          </Button>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured AI Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg p-6">
                <Wrench className="text-green-400 mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2">AI Tool {item}</h3>
                <p className="text-gray-400 mb-4">Brief description of the AI tool and its capabilities.</p>
                <Button variant="outline" className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white">
                  Add to Toolbox
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Expert Reviews</h2>
          <div className="flex space-x-8 overflow-x-auto pb-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-700 rounded-lg p-6 min-w-[300px]">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-bold">4.5/5</span>
                </div>
                <h3 className="text-xl font-bold mb-2">AI Tool Review {item}</h3>
                <p className="text-gray-400 mb-4">Snippet of the review highlighting key points...</p>
                <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                  Read Full Review
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg p-6">
                <TrendingUp className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">AI Trend Article {item}</h3>
                <p className="text-gray-400 mb-4">Brief snippet of the trending AI topic or news...</p>
                <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0">
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-green-400">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-green-400">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Get the Latest AI News</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="rounded-l-full" />
              <Button className="bg-green-500 hover:bg-green-600 rounded-r-full">Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
