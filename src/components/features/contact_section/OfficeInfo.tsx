export default function OfficeInfo() {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
              Visit Our Office
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
              Come Say Hello
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
              Located in the heart of Ho Chi Minh City, our office is a creative
              space where music meets technology. Feel free to drop by during
              business hours!
            </p>

            {/* Office Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    Address
                  </h4>
                  <p className="text-text-muted dark:text-gray-400">
                    123 Nguyễn Huệ Boulevard
                  </p>
                  <p className="text-text-muted dark:text-gray-400">
                    District 1, Ho Chi Minh City 700000, Vietnam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    schedule
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    Business Hours
                  </h4>
                  <div className="text-text-muted dark:text-gray-400 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    phone
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+842812345678"
                    className="text-primary hover:underline"
                  >
                    +84 28 1234 5678
                  </a>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="mt-8 p-6 bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-xl">
              <h4 className="font-bold text-text-main dark:text-white mb-3">
                Getting Here
              </h4>
              <div className="space-y-2 text-sm text-text-muted dark:text-gray-400">
                <p>🚇 Metro: Bến Thành Station (Line 1) - 5 min walk</p>
                <p>🚌 Bus: Lines 1, 2, 36, 52 - Nguyễn Huệ stop</p>
                <p>🚗 Parking: Available at nearby Vincom Center</p>
                <p>✈️ Airport: 45 min by taxi from Tân Sơn Nhất</p>
              </div>
            </div>
          </div>

          {/* Right Content - Map Placeholder */}
          <div className="relative">
            <div className="bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-4">
                Find Us Here
              </h3>

              {/* Map Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-white text-2xl">
                      location_on
                    </span>
                  </div>
                  <h4 className="font-bold text-text-main dark:text-white mb-2">
                    LenFolk Office
                  </h4>
                  <p className="text-sm text-text-muted dark:text-gray-400">
                    District 1, HCMC
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-primary/20 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-primary/30 rounded-full"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 px-4 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-300 text-sm">
                  Open in Maps
                </button>
                <button className="flex-1 px-4 py-3 bg-white dark:bg-background-dark border-2 border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary text-text-main dark:text-white font-bold rounded-xl transition-all duration-300 text-sm">
                  Get Directions
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100 dark:border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    15min
                  </div>
                  <div className="text-xs text-text-muted dark:text-gray-400">
                    From City Center
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    24/7
                  </div>
                  <div className="text-xs text-text-muted dark:text-gray-400">
                    Online Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
