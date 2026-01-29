export default function About() {
  return (
    <section id="about" className="py-20 px-4 fade-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-square bg-gradient-to-br from-cyan-500/15 via-slate-900 to-purple-500/15 rounded-3xl flex items-center justify-center border border-cyan-500/10 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
            <div className="w-44 h-44 md:w-52 md:h-52 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-6xl shadow-xl shadow-cyan-500/20">
              👤
            </div>
          </div>
          <div className="bg-slate-900/60 rounded-3xl border border-slate-800/80 p-6 md:p-8 backdrop-blur flex flex-col justify-between gap-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I&apos;m a backend-focused developer and BCA graduate, currently
              pursuing MCA. I enjoy building clean, reliable APIs and
              server-side systems using Java and Spring Boot.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I&apos;m actively looking for internships and entry-level roles in
              Java development, where I can learn fast, contribute to real
              products, and grow into a strong software engineer.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex-1 min-w-[90px] text-center bg-slate-900/70 border border-slate-700 rounded-2xl py-4">
                <p className="text-3xl font-bold text-cyan-400">2024</p>
                <p className="text-gray-400 text-sm">BCA Graduate</p>
              </div>
              <div className="flex-1 min-w-[90px] text-center bg-slate-900/70 border border-slate-700 rounded-2xl py-4">
                <p className="text-3xl font-bold text-cyan-400">1+</p>
                <p className="text-gray-400 text-sm">Year Experience</p>
              </div>
              <div className="flex-1 min-w-[90px] text-center bg-slate-900/70 border border-slate-700 rounded-2xl py-4">
                <p className="text-3xl font-bold text-cyan-400">QA</p>
                <p className="text-gray-400 text-sm">Industry Role</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/Yash_Soni_Resume%20(1).pdf"
                className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full text-sm shadow-[0_0_28px_rgba(34,211,238,0.45)] transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              <a
                href="/resume"
                className="px-6 py-2.5 border border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/10 font-medium rounded-full text-sm backdrop-blur-md bg-slate-900/30 transition-all duration-200"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
