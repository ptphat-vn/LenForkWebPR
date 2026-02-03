export default function SuccessStories() {
  const stories = [
    {
      name: 'Minh Anh',
      age: 24,
      occupation: 'Software Engineer',
      location: 'Ho Chi Minh City',
      avatar: 'https://i.pravatar.cc/300?img=47',
      story:
        "Started with zero musical background. After 4 months, I performed at my company's Tết celebration! The AI feedback was incredibly helpful in correcting my breath control and pitch accuracy.",
      achievement: 'Performed 5 songs',
      timeframe: '4 months',
      rating: 5,
      verified: true,
    },
    {
      name: 'Tuấn Khải',
      age: 32,
      occupation: 'High School Teacher',
      location: 'Hanoi',
      avatar: 'https://i.pravatar.cc/300?img=12',
      story:
        'Wanted to reconnect with Vietnamese culture while living abroad. LenFolk made it easy to learn remotely. Now I teach traditional music to my students!',
      achievement: 'Teaching students now',
      timeframe: '6 months',
      rating: 5,
      verified: true,
    },
    {
      name: 'Lan Phương',
      age: 19,
      occupation: 'University Student',
      location: 'Da Nang',
      avatar: 'https://i.pravatar.cc/300?img=45',
      story:
        "The AI feedback helped me correct mistakes I didn't even know I was making. The structured curriculum and progress tracking kept me motivated throughout my journey.",
      achievement: 'Joined folk band',
      timeframe: '5 months',
      rating: 5,
      verified: true,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
            Real Students, Real Progress
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300">
            See how learners like you achieved their musical goals with LenFolk
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg
                  className="w-24 h-24 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              {/* Avatar Section */}
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="relative">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-white dark:ring-surface-dark shadow-md group-hover:ring-primary/30 transition-all duration-300"
                  />
                  {story.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white dark:border-surface-dark">
                      <span className="material-symbols-outlined text-white text-xs">
                        check
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-main dark:text-white mb-1 flex items-center gap-2">
                    {story.name}
                  </h3>
                  <p className="text-sm text-text-muted dark:text-gray-400">
                    {story.occupation}
                  </p>
                  <p className="text-xs text-text-muted dark:text-gray-500 flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-xs">
                      location_on
                    </span>
                    {story.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Story */}
              <p className="text-text-muted dark:text-gray-400 mb-6 leading-relaxed text-sm">
                "{story.story}"
              </p>

              {/* Achievements */}
              <div className="pt-6 border-t border-gray-100 dark:border-white/5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-base">
                      emoji_events
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-text-muted dark:text-gray-500 mb-0.5">
                      Achievement
                    </div>
                    <div className="font-bold text-sm text-text-main dark:text-white">
                      {story.achievement}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-base">
                      schedule
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-text-muted dark:text-gray-500 mb-0.5">
                      Timeframe
                    </div>
                    <div className="font-bold text-sm text-text-main dark:text-white">
                      {story.timeframe}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-white/5">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-text-muted dark:text-gray-400">
              Active Learners
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-white/5">
            <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
            <div className="text-sm text-text-muted dark:text-gray-400">
              Average Rating
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-white/5">
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <div className="text-sm text-text-muted dark:text-gray-400">
              Complete Course
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-white/5">
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <div className="text-sm text-text-muted dark:text-gray-400">
              Countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
