import React from 'react';
import { User, Home } from 'lucide-react'; // Using Lucide for the icons

const CareServices = () => {
  const services = [
    {
      title: "Hospice Care",
      description: "A holistic approach for advanced illness that emphasizes quality of life with expert medical, spiritual, and emotional support.",
      features: ["Individualized care plans", "Pain and symptom control", "24/7 nurse availability"],
      icon: <User className="w-6 h-6 text-white" />,
      bgColor: "bg-[#0071ad]", // Matching the blue in the image
    },
    {
      title: "Home Health",
      description: "Professional therapeutic and nursing services at home so recovery and independence continue under compassionate supervision.",
      features: ["Physical, occupational therapy", "Skilled nursing visits", "Chronic illness monitoring"],
      icon: <Home className="w-6 h-6 text-white" />,
      bgColor: "bg-[#d81b60]", // Matching the pink/magenta in the image
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-12 bg-gray-200">
      {services.map((service, index) => (
        <div 
          key={index} 
          className={`${service.bgColor} w-full max-w-md rounded-2xl p-8 shadow-lg text-white transition-transform hover:scale-[1.02]`}
        >
          {/* Icon Circle */}
          <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
            {service.icon}
          </div>

          {/* Content */}
          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
          <p className="text-white/90 leading-relaxed mb-8">
            {service.description}
          </p>

          {/* List */}
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CareServices;