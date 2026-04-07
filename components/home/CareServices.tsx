"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
  // 1. Default data moved outside or handled via fallback
  // const defaultServices = [
  //   { 
  //     title: "Cosmetic Dentistry", 
  //     icon: <Sparkles size={22} strokeWidth={1.5} />, 
  //     desc: "Porcelain veneers and aesthetic bonding tailored to your facial symmetry." 
  //   },
  //   { 
  //     title: "Dental Implants", 
  //     icon: <ShieldCheck size={22} strokeWidth={1.5} />, 
  //     desc: "Titanium-reinforced restorative solutions for structural integrity." 
  //   },
  //   { 
  //     title: "Teeth Whitening", 
  //     icon: <Smile size={22} strokeWidth={1.5} />, 
  //     desc: "Advanced laser-whitening treatments delivering luminous results." 
  //   },
  //   { 
  //     title: "General Care", 
  //     icon: <Stethoscope size={22} strokeWidth={1.5} />, 
  //     desc: "Preventative diagnostics utilizing the latest imaging technology." 
  //   },
  //   { 
  //     title: "Smile Makeovers", 
  //     icon: <Heart size={22} strokeWidth={1.5} />, 
  //     desc: "Comprehensive aesthetic overhauls designed through 3D smile design." 
  //   },
  //   { 
  //     title: "Oral Health", 
  //     icon: <Clock size={22} strokeWidth={1.5} />, 
  //     desc: "Luxury periodontal care focused on long-term systemic wellness." 
  //   }
  // ];

  const defaultServices = [
  { 
    title: "Invisalign Bakersfield", 
    icon: <Smile size={22} strokeWidth={1.5} />, 
    desc: "Discreet clear aligner systems engineered for precise orthodontic correction." 
  },
  { 
    title: "Dental Implants Bakersfield", 
    icon: <ShieldCheck size={22} strokeWidth={1.5} />, 
    desc: "Permanent titanium implant solutions restoring function, strength, and aesthetics." 
  },
  { 
    title: "Emergency Dentist Bakersfield", 
    icon: <AlertCircle size={22} strokeWidth={1.5} />, 
    desc: "Immediate dental care for urgent pain, trauma, and unexpected oral conditions." 
  },
  { 
    title: "Root Canal Bakersfield", 
    icon: <Activity size={22} strokeWidth={1.5} />, 
    desc: "Advanced endodontic procedures to preserve natural teeth and eliminate infection." 
  },
  { 
    title: "Tooth Extraction Bakersfield", 
    icon: <Scissors size={22} strokeWidth={1.5} />, 
    desc: "Gentle and precise extractions ensuring minimal discomfort and optimal recovery." 
  },
  { 
    title: "Cosmetic Dentist Bakersfield", 
    icon: <Sparkles size={22} strokeWidth={1.5} />, 
    desc: "Personalized aesthetic treatments designed to enhance smile symmetry and beauty." 
  },
  { 
    title: "Teeth Whitening", 
    icon: <Sun size={22} strokeWidth={1.5} />, 
    desc: "Professional-grade whitening solutions for a brighter, more radiant smile." 
  },
  { 
    title: "Dental Crowns", 
    icon: <Hexagon size={22} strokeWidth={1.5} />, 
    desc: "Custom-crafted crowns restoring durability, function, and natural appearance." 
  },
  { 
    title: "Dental Fillings", 
    icon: <Edit3 size={22} strokeWidth={1.5} />, 
    desc: "Tooth-colored restorations designed for seamless repair and long-term protection." 
  },
  { 
    title: "Dentures", 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;