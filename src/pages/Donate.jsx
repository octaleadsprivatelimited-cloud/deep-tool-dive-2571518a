import React from 'react';
import { Heart, ArrowRight, Users, GraduationCap, Stethoscope, Home as HomeIcon, Smartphone } from 'lucide-react';
import paymentQR from '@/assets/payment-qr.png';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const donationAreas = [
  { icon: GraduationCap, title: 'Education', desc: 'Support scholarships and educational programs for underprivileged youth in our community.' },
  { icon: Stethoscope, title: 'Healthcare', desc: 'Fund medical camps, health awareness drives, and emergency medical support.' },
  { icon: Users, title: 'Community Development', desc: 'Help build community centers, organize events, and empower local leaders.' },
  { icon: HomeIcon, title: 'Rural Upliftment', desc: 'Contribute to infrastructure, skill development, and livelihood programs in rural areas.' },
];

const Donate = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage="Donate" />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-black uppercase mb-4">
            Make a <span className="text-primary">Donation</span>
          </h1>
          <div className="w-24 h-1.5 bg-primary mx-auto mb-6" />
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Your generous contribution empowers our community through education, healthcare, and development programs. Every rupee makes a difference.
          </p>
        </div>
      </section>

      {/* Donation Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Where Your <span className="text-primary">Donation</span> Goes
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationAreas.map((area) => (
              <div key={area.title} className="p-6 rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group">
                <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-base mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scan & Pay */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Scan & <span className="text-primary">Pay</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Scan the QR code below using any UPI app (GPay, PhonePe, Paytm, BHIM) to make your donation instantly.
            </p>
            <div className="bg-card border border-border rounded-xl p-6 shadow-md inline-block">
              <img src={paymentQR} alt="UPI Payment QR Code" className="w-72 h-auto mx-auto rounded-lg" />
            </div>
            <p className="text-muted-foreground text-sm mt-4">UPI ID: 9848353503@sbi</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Need <span className="text-primary">Help?</span>
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground mb-8 leading-relaxed">
              For any questions about donations, reach out via our contact page or WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-md px-10 h-14 text-lg">
                <a href="/contact">
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-md px-10 h-14 text-lg">
                <a href="/register">Join RISE</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Donate;
