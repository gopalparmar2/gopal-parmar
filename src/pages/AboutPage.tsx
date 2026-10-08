import { Breadcrumb } from "../components/Breadcrumb";
import { Reveal } from "../components/Reveal";
import { Check, Code2 } from "lucide-react";

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 min-h-screen text-left">
      <div className="w-full">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "About" }]} />

        <Reveal>
          <div className="mb-10">
            <span className="text-violet-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-2">
              About Me
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              I'm Gopal Parmar, <span className="bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">Full Stack Developer</span>
            </h1>
          </div>
        </Reveal>

        {/* Top Grid: Bio Narrative + Photo Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center mb-16">
          <Reveal className="lg:col-span-2">
            <p className="text-[#9494ab] text-base sm:text-xl leading-relaxed mb-6">
              I enjoy building things that live on the internet. My interest in web development started back in 2021 and since then I've been continuously learning and building modern, scalable web applications with great user experiences.
            </p>
            <p className="text-[#9494ab] text-base sm:text-lg leading-relaxed mb-8">
              Based in Rajkot, India, I specialize in full-stack JavaScript development using React, Next.js, Node.js, Express, and MongoDB. I focus on writing clean, maintainable code and turning complex ideas into intuitive digital products.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 glass-panel rounded-2xl">
              {[
                { val: "2+", label: "Years Experience" },
                { val: "20+", label: "Projects Completed" },
                { val: "15+", label: "Happy Clients" },
                { val: "3", label: "Technologies Mastered" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">{s.val}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Photo Frame */}
          <Reveal delay={150} className="flex justify-center">
            <div className="w-[280px] sm:w-[320px] h-[340px] sm:h-[380px] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl relative bg-gradient-to-b from-[#1d1b3c] to-[#0a0a16] flex items-end justify-center">
              <div className="absolute top-10 w-48 h-48 rounded-full bg-violet-600/30 blur-2xl pointer-events-none" />
              <img
                src="/assets/hero_developer.png"
                alt="Gopal Parmar"
                className="w-full h-full object-cover object-center filter brightness-[1.05]"
              />
            </div>
          </Reveal>
        </div>

        {/* My Approach Section */}
        <Reveal>
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">My Approach</h2>
            <p className="text-gray-400 text-sm">Core principles that guide my engineering and development process</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checklist items */}
            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-center space-y-4">
              {[
                { title: "Clean & Maintainable Code", desc: "Writing self-documenting, modular, and extensible code that scales effortlessly." },
                { title: "User-Centered Design", desc: "Crafting intuitive layouts and micro-interactions focused on seamless user experience." },
                { title: "Performance Focused", desc: "Optimizing asset sizes, bundle chunking, and lazy loading for lightning-fast loads." },
                { title: "Scalable Solutions", desc: "Designing robust database schemas and decoupled backend services for growth." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.02] transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-violet-500/20 border border-violet-500/30 text-violet-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Illustration Graphic Box */}
            <div className="glass-panel rounded-3xl p-8 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#13122c] to-[#0a0a18] min-h-[300px]">
              <div className="absolute inset-0 bg-violet-600/10 blur-3xl" />
              <div className="relative z-10 w-48 h-48 rounded-3xl bg-gradient-to-br from-violet-600/30 to-indigo-900/40 border border-violet-400/30 shadow-2xl flex flex-col items-center justify-center animate-floaty">
                <Code2 size={64} className="text-violet-400 mb-2" />
                <span className="text-xl font-extrabold text-white tracking-widest">&lt; / &gt;</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
