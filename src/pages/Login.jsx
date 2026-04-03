import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-20 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 max-w-md text-center">
          <h1 className="text-3xl font-heading font-black uppercase mb-4">Members Area</h1>
          <p className="text-muted-foreground mb-6">
            Member login will be available soon. For now, you can register to join RISE.
          </p>
          <div className="space-y-3">
            <Button onClick={() => navigate('/register')} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-12">
              Register Now
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Login;
