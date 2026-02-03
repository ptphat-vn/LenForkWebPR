import ContactHero from '@/components/features/contact_section/ContactHero';
import ContactForm from '@/components/features/contact_section/ContactForm';
import FAQ from '@/components/features/contact_section/FAQ';
import OfficeInfo from '@/components/features/contact_section/OfficeInfo';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
      <div className="relative min-h-screen w-full flex flex-col group/design-root overflow-x-hidden">
        <Header />
        <main className="grow">
          <ContactHero />
          <ContactForm />
          <OfficeInfo />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}
