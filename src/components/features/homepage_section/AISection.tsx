export default function AISection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background-light dark:bg-background-dark">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(45deg, #17cf17 1px, transparent 1px), linear-gradient(-45deg, #17cf17 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 lg:order-1">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Meeting LenFolk
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6 leading-tight">
              Tradition Powered by <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-600">
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-300 mb-6 leading-relaxed">
              Imagine a master flutist who never sleeps, always listens, and
              provides gentle guidance on every breath. LenFolk's digital mentor
              analyzes your performance in real-time, visualizing the invisible
              nuances of air pressure and fingering technique.
            </p>
            <ul className="space-y-4 text-text-main dark:text-gray-200">
              {[
                {
                  title: 'Instant Visual Feedback',
                  desc: "See your sound waves align with the master's recording.",
                },
                {
                  title: 'Adaptive Difficulty',
                  desc: 'Lessons that evolve as your skills sharpen.',
                },
                {
                  title: 'Breath Control Analysis',
                  desc: "Learn the secret of the 'breathing soul' in Sáo Trúc.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">
                    check_circle
                  </span>
                  <span>
                    <strong className="font-semibold">{item.title}:</strong>{' '}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-2 lg:order-2">
            <div className="absolute -inset-8 bg-linear-to-tr from-primary/20 via-emerald-500/10 to-transparent blur-3xl rounded-full opacity-60"></div>
            <div className="relative bg-white dark:bg-surface-dark/80 border border-primary/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 dark:border-white/5 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="material-symbols-outlined text-2xl">
                      smart_toy
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-text-main dark:text-white">
                      LenFolk AI Mentor
                    </div>
                    <div className="text-xs font-medium text-primary flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      Listening to your practice...
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold border border-green-200 dark:border-green-800">
                  Session #42
                </div>
              </div>
              {/* Visualizer Bars */}
              <div className="h-48 flex items-end justify-center gap-1.5 md:gap-2 mb-6 px-4">
                {/* Simplified mapping for bars */}
                <div className="w-2 md:w-3 bg-gray-200 dark:bg-white/10 h-12 rounded-full"></div>
                <div className="w-2 md:w-3 bg-gray-200 dark:bg-white/10 h-8 rounded-full"></div>
                <div className="w-2 md:w-3 bg-primary/30 h-16 rounded-full"></div>
                <div className="w-2 md:w-3 bg-primary/50 h-24 rounded-full"></div>
                <div className="w-2 md:w-3 bg-primary h-32 rounded-full shadow-[0_0_15px_rgba(23,207,23,0.4)]"></div>
                <div className="w-2 md:w-3 bg-primary h-40 rounded-full shadow-[0_0_20px_rgba(23,207,23,0.6)]"></div>
                <div className="w-2 md:w-3 bg-primary h-28 rounded-full shadow-[0_0_15px_rgba(23,207,23,0.4)]"></div>
                <div className="w-2 md:w-3 bg-primary/60 h-20 rounded-full"></div>
                <div className="w-2 md:w-3 bg-primary/40 h-14 rounded-full"></div>
                <div className="w-2 md:w-3 bg-gray-200 dark:bg-white/10 h-10 rounded-full"></div>
                <div className="w-2 md:w-3 bg-gray-200 dark:bg-white/10 h-6 rounded-full"></div>
                <div className="w-2 md:w-3 bg-gray-200 dark:bg-white/10 h-12 rounded-full"></div>
              </div>
              <div className="bg-linear-to-r from-background-light to-white dark:from-black/40 dark:to-black/20 rounded-xl p-4 border border-primary/20 dark:border-primary/10 flex gap-4 items-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">
                    auto_fix_high
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-main dark:text-white">
                    Correction Suggestion
                  </p>
                  <p className="text-xs text-text-muted dark:text-gray-400">
                    "Your breath pressure is slightly inconsistent on the high
                    notes. Try to maintain a steady stream of air."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
