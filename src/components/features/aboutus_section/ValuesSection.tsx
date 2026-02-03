export default function ValuesSection() {
  const values = [
    {
      icon: 'favorite',
      title: 'Passion for Culture',
      description:
        'We deeply respect and honor Vietnamese musical heritage, ensuring every lesson preserves authentic traditions.',
    },
    {
      icon: 'psychology_alt',
      title: 'Innovation',
      description:
        'Leveraging AI and modern technology to make ancient art forms accessible to the digital generation.',
    },
    {
      icon: 'groups',
      title: 'Community First',
      description:
        'Building a supportive, inclusive environment where learners of all levels can grow together.',
    },
    {
      icon: 'workspace_premium',
      title: 'Excellence',
      description:
        'Committed to delivering the highest quality learning experience through expert guidance and feedback.',
    },
    {
      icon: 'verified',
      title: 'Authenticity',
      description:
        'Teaching genuine techniques from master musicians, not simplified versions or shortcuts.',
    },
    {
      icon: 'school',
      title: 'Lifelong Learning',
      description:
        'Encouraging continuous growth and exploration, from beginner to master-level playing.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Our Values
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
            What Drives Us Forward
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300">
            The principles that guide everything we do at LenFolk
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:border-primary/30"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors duration-300">
                  {value.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
