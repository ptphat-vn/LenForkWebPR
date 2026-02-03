import DownloadHero from '@/components/features/download_section/DownloadHero';
import DownloadLinks from '@/components/features/download_section/DownloadLinks';
import AppFeatures from '@/components/features/download_section/AppFeatures';
import SystemRequirements from '@/components/features/download_section/SystemRequirements';
import AppReviews from '@/components/features/download_section/AppReviews';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import React from 'react';

export default function DownloadPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
      <div className="relative min-h-screen w-full flex flex-col group/design-root overflow-x-hidden">
        <Header />
        <main className="grow">
          <DownloadHero />
          <DownloadLinks />
          <AppFeatures />
          <SystemRequirements />
          <AppReviews />
        </main>
        <Footer />
      </div>
    </div>
  );
}
