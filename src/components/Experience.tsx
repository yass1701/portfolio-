const experiences = [
  {
    title: "QA Analyst Intern",
    company: "Samyak Infotech Pvt. Ltd.",
    period: "1 Year Internship",
    description:
      "Conducted software testing to ensure quality and functionality. Performed manual and automated testing to identify and resolve bugs. Collaborated with developers to improve software performance and user experience.",
    highlights: [
      "Worked on SCS project - handling testing phase to ensure smooth and error-free application",
      "Worked on BASF project - conducting both hardware and software testing for system reliability, security, and optimal performance",
      "Closely collaborating with developers and product owners",
    ],
    stack: ["QA", "Manual Testing", "Automation Testing", "Bug Tracking"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Skills <span className="text-cyan-400">&amp; Experiences</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Where I&apos;ve applied my skills in real projects and learned how
            good design, clean code, and quality go together.
          </p>
        </div>
        <div className="space-y-8 bg-slate-950/60 rounded-3xl border border-slate-800/80 p-6 md:p-10 backdrop-blur shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-cyan-500/25 hover:border-cyan-500 transition-colors duration-300"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_22px_rgba(34,211,238,0.8)]" />
              <div className="bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-cyan-500/5 rounded-2xl p-6 border border-slate-800/80 hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  <span className="text-cyan-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-400 mb-3">{exp.company}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                {exp.highlights && (
                  <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm mb-4">
                    {exp.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {exp.stack && (
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
