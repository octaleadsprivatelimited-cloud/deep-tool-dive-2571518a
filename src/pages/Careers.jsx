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
      <Header currentPage="Membership" />

      {/* Hero Section */}
      <section className="py-24 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Volunteer & Opportunities
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Contribute your time and skills to strengthen Kamma communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#021346] hover:bg-[#021346]/90 text-white font-semibold px-8 py-4 rounded-lg text-lg">
              Explore Roles
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-[#021346] text-cyan-400 hover:bg-[#021346] hover:text-white px-8 py-4 rounded-lg text-lg">
              Sign Up to Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Volunteer With Us?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Make a meaningful impact through culture, education, and community initiatives.
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
                title: "Community Impact",
                description: "Create visible impact across chapters and programs."
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

      {/* Volunteer Roles */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Volunteer Roles</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore current volunteer opportunities with chapters and federation programs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Chapter Coordinator",
                department: "Chapters",
                location: "Hyderabad, India",
                type: "Volunteer",
                experience: "2+ years",
                description: "Coordinate local events and member engagement.",
                requirements: ["Organizing skills", "Communication", "Community spirit"],
                posted: "2 days ago"
              },
              {
                title: "Youth Program Mentor",
                department: "Programs",
                location: "Dallas, USA",
                type: "Volunteer",
                experience: "3+ years",
                description: "Mentor students and young professionals.",
                requirements: ["Mentoring experience", "Time commitment", "Professional expertise"],
                posted: "1 week ago"
              },
              {
                title: "Media & Communications Lead",
                department: "Communications",
                location: "Remote",
                type: "Volunteer",
                experience: "2+ years",
                description: "Manage social media and newsletters.",
                requirements: ["Writing", "Design basics", "Consistency"],
                posted: "3 days ago"
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
                      Express Interest
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Federation Values */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We foster a collaborative, innovative, and inclusive environment where everyone can thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Unity",
                description: "We strengthen bonds across global Kamma communities.",
                icon: <Zap className="text-cyan-400" size={32} />
              },
              {
                title: "Service",
                description: "We promote philanthropy and community service.",
                icon: <Users className="text-cyan-400" size={32} />
              },
              {
                title: "Progress",
                description: "We empower youth, professionals, and entrepreneurs.",
                icon: <GraduationCap className="text-cyan-400" size={32} />
              },
              {
                title: "Work-Life Balance",
                description: "We believe in flexible work arrangements and support our team's well-being.",
                icon: <Heart className="text-cyan-400" size={32} />
              },
              {
                title: "Inclusion",
                description: "We welcome members from all backgrounds and regions.",
                icon: <Award className="text-cyan-400" size={32} />
              },
              {
                title: "Impact-Driven",
                description: "We create measurable outcomes for our communities.",
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

      {/* Member Testimonials */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Members Say</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from our team members about their experience working at CyberShield Pro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Harini T",
                role: "Volunteer, Hyderabad Chapter",
                quote: "I’ve met inspiring mentors and contributed to cultural events that brought our community together.",
                rating: 5
              },
              {
                name: "Raj K",
                role: "Member, Dallas Chapter",
                quote: "The federation helped me network with professionals and launch a mentorship circle.",
                rating: 5
              },
              {
                name: "Anita P",
                role: "Student, Scholarship Recipient",
                quote: "The scholarship and guidance I received have been life-changing.",
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
          <h2 className="text-4xl font-bold mb-6">Ready to Volunteer?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Don’t see a role listed? We’re always looking for passionate volunteers. Share your interests and we’ll connect you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100 font-semibold px-8 py-4 rounded-lg text-lg">
              View All Roles
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg text-lg">
              Submit Your Details
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
