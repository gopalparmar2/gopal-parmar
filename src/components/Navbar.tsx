import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a16]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/30"
          : "bg-[#090a16]/80 backdrop-blur-md border-b border-white/[0.04]"
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between h-16 sm:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0 text-decoration-none group">
          <img
            src="/assets/logo.png"
            alt="Gopal Parmar Logo"
            className="h-10 sm:h-11 lg:h-12 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `nav-link text-[13px] lg:text-sm font-medium tracking-wide text-decoration-none transition-colors ${
                  isActive ? "text-violet-400 font-semibold active" : "text-[#b0b0c8] hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Download CV CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-xs lg:text-sm px-4 lg:px-5 py-2 lg:py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-violet-700/40 hover:shadow-violet-600/60 hover:-translate-y-0.5 flex items-center gap-2 text-decoration-none"
          >
            <Download size={14} />
            <span>Download CV</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10 cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a16]/98 border-b border-white/10 px-6 py-5 flex flex-col gap-4 shadow-2xl backdrop-blur-2xl text-left">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium py-1 text-decoration-none ${
                  isActive ? "text-violet-400 font-semibold" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm py-3 rounded-xl shadow-lg text-decoration-none"
          >
            Download CV
          </Link>
        </div>
      )}
    </nav>
  );
};
