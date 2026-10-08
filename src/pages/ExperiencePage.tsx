import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Reveal } from "../components/Reveal";
import { Check } from "lucide-react";

const FULL_EXPERIENCES = [
  {
    role: "Full Stack Developer (Freelance)",
    period: "2022 - Present",
    desc: "Building custom web applications for clients using MERN stack and modern technologies.",
    points: [
      "Developed 15+ full stack web applications",
      "Integrated third-party APIs and payment gateways",
      "Focused on performance, scalability and UI/UX",
    ],
  },
  {
    role: "Web Developer (Intern)",
    period: "2021 - 2022",
    desc: "Worked with a team to build responsive websites and web applications.",
    points: [
      "Built responsive websites using HTML, CSS, JS",
      "Worked on API integrations",
      "Collaborated with designers and developers",
    ],
  },
  {
    role: "Computer Science Student",
    period: "2018 - 2021",
    desc: "Graduated with a degree in Computer Science.",
    points: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Management",
    ],
  },
];

export const ExperiencePage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 min-h-screen text-left">
      <div className="w-full">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Experience" }]} />

        <Reveal>
          <div className="mb-12">
            <span className="text-violet-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-2">
              Career History
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
              My Experience
            </h1>
            <p className="text-gray-400 text-base">
              Work history, freelance engineering projects, and academic background
            </p>
          </div>
        </Reveal>

        {/* Connected Timeline Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Continuous Glowing Vertical Line with Top-to-Bottom Growth & Pulse Animation */}
          <div className="absolute left-[37px] sm:left-[71px] top-16 bottom-16 w-0.5 pointer-events-none overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-violet-500 via-indigo-500 to-purple-600 animate-line-grow shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
            <div className="absolute w-2 h-16 -left-0.5 bg-gradient-to-b from-transparent via-violet-200 to-transparent animate-line-pulse" />
          </div>

          <div className="flex flex-col gap-12 relative z-10">
            {FULL_EXPERIENCES.map((exp, idx) => (
              <Reveal key={exp.role} delay={idx * 150}>
                <div className="flex gap-4 sm:gap-8 items-start">
                  {/* Glowing Connected Node */}
                  <div className="w-6 sm:w-8 flex justify-center flex-shrink-0 pt-1.5">
                    <div className="w-4 h-4 rounded-full bg-violet-500 ring-4 ring-violet-500/30 border-2 border-[#111226] shadow-lg shadow-violet-500/60" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-base text-gray-400 mb-6 max-w-2xl leading-relaxed">
                        {exp.desc}
                      </p>

                      <ul className="space-y-3 p-0 list-none">
                        {exp.points.map((pt, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                            <span className="w-4 h-4 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-400 flex items-center justify-center flex-shrink-0">
                              <Check size={10} />
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span className="text-xs sm:text-sm font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
