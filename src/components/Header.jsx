import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Header = ({ currentPage = 'Home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout, isAuthenticated } = useAuth();

  const baseNavItems = useMemo(
    () => [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Chapters', href: '/chapters' },
      { name: 'Events', href: '/events' },
      { name: 'History', href: '/history' },
      { name: 'Library', href: '/library' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Partners', href: '/partners' },
      { name: 'Membership', href: '/membership' },
      { name: 'Donate', href: '/donate' },
      { name: 'Contact', href: '/contact' },
    ],
    []
  );

  const servicesNavItems = useMemo(
    () => [
      { name: 'Resources', href: '/resources' },
      { name: 'Matrimonial', href: '/matrimonial' },
      { name: 'Entrepreneurs', href: '/entrepreneurs' },
      { name: 'Jobs Portal', href: '/jobs' },
      { name: 'Business Directory', href: '/business-directory' },
      { name: 'Health Portal', href: '/health-portal' },
      { name: 'Youth Portal', href: '/youth-portal' },
      { name: 'News', href: '/news' },
    ],
    []
  );

  const policyNavItems = useMemo(
    () => [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'Security Policy', href: '/security-policy' },
    ],
    []
  );

  const communityNavItems = useMemo(() => [...servicesNavItems, ...policyNavItems], [servicesNavItems, policyNavItems]);

  const navItems = useMemo(() => [...baseNavItems], [baseNavItems]);

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
              <li className="relative group">
                <motion.button
                  type="button"
                  className={`relative px-2 py-1 text-xs font-medium transition-colors duration-200 flex items-center gap-1 ${
                    communityNavItems.some((item) => item.name === currentPage)
                      ? 'text-black'
                      : 'text-slate-800 hover:text-black'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Community Hub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.855a.75.75 0 011.08 1.04l-4.25 4.417a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {communityNavItems.some((item) => item.name === currentPage) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
                <div className="absolute left-0 top-full mt-3 hidden min-w-[240px] rounded-xl border border-black/10 bg-white p-4 shadow-xl group-hover:block">
                  <div className="flex flex-col gap-3 text-left">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1">
                        Community Services
                      </div>
                      <div className="flex flex-col gap-1">
                        {servicesNavItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                              currentPage === item.name
                                ? 'bg-black text-white'
                                : 'text-slate-700 hover:bg-black/10 hover:text-black'
                            }`}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 mb-1">
                        Policies & Compliance
                      </div>
                      <div className="flex flex-col gap-1">
                        {policyNavItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                              currentPage === item.name
                                ? 'bg-black text-white'
                                : 'text-slate-700 hover:bg-black/10 hover:text-black'
                            }`}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            {!isAuthenticated && (
              <>
                <Button
                  asChild
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg"
                >
                  <a href="/login">Login</a>
                </Button>
                <Button
                  asChild
                  className="bg-[#f6c344] hover:bg-[#e3b030] text-black font-semibold px-6 py-2 rounded-lg border border-black/10"
                >
                  <a href="/signup">Sign Up</a>
                </Button>
              </>
            )}
            {isAuthenticated && (
              <Button
                variant="outline"
                className="border border-black text-black hover:bg-black hover:text-white font-semibold rounded-lg"
                onClick={logout}
              >
                Logout
              </Button>
            )}
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
                  className="rounded-lg bg-black/5 p-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                >
                  <div className="text-xs font-semibold uppercase text-slate-500 mb-2">Community Hub</div>
                  <div className="grid gap-3">
                    <div className="space-y-2">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Services
                      </div>
                      <div className="grid gap-2">
                        {servicesNavItems.map((item, index) => (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            className={`block rounded-lg px-3 py-2 text-xs font-medium transition-colors duration-200 ${
                              currentPage === item.name
                                ? 'bg-black text-white'
                                : 'text-slate-800 hover:bg-black/10 hover:text-black'
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (navItems.length + index) * 0.1, duration: 0.3 }}
                            whileHover={{ x: 5 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Policies
                      </div>
                      <div className="grid gap-2">
                        {policyNavItems.map((item, index) => (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            className={`block rounded-lg px-3 py-2 text-xs font-medium transition-colors duration-200 ${
                              currentPage === item.name
                                ? 'bg-black text-white'
                                : 'text-slate-800 hover:bg-black/10 hover:text-black'
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (navItems.length + servicesNavItems.length + index) * 0.1, duration: 0.3 }}
                            whileHover={{ x: 5 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="pt-4 border-t border-black/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                >
                  {!isAuthenticated ? (
                    <div className="grid gap-2">
                      <Button
                        asChild
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <a href="/login">Login</a>
                      </Button>
                      <Button
                        asChild
                        className="w-full bg-[#f6c344] hover:bg-[#e3b030] text-black font-semibold py-3 rounded-lg border border-black/10"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <a href="/signup">Sign Up</a>
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="w-full mb-3 border border-black text-black hover:bg-black hover:text-white font-semibold py-3 rounded-lg"
                      variant="outline"
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  )}
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
