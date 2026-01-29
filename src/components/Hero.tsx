export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 pt-24 relative overflow-hidden fade-up">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        {/* Intro copy */}
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-slate-900/60 px-4 py-1 text-sm text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
            <span className="text-xl">👋</span>
            <span className="uppercase tracking-[0.25em] text-[0.7rem] md:text-xs">
              Backend-Focused Developer
            </span>
          </p>
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent leading-tight">
              I build reliable
              <br />
              digital experiences.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              I&apos;m <span className="font-semibold text-white">Yash Soni</span>,
              a developer who loves crafting clean APIs, polished UIs, and
              products that feel premium, fast, and thoughtful.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-7 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-full shadow-[0_0_40px_rgba(34,211,238,0.45)] hover:shadow-[0_0_55px_rgba(34,211,238,0.7)] transition-all duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/10 font-medium rounded-full backdrop-blur-md bg-slate-950/40 transition-all duration-200"
            >
              Let&apos;s Work Together
            </a>
            <a
              href="/Yash_Soni_Resume%20(1).pdf"
              className="px-7 py-3 bg-slate-900/70 border border-slate-600 text-gray-200 hover:border-cyan-400 hover:text-cyan-300 font-medium rounded-full backdrop-blur-md transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <span>Available for internships &amp; freelance</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700 text-xs">
                Java &amp; Spring Boot
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700 text-xs">
                React &amp; Node.js
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-700 text-xs">
                SQL &amp; NoSQL Databases
              </span>
            </div>
          </div>
        </div>

        {/* Highlight card */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-cyan-500/25 via-sky-500/10 to-purple-500/25 opacity-70" />
          <div className="relative rounded-3xl border border-slate-700/80 bg-slate-950/70 backdrop-blur-xl p-6 sm:p-7 shadow-[0_24px_70px_rgba(15,23,42,0.95)]">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">
              Snapshot
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl bg-slate-900/80 border border-slate-700 p-4 flex flex-col justify-between">
                <p className="text-3xl font-bold text-cyan-400">1+</p>
                <p className="text-gray-400 text-xs mt-1">
                  Year of hands-on <br />
                  industry experience
                </p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 border border-slate-700 p-4 flex flex-col justify-between">
                <p className="text-3xl font-bold text-cyan-400">5+</p>
                <p className="text-gray-400 text-xs mt-1">
                  Production-like <br />
                  personal projects
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Focused on <span className="font-medium text-white">backend</span>{" "}
              and system design, with a strong eye for{" "}
              <span className="font-medium text-white">clean, modern UIs</span>{" "}
              that feel effortless to use.
            </p>
            <div className="flex flex-wrap gap-2 text-[0.7rem]">
              <span className="px-3 py-1 rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-200">
                Clean architecture
              </span>
              <span className="px-3 py-1 rounded-full border border-cyan-400/40 bg-cyan-500/10 text-cyan-200">
                API design
              </span>
              <span className="px-3 py-1 rounded-full border border-purple-400/40 bg-purple-500/10 text-purple-200">
                Performance-first mindset
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-xs text-gray-400">
        <span className="text-[0.7rem] tracking-[0.25em] uppercase">
          Scroll
        </span>
        <div className="h-8 w-4 rounded-full border border-slate-500/70 flex items-start justify-center p-1">
          <span className="h-2 w-1 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
