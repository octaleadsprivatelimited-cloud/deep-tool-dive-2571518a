import React from 'react';
import { Shield, Lock, Eye, Users, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe, Zap, Target, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
 

const Index = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Home" />

      {/* Hero Section - Clean UI */}
      <section className="py-16 md:py-24 relative min-h-[70vh] flex items-center bg-white text-black">
        <div className="container mx-auto text-center px-4 w-full">
          <Badge className="inline-flex items-center justify-center border border-black/10 bg-black/5 text-black mb-6 px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Building a Strong Global Community
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Kamma Global Federation
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Uniting Kammas worldwide to advance culture, education, entrepreneurship, and community service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#b99b4c] hover:bg-[#a3893f] text-white font-semibold px-8 py-4 rounded-lg text-lg">
              <a href="/membership" className="flex items-center">
                Become a Member
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg text-lg">
              <a href="/donate">Support Our Mission</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Fortune 500 Clients" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Security Monitoring" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Kamma Achievements</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Celebrating our community’s impact across chapters: culture, education, entrepreneurship,
              health, and youth leadership around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-cyan-400" size={48} />,
                title: "Cultural Preservation",
                description: "Festivals, heritage programs, and cultural nights across chapters.",
                features: ["200+ events annually", "Heritage workshops", "Community awards", "Global meet"]
              },
              {
                icon: <Users className="text-cyan-400" size={48} />,
                title: "Scholarships & Education",
                description: "Supporting students with scholarships and mentorship.",
                features: ["5,000+ scholarships", "Mentor network", "Career guidance", "Alumni circles"]
              },
              {
                icon: <Target className="text-cyan-400" size={48} />,
                title: "Entrepreneurship",
                description: "Incubation, networking, and founder mentorship across regions.",
                features: ["1,000+ mentees", "Pitch forums", "Investor connects", "Founder panels"]
              },
              {
                icon: <Globe className="text-cyan-400" size={48} />,
                title: "Global Chapters",
                description: "Expanding our footprint to connect the diaspora worldwide.",
                features: ["50+ chapters", "Regional councils", "Local leadership", "Global coordination"]
              },
              {
                icon: <Zap className="text-cyan-400" size={48} />,
                title: "Health & Wellness",
                description: "Community health drives, screenings, and wellness workshops.",
                features: ["100+ camps", "Specialist talks", "Wellness guides", "Local partnerships"]
              },
              {
                icon: <Award className="text-cyan-400" size={48} />,
                title: "Youth Leadership",
                description: "Leadership workshops and volunteer opportunities for youth.",
                features: ["10k+ participants", "Chapter projects", "Mentor hours", "Recognition"]
              }
            ].map((service, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800 hover:border-cyan-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="text-cyan-400 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Intelligence Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Real-Time Threat Intelligence</h2>
              <p className="text-xl text-slate-300 mb-8">
                Stay ahead of emerging threats with our advanced threat intelligence platform. 
                We monitor global threat landscapes and provide actionable intelligence to protect your organization.
              </p>
              <div className="space-y-4">
                {[
                  "Global threat monitoring",
                  "AI-powered threat analysis",
                  "Custom threat reports",
                  "Threat hunting services"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-cyan-400 mr-3" size={20} />
                    <span className="text-slate-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-lg">
                Learn More About Threat Intelligence
              </Button>
            </div>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-red-900/20 border border-red-800 rounded-lg">
                  <div className="flex items-center">
                    <AlertTriangle className="text-red-400 mr-3" size={24} />
                    <div>
                      <div className="text-red-400 font-semibold">Critical Threat Detected</div>
                      <div className="text-slate-300 text-sm">Ransomware campaign targeting financial sector</div>
                    </div>
                  </div>
                  <Badge className="bg-red-900 text-red-300">High Risk</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-yellow-900/20 border border-yellow-800 rounded-lg">
                  <div className="flex items-center">
                    <Eye className="text-yellow-400 mr-3" size={24} />
                    <div>
                      <div className="text-yellow-400 font-semibold">Suspicious Activity</div>
                      <div className="text-slate-300 text-sm">Unusual login patterns detected</div>
                    </div>
                  </div>
                  <Badge className="bg-yellow-900 text-yellow-300">Medium Risk</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-900/20 border border-green-800 rounded-lg">
                  <div className="flex items-center">
                    <Shield className="text-green-400 mr-3" size={24} />
                    <div>
                      <div className="text-green-400 font-semibold">System Secure</div>
                      <div className="text-slate-300 text-sm">All security checks passed</div>
                    </div>
                  </div>
                  <Badge className="bg-green-900 text-green-300">Secure</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Organization?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations that trust Trans Asia Soft Tech for their cybersecurity needs. 
            Get a free security assessment and discover how we can protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100 font-semibold px-8 py-4 rounded-lg text-lg">
              <a href="/contact" className="flex items-center">
                Get Free Assessment
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg text-lg">
              <a href="/contact">Contact Sales</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <Footer />
    </div>
  );
};

export default Index;
