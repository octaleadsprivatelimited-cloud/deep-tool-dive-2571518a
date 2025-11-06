import React from 'react';
import { Shield, Calendar, Clock, User, ArrowRight, ExternalLink, Tag, TrendingUp, Globe, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const News = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="News" />

      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{backgroundColor: '#003386'}}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="News & Updates" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-cyan-950/80"></div>
        </div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            News & Updates
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Follow federation announcements, chapter highlights, member stories, and event recaps.
          </p>
        </div>
      </section>

      {/* White Transparent Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm border-t border-white/10 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Informed With Latest Updates
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              News from chapters worldwide and updates on programs, initiatives, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Featured News</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Featured federation stories and announcements.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Featured Article */}
            <Card className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
              <div className="relative">
                <div className="h-64 text-white rounded-t-lg flex items-center justify-center" style={{backgroundColor: '#003386'}}>
                  <Shield className="text-white" size={64} />
                </div>
                <Badge className="absolute top-4 left-4 bg-red-900 text-red-300">Breaking News</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-slate-400 mb-2">
                  <span className="flex items-center">
                    <Calendar className="mr-1" size={14} />
                    December 15, 2024
                  </span>
                  <span className="flex items-center">
                    <User className="mr-1" size={14} />
                    Sarah Chen
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1" size={14} />
                    5 min read
                  </span>
                </div>
                <CardTitle className="text-2xl text-white">Global Meet 2025 Announced in Hyderabad</CardTitle>
                <CardDescription className="text-slate-300 text-lg">
                  The annual federation gathering will bring together chapters from across the world for three days of programs and networking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700">Company News</Badge>
                    <Badge className="bg-green-900/30 text-green-300 border-green-700">Award</Badge>
                  </div>
                  <Button className="bg-[#021346] hover:bg-[#021346]/90 text-white">
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Secondary Featured Articles */}
            <div className="space-y-6">
              {[
                {
                  title: "New AI-Powered Threat Detection Platform Launched",
                  excerpt: "Our latest innovation uses machine learning to detect advanced persistent threats in real-time.",
                  date: "December 12, 2024",
                  author: "Michael Rodriguez",
                  category: "Product Update",
                  readTime: "3 min read"
                },
                {
                  title: "Q4 2024 Threat Landscape Report Released",
                  excerpt: "Comprehensive analysis of emerging threats and attack trends for the fourth quarter.",
                  date: "December 10, 2024",
                  author: "Dr. Emily Watson",
                  category: "Research",
                  readTime: "7 min read"
                },
                {
                  title: "Partnership with Microsoft Azure Announced",
                  excerpt: "Enhanced cloud security solutions now available for Azure customers worldwide.",
                  date: "December 8, 2024",
                  author: "James Thompson",
                  category: "Partnership",
                  readTime: "4 min read"
                }
              ].map((article, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-slate-400 mb-2">
                      <span className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <User className="mr-1" size={14} />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1" size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-white">{article.title}</CardTitle>
                    <CardDescription className="text-slate-300">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700">{article.category}</Badge>
                      <Button variant="outline" className="text-cyan-400 border-[#021346] hover:bg-[#021346] hover:text-white">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry News */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Community News</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Updates from chapters, programs, and partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hyderabad Chapter Hosts Cultural Night",
                excerpt: "Hundreds attend performances and community awards.",
                date: "December 14, 2024",
                source: "Chapter Update",
                category: "Events",
                readTime: "6 min read",
                trending: true
              },
              {
                title: "Scholarship Applications Open",
                excerpt: "New education grants announced for 2025.",
                date: "December 13, 2024",
                source: "Programs",
                category: "Education",
                readTime: "5 min read",
                trending: false
              },
              {
                title: "Entrepreneurship Forum Expands",
                excerpt: "Startups showcase and mentorship circles grow across chapters.",
                date: "December 11, 2024",
                source: "Programs",
                category: "Entrepreneurship",
                readTime: "4 min read",
                trending: true
              },
              {
                title: "Health Drive in Chennai",
                excerpt: "Free screenings and wellness workshops for the community.",
                date: "December 9, 2024",
                source: "Chennai Chapter",
                category: "Health",
                readTime: "8 min read",
                trending: false
              },
              {
                title: "London Chapter Networking Night",
                excerpt: "Professionals and students connect for mentorship.",
                date: "December 7, 2024",
                source: "London Chapter",
                category: "Networking",
                readTime: "5 min read",
                trending: false
              },
              {
                title: "Partnerships Announced",
                excerpt: "New sponsors join to support 2025 programs.",
                date: "December 5, 2024",
                source: "Federation",
                category: "Partners",
                readTime: "7 min read",
                trending: true
              }
            ].map((article, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700">{article.category}</Badge>
                    {article.trending && (
                      <Badge className="bg-orange-900/30 text-orange-300 border-orange-700 flex items-center">
                        <TrendingUp className="mr-1" size={12} />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg text-white">{article.title}</CardTitle>
                  <CardDescription className="text-slate-300">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span className="flex items-center">
                        <Calendar className="mr-1" size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1" size={14} />
                        {article.readTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Source: {article.source}</span>
                      <Button variant="outline" className="text-cyan-400 border-[#021346] hover:bg-[#021346] hover:text-white">
                        <ExternalLink className="mr-1" size={14} />
                        Read
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Updates */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Federation Updates</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The latest announcements from Kamma Global Federation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "New Office Opening in Tokyo",
                description: "We're excited to announce the opening of our new office in Tokyo, Japan, expanding our presence in the Asia-Pacific region.",
                date: "December 6, 2024",
                type: "Company Expansion",
                icon: <Globe className="text-cyan-400" size={24} />
              },
              {
                title: "Employee Recognition Program Launched",
                description: "New program recognizes outstanding contributions from our team members with quarterly awards and recognition.",
                date: "December 4, 2024",
                type: "Company Culture",
                icon: <Award className="text-cyan-400" size={24} />
              },
              {
                title: "Security Research Lab Established",
                description: "New research facility dedicated to advancing cybersecurity technologies and threat intelligence capabilities.",
                date: "December 2, 2024",
                type: "Innovation",
                icon: <Shield className="text-cyan-400" size={24} />
              },
              {
                title: "Customer Success Program Enhanced",
                description: "Expanded customer success program provides dedicated support and proactive security recommendations.",
                date: "November 30, 2024",
                type: "Customer Service",
                icon: <User className="text-cyan-400" size={24} />
              }
            ].map((update, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {update.icon}
                    <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700">{update.type}</Badge>
                  </div>
                  <CardTitle className="text-lg text-white">{update.title}</CardTitle>
                  <CardDescription className="text-slate-300">{update.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">{update.date}</span>
                    <Button variant="outline" className="text-cyan-400 border-[#021346] hover:bg-[#021346] hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest cybersecurity news, company updates, 
              and industry insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:border-[#021346] focus:outline-none"
              />
              <Button className="bg-[#021346] hover:bg-[#021346]/90 text-white font-semibold px-6 py-3 rounded-lg">
                Subscribe
              </Button>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Get the latest updates about chapters, programs, and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100 font-semibold px-8 py-4 rounded-lg text-lg">
              Subscribe to Newsletter
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg text-lg">
              Follow Us on Social Media
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

export default News;
