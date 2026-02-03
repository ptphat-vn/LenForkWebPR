export default function AppReviews() {
  const reviews = [
    {
      name: 'Sarah Chen',
      location: 'San Francisco, USA',
      avatar: 'https://i.pravatar.cc/300?img=44',
      rating: 5,
      review:
        'The AI feedback is incredible! It caught mistakes in my breathing that I never noticed. The app made learning Sáo Trúc so much easier.',
      date: '2 days ago',
      verified: true,
    },
    {
      name: 'Nguyễn Văn Minh',
      location: 'Hanoi, Vietnam',
      avatar: 'https://i.pravatar.cc/300?img=15',
      rating: 5,
      review:
        'Finally an app that teaches traditional Vietnamese music properly. The lessons are well-structured and the community is very supportive.',
      date: '1 week ago',
      verified: true,
    },
    {
      name: 'Maria Santos',
      location: 'Barcelona, Spain',
      avatar: 'https://i.pravatar.cc/300?img=50',
      rating: 5,
      review:
        'I love how I can practice offline during my commute. The progress tracking keeps me motivated to practice every day.',
      date: '2 weeks ago',
      verified: true,
    },
    {
      name: 'David Kim',
      location: 'Seoul, South Korea',
      avatar: 'https://i.pravatar.cc/300?img=16',
      rating: 5,
      review:
        'Started as a complete beginner and now I can play several songs! The curriculum is perfectly designed for self-learning.',
      date: '3 weeks ago',
      verified: true,
    },
  ];

  const stats = [
    { label: 'App Store Rating', value: '4.8', icon: 'star' },
    { label: 'Google Play Rating', value: '4.9', icon: 'star' },
    { label: 'Total Reviews', value: '2,500+', icon: 'rate_review' },
    { label: 'User Retention', value: '89%', icon: 'trending_up' },
  ];

  return (
    <section className="py-24 bg-surface-light dark:bg-background-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            User Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
            Loved by Learners Worldwide
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300">
            See what our community of Sáo Trúc enthusiasts are saying about the
            LenFolk app
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-white/5 shadow-lg"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-2">
                {stat.icon}
              </span>
              <div className="text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-100 dark:ring-white/10"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-text-main dark:text-white">
                      {review.name}
                    </h4>
                    {review.verified && (
                      <span className="material-symbols-outlined text-primary text-sm">
                        verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-muted dark:text-gray-400 mb-2">
                    {review.location}
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <p className="text-text-muted dark:text-gray-400 leading-relaxed mb-4">
                "{review.review}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                <span className="text-sm text-text-muted dark:text-gray-500">
                  {review.date}
                </span>
                <div className="flex items-center gap-1 text-sm text-text-muted dark:text-gray-500">
                  <span className="material-symbols-outlined text-primary text-base">
                    thumb_up
                  </span>
                  <span>Helpful</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* App Store Badges */}
        <div className="text-center">
          <p className="text-text-muted dark:text-gray-400 mb-6">
            Join thousands of satisfied learners
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-black rounded-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-white text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black rounded-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-white text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
