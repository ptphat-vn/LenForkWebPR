import RoadmapHero from '@/components/features/roadmap_section/RoadmapHero';
import RoadmapSection from '@/components/features/roadmap_section/RoadmapSection';
import LearningPath from '@/components/features/roadmap_section/LearningPath';
import SuccessStories from '@/components/features/roadmap_section/SuccessStories';

import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import DownloadSection from '@/components/features/roadmap_section/DownloadSection';

export default function RoadmapPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
      <div className="relative min-h-screen w-full flex flex-col group/design-root overflow-x-hidden">
        <Header />
        <main className="grow">
          <RoadmapHero />
          <RoadmapSection />
          <LearningPath />
          <SuccessStories />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
