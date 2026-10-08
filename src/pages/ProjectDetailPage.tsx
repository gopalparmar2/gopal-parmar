import React from "react";
import { useParams, Link } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { Reveal } from "../components/Reveal";
import { ExternalLink, Check, ArrowLeft } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { ALL_PROJECTS } from "./ProjectsPage";

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const data = ALL_PROJECTS.find((p) => p.id === id) || ALL_PROJECTS[0];

  return (
    <div className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 min-h-screen text-left">
      <div className="w-full">
        <Breadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Projects", to: "/projects" },
            { label: data.title },
          ]}
        />

        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white mb-6 text-decoration-none"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>

        {/* Top Browser Screenshot Window Frame */}
        <Reveal>
          <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl mb-12 border border-white/15">
            {/* Browser Window Header */}
            <div className="bg-[#12142b] px-5 py-3 flex items-center gap-2 border-b border-white/[0.08]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-gray-400 font-mono ml-4 truncate">https://{data.id}.demo.app</span>
            </div>

            {/* Preview Screenshot */}
            <div className="max-h-[500px] overflow-hidden bg-slate-950">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover object-top filter brightness-[1.03]"
              />
            </div>
          </div>
        </Reveal>

        {/* Details Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Description & Features */}
          <Reveal className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
                {data.title}
              </h1>
              <p className="text-[#9494ab] text-base sm:text-lg leading-relaxed">
                {data.fullDesc}
              </p>
            </div>

            {/* Key Features */}
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 flex items-center justify-center flex-shrink-0">
                      <Check size={13} />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Tech Used & Actions */}
          <Reveal delay={150}>
            <div className="glass-panel rounded-3xl p-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {data.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-violet-500/15 text-violet-300 border border-violet-500/20 px-3 py-1 rounded-lg font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] space-y-3">
                <a
                  href={data.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-gradient-to-r from-violet-600 to-indigo-700 hover:from-violet-500 hover:to-indigo-600 text-white font-semibold text-sm py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 text-decoration-none"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={15} />
                </a>

                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 text-gray-200 font-semibold text-sm py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-decoration-none"
                >
                  <GithubIcon size={16} />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
