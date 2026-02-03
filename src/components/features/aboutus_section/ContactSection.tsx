export default function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
              Have questions about LenFolk? Want to partner with us? Or just
              want to share your learning journey? We'd love to hear from you!
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    mail
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@lenfolk.com"
                    className="text-primary hover:underline"
                  >
                    hello@lenfolk.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    forum
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    Join Our Community
                  </h4>
                  <p className="text-text-muted dark:text-gray-400">
                    Connect with fellow learners in our Discord server
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    Visit Us
                  </h4>
                  <p className="text-text-muted dark:text-gray-400">
                    District 1, Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
              <p className="text-sm text-text-muted dark:text-gray-400 mb-4">
                Follow us on social media
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-text-main dark:text-white text-xl">
                    link
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-text-main dark:text-white text-xl">
                    chat
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-text-main dark:text-white text-xl">
                    video_library
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Card */}
          <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-text-main dark:text-white mb-6">
              Ready to Start Learning?
            </h3>
            <p className="text-text-muted dark:text-gray-400 mb-8 leading-relaxed">
              Join thousands of students who are already on their musical
              journey. Start with our free foundation course today.
            </p>

            <button className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl mb-4">
              Create Free Account
            </button>

            <button className="w-full px-8 py-4 bg-white dark:bg-background-dark border-2 border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary text-text-main dark:text-white font-bold rounded-xl transition-all duration-300">
              View Demo
            </button>

            {/* Features */}
            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-sm text-text-muted dark:text-gray-400">
                  No credit card required
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-sm text-text-muted dark:text-gray-400">
                  Access to free foundation course
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-sm text-text-muted dark:text-gray-400">
                  Join our global community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
