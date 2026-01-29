export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative text-center max-w-3xl">
        <p className="text-cyan-400 text-lg mb-2 tracking-wide flex items-center justify-center gap-2">
          <span className="text-2xl">👋</span>
          <span>Hello, I am</span>
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
          Yash Soni
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Web Developer · <span className="text-cyan-400">Freelancer</span>
        </h2>
        <p className="text-gray-300 text-xl font-medium mb-8">
          I know that good design means good business.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.55)] transition-all duration-200"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/10 font-medium rounded-full backdrop-blur-md bg-slate-900/30 transition-all duration-200"
          >
            Hire Me
          </a>
          <a
            href="/Yash_Soni_Resume%20(1).pdf"
            className="px-8 py-3 bg-slate-900/60 border border-slate-600 text-gray-200 hover:border-cyan-400 hover:text-cyan-300 font-medium rounded-full backdrop-blur-md transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
