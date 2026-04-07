"use client";

import React from 'react';
import Link from "next/link"; 
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-zinc-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale brightness-[0.35] scale-105" 
          alt="Luxury Clinic Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-white/50 uppercase tracking-[0.4em] text-[10px] mb-10"
        >
          Precision Dentistry. Elevated Experience.
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-[7rem] font-serif text-white mb-12 leading-tight"
        >
          Clinical Mastery <br /> 
          <span className="italic font-light opacity-80 text-4xl md:text-[6rem]">Bakersfield, CA</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-8 justify-center"
        >
          <Link href="/book-a-visit" className="bg-white text-black px-14 py-5 text-[10px] uppercase tracking-[0.2em] hover:bg-zinc-200 transition duration-500">
            Book Appointment
          </Link>
            <Link href="/our-services" className="border border-white/20 text-white px-14 py-5 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition duration-500">
              View Services
            </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;