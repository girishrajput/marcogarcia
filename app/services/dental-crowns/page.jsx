import InnerHeader from '@/components/InnerHeader';
import ServicePage from '@/components/home/ServicePageProps';

export default function InvisalignPage() {
  return (
  <>
  <InnerHeader title="Dental Crowns" />
  
    <ServicePage
      title="Dental Crowns"
      description="Protect and restore teeth with custom dental crowns in Bakersfield, CA. Durable and natural-looking."
      heroImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      benefits={[
        "Strengthens weakened teeth.",
        "Natural appearance and fit.",
        "Long-lasting protection.",
        "Expert fitting in Bakersfield.",
      ]}
      testimonials={[
        { name: "George L.", quote: "My crown feels perfect. Great job!" },
        { name: "Sophie M.", quote: "Restored my tooth beautifully." },
      ]}
      faq={[
        { question: "How long do crowns last?", answer: "10-15 years or more." },
        { question: "Materials used?", answer: "Porcelain, ceramic, or metal." },
      ]}
      ctaText="Get Dental Crowns"
      metaTitle="Dental Crowns Bakersfield | Tooth Restoration in CA"
      metaDescription="Custom dental crowns in Bakersfield. Protect and restore teeth. Schedule now!"
      keywords="dental crowns Bakersfield, tooth restoration Bakersfield CA, dental caps Bakersfield"
    />
    </>
  );
}