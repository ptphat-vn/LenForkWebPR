export default function RoadmapHero() {
  return (
    <section className="relative py-20 md:py-32 bg-linear-to-b from-primary/5 to-transparent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-text-main dark:text-white mb-6 leading-tight">
            Your Journey to{' '}
            <span className="text-primary">Mastering Sáo Trúc</span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
            A structured, step-by-step curriculum designed to take you from
            complete beginner to confident performer. Learn at your own pace
            with AI-powered feedback and personalized guidance.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                3
              </div>
              <div className="text-sm text-text-muted dark:text-gray-400 uppercase tracking-wide">
                Learning Stages
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-sm text-text-muted dark:text-gray-400 uppercase tracking-wide">
                Lessons
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                100+
              </div>
              <div className="text-sm text-text-muted dark:text-gray-400 uppercase tracking-wide">
                Practice Songs
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                AI
              </div>
              <div className="text-sm text-text-muted dark:text-gray-400 uppercase tracking-wide">
                Powered
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Learning Free
            </button>
            <button className="px-8 py-4 bg-white dark:bg-surface-dark border-2 border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary text-text-main dark:text-white font-bold rounded-xl transition-all duration-300">
              View Sample Lessons
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
