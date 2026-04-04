"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Stars, CheckCircle2, ArrowRight } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';

const FeatureSection = () => {
  const features = [
    {
      title: "Personalized Home Care And Hospice Care Plans",
      description: "Solace Health Care understands and analyzes your needs to devise a personalized care plan for you. We make sure that you get what you need and the way you want it. Our dedicated clinicians are committed to support you with dignity.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      // Senior looking at photo album with nurse
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
      accent: "bg-rose-500",
      bg: "bg-rose-50"
    },
    {
      title: "The Benefits Of Hospice Care",
      description: "Our team of healthcare professionals are specially trained to ensure that our hospice patient's last few months, weeks, or days are spent in complete comfort and dignity. We provide a supportive, in-home environment.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      // Happy senior couple with a caregiver
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800",
      accent: "bg-blue-500",
      bg: "bg-blue-50",
      reverse: true
    },
    {
      title: "What Sets Us Apart",
      description: "We are a health care agency that recognizes each patient’s needs individually. What sets us apart is our dedicated interdisciplinary and compassionate team that offers exceptional holistic care and ethical excellence.",
      icon: <Stars className="w-6 h-6 text-indigo-500" />,
      // Nurse holding senior patient's hand
      image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800",
      accent: "bg-indigo-500",
      bg: "bg-indigo-50"
    }
  ];

  return (
  <>
  <InnerHeader
        title="About Us"

      />

  
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="space-y-32">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col lg:flex-row items-center gap-16 ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image Side */}
            <div className="flex-1 relative">
              {/* Decorative Circle Background */}
              <div className={`absolute -inset-6 ${feature.bg} rounded-full blur-3xl opacity-60 scale-90 group-hover:scale-100 transition-transform duration-700`}></div>
              
              <div className="relative h-[450px] w-full max-w-[500px] mx-auto group">
                {/* Main Image Frame */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
              
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${feature.bg} ${feature.icon.props.className.split(' ').find(c => c.startsWith('text-'))} font-semibold text-sm tracking-wide uppercase`}>
                  {feature.icon}
                  Care Excellence
                </span>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15]">
                  {feature.title}
                </h2>
                
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Compassionate Staff", "Custom Care Plans", "24/7 Support", "Holistic Approach"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700">
                    <div className={`p-1 rounded-full ${feature.bg}`}>
                      <CheckCircle2 className={`w-4 h-4 ${feature.icon.props.className.split(' ').find(c => c.startsWith('text-'))}`} />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-rose-600 transition-all duration-300 shadow-xl shadow-slate-200">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
};

export default FeatureSection;