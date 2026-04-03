import React, { useState, useRef } from 'react';
import { Heart, ArrowRight, Users, GraduationCap, Stethoscope, Home as HomeIcon, Smartphone, Upload, CheckCircle } from 'lucide-react';
import paymentQR from '@/assets/payment-qr.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { uploadFile, saveDonation } from '@/lib/dataStore';
import { toast } from 'sonner';

const donationAreas = [
  { icon: GraduationCap, title: 'Education', desc: 'Support scholarships and educational programs for underprivileged youth in our community.' },
  { icon: Stethoscope, title: 'Healthcare', desc: 'Fund medical camps, health awareness drives, and emergency medical support.' },
  { icon: Users, title: 'Community Development', desc: 'Help build community centers, organize events, and empower local leaders.' },
  { icon: HomeIcon, title: 'Rural Upliftment', desc: 'Contribute to infrastructure, skill development, and livelihood programs in rural areas.' },
];

const Donate = () => {
  const [form, setForm] = useState({ name: '', mobile: '', amount: '', message: '' });
  const [screenshot, setScreenshot] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be under 5MB');
        return;
      }
      setScreenshot(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const mobile = form.mobile.trim();
    const amount = form.amount.trim();

    if (!name || !mobile) {
      toast.error('Name and mobile number are required');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      toast.error('Enter a valid 10-digit mobile number');
      return;
    }
    if (!screenshot) {
      toast.error('Please upload the payment screenshot');
      return;
    }

    setLoading(true);
    try {
      const screenshotUrl = await uploadFile(screenshot, `donations/${Date.now()}_${screenshot.name}`);
      await saveDonation({
        name,
        mobile,
        amount: amount || 'Not specified',
        message: form.message.trim(),
        screenshotUrl,
      });
      setSubmitted(true);
      toast.success('Thank you! Your donation details have been submitted.');
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({ name: '', mobile: '', amount: '', message: '' });
    setScreenshot(null);
    setPreviewUrl('');
    setSubmitted(false);
  };

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

      {/* Scan & Pay + Confirmation Form */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
            {/* QR Code */}
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Scan & <span className="text-primary">Pay</span>
              </h2>
              <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Scan the QR code using any UPI app (GPay, PhonePe, Paytm, BHIM) to donate instantly.
              </p>
              <div className="bg-card border border-border rounded-xl p-6 shadow-md inline-block">
                <img src={paymentQR} alt="UPI Payment QR Code" className="w-72 h-auto mx-auto rounded-lg" />
              </div>
              <p className="text-muted-foreground text-sm mt-4">UPI ID: 9848353503@sbi</p>
            </div>

            {/* Upload Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-center lg:text-left">
                Confirm Your <span className="text-primary">Donation</span>
              </h2>
              <div className="w-16 h-0.5 bg-primary mx-auto lg:mx-0 mb-6" />
              <p className="text-muted-foreground mb-6 text-center lg:text-left leading-relaxed">
                After payment, fill in your details and upload the screenshot so we can acknowledge your contribution.
              </p>

              {submitted ? (
                <div className="bg-card border border-border rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">Your donation details have been received. We truly appreciate your support.</p>
                  <Button onClick={resetForm} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-4 shadow-md">
                  <div>
                    <Label htmlFor="donor-name">Full Name *</Label>
                    <Input
                      id="donor-name"
                      placeholder="Enter your full name"
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="donor-mobile">Mobile Number *</Label>
                    <Input
                      id="donor-mobile"
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      value={form.mobile}
                      onChange={(e) => setForm({ ...form, mobile: e.target.value.replace(/\D/g, '') })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="donor-amount">Amount Donated (₹)</Label>
                    <Input
                      id="donor-amount"
                      placeholder="e.g. 500"
                      maxLength={10}
                      value={form.amount}
                      onChange={(e) => setForm({ ...form, amount: e.target.value.replace(/\D/g, '') })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="donor-message">Message (Optional)</Label>
                    <Textarea
                      id="donor-message"
                      placeholder="Any message for the team..."
                      maxLength={500}
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Payment Screenshot *</Label>
                    <div
                      onClick={() => fileRef.current?.click()}
                      className="mt-1 border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                    >
                      {previewUrl ? (
                        <img src={previewUrl} alt="Screenshot preview" className="max-h-48 mx-auto rounded-md" />
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-muted-foreground text-sm">Click to upload screenshot (max 5MB)</p>
                        </>
                      )}
                    </div>
                    <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-base"
                  >
                    {loading ? 'Submitting...' : 'Submit Donation Details'}
                  </Button>
                </form>
              )}
            </div>
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