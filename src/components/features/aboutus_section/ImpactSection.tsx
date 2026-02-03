export default function ImpactSection() {
  const stats = [
    {
      value: '10,000+',
      label: 'Active Students',
      icon: 'school',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      value: '30+',
      label: 'Countries',
      icon: 'public',
      color: 'from-green-500 to-emerald-500',
    },
    {
      value: '50,000+',
      label: 'Hours Practiced',
      icon: 'timer',
      color: 'from-purple-500 to-pink-500',
    },
    {
      value: '4.8/5',
      label: 'Student Rating',
      icon: 'star',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const achievements = [
    {
      title: 'Cultural Impact',
      description:
        'Helping Vietnamese diaspora reconnect with their heritage through music',
      icon: 'diversity_3',
    },
    {
      title: 'Educational Innovation',
      description:
        'First platform to use AI for traditional instrument learning',
      icon: 'lightbulb',
    },
    {
      title: 'Community Building',
      description:
        'Created a global network of Sáo Trúc enthusiasts and practitioners',
      icon: 'hub',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-surface-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
            Making a Difference, One Note at a Time
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300">
            See how LenFolk is changing lives and preserving culture
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group bg-surface-light dark:bg-background-dark border border-gray-100 dark:border-white/5 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {stat.icon}
                  </span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white text-xl">
                  {achievement.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                {achievement.title}
              </h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20">
            <span className="material-symbols-outlined text-primary text-6xl opacity-20 mb-4">
              format_quote
            </span>
            <blockquote className="text-xl md:text-2xl font-serif text-text-main dark:text-white mb-6 leading-relaxed">
              "Our goal isn't just to teach an instrument—it's to preserve a
              living tradition and pass it on to the next generation."
            </blockquote>
            <div className="font-bold text-primary">— The LenFolk Team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
