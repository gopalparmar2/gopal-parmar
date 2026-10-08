import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Reveal } from "../components/Reveal";

const FRONTEND_SKILLS = [
  { name: "HTML5", bg: "#E44D26", fg: "#fff" },
  { name: "CSS3", bg: "#2965F1", fg: "#fff" },
  { name: "JavaScript", bg: "#F0DB4F", fg: "#232323" },
  { name: "TypeScript", bg: "#3178C6", fg: "#fff" },
  { name: "React", bg: "#20232a", fg: "#61DAFB" },
  { name: "Next.js", bg: "#000000", fg: "#fff" },
  { name: "Tailwind CSS", bg: "#0EA5C4", fg: "#fff" },
];

const BACKEND_SKILLS = [
  { name: "Node.js", bg: "#3C873A", fg: "#fff" },
  { name: "Express", bg: "#000000", fg: "#fff" },
  { name: "MongoDB", bg: "#001E2B", fg: "#4DB33D" },
  { name: "MySQL", bg: "#00758F", fg: "#fff" },
  { name: "PostgreSQL", bg: "#336791", fg: "#fff" },
  { name: "REST API", bg: "#5c2d91", fg: "#fff" },
  { name: "GraphQL", bg: "#E10098", fg: "#fff" },
];

const TOOLS_SKILLS = [
  { name: "Git", bg: "#F05032", fg: "#fff" },
  { name: "GitHub", bg: "#181717", fg: "#fff" },
  { name: "VS Code", bg: "#007ACC", fg: "#fff" },
  { name: "Figma", bg: "#F24E1E", fg: "#fff" },
  { name: "Postman", bg: "#FF6C37", fg: "#fff" },
  { name: "Docker", bg: "#2496ED", fg: "#fff" },
  { name: "Vercel", bg: "#000000", fg: "#fff" },
];

const PROFICIENCIES = [
  { skill: "JavaScript", percent: 90 },
  { skill: "React", percent: 95 },
  { skill: "Node.js", percent: 85 },
  { skill: "TypeScript", percent: 80 },
  { skill: "Tailwind CSS", percent: 90 },
  { skill: "MongoDB", percent: 85 },
];

export const SkillsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 min-h-screen text-left">
      <div className="w-full">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Skills" }]} />

        <Reveal>
          <div className="mb-12">
            <span className="text-violet-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-2">
              My Skills
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
              Skills & Technologies
            </h1>
            <p className="text-gray-400 text-base">
              Technologies I've been working with recently
            </p>
          </div>
        </Reveal>

        <div className="space-y-12 mb-16">
          {/* Frontend */}
          <Reveal>
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/[0.06] pb-3">Frontend</h3>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {FRONTEND_SKILLS.map((s) => (
                  <div
                    key={s.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl glass-panel flex flex-col items-center justify-center p-2 transition-all hover:scale-105 hover:border-violet-400/40 cursor-pointer"
                  >
                    <div
                      style={{ backgroundColor: s.bg, color: s.fg }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shadow-md"
                    >
                      {s.name.slice(0, 3)}
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium mt-2 truncate max-w-full">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Backend */}
          <Reveal delay={100}>
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/[0.06] pb-3">Backend</h3>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {BACKEND_SKILLS.map((s) => (
                  <div
                    key={s.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl glass-panel flex flex-col items-center justify-center p-2 transition-all hover:scale-105 hover:border-violet-400/40 cursor-pointer"
                  >
                    <div
                      style={{ backgroundColor: s.bg, color: s.fg }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shadow-md"
                    >
                      {s.name.slice(0, 3)}
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium mt-2 truncate max-w-full">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Tools & Others */}
          <Reveal delay={150}>
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/[0.06] pb-3">Tools & Others</h3>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {TOOLS_SKILLS.map((s) => (
                  <div
                    key={s.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl glass-panel flex flex-col items-center justify-center p-2 transition-all hover:scale-105 hover:border-violet-400/40 cursor-pointer"
                  >
                    <div
                      style={{ backgroundColor: s.bg, color: s.fg }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shadow-md"
                    >
                      {s.name.slice(0, 3)}
                    </div>
                    <span className="text-[11px] text-gray-300 font-medium mt-2 truncate max-w-full">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* My Proficiency Section */}
        <Reveal>
          <div className="glass-panel rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl font-extrabold text-white mb-8">My Proficiency</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROFICIENCIES.map((p) => (
                <div key={p.skill} className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold">
                    <span className="text-white">{p.skill}</span>
                    <span className="text-violet-400">{p.percent}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 transition-all duration-1000 shadow-md shadow-violet-600/50"
                      style={{ width: `${p.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
