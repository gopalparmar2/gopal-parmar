import React from "react";
import { Reveal } from "./Reveal";

interface Tech {
  name: string;
  code: string;
  bg: string;
  fg: string;
}

const TECHS: Tech[] = [
  { name: "HTML5", code: "HTML5", bg: "#E44D26", fg: "#ffffff" },
  { name: "CSS3", code: "CSS3", bg: "#2965F1", fg: "#ffffff" },
  { name: "JavaScript", code: "JS", bg: "#F0DB4F", fg: "#232323" },
  { name: "TypeScript", code: "TS", bg: "#3178C6", fg: "#ffffff" },
  { name: "React", code: "React", bg: "#20232a", fg: "#61DAFB" },
  { name: "Next.js", code: "Next.js", bg: "#000000", fg: "#ffffff" },
  { name: "Node.js", code: "Node.js", bg: "#3C873A", fg: "#ffffff" },
  { name: "Express.js", code: "Express", bg: "#000000", fg: "#ffffff" },
  { name: "MongoDB", code: "MongoDB", bg: "#001E2B", fg: "#4DB33D" },
  { name: "Tailwind CSS", code: "Tailwind", bg: "#0EA5C4", fg: "#ffffff" },
];

export const Technologies: React.FC = () => {
  return (
    <section id="skills" className="px-6 sm:px-10 lg:px-16 xl:px-20 mb-24 md:mb-32">
      <div className="w-full">
        <Reveal>
          <div className="glass-panel rounded-3xl p-8 sm:p-10 text-left shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
              Technologies I work with
            </h2>

            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              {TECHS.map((tech) => (
                <div
                  key={tech.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl glass-panel flex flex-col items-center justify-center p-3 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1.5 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/25 group"
                  title={tech.name}
                >
                  <div
                    style={{ backgroundColor: tech.bg, color: tech.fg }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shadow-lg transition-transform group-hover:scale-110"
                  >
                    {tech.code.slice(0, 4)}
                  </div>
                  <span className="text-xs text-gray-400 font-medium mt-2.5 truncate max-w-full group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
