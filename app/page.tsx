import HeroSlider from '@/components/home/HeroSlider';
import HomeAbout from '@/components/home/HomeAbout';
import CareServices from '@/components/home/CareServices';

export default function Home() {
 
  return (
    <main className="min-h-screen bg-white">
      <HeroSlider />
      <HomeAbout />
      <CareServices items={[]} />
    </main>
  );
}