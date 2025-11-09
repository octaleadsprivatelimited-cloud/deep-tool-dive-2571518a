import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. Purpose of this Policy',
    paragraphs: [
      'Kamma Global Federation (KGF) is committed to protecting the privacy of members, donors, volunteers, and visitors across all chapters worldwide. This Privacy Policy explains how we collect, use, share, and safeguard personal information in connection with our websites, mobile applications, events, and membership services.',
      'By using KGF properties or providing personal information to us, you consent to the practices described in this policy. If you do not agree, please do not use our services or provide your personal data.',
    ],
  },
  {
    title: '2. Information We Collect',
    paragraphs: [
      'We collect personal data that you voluntarily provide to us, including name, contact details, demographic information, profession, chapter affiliation, and interests when you register as a member, attend events, or submit forms.',
      'We may collect payment details, donation history, and transaction records to process contributions and memberships securely. For security purposes, sensitive payment data is handled by certified payment providers.',
      'We automatically collect technical data such as IP address, device type, browser information, pages visited, and engagement metrics to improve user experience and maintain platform security.',
      'We collect information from public sources and trusted partners to verify professional details, references, or participation in KGF programs.',
    ],
  },
  {
    title: '3. How We Use Your Information',
    paragraphs: [
      'Deliver membership services, communicate program updates, and manage community engagement initiatives.',
      'Process payments, contributions, and event registrations; provide receipts and statutory documentation.',
      'Curate personalized experiences such as matchmaking, mentorship, scholarships, or leadership opportunities.',
      'Send newsletters, announcements, and relevant communications; you may opt out at any time.',
      'Ensure security, prevent fraud, and comply with legal obligations across jurisdictions.',
    ],
  },
  {
    title: '4. Sharing Your Information',
    paragraphs: [
      'We do not sell personal data. We may share information with trusted partners who support KGF services (e.g., payment processors, hosting providers, analytics tools) under strict confidentiality agreements.',
      'Member directories or program listings may display limited information (name, chapter, role) where you have provided consent.',
      'We may disclose personal information when required by law, court order, or to protect the rights, safety, and integrity of KGF and its members.',
    ],
  },
  {
    title: '5. Data Retention',
    paragraphs: [
      'We retain personal data for as long as necessary to fulfill the purposes outlined in this policy, comply with legal requirements, and maintain accurate historical records for our federation.',
      'You may request deletion or anonymization of your data; however, we may retain certain information for legitimate business or legal purposes.',
    ],
  },
  {
    title: '6. Your Rights & Choices',
    paragraphs: [
      'You have the right to access, correct, update, or delete your personal information. Requests can be made through privacy@kammaglobal.com.',
      'You can manage your communication preferences via email links or by contacting our support desk.',
      'KGF honors applicable data protection laws (including GDPR and relevant country-specific regulations) for members located in those jurisdictions.',
    ],
  },
  {
    title: '7. Security Measures',
    paragraphs: [
      'We implement technical, administrative, and physical safeguards to protect personal data from unauthorized access, misuse, or disclosure.',
      'Our platforms undergo regular security assessments, and sensitive data is encrypted during transmission and storage as appropriate.',
    ],
  },
  {
    title: '8. International Data Transfers',
    paragraphs: [
      'As a global federation, your information may be transferred and processed across different countries where KGF operates. We ensure adequate protections are in place in accordance with applicable laws.',
    ],
  },
  {
    title: '9. Children’s Privacy',
    paragraphs: [
      'KGF services are intended for individuals aged 16 and above. For programs involving minors, we obtain consent from parents or legal guardians and implement additional safeguards.',
    ],
  },
  {
    title: '10. Updates to This Policy',
    paragraphs: [
      'We may update this Privacy Policy periodically. Changes will be posted on our website with an updated “Effective Date.” Continued use of our services after changes constitutes acceptance of the revised policy.',
    ],
  },
  {
    title: '11. Contact Us',
    paragraphs: [
      'For questions, requests, or concerns about this Privacy Policy, please contact:',
      'Privacy Office – Kamma Global Federation\nEmail: privacy@kammaglobal.com\nPhone: +91 90555 17555\nAddress: Jetti Mansion, Plot 831/A, Road 41, Jubilee Hills, Hyderabad 500033, Telangana, India.',
    ],
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-white text-black">
    <Header currentPage="Privacy Policy" />
    <section className="relative overflow-hidden py-20 md:py-24 bg-white">
      <div className="absolute -right-40 -top-32 h-80 w-80 rounded-full bg-[#f6c344]/30 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Effective Date: January 1, 2025
        </p>
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

export default PrivacyPolicy;

