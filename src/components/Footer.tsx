"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_INFO, ALL_SERVICES } from "@/data/landingData";
import {
  Cpu,
  Mail,
  Phone,
  MessageCircle,
  ArrowUp,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Lock,
  Building2,
  FileCheck2,
} from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-50 dark:bg-[#05070c] border-t border-slate-200/90 dark:border-white/8 text-slate-600 dark:text-slate-400 text-xs sm:text-sm transition-colors overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* SECTION 1: ENTERPRISE TRUST & COMPLIANCE STRIP */}
      <div className="border-b border-slate-200/90 dark:border-white/6 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Badge 1 */}
          <div className="p-4 rounded-2xl bg-white dark:bg-white/2 border border-slate-200/80 dark:border-white/5 flex items-start gap-3.5 shadow-xs transition-all hover:border-indigo-500/30">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                PT Berbadan Hukum Resmi
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                NIB, NPWP &amp; KBLI 62019 terdaftar resmi di Kemenkumham RI.
              </div>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="p-4 rounded-2xl bg-white dark:bg-white/2 border border-slate-200/80 dark:border-white/5 flex items-start gap-3.5 shadow-xs transition-all hover:border-emerald-500/30">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                Kedaulatan &amp; NDA Ketat
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                Source code &amp; IP 100% milik klien. Data server lokal/on-premise.
              </div>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="p-4 rounded-2xl bg-white dark:bg-white/2 border border-slate-200/80 dark:border-white/5 flex items-start gap-3.5 shadow-xs transition-all hover:border-cyan-500/30">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                SLA Ketersediaan 99.98%
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                Sistem mission-critical dengan respons insiden 24/7 siaga.
              </div>
            </div>
          </div>

          {/* Badge 4 */}
          <div className="p-4 rounded-2xl bg-white dark:bg-white/2 border border-slate-200/80 dark:border-white/5 flex items-start gap-3.5 shadow-xs transition-all hover:border-purple-500/30">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                Zero-Slop Architecture
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                Bebas template rapuh. Rekayasa modular, clean code &amp; scalable.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: MAIN FOOTER DIRECTORY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Direct Contact Column (Col 5) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            {/* Brand Logo & Live Status */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center p-0.5 shadow-md shadow-indigo-500/20">
                  <div className="w-full h-full bg-white dark:bg-obsidian rounded-[10px] flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div className="text-left">
                  <span className="font-extrabold text-xl text-slate-900 dark:text-white font-mono tracking-tight">
                    BUSYRA<span className="text-indigo-600 dark:text-cyan-400">.</span>TECH
                  </span>
                  <div className="text-[10px] font-mono font-semibold uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
                    Enterprise Software &amp; AI Integrator
                  </div>
                </div>
              </div>

            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-slate-900 dark:text-slate-200">{COMPANY_INFO.legalName}</strong> adalah mitra rekayasa software enterprise dan integrator AI produksi yang dipercaya berbagai skala bisnis — dari startup ambisius, UKM berkembang, hingga korporasi besar di seluruh Indonesia.
            </p>

            {/* Structured Contact Cards */}
            <div className="space-y-2.5 pt-1 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-white/2 border border-slate-200/80 dark:border-white/5 hover:border-emerald-500/40 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-mono text-[11px] flex items-center gap-2 transition-all shadow-xs group"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate">{COMPANY_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-3 rounded-xl bg-white dark:bg-white/2 border border-slate-200/80 dark:border-white/5 hover:border-cyan-500/40 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-mono text-[11px] flex items-center gap-2 transition-all shadow-xs group"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate">{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Layanan Rekayasa (Col 3) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
              <span className="text-xs font-mono uppercase text-slate-900 dark:text-white font-bold tracking-wider">
                Layanan Rekayasa
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold">
                7 Layanan
              </span>
            </div>

            <ul className="space-y-2 text-xs">
              {ALL_SERVICES.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/layanan/${srv.slug}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all group"
                  >
                    <span className="font-medium text-xs truncate mr-2">{srv.title}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigasi & Eksplorasi (Col 2) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="border-b border-slate-200 dark:border-white/10 pb-2">
              <span className="text-xs font-mono uppercase text-slate-900 dark:text-white font-bold tracking-wider">
                Eksplorasi
              </span>
            </div>

            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/portofolio"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all group"
                >
                  <span>Portofolio</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">12+</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all group"
                >
                  <span>Katalog Layanan</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  href="/#architecture"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all group"
                >
                  <span>Arsitektur Sistem</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all group"
                >
                  <span>Metodologi Rekayasa</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  href="/#tech-stack"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all group"
                >
                  <span>Tech Radar &amp; Tools</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Hours & Fast Consultation (Col 3) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <div className="border-b border-slate-200 dark:border-white/10 pb-2">
              <span className="text-xs font-mono uppercase text-slate-900 dark:text-white font-bold tracking-wider">
                Operasional &amp; Konsultasi
              </span>
            </div>

            {/* Operational Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-white/2 border border-slate-200/80 dark:border-white/5 space-y-3 text-left shadow-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">
                    Jam Kerja Resmi:
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                    Senin - Jumat: 09.00 - 18.00 WIB
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                    Emergency SLA 24/7 SIAGA
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-white/5">
                <button
                  onClick={onOpenConsultation}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold text-xs shadow-md shadow-indigo-600/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Jadwalkan Konsultasi Teknis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Strict NDA Assurance badge */}
            <div className="p-3 rounded-xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/15 flex items-center gap-2.5 text-xs text-indigo-700 dark:text-indigo-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span className="text-[11px] leading-tight font-medium">
                Kerahasiaan data terjamin dengan Perjanjian Kerahasiaan (NDA) resmi sebelum kick-off.
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 3: BOTTOM BAR & COPYRIGHT */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-white/6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="text-center md:text-left">
            <div>
              &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. Hak cipta dilindungi undang-undang.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/40 transition-all cursor-pointer shadow-xs"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action Badge */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Halo Busyra Tech, saya ingin konsultasi terkait kebutuhan pengembangan aplikasi/solusi AI.")}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/60 hover:scale-105 active:scale-95 transition-all group cursor-pointer border border-emerald-400/30"
          aria-label="Konsultasi WhatsApp 24/7"
        >
          <div className="relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <MessageCircle className="w-5 h-5 fill-white relative" />
          </div>
          <div className="text-left leading-tight hidden sm:block">
            <div className="text-[10px] uppercase font-mono opacity-80">Konsultasi Langsung</div>
            <div className="text-xs font-bold font-mono">WhatsApp 24/7</div>
          </div>
        </a>
      </div>
    </footer>
  );
};
