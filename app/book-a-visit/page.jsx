"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InnerHeader from '@/components/InnerHeader';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageSquare,
  ChevronRight
} from "lucide-react";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  return (
    <main className="bg-white min-h-screen">
      <InnerHeader title="Reserve Your Visit" />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            
            {/* Left Column: Information & Trust */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-serif mb-6">Concierge Scheduling</h2>
                <p className="text-zinc-500 font-light leading-relaxed max-w-md">
                  Our team provides personalized scheduling to ensure your visit is 
                  seamlessly integrated into your day. Request a time below, and 
                  our concierge will contact you within two hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center shrink-0">
                    <Clock size={20} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest mb-1">Clinic Hours</h4>
                    <p className="text-zinc-500 text-sm font-light">Mon — Fri: 8:00am – 6:00pm</p>
                    <p className="text-zinc-500 text-sm font-light">Sat: By Appointment Only</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center shrink-0">
                    <Calendar size={20} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest mb-1">New Patients</h4>
                    <p className="text-zinc-500 text-sm font-light">Please allow 60-90 minutes for your initial</p>
                    <p className="text-zinc-500 text-sm font-light">comprehensive evaluation.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-zinc-50 border border-zinc-100 italic font-serif text-zinc-600">
                "We respect your time as much as your health. Our boutique approach 
                ensures minimal wait times and undivided attention."
              </div>
            </motion.div>

            {/* Right Column: The Request Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white"
            >
              <form className="space-y-10">
                {/* Name Field */}
                <div className="relative border-b border-zinc-200 pb-2 focus-within:border-black transition-colors">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-transparent outline-none text-lg font-light placeholder:text-zinc-200"
                  />
                </div>

                {/* Contact Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="relative border-b border-zinc-200 pb-2 focus-within:border-black transition-colors">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full bg-transparent outline-none text-lg font-light placeholder:text-zinc-200"
                    />
                  </div>
                  <div className="relative border-b border-zinc-200 pb-2 focus-within:border-black transition-colors">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(661) 000-0000"
                      className="w-full bg-transparent outline-none text-lg font-light placeholder:text-zinc-200"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="relative border-b border-zinc-200 pb-2 focus-within:border-black transition-colors">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">Desired Treatment</label>
                  <select className="w-full bg-transparent outline-none text-lg font-light appearance-none cursor-pointer">
                    <option value="">Select a service</option>
                    <option value="cosmetic">Cosmetic Consultation</option>
                    <option value="implant">Dental Implants</option>
                    <option value="general">General Cleaning & Exam</option>
                    <option value="emergency">Emergency Care</option>
                  </select>
                </div >

                {/* Message Field */}
                <div className="relative border-b border-zinc-200 pb-2 focus-within:border-black transition-colors">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-2">Additional Notes</label>
                  <textarea 
                    rows={3}
                    placeholder="Preferred times or specific concerns..."
                    className="w-full bg-transparent outline-none text-lg font-light placeholder:text-zinc-200 resize-none"
                  />
                </div>

                <button className="w-full py-6 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold flex items-center justify-center group hover:bg-zinc-800 transition-all duration-500">
                  Submit Request <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-zinc-400 text-[9px] uppercase tracking-widest">
                  Secure & Confidential Transmission
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Emergency Strip */}
      <section className="py-12 bg-zinc-50 border-t border-zinc-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <p className="text-sm font-light text-zinc-600">Experiencing a dental emergency?</p>
          </div>
          <a href="tel:6615550123" className="text-xl font-serif border-b border-black pb-1 hover:text-zinc-500 hover:border-zinc-300 transition-all">
            Call (661) 555-0123 for Immediate Care
          </a>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;