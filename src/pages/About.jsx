import React from 'react';
import { Shield, Users, Award, Target, CheckCircle, ArrowRight, Globe, Clock, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="About" />

      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{backgroundColor: '#003386'}}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80" 
            alt="About Us" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-cyan-950/80"></div>
        </div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            About Kamma Global Federation
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            A global federation uniting Kamma communities to promote culture, education, entrepreneurship, and philanthropy.
          </p>
        </div>
      </section>

      {/* White Transparent Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm border-t border-white/10 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Empowering a Global Community
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We foster unity, service, and progress through global chapters, events, and programs that uplift communities.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-slate-300 mb-6">
                To connect Kamma diaspora worldwide, support youth and entrepreneurs, celebrate culture, and advance social impact.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Founded by community leaders, Kamma Global Federation is a non-profit platform enabling collaboration across continents.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "50+", label: "Chapters Worldwide" },
                  { number: "100k+", label: "Members & Supporters" },
                  { number: "200+", label: "Annual Events" },
                  { number: "10+", label: "Countries Active" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                    <div className="text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Shield className="text-cyan-400" size={24} />,
                    title: "Unity",
                    description: "We strengthen bonds across global Kamma communities."
                  },
                  {
                    icon: <Users className="text-cyan-400" size={24} />,
                    title: "Service",
                    description: "We promote philanthropy and community service."
                  },
                  {
                    icon: <Award className="text-cyan-400" size={24} />,
                    title: "Excellence",
                    description: "We strive for impact through high-quality programs."
                  },
                  {
                    icon: <Target className="text-cyan-400" size={24} />,
                    title: "Progress",
                    description: "We empower youth, professionals, and entrepreneurs."
                  }
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{value.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{value.title}</h4>
                      <p className="text-slate-300">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Meet the cybersecurity experts leading our mission to protect organizations worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                title: "Chief Executive Officer",
                bio: "Former NSA cybersecurity director with 20+ years of experience in threat intelligence and incident response.",
                expertise: ["Threat Intelligence", "Incident Response", "Strategic Leadership"]
              },
              {
                name: "Michael Rodriguez",
                title: "Chief Technology Officer",
                bio: "Cybersecurity architect and former CTO at leading security companies, specializing in AI and machine learning.",
                expertise: ["AI Security", "Cloud Security", "Technology Innovation"]
              },
              {
                name: "Dr. Emily Watson",
                title: "Chief Security Officer",
                bio: "Renowned cybersecurity researcher and former FBI cybercrime investigator with expertise in digital forensics.",
                expertise: ["Digital Forensics", "Cybercrime Investigation", "Security Research"]
              },
              {
                name: "James Thompson",
                title: "VP of Threat Intelligence",
                bio: "Former military intelligence officer with extensive experience in nation-state threats and APT analysis.",
                expertise: ["APT Analysis", "Nation-State Threats", "Intelligence Operations"]
              },
              {
                name: "Lisa Park",
                title: "VP of Engineering",
                bio: "Software engineering leader with expertise in building scalable security platforms and distributed systems.",
                expertise: ["Platform Engineering", "Scalable Systems", "DevSecOps"]
              },
              {
                name: "David Kumar",
                title: "VP of Operations",
                bio: "Operations leader with experience managing global security operations centers and incident response teams.",
                expertise: ["SOC Operations", "Incident Response", "Global Operations"]
              }
            ].map((leader, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-[#021346] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl text-white text-center">{leader.name}</CardTitle>
                  <CardDescription className="text-cyan-400 text-center">{leader.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4 text-center">{leader.bio}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <Badge key={idx} className="bg-cyan-900/30 text-cyan-300 border-cyan-700 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Achievements */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Awards & Recognition</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and security organizations worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                award: "Gartner Magic Quadrant Leader",
                year: "2024",
                description: "Recognized as a leader in managed security services for the third consecutive year."
              },
              {
                award: "Forrester Wave Leader",
                year: "2024",
                description: "Top-rated in the Forrester Wave for threat intelligence platforms."
              },
              {
                award: "SC Awards Winner",
                year: "2023",
                description: "Best Managed Security Service Provider at the SC Awards."
              },
              {
                award: "ISO 27001 Certified",
                year: "2023",
                description: "Achieved ISO 27001 certification for our information security management system."
              },
              {
                award: "SOC 2 Type II",
                year: "2023",
                description: "Successfully completed SOC 2 Type II audit for security, availability, and confidentiality."
              },
              {
                award: "Inc. 5000 Fastest Growing",
                year: "2022",
                description: "Ranked among the fastest-growing private companies in America."
              },
              {
                award: "Best Place to Work",
                year: "2022",
                description: "Recognized as one of the best places to work in cybersecurity by Great Place to Work."
              },
              {
                award: "Innovation Award",
                year: "2021",
                description: "Received the Cybersecurity Innovation Award for our AI-powered threat detection platform."
              }
            ].map((achievement, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center hover:border-[#021346] transition-all duration-300">
                <div className="w-16 h-16 bg-[#021346] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{achievement.award}</h3>
                <div className="text-cyan-400 font-bold mb-2">{achievement.year}</div>
                <p className="text-slate-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Global Presence</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              With offices and security operations centers around the world, we provide 24/7 protection to our global client base.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                location: "New York, USA",
                type: "Global Headquarters",
                description: "Our main headquarters and primary security operations center serving North America.",
                features: ["Global HQ", "Primary SOC", "Executive Team", "R&D Center"]
              },
              {
                location: "London, UK",
                type: "European Operations",
                description: "European headquarters and security operations center serving EMEA region.",
                features: ["EMEA HQ", "European SOC", "Compliance Center", "Training Facility"]
              },
              {
                location: "Singapore",
                type: "Asia-Pacific Operations",
                description: "Asia-Pacific headquarters and security operations center serving APAC region.",
                features: ["APAC HQ", "Regional SOC", "Threat Intel Center", "Partner Hub"]
              },
              {
                location: "Tokyo, Japan",
                type: "Regional Office",
                description: "Regional office serving Japan and surrounding markets with local expertise.",
                features: ["Local Team", "Japanese Market", "Compliance Support", "Local SOC"]
              },
              {
                location: "Sydney, Australia",
                type: "Regional Office",
                description: "Regional office serving Australia and New Zealand with specialized services.",
                features: ["ANZ Team", "Local Compliance", "Regional Support", "Training Center"]
              },
              {
                location: "Toronto, Canada",
                type: "Regional Office",
                description: "Regional office serving Canada with specialized government and enterprise services.",
                features: ["Canadian Team", "Government Services", "Local Compliance", "Regional SOC"]
              }
            ].map((office, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Globe className="text-cyan-400" size={24} />
                    <div>
                      <CardTitle className="text-lg text-white">{office.location}</CardTitle>
                      <CardDescription className="text-cyan-400">{office.type}</CardDescription>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm">{office.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {office.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="text-cyan-400 mr-2" size={14} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-white">Join Our Mission</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Be part of the team that's protecting organizations worldwide from cyber threats. 
            Explore career opportunities and join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#021346] text-white hover:bg-[#021346]/90 font-semibold px-8 py-4 rounded-lg text-lg">
              View Careers
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-[#021346] text-[#021346] hover:bg-[#021346] hover:text-white px-8 py-4 rounded-lg text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Mega Footer */}
      <Footer />    </div>
  );
};

export default About;
