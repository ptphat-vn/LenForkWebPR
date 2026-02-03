export default function DownloadHero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Breadcrumb */}

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-text-main dark:text-white mb-6 leading-tight">
              Take LenFolk <span className="text-primary">Everywhere</span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
              Download our mobile app and practice Sáo Trúc anytime, anywhere.
              Get real-time AI feedback, offline lessons, and connect with our
              global community of learners.
            </p>

            {/* App Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-white/10">
                <span className="material-symbols-outlined text-primary text-lg">
                  star
                </span>
                <div className="text-sm">
                  <div className="font-bold text-text-main dark:text-white">
                    4.8/5
                  </div>
                  <div className="text-text-muted dark:text-gray-400">
                    App Rating
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-white/10">
                <span className="material-symbols-outlined text-primary text-lg">
                  download
                </span>
                <div className="text-sm">
                  <div className="font-bold text-text-main dark:text-white">
                    50K+
                  </div>
                  <div className="text-text-muted dark:text-gray-400">
                    Downloads
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-white/10">
                <span className="material-symbols-outlined text-primary text-lg">
                  devices
                </span>
                <div className="text-sm">
                  <div className="font-bold text-text-main dark:text-white">
                    Cross-Platform
                  </div>
                  <div className="text-text-muted dark:text-gray-400">
                    iOS & Android
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-text-main dark:text-white">
                  AI-powered real-time feedback
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-text-main dark:text-white">
                  Offline lesson downloads
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_circle
                </span>
                <span className="text-text-main dark:text-white">
                  Progress tracking & analytics
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div>

                  {/* Screen Content */}
                  <div className="h-full bg-gradient-to-b from-primary/20 to-primary/5 p-6 pt-12">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-2xl">
                          music_note
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        LenFolk
                      </h3>
                      <p className="text-gray-600 text-sm">Master Sáo Trúc</p>
                    </div>

                    {/* Mock Features */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-sm">
                            mic
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-sm text-gray-900">
                            AI Practice
                          </div>
                          <div className="text-xs text-gray-500">
                            Real-time feedback
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-sm">
                            school
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-sm text-gray-900">
                            Lessons
                          </div>
                          <div className="text-xs text-gray-500">
                            50+ courses
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-sm">
                            trending_up
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-sm text-gray-900">
                            Progress
                          </div>
                          <div className="text-xs text-gray-500">
                            Track improvement
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
