export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl flex flex-col gap-6 lg:gap-8 text-center lg:text-left mx-auto lg:mx-0">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto lg:mx-0">
                <span className="material-symbols-outlined text-primary text-sm">
                  auto_awesome
                </span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  AI-Powered Learning
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-main dark:text-white tracking-tight">
                Reviving the Soul of Vietnam,{' '}
                <span className="text-primary italic font-serif">
                  One Note at a Time
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-text-muted dark:text-gray-300 font-sans font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Master the art of Sáo Trúc with real-time AI feedback. We bridge
                ancient tradition with modern technology to guide your breath
                and fingering.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white text-base font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 group">
                Start Your Journey
                <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <button className="flex items-center justify-center px-8 py-3.5 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-text-main dark:text-white text-base font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-all group">
                <span className="material-symbols-outlined mr-2 text-primary filled group-hover:scale-110 transition-transform">
                  play_circle
                </span>
                Watch the Demo
              </button>
            </div>
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-text-muted dark:text-gray-400">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-background-dark bg-gray-200"
                    style={{
                      backgroundImage: `url('http://googleusercontent.com/profile/picture/${i}')`,
                      backgroundSize: 'cover',
                    }}
                  ></div>
                ))}
              </div>
              <p>
                Join{' '}
                <span className="font-bold text-text-main dark:text-white">
                  2,000+
                </span>{' '}
                students today.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-150 w-full flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="relative w-full aspect-4/5 lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEbe58-26TqRaE-d187dr6p2xXJEv0U8wsWKF68aPOrkinFD3DyTGE0W-NuR-MxSEBng28jZjViR2YcpOVEvgx3l1HogbZAvKQfYyGJNjj-mbOeXFr2Up-rD-FHY-UH72hdsrc8DHIe7REgrzkJtuENjhXApdUz4oDF9yiISLvCkU23CSRg4vXxk3Fi-ZeUnmgG7cib7TI-FYbkFJsZSosg0JDy5wNqZf2XSLZZ_WAcwrzZvQnGH4iVMk_tUmFtoDMRonCtykOpmw')",
                }}
              ></div>

              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-xl bg-white/90 dark:bg-black/60 p-4 rounded-xl border border-white/20 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mic</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary tracking-wider">
                      Analysis Complete
                    </p>
                    <p className="text-sm font-medium text-text-main dark:text-white">
                      Pitch Accuracy:{' '}
                      <span className="text-primary font-bold">98%</span>
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="material-symbols-outlined text-green-500">
                      check_circle
                    </span>
                  </div>
                </div>
                {/* Audio Wave */}
                <div className="flex items-end justify-between gap-1 h-8 mt-3 opacity-80">
                  {[2, 4, 6, 3, 5, 8, 4, 2, 5, 7, 3, 4, 2].map((h, i) => (
                    <div
                      key={i}
                      className={`w-1 bg-primary rounded-full`}
                      style={{ height: `${h * 0.25}rem` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
