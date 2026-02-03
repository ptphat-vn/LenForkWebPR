import { Youtube, Facebook, Music2, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'AI Tuner', href: '#' },
      { name: 'Mobile App', href: '#' },
    ],
    resources: [
      { name: 'Flute Basics', href: '#' },
      { name: 'Sheet Music', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Press Kit', href: '#' },
    ],
  };
  const socialLinks = [
    { label: 'Youtube', icon: <Youtube /> },
    { label: 'Facebook', icon: <Facebook /> },
    { label: 'TikTok', icon: <Music2 /> },
    { label: 'Instagram', icon: <Instagram /> },
  ];
  return (
    <footer className="bg-white dark:bg-background-dark pt-16 pb-8 border-t border-gray-100 dark:border-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6 pr-8">
            <div className="flex items-center gap-2">
              {/* Logo Icon */}
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-text-main">
                <span className="material-symbols-outlined text-xl">
                  <Music2 />
                </span>
              </div>
              <span className="text-2xl font-black tracking-tight text-text-main dark:text-white">
                LenFolk
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Bridging tradition and modern technology. LenFolk helps you master
              the Vietnamese Bamboo Flute through AI-powered feedback and a
              vibrant community.
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-2xl">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns - Generated dynamically */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-main dark:text-white">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.product.map((link, idx) => (
                <li key={idx}>
                  <a
                    className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-main dark:text-white">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <a
                    className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-text-main dark:text-white">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a
                    className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} LenFolk. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              className="text-sm text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-sm text-gray-400 hover:text-primary transition-colors"
              href="#"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
