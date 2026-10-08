import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; to?: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-6">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <ChevronRight size={14} className="text-gray-600" />}
          {idx === items.length - 1 || !item.to ? (
            <span className="text-violet-400 font-semibold">{item.label}</span>
          ) : (
            <Link
              to={item.to}
              className="hover:text-white transition-colors underline-offset-4 text-decoration-none text-gray-400"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
