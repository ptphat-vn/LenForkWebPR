export default function HeritageSection() {
  return (
    <section className="py-20 bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square lg:aspect-video">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCM5jqAsJuilxkkACpCP_fc0yMTln7AktuZQlp5nSRleFtlCN3fLRPVB7WSUFA70Ud7F2diz2E2TMRZEVlmtF33C5gAc50uZjqo2_jvzFWttq9JL8E98qQGhpIZ-bV8eMZBV62B3J4AO3FtwEd0ilxjnFSMpgm62nugxhquUzWuifRDfjEEYjT_qe2eDjvhHj9OiluFlGAiGS0HtoD0m-At52TvDkrI7Gi3NkFPSMJSJVUhtATQsxsNx3uz2C9vgqujwi2DUZGIQeQ')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full bg-linear-to-t from-black/80 to-transparent">
                <p className="text-white font-serif italic text-xl">
                  "Preserving the sound of our ancestors."
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white leading-tight">
              Where <span className="text-primary">Heritage</span> Meets
              Innovation
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
              At LenFolk, we believe tradition shouldn't be lost to time. In a
              rapidly modernizing world, the delicate art of the Sáo Trúc risks
              fading into silence.
            </p>
            <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
              We use advanced audio recognition AI to visualize your sound,
              guiding your breath and fingering with precision. It's not just
              about learning notes; it's about preserving the authentic soul of
              the instrument for a new digital generation.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined">graphic_eq</span>
                </div>
                <h3 className="font-bold text-text-main dark:text-white">
                  Real-time Feedback
                </h3>
                <p className="text-sm text-text-muted dark:text-gray-400">
                  Instant correction on pitch and tone.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <span className="material-symbols-outlined">history_edu</span>
                </div>
                <h3 className="font-bold text-text-main dark:text-white">
                  Cultural Library
                </h3>
                <p className="text-sm text-text-muted dark:text-gray-400">
                  Access hundreds of traditional scores.
                </p>
              </div>
            </div>
            <div className="pt-6">
              <a
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                href="#"
              >
                Learn more about our mission
                <span className="material-symbols-outlined ml-1 text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
