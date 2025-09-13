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
      title: "Services",
      items: [
        { name: "Penetration Testing", href: "/services/penetration-testing" },
        { name: "Vulnerability Assessment", href: "/services/vulnerability-assessment" },
        { name: "Security Audits", href: "/services/security-audits" },
        { name: "Incident Response", href: "/services/incident-response" },
        { name: "Compliance Consulting", href: "/services/compliance" },
        { name: "Security Training", href: "/services/training" },
        { name: "Managed Security", href: "/services/managed-security" },
        { name: "Cloud Security", href: "/services/cloud-security" }
      ]
    },
    {
      title: "Solutions",
      items: [
        { name: "Enterprise Security", href: "/solutions/enterprise" },
        { name: "SME Protection", href: "/solutions/sme" },
        { name: "Government & Defense", href: "/solutions/government" },
        { name: "Financial Services", href: "/solutions/financial" },
        { name: "Healthcare Security", href: "/solutions/healthcare" },
        { name: "Critical Infrastructure", href: "/solutions/infrastructure" },
        { name: "IoT Security", href: "/solutions/iot" },
        { name: "AI Security", href: "/solutions/ai-security" }
      ]
    },
    {
      title: "Threat Intelligence",
      items: [
        { name: "Threat Monitoring", href: "/threats/monitoring" },
        { name: "Malware Analysis", href: "/threats/malware" },
        { name: "Dark Web Monitoring", href: "/threats/dark-web" },
        { name: "Threat Hunting", href: "/threats/hunting" },
        { name: "Intelligence Reports", href: "/threats/reports" },
        { name: "IOC Feeds", href: "/threats/ioc" },
        { name: "APT Tracking", href: "/threats/apt" },
        { name: "Ransomware Intelligence", href: "/threats/ransomware" }
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Security Blog", href: "/resources/blog" },
        { name: "White Papers", href: "/resources/whitepapers" },
        { name: "Case Studies", href: "/resources/case-studies" },
        { name: "Webinars", href: "/resources/webinars" },
        { name: "Security Tools", href: "/resources/tools" },
        { name: "Research Reports", href: "/resources/reports" },
        { name: "Security Glossary", href: "/resources/glossary" },
        { name: "Best Practices", href: "/resources/best-practices" }
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Leadership Team", href: "/about/leadership" },
        { name: "Careers", href: "/careers" },
        { name: "News & Press", href: "/news" },
        { name: "Partners", href: "/partners" },
        { name: "Contact Us", href: "/contact" },
        { name: "Investor Relations", href: "/investors" },
        { name: "Sustainability", href: "/sustainability" }
      ]
    },
    {
      title: "Support",
      items: [
        { name: "Help Center", href: "/support" },
        { name: "Documentation", href: "/support/docs" },
        { name: "API Reference", href: "/support/api" },
        { name: "System Status", href: "/support/status" },
        { name: "Community Forum", href: "/support/forum" },
        { name: "Training Center", href: "/support/training" },
        { name: "Professional Services", href: "/support/professional" },
        { name: "Emergency Response", href: "/support/emergency" }
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
    <footer className="bg-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Desktop Footer Grid */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-red-400 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href} 
                      className="text-slate-300 hover:text-red-400 transition-colors duration-200 text-sm"
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
            <div key={index} className="border border-slate-800 rounded-lg">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-slate-800 transition-colors duration-200"
              >
                <span className="font-semibold text-red-400">{section.title}</span>
                {openSections[section.title] ? (
                  <ChevronUp className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openSections[section.title] && (
                <div className="px-4 pb-4 border-t border-slate-800">
                  <ul className="space-y-2 pt-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a 
                          href={item.href} 
                          className="text-slate-300 hover:text-red-400 transition-colors duration-200 text-sm block py-1"
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
              <h4 className="font-semibold text-red-400 mb-4">Headquarters</h4>
              <div className="space-y-2 text-slate-300">
                <p>T-hub 2.0, Madhapur</p>
                <p>Hyderabad-500017</p>
                <p>India</p>
              </div>
            </div>
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-red-400 mb-4">Contact</h4>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-2" />
                +91 89-2583-4989
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-2" />
                info@transasiatec.com
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <Globe className="w-4 h-4 mr-2" />
                www.transasiatec.com
              </p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h4 className="font-semibold text-red-400 mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#021346] transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CEO Introduction Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHnXpVq2X5uvQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1669802740007?e=1760572800&v=beta&t=qiet6r3RmIkPzq1a7NWZ59w3KJWgDUFPLEpOSrjVJKc" 
                alt="Vijayanand Subramaniam - CEO"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">Vijayanand Subramaniam</h3>
              <p className="text-red-400 font-medium text-sm mb-2">Chief Executive Officer & Founder</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                "Leading cybersecurity innovation with 20+ years of experience protecting organizations worldwide."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-[#021346]" />
              <span className="text-xl font-bold">Trans Asia Soft Tech</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-slate-400">
              <a href="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-red-400 transition-colors">Cookie Policy</a>
              <a href="/security" className="hover:text-red-400 transition-colors">Security Policy</a>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-slate-500">
            <p>&copy; 2024 Trans Asia Soft Tech. All rights reserved. | ISO 27001 Certified | SOC 2 Type II Compliant</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
