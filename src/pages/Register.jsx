import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { toast } from 'sonner';

const registerSchema = z.object({
  fullName: z.string().min(2, 'Full name is required').max(100),
  email: z.string().email('Invalid email address'),
  mobile: z.string().regex(/^[+]?[\d\s-]{10,15}$/, 'Invalid mobile number'),
  profession: z.string().max(100).optional(),
  location: z.string().max(100).optional(),
});

const Register = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { fullName: '', email: '', mobile: '', profession: '', location: '' },
  });

  const onSubmit = (data) => {
    console.log('Registration data:', data);
    toast.success('Registration submitted! We will review and get back to you.');
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="pt-32 pb-10 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase mb-4">
            Join <span className="text-primary">RISE</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-secondary-foreground/70 max-w-xl mx-auto">Become a member and connect with professionals across the globe.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField control={form.control} name="fullName" render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl><Input placeholder="Enter your full name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="mobile" render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number *</FormLabel>
                  <FormControl><Input placeholder="+91 9876543210" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="profession" render={({ field }) => (
                <FormItem>
                  <FormLabel>Profession / Business</FormLabel>
                  <FormControl><Input placeholder="Your profession" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="location" render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl><Input placeholder="City, Country" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <div className="text-xs text-muted-foreground">Profile photo upload will be available after backend is enabled.</div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-12 text-lg">
                Submit Registration
              </Button>
            </form>
          </Form>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Register;
