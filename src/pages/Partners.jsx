import React from 'react';
import { Shield, Handshake, Award, CheckCircle, ArrowRight, Globe, Users, Zap, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Partners = () => {
  return (
    <div className="min-h-screen text-black" style={{backgroundColor: 'white'}}>
      <Header currentPage="Partners" />

      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{backgroundColor: 'white'}}>
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
            Partners & Sponsors
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            We collaborate with organizations and sponsors to support community programs, education, and culture.
          </p>
        </div>
      </section>

      {/* White Transparent Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm border-t border-white/10 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Together with our partners, we enable impactful programs across chapters worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sponsor KGF */}
      <section className="py-20 text-black" style={{backgroundColor: 'white'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Why Sponsor KGF?</h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              By sponsoring KGF events and initiatives, you're not just promoting your brand – you're investing in community development and cultural preservation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="text-[#b99b4c]" size={48} />,
                title: "Community Reach",
                description: "Connect with over 1,000+ Kamma professionals and families from around the world"
              },
              {
                icon: <Globe className="text-[#b99b4c]" size={48} />,
                title: "Global Visibility",
                description: "Gain international exposure through our global network and digital platforms"
              },
              {
                icon: <Award className="text-[#b99b4c]" size={48} />,
                title: "Brand Recognition",
                description: "Enhance your brand reputation through association with community development"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white border-slate-300 hover:border-[#b99b4c]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#b99b4c]/20 text-center shadow-md">
                <CardHeader>
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <CardTitle className="text-xl text-black mb-3">{benefit.title}</CardTitle>
                  <CardDescription className="text-slate-700 leading-relaxed">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Categories */}
      <section className="py-20 text-black" style={{backgroundColor: 'white'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Sponsor Categories</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Ways to partner and support federation programs and events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Title Sponsor", category: "Annual Programs", description: "Primary supporter of flagship programs and global meets.", features: ["Stage branding", "Media mentions", "Meet leadership", "Prime booth"], logo: "TS", tier: "Platinum" },
              { name: "Gold Sponsor", category: "Education & Youth", description: "Supports scholarships and youth initiatives.", features: ["Scholarship branding", "Media mentions", "Chapter features", "Booth"], logo: "GS", tier: "Gold" },
              { name: "Community Partner", category: "Chapters", description: "Supports local events and community drives.", features: ["Event branding", "Chapter mentions", "Volunteer engagement", "Tables"], logo: "CP", tier: "Silver" }
            ].map((partner, index) => (
              <Card key={index} className="bg-white border-slate-300 hover:border-[#b99b4c] transition-all duration-300 hover:shadow-2xl hover:shadow-[#b99b4c]/20 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-[#b99b4c] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {partner.logo}
                    </div>
                    <Badge className={`${
                      partner.tier === 'Platinum' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' :
                      partner.tier === 'Gold' ? 'bg-gray-100 text-gray-800 border-gray-300' :
                      'bg-orange-100 text-orange-800 border-orange-300'
                    }`}>
                      {partner.tier}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-black">{partner.name}</CardTitle>
                  <CardDescription className="text-[#b99b4c]">{partner.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{partner.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-black">Key Features:</h4>
                    <ul className="space-y-1">
                      {partner.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-700 text-sm">
                          <CheckCircle className="text-[#b99b4c] mr-2" size={14} />
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

      {/* Community Partners */}
      <section className="py-20 text-black" style={{backgroundColor: 'white'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Community Partners</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Our trusted channel partners help us deliver cybersecurity solutions to clients worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Local Businesses Collective", type: "Community Partner", region: "Hyderabad", description: "Supporting cultural events and youth programs.", specialties: ["Events", "Scholarships", "Volunteer support", "Logistics"], years: "3+ years" },
              { name: "Tech Professionals Network", type: "Community Partner", region: "Dallas", description: "Mentorship and networking for students and professionals.", specialties: ["Mentorship", "Workshops", "Career talks", "Networking"], years: "2+ years" },
              { name: "Cultural Association UK", type: "Community Partner", region: "London", description: "Promoting cultural programs and community service.", specialties: ["Cultural", "Fundraising", "Volunteer", "Media"], years: "4+ years" }
            ].map((partner, index) => (
              <Card key={index} className="bg-white border-slate-300 hover:border-[#b99b4c] transition-all duration-300 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-black">{partner.name}</CardTitle>
                  <Badge className="bg-[#b99b4c]/15 text-[#b99b4c] border-[#b99b4c]/40">{partner.type}</Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                    <span className="flex items-center">
                      <Globe className="mr-1" size={14} />
                      {partner.region}
                    </span>
                    <span className="flex items-center">
                      <Star className="mr-1" size={14} />
                      {partner.years}
                    </span>
                  </div>
                  <CardDescription className="text-slate-700">{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-black">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.specialties.map((specialty, idx) => (
                        <Badge key={idx} className="bg-slate-100 text-slate-700 text-xs border-slate-300">
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

      {/* Sponsorship Tiers */}
      <section className="py-20 text-black" style={{backgroundColor: 'white'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Sponsorship Tiers</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Choose the partner program that best fits your business model and growth objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Community Partner", tier: "Silver", description: "Support local events and initiatives.", benefits: ["Logo on event collateral", "Chapter shout-outs", "Booth/table", "Volunteer engagement", "Tickets"], requirements: ["Basic sponsorship", "Local presence"], color: "slate" },
              { name: "Program Sponsor", tier: "Gold", description: "Fund scholarships and youth programs.", benefits: ["Branding on materials", "Media mentions", "Speaking slots", "Mentor access", "VIP tickets"], requirements: ["Annual sponsorship", "Program alignment"], color: "cyan" },
              { name: "Title Sponsor", tier: "Platinum", description: "Lead supporter of flagship programs and global meet.", benefits: ["Stage branding", "Prime visibility", "Leadership meet", "Press features", "All-access passes"], requirements: ["Strategic alignment", "Annual commitment"], color: "yellow" }
            ].map((program, index) => (
              <Card key={index} className={`bg-white border-slate-300 hover:border-[#b99b4c] transition-all duration-300 hover:shadow-2xl hover:shadow-[#b99b4c]/20 shadow-md ${
                program.color === 'cyan' ? 'ring-2 ring-[#b99b4c]' : ''
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-black">{program.name}</CardTitle>
                    <Badge className={`${
                      program.color === 'yellow' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' :
                      program.color === 'cyan' ? 'bg-[#b99b4c]/20 text-[#b99b4c] border-[#b99b4c]/40' :
                      'bg-slate-100 text-slate-700 border-slate-300'
                    }`}>
                      {program.tier}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-700">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {program.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-slate-700 text-sm">
                            <CheckCircle className="text-[#b99b4c] mr-2" size={14} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {program.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-slate-700 text-sm">
                            <CheckCircle className="text-slate-500 mr-2" size={14} />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className={`w-full ${
                      program.color === 'cyan' ? 'bg-[#b99b4c] hover:bg-[#a3893f]' :
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
                <CardDescription className="text-[#b99b4c]">{story.industry}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-300 italic">"{story.quote}"</p>
                    <div className="text-slate-400 text-sm">- {story.author}</div>
                    <div className="grid grid-cols-3 gap-4">
                      {story.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-slate-700 rounded-lg">
                          <div className="text-[#b99b4c] font-bold text-sm">{metric}</div>
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
      <section className="py-20 text-black" style={{backgroundColor: 'white'}}>
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 text-black">Ready to Partner With Us?</h2>
          <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
            Support culture, education, and community programs across global Kamma communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-black/90 font-semibold px-8 py-4 rounded-lg text-lg">
              Become a Partner
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg text-lg">
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
