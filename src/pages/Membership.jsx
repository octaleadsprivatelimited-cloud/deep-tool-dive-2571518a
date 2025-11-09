import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { toast } from 'sonner';

const Membership = () => {
  const tiers = [{
    tier: 'Supporter', priceLabel: '₹500 / year', amount: 500, benefits: ['Newsletter', 'Event Invitations']
  }, {
    tier: 'Patron', priceLabel: '₹2,500 / year', amount: 2500, benefits: ['Priority Seating', 'Chapter Access', 'Recognition']
  }, {
    tier: 'Lifetime', priceLabel: '₹25,000 one-time', amount: 25000, benefits: ['Lifetime Access', 'VIP Recognition', 'Special Events']
  }];

  const [open, setOpen] = React.useState(false);
  const [selectedTier, setSelectedTier] = React.useState(tiers[0]);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [country, setCountry] = React.useState('India');
  const [chapter, setChapter] = React.useState('');
  const [otpRequested, setOtpRequested] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState('card');

  const countries = [
    { code: 'IN', name: 'India', dialCode: '+91', placeholder: '+91 98765 43210' },
    { code: 'US', name: 'United States', dialCode: '+1', placeholder: '+1 (555) 123-4567' },
    { code: 'GB', name: 'United Kingdom', dialCode: '+44', placeholder: '+44 20 7946 0958' },
    { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', placeholder: '+971 50 123 4567' },
    { code: 'AU', name: 'Australia', dialCode: '+61', placeholder: '+61 2 1234 5678' },
    { code: 'CA', name: 'Canada', dialCode: '+1', placeholder: '+1 (555) 123-4567' },
    { code: 'SG', name: 'Singapore', dialCode: '+65', placeholder: '+65 6123 4567' },
    { code: 'MY', name: 'Malaysia', dialCode: '+60', placeholder: '+60 12-345 6789' },
    { code: 'NZ', name: 'New Zealand', dialCode: '+64', placeholder: '+64 21 123 4567' },
    { code: 'ZA', name: 'South Africa', dialCode: '+27', placeholder: '+27 82 123 4567' },
  ];

  const selectedCountryData = countries.find(c => c.name === country) || countries[0];

  const chaptersByCountry = {
    'India': ['Hyderabad', 'Vijayawada', 'Chennai', 'Bangalore', 'Mumbai', 'Delhi', 'Pune', 'Kolkata'],
    'United States': ['Dallas', 'New York', 'San Francisco', 'Chicago', 'Houston', 'Los Angeles', 'Seattle', 'Boston'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow'],
    'United Arab Emirates': ['Dubai', 'Abu Dhabi', 'Sharjah'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    'Canada': ['Toronto', 'Vancouver', 'Calgary', 'Montreal', 'Ottawa'],
    'Singapore': ['Singapore'],
    'Malaysia': ['Kuala Lumpur', 'Penang', 'Johor Bahru'],
    'New Zealand': ['Auckland', 'Wellington', 'Christchurch'],
    'South Africa': ['Johannesburg', 'Cape Town', 'Durban'],
  };

  const availableChapters = chaptersByCountry[country] || [];

  React.useEffect(() => {
    if (availableChapters.length > 0) {
      setChapter(availableChapters[0]);
    } else {
      setChapter('');
    }
  }, [country]);

  function startCheckout(tier) {
    setSelectedTier(tier);
    setOpen(true);
  }

  function completePayment(e) {
    e.preventDefault();
    if (!name || !email || !mobile) {
      toast.error('Please complete all required fields');
      return;
    }
    toast.success('Payment successful. Confirmation sent via Email, SMS, and WhatsApp.');
    setOpen(false);
    setName(''); setEmail(''); setMobile(''); setOtpRequested(false);
  }

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Membership" />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Membership</h1>
          <p className="text-lg text-slate-200 mb-8 max-w-3xl">Join Kamma Global Federation and support cultural, educational, and community initiatives worldwide.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.tier} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-[#b99b4c]/60 transition-all">
                <div className="text-2xl font-semibold mb-1">{t.tier}</div>
                <div className="text-[#b99b4c] mb-4 font-bold">{t.priceLabel}</div>
                <ul className="text-slate-200 space-y-2 mb-4">
                  {t.benefits.map((b) => <li key={b}>• {b}</li>)}
                </ul>
                <Button className="bg-[#b99b4c] hover:bg-[#a3893f] text-white" onClick={() => startCheckout(t)}>Join & Pay</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white text-black">
          <DialogHeader>
            <DialogTitle>Membership Checkout</DialogTitle>
          </DialogHeader>
          <form onSubmit={completePayment} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">Tier</label>
                <Input value={`${selectedTier.tier} (${selectedTier.priceLabel})`} readOnly className="border-black/20" />
              </div>
              <div>
                <label className="block text-sm mb-1">Country <span className="text-red-600">*</span></label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="border-black/20"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {countries.map(c => (
                      <SelectItem key={c.code} value={c.name}>{c.name} {c.dialCode}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Chapter</label>
              <Select value={chapter} onValueChange={setChapter} disabled={availableChapters.length === 0}>
                <SelectTrigger className="border-black/20"><SelectValue placeholder={availableChapters.length === 0 ? "No chapters available" : "Select chapter"} /></SelectTrigger>
                <SelectContent>
                  {availableChapters.map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <Input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="border-black/20" required />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <Input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="border-black/20" required />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Mobile Number (OTP required) <span className="text-red-600">*</span></label>
              <div className="flex gap-2">
                <Input 
                  type="tel" 
                  value={mobile} 
                  onChange={e=>setMobile(e.target.value)} 
                  placeholder={selectedCountryData.placeholder}
                  className="border-black/20" 
                  required 
                />
                <Button type="button" variant="outline" className="border-black text-black hover:bg-black hover:text-white" onClick={()=>setOtpRequested(true)}>Send OTP</Button>
              </div>
              {otpRequested && (
                <div className="mt-2">
                  <div className="text-xs text-slate-600 mb-2">OTP sent to {selectedCountryData.dialCode} {mobile}</div>
                  <InputOTP maxLength={6} className="[&_input]:border-black/20">
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">Payment Method</label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger className="border-black/20"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="card">Card</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="netbanking">Net Banking</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm mb-1">Amount</label>
                <Input value={`₹ ${selectedTier.amount}`} readOnly className="border-black/20" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-[#b99b4c] hover:bg-[#a3893f] text-white">Pay & Join</Button>
            </DialogFooter>
          </form>
          <div className="text-xs text-slate-600 mt-2">After payment, confirmation is sent via Email, SMS, and WhatsApp.</div>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default Membership;


