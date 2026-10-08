import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="px-6 sm:px-10 lg:px-16 xl:px-20 mb-24 md:mb-32">
      <div className="w-full">
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-to-r from-purple-900 via-violet-700 to-indigo-800 p-10 sm:p-14 lg:p-16 text-left overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background Light Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl pointer-events-none" />

            {/* Left Content */}
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                Let's build something amazing together
              </h2>
              <p className="text-white/85 text-base sm:text-lg mb-9 leading-relaxed font-medium">
                I'm available for freelance projects and full-time opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-white text-purple-900 hover:bg-gray-100 font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl shadow-black/25 hover:-translate-y-0.5 text-decoration-none group"
              >
                <span>Get In Touch</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right 3D Laptop Graphic */}
            <div className="relative z-10 w-56 sm:w-72 lg:w-80 flex-shrink-0 animate-floaty">
              <img
                src="/assets/cta_laptop.png"
                alt="3D Laptop Code Illustration"
                className="w-full h-auto filter drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
