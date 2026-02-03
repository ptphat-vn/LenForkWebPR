import ContactSection from '@/components/features/aboutus_section/ContactSection';
import HeroSection from '@/components/features/aboutus_section/HeroSection';
import ImpactSection from '@/components/features/aboutus_section/ImpactSection';
import MissionSection from '@/components/features/aboutus_section/MissionSection';
import TeamSection from '@/components/features/aboutus_section/TeamSection';

import ValuesSection from '@/components/features/aboutus_section/ValuesSection';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

export default function AboutUsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
      <div className="relative min-h-screen w-full flex flex-col group/design-root overflow-x-hidden">
        <Header />
        <main className="grow">
          <HeroSection />
          <MissionSection />

          <ValuesSection />
          <TeamSection />
          <ImpactSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
