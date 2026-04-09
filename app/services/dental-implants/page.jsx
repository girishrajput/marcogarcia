import InnerHeader from '@/components/InnerHeader';
import ServicePage from '@/components/home/ServicePageProps';

export default function InvisalignPage() {
  return (
  <>
  <InnerHeader title="Dental Implants Bakersfield
" />
  
    <ServicePage
      title="Dental Implants Bakersfield"
      description="Restore your smile with durable dental implants in Bakersfield, CA. High success rates and natural-looking results."
      heroImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      benefits={[
        "Permanent solution for missing teeth.",
        "Natural appearance and function.",
        "Long-lasting with proper care.",
        "Trusted by Bakersfield patients for over 10 years.",
      ]}
      testimonials={[
        { name: "Mike R.", quote: "My implants feel just like real teeth. Amazing service!" },
        { name: "Emily T.", quote: "Painless procedure and great results in Bakersfield." },
      ]}
      faq={[
        { question: "Are dental implants painful?", answer: "Done under anesthesia; minimal discomfort post-op." },
        { question: "How long do implants last?", answer: "With care, they can last a lifetime." },
      ]}
      ctaText="Get Dental Implants Now"
      metaTitle="Dental Implants Bakersfield | Restore Your Smile in CA"
      metaDescription="Affordable dental implants in Bakersfield. Natural, durable solutions. Schedule consultation today!"
      keywords="dental implants Bakersfield, tooth replacement Bakersfield CA, implant dentistry Bakersfield"
    />
    </>
  );
}