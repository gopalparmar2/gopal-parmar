import React, { useState } from "react";
import { Star, ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatarBg: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Darshan Rathod",
    role: "CEO, StrupEase",
    quote: "Gopal is an excellent developer. He delivered our e-commerce platform on time with great quality. Highly recommended!",
    avatarBg: "from-violet-600 to-indigo-900",
  },
  {
    id: 2,
    name: "Jay Patel",
    role: "Founder, TrackFlow",
    quote: "Professional, dedicated and skilled. Gopal understands requirements well and turns ideas into reality.",
    avatarBg: "from-purple-600 to-violet-900",
  },
  {
    id: 3,
    name: "Aarav Mehta",
    role: "Product Lead, Apex Tech",
    quote: "Working with Gopal was smooth and easy. His attention to frontend detail and full stack architectural clarity is impressive.",
    avatarBg: "from-indigo-600 to-purple-900",
  },
];

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="px-6 sm:px-10 lg:px-16 xl:px-20 mb-24 md:mb-32">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-left">
              What Clients Say
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 text-left">
              Feedback from client collaborations and freelance projects
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="text-violet-400 hover:text-violet-300 text-sm font-semibold flex items-center gap-1 text-decoration-none group hidden sm:flex"
            >
              <span>View All</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 text-gray-300 hover:bg-violet-600 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-white/[0.07] border border-white/10 text-gray-300 hover:bg-violet-600 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid / Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 150}>
              <div
                onClick={() => setActiveIdx(idx)}
                className={`glass-panel rounded-2xl p-6 text-left glass-panel-hover flex flex-col justify-between h-full relative cursor-pointer ${
                  idx === activeIdx ? "ring-2 ring-violet-500/50 bg-white/[0.05]" : ""
                }`}
              >
                <Quote size={32} className="absolute top-4 right-4 text-violet-500/15 pointer-events-none" />

                <div>
                  {/* Client Avatar & Info */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center font-bold text-white text-sm shadow-md shadow-violet-600/30 flex-shrink-0`}
                    >
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{t.name}</div>
                      <div className="text-xs text-gray-400 font-medium">{t.role}</div>
                    </div>
                  </div>

                  {/* 5 Yellow Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={14} fill="#facc15" color="#facc15" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIdx
                  ? "w-8 bg-violet-500 shadow-md shadow-violet-500/50"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
