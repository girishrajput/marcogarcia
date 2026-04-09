import InnerHeader from '@/components/InnerHeader';
import ServicePage from '@/components/home/ServicePageProps';

export default function InvisalignPage() {
  return (
  <>
  <InnerHeader title="Cosmetic Dentist Bakersfield
" />
  
   <ServicePage
      title="Cosmetic Dentist Bakersfield"
      description="Enhance your smile with cosmetic dentistry in Bakersfield, CA. Veneers, bonding, and more."
      heroImage="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80"
      benefits={[
        "Transform your appearance.",
        "Boost confidence with a perfect smile.",
        "Custom treatments for all needs.",
        "Leading cosmetic experts in Bakersfield.",
      ]}
      testimonials={[
        { name: "Karen J.", quote: "My veneers look amazing. Worth every penny!" },
        { name: "Paul G.", quote: "Professional and artistic results." },
      ]}
      faq={[
        { question: "What procedures do you offer?", answer: "Veneers, whitening, bonding, and more." },
        { question: "How long do results last?", answer: "Varies; veneers can last 10+ years." },
      ]}
      ctaText="Enhance Your Smile"
      metaTitle="Cosmetic Dentist Bakersfield | Smile Makeover in CA"
      metaDescription="Cosmetic dentistry in Bakersfield. Veneers, whitening, bonding. Achieve your dream smile!"
      keywords="cosmetic dentist Bakersfield, smile makeover Bakersfield CA, dental aesthetics Bakersfield"
    />
    </>
  );
}