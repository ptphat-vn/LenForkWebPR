export default function LearningPath() {
  const pathSteps = [
    {
      phase: 'Week 1-2',
      title: 'Getting Started',
      description:
        'Learn proper posture, breathing, and produce your first clear note',
      icon: 'air',
      milestone: 'First Clear Note',
    },
    {
      phase: 'Week 3-4',
      title: 'Basic Scale Practice',
      description: 'Master the pentatonic scale and simple finger transitions',
      icon: 'piano',
      milestone: 'Play 5-note Scale',
    },
    {
      phase: 'Month 2',
      title: 'First Melodies',
      description: 'Learn and play simple folk songs with AI feedback',
      icon: 'music_note',
      milestone: 'Complete 3 Songs',
    },
    {
      phase: 'Month 3-4',
      title: 'Technique Refinement',
      description: 'Develop vibrato, ornaments, and expressive playing',
      icon: 'auto_awesome',
      milestone: 'Master Vibrato',
    },
    {
      phase: 'Month 5-6',
      title: 'Advanced Repertoire',
      description: 'Tackle complex traditional and modern pieces',
      icon: 'library_music',
      milestone: '10+ Songs Mastered',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-surface-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Learning Timeline
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
            Your 6-Month Transformation
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300">
            A realistic timeline showing what you'll achieve at each stage of
            your learning journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/20 via-primary/50 to-primary/20 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {pathSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div
                    className={`bg-surface-light dark:bg-background-dark border border-gray-100 dark:border-white/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                      {step.phase}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-text-main dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-muted dark:text-gray-400 mb-4">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                      <span className="material-symbols-outlined text-primary text-sm">
                        emoji_events
                      </span>
                      <span className="text-xs font-medium text-primary">
                        {step.milestone}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary shadow-lg flex items-center justify-center text-white border-4 border-white dark:border-surface-dark z-10">
                    <span className="material-symbols-outlined text-2xl">
                      {step.icon}
                    </span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-text-muted dark:text-gray-400 mb-6">
            Everyone learns at their own pace. This is just a guideline.
          </p>
          <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-lg">
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
