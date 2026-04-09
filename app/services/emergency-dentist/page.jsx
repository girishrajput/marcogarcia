import InnerHeader from '@/components/InnerHeader';
import ServicePage from '@/components/home/ServicePageProps';

export default function InvisalignPage() {
  return (
  <>
  <InnerHeader title="Emergency Dentist Bakersfield
" />
  
    <ServicePage
      title="Emergency Dentist Bakersfield"
      description="24/7 emergency dental care in Bakersfield, CA. Quick relief for toothaches, broken teeth, and more."
      heroImage="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      benefits={[
        "Round-the-clock availability.",
        "Immediate pain relief.",
        "Experienced emergency specialists.",
        "Convenient location in Bakersfield.",
      ]}
      testimonials={[
        { name: "Lisa K.", quote: "Saved my tooth during a weekend emergency. Lifesaver!" },
        { name: "Tom H.", quote: "Fast and professional care. Highly recommend." },
      ]}
      faq={[
        { question: "What counts as a dental emergency?", answer: "Severe pain, bleeding, or knocked-out teeth." },
        { question: "Do you accept walk-ins?", answer: "Yes, for urgent cases." },
      ]}
      ctaText="Call Emergency Dentist"
      metaTitle="Emergency Dentist Bakersfield | 24/7 Dental Care in CA"
      metaDescription="Urgent dental services in Bakersfield. Tooth pain relief, broken teeth repair. Call now!"
      keywords="emergency dentist Bakersfield, 24/7 dental care Bakersfield CA, urgent dentistry Bakersfield"
    />
    </>
  );
}