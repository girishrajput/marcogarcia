"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// FIX: Import Link from next/link, not lucide-react
import Link from "next/link"; 
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/our-services" },
    { name: "Meet the Doctor", href: "/meet-the-doctor" },
    { name: "New Patients Guide", href: "/new-patients-guide" },
    { name: "Patient Stories", href: "/patient-stories" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Now correctly using next/link */}
        <Link 
          href="/" 
          className={`text-2xl font-serif tracking-tighter transition-colors duration-500 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}
        >
          Everwell Dental <span className="font-light italic text-sm tracking-widest">Bakersfield</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex space-x-6 text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:opacity-40 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <Link href="/book-a-visit" className={`hidden md:block px-8 py-2.5 text-[10px] uppercase tracking-[0.2em] border transition duration-500 ${
            isScrolled 
              ? 'border-black text-black hover:bg-black hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-black'
          }`}>
            Book a Visit
          </Link>
          
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className={isScrolled ? "text-black" : "text-white"} size={20} />
            ) : (
              <Menu className={isScrolled ? "text-black" : "text-white"} size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="flex flex-col items-center py-12 space-y-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-black text-[10px] uppercase tracking-[0.3em]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;