import InnerHeader from '@/components/InnerHeader';
import ServicePage from '@/components/home/ServicePageProps';

export default function InvisalignPage() {
  return (
  <>
  <InnerHeader title="Tooth Extraction Bakersfield" />
  
    <ServicePage
      title="Tooth Extraction Bakersfield"
      description="Safe and gentle tooth extractions in Bakersfield, CA. Wisdom teeth and more with expert care."
      heroImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      benefits={[
        "Quick and painless procedures.",
        "Sedation for comfort.",
        "Post-extraction care instructions.",
        "Trusted Bakersfield dentists.",
      ]}
      testimonials={[
        { name: "Chris M.", quote: "Smooth extraction of wisdom teeth. No issues!" },
        { name: "Rachel W.", quote: "Professional and caring staff." },
      ]}
      faq={[
        { question: "When is extraction necessary?", answer: "For severe decay, infection, or crowding." },
        { question: "Recovery time?", answer: "1-2 weeks with proper care." },
      ]}
      ctaText="Schedule Extraction"
      metaTitle="Tooth Extraction Bakersfield | Safe Dental Removal in CA"
      metaDescription="Wisdom teeth and tooth extractions in Bakersfield. Gentle, expert care. Book now!"
      keywords="tooth extraction Bakersfield, wisdom teeth removal Bakersfield CA, dental extraction Bakersfield"
    />
    </>
  );
}