const skills = [
  { name: "Java", level: 85 },
  { name: "Spring Boot", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 75 },
  { name: "Node.js / Express.js", level: 75 },
  { name: "MySQL / PostgreSQL", level: 80 },
  { name: "MongoDB", level: 70 },
  { name: "C / C++", level: 75 },
  { name: "HTML / CSS", level: 85 },
  { name: "Git", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 fade-up">
      <div className="max-w-5xl mx-auto bg-slate-950/60 border border-slate-800/80 rounded-3xl p-6 md:p-10 backdrop-blur">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Skills &amp; Experiences
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Skills <span className="text-cyan-400">&amp; Experiences</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A quick overview of the technologies I work with across backend,
            frontend, and databases.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-900/70 rounded-2xl p-4 border border-slate-800/80 hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-200 font-medium">{skill.name}</span>
                <span className="text-cyan-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-sky-300 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
