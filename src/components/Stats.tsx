import React from "react";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "3", label: "Technologies Mastered" },
];

export const Stats: React.FC = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-16 xl:px-20 mb-20 md:mb-28">
      <div className="w-full">
        <Reveal>
          <div className="glass-panel rounded-3xl py-9 px-6 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] shadow-2xl">
            {STATS.map((stat, idx) => (
              <div key={idx} className="py-5 md:py-2 px-6 text-center group">
                <div className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-violet-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-400 font-medium mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
