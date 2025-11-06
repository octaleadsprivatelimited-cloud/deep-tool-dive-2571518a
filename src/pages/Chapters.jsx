import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Chapters = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Chapters" />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Chapters</h1>
          <p className="text-lg text-slate-200 mb-10 max-w-3xl">Find and connect with Kamma Global Federation chapters across the world.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Hyderabad', region: 'India' },
              { name: 'Vijayawada', region: 'India' },
              { name: 'Chennai', region: 'India' },
              { name: 'Dallas', region: 'USA' },
              { name: 'London', region: 'UK' },
              { name: 'Dubai', region: 'UAE' },
            ].map((c) => (
              <div key={`${c.name}-${c.region}`} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <div className="text-xl font-semibold">{c.name}</div>
                <div className="text-slate-300">{c.region}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Chapters;


