import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. Commitment to Security',
    paragraphs: [
      'Kamma Global Federation (“KGF”, “we”, “our”) is committed to safeguarding the confidentiality, integrity, and availability of member data, operational systems, and community information.',
      'This Security Policy outlines the principles and controls we employ to protect our digital infrastructure and provides guidance to members, volunteers, and partners who interact with KGF systems.',
    ],
  },
  {
    title: '2. Governance & Responsibility',
    paragraphs: [
      'KGF’s security program is led by a designated Security Officer who collaborates with regional technology leads and chapter coordinators.',
      'Security policies are reviewed annually and updated to reflect changes in technology, regulation, and emerging threats.',
    ],
  },
  {
    title: '3. Access Control',
    paragraphs: [
      'Access to systems is based on the principle of least privilege. Roles determine the level of access granted, and elevated permissions require explicit approvals.',
      'Strong authentication (including MFA where supported) is enforced for administrative and sensitive portals.',
      'Accounts are deactivated promptly when users change roles or leave the organization.',
    ],
  },
  {
    title: '4. Data Protection',
    paragraphs: [
      'Sensitive data is encrypted during transmission (TLS/HTTPS) and stored using industry-standard encryption where appropriate.',
      'Regular data backups are performed and stored securely to ensure service continuity.',
      'Data retention follows the timelines defined in our Privacy Policy and applicable regulations.',
    ],
  },
  {
    title: '5. Infrastructure & Application Security',
    paragraphs: [
      'KGF employs reputable cloud services and hosting providers that comply with industry certifications (e.g., ISO 27001, SOC 2).',
      'Firewalls, network segmentation, and monitoring tools protect infrastructure from unauthorized access.',
      'Applications undergo secure development practices, including code reviews, vulnerability scanning, and patch management.',
    ],
  },
  {
    title: '6. Incident Response',
    paragraphs: [
      'KGF maintains an incident response plan that outlines procedures for detecting, triaging, containing, and resolving security incidents.',
      'Incidents are documented, investigated, and reported to relevant stakeholders. Lessons learned inform future improvements.',
      'Members are encouraged to report suspicious activity or potential vulnerabilities to security@kammaglobal.com.',
    ],
  },
  {
    title: '7. Vendor & Third-Party Management',
    paragraphs: [
      'Third-party vendors must adhere to KGF’s security standards and privacy requirements. Formal agreements include confidentiality and data protection clauses.',
      'Security assessments are conducted for critical vendors handling member data or core services.',
    ],
  },
  {
    title: '8. Training & Awareness',
    paragraphs: [
      'KGF provides regular security awareness training to staff, volunteers, and chapter leads covering phishing, data handling, and incident reporting.',
      'Guidelines for secure usage of collaboration tools and communication channels are shared with members.',
    ],
  },
  {
    title: '9. Compliance',
    paragraphs: [
      'KGF strives to comply with applicable data protection, cybersecurity, and nonprofit regulations in the regions where we operate.',
      'Security practices are aligned with recognized frameworks and standards, adapting to jurisdiction-specific requirements.',
    ],
  },
  {
    title: '10. Policy Updates',
    paragraphs: [
      'This Security Policy may be updated periodically. Changes will be published with an updated “Effective Date.” Continued use of KGF systems indicates acknowledgment of the revised policy.',
    ],
  },
  {
    title: '11. Contact Information',
    paragraphs: [
      'Security Office – Kamma Global Federation\nEmail: security@kammaglobal.com\nPhone: +91 90555 17555\nAddress: Jetti Mansion, Plot 831/A, Road 41, Jubilee Hills, Hyderabad 500033, Telangana, India.',
    ],
  },
];

const SecurityPolicy = () => (
  <div className="min-h-screen bg-white text-black">
    <Header currentPage="Security Policy" />
    <section className="relative overflow-hidden py-20 md:py-24 bg-white">
      <div className="absolute -right-40 -top-32 h-80 w-80 rounded-full bg-[#f6c344]/30 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Policy</h1>
        <p className="text-lg text-slate-600 leading-relaxed">Effective Date: January 1, 2025</p>
      </div>
    </section>

    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl space-y-10">
        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h2 className="text-2xl font-semibold text-black">{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-700 leading-relaxed whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default SecurityPolicy;

