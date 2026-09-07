"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ALL_PORTFOLIO, PortfolioItem } from "@/data/landingData";
import { 
  Briefcase, 
  Search, 
  ArrowUpRight, 
  CheckCircle2, 
  Building2, 
  Landmark, 
  Layers, 
  X, 
  MessageCircle
} from "lucide-react";

export default function PortofolioPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectContext, setProjectContext] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = ["Semua", "Pemerintahan & BUMN", "Corporate", "Lainnya"];

  const filteredProjects = useMemo(() => {
    return ALL_PORTFOLIO.filter((item) => {
      const matchCat = selectedCategory === "Semua" || item.category === selectedCategory;
      const matchQuery = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenConsultation = (context: string) => {
    setProjectContext(context);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-obsidian text-slate-900 dark:text-[#f8fafc] flex flex-col selection:bg-indigo-600 selection:text-white transition-colors">
      <Navbar onOpenConsultation={() => handleOpenConsultation("Konsultasi Portofolio")} />

      <main className="flex-1 pt-32 pb-24">
        {/* Header Banner */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            <span>Portofolio &amp; Rekam Jejak Produksi</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Karya Kami,{" "}
            <span className="bg-linear-to-r from-indigo-600 via-cyan-600 to-blue-600 dark:from-indigo-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Solusi Digital Anda
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-3xl mt-4 leading-relaxed">
            Eksplorasi portofolio rekayasa software dan integrasi AI kami untuk Kementerian RI, BUMN, dan korporasi manufaktur multinasional. Setiap sistem dibangun dengan standar keamanan tinggi dan performa teruji.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 rounded-2xl bg-white dark:bg-obsidian-surface border border-slate-200 dark:border-white/10 shadow-sm">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-4 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative flex-1 md:max-w-xs">
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari proyek, klien, teknologi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-white/4 border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Portfolio Cards Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center rounded-2xl bg-white dark:bg-white/2 border border-slate-200 dark:border-white/5 space-y-3 shadow-xs">
              <p className="text-slate-500 dark:text-slate-400 text-sm">Tidak ada proyek yang sesuai dengan kriteria pencarian.</p>
              <button
                onClick={() => { setSelectedCategory("Semua"); setSearchQuery(""); }}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer font-medium"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="rounded-2xl bg-white dark:bg-obsidian-surface border border-slate-200 dark:border-white/8 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 p-6 flex flex-col justify-between text-left card-hover-effect cursor-pointer group relative overflow-hidden shadow-sm hover:shadow-md"
                >
                  {/* Subtle top glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />

                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        {item.category === "Pemerintahan & BUMN" && <Landmark className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />}
                        {item.category === "Corporate" && <Building2 className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />}
                        {item.category === "Lainnya" && <Layers className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />}
                        <span>{item.category}</span>
                      </span>

                      <span className="text-xs text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                      {item.client}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Highlights & Tech Stack */}
                  <div className="pt-5 mt-5 border-t border-slate-100 dark:border-white/6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500">{item.impactMetrics[0]?.label}:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{item.impactMetrics[0]?.value}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {item.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/4 border border-slate-200 dark:border-white/6 text-slate-700 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.techStack.length > 3 && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded text-slate-500">
                          +{item.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Project Detail Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl bg-white dark:bg-obsidian-surface border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto space-y-6 transition-colors">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400">
                  <span>{activeItem.category}</span>
                  <span>{"//"}</span>
                  <span>{activeItem.client}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {activeItem.title}
                </h2>
              </div>

              {/* Impact Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-obsidian border border-slate-200 dark:border-white/8">
                {activeItem.impactMetrics.map((m, i) => (
                  <div key={i} className="text-left">
                    <div className="text-xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-1">
                    Tantangan Proyek:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeItem.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-1">
                    Solusi Rekayasa Busyra Tech:
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeItem.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2">
                  Artefak &amp; Deliverables yang Dihasilkan:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeItem.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold mb-2">
                  Teknologi yang Digunakan:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeItem.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/4 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => {
                    const ctx = `Kebutuhan Serupa dengan: ${activeItem.title} (${activeItem.client})`;
                    setActiveItem(null);
                    handleOpenConsultation(ctx);
                  }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all cursor-pointer shadow-lg shadow-indigo-600/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konsultasikan Kebutuhan Serupa</span>
                </button>

                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-xs transition-colors cursor-pointer border border-slate-200 dark:border-transparent"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer onOpenConsultation={() => handleOpenConsultation("Footer Portofolio")} />

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProjectContext={projectContext}
      />
    </div>
  );
}
