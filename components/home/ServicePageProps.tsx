import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

interface ServicePageProps {
  title: string;
  description: string;
  heroImage: string;
  benefits: string[];
  testimonials: { name: string; quote: string }[];
  faq: { question: string; answer: string }[];
  ctaText: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export default function ServicePage({
  title,
  description,
  heroImage,
  benefits,
  testimonials,
  faq,
  ctaText,
  metaTitle,
  metaDescription,
  keywords,
}: ServicePageProps) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={heroImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bakersfield Dental Clinic",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bakersfield",
                "addressRegion": "CA",
              },
              "telephone": "+1-661-123-4567",
              "url": "https://yourdomain.com",
            }),
          }}
        />
      </Head>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center bg-gray-200">
          <Image
            src={heroImage}
            alt={`${title} in Bakersfield`}
            fill
            className="object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4 tracking-tight uppercase">{title}</h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700 max-w-2xl">{description}</p>
            <Link href="/book-a-visit" className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none font-bold transition-colors border-2 border-black">
              {ctaText}
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 md:px-8 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-black mb-12 text-center uppercase tracking-widest">Why Choose {title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="border border-gray-200 p-8 hover:bg-gray-50 transition-colors">
                <span className="text-gray-300 text-4xl font-bold mb-4 block">0{index + 1}</span>
                <p className="text-lg leading-relaxed text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 md:px-8 bg-black text-white">
          <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-widest">Patient Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-l-4 border-gray-500 pl-6 py-2">
                <p className="text-xl italic leading-relaxed text-gray-300">"{testimonial.quote}"</p>
                <p className="mt-6 font-bold uppercase tracking-tighter text-white">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12 text-center uppercase tracking-widest">Information</h2>
          <div className="space-y-2">
            {faq.map((item, index) => (
              <details key={index} className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer font-bold text-lg py-4 flex justify-between items-center list-none hover:text-gray-600">
                  {item.question}
                  <span className="group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-2 text-gray-600 leading-relaxed pl-4 border-l border-gray-100">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-xl mx-auto bg-white p-10 border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold text-black mb-4 text-center uppercase tracking-widest">Consultation</h2>
            <p className="text-center text-gray-500 mb-8">Request an appointment in Bakersfield</p>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase mb-2 text-gray-400">Full Name</label>
                <input type="text" className="w-full p-3 bg-white border border-gray-300 focus:border-black outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-2 text-gray-400">Email Address</label>
                <input type="email" className="w-full p-3 bg-white border border-gray-300 focus:border-black outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-2 text-gray-400">Phone Number</label>
                <input type="tel" className="w-full p-3 bg-white border border-gray-300 focus:border-black outline-none transition-colors" />
              </div>
              <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white py-4 font-bold uppercase tracking-widest transition-all">
                Send Request
              </button>
            </form>
          </div>
        </section>

        
      </div>
    </>
  );
}