import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Membership = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Membership" />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Membership</h1>
          <p className="text-lg text-slate-200 mb-8 max-w-3xl">Join Kamma Global Federation and support cultural, educational, and community initiatives worldwide.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              tier: 'Supporter', price: '₹500 / year', benefits: ['Newsletter', 'Event Invitations']
            }, {
              tier: 'Patron', price: '₹2,500 / year', benefits: ['Priority Seating', 'Chapter Access', 'Recognition']
            }, {
              tier: 'Lifetime', price: '₹25,000 one-time', benefits: ['Lifetime Access', 'VIP Recognition', 'Special Events']
            }].map((t) => (
              <div key={t.tier} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <div className="text-2xl font-semibold mb-2">{t.tier}</div>
                <div className="text-cyan-300 mb-4">{t.price}</div>
                <ul className="text-slate-200 space-y-2">
                  {t.benefits.map((b) => <li key={b}>• {b}</li>)}
                </ul>
                <a href="/contact" className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Join</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Membership;


