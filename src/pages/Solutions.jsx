import React from 'react';
import { Shield, Lock, Eye, Globe, Zap, Target, CheckCircle, ArrowRight, Building, Server, Database, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header currentPage="Solutions" />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Security Solutions
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Comprehensive security solutions designed for different industries and organizational needs. 
            From enterprise-grade platforms to specialized industry solutions.
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry-Specific Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored security solutions designed to meet the unique challenges and compliance requirements of different industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="text-cyan-400" size={48} />,
                title: "Financial Services",
                description: "Advanced security solutions for banks, credit unions, and financial institutions with strict regulatory requirements.",
                features: ["PCI DSS compliance", "Fraud detection", "Transaction monitoring", "Regulatory reporting"],
                compliance: "PCI DSS, SOX, GLBA"
              },
              {
                icon: <Server className="text-cyan-400" size={48} />,
                title: "Healthcare",
                description: "HIPAA-compliant security solutions to protect patient data and ensure healthcare system integrity.",
                features: ["HIPAA compliance", "Patient data protection", "Medical device security", "Clinical workflow security"],
                compliance: "HIPAA, HITECH, FDA"
              },
              {
                icon: <Database className="text-cyan-400" size={48} />,
                title: "Government",
                description: "High-security solutions for government agencies with strict data classification and access controls.",
                features: ["FISMA compliance", "Data classification", "Secure communications", "Incident response"],
                compliance: "FISMA, FedRAMP, NIST"
              },
              {
                icon: <Globe className="text-cyan-400" size={48} />,
                title: "E-commerce",
                description: "Comprehensive security for online retailers protecting customer data and payment information.",
                features: ["Payment security", "Customer data protection", "Website security", "Fraud prevention"],
                compliance: "PCI DSS, GDPR, CCPA"
              },
              {
                icon: <Smartphone className="text-cyan-400" size={48} />,
                title: "Technology",
                description: "Advanced security solutions for tech companies protecting intellectual property and customer data.",
                features: ["API security", "Cloud security", "DevSecOps", "Threat intelligence"],
                compliance: "SOC 2, ISO 27001, GDPR"
              },
              {
                icon: <Shield className="text-cyan-400" size={48} />,
                title: "Manufacturing",
                description: "Industrial security solutions protecting operational technology and supply chain integrity.",
                features: ["OT security", "Supply chain security", "IoT protection", "Operational continuity"],
                compliance: "ISO 27001, NIST, IEC 62443"
              }
            ].map((solution, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-cyan-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
                <CardHeader>
                  <div className="mb-4">{solution.icon}</div>
                  <CardTitle className="text-xl text-white">{solution.title}</CardTitle>
                  <CardDescription className="text-slate-300">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="text-cyan-400 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700">
                      Compliance: {solution.compliance}
                    </Badge>
                  </div>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    Learn More
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Technology Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cutting-edge security technologies and platforms to protect your digital infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "SIEM Platform",
                description: "Advanced Security Information and Event Management platform for comprehensive threat detection and response.",
                features: ["Real-time monitoring", "Threat correlation", "Automated response", "Compliance reporting"],
                icon: <Eye className="text-cyan-400" size={32} />
              },
              {
                title: "Zero Trust Architecture",
                description: "Implement zero trust security model with continuous verification and least privilege access.",
                features: ["Identity verification", "Device trust", "Network segmentation", "Continuous monitoring"],
                icon: <Lock className="text-cyan-400" size={32} />
              },
              {
                title: "Cloud Security Platform",
                description: "Comprehensive cloud security solution for multi-cloud environments and hybrid infrastructure.",
                features: ["Multi-cloud support", "Data encryption", "Access management", "Compliance automation"],
                icon: <Globe className="text-cyan-400" size={32} />
              },
              {
                title: "AI-Powered Threat Detection",
                description: "Machine learning-based threat detection and response system for advanced persistent threats.",
                features: ["Behavioral analysis", "Anomaly detection", "Predictive analytics", "Automated response"],
                icon: <Zap className="text-cyan-400" size={32} />
              }
            ].map((solution, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-600 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{solution.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                    <p className="text-slate-300 mb-4">{solution.description}</p>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300 text-sm">
                          <CheckCircle className="text-cyan-400 mr-2" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Implementation Process</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful implementation and deployment of security solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Comprehensive security assessment to understand your current state and requirements."
              },
              {
                step: "02",
                title: "Design",
                description: "Custom solution design tailored to your specific needs and compliance requirements."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Professional deployment and configuration of security solutions with minimal disruption."
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring, tuning, and optimization to ensure maximum security effectiveness."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Find the Right Solution for Your Organization</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Our security experts will help you choose and implement the perfect security solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100 font-semibold px-8 py-4 rounded-lg text-lg">
              Schedule Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg text-lg">
              Download Solutions Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <Footer />
    </div>
  );
};

export default Solutions;
