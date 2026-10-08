import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { Reveal } from "./Reveal";

interface Project {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  gradient: string;
  demoUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    desc: "Full featured e-commerce website with product filtering, cart, checkout and secure payments.",
    tags: ["Next.js", "MongoDB", "Stripe"],
    image: "/assets/ecommerce.png",
    gradient: "from-[#2b2f77] to-[#151538]",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    desc: "A task management application with authentication, drag & drop updates and real-time updates.",
    tags: ["React", "Node.js", "Socket.io"],
    image: "/assets/taskmanager.png",
    gradient: "from-[#1e2a4a] to-[#12162e]",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    desc: "A responsive analytics dashboard with beautiful charts and real-time data visualization.",
    tags: ["React", "Recharts", "Tailwind CSS"],
    image: "/assets/analytics.png",
    gradient: "from-[#3a2a5c] to-[#181229]",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "AI Content Generator",
    desc: "SaaS application leveraging LLM APIs to create blog posts, marketing copy, and automated summaries.",
    tags: ["Next.js", "OpenAI", "Tailwind CSS"],
    image: "/assets/ecommerce.png",
    gradient: "from-[#1a365d] to-[#0f172a]",
    demoUrl: "#",
  },
];

export const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState("All");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filteredProjects = selectedTag === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(selectedTag));

  // Auto slide cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [filteredProjects.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const allTags = ["All", ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags)))];

  return (
    <section id="projects" className="px-6 sm:px-10 lg:px-16 xl:px-20 mb-24 md:mb-32">
      <div className="w-full">
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-left">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 text-left">
              Explore recent web applications and full-stack products
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/projects"
              className="text-violet-400 hover:text-violet-300 text-sm font-semibold flex items-center gap-1.5 text-decoration-none group"
            >
              <span>View All Projects</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Slider Next/Prev Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 text-gray-300 hover:bg-violet-600 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 text-gray-300 hover:bg-violet-600 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none text-left">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(tag);
                setActiveIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                  : "bg-white/[0.04] text-gray-400 hover:bg-white/[0.08] hover:text-white border border-white/5"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid / Carousel View */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 120}>
              <div
                className={`glass-panel rounded-3xl overflow-hidden glass-panel-hover flex flex-col h-full text-left relative group ${
                  idx === activeIndex ? "ring-2 ring-violet-500/50" : ""
                }`}
              >
                {/* Project Image Preview Container */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Quick View button on hover */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      onClick={() => setPreviewProject(project)}
                      className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-1.5 border border-white/20 transition-all hover:scale-105"
                    >
                      <Eye size={14} />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] bg-violet-500/15 text-violet-300 border border-violet-500/20 px-2.5 py-0.5 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                      {project.desc}
                    </p>
                  </div>

                  {/* Live Demo Link */}
                  <div className="pt-2 border-t border-white/[0.06]">
                    <a
                      href={project.demoUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        setPreviewProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-400 hover:text-violet-300 text-decoration-none group/link"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {filteredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-violet-500 shadow-md shadow-violet-500/50"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Preview Modal */}
      {previewProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0f1124] border border-white/15 rounded-3xl max-w-2xl w-full p-6 text-left relative shadow-2xl animate-floaty">
            <button
              onClick={() => setPreviewProject(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>

            <img
              src={previewProject.image}
              alt={previewProject.title}
              className="w-full h-56 object-cover rounded-2xl mb-5 border border-white/10 shadow-lg"
            />

            <h3 className="text-2xl font-bold text-white mb-2">
              {previewProject.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {previewProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-violet-500/20 text-violet-300 px-3 py-1 rounded-md font-semibold border border-violet-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {previewProject.desc}
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                onClick={() => setPreviewProject(null)}
                className="bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl text-decoration-none shadow-lg shadow-violet-600/40"
              >
                Launch Project Demo
              </a>
              <button
                onClick={() => setPreviewProject(null)}
                className="text-gray-400 hover:text-white text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
