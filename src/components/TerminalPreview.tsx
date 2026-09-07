"use client";

import React, { useState } from "react";
import { Terminal, Activity, Layers, Play, CheckCircle2, RefreshCw, Zap, ShieldCheck } from "lucide-react";

export const TerminalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ai-pipeline" | "microservice" | "architecture">("ai-pipeline");
  const [isSimulating, setIsSimulating] = useState(false);
  const [latency, setLatency] = useState(14.2);
  const [tokensPerSec, setTokensPerSec] = useState(118.4);
  const [stepIndex, setStepIndex] = useState(4);

  const runSimulation = () => {
    setIsSimulating(true);
    setStepIndex(1);
    setTimeout(() => setStepIndex(2), 400);
    setTimeout(() => setStepIndex(3), 850);
    setTimeout(() => {
      setStepIndex(4);
      setLatency(Number((12 + Math.random() * 4).toFixed(1)));
      setTokensPerSec(Number((110 + Math.random() * 20).toFixed(1)));
      setIsSimulating(false);
    }, 1300);
  };

  return (
    <div className="relative rounded-2xl bg-[#0d121c] border border-white/10 shadow-2xl shadow-indigo-950/40 overflow-hidden text-left font-mono">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#090d15] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs text-slate-400 font-medium ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            busyra-agentd // v2.6.4-prod
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg border border-white/5 text-xs">
          <button
            onClick={() => setActiveTab("ai-pipeline")}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === "ai-pipeline"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Zap className="w-3 h-3" />
            <span className="hidden sm:inline">AI Pipeline</span>
          </button>
          <button
            onClick={() => setActiveTab("microservice")}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === "microservice"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Activity className="w-3 h-3" />
            <span className="hidden sm:inline">Go Microservice</span>
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === "architecture"
                ? "bg-indigo-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-3 h-3" />
            <span className="hidden sm:inline">Topology</span>
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-6 text-xs text-slate-300 min-h-85 flex flex-col justify-between">
        {activeTab === "ai-pipeline" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-white/5 pb-2">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                EXECUTION_TRACE_ID: #trace-88ef4a9c
              </span>
              <span>REGION: id-jkt-1 (Mega Kuningan)</span>
            </div>

            {/* Pipeline Step Sequence */}
            <div className="space-y-2.5">
              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  stepIndex >= 1
                    ? "bg-indigo-950/30 border-indigo-500/30 text-indigo-200"
                    : "bg-white/2 border-white/5 opacity-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    [01] Semantic Intent Classifier
                  </span>
                  <span className="text-[10px] text-slate-400">1.8ms</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 pl-5">
                  Route: &quot;enterprise_procurement_po_analysis&quot; (confidence: 0.994)
                </p>
              </div>

              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  stepIndex >= 2
                    ? "bg-cyan-950/30 border-cyan-500/30 text-cyan-200"
                    : "bg-white/2 border-white/5 opacity-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    [02] Private pgvector RAG Retrieval
                  </span>
                  <span className="text-[10px] text-slate-400">3.4ms</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 pl-5">
                  Top-5 cosine distance retrieved from 1.2M chunks (HNSW index hit)
                </p>
              </div>

              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  stepIndex >= 3
                    ? "bg-violet-950/30 border-violet-500/30 text-violet-200"
                    : "bg-white/2 border-white/5 opacity-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                    [03] DeepSeek-V3 / Fine-tuned Domain Inference
                  </span>
                  <span className="text-[10px] text-slate-400">8.2ms</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 pl-5">
                  vLLM tensor-parallel=2, streaming tokens at {tokensPerSec} tok/s
                </p>
              </div>

              <div
                className={`p-2.5 rounded-lg border transition-all ${
                  stepIndex >= 4
                    ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-200"
                    : "bg-white/2 border-white/5 opacity-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    [04] Guardrail Verification & Zero-Hallucination Audit
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold">PASSED</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 pl-5">
                  Result matched procurement compliance rules. Ready for WhatsApp/API webhook.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "microservice" && (
          <div className="space-y-3 font-mono">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-white/5 pb-2">
              <span>SERVICE: core-transaction-engine.go</span>
              <span className="text-emerald-400">STATUS: HEALTHY (PODS: 12/12)</span>
            </div>

            <div className="bg-black/40 rounded-xl p-3 border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-400">gRPC Inbound Throughput:</span>
                <span className="text-white font-bold">28,420 req/sec</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-400">P99 Server Latency:</span>
                <span className="text-cyan-400 font-bold">2.8ms</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-400">Goroutines Active:</span>
                <span className="text-slate-300">4,192 (Thread pool saturated: 18%)</span>
              </div>
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-400">PostgreSQL Connection Pool:</span>
                <span className="text-emerald-400">128 active / 0 waiting</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 bg-white/2 p-2.5 rounded-lg border border-white/5 space-y-1">
              <div className="text-indigo-400">✓ Kafka partition rebalanced without packet drop</div>
              <div className="text-emerald-400">✓ Zero memory leak detected (Go GC overhead: 0.12%)</div>
              <div className="text-slate-500">→ Telemetry exported to Prometheus / Grafana agents</div>
            </div>
          </div>
        )}

        {activeTab === "architecture" && (
          <div className="space-y-4">
            <div className="text-[11px] text-slate-400">
              Arsitektur terdistribusi Busyra Tech untuk skalabilitas enterprise:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-[11px]">
              <div className="p-3 rounded-xl bg-white/3 border border-white/10 space-y-1">
                <div className="text-slate-400 uppercase text-[10px]">Edge Layer</div>
                <div className="text-white font-semibold">Cloudflare + WAF</div>
                <div className="text-slate-500 text-[10px]">DDoS Mitigation & TLS 1.3</div>
              </div>
              <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-1">
                <div className="text-indigo-400 uppercase text-[10px]">Application Core</div>
                <div className="text-white font-semibold">Go & Next.js K8s Cluster</div>
                <div className="text-indigo-300/80 text-[10px]">Auto-scaled Pods</div>
              </div>
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-1">
                <div className="text-cyan-400 uppercase text-[10px]">Data & AI Storage</div>
                <div className="text-white font-semibold">PostgreSQL + vLLM</div>
                <div className="text-cyan-300/80 text-[10px]">Private Model Weights</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Memenuhi kepatuhan regulasi data residency nasional (PP No. 71/2019).</span>
            </div>
          </div>
        )}

        {/* Footer Controls & Live Stats */}
        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px]">
          <div className="flex items-center gap-4 text-slate-400">
            <span>
              Roundtrip: <strong className="text-white">{latency}ms</strong>
            </span>
            <span>
              Throughput: <strong className="text-white">{tokensPerSec} tok/s</strong>
            </span>
          </div>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white font-medium active:scale-95 transition-all cursor-pointer"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3 h-3 animate-spin text-cyan-400" />
                <span>Simulating...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                <span>Run Real-time Simulation</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
