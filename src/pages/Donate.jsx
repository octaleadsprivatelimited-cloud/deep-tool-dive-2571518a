import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Donate = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Donate" />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-lg text-slate-200 mb-8 max-w-3xl">Your generous contribution helps fund education, healthcare, and cultural programs across global Kamma communities.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-3">One-time Donation</h2>
              <p className="text-slate-300 mb-4">Make a one-time contribution to support ongoing initiatives.</p>
              <a href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Donate</a>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-3">Monthly Support</h2>
              <p className="text-slate-300 mb-4">Become a recurring donor to sustain long-term programs.</p>
              <a href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Start Monthly</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Donate;


