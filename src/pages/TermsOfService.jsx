import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. Acceptance of Terms',
    paragraphs: [
      'These Terms of Service (“Terms”) govern your access to and use of the websites, applications, programs, and services (collectively, “Services”) provided by Kamma Global Federation (“KGF”, “we”, “our”, “us”).',
      'By accessing or using our Services, you agree to be bound by these Terms and all applicable laws. If you do not agree, please refrain from using the Services.',
    ],
  },
  {
    title: '2. Eligibility',
    paragraphs: [
      'You must be at least 16 years old to use the Services unless explicitly stated otherwise for specific programs. By using the Services, you represent that you meet this requirement or have obtained consent from a parent or legal guardian.',
    ],
  },
  {
    title: '3. Accounts & Membership',
    paragraphs: [
      'Some Services require you to create an account or become a registered member. You agree to provide accurate, current, and complete information and to keep it updated.',
      'You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.',
      'KGF reserves the right to suspend or terminate accounts that violate these Terms or threaten the integrity of the community.',
    ],
  },
  {
    title: '4. Acceptable Use',
    paragraphs: [
      'You agree to use the Services for lawful purposes and in a manner that respects the dignity and safety of the Kamma community worldwide.',
      'You agree not to: (a) post or transmit defamatory, harmful, or unlawful content; (b) impersonate others or misrepresent affiliation; (c) infringe intellectual property or privacy rights; (d) introduce malware, disrupt, or attempt unauthorized access to our systems.',
    ],
  },
  {
    title: '5. Programs & Events',
    paragraphs: [
      'Participation in KGF programs, events, or initiatives may be subject to additional guidelines, eligibility criteria, or waivers. By participating, you agree to comply with such terms.',
      'KGF reserves the right to modify, reschedule, or cancel events and programs for operational or safety reasons.',
    ],
  },
  {
    title: '6. Donations & Payments',
    paragraphs: [
      'Donations, membership dues, or service fees processed through our platforms are governed by applicable policies and acknowledgements.',
      'Unless otherwise specified, contributions are non-refundable. We will address disputes or errors in good faith—please contact support@kammaglobal.com.',
    ],
  },
  {
    title: '7. Intellectual Property',
    paragraphs: [
      'Content provided through the Services, including text, graphics, logos, images, videos, and software, is owned by or licensed to KGF and protected by intellectual property laws.',
      'You may not copy, modify, distribute, or create derivative works without explicit permission. KGF trademarks and branding may not be used without prior consent.',
    ],
  },
  {
    title: '8. User-Generated Content',
    paragraphs: [
      'You retain ownership of content you submit but grant KGF a non-exclusive, worldwide, royalty-free license to use, reproduce, distribute, and display such content for community and promotional purposes.',
      'You warrant that you have the rights to share the submitted content and that it does not infringe any third-party rights.',
    ],
  },
  {
    title: '9. Third-Party Services',
    paragraphs: [
      'Our Services may integrate or link to third-party tools, websites, or services. We are not responsible for the content or practices of third parties and encourage you to review their terms and privacy policies.',
    ],
  },
  {
    title: '10. Disclaimers',
    paragraphs: [
      'The Services are provided “as is” without warranties of any kind, express or implied, including but not limited to fitness for a particular purpose, merchantability, or non-infringement.',
      'KGF does not guarantee uninterrupted or error-free operation of the Services or that defects will be corrected promptly.',
    ],
  },
  {
    title: '11. Limitation of Liability',
    paragraphs: [
      'To the maximum extent permitted by law, KGF shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.',
      'KGF’s total liability for any claim arising under these Terms shall not exceed INR 10,000 or the equivalent amount in your local currency.',
    ],
  },
  {
    title: '12. Indemnification',
    paragraphs: [
      'You agree to indemnify and hold harmless KGF, its officers, directors, staff, volunteers, and partners from and against any claims, liabilities, damages, losses, and expenses arising out of or related to your use of the Services or breach of these Terms.',
    ],
  },
  {
    title: '13. Termination',
    paragraphs: [
      'KGF may suspend or terminate access to the Services at any time for violations of these Terms, misuse, or any conduct deemed detrimental to the community.',
      'Upon termination, your right to use the Services ceases immediately, though sections intended to survive (e.g., Intellectual Property, Limitation of Liability, Indemnification) will remain in effect.',
    ],
  },
  {
    title: '14. Governing Law & Dispute Resolution',
    paragraphs: [
      'These Terms are governed by the laws of India, without regard to conflict-of-law principles. Disputes shall be resolved through good-faith negotiations. If unresolved, disputes will be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.',
    ],
  },
  {
    title: '15. Changes to Terms',
    paragraphs: [
      'KGF may update these Terms periodically. We will post the revised Terms with an updated “Effective Date.” Continued use of the Services constitutes acceptance of the revised Terms.',
    ],
  },
  {
    title: '16. Contact Information',
    paragraphs: [
      'For questions or concerns about these Terms, contact:',
      'Legal Affairs – Kamma Global Federation\nEmail: legal@kammaglobal.com\nPhone: +91 90555 17555\nAddress: Jetti Mansion, Plot 831/A, Road 41, Jubilee Hills, Hyderabad 500033, Telangana, India.',
    ],
  },
];

const TermsOfService = () => (
  <div className="min-h-screen bg-white text-black">
    <Header currentPage="Terms of Service" />
    <section className="relative overflow-hidden py-20 md:py-24 bg-white">
      <div className="absolute -right-40 -top-32 h-80 w-80 rounded-full bg-[#f6c344]/30 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
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

export default TermsOfService;

