import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";

interface ExperienceItem {
  role: string;
  period: string;
  desc: string;
  points: string[];
}

const EXPERIENCES: ExperienceItem[] = [
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
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="px-6 sm:px-10 lg:px-16 xl:px-20 mb-24 md:mb-32">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-left">
            My Experience
          </h2>
          <Link
            to="/experience"
            className="text-violet-400 hover:text-violet-300 text-sm font-semibold flex items-center gap-1 text-decoration-none group"
          >
            <span>View Full Experience</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Connected Timeline Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-12 text-left shadow-2xl relative overflow-hidden">
          {/* Continuous Glowing Vertical Line with Top-to-Bottom Growth & Pulse Animation */}
          <div className="absolute left-[37px] sm:left-[63px] top-14 bottom-14 w-0.5 pointer-events-none overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-violet-500 via-indigo-500 to-purple-600 animate-line-grow shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
            <div className="absolute w-2 h-16 -left-0.5 bg-gradient-to-b from-transparent via-violet-200 to-transparent animate-line-pulse" />
          </div>

          <div className="flex flex-col gap-10 relative z-10">
            {EXPERIENCES.map((exp, idx) => (
              <Reveal key={exp.role} delay={idx * 150}>
                <div className="flex gap-4 sm:gap-8 items-start">
                  {/* Glowing Connected Node */}
                  <div className="w-6 sm:w-8 flex justify-center flex-shrink-0 pt-1.5">
                    <div className="w-4 h-4 rounded-full bg-violet-500 ring-4 ring-violet-500/30 border-2 border-[#111226] shadow-lg shadow-violet-500/60" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mb-4 max-w-xl leading-relaxed">
                        {exp.desc}
                      </p>

                      {/* Bullet points */}
                      <ul className="space-y-2 p-0 list-none">
                        {exp.points.map((pt, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                            <span className="w-4 h-4 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-400 flex items-center justify-center flex-shrink-0">
                              <Check size={10} />
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span className="text-xs sm:text-sm font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3.5 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
