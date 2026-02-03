import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
      <div className="relative min-h-screen w-full flex flex-col group/design-root overflow-x-hidden">
        <Header />
        <main className="grow"></main>
        <Footer />
      </div>
    </div>
  );
}
