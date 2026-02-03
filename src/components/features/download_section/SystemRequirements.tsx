export default function SystemRequirements() {
  return (
    <section className="py-24 bg-white dark:bg-surface-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            System Requirements
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main dark:text-white mb-6">
            Compatible with Your Device
          </h2>
          <p className="text-lg text-text-muted dark:text-gray-300">
            LenFolk works on a wide range of devices to ensure everyone can
            learn
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* iOS Requirements */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">
                  phone_iphone
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-main dark:text-white">
                  iOS App
                </h3>
                <p className="text-text-muted dark:text-gray-400">
                  iPhone & iPad
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-500 text-xl mt-0.5">
                  check_circle
                </span>
                <div>
                  <div className="font-bold text-text-main dark:text-white">
                    iOS 12.0 or later
                  </div>
                  <div className="text-sm text-text-muted dark:text-gray-400">
                    Compatible with iPhone 6s and newer
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-500 text-xl mt-0.5">
                  check_circle
                </span>
                <div>
                  <div className="font-bold text-text-main dark:text-white">
                    500 MB free storage
                  </div>
                  <div className="text-sm text-text-muted dark:text-gray-400">
                    For app and offline content
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-500 text-xl mt-0.5">
                  check_circle
                </span>
                <div>
                  <div className="font-bold text-text-main dark:text-white">
                    Microphone access
                  </div>
                  <div className="text-sm text-text-muted dark:text-gray-400">
                    For AI feedback feature
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-500 text-xl mt-0.5">
                  check_circle
                </span>
                <div>
                  <div className="font-bold text-text-main dark:text-white">
                    Internet connection
                  </div>
                  <div className="text-sm text-text-muted dark:text-gray-400">
                    For syncing and new content (optional for offline use)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200 dark:border-blue-700/30">
              <h4 className="font-bold text-text-main dark:text-white mb-3">
                Optimized for:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-text-muted dark:text-gray-400">
                <div>• iPhone 12 and newer</div>
                <div>• iPad Air (3rd gen)</div>
                <div>• iPhone 11 series</div>
                <div>• iPad Pro (all models)</div>
              </div>
            </div>
          </div>

          {/* Android Requirements */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-8 border border-green-200 dark:border-green-700/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">
                  phone_android
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-main dark:text-white">
                  Android App
                </h3>
                <p className="text-text-muted dark:text-gray-400">
                  Smartphones & Tablets
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 text-xl mt-0.5">
                  check_circle
                </span>
                <div>
                  <div className="font-bold text-text-main dark:text-white">
                    Android 7.0 (API level 24)
                  </div>
                  <div className="text-sm text-text-muted dark:text-gray-400">
                    Or higher version
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 text-xl mt-0.5">
                  check_circle
                </span>
                <div>
                  <div className="font-bold text-text-main dark:text-white">
                    2 GB RAM minimum
                  </div>
                  <div className="text-sm text-text-muted dark:text-gray-400">
                    4 GB recommended for best performance
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 text-xl mt-0.5">
                  check_circle
                </span>
                <div>
                  <div className="font-bold text-text-main dark:text-white">
                    500 MB free storage
                  </div>
                  <div className="text-sm text-text-muted dark:text-gray-400">
                    For app and offline content
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 text-xl mt-0.5">
                  check_circle
                </span>
                <div>
                  <div className="font-bold text-text-main dark:text-white">
                    Microphone permission
                  </div>
                  <div className="text-sm text-text-muted dark:text-gray-400">
                    For AI feedback feature
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-green-200 dark:border-green-700/30">
              <h4 className="font-bold text-text-main dark:text-white mb-3">
                Tested on:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-text-muted dark:text-gray-400">
                <div>• Samsung Galaxy S series</div>
                <div>• Google Pixel devices</div>
                <div>• OnePlus devices</div>
                <div>• Xiaomi Mi series</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-surface-light dark:bg-background-dark rounded-xl border border-gray-100 dark:border-white/5">
            <span className="material-symbols-outlined text-primary text-3xl mb-3">
              headphones
            </span>
            <h4 className="font-bold text-text-main dark:text-white mb-2">
              Audio Quality
            </h4>
            <p className="text-sm text-text-muted dark:text-gray-400">
              Headphones recommended for best AI feedback accuracy
            </p>
          </div>
          <div className="text-center p-6 bg-surface-light dark:bg-background-dark rounded-xl border border-gray-100 dark:border-white/5">
            <span className="material-symbols-outlined text-primary text-3xl mb-3">
              cloud_sync
            </span>
            <h4 className="font-bold text-text-main dark:text-white mb-2">
              Cloud Sync
            </h4>
            <p className="text-sm text-text-muted dark:text-gray-400">
              Progress syncs across all your devices automatically
            </p>
          </div>
          <div className="text-center p-6 bg-surface-light dark:bg-background-dark rounded-xl border border-gray-100 dark:border-white/5">
            <span className="material-symbols-outlined text-primary text-3xl mb-3">
              support
            </span>
            <h4 className="font-bold text-text-main dark:text-white mb-2">
              Support
            </h4>
            <p className="text-sm text-text-muted dark:text-gray-400">
              Contact us if you experience any compatibility issues
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
