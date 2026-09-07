"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ALL_SERVICES } from "@/data/landingData";
import {
  Cpu,
  Compass,
  Server,
  Layers,
  Smartphone,
  Apple,
  Globe,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function LayananPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectContext, setProjectContext] = useState("");
  const [activeSlug, setActiveSlug] = useState<string>(ALL_SERVICES[0].slug);

  const activeService = ALL_SERVICES.find((s) => s.slug === activeSlug) || ALL_SERVICES[0];

  const handleOpenConsultation = (context: string) => {
    setProjectContext(context);
    setModalOpen(true);
  };

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "ai-integrator":
        return <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "ai-konsultan":
        return <Sparkles className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      case "konsultan-it":
        return <Compass className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "software-house-jakarta":
        return <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case "android-development":
        return <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case "ios-development":
        return <Apple className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case "web-development":
        return <Globe className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-slate-600 dark:text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian text-slate-900 dark:text-[#f8fafc] flex flex-col selection:bg-indigo-600 selection:text-white transition-colors">
      <Navbar onOpenConsultation={() => handleOpenConsultation("Konsultasi Layanan")} />

      <main className="flex-1 pt-32 pb-24">
        {/* Header Banner */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            <span>Layanan Rekayasa Digital Enterprise</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Layanan Terintegrasi untuk{" "}
            <span className="bg-linear-to-r from-indigo-600 via-cyan-600 to-blue-600 dark:from-indigo-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Transformasi Skala Nyata
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-3xl mt-4 leading-relaxed">
            Dari strategi AI tingkat direksi, rekayasa web berkecepatan tinggi, hingga aplikasi seluler berskala jutaan pengguna. Kami menyediakan keahlian teknis menyeluruh tanpa spekulasi.
          </p>
        </section>

        {/* Master Service Explorer */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Nav Tabs */}
            <div className="lg:col-span-4 space-y-2 bg-white dark:bg-obsidian-surface p-3 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm sticky top-28">
              <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 px-3 py-2 font-bold tracking-wider">
                Daftar 7 Layanan Utama:
              </div>

              {ALL_SERVICES.map((srv) => (
                <button
                  key={srv.slug}
                  onClick={() => setActiveSlug(srv.slug)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all text-left cursor-pointer group ${
                    activeSlug === srv.slug
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                      : "hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        activeSlug === srv.slug
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                      }`}
                    >
                      {getServiceIcon(srv.slug)}
                    </div>
                    <div>
                      <div className="text-xs font-bold font-mono">{srv.title}</div>
                      <div
                        className={`text-[10px] ${
                          activeSlug === srv.slug ? "text-indigo-200" : "text-slate-500"
                        }`}
                      >
                        {srv.category}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      activeSlug === srv.slug ? "translate-x-1" : "opacity-40 group-hover:opacity-100"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right Active Service Deep-Dive View */}
            <div className="lg:col-span-8 rounded-2xl bg-white dark:bg-obsidian-surface border border-slate-200 dark:border-white/10 p-6 sm:p-10 text-left space-y-8 relative overflow-hidden shadow-sm dark:shadow-2xl">
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Service Hero Info */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                    {activeService.category}
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    {activeService.metrics}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {activeService.title}
                </h2>

                <p className="text-base text-indigo-600 dark:text-indigo-300 font-medium italic">
                  &quot;{activeService.tagline}&quot;
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                  {activeService.description}
                </p>
              </div>

              {/* Problems Solved */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <h3 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wider">
                  Masalah Operasional yang Kami Selesaikan:
                </h3>
                <div className="space-y-2">
                  {activeService.coreProblemsSolved.map((prob: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{prob}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <h3 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wider">
                  Artefak &amp; Deliverables Utama:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.keyDeliverables.map((deliv: string, i: number) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200 font-mono flex items-start gap-2"
                    >
                      <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/10">
                <h3 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wider">
                  Toolchain &amp; Ekosistem Teknologi:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeService.techStack.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/4 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Consultation Action Bar */}
              <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Konsultasi Kebutuhan Anda</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Tersedia penjadwalan meeting teknis bersama Engineering Lead.</div>
                </div>

                <button
                  onClick={() => handleOpenConsultation(`Kebutuhan Layanan: ${activeService.title}`)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-blue-600 text-white font-bold text-xs shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Diskusi {activeService.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenConsultation={() => handleOpenConsultation("Footer Layanan")} />

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProjectContext={projectContext}
      />
    </div>
  );
}
