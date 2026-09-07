"use client";

import React from "react";
import {
	Zap,
	Lock,
	Code2,
	Shield,
} from "lucide-react";
import { CompanyOverviewCard } from "./CompanyOverviewCard";

interface HeroProps {
	onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
	return (
		<section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
			{/* Glow gradient backdrops */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-137.5 bg-radial-gradient pointer-events-none -z-10" />
			<div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none -z-10" />
			<div className="absolute top-40 left-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none -z-10" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					{/* Left Column: Value Proposition & Copy */}
					<div className="lg:col-span-7 space-y-6 text-left">
						{/* Main Headline */}
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
							Jasa Pembuatan Aplikasi &amp;{" "}
							<span className="bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 dark:from-indigo-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
								Developer AI Indonesia
							</span>
						</h1>

						{/* Subtitle */}
						<p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
							&ldquo;
							<strong className="text-slate-900 dark:text-white font-semibold">
								Busyra Tech
							</strong>{" "}
							menyediakan layanan{" "}
							<strong className="text-slate-900 dark:text-white font-semibold">
								AI Konsultan
							</strong>{" "}
							dan{" "}
							<strong className="text-slate-900 dark:text-white font-semibold">
								AI Integrator
							</strong>{" "}
							untuk membantu bisnis Anda bertransformasi secara digital. Kami
							juga mengembangkan{" "}
							<strong className="text-slate-900 dark:text-white font-semibold">
								aplikasi Android, iOS, dan Website
							</strong>{" "}
							berbasis{" "}
							<strong className="text-slate-900 dark:text-white font-semibold">
								kecerdasan buatan
							</strong>{" "}
							yang efisien, modern, dan siap meningkatkan produktivitas bisnis
							Anda.&rdquo;
						</p>

						{/* Visual Micro-Cards Grid: High-Tech Enterprise Redesign */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
							{/* Card 1: Kedaulatan & On-Premise */}
							<div className="group relative p-3.5 sm:p-4 rounded-2xl bg-white/90 dark:bg-[#0e131f]/75 border border-slate-200/90 dark:border-white/8 hover:border-emerald-500/50 dark:hover:border-emerald-400/40 shadow-xs hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden backdrop-blur-md">
								<div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-xl pointer-events-none group-hover:bg-emerald-500/25 transition-all duration-500" />
								<div className="relative z-10 flex items-start gap-3.5">
									<div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-xs">
										<Shield className="w-5 h-5" />
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center justify-between gap-1.5 mb-1">
											<h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white tracking-tight truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
												Kedaulatan &amp; On-Premise
											</h4>
											<span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60 shrink-0">
												Private
											</span>
										</div>
										<p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono leading-tight">
											Private RAG &amp; Zero Data Leak
										</p>
									</div>
								</div>
							</div>

							{/* Card 2: Ultra-Low Latency & SLA */}
							<div className="group relative p-3.5 sm:p-4 rounded-2xl bg-white/90 dark:bg-[#0e131f]/75 border border-slate-200/90 dark:border-white/8 hover:border-indigo-500/50 dark:hover:border-indigo-400/40 shadow-xs hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden backdrop-blur-md">
								<div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-xl pointer-events-none group-hover:bg-indigo-500/25 transition-all duration-500" />
								<div className="relative z-10 flex items-start gap-3.5">
									<div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/25 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-indigo-500/20 transition-all duration-300 shadow-xs">
										<Zap className="w-5 h-5" />
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center justify-between gap-1.5 mb-1">
											<h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white tracking-tight truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
												Ultra-Low Latency &amp; SLA
											</h4>
											<span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/60 shrink-0">
												99.98%
											</span>
										</div>
										<p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono leading-tight">
											P99 &lt;3.5ms &amp; High Concurrency
										</p>
									</div>
								</div>
							</div>

							{/* Card 3: Security & Strict NDA */}
							<div className="group relative p-3.5 sm:p-4 rounded-2xl bg-white/90 dark:bg-[#0e131f]/75 border border-slate-200/90 dark:border-white/8 hover:border-cyan-500/50 dark:hover:border-cyan-400/40 shadow-xs hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden backdrop-blur-md">
								<div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-500" />
								<div className="relative z-10 flex items-start gap-3.5">
									<div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all duration-300 shadow-xs">
										<Lock className="w-5 h-5" />
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center justify-between gap-1.5 mb-1">
											<h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white tracking-tight truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
												Security &amp; Strict NDA
											</h4>
											<span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200/80 dark:border-cyan-800/60 shrink-0">
												SOC2 / ISO
											</span>
										</div>
										<p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono leading-tight">
											ISO-Ready &amp; Legal Protected
										</p>
									</div>
								</div>
							</div>

							{/* Card 4: Zero-Slop Code Quality */}
							<div className="group relative p-3.5 sm:p-4 rounded-2xl bg-white/90 dark:bg-[#0e131f]/75 border border-slate-200/90 dark:border-white/8 hover:border-violet-500/50 dark:hover:border-violet-400/40 shadow-xs hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden backdrop-blur-md">
								<div className="absolute -top-10 -right-10 w-24 h-24 bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-xl pointer-events-none group-hover:bg-violet-500/25 transition-all duration-500" />
								<div className="relative z-10 flex items-start gap-3.5">
									<div className="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-violet-500/15 border border-violet-500/25 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-violet-500/20 transition-all duration-300 shadow-xs">
										<Code2 className="w-5 h-5" />
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center justify-between gap-1.5 mb-1">
											<h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white tracking-tight truncate group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
												Zero-Slop Code Quality
											</h4>
											<span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200/80 dark:border-violet-800/60 shrink-0">
												100% IP
											</span>
										</div>
										<p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono leading-tight">
											Full IP Ownership &amp; Garansi
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Interactive Company & Platform Overview Card */}
					<div className="lg:col-span-5 w-full">
						<CompanyOverviewCard onOpenConsultation={onOpenConsultation} />
					</div>
				</div>
			</div>
		</section>
	);
};
