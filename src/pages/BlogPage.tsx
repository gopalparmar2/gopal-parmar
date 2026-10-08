import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { Reveal } from "../components/Reveal";
import { ArrowRight, Calendar } from "lucide-react";

const ARTICLES = [
  {
    id: 1,
    title: "10 Tips to Write Clean and Maintainable Code",
    date: "May 15, 2024",
    snippet: "Best practices for modular architecture, naming conventions, and refactoring techniques in JavaScript.",
    image: "/assets/analytics.png",
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures with Examples",
    date: "Apr 20, 2024",
    snippet: "A practical guide to lexical scoping, memory management, and closure execution context.",
    image: "/assets/taskmanager.png",
  },
  {
    id: 3,
    title: "State Management in React: Context API vs Redux",
    date: "Apr 10, 2024",
    snippet: "Comparing lightweight state patterns with Redux Toolkit for complex React applications.",
    image: "/assets/ecommerce.png",
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js and Express",
    date: "Mar 28, 2024",
    snippet: "Designing scalable backend API endpoints with authentication, rate limiting, and MongoDB integration.",
    image: "/assets/cta_laptop.png",
  },
];

export const BlogPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 min-h-screen text-left">
      <div className="w-full">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />

        <Reveal>
          <div className="mb-12">
            <span className="text-violet-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-2">
              Articles & Insights
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
              My Articles
            </h1>
            <p className="text-gray-400 text-base">
              Thoughts on web development, JavaScript architecture, and engineering principles
            </p>
          </div>
        </Reveal>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {ARTICLES.map((art, idx) => (
            <Reveal key={art.id} delay={idx * 120}>
              <div className="glass-panel rounded-3xl overflow-hidden glass-panel-hover flex flex-col sm:flex-row h-full group">
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative bg-slate-950">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-violet-400 mb-2">
                      <Calendar size={13} />
                      <span>{art.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {art.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                      {art.snippet}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-400 hover:text-violet-300 text-decoration-none group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
