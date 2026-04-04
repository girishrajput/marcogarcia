import React from 'react';
import Image from 'next/image';
import { Heart, Activity, Shield, ArrowRight, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

const SolaceLanding = () => {
  const services = [
    { title: "Hospice Care", icon: <Heart className="w-6 h-6" />, desc: "Compassionate end-of-life support." },
    { title: "Respite Care", icon: <Activity className="w-6 h-6" />, desc: "Temporary relief for primary caregivers." },
    { title: "Continuous Care", icon: <Shield className="w-6 h-6" />, desc: "Round-the-clock clinical monitoring." },
    { title: "Inpatient Care", icon: <UserPlus className="w-6 h-6" />, desc: "Specialized care in a clinical setting." },
  ];

  return (
    <div className="bg-slate-200 min-h-screen font-sans text-slate-800">
      
      {/* About Section - Creative Split Layout */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            {/* Decorative Background Element */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            
            <div className="relative z-1 overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src="/images/solace-main.png" // Replace with your actual path
                alt="Our Team" 
                width={600} 
                height={400}
                className="object-cover"
              />
            </div>
            
            {/* Stats Card Overlay */}
            <div className="absolute -bottom-10 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block leading-1 z-10">
              <p className="text-pink-600 font-bold text-3xl">10+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-pink-50 text-pink-600 rounded-full text-sm font-semibold tracking-wide uppercase">
              About Our Company
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Compassionate Care <br /> 
              <span className="text-pink-600">Tailored to You.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Solace Health Care, we provide more than just medical support; we provide dignity. Our interdisciplinary staff is committed to establishing a presence that feels like family, ensuring every step toward health is supported with excellence.
            </p>
            <button className="group flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-pink-200">
              LEARN MORE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Card Grid */}
      <section className="bg-white py-24 shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Services</h2>
            <p className="text-slate-500 text-lg">
              Whether you are recovering from surgery or managing a chronic condition, our professional team ensures your loved ones are in educated and caring hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-pink-200 hover:bg-white hover:shadow-2xl hover:shadow-pink-100 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white shadow-sm text-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolaceLanding;