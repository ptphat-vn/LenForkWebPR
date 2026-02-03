import { Music2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-[#e7f3e7] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to={'/'}
              className="flex items-center gap-2"
              onClick={closeMenu}
            >
              <div className="w-8 h-8 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">
                  <Music2 />
                </span>
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-text-main dark:text-white">
                LenFolk
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary font-bold'
                      : 'text-text-main/80 hover:text-primary dark:text-white/80 dark:hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Download Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link to={'/download'}>
                <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-all shadow-sm hover:shadow-md cursor-pointer">
                  Download Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-text-main dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-white/10`}
        >
          <nav className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? 'bg-primary text-white font-bold shadow-md'
                    : 'text-text-main dark:text-white hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Download Button */}
            <Link to={'/download'} onClick={closeMenu} className="block">
              <button className="w-full mt-4 px-4 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-all shadow-md cursor-pointer">
                Download Now
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
