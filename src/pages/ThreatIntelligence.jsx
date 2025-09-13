import React from 'react';
import { Shield, Eye, AlertTriangle, TrendingUp, Globe, Clock, Target, CheckCircle, ArrowRight, BarChart3, Activity, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ThreatIntelligence = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header currentPage="Threat Intelligence" />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Threat Intelligence
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Stay ahead of emerging threats with our advanced threat intelligence platform. 
            Real-time monitoring, analysis, and actionable intelligence to protect your organization.
          </p>
        </div>
      </section>

      {/* Live Threat Dashboard */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Live Threat Dashboard</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-time threat monitoring and analysis from our global threat intelligence network.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Threat Alerts */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="text-red-400 mr-2" size={24} />
                Active Threat Alerts
              </h3>
              <div className="space-y-4">
                {[
                  {
                    type: "Critical",
                    title: "Ransomware Campaign Detected",
                    description: "New ransomware variant targeting financial institutions",
                    time: "2 minutes ago",
                    color: "red"
                  },
                  {
                    type: "High",
                    title: "Phishing Campaign Active",
                    description: "Sophisticated phishing emails targeting healthcare sector",
                    time: "15 minutes ago",
                    color: "orange"
                  },
                  {
                    type: "Medium",
                    title: "DDoS Attack in Progress",
                    description: "Distributed denial of service attack on cloud infrastructure",
                    time: "1 hour ago",
                    color: "yellow"
                  },
                  {
                    type: "Low",
                    title: "Malware Sample Detected",
                    description: "New malware variant with trojan capabilities",
                    time: "3 hours ago",
                    color: "blue"
                  }
                ].map((alert, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    alert.color === 'red' ? 'bg-red-900/20 border-red-500' :
                    alert.color === 'orange' ? 'bg-orange-900/20 border-orange-500' :
                    alert.color === 'yellow' ? 'bg-yellow-900/20 border-yellow-500' :
                    'bg-blue-900/20 border-blue-500'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`${
                        alert.color === 'red' ? 'bg-red-900 text-red-300' :
                        alert.color === 'orange' ? 'bg-orange-900 text-orange-300' :
                        alert.color === 'yellow' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-blue-900 text-blue-300'
                      }`}>
                        {alert.type}
                      </Badge>
                      <span className="text-slate-400 text-sm">{alert.time}</span>
                    </div>
                    <h4 className="text-white font-semibold mb-1">{alert.title}</h4>
                    <p className="text-slate-300 text-sm">{alert.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Threat Statistics */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <BarChart3 className="text-cyan-400 mr-2" size={24} />
                Threat Statistics
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Threats Blocked Today", value: "1,247", icon: <Shield className="text-green-400" size={20} /> },
                  { label: "Active Campaigns", value: "23", icon: <Target className="text-red-400" size={20} /> },
                  { label: "Countries Monitored", value: "180+", icon: <Globe className="text-blue-400" size={20} /> },
                  { label: "Response Time", value: "< 5min", icon: <Clock className="text-cyan-400" size={20} /> }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-700 rounded-lg">
                    <div className="flex items-center justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-slate-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Malware Detection Rate</span>
                  <span className="text-green-400 font-semibold">99.7%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '99.7%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">False Positive Rate</span>
                  <span className="text-cyan-400 font-semibold">0.1%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '0.1%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Intelligence Services */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Threat Intelligence Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive threat intelligence services to help you understand and defend against evolving cyber threats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="text-cyan-400" size={48} />,
                title: "Threat Monitoring",
                description: "24/7 monitoring of global threat landscape with real-time alerts and analysis.",
                features: ["Global threat monitoring", "Real-time alerts", "Threat analysis", "Custom dashboards"]
              },
              {
                icon: <TrendingUp className="text-cyan-400" size={48} />,
                title: "Threat Analysis",
                description: "Deep analysis of threat actors, tactics, techniques, and procedures (TTPs).",
                features: ["Threat actor profiling", "TTP analysis", "Campaign tracking", "Trend analysis"]
              },
              {
                icon: <Target className="text-cyan-400" size={48} />,
                title: "Threat Hunting",
                description: "Proactive threat hunting to identify and neutralize advanced persistent threats.",
                features: ["Proactive hunting", "APT detection", "IOC development", "Incident response"]
              },
              {
                icon: <Globe className="text-cyan-400" size={48} />,
                title: "Global Intelligence",
                description: "Access to global threat intelligence feeds and dark web monitoring.",
                features: ["Dark web monitoring", "Global feeds", "OSINT collection", "Threat sharing"]
              },
              {
                icon: <Activity className="text-cyan-400" size={48} />,
                title: "Behavioral Analysis",
                description: "AI-powered behavioral analysis to detect anomalous activities and threats.",
                features: ["Behavioral modeling", "Anomaly detection", "Machine learning", "Predictive analytics"]
              },
              {
                icon: <Zap className="text-cyan-400" size={48} />,
                title: "Rapid Response",
                description: "Fast response to emerging threats with immediate intelligence and countermeasures.",
                features: ["Rapid response", "Countermeasures", "Threat mitigation", "Recovery support"]
              }
            ].map((service, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-cyan-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20">
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

      {/* Threat Intelligence Reports */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Latest Threat Intelligence Reports</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay informed with our latest threat intelligence reports and security insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Q4 2024 Threat Landscape Report",
                description: "Comprehensive analysis of the global threat landscape including emerging threats and attack trends.",
                date: "December 15, 2024",
                type: "Quarterly Report",
                severity: "High Priority"
              },
              {
                title: "Ransomware Evolution: New Tactics and Techniques",
                description: "Deep dive into the latest ransomware campaigns and evolving attack methodologies.",
                date: "December 10, 2024",
                type: "Threat Analysis",
                severity: "Critical"
              },
              {
                title: "AI-Powered Cyber Attacks: The New Frontier",
                description: "Analysis of how threat actors are leveraging AI and machine learning in their attacks.",
                date: "December 5, 2024",
                type: "Research Report",
                severity: "Medium Priority"
              },
              {
                title: "Supply Chain Attacks: A Growing Concern",
                description: "Examination of supply chain attack vectors and mitigation strategies for organizations.",
                date: "November 28, 2024",
                type: "Security Advisory",
                severity: "High Priority"
              },
              {
                title: "Zero-Day Exploits: Detection and Response",
                description: "Best practices for detecting and responding to zero-day exploits in enterprise environments.",
                date: "November 20, 2024",
                type: "Technical Guide",
                severity: "Medium Priority"
              },
              {
                title: "Threat Intelligence Sharing: Best Practices",
                description: "Guidelines for effective threat intelligence sharing within and between organizations.",
                date: "November 15, 2024",
                type: "Best Practices",
                severity: "Low Priority"
              }
            ].map((report, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-cyan-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-700">
                      {report.type}
                    </Badge>
                    <Badge className={`${
                      report.severity === 'Critical' ? 'bg-red-900 text-red-300' :
                      report.severity === 'High Priority' ? 'bg-orange-900 text-orange-300' :
                      report.severity === 'Medium Priority' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-blue-900 text-blue-300'
                    }`}>
                      {report.severity}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-white">{report.title}</CardTitle>
                  <CardDescription className="text-slate-300">{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">{report.date}</span>
                    <Button variant="outline" className="text-cyan-400 border-cyan-600 hover:bg-cyan-600 hover:text-white">
                      Read Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Get Advanced Threat Intelligence</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Protect your organization with our comprehensive threat intelligence platform. 
            Get real-time insights and stay ahead of emerging threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-100 font-semibold px-8 py-4 rounded-lg text-lg">
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-900 px-8 py-4 rounded-lg text-lg">
              Download Sample Report
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

export default ThreatIntelligence;
