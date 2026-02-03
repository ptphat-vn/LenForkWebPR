import AISection from '@/components/features/homepage_section/AISection';
import CTASection from '@/components/features/homepage_section/CTASection';
import HeritageSection from '@/components/features/homepage_section/HeritageSection';
import HeroSection from '@/components/features/homepage_section/HeroSection';
import VisionSection from '@/components/features/homepage_section/VisionSection';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

export default function HomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
      <div className="relative min-h-screen w-full flex flex-col group/design-root overflow-x-hidden">
        <Header />
        <main className="grow">
          <HeroSection />
          <HeritageSection />
          <AISection />
          <VisionSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
