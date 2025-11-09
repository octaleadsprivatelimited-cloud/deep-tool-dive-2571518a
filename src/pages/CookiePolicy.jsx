import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. What Are Cookies?',
    paragraphs: [
      'Cookies are small text files stored on your device when you visit a website. They help websites recognize your device, remember preferences, and improve overall user experience.',
      'This Cookie Policy explains how Kamma Global Federation (“KGF”, “we”, “our”) uses cookies and similar technologies across our digital properties.',
    ],
  },
  {
    title: '2. Types of Cookies We Use',
    paragraphs: [
      'Strictly Necessary Cookies: Essential for the operation of our websites, enabling functions such as secure login, session management, and form submissions.',
      'Performance Cookies: Help us understand how visitors interact with our sites so we can measure and improve performance (e.g., page analytics, load times).',
      'Functionality Cookies: Remember choices you make, such as language, region, chapter preferences, and personalized settings.',
      'Marketing & Personalization Cookies: Used to deliver relevant content, promotions, or reminders about KGF programs and events. We use these sparingly and respectfully.',
    ],
  },
  {
    title: '3. Third-Party Cookies',
    paragraphs: [
      'We may allow trusted partners (e.g., analytics providers, payment processors, video platforms) to place cookies on your device to support service delivery. These partners adhere to their own privacy and cookie policies.',
    ],
  },
  {
    title: '4. Managing Your Cookie Preferences',
    paragraphs: [
      'You can manage or disable cookies by adjusting your browser settings. Most browsers allow you to refuse or delete cookies; however, blocking certain cookies may impact site functionality.',
      'You can also control advertising cookies through industry opt-out tools such as the Digital Advertising Alliance (DAA) or the Network Advertising Initiative (NAI).',
    ],
  },
  {
    title: '5. Consent & Updates',
    paragraphs: [
      'By continuing to use our websites, you consent to our use of cookies as described in this policy.',
      'We may update this Cookie Policy periodically to reflect changes in technology or legal requirements. Updates will be posted with an updated “Effective Date.”',
    ],
  },
  {
    title: '6. Contact Us',
    paragraphs: [
      'If you have questions or concerns about our use of cookies, please contact:',
      'Digital Experience Team – Kamma Global Federation\nEmail: privacy@kammaglobal.com\nPhone: +91 90555 17555\nAddress: Jetti Mansion, Plot 831/A, Road 41, Jubilee Hills, Hyderabad 500033, Telangana, India.',
    ],
  },
];

const CookiePolicy = () => (
  <div className="min-h-screen bg-white text-black">
    <Header currentPage="Cookie Policy" />
    <section className="relative overflow-hidden py-20 md:py-24 bg-white">
      <div className="absolute -right-40 -top-32 h-80 w-80 rounded-full bg-[#f6c344]/30 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
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

export default CookiePolicy;

