import React from 'react';
import { Shield, Handshake, Award, CheckCircle, ArrowRight, Globe, Users, Zap, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Partners = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Partners" />

      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{backgroundColor: '#003386'}}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Our Partners" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-cyan-950/80"></div>
        </div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Our Partners
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We work with industry-leading technology partners to deliver comprehensive security solutions 
            and provide our clients with the best-in-class cybersecurity tools and services.
          </p>
        </div>
      </section>

      {/* White Transparent Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm border-t border-white/10 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Strategic Technology Partnerships
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We work with industry-leading technology partners to deliver comprehensive security solutions 
              and provide our clients with the best-in-class cybersecurity tools and services.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join our ecosystem of trusted partners and expand your reach in the cybersecurity market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="text-cyan-400" size={48} />,
                title: "Global Reach",
                description: "Access to our worldwide client base and international markets."
              },
              {
                icon: <Users className="text-cyan-400" size={48} />,
                title: "Expert Support",
                description: "Dedicated partner success managers and technical support teams."
              },
              {
                icon: <Zap className="text-cyan-400" size={48} />,
                title: "Fast Integration",
                description: "Streamlined integration process with our security platforms."
              },
              {
                icon: <Award className="text-cyan-400" size={48} />,
                title: "Certification Program",
                description: "Comprehensive training and certification for your team."
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 text-center">
                <CardHeader>
                  <div className="mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
                  <CardDescription className="text-slate-300">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Technology Partners</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We integrate with leading technology platforms to provide comprehensive security solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Microsoft",
                category: "Cloud Security",
                description: "Advanced security solutions for Microsoft Azure and Office 365 environments.",
                features: ["Azure Security Center", "Office 365 Protection", "Identity Management", "Compliance Tools"],
                logo: "MS",
                tier: "Platinum"
              },
              {
                name: "Amazon Web Services",
                category: "Cloud Infrastructure",
                description: "Comprehensive security services for AWS cloud environments and workloads.",
                features: ["AWS Security Hub", "CloudTrail Monitoring", "IAM Management", "WAF Protection"],
                logo: "AWS",
                tier: "Platinum"
              },
              {
                name: "Google Cloud",
                category: "Cloud Security",
                description: "Security solutions for Google Cloud Platform and G Suite environments.",
                features: ["Security Command Center", "Cloud Identity", "Data Loss Prevention", "Threat Detection"],
                logo: "GCP",
                tier: "Gold"
              },
              {
                name: "CrowdStrike",
                category: "Endpoint Security",
                description: "Next-generation endpoint protection and threat hunting capabilities.",
                features: ["Falcon Platform", "Threat Intelligence", "Incident Response", "Forensics"],
                logo: "CS",
                tier: "Gold"
              },
              {
                name: "Palo Alto Networks",
                category: "Network Security",
                description: "Advanced firewall and network security solutions for enterprise environments.",
                features: ["Next-Gen Firewalls", "Threat Prevention", "URL Filtering", "VPN Solutions"],
                logo: "PAN",
                tier: "Gold"
              },
              {
                name: "Splunk",
                category: "Security Analytics",
                description: "Security information and event management (SIEM) platform integration.",
                features: ["SIEM Platform", "Log Analysis", "Threat Detection", "Compliance Reporting"],
                logo: "SP",
                tier: "Silver"
              }
            ].map((partner, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-[#021346] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {partner.logo}
                    </div>
                    <Badge className={`${
                      partner.tier === 'Platinum' ? 'bg-yellow-900/30 text-yellow-300 border-yellow-700' :
                      partner.tier === 'Gold' ? 'bg-gray-900/30 text-gray-300 border-gray-700' :
                      'bg-orange-900/30 text-orange-300 border-orange-700'
                    }`}>
                      {partner.tier}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white">{partner.name}</CardTitle>
                  <CardDescription className="text-cyan-400">{partner.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">{partner.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {partner.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300 text-sm">
                          <CheckCircle className="text-cyan-400 mr-2" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Partners */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Channel Partners</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our trusted channel partners help us deliver cybersecurity solutions to clients worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "CDW Corporation",
                type: "Value-Added Reseller",
                region: "North America",
                description: "Leading technology solutions provider delivering cybersecurity services to enterprise clients.",
                specialties: ["Enterprise Security", "Cloud Solutions", "Managed Services", "Professional Services"],
                years: "5+ years"
              },
              {
                name: "Dimension Data",
                type: "System Integrator",
                region: "Global",
                description: "Global systems integrator providing comprehensive IT and security solutions.",
                specialties: ["System Integration", "Security Consulting", "Managed Services", "Digital Transformation"],
                years: "8+ years"
              },
              {
                name: "Accenture",
                type: "Consulting Partner",
                region: "Global",
                description: "Global consulting firm delivering cybersecurity transformation and advisory services.",
                specialties: ["Security Consulting", "Digital Transformation", "Risk Management", "Compliance"],
                years: "10+ years"
              },
              {
                name: "Deloitte",
                type: "Advisory Partner",
                region: "Global",
                description: "Professional services firm providing cybersecurity risk and advisory services.",
                specialties: ["Risk Advisory", "Security Assessment", "Compliance", "Incident Response"],
                years: "7+ years"
              }
            ].map((partner, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-white">{partner.name}</CardTitle>
                    <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700">{partner.type}</Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-slate-400 mb-2">
                    <span className="flex items-center">
                      <Globe className="mr-1" size={14} />
                      {partner.region}
                    </span>
                    <span className="flex items-center">
                      <Star className="mr-1" size={14} />
                      {partner.years}
                    </span>
                  </div>
                  <CardDescription className="text-slate-300">{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-white">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.specialties.map((specialty, idx) => (
                        <Badge key={idx} className="bg-slate-700 text-slate-300 text-xs">
                          {specialty}
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

      {/* Partner Programs */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Partner Programs</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the partner program that best fits your business model and growth objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Reseller Program",
                tier: "Silver",
                description: "Perfect for VARs and resellers looking to add cybersecurity to their portfolio.",
                benefits: [
                  "Competitive pricing",
                  "Sales training",
                  "Marketing support",
                  "Technical support",
                  "Lead generation"
                ],
                requirements: [
                  "Established business",
                  "Security expertise",
                  "Sales commitment",
                  "Customer references"
                ],
                color: "slate"
              },
              {
                name: "System Integrator Program",
                tier: "Gold",
                description: "Designed for system integrators delivering comprehensive security solutions.",
                benefits: [
                  "Enhanced margins",
                  "Dedicated support",
                  "Joint marketing",
                  "Technical certification",
                  "Priority support"
                ],
                requirements: [
                  "Integration capabilities",
                  "Certified engineers",
                  "Project experience",
                  "Customer base"
                ],
                color: "cyan"
              },
              {
                name: "Strategic Alliance Program",
                tier: "Platinum",
                description: "For strategic partners with deep integration and joint go-to-market initiatives.",
                benefits: [
                  "Highest margins",
                  "Executive sponsorship",
                  "Joint development",
                  "Global support",
                  "Co-marketing funds"
                ],
                requirements: [
                  "Strategic alignment",
                  "Global presence",
                  "Innovation partnership",
                  "Market leadership"
                ],
                color: "yellow"
              }
            ].map((program, index) => (
              <Card key={index} className={`bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 ${
                program.color === 'cyan' ? 'ring-2 ring-cyan-600' : ''
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-white">{program.name}</CardTitle>
                    <Badge className={`${
                      program.color === 'yellow' ? 'bg-yellow-900/30 text-yellow-300 border-yellow-700' :
                      program.color === 'cyan' ? 'bg-cyan-900/30 text-cyan-300 border-cyan-700' :
                      'bg-slate-800/30 text-slate-300 border-slate-700'
                    }`}>
                      {program.tier}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-300">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {program.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-slate-300 text-sm">
                            <CheckCircle className="text-cyan-400 mr-2" size={14} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {program.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-slate-300 text-sm">
                            <CheckCircle className="text-slate-400 mr-2" size={14} />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className={`w-full ${
                      program.color === 'cyan' ? 'bg-[#021346] hover:bg-[#021346]/90' :
                      program.color === 'yellow' ? 'bg-yellow-600 hover:bg-yellow-700' :
                      'bg-slate-600 hover:bg-slate-700'
                    } text-white`}>
                      Learn More
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Success Stories */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Partner Success Stories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how our partners have grown their business and delivered value to their clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                partner: "TechSecure Solutions",
                industry: "Managed Security Services",
                result: "300% revenue growth in 2 years",
                quote: "Partnering with CyberShield Pro has transformed our business. We've been able to offer enterprise-grade security solutions to our clients and significantly grow our revenue.",
                author: "John Smith, CEO",
                metrics: ["300% Revenue Growth", "50+ New Clients", "95% Customer Satisfaction"]
              },
              {
                partner: "CloudGuard Partners",
                industry: "Cloud Security",
                result: "Expanded to 5 new markets",
                quote: "The partnership has enabled us to expand our cloud security offerings and enter new markets. The support and training we received has been exceptional.",
                author: "Sarah Johnson, Managing Director",
                metrics: ["5 New Markets", "200% Client Growth", "90% Partner Satisfaction"]
              }
            ].map((story, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-white">{story.partner}</CardTitle>
                    <Badge className="bg-green-900/30 text-green-300 border-green-700">Success Story</Badge>
                  </div>
                  <CardDescription className="text-cyan-400">{story.industry}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-300 italic">"{story.quote}"</p>
                    <div className="text-slate-400 text-sm">- {story.author}</div>
                    <div className="grid grid-cols-3 gap-4">
                      {story.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-slate-700 rounded-lg">
                          <div className="text-cyan-400 font-bold text-sm">{metric}</div>
                        </div>
                      ))}
                    </div>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join our partner ecosystem and help us deliver world-class cybersecurity solutions to organizations worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100 font-semibold px-8 py-4 rounded-lg text-lg">
              Become a Partner
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg text-lg">
              Download Partner Kit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Mega Footer */}
      <Footer />    </div>
  );
};

export default Partners;
