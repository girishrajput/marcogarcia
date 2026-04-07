"use client";

import React from 'react';
import { motion } from 'framer-motion';
import InnerHeader from '@/components/InnerHeader';
import { 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Quote,
  Star,
  ShieldCheck,
  Heart,
  Smile,
  Calendar,
  ArrowLeft
} from 'lucide-react';

const Page = () => {
  const certifications = [
    "American Dental Association",
    "California Dental Association",
    "Academy of General Dentistry",
    "Invisalign Diamond Provider"
  ];

  return (
    <>
      <InnerHeader title="Invisalign Bakersfield" />

      {/* Profile Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Image with Decorative Elements */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] bg-zinc-100 overflow-hidden relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 uppercase tracking-[0.2em] text-[10px]">
                  Professional Portrait
                </div>
                {/* <img src="/dr-image.jpg" className="object-cover w-full h-full grayscale" alt="Doctor" /> */}
              </div>
              
              {/* Floating "Years of Experience" Card */}
              <div className="absolute -bottom-8 -right-8 bg-zinc-900 text-white p-8 hidden md:block">
                <p className="text-4xl font-serif mb-1">15+</p>
                <p className="text-[10px] uppercase tracking-widest opacity-70">Years of Clinical<br/>Excellence</p>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 lg:pl-12"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 block">Our Founder</span>
              <h2 className="text-5xl font-serif text-zinc-900 mb-8">Dr. Julian Sterling, DDS</h2>
              
              <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-lg">
                <p>
                  Specializing in advanced restorative and cosmetic dentistry, Dr. Sterling’s 
                  approach is defined by a commitment to "Biomimetic Dentistry"—the art of 
                  mimicking natural tooth structure.
                </p>
                
                {/* Quote Section */}
                <div className="py-8 border-y border-zinc-100 my-10 relative">
                  <Quote className="absolute top-4 left-0 opacity-10 text-zinc-900" size={40} />
                  <p className="text-2xl font-serif italic text-zinc-800 pl-8">
                    "A beautiful smile isn't just about aesthetics; it's about the confidence 
                    that changes how you interact with the world."
                  </p>
                </div>
              </div>

              {/* Education & Credentials */}
              <div className="grid sm:grid-cols-2 gap-8 mt-12">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-zinc-900" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900">Education</h4>
                    <p className="text-sm text-zinc-500 font-light mt-1">UCLA School of Dentistry, Doctorate of Dental Surgery</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0">
                    <Award size={18} className="text-zinc-900" />
                  </div>
                  <div>
                    <h4 className="font-medium text-zinc-900">Certifications</h4>
                    <p className="text-sm text-zinc-500 font-light mt-1">Board Certified Implantologist & Invisalign Gold Provider</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missing Section 1: Certifications / Memberships */}
      <section className="py-20 border-t border-zinc-100 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale">
            {certifications.map((item, i) => (
              <span key={i} className="text-[10px] uppercase tracking-[0.3em] font-semibold text-zinc-900">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Missing Section 2: Values/Why Dr. Sterling */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-3xl font-serif mb-4">The Clinical Philosophy</h3>
            <div className="w-12 h-[1px] bg-zinc-300 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "Patient Comfort", 
                icon: <Heart size={24}/>, 
                desc: "We utilize sedation dentistry and gentle techniques to ensure a painless experience." 
              },
              { 
                title: "Tech-Driven", 
                icon: <ShieldCheck size={24}/>, 
                desc: "3D Imaging and digital impressions for 100% precision in every procedure." 
              },
              { 
                title: "Longevity", 
                icon: <Star size={24}/>, 
                desc: "Our work is designed to last a lifetime, using only the highest grade biocompatible materials." 
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-center group">
                <div className="mb-6 inline-block text-zinc-400 group-hover:text-zinc-900 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-serif mb-4">{feature.title}</h4>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;