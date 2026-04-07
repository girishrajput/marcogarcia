"use client";

import React from 'react';
import { motion } from 'framer-motion';
import InnerHeader from '@/components/InnerHeader';
import { 
  ClipboardCheck, 
  FileText, 
  CreditCard, 
  ArrowRight,
  Download,
  Info,
  CheckCircle2
} from "lucide-react";

const NewPatientsPage = () => {
  const steps = [
    {
      title: "Digital Registration",
      desc: "Complete your medical history forms online to save 15 minutes at check-in.",
      icon: <FileText className="w-6 h-6" strokeWidth={1.5} />,
      action: "Complete Forms"
    },
    {
      title: "Insurance Verification",
      desc: "Upload your provider details so we can confirm coverage before you arrive.",
      icon: <CreditCard className="w-6 h-6" strokeWidth={1.5} />,
      action: "Verify Insurance"
    },
    {
      title: "The First Visit",
      desc: "A comprehensive 60-minute evaluation including 3D imaging and consultation.",
      icon: <ClipboardCheck className="w-6 h-6" strokeWidth={1.5} />,
      action: "What to Expect"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <InnerHeader title="New Patients Guide" />

      {/* 2. Intro Section */}
      <section className="py-24 px-6 border-b border-zinc-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-zinc-900 leading-tight">
              Seamless Onboarding for <br />
              <span className="italic font-light text-zinc-400">Exceptional Care</span>
            </h2>
            <p className="text-zinc-500 text-lg font-light leading-relaxed">
              Welcome to Garcia Dental. We’ve streamlined our new patient process to ensure 
              your focus remains on your health and comfort. Follow the steps below to 
              prepare for your first appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Steps Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group"
              >
                <div className="w-16 h-16 bg-zinc-50 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-700">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 text-zinc-900">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light">
                  {step.desc}
                </p>
                <button className="flex items-center text-[10px] uppercase tracking-[0.2em] font-semibold border-b border-zinc-200 pb-2 group-hover:border-black transition-all">
                  {step.action} <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Checklist & Portal Section */}
      <section className="py-32 bg-zinc-950 text-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-12">First Visit Checklist</h2>
            <div className="space-y-8">
              {[
                { t: "Identification", d: "A valid government-issued photo ID." },
                { t: "Insurance Card", d: "Current dental insurance provider details." },
                { t: "Medical Records", d: "List of current medications and allergies." },
                { t: "Recent X-Rays", d: "Digital copies from the last 6 months (if available)." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <CheckCircle2 className="text-zinc-700 group-hover:text-white transition-colors shrink-0" size={20} strokeWidth={1} />
                  <div>
                    <h4 className="text-sm uppercase tracking-widest mb-1 text-zinc-200">{item.t}</h4>
                    <p className="text-zinc-500 text-sm font-light">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-12 border border-zinc-800/50 backdrop-blur-sm"
          >
            <Info className="text-zinc-600 mb-8" size={32} strokeWidth={1} />
            <h4 className="text-2xl font-serif mb-4">Patient Portal</h4>
            <p className="text-zinc-500 text-sm font-light mb-10 leading-relaxed">
              Securely access your records, update medical history, and view your 
              customized treatment plans through our digital studio portal.
            </p>
            <div className="space-y-4">
              <button className="w-full py-5 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-zinc-200 transition-all">
                Portal Login
              </button>
              <button className="w-full py-5 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-zinc-800 hover:text-white transition-all flex items-center justify-center gap-3">
                <Download size={14} /> Download Welcome Packet
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-zinc-400 text-[10px] uppercase tracking-[0.4em] mb-6">Need Assistance?</p>
          <h2 className="text-3xl font-serif mb-8">Our concierge team is here to help with your transition.</h2>
          <a href="tel:6615550123" className="text-xl font-light hover:opacity-50 transition-opacity">
            (661) 555-0123
          </a>
        </div>
      </section>
    </main>
  );
};

export default NewPatientsPage;