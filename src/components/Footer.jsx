import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Zap, 
  Target, 
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const footerSections = [
    {
      title: "About",
      items: [
        { name: "Who We Are", href: "/about" },
        { name: "Vision & Mission", href: "/about" },
        { name: "Leadership", href: "/about" },
        { name: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Community",
      items: [
        { name: "Chapters", href: "/chapters" },
        { name: "Events", href: "/events" },
        { name: "Membership", href: "/membership" },
        { name: "Volunteer", href: "/membership" }
      ]
    },
    {
      title: "Get Involved",
      items: [
        { name: "Donate", href: "/donate" },
        { name: "Sponsorship", href: "/partners" },
        { name: "Careers", href: "/about" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "News", href: "/news" },
        { name: "Publications", href: "/resources" },
        { name: "Library", href: "/library" },
        { name: "Media", href: "/resources" },
        { name: "FAQs", href: "/resources" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "GitHub", icon: Github, href: "#" }
  ];

  return (
    <footer className="bg-[#b99b4c] text-black">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Desktop Footer Grid */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-black mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href} 
                      className="text-black hover:opacity-80 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Footer Dropdowns */}
        <div className="lg:hidden space-y-4 mb-8">
          {footerSections.map((section, index) => (
            <div key={index} className="border border-black/20 rounded-lg">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-black/10 transition-colors duration-200"
              >
                <span className="font-semibold text-black">{section.title}</span>
                {openSections[section.title] ? (
                  <ChevronUp className="w-5 h-5 text-black/60" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black/60" />
                )}
              </button>
              {openSections[section.title] && (
                <div className="px-4 pb-4 border-t border-black/10">
                  <ul className="space-y-2 pt-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a 
                          href={item.href} 
                          className="text-black hover:opacity-80 transition-colors duration-200 text-sm block py-1"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>


        {/* Contact Information */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-black mb-4">Headquarters</h4>
              <div className="space-y-2 text-black/80">
                <p>Hyderabad, Telangana</p>
                <p>India</p>
              </div>
            </div>
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-black mb-4">Contact</h4>
            <div className="space-y-2 text-black/80">
              <p className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-2" />
                +91 0000-000-000
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-2" />
                info@kammaglobal.org
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Globe className="w-4 h-4 mr-2" />
                www.kammaglobal.org
              </p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h4 className="font-semibold text-black mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center hover:bg-black/20 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5 text-black" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Organization Note */}
        <div className="bg-white/20 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black mb-1">Kamma Global Federation</h3>
              <p className="text-black/80 text-sm leading-relaxed">
                A global, non-profit federation connecting Kamma communities worldwide through culture, education,
                entrepreneurship, and service.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-black" />
              <span className="text-xl font-bold">Kamma Global Federation</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-black/80">
              <a href="/privacy" className="hover:opacity-80 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:opacity-80 transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:opacity-80 transition-colors">Cookie Policy</a>
              <a href="/security" className="hover:opacity-80 transition-colors">Security Policy</a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-black/70">
            <p>&copy; 2024 Kamma Global Federation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
