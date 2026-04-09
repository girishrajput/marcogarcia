import InnerHeader from '@/components/InnerHeader';
import ServicePage from '@/components/home/ServicePageProps';

export default function InvisalignPage() {
  return (
  <>
  <InnerHeader title="Dentures
" />
  
    <ServicePage
      title="Dentures"
      description="Comfortable, custom dentures in Bakersfield, CA. Restore your smile and chewing ability."
      heroImage="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80"
      benefits={[
        "Natural-looking and comfortable.",
        "Improves speech and eating.",
        "Affordable full and partial options.",
        "Expert fitting in Bakersfield.",
      ]}
      testimonials={[
        { name: "Betty W.", quote: "My dentures fit perfectly. So happy!" },
        { name: "James P.", quote: "Great value and quality." },
      ]}
      faq={[
        { question: "How long do dentures last?", answer: "5-10 years with care." },
        { question: "Adjustment period?", answer: "A few weeks to get used to." },
      ]}
      ctaText="Get Custom Dentures"
      metaTitle="Dentures Bakersfield | Affordable Dental Prosthetics in CA"
      metaDescription="Custom dentures in Bakersfield. Restore your smile. Schedule fitting today!"
      keywords="dentures Bakersfield, dental prosthetics Bakersfield CA, false teeth Bakersfield"
    />
    </>
  );
}