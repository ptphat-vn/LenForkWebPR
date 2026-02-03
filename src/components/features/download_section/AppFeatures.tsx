export default function AppFeatures() {
  const features = [
    {
      icon: 'psychology_alt',
      title: 'AI-Powered Feedback',
      description:
        'Get real-time analysis of your playing with instant feedback on pitch, rhythm, and technique.',
      benefits: [
        'Real-time pitch detection',
        'Rhythm analysis',
        'Technique suggestions',
        'Progress tracking',
      ],
    },
    {
      icon: 'cloud_download',
      title: 'Offline Learning',
      description:
        'Download lessons and practice anywhere without internet connection.',
      benefits: [
        'Download lessons',
        'Offline practice',
        'Sync progress',
        'Save mobile data',
      ],
    },
    {
      icon: 'school',
      title: 'Structured Curriculum',
      description:
        'Follow our carefully designed learning path from beginner to advanced level.',
      benefits: [
        '50+ lessons',
        '3 skill levels',
        'Progress tracking',
        'Personalized learning',
      ],
    },
    {
      icon: 'groups',
      title: 'Global Community',
      description:
        'Connect with fellow learners, share progress, and get inspired by others.',
      benefits: [
        'Discussion forums',
        'Progress sharing',
        'Peer feedback',
        'Monthly challenges',
      ],
    },
    {
      icon: 'library_music',
      title: 'Music Library',
      description:
        'Access hundreds of traditional and modern songs with sheet music and audio guides.',
      benefits: [
        '100+ songs',
        'Sheet music',
        'Audio guides',
        'Difficulty levels',
      ],
    },
    {
      icon: 'analytics',
      title: 'Progress Analytics',
      description:
        'Track your improvement with detailed analytics and performance insights.',
      benefits: [
        'Practice time tracking',
        'Skill progression',
        'Performance metrics',
        'Achievement badges',
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            App Features
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
            Everything You Need to Master Sáo Trúc
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300">
            Our mobile app combines traditional learning methods with
            cutting-edge AI technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors duration-300">
                  {feature.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-text-muted dark:text-gray-400 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li
                    key={benefitIndex}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="material-symbols-outlined text-primary text-base">
                      check_small
                    </span>
                    <span className="text-text-main dark:text-white">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="material-symbols-outlined text-primary text-sm">
              workspace_premium
            </span>
            <span className="text-primary font-bold text-sm">
              FREE TO START
            </span>
          </div>
          <p className="text-text-muted dark:text-gray-400 mb-6">
            Download the app and start with our free foundation course
          </p>
          <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            Download Now
          </button>
        </div>
      </div>
    </section>
  );
}
