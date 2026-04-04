import Link from 'next/link';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white">
            <Link href="/" className="flex items-center gap-2">
            <img src="/images/solace_footer.png" className='w-48 h-auto' alt="Solace Healthcare Logo" />
          </Link>
          </div>
          <p className="text-sm leading-relaxed">
            Leading hospice and home health agency in Bakersfield, CA. Committed to dignity, excellence, and compassionate care.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-slate-900 rounded-full hover:text-white transition">
              <FaFacebook size={18} />
            </Link>
            <Link href="#" className="p-2 bg-slate-900 rounded-full hover:text-white transition">
              <FaInstagram size={18} />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/hospice-care" className="hover:text-teal-400 transition">Hospice Care</Link></li>
            <li><Link href="/home-health" className="hover:text-teal-400 transition">Home Health Care</Link></li>
            <li><Link href="#" className="hover:text-teal-400 transition">Respite Care</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/about" className="hover:text-teal-400 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-teal-400 transition">Contact</Link></li>
            <li><Link href="#" className="hover:text-teal-400 transition">Careers</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <div className="flex gap-3 items-start text-sm">
            <MapPin size={18} className="text-solace-cyan shrink-0" />
            <span>3955 Coffee Rd Suite 101, Bakersfield, CA 93308</span>
          </div>
          <div className="flex gap-3 items-center text-sm">
            <Phone size={18} className="text-solace-cyan" />
            <span>(661) 843-7787</span>
          </div>
          <div className="flex gap-3 items-center text-sm">
            <Mail size={18} className="text-solace-cyan" />
            <span>info@solacehc.com</span>
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-xs tracking-widest text-slate-500 uppercase">
        © 2026 SOLACE HEALTHCARE INC. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}