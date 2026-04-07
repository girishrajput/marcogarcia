import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 md:py-56 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        {/* Image Side */}
        <div className="bg-zinc-100 aspect-[4/5] grayscale overflow-hidden group relative">
          <img 
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1500" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            alt="Dr. Marco Garcia" 
          />
        </div>

        {/* Text Side */}
        <div className="space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif">
            Dr. Marco Garcia <br />
            <span className="italic opacity-60">Architect of Smiles</span>
          </h2>
          <p className="text-zinc-500 leading-relaxed text-lg font-light">
            Located in Bakersfield, our clinic bridges the gap between medical excellence and artisanal beauty. 
            Dr. Garcia approaches each procedure as a unique architectural challenge, ensuring that every 
            restoration is both functionally perfect and aesthetically sublime.
          </p>
          <div className="pt-10 border-t border-zinc-100">
            <p className="font-serif italic text-2xl text-zinc-800">
              "Luxury is a commitment to the highest standard of care."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;