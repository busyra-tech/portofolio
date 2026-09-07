"use client";

import React, { useState } from "react";
import {
  Layers,
  Cpu,
  Database,
  Smartphone,
  Cloud,
  Zap,
  Sparkles,
  Terminal,
  Server,
  Activity,
  Network,
  Code,
  Box,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface TechStackMatrixProps {
  onOpenConsultation?: () => void;
}

interface EnrichedTechItem {
  id: string;
  name: string;
  category: "AI & LLM" | "Backend & Data" | "Frontend & Mobile" | "Cloud & DevOps";
  badge: string;
  spec: string;
  highlight: string;
  description: string;
  accent: "indigo" | "cyan" | "emerald" | "violet";
  icon: React.ElementType;
}

const TECH_CATALOG: EnrichedTechItem[] = [
  // AI & LLM
  {
    id: "pytorch",
    name: "Python / PyTorch",
    category: "AI & LLM",
    badge: "Core ML",
    spec: "CUDA & TensorRT",
    highlight: "Model Fine-Tuning",
    description: "Pelatihan model, custom embedding, dan fine-tuning domain model khusus enterprise.",
    accent: "indigo",
    icon: Cpu,
  },
  {
    id: "vllm",
    name: "vLLM / Ollama",
    category: "AI & LLM",
    badge: "Inference Engine",
    spec: "Sub-50ms TTFT",
    highlight: "High-Throughput Serving",
    description: "Inference LLM berkecepatan tinggi dengan kuantisasi memori hemat (AWQ/FP8) untuk on-premise.",
    accent: "indigo",
    icon: Zap,
  },
  {
    id: "pgvector",
    name: "pgvector / Qdrant",
    category: "AI & LLM",
    badge: "Vector Database",
    spec: "HNSW <10ms Search",
    highlight: "Semantic Vector Search",
    description: "Penyimpanan vector embedding berkecepatan tinggi untuk arsitektur Private RAG berdaulat.",
    accent: "indigo",
    icon: Database,
  },
  {
    id: "frontier",
    name: "DeepSeek & OpenAI API",
    category: "AI & LLM",
    badge: "Frontier Models",
    spec: "Enterprise Guardrails",
    highlight: "Reasoning & Agentic AI",
    description: "Integrasi model penalaran cerdas tingkat tinggi dengan batasan privasi data & audit trail ketat.",
    accent: "indigo",
    icon: Sparkles,
  },

  // Backend & Data
  {
    id: "golang",
    name: "Go (Golang)",
    category: "Backend & Data",
    badge: "Microservices",
    spec: "P99 <3.5ms Latency",
    highlight: "High-Concurrency Engine",
    description: "Layanan microservices berkinerja tinggi, thread-safe, dan hemat alokasi heap memori.",
    accent: "cyan",
    icon: Terminal,
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "Backend & Data",
    badge: "Primary Relational",
    spec: "ACID & Massive Sharding",
    highlight: "Enterprise Data Store",
    description: "RDBMS ACID-compliant dengan partisi tabel berskala gigabyte dan keandalan tingkat perbankan.",
    accent: "cyan",
    icon: Server,
  },
  {
    id: "redis",
    name: "Redis Cluster",
    category: "Backend & Data",
    badge: "In-Memory Cache",
    spec: "Sub-ms Latency",
    highlight: "Distributed In-Memory",
    description: "Cache terdistribusi, distributed locking, rate limiter API, dan event bus ultra cepat.",
    accent: "cyan",
    icon: Activity,
  },
  {
    id: "kafka",
    name: "Apache Kafka",
    category: "Backend & Data",
    badge: "Event Streaming",
    spec: "1M+ Msg/s Pipeline",
    highlight: "Event-Driven System",
    description: "Message streaming terdistribusi untuk jutaan event tanpa risiko antrean bottleneck.",
    accent: "cyan",
    icon: Network,
  },

  // Frontend & Mobile
  {
    id: "nextjs",
    name: "Next.js 16 (App Router)",
    category: "Frontend & Mobile",
    badge: "Web Platform",
    spec: "RSC & Turbopack",
    highlight: "Streaming Web Apps",
    description: "Streaming UI, arsitektur server components, dan performa web optimal terindeks search engine.",
    accent: "emerald",
    icon: Code,
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "Frontend & Mobile",
    badge: "Cross-Platform",
    spec: "Impeller 60FPS",
    highlight: "Multi-Platform Native",
    description: "Satu codebase terpadu untuk iOS dan Android dengan rendering performa native mulus bebas jank.",
    accent: "emerald",
    icon: Smartphone,
  },
  {
    id: "typescript",
    name: "TypeScript & React 19",
    category: "Frontend & Mobile",
    badge: "Type Safety",
    spec: "100% Strict Typing",
    highlight: "Zero-Crash Architecture",
    description: "Arsitektur komponen modular bebas runtime error dengan static typing menyeluruh dan Actions API.",
    accent: "emerald",
    icon: Layers,
  },
  {
    id: "native-mobile",
    name: "Swift & Kotlin Native",
    category: "Frontend & Mobile",
    badge: "Native OS",
    spec: "Hardware & NDK Access",
    highlight: "Deep Hardware Layer",
    description: "Akses hardware low-level (Bluetooth LE, NFC, biometric, sensor, background daemon).",
    accent: "emerald",
    icon: Box,
  },

  // Cloud & DevOps
  {
    id: "kubernetes",
    name: "Kubernetes (K8s)",
    category: "Cloud & DevOps",
    badge: "Orchestration",
    spec: "Auto-Healing & HPA",
    highlight: "Zero-Downtime Releases",
    description: "Orkestrasi kontainer skala masif dengan zero-downtime rolling updates dan auto-recovery.",
    accent: "violet",
    icon: Cloud,
  },
  {
    id: "docker",
    name: "Docker",
    category: "Cloud & DevOps",
    badge: "Containerization",
    spec: "Multi-Stage OCI",
    highlight: "Reproducible Builds",
    description: "Standardisasi runtime aplikasi dari staging lokal hingga lingkungan multi-cloud produksi.",
    accent: "violet",
    icon: Box,
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "Cloud & DevOps",
    badge: "IaC",
    spec: "Declarative GitOps",
    highlight: "Audited Cloud Config",
    description: "Manajemen infrastruktur cloud berbasis kode yang terdokumentasi, audited, dan otomatis.",
    accent: "violet",
    icon: Layers,
  },
  {
    id: "observability",
    name: "Prometheus & Grafana",
    category: "Cloud & DevOps",
    badge: "Telemetry & APM",
    spec: "Real-time SLA Alerting",
    highlight: "Full Observability 24/7",
    description: "Monitoring kesehatan server 24/7, tracing latensi P99, dan deteksi dini anomali sistem.",
    accent: "violet",
    icon: Activity,
  },
];

const CATEGORIES = [
  { name: "Semua", icon: Layers, count: 16 },
  { name: "AI & LLM", icon: Cpu, count: 4 },
  { name: "Backend & Data", icon: Database, count: 4 },
  { name: "Frontend & Mobile", icon: Smartphone, count: 4 },
  { name: "Cloud & DevOps", icon: Cloud, count: 4 },
];

export const TechStackMatrix: React.FC<TechStackMatrixProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const filteredItems = selectedCategory === "Semua"
    ? TECH_CATALOG
    : TECH_CATALOG.filter((item) => item.category === selectedCategory);

  const getAccentStyles = (accent: "indigo" | "cyan" | "emerald" | "violet") => {
    switch (accent) {
      case "indigo":
        return {
          glow: "bg-indigo-500/10 dark:bg-indigo-500/15 group-hover:bg-indigo-500/25",
          border: "hover:border-indigo-500/60 dark:hover:border-indigo-400/50",
          shadow: "hover:shadow-indigo-500/10",
          iconBg: "bg-indigo-500/10 dark:bg-indigo-500/15 border-indigo-500/25 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500/25",
          badge: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800/60",
          titleHover: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
          tag: "text-indigo-600 dark:text-indigo-400",
        };
      case "cyan":
        return {
          glow: "bg-cyan-500/10 dark:bg-cyan-500/15 group-hover:bg-cyan-500/25",
          border: "hover:border-cyan-500/60 dark:hover:border-cyan-400/50",
          shadow: "hover:shadow-cyan-500/10",
          iconBg: "bg-cyan-500/10 dark:bg-cyan-500/15 border-cyan-500/25 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/25",
          badge: "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200/80 dark:border-cyan-800/60",
          titleHover: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
          tag: "text-cyan-600 dark:text-cyan-400",
        };
      case "emerald":
        return {
          glow: "bg-emerald-500/10 dark:bg-emerald-500/15 group-hover:bg-emerald-500/25",
          border: "hover:border-emerald-500/60 dark:hover:border-emerald-400/50",
          shadow: "hover:shadow-emerald-500/10",
          iconBg: "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/25 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/25",
          badge: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60",
          titleHover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
          tag: "text-emerald-600 dark:text-emerald-400",
        };
      case "violet":
      default:
        return {
          glow: "bg-violet-500/10 dark:bg-violet-500/15 group-hover:bg-violet-500/25",
          border: "hover:border-violet-500/60 dark:hover:border-violet-400/50",
          shadow: "hover:shadow-violet-500/10",
          iconBg: "bg-violet-500/10 dark:bg-violet-500/15 border-violet-500/25 text-violet-600 dark:text-violet-400 group-hover:bg-violet-500/25",
          badge: "bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border-violet-200/80 dark:border-violet-800/60",
          titleHover: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
          tag: "text-violet-600 dark:text-violet-400",
        };
    }
  };

  return (
    <section
      id="tech-stack"
      className="py-20 lg:py-24 relative bg-white dark:bg-[#080b11] border-t border-slate-200 dark:border-white/8 transition-colors"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient pointer-events-none -z-10 opacity-70" />
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-violet-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-200/80 dark:border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
            <Layers className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>Modern Engineering Stack &amp; Architecture Radar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Kualitas Sistem Berakar dari{" "}
            <span className="bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 dark:from-indigo-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Fondasi Teknologi
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Kami secara ketat hanya memilih toolchain yang terbukti berdaya tahan tinggi (*production-grade*), memiliki ekosistem matang, teruji pada volume jutaan transaksi, dan bebas dari ketergantungan *vendor lock-in*.
          </p>
        </div>

        {/* 4 Architectural Pillar Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-[#0e131f]/70 border border-slate-200/80 dark:border-white/6 flex items-center gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">AI &amp; Private RAG</div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">On-Premise &amp; vLLM</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-[#0e131f]/70 border border-slate-200/80 dark:border-white/6 flex items-center gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">Golang Core</div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">P99 &lt;3.5ms Latency</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-[#0e131f]/70 border border-slate-200/80 dark:border-white/6 flex items-center gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">Next.js &amp; Flutter</div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">60FPS Native Engine</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-[#0e131f]/70 border border-slate-200/80 dark:border-white/6 flex items-center gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
              <Cloud className="w-4 h-4" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-xs font-bold text-slate-900 dark:text-white truncate">Cloud &amp; DevOps</div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">K8s &amp; 99.98% SLA</div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills (Modern Segmented Navigation) */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 dark:bg-[#0e131f]/80 border border-slate-200 dark:border-white/8 shadow-inner backdrop-blur-md">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Redesigned Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredItems.map((tech) => {
            const styles = getAccentStyles(tech.accent);
            const Icon = tech.icon;

            return (
              <div
                key={tech.id}
                className={`group relative p-5 rounded-2xl bg-white dark:bg-[#0d121f]/80 border border-slate-200/90 dark:border-white/8 ${styles.border} shadow-xs hover:shadow-xl ${styles.shadow} transition-all duration-300 hover:-translate-y-1 overflow-hidden backdrop-blur-md flex flex-col justify-between text-left`}
              >
                {/* Ambient corner glow */}
                <div
                  className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-xl pointer-events-none transition-all duration-500 ${styles.glow}`}
                />

                <div className="relative z-10">
                  {/* Top Row: Icon + Badge + Spec Pill */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-all duration-300 ${styles.iconBg}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${styles.badge}`}
                      >
                        {tech.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                        {tech.spec}
                      </span>
                    </div>
                  </div>

                  {/* Tech Title */}
                  <h3
                    className={`text-base sm:text-[17px] font-bold text-slate-900 dark:text-white tracking-tight leading-snug transition-colors ${styles.titleHover}`}
                  >
                    {tech.name}
                  </h3>

                  {/* Architecture Highlight Tag */}
                  <div className="mt-1 mb-2.5">
                    <span className={`text-[11px] font-mono font-semibold ${styles.tag}`}>
                      {"//"} {tech.highlight}
                    </span>
                  </div>

                  {/* Technical Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {tech.description}
                  </p>
                </div>

                {/* Card Footer: Live Production Badge */}
                <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 dark:border-white/6 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Production Grade</span>
                  </div>
                  <span className="text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors flex items-center gap-0.5">
                    Verified <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Architectural Guarantee & RFP Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0e131f]/80 border border-slate-200/90 dark:border-white/8 shadow-sm backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Garansi Kedaulatan &amp; Zero Vendor Lock-in</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Butuh Arsitektur Khusus On-Premise atau Integrasi Toolchain Spesifik?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Tim Principal Software &amp; AI Architect Busyra Tech siap melakukan technical feasibility study untuk skema migrasi cloud, partisi database multi-tenant, hingga infrastruktur hardware AI internal Anda.
            </p>
          </div>

          {onOpenConsultation && (
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
            >
              <span>Diskusikan Arsitektur</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
