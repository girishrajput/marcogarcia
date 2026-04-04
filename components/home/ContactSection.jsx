import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, User, Smartphone, ChevronDown } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="w-full font-sans">
      {/* Upper Form Section */}
      <div className="bg-gradient-to-br from-[#00AEEF] to-[#0088cc] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Schedule Your <span className="text-solace-magenta">Consultation</span> Now
            </h2>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
              <div className="bg-solace-magenta p-2 rounded-full text-white">
                <Phone size={24} fill="currentColor" />
              </div>
              <div className="text-white">
                <p className="text-xs uppercase font-bold opacity-80">Or Call Us Directly</p>
                <p className="text-2xl font-black">(661) 843-7787</p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <form className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#00AEEF] transition-all outline-none text-gray-700"
                  />
                </div>
                <div className="relative">
                  <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#00AEEF] transition-all outline-none text-gray-700"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-gray-400" size={20} />
                  <textarea 
                    rows="4" 
                    placeholder="How Can We Help You?" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#00AEEF] transition-all outline-none text-gray-700 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#00AEEF] transition-all outline-none text-gray-700"
                  />
                </div>
                
                <div className="relative">
                  <select className="w-full appearance-none pl-4 pr-12 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#00AEEF] transition-all outline-none text-gray-700 font-medium cursor-pointer">
                    <option>Hospice Care</option>
                    <option>Home Health</option>
                    <option>Palliative Care</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>

                <button className="w-full group bg-[#D1207A] hover:bg-[#b01a66] text-white font-bold py-5 rounded-xl transition-all shadow-lg hover:shadow-pink-500/30 flex items-center justify-center gap-3 text-lg uppercase tracking-wider">
                  Submit Request
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-[450px] w-full bg-gray-200">
        {/* Placeholder for Google Map Embed */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.087289562725!2d-119.07135!3d35.321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE5JzE1LjYiTiAxMTnCsDA0JzE2LjkiVw!5e0!3m2!1sen!2sus!4v1710000000000"
          className="w-full h-full border-0 grayscale opacity-80 contrast-125"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* Floating Contact Info */}
        <div className="absolute top-10 left-4 md:left-10 bg-white p-6 rounded-2xl shadow-2xl border-t-4 border-[#00AEEF] max-w-sm">
          <h3 className="font-bold text-gray-800 text-lg mb-2">Solace Home Health and Hospice Care</h3>
          <div className="flex gap-3 text-gray-600 text-sm mb-4">
            <MapPin className="text-[#00AEEF] shrink-0" size={18} />
            <p>suite101, 3955 Coffee Rd, Bakersfield, CA 93308</p>
          </div>
          <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-semibold hover:bg-black transition-colors">
            Get Directions
          </button>
        </div>
      </div>

      {/* Modern Dark Footer */}
      <div className="bg-[#007fb0] py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-white">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm opacity-70 mb-1 italic">Available 24/7</span>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Phone size={24} /> (661) 843-7787
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <a href="#" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <Mail size={20} /> Get Care Now
            </a>
            <a href="mailto:info@solacehc.com" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <Send size={20} /> info@solacehc.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;