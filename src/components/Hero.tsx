import React from "react";
import { Link } from "react-router-dom";
import { Code2, Settings, Boxes, FileText, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "./Icons";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 min-h-[92vh] flex items-center justify-center px-6 sm:px-10 lg:px-16 xl:px-20 overflow-hidden"
    >
      {/* Background Glowing Orbs */}
      <div className="absolute right-[5%] top-[10%] w-[550px] h-[550px] rounded-full bg-radial from-violet-600/35 via-indigo-600/10 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute left-[-10%] top-[20%] w-[450px] h-[450px] rounded-full bg-radial from-indigo-800/25 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
        {/* Left Column Text Content */}
        <div className="flex-1 max-w-2xl text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#7c3aed]/15 border border-violet-400/20 text-[#c4b5fd] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5 shadow-sm">
            <span>👋 Hi, I'm</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-3">
            Gopal{" "}
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
              Parmar
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-[#c7c7d9] font-normal mb-4">
            Full Stack <b className="text-white font-bold">Web Developer</b>
          </p>

          {/* Description */}
          <p className="text-[#9494ab] text-base sm:text-lg leading-[1.7] mb-8 max-w-xl">
            I build modern, scalable and high-performance web applications with great user experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-9">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] hover:from-[#6d28d9] hover:to-[#4c1d95] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-purple-600/30 hover:-translate-y-0.5 text-decoration-none"
            >
              Hire Me
            </Link>
            <Link
              to="/projects"
              className="bg-transparent hover:bg-white/[0.08] border border-white/20 text-[#e5e5f0] hover:border-white/50 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-250 flex items-center gap-2 text-decoration-none group"
            >
              <span>View My Work</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs sm:text-sm text-[#8a8aa3] font-medium">Let's connect:</span>
            <div className="flex items-center gap-3">
              {[
                {
                  Icon: GithubIcon,
                  href: "https://github.com",
                  label: "GitHub",
                },
                {
                  Icon: LinkedinIcon,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  Icon: TwitterIcon,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
                {
                  Icon: MailIcon,
                  href: "mailto:hello@gopalparmar.com",
                  label: "Email",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/[0.07] border border-white/10 hover:bg-violet-600 hover:border-violet-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column Developer Frame */}
        <div className="relative flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]">
          {/* Dashed outer decorative spinning border */}
          <div className="absolute -inset-7 rounded-full border border-dashed border-violet-400/30 animate-spin-slow pointer-events-none" />

          {/* Main Photo Card Container */}
          <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl bg-gradient-to-b from-[#1d1b3c] via-[#121124] to-[#0a0a16] flex items-end justify-center animate-floaty">
            {/* Glowing circle behind photo */}
            <div className="absolute top-12 w-60 h-60 rounded-full bg-violet-600/40 blur-2xl pointer-events-none" />

            {/* Developer Portrait Image */}
            <img
              src="/assets/hero_developer.png"
              alt="Gopal Parmar - Full Stack Web Developer"
              className="relative z-10 w-full h-full object-cover object-top filter brightness-[1.05] contrast-[1.05]"
            />
          </div>

          {/* Floating Feature Icons on Right Edge */}
          {[
            { icon: Code2, delay: "0s", top: "10%" },
            { icon: Settings, delay: "1s", top: "32%" },
            { icon: Boxes, delay: "2s", top: "54%" },
            { icon: FileText, delay: "3s", top: "76%" },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{ top: item.top }}
              className="absolute -right-6 w-12 h-12 rounded-2xl bg-[#15162e]/90 border border-white/15 shadow-xl backdrop-blur-md flex items-center justify-center text-violet-400 animate-floaty transition-all hover:scale-110"
            >
              <item.icon size={21} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
