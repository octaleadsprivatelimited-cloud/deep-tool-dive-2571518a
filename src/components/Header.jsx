import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ currentPage = 'Home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Chapters', href: '/chapters' },
    { name: 'Events', href: '/events' },
    { name: 'Resources', href: '/resources' },
    { name: 'Library', href: '/library' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Membership', href: '/membership' },
    { name: 'Donate', href: '/donate' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/login' },
    { name: 'Sign Up', href: '/signup' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-black/20 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Shield className="text-black" size={32} />
            <div className="text-2xl font-bold text-black">KGF</div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    className={`relative px-2 py-1 text-xs font-medium transition-colors duration-200 ${
                      currentPage === item.name 
                        ? 'text-black'
                        : 'text-slate-800 hover:text-black'
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.name}
                    {currentPage === item.name && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button 
              asChild
              className="border border-black text-black hover:bg-black hover:text-white font-semibold px-6 py-2 rounded-lg"
            >
              <a href="/donate">Donate</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-slate-800 hover:text-black transition-colors"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <motion.nav
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white border border-black/20 rounded-lg p-4 space-y-2"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors duration-200 ${
                      currentPage === item.name
                        ? 'text-black font-semibold'
                        : 'text-slate-800 hover:bg-black/10 hover:text-black'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  className="pt-4 border-t border-black/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                >
                  <Button 
                    asChild
                    className="w-full border border-black text-black hover:bg-black hover:text-white font-semibold py-3 rounded-lg"
                  >
                    <a href="/donate">Donate</a>
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
