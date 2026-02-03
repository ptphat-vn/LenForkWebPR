export default function TeamSection() {
  const team = [
    {
      name: 'Nguyễn Minh Tuấn',
      role: 'Founder & CEO',
      avatar: 'https://i.pravatar.cc/300?img=13',
      bio: 'Former software engineer with a passion for traditional music. Studied Sáo Trúc for 15 years.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Trần Thu Hà',
      role: 'Chief Music Officer',
      avatar: 'https://i.pravatar.cc/300?img=48',
      bio: 'Master musician with 20+ years of teaching experience. Graduated from Vietnam National Academy of Music.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Lê Quang Huy',
      role: 'Head of AI Development',
      avatar: 'https://i.pravatar.cc/300?img=14',
      bio: 'PhD in Machine Learning. Previously worked on audio recognition at major tech companies.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Phạm Lan Anh',
      role: 'Community Manager',
      avatar: 'https://i.pravatar.cc/300?img=49',
      bio: 'Building connections between learners worldwide. Passionate about cultural exchange and education.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Đỗ Văn Nam',
      role: 'Product Designer',
      avatar: 'https://i.pravatar.cc/300?img=33',
      bio: 'UX/UI specialist focused on creating intuitive learning experiences. 8+ years in EdTech design.',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-surface-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
            Meet the People Behind LenFolk
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300">
            A diverse team of musicians, educators, and technologists united by
            a shared mission
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-surface-light dark:bg-background-dark border border-gray-100 dark:border-white/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-primary/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <span className="material-symbols-outlined text-primary text-xl">
                      link
                    </span>
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <span className="material-symbols-outlined text-primary text-xl">
                      chat
                    </span>
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold text-text-main dark:text-white mb-3">
            Join Our Team
          </h3>
          <p className="text-text-muted dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion
            for music and technology
          </p>
          <button className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}
