import React from 'react';
import { MapPin, Globe, Camera } from "lucide-react";

const Footer = () => {
  return (
    <>
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
    <footer id="contact" className="bg-black text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-24">
        
        {/* Branding Column */}
        <div className="space-y-8">
          <div className="text-xl font-serif tracking-tighter">Everwell Dental Bakersfield</div>
          <p className="text-zinc-500 text-xs font-light max-w-xs">
            Bakersfield's premier destination for artisanal dentistry and clinical excellence.
          </p>
          <div className="flex gap-6">
            <Camera size={18} className="text-zinc-600 hover:text-white transition cursor-pointer" />
            <Globe size={18} className="text-zinc-600 hover:text-white transition cursor-pointer" />
          </div>
        </div>

        {/* Location Column */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] mb-10 text-zinc-300">The Studio</h4>
          <p className="text-zinc-500 text-[11px] tracking-widest uppercase flex items-center">
            <MapPin size={14} className="mr-4 text-zinc-600" /> Bakersfield, CA 93301
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="text-zinc-500 text-[11px] tracking-widest uppercase space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.3em] mb-10 text-zinc-300">Navigation</h4>
          <a href="#about" className="block hover:text-white transition">About</a>
          <a href="#services" className="block hover:text-white transition">Services</a>
          <a href="#experience" className="block hover:text-white transition">Experience</a>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 text-[8px] uppercase tracking-[0.5em] text-zinc-800">
        © {new Date().getFullYear()} Dr. Marco Garcia | All Rights Reserved
      </div>
    </footer>
    </>
  );
};

export default Footer;