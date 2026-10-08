import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const About: React.FC = () => {
  return (
    <section id="about" className="px-6 sm:px-10 lg:px-16 xl:px-20 mb-24 md:mb-32">
      <div className="w-full">
        <Reveal>
          <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 text-left shadow-2xl relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

            <span className="text-violet-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-3">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
              I build solutions for the web.
            </h2>
            <p className="text-gray-300 text-base sm:text-xl leading-relaxed mb-8 max-w-4xl">
              I'm a Full Stack Web Developer with a passion for creating beautiful, functional and user-friendly websites and web applications. I enjoy turning ideas into real products.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-700 hover:from-violet-500 hover:to-indigo-600 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-violet-600/30 text-decoration-none group"
            >
              <span>More About Me</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
