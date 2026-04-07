"use client";

import React from 'react';
import { motion } from 'framer-motion';
import InnerHeader from '@/components/InnerHeader';
import { Quote, Star, PlayCircle, ArrowRight } from "lucide-react";

const PatientStories = () => {
  const featuredStory = {
    name: "Eleanor Vance",
    treatment: "Full Smile Makeover",
    quote: "The precision and artistry Dr. Garcia brings to his work is transformative. I didn't just get a new smile; I regained my confidence.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200"
  };

  const stories = [
    {
      name: "Marcus Thorne",
      treatment: "Dental Implants",
      text: "The technology used here is miles ahead of anything I've seen. The procedure was seamless and the results are incredibly natural.",
      rating: 5
    },
    {
      name: "Sophia Chen",
      treatment: "Cosmetic Veneers",
      text: "Every detail was considered. From the facial symmetry analysis to the final fitting, the experience was world-class.",
      rating: 5
    },
    {
      name: "Jameson Blake",
      treatment: "Invisalign®",
      text: "A boutique experience that respects your time. The results exceeded my expectations, and the team was exceptional.",
      rating: 5
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <InnerHeader title="Patient Stories" />

      {/* Featured Story (Hero Style) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-1000"
            >
              <img 
                src={featuredStory.image} 
                alt={featuredStory.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
              <button className="absolute bottom-8 right-8 flex items-center gap-3 bg-white px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-black hover:bg-black hover:text-white transition-all">
                <PlayCircle size={16} /> Watch Film
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Quote className="text-zinc-200" size={60} strokeWidth={1} />
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                "{featuredStory.quote}"
              </h2>
              <div>
                <p className="text-lg font-serif">{featuredStory.name}</p>
                <p className="text-zinc-400 text-xs uppercase tracking-[0.2em] mt-1">{featuredStory.treatment}</p>
              </div>
              <div className="pt-8 border-t border-zinc-100 flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Read Full Case Study</span>
                <ArrowRight size={14} className="text-zinc-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="py-24 bg-zinc-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-[1px] bg-zinc-200 border border-zinc-200">
            {stories.map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 flex flex-col justify-between group hover:bg-black transition-all duration-700"
              >
                <div>
                  <div className="flex gap-1 mb-8">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} size={12} className="fill-zinc-300 text-zinc-300 group-hover:fill-white group-hover:text-white transition-colors" />
                    ))}
                  </div>
                  <p className="text-zinc-500 group-hover:text-zinc-300 text-lg font-light leading-relaxed mb-12">
                    "{story.text}"
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl group-hover:text-white transition-colors">{story.name}</h4>
                  <p className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] mt-2">{story.treatment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote Section */}
      <section className="py-32 px-6 text-center bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-5xl font-serif text-zinc-900 leading-tight">
            Our greatest work is the <br />
            <span className="italic font-light text-zinc-400">happiness of our patients.</span>
          </h3>
          <div className="mt-12 flex justify-center gap-12">
            <div>
              <p className="text-3xl font-serif">500+</p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 mt-2">5-Star Reviews</p>
            </div>
            <div className="w-[1px] bg-zinc-100" />
            <div>
              <p className="text-3xl font-serif">15yr</p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 mt-2">Perfecting Smiles</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-zinc-950 text-white text-center px-6">
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em] mb-8">Ready for your story?</p>
        <h2 className="text-4xl md:text-6xl font-serif mb-12">Begin Your Transformation</h2>
        <button className="bg-white text-black px-12 py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-zinc-200 transition-all">
          Schedule Consultation
        </button>
      </section>
    </main>
  );
};

export default PatientStories;