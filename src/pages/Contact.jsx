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
    <div className="min-h-screen bg-white text-slate-900 text-slate-900">
      <Header currentPage="Contact" />

      {/* Hero Section */}
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
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
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Ready to strengthen your organization's security? Get in touch with our cybersecurity experts 
            for a consultation or to learn more about our services.
          </p>
        </div>
      </section>

      {/* White Transparent Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm border-t border-white/10 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get In Touch With Our Experts
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Ready to strengthen your organization's security? Our cybersecurity experts are here to help 
              with consultation and to learn more about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white text-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs and urgency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Phone className="text-cyan-400" size={48} />,
                title: "Emergency Hotline",
                description: "24/7 emergency response for critical security incidents",
                contact: "+1 (555) 911-SEC",
                availability: "24/7",
                responseTime: "Immediate"
              },
              {
                icon: <MessageSquare className="text-cyan-400" size={48} />,
                title: "General Inquiries",
                description: "Questions about our services and solutions",
                contact: "+1 (555) 123-4567",
                availability: "Mon-Fri 9AM-6PM EST",
                responseTime: "< 2 hours"
              },
              {
                icon: <Mail className="text-cyan-400" size={48} />,
                title: "Email Support",
                description: "Send us an email for detailed inquiries",
                contact: "info@cybershieldpro.com",
                availability: "24/7",
                responseTime: "< 4 hours"
              },
              {
                icon: <Headphones className="text-cyan-400" size={48} />,
                title: "Technical Support",
                description: "Support for existing clients and technical issues",
                contact: "support@cybershieldpro.com",
                availability: "24/7",
                responseTime: "< 1 hour"
              }
            ].map((method, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 hover:border-cyan-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 text-center">
                <CardHeader>
                  <div className="mb-4">{method.icon}</div>
                  <CardTitle className="text-xl text-slate-900">{method.title}</CardTitle>
                  <CardDescription className="text-slate-600">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="text-cyan-400 font-semibold">{method.contact}</div>
                    <div className="text-slate-600 text-sm">
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
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-slate-900">
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
      <section className="py-20 bg-white text-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">First Name</label>
                    <Input 
                      type="text" 
                      placeholder="John" 
                      className="bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Last Name</label>
                    <Input 
                      type="text" 
                      placeholder="Doe" 
                      className="bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@company.com" 
                    className="bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Company</label>
                  <Input 
                    type="text" 
                    placeholder="Your Company Name" 
                    className="bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Subject</label>
                  <Input 
                    type="text" 
                    placeholder="How can we help you?" 
                    className="bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your security needs and how we can help..."
                    className="bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-600 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-slate-900 font-semibold py-3">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
              <p className="text-slate-600 mb-8">
                Visit us at any of our global offices or schedule a virtual meeting.
              </p>
              <div className="space-y-6">
                {[
                  {
                    city: "New York, USA",
                    type: "Global Headquarters",
                    address: "123 Cybersecurity Ave, New York, NY 10001",
                    phone: "+1 (555) 123-4567",
                    email: "ny@cybershieldpro.com",
                    hours: "Mon-Fri 9AM-6PM EST"
                  },
                  {
                    city: "London, UK",
                    type: "European Headquarters",
                    address: "456 Security Street, London EC1A 4HD, UK",
                    phone: "+44 20 7946 0958",
                    email: "london@cybershieldpro.com",
                    hours: "Mon-Fri 9AM-6PM GMT"
                  },
                  {
                    city: "Singapore",
                    type: "Asia-Pacific Headquarters",
                    address: "789 Cyber Boulevard, Singapore 018956",
                    phone: "+65 6123 4567",
                    email: "singapore@cybershieldpro.com",
                    hours: "Mon-Fri 9AM-6PM SGT"
                  }
                ].map((office, index) => (
                  <Card key={index} className="bg-slate-50 border-slate-200">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-lg text-slate-900">{office.city}</CardTitle>
                        <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700">
                          {office.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-slate-600">
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
      <section className="py-20 bg-white text-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you respond to a security incident?",
                answer: "Our emergency response team is available 24/7 and can respond to critical incidents within minutes. For non-critical issues, we typically respond within 2-4 hours."
              },
              {
                question: "Do you provide services for small businesses?",
                answer: "Yes, we offer scalable security solutions for organizations of all sizes, from small businesses to large enterprises. We can customize our services to fit your budget and needs."
              },
              {
                question: "What compliance standards do you support?",
                answer: "We support all major compliance standards including SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR, and industry-specific regulations. Our team can help you achieve and maintain compliance."
              },
              {
                question: "How do you ensure data privacy and security?",
                answer: "We follow strict data protection protocols and are SOC 2 Type II certified. All data is encrypted in transit and at rest, and we maintain strict access controls and monitoring."
              },
              {
                question: "Can you help with existing security infrastructure?",
                answer: "Absolutely. We can assess your current security setup, identify gaps, and help optimize your existing tools and processes. We work with all major security platforms and vendors."
              },
              {
                question: "What training do you provide for employees?",
                answer: "We offer comprehensive security awareness training including phishing simulations, interactive modules, and regular updates on emerging threats. Training can be customized for different roles and departments."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-slate-900">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Don't wait for a security incident. Contact us today for a free security assessment 
            and discover how we can protect your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100 font-semibold px-8 py-4 rounded-lg text-lg">
              Schedule Free Assessment
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-slate-900 hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg text-lg">
              Call Emergency Hotline
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
