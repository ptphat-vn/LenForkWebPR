export default function HeroSection() {
  return (
    <section className="flex flex-col">
      <div
        className="w-full bg-cover bg-center bg-no-repeat min-h-140 flex items-center justify-center relative"
        data-alt="Bamboo flute resting next to a modern smartphone on a wooden table"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPhVSQM5wllhO8v5Rk4IogZ9AascJBLyIROlapPxa3l7FIy1SvmOXJjFA5-J68rI9o_a9wRTEhNxXFaqCAMMqdzBTFeXU5BkYyssRWzPFSpQrajkgk-oi9hxHGOUY1NcCD8Q0sg3GvmIYNl52MmhNaqyVllcfHGlbAOLN7P9cIHYkOsQij_FXg_JbM4kf-R4r--kyMWmw9fR7pMJwKdA6gkuMt25tKRDMcDx3riFCYsfvLwC7DePOR4jgqQBTTFJ6P6ILEG8baOMI")',
        }}
      >
        <div className="layout-content-container flex flex-col max-w-240 px-4 md:px-10 z-10 w-full text-center">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] max-w-200">
              LenFolk: Bridging Ancient Melodies with Future Technology
            </h1>
            <h2 className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-160">
              We are on a mission to ensure the soul of Vietnamese traditional
              music thrives in the digital age.
            </h2>
            <div className="pt-4">
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-primary text-[#0e1b0e] hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Discover Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
