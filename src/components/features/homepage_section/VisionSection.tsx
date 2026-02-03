export default function VisionSection() {
  return (
    <section className="py-24 relative bg-surface-dark text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-emerald-900/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="w-20 h-1 bg-linear-to-r from-transparent via-primary to-transparent mx-auto mb-8 rounded-full"></div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
          Our Hope for the Future
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl font-light mb-16 leading-relaxed">
          We envision a world where the soulful melodies of the bamboo flute
          resonate across borders, connecting cultures through the universal
          language of music. From the villages of Vietnam to the metropolises of
          the world.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              icon: 'public',
              title: 'Global Community',
              desc: 'Connecting learners from Hanoi to Paris, creating a worldwide ensemble that transcends physical distance.',
            },
            {
              icon: 'library_music',
              title: 'Digital Preservation',
              desc: 'Archiving thousands of traditional scores and techniques digitally, ensuring they are never lost to time.',
            },
            {
              icon: 'handshake',
              title: 'Cultural Exchange',
              desc: 'Fostering deep understanding and appreciation of Vietnamese heritage through the accessible medium of technology.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(23,207,23,0.1)]">
                <span className="material-symbols-outlined text-2xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
