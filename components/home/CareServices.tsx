"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link
import { 
  Sparkles, 
  ShieldCheck, 
  Smile, 
  AlertCircle, 
  Activity, 
  Scissors, 
  ArrowRight,
  Sun,
  Hexagon,
  Edit3,
  Users
} from "lucide-react";

const Services = ({ items = [] }) => {
  

  const defaultServices = [
  { 
    title: "Invisalign Bakersfield", 
    slug: "invisalign",
    icon: <Smile size={22} strokeWidth={1.5} />, 
    desc: "Discreet clear aligner systems engineered for precise orthodontic correction." 
  },
  { 
    title: "Dental Implants Bakersfield", 
    slug: "dental-implants",
    icon: <ShieldCheck size={22} strokeWidth={1.5} />, 
    desc: "Permanent titanium implant solutions restoring function, strength, and aesthetics." 
  },
  { 
    title: "Emergency Dentist Bakersfield", 
    slug: "emergency-dentist",
    icon: <AlertCircle size={22} strokeWidth={1.5} />, 
    desc: "Immediate dental care for urgent pain, trauma, and unexpected oral conditions." 
  },
  { 
    title: "Root Canal Bakersfield", 
    slug: "root-canal",
    icon: <Activity size={22} strokeWidth={1.5} />, 
    desc: "Advanced endodontic procedures to preserve natural teeth and eliminate infection." 
  },
  { 
    title: "Tooth Extraction Bakersfield", 
    slug: "tooth-extraction",
    icon: <Scissors size={22} strokeWidth={1.5} />, 
    desc: "Gentle and precise extractions ensuring minimal discomfort and optimal recovery." 
  },
  { 
    title: "Cosmetic Dentist Bakersfield", 
    slug: "cosmetic-dentist",
    icon: <Sparkles size={22} strokeWidth={1.5} />, 
    desc: "Personalized aesthetic treatments designed to enhance smile symmetry and beauty." 
  },
  { 
    title: "Teeth Whitening", 
    slug: "teeth-whitening",
    icon: <Sun size={22} strokeWidth={1.5} />, 
    desc: "Professional-grade whitening solutions for a brighter, more radiant smile." 
  },
  { 
    title: "Dental Crowns", 
    slug: "dental-crowns",
    icon: <Hexagon size={22} strokeWidth={1.5} />, 
    desc: "Custom-crafted crowns restoring durability, function, and natural appearance." 
  },
  { 
    title: "Dental Fillings", 
    slug: "dental-fillings",
    icon: <Edit3 size={22} strokeWidth={1.5} />, 
    desc: "Tooth-colored restorations designed for seamless repair and long-term protection." 
  },
  { 
    title: "Dentures", 
    slug: "dentures",
    icon: <Users size={22} strokeWidth={1.5} />, 
    desc: "Comfortable, natural-looking dentures restoring confidence and oral functionality." 
  }
];

  const displayData = items.length > 0 ? items : defaultServices;

  return (
    <section id="services" className="py-32 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-4">Our Expertise</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-24 text-zinc-900">Clinical Services</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-[1px] bg-zinc-200 border border-zinc-200">
          {displayData.map((service, i) => (
            <Link href={`/services/${service.slug}`} key={i}>
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: "#000", color: "#fff" }} 
              className="bg-white p-12 md:p-16 group transition-all duration-700 flex flex-col cursor-pointer "
            >
              <div className="text-zinc-400 group-hover:text-white mb-8 transition-colors duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-serif mb-6 tracking-tight">{service.title}</h3>
              
              <p className="text-zinc-500 text-sm font-light mb-12 group-hover:text-zinc-400 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-[10px] uppercase tracking-[0.2em] flex items-center font-medium">
                Explore Treatment <ArrowRight size={14} className="ml-3 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;