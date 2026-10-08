import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 min-h-[85vh] flex items-center justify-center text-center relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10 space-y-6">
        {/* Large 404 graphic */}
        <div className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-500 tracking-widest drop-shadow-2xl">
          404
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Page not found
        </h1>

        <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-700 hover:from-violet-500 hover:to-indigo-600 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-xl shadow-violet-600/35 text-decoration-none"
          >
            <ArrowLeft size={18} />
            <span>Go Back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
