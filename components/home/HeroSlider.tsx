"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import Link from 'next/link';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { CalendarDays, Phone } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Established Hospice & Home Health Care Services",
    desc: "You’re never alone. Expert medical support is just one phone call away, any time of day.",
    video: "/videos/video1.mp4",
  },
  {
    id: 2,
    title: "Solace is an Expression of Care",
    desc: "Redefining care as more than just a service—it’s our deepest commitment to your family.",
    video: "/videos/video2.mp4",
  },
  {
    id: 3,
    title: "Quality Healthcare at Home",
    desc: "Don't wait for a crisis. Get the specialized home support your family deserves today.",
    video: "/videos/video3.mp4",
  },
];

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  // Fixes Hydration Mismatch by waiting for the client to mount
  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  if (!mounted) {
    // Optional: Return a black placeholder or a skeleton to prevent layout shift
    return <section className="relative w-full h-screen bg-black" />;
  }

  return (
    <section className="relative w-full h-[calc(50vh-100px)] md:h-[calc(100vh-100px)] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        slidesPerView={1}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-start">

              {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay for Readability */}
              <div className="absolute inset-0 bg-black/40 z-[1]"></div>

              {/* Animated Content */}
              <div className="relative z-10 max-w-6xl mx-auto w-full px-8 md:px-12 text-white text-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false }}
                >
                  <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight">
                    {slide.title}
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false }}
                  className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-200 text-center mx-auto"
                >
                  {slide.desc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: false }}
                  className="flex flex-col md:flex-row gap-4 justify-center"
                >
                  <Link href="/contact" className="bg-solace-magenta hover:bg-solace-cyan text-white px-10 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg  flex items-center gap-2">
                    <Phone /> Call Now
                  </Link>

                  <Link href="/contact" className="bg-white hover:bg-solace-cyan text-gray-800 px-10 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2">
                    <CalendarDays /> Book Consultation
                  </Link>
                </motion.div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Global Styles for Swiper dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: var(--color-white)!important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: var(--color-solace-magenta) !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}