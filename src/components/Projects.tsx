"use client";

import { useState } from "react";

const projects = [
  {
    title: "FutQuiz: Full-Stack Football Statistics Platform",
    description:
      "Full-stack web app built with React and Java/Spring Boot providing league standings, match results, head-to-head stats, and quizzes. Features JWT authentication and admin role-based access.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Spring Security", "JWT"],
    link: "https://github.com/dashboard",
    category: "REACT JS",
  },
  {
    title: "E-Commerce Website (Phonix)",
    description:
      "Full-featured e-commerce platform with authentication, shopping cart, and payment gateway integration. Built with modern web technologies.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    link: "#",
    category: "WEB APP",
  },
  {
    title: "Travel Booking System (HexSoftwares)",
    description:
      "Full-stack desktop application for real-time flight search and booking, built during internship at HexSoftwares.",
    tags: ["Java", "JDBC", "PostgreSQL", "OOP"],
    link: "https://lnkd.in/gS9q6mPd",
    category: "WEB APP",
  },
  {
    title: "Hospital Management System",
    description:
      "Full-stack Java desktop app for patient records with CRUD operations, instant search by name, validation, and PostgreSQL integration via JDBC.",
    tags: ["Java (JDK 21)", "Swing", "JDBC", "PostgreSQL"],
    link: "https://lnkd.in/gRqcFXfV",
    category: "WEB APP",
  },
  {
    title: "Professional Banking System",
    description:
      "ATM-style Java Swing GUI with secure PIN login, deposits/withdrawals, history tracking, and robust validation (MVC-style structure).",
    tags: ["Java", "Swing", "AWT", "MVC", "OOP"],
    link: "https://lnkd.in/dpGpktra",
    category: "WEB APP",
  },
];

const categories = ["ALL", "UI/UX", "WEB APP", "MOBILE APP", "REACT JS"] as const;

type Category = (typeof categories)[number];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 fade-up">
      <div className="max-w-6xl mx-auto bg-slate-950/60 border border-slate-800/80 rounded-3xl p-6 md:p-10 backdrop-blur">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My Creative <span className="text-cyan-400">Portfolio Section</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A selection of projects that showcase my focus on clean UI, solid
            architecture, and real-world problem solving.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm border transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                    : "bg-slate-900/70 text-gray-300 border-slate-700 hover:border-cyan-400 hover:text-cyan-300"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/70 rounded-2xl p-6 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
            >
              <div className="h-40 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-purple-500/15 rounded-xl mb-5 flex items-center justify-center">
                <span className="text-4xl opacity-60">🖼️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
              >
                View Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
