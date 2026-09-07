"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const emptySubscribe = () => () => {};

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme mode"
      title={theme === "dark" ? "Ganti ke Light Mode" : "Ganti ke Dark Mode"}
      className={`relative p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
        theme === "dark"
          ? "bg-white/5 border-white/10 text-amber-300 hover:bg-white/10 hover:text-amber-200"
          : "bg-slate-100 border-slate-300 text-indigo-600 hover:bg-slate-200 hover:text-indigo-700 shadow-sm"
      } ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
};
