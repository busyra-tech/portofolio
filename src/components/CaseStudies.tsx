"use client";

import React, { useState } from "react";
import { CASE_STUDIES, CaseStudy } from "@/data/landingData";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  Factory, 
  Building2, 
  Landmark, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle,
  Layers
} from "lucide-react";

interface CaseStudiesProps {
  onSelectProject: (projectTitle: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onSelectProject }) => {
  const [selectedId, setSelectedId] = useState<string>(CASE_STUDIES[0].id);
  const activeStudy = CASE_STUDIES.find((s) => s.id === selectedId) || CASE_STUDIES[0];

  const getPartnerIcon = (id: string) => {
    switch (id) {
      case "po-system":
        return <Factory className="w-4 h-4" />;
      case "enterprise-hris":
        return <Building2 className="w-4 h-4" />;
      case "gov-knowledge-hub":
        return <Landmark className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="showcase" className="py-20 lg:py-24 relative bg-slate-50 dark:bg-[#080b11] border-t border-slate-200/90 dark:border-white/8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Rekam Jejak &amp; Dampak Terukur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Studi Kasus Implementasi Produksi Skala Nyata
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Kami mengukur keberhasilan bukan dari baris kode yang ditulis, melainkan dari efisiensi operasional terukur, mitigasi risiko data berdaulat, dan ketahanan sistem produksi yang diserahkan kepada mitra.
          </p>
        </div>

        {/* Interactive Partner Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {CASE_STUDIES.map((study: CaseStudy) => {
            const isSelected = study.id === activeStudy.id;
            return (
              <button
                key={study.id}
                onClick={() => setSelectedId(study.id)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between gap-3 relative overflow-hidden ${
                  isSelected
                    ? "bg-white dark:bg-[#0e1424] border-indigo-500/60 dark:border-indigo-500/60 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/30"
                    : "bg-white/70 dark:bg-white/2 border-slate-200/80 dark:border-white/6 hover:bg-white dark:hover:bg-white/5 hover:border-slate-300 dark:hover:border-white/15"
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-400" />
                )}

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {getPartnerIcon(study.id)}
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {study.summaryBadge || study.category}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {study.impactMetrics[0]?.value}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                    {study.client}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {study.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Showcase Deep Dive Card (Bento Spotlight) */}
        <div className="rounded-3xl bg-white dark:bg-[#0c101c] border border-slate-200 dark:border-white/8 p-6 sm:p-10 shadow-xl relative overflow-hidden text-left transition-all animate-in fade-in duration-300">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Status & Meta Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                {activeStudy.client}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {"//"} {activeStudy.category}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{activeStudy.productionStatus || "Production SLA 99.98% Live"}</span>
            </div>
          </div>

          {/* Title & Core Overview */}
          <div className="py-6 space-y-3">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              {activeStudy.title}
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
              {activeStudy.overview}
            </p>
          </div>

          {/* Bento Content Layout: Left Details vs Right Command Center */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
            {/* Left Column: Challenge, Solution & Highlights */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              {/* Challenge vs Solution Dual Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/15 border border-rose-200/80 dark:border-rose-900/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-rose-600 dark:text-rose-400">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Tantangan Kritis</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeStudy.challengeSummary || "Verifikasi manual dokumen kompleks yang memakan waktu dan berisiko human error."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/15 border border-emerald-200/80 dark:border-emerald-900/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-emerald-600 dark:text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Solusi Rekayasa</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeStudy.solutionSummary || "Otomasi sistem berbasis AI sovereign dan pipeline sinkronisasi multi-tier tamper-proof."}
                  </p>
                </div>
              </div>

              {/* Architecture Highlights */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wider flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Sorotan Arsitektur Rekayasa:</span>
                </div>

                <div className="space-y-2.5">
                  {activeStudy.architectureHighlights.map((hl: string, i: number) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/3 border border-slate-200/80 dark:border-white/6 flex items-start gap-3 transition-colors hover:border-indigo-500/30"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployed Tech Stack */}
              {activeStudy.techStack && activeStudy.techStack.length > 0 && (
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wider mb-2.5">
                    Ekosistem Stack yang Diterapkan:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeStudy.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/4 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Measurable Impact Command Center */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-100/90 dark:bg-linear-to-br dark:from-slate-900 dark:via-[#0a0f1d] dark:to-[#0d1428] text-slate-900 dark:text-white border border-slate-200/90 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden transition-colors">
              {/* Internal HUD Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                  <div className="text-xs font-mono uppercase font-bold text-slate-800 dark:text-slate-300 tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Hasil &amp; Metrik Dampak</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                    Verified ROI
                  </span>
                </div>

                {/* Metrics Stack */}
                <div className="space-y-4">
                  {activeStudy.impactMetrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white dark:bg-white/4 border border-slate-200/80 dark:border-white/8 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 shadow-xs dark:shadow-none transition-all group"
                    >
                      <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-600 dark:text-emerald-400 tracking-tight group-hover:scale-105 transition-transform origin-left">
                        {m.value}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Security Guarantee Notice */}
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400 pt-1 font-mono">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Kerahasiaan source code &amp; data berdaulat dilindungi NDA ketat.</span>
                </div>
              </div>

              {/* Consultation CTA Action */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 relative z-10">
                <button
                  onClick={() => onSelectProject(`${activeStudy.title} (${activeStudy.client})`)}
                  className="w-full flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold py-3.5 px-5 rounded-xl bg-linear-to-r from-indigo-600 via-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-lg shadow-indigo-600/25 active:scale-95 transition-all cursor-pointer group"
                >
                  <span>Konsultasikan Kebutuhan Serupa</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
