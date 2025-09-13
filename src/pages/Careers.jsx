import React from 'react';
import { Shield, Users, MapPin, Clock, ArrowRight, CheckCircle, Star, Award, Briefcase, GraduationCap, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Careers" />

      {/* Hero Section */}
      <section className="py-24 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Build the future of cybersecurity with us. Join a team of passionate experts dedicated to 
            protecting organizations worldwide from evolving cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#021346] hover:bg-[#021346]/90 text-white font-semibold px-8 py-4 rounded-lg text-lg">
              View Open Positions
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-[#021346] text-cyan-400 hover:bg-[#021346] hover:text-white px-8 py-4 rounded-lg text-lg">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We offer more than just a job - we provide a career path in the exciting world of cybersecurity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="text-cyan-400" size={48} />,
                title: "Competitive Benefits",
                description: "Comprehensive health, dental, vision, and retirement benefits with generous PTO."
              },
              {
                icon: <GraduationCap className="text-cyan-400" size={48} />,
                title: "Professional Development",
                description: "Continuous learning opportunities, certifications, and conference attendance."
              },
              {
                icon: <Heart className="text-cyan-400" size={48} />,
                title: "Work-Life Balance",
                description: "Flexible work arrangements, remote options, and wellness programs."
              },
              {
                icon: <Zap className="text-cyan-400" size={48} />,
                title: "Cutting-Edge Technology",
                description: "Work with the latest security tools and technologies in the industry."
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

      {/* Open Positions */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for your cybersecurity career.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Senior Security Engineer",
                department: "Engineering",
                location: "New York, NY",
                type: "Full-time",
                experience: "5+ years",
                description: "Lead the design and implementation of security solutions for enterprise clients.",
                requirements: ["CISSP certification", "5+ years experience", "Cloud security expertise", "Python/Go programming"],
                posted: "2 days ago"
              },
              {
                title: "Threat Intelligence Analyst",
                department: "Threat Intelligence",
                location: "London, UK",
                type: "Full-time",
                experience: "3+ years",
                description: "Analyze threat data and provide actionable intelligence to protect our clients.",
                requirements: ["Security analysis experience", "OSINT knowledge", "Malware analysis", "Threat hunting skills"],
                posted: "1 week ago"
              },
              {
                title: "Incident Response Manager",
                department: "Security Operations",
                location: "Singapore",
                type: "Full-time",
                experience: "7+ years",
                description: "Lead incident response teams and manage critical security incidents.",
                requirements: ["CISM certification", "7+ years experience", "Team leadership", "Crisis management"],
                posted: "3 days ago"
              },
              {
                title: "Security Consultant",
                department: "Professional Services",
                location: "Remote",
                type: "Full-time",
                experience: "4+ years",
                description: "Provide security consulting services to clients across various industries.",
                requirements: ["Consulting experience", "Multiple certifications", "Client-facing skills", "Travel availability"],
                posted: "5 days ago"
              },
              {
                title: "DevSecOps Engineer",
                department: "Engineering",
                location: "Toronto, Canada",
                type: "Full-time",
                experience: "3+ years",
                description: "Integrate security practices into development and operations workflows.",
                requirements: ["DevOps experience", "Security automation", "CI/CD pipelines", "Container security"],
                posted: "1 week ago"
              },
              {
                title: "Security Awareness Specialist",
                department: "Training",
                location: "Sydney, Australia",
                type: "Full-time",
                experience: "2+ years",
                description: "Develop and deliver security awareness training programs for clients.",
                requirements: ["Training experience", "Communication skills", "Security knowledge", "Content creation"],
                posted: "4 days ago"
              }
            ].map((job, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl text-white">{job.title}</CardTitle>
                    <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700">
                      {job.type}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-slate-400 mb-2">
                    <span className="flex items-center">
                      <Briefcase className="mr-1" size={14} />
                      {job.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="mr-1" size={14} />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1" size={14} />
                      {job.experience}
                    </span>
                  </div>
                  <CardDescription className="text-slate-300">{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <h4 className="text-sm font-semibold text-white">Key Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, idx) => (
                        <Badge key={idx} className="bg-slate-700 text-slate-300 text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Posted {job.posted}</span>
                    <Button className="bg-[#021346] hover:bg-[#021346]/90 text-white">
                      Apply Now
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Culture</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We foster a collaborative, innovative, and inclusive environment where everyone can thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We encourage creative thinking and embrace new technologies to stay ahead of threats.",
                icon: <Zap className="text-cyan-400" size={32} />
              },
              {
                title: "Collaborative Spirit",
                description: "We work together as one team, sharing knowledge and supporting each other's growth.",
                icon: <Users className="text-cyan-400" size={32} />
              },
              {
                title: "Continuous Learning",
                description: "We invest in our people's development through training, certifications, and conferences.",
                icon: <GraduationCap className="text-cyan-400" size={32} />
              },
              {
                title: "Work-Life Balance",
                description: "We believe in flexible work arrangements and support our team's well-being.",
                icon: <Heart className="text-cyan-400" size={32} />
              },
              {
                title: "Diversity & Inclusion",
                description: "We celebrate diversity and create an inclusive environment for all team members.",
                icon: <Award className="text-cyan-400" size={32} />
              },
              {
                title: "Impact-Driven",
                description: "We're motivated by the positive impact we make in protecting organizations worldwide.",
                icon: <Shield className="text-cyan-400" size={32} />
              }
            ].map((value, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-[#021346] transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-slate-300">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Team Says</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from our team members about their experience working at CyberShield Pro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Senior Security Engineer",
                quote: "Working at CyberShield Pro has been incredible. The team is supportive, the technology is cutting-edge, and I'm constantly learning new things.",
                rating: 5
              },
              {
                name: "Michael Rodriguez",
                role: "Threat Intelligence Analyst",
                quote: "The culture here is amazing. Everyone is passionate about cybersecurity and genuinely cares about protecting our clients.",
                rating: 5
              },
              {
                name: "Emily Watson",
                role: "Incident Response Manager",
                quote: "I've grown so much professionally since joining. The company invests in our development and provides great opportunities for advancement.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <CardDescription className="text-slate-300 italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Don't see a position that matches your skills? We're always looking for talented individuals 
            to join our growing team. Send us your resume and let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100 font-semibold px-8 py-4 rounded-lg text-lg">
              View All Positions
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg text-lg">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Mega Footer */}
      <Footer />    </div>
  );
};

export default Careers;
