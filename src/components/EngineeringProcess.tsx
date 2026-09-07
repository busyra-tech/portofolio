"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Play, Pause } from "lucide-react";

interface ProcessPhase {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  associatedPills: string[];
}

const STEP_PILLS = [
  "Perencanaan", // 0 (Phase 01)
  "Desain",      // 1 (Phase 01)
  "Pengembangan",// 2 (Phase 02)
  "Integrasi",   // 3 (Phase 02)
  "Pengujian",   // 4 (Phase 03)
  "Optimasi",    // 5 (Phase 03)
  "Go-Live",     // 6 (Phase 03)
  "Pemeliharaan",// 7 (Phase 04)
  "Peningkatan", // 8 (Phase 04)
  "HAPPY",       // 9 (Phase 04)
];

export const EngineeringProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  const [hoveredPill, setHoveredPill] = useState<string | null>(null);

  const phases: ProcessPhase[] = [
    {
      id: 0,
      stepNumber: "01",
      title: "Planning, Consultation and Design",
      description:
        "Konsultasi mendalam untuk memahami visi, audiens, dan kebutuhan Anda. Dari situ, tim UX/UI kami segera membuat wireframe dan prototype interaktif. Hasilnya: gambaran visual alur aplikasi yang sudah teruji secara user-friendly sebelum kode ditulis.",
      associatedPills: ["Perencanaan", "Desain"],
    },
    {
      id: 1,
      stepNumber: "02",
      title: "Development and AI Integration",
      description:
        "Di fase ini, Pembangunan front-end & back-end paralel, plus integrasi modul AI/ML kustom. rekomendasi otomatis, analitik prediktif, atau chatbot cerdas. Setiap fitur diuji di lingkungan staging untuk memastikan performa dan keandalannya.",
      associatedPills: ["Pengembangan", "Integrasi"],
    },
    {
      id: 2,
      stepNumber: "03",
      title: "Testing and Go Live",
      description:
        "Sebelum diluncurkan, aplikasi melewati rangkaian Quality Assurance: unit test, integration test, dan security audit. Setelah semua cek hijau, kami siapkan pipeline CI/CD untuk deployment otomatis, menjamin go-live mulus tanpa downtime.",
      associatedPills: ["Pengujian", "Optimasi", "Go-Live"],
    },
    {
      id: 3,
      stepNumber: "04",
      title: "Maintenance and Support",
      description:
        "Setelah launch, support 24/7 kami aktif menjaga server dan AI model Anda selalu up-to-date. Kami rutin melakukan monitoring, update fitur, dan tuning algoritma untuk meningkatkan performa, sehingga investasi Anda terus memberikan ROI optimal.",
      associatedPills: ["Pemeliharaan", "Peningkatan", "HAPPY"],
    },
  ];

  // Auto-running sequential flow animation
  useEffect(() => {
    if (!isAutoPlaying || hoveredPhase !== null || hoveredPill !== null) return;

    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % STEP_PILLS.length);
    }, 1800);

    return () => clearInterval(timer);
  }, [isAutoPlaying, hoveredPhase, hoveredPill]);

  // Helper to check if a pill is currently active
  const isPillActive = (pillName: string) => {
    if (hoveredPill !== null) {
      return hoveredPill === pillName;
    }
    if (hoveredPhase !== null) {
      const p = phases.find((phase) => phase.id === hoveredPhase);
      return p ? p.associatedPills.includes(pillName) : false;
    }
    return STEP_PILLS[activeStepIndex] === pillName;
  };

  // Helper to check if a phase card is active
  const isPhaseActive = (phaseId: number) => {
    if (hoveredPhase !== null) {
      return hoveredPhase === phaseId;
    }
    if (hoveredPill !== null) {
      const p = phases.find((phase) => phase.associatedPills.includes(hoveredPill));
      return p?.id === phaseId;
    }
    const currentStepName = STEP_PILLS[activeStepIndex];
    const p = phases.find((phase) => phase.associatedPills.includes(currentStepName));
    return p?.id === phaseId;
  };

  // Helper to get which phase a pill belongs to
  const getPillPhase = (pillName: string) => {
    return phases.find((p) => p.associatedPills.includes(pillName))?.id ?? null;
  };

  const renderPill = (name: string, isCelebration = false) => {
    const active = isPillActive(name);
    const phaseId = getPillPhase(name);
    const isCurrentRunning = STEP_PILLS[activeStepIndex] === name;

    return (
      <button
        type="button"
        onMouseEnter={() => {
          setHoveredPill(name);
          if (phaseId !== null) setHoveredPhase(phaseId);
        }}
        onMouseLeave={() => {
          setHoveredPill(null);
          setHoveredPhase(null);
        }}
        className={`w-32 sm:w-36 py-2.5 px-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-md cursor-pointer text-center relative ${
          isCelebration
            ? active
              ? "bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 text-white scale-108 ring-4 ring-pink-400/90 shadow-xl shadow-pink-500/40 z-10"
              : "bg-linear-to-r from-blue-600 via-indigo-600 to-pink-600 text-white border border-pink-300/40 shadow-pink-500/25 ring-2 ring-pink-400/30 opacity-90 hover:opacity-100"
            : active
              ? "bg-blue-600 dark:bg-blue-500 text-white scale-108 ring-4 ring-yellow-400 shadow-xl shadow-blue-600/50 z-10"
              : "bg-blue-600 hover:bg-blue-500 dark:bg-blue-600/90 dark:hover:bg-blue-500 text-white border border-blue-300/40 shadow-blue-600/20 opacity-80 hover:opacity-100"
        }`}
      >
        {isCurrentRunning && (
          <span className="absolute -inset-1 rounded-full border-2 border-yellow-400 animate-ping opacity-35 pointer-events-none" />
        )}
        <span>{name}</span>
      </button>
    );
  };

  const renderHorizontalConnector = (stepIndex: number, direction: "right" | "left") => {
    const isConnectorActive = activeStepIndex === stepIndex;

    return (
      <div className="flex-1 flex items-center justify-center relative px-2 sm:px-4">
        {/* SVG Dashed Line */}
        <svg className="w-full h-1 overflow-visible">
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="currentColor"
            strokeWidth={isConnectorActive ? 2.5 : 2}
            strokeDasharray="6 6"
            className={`transition-colors duration-300 ${
              isConnectorActive
                ? "text-yellow-400 dark:text-yellow-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                : "text-rose-500/80 dark:text-rose-400/80"
            } ${direction === "right" ? "animate-dash-right" : "animate-dash-left"}`}
          />
        </svg>
      </div>
    );
  };

  const renderVerticalConnector = (stepIndex: number, position: "left" | "right") => {
    const isConnectorActive = activeStepIndex === stepIndex;

    return (
      <div className="relative flex-1 min-h-9 sm:min-h-11">
        <div
          className={`absolute ${
            position === "right" ? "right-16 sm:right-18" : "left-16 sm:left-18"
          } -translate-x-1/2 top-0 bottom-0 flex flex-col items-center justify-center`}
        >
          {/* SVG Vertical Dashed Line */}
          <svg className="w-1 h-full overflow-visible">
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="currentColor"
              strokeWidth={isConnectorActive ? 2.5 : 2}
              strokeDasharray="6 6"
              className={`transition-colors duration-300 ${
                isConnectorActive
                  ? "text-yellow-400 dark:text-yellow-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                  : "text-rose-500/80 dark:text-rose-400/80"
              } animate-dash-down`}
            />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <section
      id="process"
      className="py-20 lg:py-24 relative bg-white dark:bg-[#080b11] border-t border-slate-200 dark:border-white/8 transition-colors overflow-hidden"
    >
      {/* Glow gradient backdrops */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-radial-gradient pointer-events-none -z-10 opacity-70" />
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200/80 dark:border-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Alur Rekayasa &amp; Kolaborasi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Mari Memulai{" "}
            <span className="text-blue-600 dark:text-blue-400">Project</span> atau{" "}
            <span className="text-blue-600 dark:text-blue-400">Produk</span> Anda Bersama Kami
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Dari ide hingga launch, semua melalui proses kolaboratif &amp; AI-driven
          </p>
        </div>

        {/* 2-Column Layout: Left (4 Process Descriptions) & Right (Circuit Diagram) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column: 4 Process Phases */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4 h-full">
            {phases.map((phase) => {
              const isActive = isPhaseActive(phase.id);

              return (
                <div
                  key={phase.id}
                  onMouseEnter={() => setHoveredPhase(phase.id)}
                  onMouseLeave={() => setHoveredPhase(null)}
                  className={`flex-1 flex flex-col justify-center p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                    isActive
                      ? "bg-blue-50/90 dark:bg-blue-950/30 border-blue-500/80 dark:border-blue-400/80 shadow-lg shadow-blue-500/15 scale-[1.015]"
                      : "bg-slate-50/80 dark:bg-[#0e131f]/70 border-slate-200/90 dark:border-white/8 hover:border-slate-300 dark:hover:border-white/20"
                  }`}
                >
                  {/* Top Meta Row: Phase Badge + Flow Breadcrumbs */}
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full transition-colors duration-300 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-xs"
                            : "bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                        PHASE {phase.stepNumber}
                      </span>
                      {isActive && (
                        <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400">
                          • Aktif
                        </span>
                      )}
                    </div>

                    {/* Step Flow Breadcrumb */}
                    <div className="flex items-center gap-1.5 text-[11px] font-mono shrink-0">
                      {phase.associatedPills.map((pill, idx) => {
                        const isPillCurrent = STEP_PILLS[activeStepIndex] === pill;
                        return (
                          <React.Fragment key={pill}>
                            {idx > 0 && (
                              <span className="text-slate-300 dark:text-slate-600 select-none">→</span>
                            )}
                            <span
                              className={`transition-colors duration-200 ${
                                isPillCurrent
                                  ? "text-blue-600 dark:text-blue-400 font-bold underline underline-offset-2"
                                  : "text-slate-500 dark:text-slate-400 font-medium"
                              }`}
                            >
                              {pill}
                            </span>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dedicated Title Row (Full width, never cramped or awkwardly broken) */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug tracking-tight">
                    {phase.title}
                  </h3>

                  {/* Phase Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {phase.description}
                  </p>

                </div>
              );
            })}
          </div>

          {/* Right Column: Serpentine Circuit Flow Diagram */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <div className="w-full max-w-md sm:max-w-lg mx-auto h-full p-6 sm:p-8 rounded-3xl bg-slate-50/70 dark:bg-[#0e131f]/60 border border-slate-200/90 dark:border-white/8 backdrop-blur-md shadow-sm dark:shadow-none flex flex-col justify-between">
              {/* Circuit Header with Live Pipeline Status & Controls */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-700 dark:text-slate-300 uppercase">
                    Live Process Pipeline
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-200/80 dark:border-blue-800/80">
                    Step {activeStepIndex + 1}/10: {STEP_PILLS[activeStepIndex]}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    title={isAutoPlaying ? "Jeda animasi alur" : "Jalankan animasi alur"}
                    className="p-1 rounded-md text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="relative flex-1 flex flex-col justify-between h-full">
                {/* ROW 1: [Perencanaan] -----> [Desain] */}
                <div className="relative flex items-center justify-between h-14">
                  {renderPill("Perencanaan")}
                  {renderHorizontalConnector(0, "right")}
                  {renderPill("Desain")}
                </div>

                {/* Vertical Connector: Desain (Row 1 Right) DOWN to Pengembangan (Row 2 Right) */}
                {renderVerticalConnector(1, "right")}

                {/* ROW 2: [Integrasi] <----- [Pengembangan] */}
                <div className="relative flex items-center justify-between h-14">
                  {renderPill("Integrasi")}
                  {renderHorizontalConnector(2, "left")}
                  {renderPill("Pengembangan")}
                </div>

                {/* Vertical Connector: Integrasi (Row 2 Left) DOWN to Pengujian (Row 3 Left) */}
                {renderVerticalConnector(3, "left")}

                {/* ROW 3: [Pengujian] -----> [Optimasi] */}
                <div className="relative flex items-center justify-between h-14">
                  {renderPill("Pengujian")}
                  {renderHorizontalConnector(4, "right")}
                  {renderPill("Optimasi")}
                </div>

                {/* Vertical Connector: Optimasi (Row 3 Right) DOWN to Go-Live (Row 4 Right) */}
                {renderVerticalConnector(5, "right")}

                {/* ROW 4: [Pemeliharaan] <----- [Go-Live] */}
                <div className="relative flex items-center justify-between h-14">
                  {renderPill("Pemeliharaan")}
                  {renderHorizontalConnector(6, "left")}
                  {renderPill("Go-Live")}
                </div>

                {/* Vertical Connector: Pemeliharaan (Row 4 Left) DOWN to Peningkatan (Row 5 Left) */}
                {renderVerticalConnector(7, "left")}

                {/* ROW 5: [Peningkatan] -----> [HAPPY 🎉] */}
                <div className="relative flex items-center justify-between h-14">
                  {renderPill("Peningkatan")}
                  {renderHorizontalConnector(8, "right")}
                  {renderPill("HAPPY", true)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
