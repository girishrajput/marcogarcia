"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  MapPin,
  Phone,
  Clock,
  Menu,
  X,
  Globe,
  Camera, // Replacement for Instagram
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  Stethoscope,
  Smile,
  Heart
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`text-2xl font-serif tracking-tighter transition-colors duration-500 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>
          GARCIA <span className="font-light italic text-sm tracking-widest">DENTAL</span>
        </div>

        <div className={`hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:opacity-40 transition-opacity">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className={`hidden md:block px-8 py-2.5 text-[10px] uppercase tracking-[0.2em] border transition duration-500 ${
            isScrolled 
              ? 'border-black text-black hover:bg-black hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-black'
          }`}>
            Book Appointment
          </button>
          
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className={isScrolled ? "text-black" : "text-white"} size={20} />
            ) : (
              <Menu className={isScrolled ? "text-black" : "text-white"} size={20} />
            )}
          </button>
        </div>
      </div>

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
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-black text-[10px] uppercase tracking-[0.3em]">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function LuxuryDentalLanding() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const services = [
    { title: "Cosmetic Dentistry", icon: <Sparkles size={20} />, desc: "Porcelain veneers and aesthetic bonding tailored to your facial symmetry." },
    { title: "Dental Implants", icon: <ShieldCheck size={20} />, desc: "Titanium-reinforced restorative solutions for structural integrity." },
    { title: "Teeth Whitening", icon: <Smile size={20} />, desc: "Advanced laser-whitening treatments delivering luminous results." },
    { title: "General Care", icon: <Stethoscope size={20} />, desc: "Preventative diagnostics utilizing the latest imaging technology." },
    { title: "Smile Makeovers", icon: <Heart size={20} />, desc: "Comprehensive aesthetic overhauls designed through 3D smile design." },
    { title: "Oral Health", icon: <Clock size={20} />, desc: "Luxury periodontal care focused on long-term systemic wellness." }
  ];

  return (
    <main className="bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[60] origin-left" style={{ scaleX }} />

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-zinc-950">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale brightness-[0.35] scale-105" 
            alt="Clinic Interior"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/50 uppercase tracking-[0.4em] text-[10px] mb-10">
            Precision Dentistry. Elevated Experience.
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-[7rem] font-serif text-white mb-12 leading-tight">
            Clinical Mastery <br /> 
            <span className="italic font-light opacity-80 text-4xl md:text-[6rem]">Bakersfield, CA</span>
          </motion.h1>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="bg-white text-black px-14 py-5 text-[10px] uppercase tracking-[0.2em] hover:bg-zinc-200 transition duration-500">
              Book Appointment
            </button>
            <button className="border border-white/20 text-white px-14 py-5 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition duration-500">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-56 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="bg-zinc-100 aspect-[4/5] grayscale overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1500" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Dr Garcia" 
            />
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-serif">Dr. Marco Garcia <br /><span className="italic opacity-60">Architect of Smiles</span></h2>
            <p className="text-zinc-500 leading-relaxed text-lg font-light">
              Located in Bakersfield, our clinic bridges the gap between medical excellence and artisanal beauty. Dr. Garcia approaches each procedure as a unique architectural challenge.
            </p>
            <div className="pt-10 border-t border-zinc-100">
              <p className="font-serif italic text-2xl text-zinc-800">"Luxury is a commitment to the highest standard of care."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-zinc-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-24">Clinical Services</h2>
          <div className="grid md:grid-cols-3 gap-[1px] bg-zinc-200 border border-zinc-200">
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                whileHover={{ backgroundColor: "#000", color: "#fff" }} 
                className="bg-white p-12 md:p-16 group transition-all duration-700 flex flex-col"
              >
                <div className="text-zinc-300 group-hover:text-white mb-8 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mb-6">{service.title}</h3>
                <p className="text-zinc-400 text-sm font-light mb-12 group-hover:text-zinc-500">{service.desc}</p>
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity text-[9px] uppercase tracking-widest flex items-center">
                  Learn More <ArrowRight size={12} className="ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section id="experience" className="bg-black text-white py-40 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 text-center">
          {[
            { label: "Clinical Experience", val: "15+" },
            { label: "Successful Cases", val: "8k+" },
            { label: "Technology Grade", val: "A+" },
            { label: "Patient Retention", val: "99%" }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-6xl font-serif mb-4 tracking-tighter">{stat.val}</p>
              <p className="text-zinc-500 uppercase tracking-[0.3em] text-[9px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-24">
          <div className="space-y-8">
            <div className="text-xl font-serif tracking-tighter">GARCIA DENTAL</div>
            <p className="text-zinc-500 text-xs font-light max-w-xs">Bakersfield's premier destination for artisanal dentistry.</p>
            <div className="flex gap-6">
              <Camera size={18} className="text-zinc-600 hover:text-white transition cursor-pointer" />
              <Globe size={18} className="text-zinc-600 hover:text-white transition cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] mb-10 text-zinc-300">The Studio</h4>
            <p className="text-zinc-500 text-[11px] tracking-widest uppercase flex items-center">
              <MapPin size={14} className="mr-4" /> Bakersfield, CA 93301
            </p>
          </div>
          <div className="text-zinc-500 text-[11px] tracking-widest uppercase space-y-4">
             <h4 className="text-[10px] uppercase tracking-[0.3em] mb-10 text-zinc-300">Navigation</h4>
             <a href="#about" className="block hover:text-white transition">About</a>
             <a href="#services" className="block hover:text-white transition">Services</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 text-[8px] uppercase tracking-[0.5em] text-zinc-800">
          © 2026 Dr. Marco Garcia
        </div>
      </footer>
    </main>
  );
}