 export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 pt-24 pb-12">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Resume
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Yash Soni <span className="text-cyan-400">Resume</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A detailed view of my professional experience, skills, and education.
            You can read it online or download a copy.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="/Yash_Soni_Resume%20(1).pdf"
              className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full text-sm shadow-[0_0_28px_rgba(34,211,238,0.45)] transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
            <a
              href="/"
              className="px-6 py-2.5 border border-cyan-400/60 text-cyan-300 hover:bg-cyan-500/10 font-medium rounded-full text-sm backdrop-blur-md bg-slate-900/30 transition-all duration-200"
            >
              Back to Portfolio
            </a>
          </div>
        </header>

        <section className="bg-slate-950/70 border border-slate-800/80 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
          <div className="h-[70vh] md:h-[80vh] bg-slate-900">
            <object
              data="/Yash_Soni_Resume%20(1).pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-6 text-center">
                <p className="text-gray-300">
                  Your browser cannot display the embedded PDF.
                </p>
                <a
                  href="/Yash_Soni_Resume%20(1).pdf"
                  className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full text-sm shadow-[0_0_28px_rgba(34,211,238,0.45)] transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Resume in New Tab
                </a>
              </div>
            </object>
          </div>
        </section>
      </div>
    </main>
  );
}

