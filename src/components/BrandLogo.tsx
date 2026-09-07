import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showGlow?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  className = "",
  showGlow = true,
}) => {
  const dimensionMap = {
    sm: { px: 32, class: "w-8 h-8" },
    md: { px: 40, class: "w-9 h-9 sm:w-10 sm:h-10" },
    lg: { px: 48, class: "w-12 h-12" },
    xl: { px: 64, class: "w-16 h-16" },
  };

  const { px, class: sizeClass } = dimensionMap[size];

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClass} ${className}`}>
      {showGlow && (
        <div className="absolute inset-0 bg-linear-to-tr from-cyan-400/30 via-blue-600/30 to-indigo-600/30 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />
      )}
      <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md shadow-indigo-950/20 dark:shadow-cyan-950/40 border border-slate-200/80 dark:border-white/10">
        <Image
          src="/icon.png"
          alt="Busyra Tech Logo"
          width={px}
          height={px}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
    </div>
  );
};
