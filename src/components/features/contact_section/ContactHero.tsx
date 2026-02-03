export default function ContactHero() {
  return (
    <section className="py-20 md:py-32 bg-linear-to-b from-primary/5 to-transparent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-text-main dark:text-white mb-6 leading-tight">
            Let's <span className="text-primary">Connect</span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
            Have questions about learning Sáo Trúc? Want to share your musical
            journey? Or interested in partnering with us? We'd love to hear from
            you!
          </p>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <div className="text-center p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-white/5 shadow-lg">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">
                schedule
              </span>
              <div className="font-bold text-text-main dark:text-white mb-1">
                Response Time
              </div>
              <div className="text-sm text-text-muted dark:text-gray-400">
                Within 24 hours
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-white/5 shadow-lg">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">
                support_agent
              </span>
              <div className="font-bold text-text-main dark:text-white mb-1">
                Support Available
              </div>
              <div className="text-sm text-text-muted dark:text-gray-400">
                Monday - Friday
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-white/5 shadow-lg">
              <span className="material-symbols-outlined text-primary text-3xl mb-2">
                language
              </span>
              <div className="font-bold text-text-main dark:text-white mb-1">
                Languages
              </div>
              <div className="text-sm text-text-muted dark:text-gray-400">
                Vietnamese & English
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
