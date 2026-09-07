"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { SAAS_PRODUCTS } from "@/data/landingData";
import { Package, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function ProdukPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectContext, setProjectContext] = useState("");

  const handleOpenConsultation = (context: string = "") => {
    setProjectContext(context);
    setModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setModalOpen(false);
    setProjectContext("");
  };

  const accentMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/25 hover:border-emerald-500/50", text: "text-emerald-600 dark:text-emerald-400", badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20" },
    violet: { bg: "bg-violet-500/10", border: "border-violet-500/25 hover:border-violet-500/50", text: "text-violet-600 dark:text-violet-400", badge: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20" },
    indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/25 hover:border-indigo-500/50", text: "text-indigo-600 dark:text-indigo-400", badge: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20" },
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian text-slate-900 dark:text-[#f8fafc] flex flex-col selection:bg-indigo-600 selection:text-white transition-colors">
      <Navbar onOpenConsultation={() => handleOpenConsultation("Navbar Produk")} />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-300 text-xs font-mono uppercase tracking-wider">
              <Package className="w-3.5 h-3.5" />
              <span>Produk SaaS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Produk Digital{" "}
              <span className="bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 dark:from-indigo-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Siap Pakai
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Platform SaaS yang kami bangun dan operasikan — dirancang untuk menyelesaikan masalah nyata dengan teknologi modern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SAAS_PRODUCTS.map((product) => {
              const s = accentMap[product.accentColor] || accentMap.indigo;
              return (
                <div key={product.id} className={`rounded-2xl bg-white dark:bg-white/2 border ${s.border} shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group`}>
                  <div className="px-6 pt-6">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold uppercase ${s.badge}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {product.badge}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">{product.name}</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-0.5">{product.tagline}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{product.description}</p>
                    <div className="space-y-2">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${s.text}`} />
                          <span className="text-slate-700 dark:text-slate-300">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <a href={product.url} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl ${s.bg} ${s.text} text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all`}>
                      <span>Buka {product.name}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer onOpenConsultation={() => handleOpenConsultation("Footer Produk")} />
      <ConsultationModal isOpen={modalOpen} onClose={handleCloseConsultation} defaultProjectContext={projectContext} />
    </div>
  );
}