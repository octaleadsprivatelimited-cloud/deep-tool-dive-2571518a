import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const DEMO_USERS = [
  { email: 'user@rise.com', password: 'user123', role: 'user', name: 'Demo User' },
  { email: 'admin@rise.com', password: 'admin123', role: 'admin', name: 'Admin' },
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginAs } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const found = DEMO_USERS.find((u) => u.email === email && u.password === password);
    if (found) {
      loginAs(found.role);
      toast.success(`Welcome, ${found.name}!`);
      navigate('/');
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-20 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-black uppercase mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Login to your RISE account</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-12">Login</Button>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account? <a href="/register" className="text-primary font-semibold hover:underline">Join RISE</a>
            </p>
          </form>
          <div className="mt-6 p-4 bg-muted rounded-lg text-xs text-muted-foreground space-y-1">
            <p className="font-semibold text-foreground text-sm mb-2">Demo Credentials:</p>
            <p>👤 User: <span className="font-mono">user@rise.com</span> / <span className="font-mono">user123</span></p>
            <p>🛡️ Admin: <span className="font-mono">admin@rise.com</span> / <span className="font-mono">admin123</span></p>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Login;
