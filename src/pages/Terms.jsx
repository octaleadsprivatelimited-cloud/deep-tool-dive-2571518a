import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Terms = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-heading font-black uppercase mb-6">Terms of Service</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <p>By using RISE Global Directory, you agree to the following terms and conditions.</p>
          <h2 className="text-lg font-heading font-bold text-foreground">Membership</h2>
          <p>Membership is subject to approval. RISE reserves the right to approve, reject, or revoke membership at its discretion.</p>
          <h2 className="text-lg font-heading font-bold text-foreground">User Conduct</h2>
          <p>Members must maintain professional conduct. Any misuse of the platform may result in account suspension.</p>
          <h2 className="text-lg font-heading font-bold text-foreground">Content</h2>
          <p>Users are responsible for the accuracy of information they provide. RISE is not liable for third-party content.</p>
        </div>
      </div>
    </section>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Terms;
