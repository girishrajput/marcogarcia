import React from 'react';
import { Clock, HeartPulse, UserCheck, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "24/7 Access To Care",
    description: "Round-the-clock support ensuring you never have to face health challenges alone.",
    icon: Clock,
  },
  {
    title: "Personalized Care",
    description: "Customized treatment plans tailored specifically to your unique health needs.",
    icon: HeartPulse,
  },
  {
    title: "Qualified Healthcare Professionals",
    description: "Our team consists of board-certified experts dedicated to your well-being.",
    icon: UserCheck,
  },
  {
    title: "Experienced Clinical Team",
    description: "Decades of collective experience providing top-tier medical excellence.",
    icon: ShieldCheck,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0099cc] uppercase tracking-wide">
            Why Choose Solace Healthcare, Inc.
          </h2>
          <div className="mt-4 w-24 h-1 bg-[#0099cc] mx-auto rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2 text-center"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-sky-50 text-[#0099cc] group-hover:bg-[#0099cc] group-hover:text-white transition-colors duration-300">
                <feature.icon size={40} strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#0099cc] transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Subtle Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0099cc] transition-all duration-300 group-hover:w-full rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;