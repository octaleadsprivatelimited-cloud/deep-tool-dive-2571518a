import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, ArrowRight, Globe, Users, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Contact" />

      {/* Hero Section */}
      <section className="py-24 text-white relative overflow-hidden" style={{backgroundColor: '#003386'}}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-cyan-950/80"></div>
        </div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Get in touch with Kamma Global Federation for membership, chapters, events, and media.
          </p>
        </div>
      </section>

      {/* White Transparent Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm border-t border-white/10 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect With the Federation
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Questions about membership, chapters, donations, or media? We’re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs and urgency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="text-cyan-400" size={48} />,
                title: "General Inquiries",
                description: "Membership, chapters, and programs",
                contact: "+91 0000-000-000",
                availability: "Mon-Fri 9AM-6PM",
                responseTime: "< 24 hours"
              },
              {
                icon: <Mail className="text-cyan-400" size={48} />,
                title: "Email",
                description: "Send us an email for detailed inquiries",
                contact: "info@kammaglobal.org",
                availability: "24/7",
                responseTime: "< 2 days"
              },
              {
                icon: <Headphones className="text-cyan-400" size={48} />,
                title: "Donations & Sponsorships",
                description: "Support the federation’s programs",
                contact: "donate@kammaglobal.org",
                availability: "Mon-Fri 9AM-6PM",
                responseTime: "< 2 days"
              }
            ].map((method, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-[#021346] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 text-center">
                <CardHeader>
                  <div className="mb-4">{method.icon}</div>
                  <CardTitle className="text-xl text-white">{method.title}</CardTitle>
                  <CardDescription className="text-slate-300">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-cyan-400 font-semibold">{method.contact}</div>
                    <div className="text-slate-300 text-sm">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="mr-1" size={14} />
                        {method.availability}
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="mr-1" size={14} />
                        {method.responseTime}
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-[#021346] hover:bg-[#021346]/90 text-white">
                    Contact Now
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-slate-300 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <Input 
                      type="text" 
                      placeholder="John" 
                      className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-[#021346]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                    <Input 
                      type="text" 
                      placeholder="Doe" 
                      className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-[#021346]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-[#021346]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">City/Chapter</label>
                  <Input 
                    type="text" 
                    placeholder="Hyderabad / Dallas / London" 
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-[#021346]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <Input 
                    type="text" 
                    placeholder="Membership / Chapter / Media / Donation" 
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-[#021346]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help..."
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-[#021346] min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-[#021346] hover:bg-[#021346]/90 text-white font-semibold py-3">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Federation Chapters</h2>
              <p className="text-slate-300 mb-8">
                Reach out to a nearby chapter or schedule a virtual meeting.
              </p>
              <div className="space-y-6">
                {[
                  {
                    city: "Hyderabad, India",
                    type: "Chapter Office",
                    address: "Madhapur",
                    phone: "+91 0000-000-000",
                    email: "hyderabad@kammaglobal.org",
                    hours: "Mon-Fri 9AM-6PM"
                  },
                  {
                    city: "Dallas, USA",
                    type: "Chapter Office",
                    address: "Plano, TX",
                    phone: "+1 (000) 000-0000",
                    email: "dallas@kammaglobal.org",
                    hours: "Mon-Fri 9AM-6PM"
                  },
                  {
                    city: "London, UK",
                    type: "Chapter Office",
                    address: "Central London",
                    phone: "+44 0000 000000",
                    email: "london@kammaglobal.org",
                    hours: "Mon-Fri 9AM-6PM"
                  }
                ].map((office, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg text-white">{office.city}</CardTitle>
                        <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700">
                          {office.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-slate-300">
                        <div className="flex items-center">
                          <MapPin className="mr-2" size={16} />
                          {office.address}
                        </div>
                        <div className="flex items-center">
                          <Phone className="mr-2" size={16} />
                          {office.phone}
                        </div>
                        <div className="flex items-center">
                          <Mail className="mr-2" size={16} />
                          {office.email}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2" size={16} />
                          {office.hours}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find answers to common questions about our services and solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I become a member?",
                answer: "Visit the Membership page, choose a tier, and submit the application form. A chapter representative will reach out."
              },
              {
                question: "How can I start a new chapter?",
                answer: "Contact us with your city details. We’ll share the chapter handbook and onboarding process."
              },
              {
                question: "Do you offer scholarships?",
                answer: "Yes. Scholarship announcements and application packs are published in the Resources page."
              },
              {
                question: "How do donations help?",
                answer: "Donations fund education, healthcare drives, cultural events, and entrepreneurship initiatives."
              },
              {
                question: "How do I volunteer?",
                answer: "Reach out via the Membership page indicating your interests. We’ll connect you with your local chapter."
              },
              {
                question: "Where can I find event schedules?",
                answer: "Check the Events page for upcoming programs and registration details."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{backgroundColor: '#003386'}}>
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join the federation, participate in a chapter, or partner with us to create impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100 font-semibold px-8 py-4 rounded-lg text-lg">
              Become a Member
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg text-lg">
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Mega Footer */}
      <Footer />    </div>
  );
};

export default Contact;
