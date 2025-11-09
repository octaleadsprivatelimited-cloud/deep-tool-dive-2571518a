import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock, User, Apple, Facebook } from 'lucide-react';

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" className="w-4 h-4" aria-hidden>
    <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.3h147.8c-6.4 34.6-25.6 63.9-54.5 83.5v69.2h88.2c51.7-47.6 80.5-117.7 80.5-197.6z"/>
    <path fill="#34A853" d="M272 544.3c73.5 0 135.1-24.3 180.2-66.1l-88.2-69.2c-24.5 16.5-55.8 26.3-92 26.3-70.7 0-130.6-47.7-152-111.9H29.8v70.3C74.6 486.5 167.1 544.3 272 544.3z"/>
    <path fill="#FBBC05" d="M120 323.4c-10.8-32.4-10.8-67.6 0-100l.1-70.3H29.8C-9.9 201.7-9.9 342.6 29.8 423.7L120 323.4z"/>
    <path fill="#EA4335" d="M272 106.1c39.9-.6 78 14 106.9 40.1l79.8-79.8C407.1 23.2 344.1-.1 272 0 167.1 0 74.6 57.8 29.8 170.8l90.3 70.3C141.4 177 201.3 129.3 272 129.3z"/>
  </svg>
);

const Signup = () => {
  const [otpRequested, setOtpRequested] = React.useState(false);
  const [country, setCountry] = React.useState('India');
  
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

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#003386'}}>
      <Header currentPage="Signup" />

      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="border-black/10">
            <CardHeader>
              <CardTitle className="text-2xl">Create your account</CardTitle>
              <CardDescription className="text-slate-600">Join Kamma Global Federation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <Input type="text" placeholder="Your name" className="pl-9 border-black/20" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <Input type="email" placeholder="you@example.com" className="pl-9 border-black/20" />
                  </div>
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
              <div>
                <label className="block text-sm mb-1">Mobile Number<span className="text-red-600"> *</span></label>
                <div className="flex gap-2">
                  <Input
                    type="tel"
                    inputMode="tel"
                    placeholder={selectedCountryData.placeholder}
                    className="border-black/20"
                    required
                  />
                  <Button type="button" variant="outline" className="shrink-0 border-black text-black hover:bg-black hover:text-white" onClick={() => setOtpRequested(true)}>Send OTP</Button>
                </div>
                {otpRequested && (
                  <div className="mt-3 space-y-2">
                    <div className="text-xs text-slate-600">Enter the 6-digit OTP sent to {selectedCountryData.dialCode} (your mobile)</div>
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
                <div>
                  <label className="block text-sm mb-1">Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <Input type="password" placeholder="Create a password" className="pl-9 border-black/20" />
                  </div>
                </div>
                <Button className="w-full bg-[#b99b4c] hover:bg-[#a3893f] text-white">Create Account</Button>

                <div className="flex items-center gap-3">
                  <div className="h-px bg-black/10 w-full" />
                  <span className="text-xs text-slate-500">OR</span>
                  <div className="h-px bg-black/10 w-full" />
                </div>
                <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">
                  Mobile number verification is required for all sign ups, including Google/Apple/Facebook.
                </div>

                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white flex items-center justify-center gap-2">
                  <GoogleIcon /> Continue with Google
                </Button>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white flex items-center justify-center gap-2">
                  <Apple className="w-4 h-4" /> Continue with Apple
                </Button>
                <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white flex items-center justify-center gap-2">
                  <Facebook className="w-4 h-4" /> Continue with Facebook
                </Button>

                <div className="text-sm text-slate-600 text-center">
                  Already have an account? <a href="/login" className="underline">Login</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Signup;


