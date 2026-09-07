"use client";

import React, { useState, useEffect, useCallback } from "react";
import { TESTIMONIALS } from "@/data/landingData";
import { Quote, Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

export const TestimonialsAndMedia: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIdx(idx);
        setIsTransitioning(false);
      }, 200);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((activeIdx + 1) % TESTIMONIALS.length), [activeIdx, goTo]);
  const prev = useCallback(() => goTo((activeIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), [activeIdx, goTo]);

  // Auto-rotate every 8s
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const t = TESTIMONIALS[activeIdx];

  return (
    <section className="py-20 lg:py-28 relative bg-white dark:bg-[#080b11] border-t border-slate-200 dark:border-white/8 overflow-hidden transition-colors">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-indigo-500/4 dark:bg-indigo-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-cyan-500/3 dark:bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Feedback Mitra Strategis</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Apa Kata{" "}
            <span className="bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600 dark:from-indigo-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Pemimpin Transformasi Digital
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Testimoni langsung dari para pengambil keputusan di organisasi yang telah bermitra dengan kami.
          </p>
        </div>

        {/* Testimonial Showcase */}
        <div className="max-w-4xl mx-auto">
          {/* Main Quote Card */}
          <div className="relative group">
            {/* Gradient border glow */}
            <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-indigo-500/30 via-blue-500/20 to-cyan-500/30 dark:from-indigo-500/20 dark:via-blue-500/15 dark:to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <div className="relative rounded-3xl bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-[#0e131f] dark:via-[#111827] dark:to-[#0e131f] border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-2xl overflow-hidden">
              {/* Inner accent top bar */}
              <div className="h-1 bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500" />

              <div className="p-8 sm:p-12 lg:p-14">
                <div
                  className={`transition-all duration-200 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
                >
                  {/* Quote icon + rating row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed tracking-tight mb-10">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author info */}
                  <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-white/8">
                    <div className="flex items-center gap-4">
                      {/* Avatar with initial */}
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-600/20">
                        {t.author.split(" ").slice(-1)[0]?.charAt(0) || "E"}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">{t.author}</span>
                          <BadgeCheck className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">{t.org}</div>
                      </div>
                    </div>

                    {/* Navigation arrows */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prev}
                        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer active:scale-95"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={next}
                        className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer active:scale-95"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIdx
                    ? "w-8 bg-indigo-600 dark:bg-indigo-400"
                    : "w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
