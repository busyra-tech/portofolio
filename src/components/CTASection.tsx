"use client";

import React from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Zap
} from "lucide-react";

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 lg:py-28 relative bg-slate-50 dark:bg-[#070a10] border-t border-slate-200/90 dark:border-white/8 overflow-hidden transition-colors">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-75 h-50 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl overflow-hidden text-left relative">
          {/* Top Decorative Line Accent */}
          <div className="h-1.5 w-full bg-linear-to-r from-indigo-500 via-blue-500 to-emerald-400" />

          <div className="p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Headline & Direct Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Langsung Bersama Principal Engineering Lead</span>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                    Siap Mengakselerasi Solusi Digital{" "}
                    <span className="bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 dark:from-indigo-400 dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                      Tanpa Risiko Proyek?
                    </span>
                  </h2>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                    Diskusikan arsitektur sistem, private AI sovereign, atau aplikasi mission-critical Anda. Dapatkan asesmen kelayakan teknis dan estimasi roadmap dalam hitungan jam.
                  </p>
                </div>

                {/* Direct Action Button */}
                <div className="pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-xl bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                  >
                    <FileText className="w-4 h-4 text-white" />
                    <span>Ajukan Request for Proposal (RFP)</span>
                    <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Column: To The Point Guarantees (Trust Cards) */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-200/90 dark:border-white/6 flex items-start gap-3.5 transition-all hover:border-indigo-500/30">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider">
                      Respon Cepat &lt; 15 Menit
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Tim technical lead kami siap merespons kebutuhan Anda setiap hari kerja.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-200/90 dark:border-white/6 flex items-start gap-3.5 transition-all hover:border-indigo-500/30">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider">
                      Mutual NDA Resmi Indonesia
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Jaminan kerahasiaan data enterprise &amp; kepemilikan penuh 100% intellectual property (IP).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-200/90 dark:border-white/6 flex items-start gap-3.5 transition-all hover:border-indigo-500/30">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider">
                      Zero-Obligation Discovery
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Sesi eksplorasi teknis dan estimasi feasibility gratis tanpa ikatan kontrak awal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
