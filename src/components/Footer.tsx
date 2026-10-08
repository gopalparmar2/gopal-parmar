import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "./Icons";

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="blog" className="border-t border-white/[0.06] pt-20 pb-10 px-6 sm:px-10 lg:px-16 xl:px-20 bg-[#060712]">
      <div className="w-full">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-left">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start lg:pr-4">
            <Link
              to="/"
              className="inline-flex items-center p-0 m-0 mb-4 text-decoration-none group"
            >
              <img
                src="/assets/logo.png"
                alt="Gopal Parmar Logo"
                className="h-10 sm:h-11 lg:h-12 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
              Building brands and digital experiences that matter.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {[
                { Icon: GithubIcon, href: "https://github.com" },
                { Icon: LinkedinIcon, href: "https://linkedin.com" },
                { Icon: TwitterIcon, href: "https://twitter.com" },
                { Icon: MailIcon, href: "mailto:hello@gopalparmar.com" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/[0.07] border border-white/10 hover:bg-violet-600 hover:border-violet-500 text-gray-300 hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
                >
                  <s.Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm p-0 list-none">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Skills", path: "/skills" },
                { label: "Projects", path: "/projects" },
                { label: "Experience", path: "/experience" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="text-gray-400 hover:text-violet-400 transition-colors text-decoration-none"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm p-0 list-none">
              {[
                "Web Development",
                "API Development",
                "UI/UX Integration",
                "Database Design",
                "Performance Optimization",
              ].map((serv) => (
                <li key={serv}>
                  <Link
                    to="/skills"
                    className="text-gray-400 hover:text-gray-200 transition-colors text-decoration-none cursor-pointer"
                  >
                    {serv}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400 p-0 list-none">
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:hello@gopalparmar.com" className="hover:text-violet-400 text-decoration-none text-gray-400">
                  hello@gopalparmar.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Rajkot, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-500">
          <div>© 2025 Gopal Parmar. All rights reserved.</div>
        </div>
      </div>

      {/* Fixed Floating Scroll-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-r from-violet-600 to-indigo-700 text-white shadow-xl shadow-violet-600/40 flex items-center justify-center hover:scale-110 transition-all duration-300 border border-white/20 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
};
