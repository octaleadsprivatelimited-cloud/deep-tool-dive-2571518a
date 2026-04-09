import React, { useState, useEffect } from 'react';
import { getMembersByPage } from '@/lib/dataStore';

const PageMembersSection = ({ pageName, title = 'Featured Members', className = '' }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await getMembersByPage(pageName);
      setMembers(data);
    };
    load();
  }, [pageName]);

  if (members.length === 0) return null;

  return (
    <section className={`py-16 bg-muted ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">
            {title} <span className="text-primary">Members</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div key={m.id} className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:border-primary border border-transparent transition-all duration-300 group">
              <div className="h-48 bg-secondary flex items-center justify-center">
                {m.image ? (
                  <img src={m.image} alt={m.fullName} className="w-24 h-24 rounded-full object-cover border-4 border-primary/30 group-hover:border-primary transition-colors" />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-primary/30 flex items-center justify-center text-3xl font-heading font-bold text-primary group-hover:border-primary transition-colors">
                    {m.fullName?.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                )}
              </div>
              <div className="p-5 text-center">
                <h3 className="font-heading font-bold text-base mb-1">{m.fullName}</h3>
                <p className="text-primary text-sm font-medium">{m.profession}</p>
                <p className="text-muted-foreground text-xs mt-1">{m.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageMembersSection;
