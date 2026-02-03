export default function CTASection() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark border-t border-primary/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
          Be Part of the Revival
        </h2>
        <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether you are a master or a beginner, your journey contributes to
          keeping the Sáo Trúc alive. Join our beta program today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white text-lg font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1">
            Join the Movement
            <span className="material-symbols-outlined ml-2">
              arrow_forward
            </span>
          </button>
          <button className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 text-text-main dark:text-white text-lg font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
            View Curriculum
          </button>
        </div>
      </div>
    </section>
  );
}
