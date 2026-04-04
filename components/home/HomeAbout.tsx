import React from 'react';
import { MapPin, HeartPulse, Headphones, ArrowRight } from 'lucide-react';

const SolaceHealthHero = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-pink-600" />,
      title: "Local Excellence",
      description: "Solace Health Care is a trusted name for quality home health care and hospice services in Bakersfield, CA.",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-pink-600" />,
      title: "Patient Centric",
      description: "We believe in hearing and addressing all your health care needs with qualified staff committed to your safety.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-pink-600" />,
      title: "24/7 Support",
      description: "Our multilingual caregivers address psychological, social, and spiritual care for a home-like environment.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-400 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-400 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-sm font-bold tracking-widest text-sky-600 uppercase mb-3">
          Welcome to
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          SOLACE HEALTH <span className="text-sky-500">CARE, INC.</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed mb-12">
          Providing professional and certified services for hospice and home health care. 
          Our clinicians help deliver the best home health care services tailored to 
          <span className="font-semibold text-slate-800"> fit every need in Bakersfield, CA.</span>
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-pink-200"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-pink-50 transition-colors group-hover:bg-pink-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-pink-200/50 active:scale-95">
          MORE ABOUT US
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default SolaceHealthHero;