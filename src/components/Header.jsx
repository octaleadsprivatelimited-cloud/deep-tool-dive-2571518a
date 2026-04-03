import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import riseLogo from '@/assets/rise-logo.png';

const Header = ({ currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout, isAuthenticated } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Directory', href: '/directory' },
    { name: 'Events', href: '/events' },
    { name: 'Mentorship', href: '/mentorship' },
    { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Contact', href: '/contact' },
    { name: 'Donate', href: '/donate' },
  ];

  const isTransparentHeader = pathname === '/' && !isScrolled;
  const activePage = currentPage ?? navItems.find((item) => item.href === pathname)?.name;
  const headerSurfaceClass = isTransparentHeader
    ? 'bg-transparent'
    : 'bg-secondary/95 shadow-lg backdrop-blur border-b border-border/10';
  const brandTextClass = 'text-primary-foreground';
  const navLinkClass = isTransparentHeader
    ? 'text-primary-foreground/90 hover:text-primary-foreground'
    : 'text-secondary-foreground/80 hover:text-secondary-foreground';
  const activeNavLinkClass = isTransparentHeader
    ? 'text-primary-foreground font-bold'
    : 'text-primary font-bold';
  const loginButtonClass = isTransparentHeader
    ? 'text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground'
    : 'text-secondary-foreground hover:bg-primary-foreground/10 hover:text-secondary-foreground';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerSurfaceClass}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src={riseLogo} alt="RISE Global Directory" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.filter(i => i.name !== 'Donate').map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activePage === item.name
                    ? activeNavLinkClass
                    : navLinkClass
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/donate"
              className="ml-1 px-4 py-2 text-sm font-bold rounded-full bg-white text-black hover:bg-white/90 transition-colors"
            >
              Donate
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <Button asChild variant="ghost" className={loginButtonClass}>
                  <a href="/login">Login</a>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6">
                  <a href="/register">Join Now</a>
                </Button>
              </>
            ) : (
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full" onClick={logout}>
                Logout
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${brandTextClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <nav className="bg-secondary rounded-xl mb-4 p-4 space-y-1 shadow-xl border border-border">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === item.name
                        ? 'bg-primary text-primary-foreground'
                        : 'text-secondary-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-border space-y-2">
                  {!isAuthenticated ? (
                    <>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full">
                        <a href="/register">Join Now</a>
                      </Button>
                      <Button asChild variant="outline" className="w-full border-border text-secondary-foreground rounded-full">
                        <a href="/login">Login</a>
                      </Button>
                    </>
                  ) : (
                    <Button className="w-full" variant="outline" onClick={() => { logout(); setIsMobileMenuOpen(false); }}>
                      Logout
                    </Button>
                  )}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
