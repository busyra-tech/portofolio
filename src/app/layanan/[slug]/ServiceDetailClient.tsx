"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { ConsultationModal } from "../../../components/ConsultationModal";
import { DetailedService } from "../../../data/landingData";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";

interface ServiceDetailClientProps {
  service: DetailedService;
  allServices: DetailedService[];
}

export default function ServiceDetailClient({
  service,
  allServices,
}: ServiceDetailClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectContext, setProjectContext] = useState("");

  const handleOpenConsultation = (context: string) => {
    setProjectContext(context);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian text-slate-900 dark:text-[#f8fafc] flex flex-col selection:bg-indigo-600 selection:text-white transition-colors">
      <Navbar onOpenConsultation={() => handleOpenConsultation(`Konsultasi ${service.title}`)} />

      <main className="flex-1 pt-32 pb-24">
        {/* Breadcrumb & Navigation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-left">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Semua Layanan</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            <span>{service.category}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-xl text-indigo-600 dark:text-indigo-300 font-medium">
            {service.tagline}
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {service.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => handleOpenConsultation(`Kebutuhan Layanan: ${service.title}`)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-linear-to-r from-indigo-500 to-blue-600 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Jadwalkan Konsultasi Teknis</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/4 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/8 text-slate-700 dark:text-slate-200 font-medium text-sm transition-all shadow-xs"
            >
              <span>Lihat Portofolio Terkait</span>
            </Link>
          </div>
        </section>

        {/* Deep Dive Content Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          {/* Core Problems Solved */}
          <div className="p-8 rounded-2xl bg-white dark:bg-obsidian-surface border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Tantangan yang Kami Selesaikan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {service.coreProblemsSolved.map((prob: string, i: number) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{prob}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="p-8 rounded-2xl bg-white dark:bg-obsidian-surface border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Artefak &amp; Deliverables Resmi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.keyDeliverables.map((deliv: string, i: number) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-mono flex items-start gap-2.5"
                >
                  <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="p-8 rounded-2xl bg-white dark:bg-obsidian-surface border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Ekosistem Teknologi
            </h2>
            <div className="flex flex-wrap gap-2 pt-2">
              {service.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/4 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Other Services Switcher */}
          <div className="pt-8 border-t border-slate-200 dark:border-white/10">
            <h3 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold tracking-wider mb-4">
              Jelajahi Layanan Lainnya:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {allServices
                .filter((s) => s.slug !== service.slug)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/layanan/${other.slug}`}
                    className="p-4 rounded-xl bg-white dark:bg-white/2 border border-slate-200 dark:border-white/5 hover:border-indigo-500/40 transition-all group shadow-xs"
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {other.title}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono mt-1">
                      {other.category}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenConsultation={() => handleOpenConsultation(`Footer ${service.title}`)} />

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProjectContext={projectContext}
      />
    </div>
  );
}
