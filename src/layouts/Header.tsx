import { Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-[#e7f3e7] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to={'/'} className="flex items-center gap-2">
              <div className="w-8 h-8 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">
                  <Music2 />
                </span>
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-text-main dark:text-white">
                LenFolk
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to={'/roadmap'}
                className="text-sm font-medium text-text-main/80 hover:text-primary dark:text-white/80 dark:hover:text-primary transition-colors"
              >
                Roadmap
              </Link>
              <Link
                to={'/about-us'}
                className="text-sm font-medium text-text-main/80 hover:text-primary dark:text-white/80 dark:hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <a
                className="text-sm font-medium text-text-main/80 hover:text-primary dark:text-white/80 dark:hover:text-primary transition-colors"
                href="#"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-all shadow-sm hover:shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
