import InnerHeader from '@/components/InnerHeader';
import ServicePage from '@/components/home/ServicePageProps';

export default function InvisalignPage() {
  return (
  <>
  <InnerHeader title="Invisalign Bakersfield
" />
  
    <ServicePage
      title="Invisalign Bakersfield"
      description="Achieve a straighter smile discreetly with Invisalign in Bakersfield, CA. Our expert dentists provide custom aligners for all ages."
      heroImage="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80"
      benefits={[
        "Nearly invisible aligners for discreet treatment.",
        "Comfortable and removable for easy eating and cleaning.",
        "Faster results compared to traditional braces.",
        "Personalized care from Bakersfield's top dentists.",
      ]}
      testimonials={[
        { name: "John D.", quote: "Invisalign changed my life – no one knew I was straightening my teeth!" },
        { name: "Sarah L.", quote: "Quick and effective treatment in Bakersfield. Highly recommend!" },
      ]}
      faq={[
        { question: "How long does Invisalign take?", answer: "Typically 12-18 months, depending on your case." },
        { question: "Is Invisalign painful?", answer: "Mild discomfort at first, but much less than braces." },
      ]}
      ctaText="Schedule Invisalign Consultation"
      metaTitle="Invisalign Bakersfield | Discreet Teeth Straightening in CA"
      metaDescription="Get Invisalign in Bakersfield for a straighter smile. Expert dentists, affordable prices. Book now!"
      keywords="Invisalign Bakersfield, teeth straightening Bakersfield CA, invisible braces Bakersfield"
    />
    </>
  );
}