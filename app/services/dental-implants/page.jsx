"use client";

import React from 'react';
import { motion } from 'framer-motion';
import InnerHeader from '@/components/InnerHeader';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Zap, 
  Anchor,
  Calendar,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

const DentalImplantsPage = () => {
  const benefits = [
    "Natural Look & Feel",
    "Prevents Bone Loss",
    "Lifetime Durability",
    "Restores Full Chewing Power"
  ];

  return (
    <main className="bg-white min-h-screen">
      <InnerHeader title="Dental Implants" />

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link 
          href="/#services" 
          className="flex items-center text-zinc-400 hover:text-zinc-900 transition-colors text-[10px] uppercase tracking-[0.3em]"
        >
          <ArrowLeft size={14} className="mr-2" /> Back to Expertise
        </Link>
      </div>

      {/* Hero / Introduction */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center mb-8">
            <ShieldCheck size={24} strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-zinc-900 mb-8 leading-tight">
            Permanent Restoration. <br/>Uncompromising Strength.
          </h2>
          <p className="text-lg text-zinc-500 font-light leading-relaxed mb-10">
            Dental implants are the gold standard for tooth replacement. By utilizing medical-grade titanium 
            posts that fuse with your jawbone, we provide a foundation that is as strong—if not stronger—than 
            your natural teeth.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-zinc-900 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center">
              Request Consultation <Calendar size={16} className="ml-3" />
            </button>
          </div>
        </motion.div>

        {/* Decorative Image/Visual Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="aspect-square bg-zinc-50 border border-zinc-100 relative group overflow-hidden"
        >
           <div className="absolute inset-0 flex items-center justify-center text-zinc-200 text-[10px] uppercase tracking-[0.5em] rotate-90">
            Clinical Precision
          </div>
          {/* Replace with your actual Dental Implant clinical image */}
          {/* <img src="/images/implants-hero.jpg" className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" /> */}
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-zinc-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 border border-zinc-100 flex flex-col items-center text-center"
              >
                <CheckCircle2 size={20} className="text-zinc-900 mb-4" />
                <span className="text-sm font-medium tracking-tight text-zinc-800">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Detail Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif text-zinc-900">The Implant Process</h3>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="text-zinc-300 font-serif text-3xl">01</div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Digital Assessment</h4>
                  <p className="text-zinc-500 text-sm font-light">We use 3D CT scans to map your bone structure with sub-millimeter precision.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-zinc-300 font-serif text-3xl">02</div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Placement</h4>
                  <p className="text-zinc-500 text-sm font-light">The titanium post is gently placed into the bone under local anesthesia or sedation.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-zinc-300 font-serif text-3xl">03</div>
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Osseointegration</h4>
                  <p className="text-zinc-500 text-sm font-light">The bone heals and bonds to the implant over a few months, creating a permanent anchor.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-12 text-white">
            <Award className="mb-6 opacity-50" size={32} />
            <h3 className="text-2xl font-serif mb-6">Expert Care in Bakersfield</h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
              Our clinical team specializes in complex restorative cases. We don't just replace teeth; 
              we restore the structural integrity of your facial profile and your quality of life.
            </p>
            <Link href="/contact" className="text-[10px] uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-all">
              Schedule your 3D Scan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DentalImplantsPage;