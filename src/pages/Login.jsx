import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Login = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <section className="pt-32 pb-20 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-black uppercase mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Login to your RISE account</p>
        </div>
        <div className="space-y-4">
          <Input type="email" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-12">Login</Button>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account? <a href="/register" className="text-primary font-semibold hover:underline">Join RISE</a>
          </p>
        </div>
      </div>
    </section>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Login;
