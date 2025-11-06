import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Events = () => {
  const events = [
    { title: 'Global Meet 2025', date: 'Jan 15, 2025', location: 'Hyderabad, India', description: 'Annual federation gathering and leadership summit.' },
    { title: 'Youth Leadership Workshop', date: 'Mar 02, 2025', location: 'Dallas, USA', description: 'Skill-building and mentorship for young leaders.' },
    { title: 'Community Health Drive', date: 'Apr 20, 2025', location: 'Chennai, India', description: 'Federation-led wellness and health awareness drive.' },
  ];

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Events" />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
          <p className="text-lg text-slate-200 mb-10 max-w-3xl">Upcoming programs, celebrations, and community initiatives.</p>
          <div className="space-y-6">
            {events.map((e) => (
              <div key={e.title} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <div className="text-2xl font-semibold mb-1">{e.title}</div>
                <div className="text-slate-300 mb-2">{e.date} • {e.location}</div>
                <p className="text-slate-200">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;


