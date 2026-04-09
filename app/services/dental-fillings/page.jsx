import InnerHeader from '@/components/InnerHeader';
import ServicePage from '@/components/home/ServicePageProps';

export default function InvisalignPage() {
  return (
  <>
  <InnerHeader title="Dental Fillings" />
  
   <ServicePage
      title="Dental Fillings"
      description="Restore decayed teeth with durable dental fillings in Bakersfield, CA. Painless and quick."
      heroImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      benefits={[
        "Stops further decay.",
        "Matches natural tooth color.",
        "Quick and painless procedure.",
        "High-quality materials in Bakersfield.",
      ]}
      testimonials={[
        { name: "Mark T.", quote: "Filling was done in one visit. No discomfort!" },
        { name: "Linda R.", quote: "Looks and feels natural." },
      ]}
      faq={[
        { question: "Types of fillings?", answer: "Composite, amalgam, etc." },
        { question: "How long do they last?", answer: "5-15 years depending on type." },
      ]}
      ctaText="Book Filling Appointment"
      metaTitle="Dental Fillings Bakersfield | Cavity Repair in CA"
      metaDescription="Affordable dental fillings in Bakersfield. Restore decayed teeth. Call today!"
      keywords="dental fillings Bakersfield, cavity repair Bakersfield CA, tooth fillings Bakersfield"
    />
    </>
  );
}