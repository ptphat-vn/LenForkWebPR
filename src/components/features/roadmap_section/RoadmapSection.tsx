export default function RoadmapSection() {
  return (
    <section className="py-24 bg-surface-light dark:bg-background-dark relative z-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Curriculum
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
            Your Learning Roadmap
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300">
            From your first breath to your first performance, we guide every
            step of your Sáo Trúc journey.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary/20 to-transparent -z-10 transform translate-y-1/2"></div>

          {/* --- STAGE 1: FOUNDATION --- */}
          <div className="relative group h-full">
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full  flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 bg-white dark:bg-surface-dark z-10 border-4 border-white dark:border-surface-dark shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  school
                </span>
              </div>
              {/* Title & Badge */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-serif font-bold text-text-main dark:text-white">
                  The Foundation
                </h3>
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-xs font-bold text-text-muted dark:text-gray-300 uppercase tracking-wide">
                  Free
                </span>
              </div>
              <p className="text-text-muted dark:text-gray-400 mb-6 grow">
                Master basic music theory, correct posture, and the essential
                breathing techniques that form the soul of the instrument.
              </p>
              {/* Footer Features */}
              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                  Includes
                </p>
                <ul className="space-y-2 text-sm text-text-main dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      check
                    </span>{' '}
                    5 Core Lessons
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      check
                    </span>{' '}
                    Basic Posture Guide
                  </li>
                </ul>
              </div>
            </div>
            {/* Stage Label */}
            <div className="absolute -top-3 left-8 bg-background-light dark:bg-background-dark px-2 text-xs font-bold text-primary uppercase tracking-widest z-20">
              Stage 1
            </div>
          </div>

          {/* --- STAGE 2: NOTE MASTERY --- */}
          <div className="relative group h-full">
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              {/* Decorative Blob */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full  flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 bg-white dark:bg-surface-dark z-10 border-4 border-white dark:border-surface-dark shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  music_note
                </span>
              </div>
              {/* Title & Badge */}
              <div className="mb-4 flex items-center justify-between relative z-10">
                <h3 className="text-xl font-serif font-bold text-text-main dark:text-white">
                  Note Mastery
                </h3>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-text-muted dark:text-gray-400 mb-6 grow relative z-10">
                Hands-on practice with complex scales, fingering charts, and
                your first simple folk melodies using AI feedback.
              </p>
              {/* Footer Features */}
              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 relative z-10">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                  Includes
                </p>
                <ul className="space-y-2 text-sm text-text-main dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      check
                    </span>{' '}
                    Real-time Pitch AI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">
                      check
                    </span>{' '}
                    20+ Practice Scores
                  </li>
                </ul>
              </div>
            </div>
            {/* Stage Label */}
            <div className="absolute -top-3 left-8 bg-background-light dark:bg-background-dark px-2 text-xs font-bold text-primary uppercase tracking-widest z-20">
              Stage 2
            </div>
          </div>

          {/* --- STAGE 3: PERFORMANCE READY (Premium Boost) --- */}
          <div className="relative group h-full">
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full  flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 bg-white dark:bg-surface-dark z-10 border-4 border-white dark:border-surface-dark shadow-sm">
                <span className="material-symbols-outlined text-3xl">
                  library_music
                </span>
              </div>
              {/* Title & Badge */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-serif font-bold text-text-main dark:text-white">
                  Performance Ready
                </h3>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-bold text-primary uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-text-muted dark:text-gray-400 mb-6">
                Apply skills to full songs, master advanced ornamentation, and
                learn emotional expression techniques.
              </p>
              {/* PREMIUM CARD SECTION */}
              <div className="mt-auto relative rounded-xl border border-yellow-500/40 dark:border-yellow-500/30 shadow-[0_0_15px_-3px_rgba(234,179,8,0.2)] bg-linear-to-br from-yellow-500/5 to-emerald-500/5 p-4 overflow-hidden group/premium">
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-yellow-400/20 to-transparent blur-xl -mr-6 -mt-6"></div>
                <div className="flex items-center justify-between mb-2 relative z-10">
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-yellow-600 dark:text-yellow-400">
                      workspace_premium
                    </span>{' '}
                    Premium Boost
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-700/50">
                    PREMIUM
                  </span>
                </div>
                <p className="text-sm text-text-main dark:text-white font-medium relative z-10 leading-snug">
                  Unlock personalized masterclasses and 1-on-1 critique from
                  mentors.
                </p>
              </div>
            </div>
            {/* Stage Label */}
            <div className="absolute -top-3 left-8 bg-background-light dark:bg-background-dark px-2 text-xs font-bold text-primary uppercase tracking-widest z-20">
              Stage 3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
