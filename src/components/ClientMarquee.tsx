"use client";

import React, { useState } from "react";
import { CLIENTS } from "@/data/landingData";
import { Building2, Landmark, Cpu } from "lucide-react";

export const ClientMarquee: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Semua");

  const categories = ["Semua", "Pemerintahan & BUMN", "Korporasi & Manufaktur", "Teknologi & Finansial"];

  const filteredClients = selectedFilter === "Semua" 
    ? CLIENTS 
    : CLIENTS.filter(c => c.category === selectedFilter);

  return (
    <section className="py-14 border-y border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-[#070a10] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
              Institusi &amp; Mitra Terpercaya
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Dipercaya oleh Sektor Publik &amp; Korporasi Terkemuka
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-200/70 dark:bg-white/3 p-1 rounded-xl border border-slate-300/80 dark:border-white/8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
                  selectedFilter === cat
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden mask-fade">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-slate-50 dark:from-[#070a10] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-slate-50 dark:from-[#070a10] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 py-2">
          {/* Double items for continuous loop */}
          {[...filteredClients, ...filteredClients].map((client, idx) => (
            <div
              key={idx}
              className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl bg-white dark:bg-white/3 border border-slate-200/90 dark:border-white/8 hover:border-indigo-500/50 hover:bg-slate-50 dark:hover:bg-white/6 shadow-sm dark:shadow-none transition-all group cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                {client.category === "Pemerintahan & BUMN" && <Landmark className="w-4 h-4" />}
                {client.category === "Korporasi & Manufaktur" && <Building2 className="w-4 h-4" />}
                {client.category === "Teknologi & Finansial" && <Cpu className="w-4 h-4" />}
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                  {client.name}
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {client.shortDesc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
