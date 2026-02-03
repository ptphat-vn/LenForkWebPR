export default function MissionSection() {
  return (
    <section className="py-24 bg-white dark:bg-surface-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
              Preserving Culture Through Technology
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-300 mb-6 leading-relaxed">
              LenFolk was founded with a simple yet powerful vision: to make
              traditional Vietnamese music accessible to everyone, everywhere.
              We believe that technology should serve culture, not replace it.
            </p>
            <p className="text-lg text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
              By combining AI-powered feedback with authentic teaching methods,
              we're helping thousands rediscover the beauty of Sáo Trúc and
              connect with their heritage.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-text-muted dark:text-gray-400">
                  Students Worldwide
                </div>
              </div>
              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-text-muted dark:text-gray-400">
                  Countries Reached
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Vision */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-white text-3xl">
                    visibility
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-text-main dark:text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-text-muted dark:text-gray-300 leading-relaxed mb-6">
                  To become the world's leading platform for learning
                  traditional Vietnamese instruments, empowering a global
                  community of musicians to preserve and celebrate our cultural
                  heritage.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-1">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold text-text-main dark:text-white mb-1">
                      Accessible Learning
                    </h4>
                    <p className="text-sm text-text-muted dark:text-gray-400">
                      Breaking down barriers to traditional music education
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-1">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold text-text-main dark:text-white mb-1">
                      Cultural Preservation
                    </h4>
                    <p className="text-sm text-text-muted dark:text-gray-400">
                      Keeping Vietnamese musical traditions alive for future
                      generations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-1">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold text-text-main dark:text-white mb-1">
                      Community Building
                    </h4>
                    <p className="text-sm text-text-muted dark:text-gray-400">
                      Connecting learners worldwide through shared passion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
