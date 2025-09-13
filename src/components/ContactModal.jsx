import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, Mail, Globe, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    website: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      number: '',
      email: '',
      website: '',
      message: ''
    });
    
    setIsSubmitting(false);
    onClose();
    
    // Show success message (you can replace this with actual form submission)
    alert('Thank you for your interest! We will contact you soon.');
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: { 
        duration: 0.2 
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Container with Header Offset */}
          <div className="relative w-full max-w-sm sm:max-w-md mx-2" style={{ marginTop: '60px' }}>
            {/* Modal */}
            <motion.div
              className="relative bg-slate-900 border border-red-500/20 rounded-xl sm:rounded-2xl shadow-2xl w-full max-h-[75vh] sm:max-h-[70vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-red-500/30">
                <div className="flex-1 pr-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-red-400">Get Started</h2>
                  <p className="text-slate-400 text-xs sm:text-sm">Let's discuss your cybersecurity needs</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-slate-400 hover:text-red-400 hover:bg-red-500/10 flex-shrink-0"
                >
                  <X size={18} className="sm:w-5 sm:h-5" />
                </Button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {/* Name Field */}
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-1 sm:gap-2">
                    <User size={14} className="sm:w-4 sm:h-4 text-red-400" />
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-slate-800 border-red-500/30 text-white placeholder-slate-400 focus:border-red-500 text-sm h-9 sm:h-10"
                  />
                </div>

                {/* Phone Number Field */}
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-1 sm:gap-2">
                    <Phone size={14} className="sm:w-4 sm:h-4 text-red-400" />
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                    className="bg-slate-800 border-red-500/30 text-white placeholder-slate-400 focus:border-red-500 text-sm h-9 sm:h-10"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-1 sm:gap-2">
                    <Mail size={14} className="sm:w-4 sm:h-4 text-red-400" />
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    className="bg-slate-800 border-red-500/30 text-white placeholder-slate-400 focus:border-red-500 text-sm h-9 sm:h-10"
                  />
                </div>

                {/* Website Field */}
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-1 sm:gap-2">
                    <Globe size={14} className="sm:w-4 sm:h-4 text-red-400" />
                    Website Address
                  </label>
                  <Input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://your-website.com"
                    className="bg-slate-800 border-red-500/30 text-white placeholder-slate-400 focus:border-red-500 text-sm h-9 sm:h-10"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-slate-300 flex items-center gap-1 sm:gap-2">
                    <MessageSquare size={14} className="sm:w-4 sm:h-4 text-red-400" />
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your cybersecurity requirements..."
                    rows={3}
                    required
                    className="bg-slate-800 border-red-500/30 text-white placeholder-slate-400 focus:border-red-500 resize-none text-sm"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="text-xs sm:text-sm">Submitting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Send size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;