import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Privacy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-heading font-black uppercase mb-6">Privacy Policy</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <p>RISE Global Directory is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
          <h2 className="text-lg font-heading font-bold text-foreground">Information We Collect</h2>
          <p>We collect information you provide during registration, including your name, email, phone number, profession, location, and profile photo.</p>
          <h2 className="text-lg font-heading font-bold text-foreground">How We Use Your Information</h2>
          <p>Your data is used to facilitate networking, mentorship matching, and community services within the RISE platform.</p>
          <h2 className="text-lg font-heading font-bold text-foreground">Contact</h2>
          <p>For privacy-related inquiries, contact us at +91 9848353503 or via our contact page.</p>
        </div>
      </div>
    </section>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Privacy;
