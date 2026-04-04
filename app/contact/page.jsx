import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-serif font-bold mb-4 text-slate-900">Get in Touch</h1>
          <p className="text-slate-600 mb-8">Have questions about our services? Our team is available 24/7.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-solace-cyan p-3 rounded-full text-white"><Phone size={20}/></div>
              <span>(661) 843-7787</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-solace-cyan p-3 rounded-full text-white"><Mail size={20}/></div>
              <span>info@solacehc.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-solace-cyan p-3 rounded-full text-white"><MapPin size={20}/></div>
              <span>3955 Coffee Rd, Bakersfield, CA</span>
            </div>
          </div>
        </div>

        <form className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-solace-cyan" />
          <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-solace-cyan" />
          <select className="w-full p-4 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-solace-cyan">
            <option>Hospice Care</option>
            <option>Home Health Care</option>
          </select>
          <textarea placeholder="Message" rows="4" className="w-full p-4 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-solace-cyan"></textarea>
          <button className="w-full bg-solace-cyan text-white py-4 rounded-lg font-bold hover:bg-teal-700 transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}