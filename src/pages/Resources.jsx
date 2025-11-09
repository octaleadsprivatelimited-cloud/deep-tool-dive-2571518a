import React from 'react';
import { FileText, Download, Calendar, Users, BookOpen, Video, ArrowRight, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Resources = () => {
  return (
    <div className="min-h-screen text-black" style={{backgroundColor: 'white'}}>
      <Header currentPage="Resources" />

      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{backgroundColor: 'white'}}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
            alt="Security Resources" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-cyan-950/80"></div>
        </div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Federation Resources
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Access publications, community stories, media, and guides from Kamma Global Federation.
          </p>
        </div>
      </section>

      {/* White Transparent Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm border-t border-white/10 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community Knowledge Hub
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Explore our publications, reports, and materials supporting culture, education, and service.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 text-black" style={{backgroundColor: 'white'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-black">Resource Categories</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Explore our extensive collection of security resources organized by category and topic.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText className="text-[#b99b4c]" size={48} />,
                title: "Publications",
                count: "25+",
                description: "Reports and publications on culture, education, entrepreneurship, and community."
              },
              {
                icon: <BookOpen className="text-[#b99b4c]" size={48} />,
                title: "Community Stories",
                count: "40+",
                description: "Impact stories from chapters and members across the globe."
              },
              {
                icon: <Video className="text-[#b99b4c]" size={48} />,
                title: "Media",
                count: "60+",
                description: "Videos and talks from federation events and leaders."
              },
              {
                icon: <Download className="text-[#b99b4c]" size={48} />,
                title: "Guides & Templates",
                count: "30+",
                description: "Guides, forms, and templates for programs, events, and chapters."
              }
            ].map((category, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 text-center">
                <CardHeader>
                  <div className="mb-4">{category.icon}</div>
                  <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                  <div className="text-[#b99b4c] font-bold text-2xl mb-2">{category.count}</div>
                  <CardDescription className="text-slate-300">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-[#021346] hover:bg-[#021346]/90 text-white">
                    Explore Resources
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 text-white" style={{backgroundColor: 'white'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured Resources</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most popular and recently updated security resources.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                type: "Report",
                title: "Global Chapters Annual Report",
                description: "Highlights of chapter activities, impact metrics, and programs across regions.",
                date: "December 15, 2024",
                readTime: "15 min read",
                downloads: "2,847",
                rating: 4.9,
                featured: true
              },
              {
                type: "Story",
                title: "Youth Scholarship Winners",
                description: "Recognizing outstanding students supported by the federation scholarship program.",
                date: "December 10, 2024",
                readTime: "8 min read",
                downloads: "1,523",
                rating: 4.8,
                featured: true
              },
              {
                type: "Video",
                title: "Global Meet Highlights",
                description: "Key moments and speeches from the latest global federation meet.",
                date: "December 8, 2024",
                readTime: "45 min watch",
                downloads: "3,421",
                rating: 4.9,
                featured: true
              },
              {
                type: "Form",
                title: "Chapter Registration Template",
                description: "Standard form to register and onboard a new chapter.",
                date: "December 5, 2024",
                readTime: "5 min read",
                downloads: "4,156",
                rating: 4.7,
                featured: false
              },
              {
                type: "Guide",
                title: "Event Hosting Checklist",
                description: "Step-by-step checklist for running successful community events.",
                date: "November 28, 2024",
                readTime: "20 min read",
                downloads: "2,134",
                rating: 4.8,
                featured: false
              },
              {
                type: "Story",
                title: "Entrepreneurship Mentorship Impact",
                description: "Member success stories from mentorship and incubation initiatives.",
                date: "November 20, 2024",
                readTime: "12 min read",
                downloads: "1,789",
                rating: 4.6,
                featured: false
              }
            ].map((resource, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-[#b99b4c]/15 text-[#b99b4c] border-[#b99b4c]/40">
                      {resource.type}
                    </Badge>
                    {resource.featured && (
                      <Badge className="bg-yellow-900/30 text-yellow-300 border-yellow-700">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg text-white">{resource.title}</CardTitle>
                  <CardDescription className="text-slate-300">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {resource.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1" size={14} />
                        {resource.readTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span className="flex items-center">
                        <Download className="mr-1" size={14} />
                        {resource.downloads} downloads
                      </span>
                      <span className="flex items-center">
                        <Star className="mr-1" size={14} />
                        {resource.rating}/5
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#021346] hover:bg-[#021346]/90 text-white">
                    <Download className="mr-2" size={16} />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads & Forms */}
      <section className="py-20 text-white" style={{backgroundColor: 'white'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Downloads & Forms</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Download our free security tools and templates to help improve your organization's security posture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Membership Application Form",
                description: "Apply to become a federation member and join your nearest chapter.",
                features: ["Personal details", "Chapter preference", "Membership tier", "Consent"],
                downloads: "15,234",
                rating: 4.8
              },
              {
                title: "Event Proposal Template",
                description: "Template to propose and plan chapter events.",
                features: ["Event details", "Budget", "Volunteers", "Outcomes"],
                downloads: "12,567",
                rating: 4.7
              },
              {
                title: "Scholarship Application Pack",
                description: "Resources for students applying to federation scholarships.",
                features: ["Eligibility", "Documents", "Submission form", "Deadlines"],
                downloads: "8,934",
                rating: 4.9
              },
              {
                title: "Chapter Compliance Checklist",
                description: "Checklist for chapter operations and governance.",
                features: ["Bylaws", "Finance", "Meetings", "Reporting"],
                downloads: "6,789",
                rating: 4.6
              }
            ].map((tool, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-[#021346] transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#021346] rounded-lg flex items-center justify-center">
                      <Download className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                      <p className="text-slate-300">{tool.description}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-slate-300 text-sm">
                      <span className="w-2 h-2 bg-[#b99b4c] rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <span className="flex items-center">
                      <Download className="mr-1" size={14} />
                      {tool.downloads} downloads
                    </span>
                    <span className="flex items-center">
                      <Star className="mr-1" size={14} />
                      {tool.rating}/5
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-[#021346] hover:bg-[#021346]/90 text-white">
                  <Download className="mr-2" size={16} />
                  Download Tool
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 text-white" style={{backgroundColor: 'white'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Upcoming Events</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join upcoming federation events, cultural celebrations, and youth programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Meet 2025",
                type: "Conference",
                date: "January 15, 2025",
                time: "10:00 AM IST",
                duration: "Full day",
                speakers: "Community Leaders",
                description: "Annual gathering of chapters and members across the globe."
              },
              {
                title: "Youth Leadership Workshop",
                type: "Workshop",
                date: "January 22, 2025",
                time: "2:00 PM IST",
                duration: "4 hours",
                speakers: "Mentors & Alumni",
                description: "Skill-building for youth leaders across chapters."
              },
              {
                title: "Entrepreneurship Forum",
                type: "Summit",
                date: "February 5-7, 2025",
                time: "9:00 AM",
                duration: "3 days",
                speakers: "Founders & Investors",
                description: "Networking and mentorship for entrepreneurs and professionals."
              }
            ].map((event, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700">
                      {event.type}
                    </Badge>
                    <Badge className="bg-green-900/30 text-green-300 border-green-700">
                      Upcoming
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white">{event.title}</CardTitle>
                  <CardDescription className="text-slate-300">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4 text-sm text-slate-300">
                    <div className="flex items-center">
                      <Calendar className="mr-2" size={14} />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2" size={14} />
                      Duration: {event.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2" size={14} />
                      Speakers: {event.speakers}
                    </div>
                  </div>
                  <Button className="w-full bg-[#021346] hover:bg-[#021346]/90 text-white">
                    Register Now
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{backgroundColor: 'white'}}>
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with Resources</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Subscribe to receive publications, event updates, and opportunities from the federation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100 font-semibold px-8 py-4 rounded-lg text-lg">
              Subscribe to Newsletter
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg text-lg">
              Browse All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Mega Footer */}
      <Footer />    </div>
  );
};

export default Resources;
