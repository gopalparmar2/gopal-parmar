import { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { Reveal } from "../components/Reveal";
import { ExternalLink, Eye } from "lucide-react";
import { GithubIcon } from "../components/Icons";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  desc: string;
  fullDesc: string;
  tags: string[];
  image: string;
  gradient: string;
  demoUrl: string;
  githubUrl: string;
  features: string[];
}

export const ALL_PROJECTS: ProjectData[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    category: "E-Commerce",
    desc: "Full featured e-commerce website with product filtering, cart, checkout and secure payments.",
    fullDesc: "A full-featured e-commerce platform built with Next.js and MongoDB. It includes product filtering, search, shopping cart, wishlist management, secure checkout with Stripe integration, and real-time order tracking.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Stripe", "Redux Toolkit"],
    image: "/assets/ecommerce.png",
    gradient: "from-[#2b2f77] to-[#151538]",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/ecommerce",
    features: [
      "User authentication (Login / Register)",
      "Product listing with search and multi-tag filters",
      "Add to cart and persistent wishlist management",
      "Secure payment checkout flow powered by Stripe",
      "Real-time order management dashboard",
      "Fully responsive design optimized for mobile and desktop",
    ],
  },
  {
    id: "taskmanager",
    title: "Task Management App",
    category: "Web Apps",
    desc: "A task management application with authentication, drag & drop updates and real-time updates.",
    fullDesc: "A collaborative Kanban-style task management web application with user authentication, real-time board updates using WebSockets, drag & drop card transitions, priority tags, and deadline notifications.",
    tags: ["React", "Node.js", "Socket.io", "Express", "Tailwind CSS"],
    image: "/assets/taskmanager.png",
    gradient: "from-[#1e2a4a] to-[#12162e]",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/taskmanager",
    features: [
      "Interactive Kanban boards with smooth drag & drop",
      "Real-time team collaboration powered by Socket.io",
      "Role-based access control and user authentication",
      "Customizable task tags, due dates, and attachments",
      "Dark and light mode UI themes",
    ],
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    category: "Dashboards",
    desc: "A responsive analytics dashboard with beautiful charts and real-time data visualization.",
    fullDesc: "An executive SaaS analytics dashboard featuring interactive line charts, metric cards, user retention heatmaps, transaction logs, and dynamic data filtering for complex web metrics.",
    tags: ["React", "Recharts", "Tailwind CSS", "TypeScript"],
    image: "/assets/analytics.png",
    gradient: "from-[#3a2a5c] to-[#181229]",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/analytics",
    features: [
      "Interactive time-series charts using Recharts",
      "Real-time KPI metrics widgets and revenue counters",
      "CSV & PDF data export capabilities",
      "Clean glassmorphism dark theme layout",
    ],
  },
  {
    id: "aigenerator",
    title: "AI Content Generator",
    category: "Web Apps",
    desc: "SaaS application leveraging LLM APIs to create blog posts, marketing copy, and automated summaries.",
    fullDesc: "An AI-powered content generation suite enabling marketers and writers to rapidly generate blog posts, social captions, SEO metadata, and email templates using state-of-the-art language model APIs.",
    tags: ["Next.js", "OpenAI", "Tailwind CSS", "TypeScript"],
    image: "/assets/ecommerce.png",
    gradient: "from-[#1a365d] to-[#0f172a]",
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/ai-generator",
    features: [
      "Custom prompt templates for blogs, emails, and captions",
      "Token usage analytics and subscription plan billing",
      "One-click text copy and markdown export",
    ],
  },
];

export const ProjectsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Web Apps", "Dashboards", "E-Commerce", "Others"];

  const filteredProjects = activeTab === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === activeTab || p.tags.includes(activeTab));

  return (
    <div className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 min-h-screen text-left">
      <div className="w-full">
        <Breadcrumb
          items={[{ label: "Home", to: "/" }, { label: "Projects" }]}
        />

        <Reveal>
          <div className="mb-10">
            <span className="text-violet-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-2">
              My Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
              My Projects
            </h1>
            <p className="text-gray-400 text-base">
              Detailed breakdown of web applications, SaaS tools, and client projects
            </p>
          </div>
        </Reveal>

        {/* Category Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 text-left scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === cat
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-600/40"
                  : "bg-white/[0.04] text-gray-400 hover:bg-white/[0.08] hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 120}>
              <div className="glass-panel rounded-3xl overflow-hidden glass-panel-hover flex flex-col h-full text-left relative group">
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                    <Link
                      to={`/projects/${project.id}`}
                      className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-1.5 border border-white/20 transition-all text-decoration-none"
                    >
                      <Eye size={14} />
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors text-decoration-none block"
                    >
                      {project.title}
                    </Link>

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

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-400 hover:text-violet-300 text-decoration-none"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={13} />
                    </Link>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white text-decoration-none"
                    >
                      <GithubIcon size={13} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
