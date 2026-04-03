import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, ChevronDown, ChevronUp, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const [openSections, setOpenSections] = useState({});
  const toggleSection = (s) => setOpenSections((p) => ({ ...p, [s]: !p[s] }));

  const sections = [
    {
      title: 'Quick Links',
      items: [
        { name: 'Home', href: '/' },
        { name: 'About RISE', href: '/about' },
        { name: 'Member Directory', href: '/directory' },
        { name: 'Events', href: '/events' },
      ],
    },
    {
      title: 'Services',
      items: [
        { name: 'Mentorship', href: '/mentorship' },
        { name: 'Blog & News', href: '/blog' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Hall of Fame', href: '/achievements' },
      ],
    },
    {
      title: 'Get Involved',
      items: [
        { name: 'Join RISE', href: '/register' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Login', href: '/login' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-black text-lg">R</span>
              </div>
              <div>
                <div className="text-lg font-heading font-bold">RISE</div>
                <div className="text-[10px] text-gold uppercase tracking-widest">Global Directory</div>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">
              Royal Information System for Excellence — connecting community professionals for networking, mentorship, and growth.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="font-heading font-bold text-gold mb-4 uppercase tracking-wide text-sm">{sec.title}</h4>
              <ul className="space-y-2">
                {sec.items.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-3 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-black text-lg">R</span>
            </div>
            <div>
              <div className="text-lg font-heading font-bold">RISE</div>
              <div className="text-[10px] text-gold uppercase tracking-widest">Global Directory</div>
            </div>
          </div>
          {sections.map((sec) => (
            <div key={sec.title} className="border border-secondary-foreground/10 rounded-lg">
              <button onClick={() => toggleSection(sec.title)} className="w-full px-4 py-3 flex justify-between items-center">
                <span className="font-semibold text-sm">{sec.title}</span>
                {openSections[sec.title] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {openSections[sec.title] && (
                <div className="px-4 pb-3 space-y-2 border-t border-secondary-foreground/10 pt-2">
                  {sec.items.map((item) => (
                    <a key={item.name} href={item.href} className="block text-sm text-secondary-foreground/70 hover:text-primary py-1">{item.name}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="border-t border-secondary-foreground/10 pt-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-secondary-foreground/70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <span>Flat No. 102, Balaji Manor, Maruthi Nagar, Yousufguda, Hyderabad - 500045</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 9848353503</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-secondary-foreground/50">&copy; {new Date().getFullYear()} RISE Global Directory. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-secondary-foreground/50">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
