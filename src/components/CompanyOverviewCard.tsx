"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Award, 
  Zap,
  Globe2,
  Code2
} from "lucide-react";

interface CompanyOverviewCardProps {
  onOpenConsultation?: () => void;
}

export const CompanyOverviewCard: React.FC<CompanyOverviewCardProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<"about" | "solutions" | "pillars">("about");

  return (
    <div className="relative rounded-3xl bg-white dark:bg-[#0d121c] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl overflow-hidden text-left transition-colors">
      {/* Navigation Tabs */}
      <div className="grid grid-cols-3 border-b border-slate-200 dark:border-white/10 p-1.5 bg-slate-100/70 dark:bg-white/2">
        <button
          onClick={() => setActiveTab("about")}
          className={`py-2 px-2 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === "about"
              ? "bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          <Building2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-200" />
          <span>Siapa Kami</span>
        </button>

        <button
          onClick={() => setActiveTab("solutions")}
          className={`py-2 px-2 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === "solutions"
              ? "bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-200" />
          <span>Fokus Solusi</span>
        </button>

        <button
          onClick={() => setActiveTab("pillars")}
          className={`py-2 px-2 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === "pillars"
              ? "bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          <Award className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-200" />
          <span>Keunggulan</span>
        </button>
      </div>

      {/* Tab Body Content */}
      <div className="p-6 space-y-5">
        {/* TAB 1: SIAPA KAMI */}
        {activeTab === "about" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Teknologi Berdaulat &amp; Rekayasa Tingkat Lanjut</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Software House &amp; Production AI Integrator Terpercaya di Indonesia
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Busyra Tech hadir untuk menjembatani kebutuhan korporasi dan instansi pemerintahan terhadap sistem digital mission-critical, kecerdasan buatan terapan, dan modernisasi arsitektur tanpa risiko kegagalan proyek.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/5 space-y-1">
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Fokus Pasar</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Startup, UKM &amp; Enterprise</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/5 space-y-1">
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Karakter Kerja</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Zero-Slop, High-Security &amp; SLA 99.98%</div>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Legalitas berbadan hukum resmi PT di Indonesia dengan jaminan kepatuhan NDA.</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Didukung oleh Principal Engineer, Solution Architect, dan AI Specialist berpengalaman.</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FOKUS SOLUSI */}
        {activeTab === "solutions" && (
          <div className="space-y-3.5 animate-in fade-in duration-200">
            <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase">
              Layanan Utama yang Kami Sediakan:
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">AI Integrator &amp; Private RAG Sovereign</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                    Implementasi LLM on-premise, agen otomatisasi otonom, dan pencarian semantik berkeamanan tinggi.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Mission-Critical Web &amp; Cloud Platform</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                    Backend terdistribusi Go/Node, microservices, integrasi payment &amp; ERP skala jutaan transaksi.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">High-Performance Mobile Apps (iOS &amp; Android)</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                    Aplikasi perbankan, logistik pabrik, dan consumer apps dengan performa native 60fps.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PILAR KEUNGGULAN */}
        {activeTab === "pillars" && (
          <div className="space-y-3.5 animate-in fade-in duration-200">
            <div className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase">
              Standar Rekayasa Anti-Slop:
            </div>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                  <Code2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  <span>Arsitektur Modular &amp; Clean Code</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Kami tidak menjual template murahan atau skrip coba-coba. Setiap arsitektur dirancang terukur, berkinerja tinggi, dan mudah dirawat jangka panjang.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  <span>Kedaulatan &amp; Keamanan Data Total</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Dukungan penuh instalasi on-premise di data center klien atau cloud privat dengan enkripsi end-to-end tanpa kebocoran data pihak ketiga.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                  <Zap className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                  <span>Komunikasi Langsung dengan Lead Engineer</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Diskusi langsung bersama Principal Solution Architect tanpa birokrasi sales berlapis. Respons WhatsApp resmi &lt; 15 menit.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Bottom Bar inside Card */}
        <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <span>Eksplorasi 7 Layanan Kami</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white text-xs font-medium border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
            >
              Jadwalkan Konsultasi
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
