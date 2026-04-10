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
import { saveDonation } from '@/lib/dataStore';
import { toast } from 'sonner';

const donationAreas = [
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
      // Convert screenshot to base64
      const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(screenshot);
      });

      await saveDonation({
        name,
        mobile,
        amount: amount || 'Not specified',
        message: form.message.trim(),
        screenshotBase64: base64,
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
            Your generous contribution empowers our community through development and upliftment programs. Every rupee makes a difference.
          </p>
        </div>
      </section>


      {/* Scan & Pay + Confirmation Form */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
            {/* QR Code */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">
                Scan & <span className="text-primary">Pay</span>
              </h2>
              <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Scan the QR code using any UPI app to donate instantly.
              </p>
              <div className="bg-card border border-border rounded-xl p-4 shadow-md inline-block">
                <img src={paymentQR} alt="UPI Payment QR Code" className="w-56 h-auto mx-auto rounded-lg" />
              </div>
              <p className="text-muted-foreground text-xs mt-3">UPI ID: 9848353503@sbi</p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-heading font-bold mb-2 text-center lg:text-left">
                Confirm Your <span className="text-primary">Donation</span>
              </h2>
              <div className="w-12 h-0.5 bg-primary mx-auto lg:mx-0 mb-3" />
              <p className="text-muted-foreground mb-4 text-sm text-center lg:text-left">
                Fill in your details and upload the payment screenshot.
              </p>

              {submitted ? (
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-heading font-bold text-lg mb-1">Thank You!</h3>
                  <p className="text-muted-foreground text-sm mb-4">Your donation details have been received.</p>
                  <Button onClick={resetForm} variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-4 space-y-3 shadow-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="donor-name" className="text-xs">Full Name *</Label>
                      <Input
                        id="donor-name"
                        placeholder="Your name"
                        maxLength={100}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-9 text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="donor-mobile" className="text-xs">Mobile *</Label>
                      <Input
                        id="donor-mobile"
                        placeholder="10-digit number"
                        maxLength={10}
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value.replace(/\D/g, '') })}
                        className="h-9 text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="donor-amount" className="text-xs">Amount (₹)</Label>
                    <Input
                      id="donor-amount"
                      placeholder="e.g. 500"
                      maxLength={10}
                      value={form.amount}
                      onChange={(e) => setForm({ ...form, amount: e.target.value.replace(/\D/g, '') })}
                      className="h-9 text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="donor-message" className="text-xs">Message (Optional)</Label>
                    <Textarea
                      id="donor-message"
                      placeholder="Any message..."
                      maxLength={500}
                      rows={2}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label className="text-xs">Payment Screenshot *</Label>
                    <div
                      onClick={() => fileRef.current?.click()}
                      className="mt-1 border-2 border-dashed border-border rounded-md p-3 text-center cursor-pointer hover:border-primary/50 transition-colors"
                    >
                      {previewUrl ? (
                        <img src={previewUrl} alt="Screenshot preview" className="max-h-32 mx-auto rounded" />
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Upload className="w-5 h-5 text-muted-foreground" />
                          <p className="text-muted-foreground text-xs">Click to upload (max 5MB)</p>
                        </div>
                      )}
                    </div>
                    <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-10 text-sm"
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