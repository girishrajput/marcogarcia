import InnerHeader from '@/components/InnerHeader';
import ServicePage from '@/components/home/ServicePageProps';

export default function InvisalignPage() {
  return (
  <>
  <InnerHeader title="Root Canal Bakersfield
" />
  
    <ServicePage
      title="Root Canal Bakersfield"
      description="Painless root canal treatments in Bakersfield, CA. Save your teeth with our advanced techniques."
      heroImage="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      benefits={[
        "Eliminates infection and saves teeth.",
        "Minimally invasive procedures.",
        "High success rate with sedation options.",
        "Affordable care in Bakersfield.",
      ]}
      testimonials={[
        { name: "Anna P.", quote: "No pain during or after. Excellent experience!" },
        { name: "David S.", quote: "Kept my tooth and avoided extraction." },
      ]}
      faq={[
        { question: "Is a root canal painful?", answer: "Modern techniques make it comfortable." },
        { question: "How long does it take?", answer: "Usually 1-2 visits." },
      ]}
      ctaText="Book Root Canal Appointment"
      metaTitle="Root Canal Bakersfield | Painless Tooth Saving in CA"
      metaDescription="Expert root canal therapy in Bakersfield. Save infected teeth. Schedule today!"
      keywords="root canal Bakersfield, endodontic treatment Bakersfield CA, tooth infection Bakersfield"
    />
    </>
  );
}