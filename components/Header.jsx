"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, Heart, X, Clock } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Hospice Care', href: '/hospice-care' },
    { name: 'Home Health', href: '/home-health' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm">
      {/* Top Bar */}
      <div className='bg-solace-blue'>
      <div className=" text-white py-2 px-6 flex justify-between items-center text-xs md:text-sm font-medium container mx-auto">
        <div className="flex items-center gap-2">
          <Clock size={14} className="animate-pulse" />
          <span>24/7 EMERGENCY SERVICE</span>
        </div>
        <Link href="tel:6618437787" className="flex items-center gap-2 hover:underline">
          <Phone size={14} /> (661) 843-7787
        </Link>
      </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <img src="/solacelogo.png" className='w-48 h-auto' alt="Solace Healthcare Logo" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-slate-600 hover:text-solace-cyan font-semibold transition-colors">
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="bg-solace-magenta text-white px-6 py-2.5 rounded-full hover:bg-solace-blue transition shadow-md">
              Referral
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t p-6 flex flex-col gap-4 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-800">
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}