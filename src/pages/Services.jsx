import React from 'react';
import { Shield, Lock, Eye, Globe, Zap, Target, CheckCircle, ArrowRight, Users, Award, Clock, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Services" />

      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{backgroundColor: '#003386'}}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Cybersecurity Services" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-cyan-950/80"></div>
        </div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Cybersecurity Services
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Comprehensive security solutions designed to protect your organization from evolving cyber threats. 
            Our expert team delivers world-class cybersecurity services tailored to your business needs.
          </p>
        </div>
      </section>

      {/* White Transparent Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm border-t border-white/10 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Our expert team delivers cutting-edge cybersecurity solutions tailored to protect your organization 
              from evolving threats and ensure business continuity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Core Security Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive suite of cybersecurity services provides end-to-end protection for your digital infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-cyan-400" size={48} />,
                title: "Managed Security Services",
                description: "24/7 monitoring and management of your security infrastructure by our expert SOC team.",
                features: ["24/7 SOC monitoring", "Threat detection & response", "Security incident management", "Compliance reporting"],
                price: "Starting at $5,000/month"
              },
              {
                icon: <Lock className="text-cyan-400" size={48} />,
                title: "Identity & Access Management",
                description: "Comprehensive identity management solutions with multi-factor authentication and privileged access controls.",
                features: ["Multi-factor authentication", "Single sign-on (SSO)", "Privileged access management", "Identity governance"],
                price: "Starting at $2,500/month"
              },
              {
                icon: <Eye className="text-cyan-400" size={48} />,
                title: "Security Assessment & Testing",
                description: "Regular security audits, penetration testing, and vulnerability assessments to identify and remediate risks.",
                features: ["Penetration testing", "Vulnerability scanning", "Security audits", "Risk assessments"],
                price: "Starting at $3,000/assessment"
              },
              {
                icon: <Globe className="text-cyan-400" size={48} />,
                title: "Cloud Security",
                description: "Protect your cloud infrastructure with advanced security controls, monitoring, and compliance management.",
                features: ["Cloud security monitoring", "Data encryption", "Access controls", "Compliance management"],
                price: "Starting at $4,000/month"
              },
              {
                icon: <Zap className="text-cyan-400" size={48} />,
                title: "Incident Response",
                description: "Rapid response to security incidents with expert forensic analysis, containment, and recovery services.",
                features: ["24/7 incident response", "Forensic analysis", "Recovery planning", "Legal support"],
                price: "Starting at $10,000/incident"
              },
              {
                icon: <Target className="text-cyan-400" size={48} />,
                title: "Security Training & Awareness",
                description: "Comprehensive security awareness training and technical training for your employees and IT teams.",
                features: ["Phishing simulation", "Security awareness training", "Technical training", "Certification programs"],
                price: "Starting at $1,500/month"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="text-[#021346] mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-[#021346] font-semibold mb-4">{service.price}</div>
                  <Button className="w-full bg-[#021346] hover:bg-[#021346]/90 text-white">
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Additional Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialized security services to address specific industry needs and compliance requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Compliance & Governance",
                description: "Help you meet regulatory requirements including GDPR, HIPAA, SOX, and industry-specific standards.",
                icon: <Award className="text-cyan-400" size={32} />
              },
              {
                title: "Security Consulting",
                description: "Strategic security consulting to help you develop and implement comprehensive security programs.",
                icon: <Users className="text-cyan-400" size={32} />
              },
              {
                title: "Emergency Response",
                description: "24/7 emergency response services for critical security incidents and data breaches.",
                icon: <Clock className="text-cyan-400" size={32} />
              },
              {
                title: "Security Support",
                description: "Dedicated security support and maintenance for your security infrastructure and tools.",
                icon: <Headphones className="text-cyan-400" size={32} />
              }
            ].map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-[#021346] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Secure Your Organization?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Contact our security experts to discuss your specific needs and get a customized security solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#021346] text-white hover:bg-[#021346]/90 font-semibold px-8 py-4 rounded-lg text-lg">
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-[#021346] text-[#021346] hover:bg-[#021346] hover:text-white px-8 py-4 rounded-lg text-lg">
              Download Service Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Mega Footer */}
      <Footer />
    </div>
  );
};

export default Services;
