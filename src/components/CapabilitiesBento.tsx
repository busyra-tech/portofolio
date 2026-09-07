"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface CapabilitiesBentoProps {
	onSelectService?: (serviceTitle: string) => void;
}

interface ServiceCardData {
	id: string;
	slug: string;
	categoryTag: string;
	title: string;
	accentColor: "indigo" | "blue" | "emerald" | "cyan";
	description: React.ReactNode;
	tags: string[];
}

export const CapabilitiesBento: React.FC<CapabilitiesBentoProps> = () => {
	const services: ServiceCardData[] = [
		{
			id: "ai-integrator",
			slug: "ai-integrator",
			categoryTag: "Enterprise AI & Autonomous",
			title: "AI Integrator",
			accentColor: "indigo",
			description: (
				<>
					<strong className="text-slate-900 dark:text-white font-semibold">
						Insight AI
					</strong>{" "}
					adalah solusi{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						AI Integrator
					</strong>{" "}
					yang membantu bisnis mengintegrasikan{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						kecerdasan buatan (Artificial Intelligence)
					</strong>{" "}
					ke dalam proses operasional secara efisien. Melalui penerapan
					teknologi{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						deep learning, automasi, dan dasbor analitik interaktif
					</strong>
					, kami membantu Anda mengubah data menjadi{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						wawasan real-time
					</strong>{" "}
					untuk mendukung pengambilan keputusan yang lebih cepat, akurat, dan
					berbasis data.
				</>
			),
			tags: ["Deep Learning", "Automasi", "Dasbor Real-Time", "Data Pipeline"],
		},
		{
			id: "ai-konsultan",
			slug: "ai-konsultan",
			categoryTag: "Strategic AI Advisory",
			title: "AI Konsultan",
			accentColor: "blue",
			description: (
				<>
					Wujudkan ide-ide inovatif Anda bersama{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						AI Konsultan profesional
					</strong>
					. Kami membantu mengubah gagasan bisnis menjadi solusi berbasis{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						kecerdasan buatan (Artificial Intelligence)
					</strong>{" "}
					yang dapat diimplementasikan secara nyata untuk{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						meningkatkan efisiensi, produktivitas, dan daya saing
					</strong>{" "}
					bisnis Anda.
				</>
			),
			tags: [
				"AI Feasibility",
				"Tech Roadmap",
				"Arsitektur Solusi",
				"ROI Assessment",
			],
		},
		{
			id: "mobile-development",
			slug: "android-development",
			categoryTag: "iOS & Android Engineering",
			title: "Mobile App Development",
			accentColor: "emerald",
			description: (
				<>
					Kami menawarkan jasa pembuatan{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						aplikasi mobile profesional untuk Android dan iOS
					</strong>
					, dirancang sesuai kebutuhan dan strategi bisnis Anda. Tim{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						konsultan mobile development
					</strong>{" "}
					kami siap membantu merancang, mengembangkan, dan mengoptimalkan
					aplikasi agar{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						meningkatkan efisiensi operasional serta pengalaman pengguna
					</strong>
					.
				</>
			),
			tags: [
				"Android & iOS",
				"React Native & Flutter",
				"Security",
				"UX Optimal",
			],
		},
		{
			id: "web-development",
			slug: "web-development",
			categoryTag: "Custom Web & Scalable SaaS",
			title: "Web Development",
			accentColor: "cyan",
			description: (
				<>
					Kami menyediakan jasa pembuatan{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						website profesional
					</strong>{" "}
					yang disesuaikan dengan kebutuhan bisnis Anda, mulai dari{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						website company profile, e-commerce, hingga custom web development
					</strong>
					. Tim{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						konsultan web development
					</strong>{" "}
					kami siap membantu membangun situs yang{" "}
					<strong className="text-slate-900 dark:text-white font-semibold">
						modern, responsif, dan dioptimalkan untuk SEO
					</strong>{" "}
					agar bisnis Anda tampil lebih kredibel dan mudah ditemukan di mesin
					pencari.
				</>
			),
			tags: [
				"Next.js & React",
				"SEO High-Ranking",
				"Enterprise Web",
				"E-Commerce",
			],
		},
	];

	// Render bespoke crowned robot mascot SVG for each service
	const renderMascot = (type: string) => {
		return (
			<div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-linear-to-br from-blue-50 via-indigo-50/50 to-blue-100/40 dark:from-blue-950/40 dark:via-indigo-950/20 dark:to-slate-900 border-2 border-blue-200/80 dark:border-blue-500/30 flex items-center justify-center shadow-md dark:shadow-none group-hover:scale-105 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden">
				{/* Ambient glow behind mascot */}
				<div className="absolute inset-0 bg-radial-gradient opacity-70 group-hover:opacity-100 transition-opacity" />

				<svg
					viewBox="0 0 100 100"
					className="w-20 h-20 sm:w-24 sm:h-24 relative z-10 transition-transform duration-300 group-hover:scale-105"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						{/* Crown Gradient */}
						<linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#FBBF24" />
							<stop offset="50%" stopColor="#F59E0B" />
							<stop offset="100%" stopColor="#D97706" />
						</linearGradient>

						{/* Robot Body Gradient */}
						<linearGradient id="robotBody" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#FFFFFF" />
							<stop offset="100%" stopColor="#E2E8F0" />
						</linearGradient>

						{/* Cyan Eye Glow */}
						<linearGradient id="eyeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#38BDF8" />
							<stop offset="100%" stopColor="#0284C7" />
						</linearGradient>

						{/* Blue Suit Gradient */}
						<linearGradient id="blueSuit" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#3B82F6" />
							<stop offset="100%" stopColor="#1D4ED8" />
						</linearGradient>
					</defs>

					{/* Golden Crown */}
					<path
						d="M37 26L41 33L50 24L59 33L63 26L61 36H39L37 26Z"
						fill="url(#crownGrad)"
						stroke="#B45309"
						strokeWidth="1"
						strokeLinejoin="round"
					/>
					<circle cx="50" cy="23" r="1.5" fill="#EF4444" />
					<circle cx="37" cy="25" r="1.2" fill="#38BDF8" />
					<circle cx="63" cy="25" r="1.2" fill="#38BDF8" />

					{/* Robot Ears / Antennae */}
					<rect
						x="29"
						y="44"
						width="4"
						height="8"
						rx="2"
						fill="#94A3B8"
						stroke="#64748B"
						strokeWidth="0.8"
					/>
					<rect
						x="67"
						y="44"
						width="4"
						height="8"
						rx="2"
						fill="#94A3B8"
						stroke="#64748B"
						strokeWidth="0.8"
					/>
					<circle cx="31" cy="48" r="1" fill="#38BDF8" />
					<circle cx="69" cy="48" r="1" fill="#38BDF8" />

					{/* Robot Head */}
					<rect
						x="32"
						y="35"
						width="36"
						height="26"
						rx="9"
						fill="url(#robotBody)"
						stroke="#64748B"
						strokeWidth="1.2"
					/>

					{/* Face Visor Screen */}
					<rect
						x="36"
						y="39"
						width="28"
						height="17"
						rx="6"
						fill="#0F172A"
						stroke="#334155"
						strokeWidth="0.8"
					/>

					{/* Glowing Eyes */}
					<ellipse cx="44" cy="47" rx="3.5" ry="4" fill="url(#eyeGlow)" />
					<ellipse cx="56" cy="47" rx="3.5" ry="4" fill="url(#eyeGlow)" />
					<circle cx="45" cy="45.5" r="1.2" fill="#FFFFFF" />
					<circle cx="57" cy="45.5" r="1.2" fill="#FFFFFF" />

					{/* Cheerful Mouth line */}
					<path
						d="M47 52 Q50 54 53 52"
						stroke="#38BDF8"
						strokeWidth="1"
						strokeLinecap="round"
					/>

					{/* Robot Body / Torso */}
					<path
						d="M36 63 C36 60, 64 60, 64 63 L67 82 C67 85, 33 85, 33 82 Z"
						fill="url(#blueSuit)"
						stroke="#1E40AF"
						strokeWidth="1"
					/>
					<rect
						x="42"
						y="66"
						width="16"
						height="11"
						rx="3"
						fill="#FFFFFF"
						stroke="#CBD5E1"
						strokeWidth="0.8"
					/>

					{/* Specific Props for each Mascot */}
					{type === "ai-integrator" && (
						/* AI Integrator: Floating Neural Network Sphere */
						<g className="animate-pulse">
							<circle
								cx="76"
								cy="62"
								r="9"
								fill="#0284C7"
								fillOpacity="0.2"
								stroke="#38BDF8"
								strokeWidth="1"
							/>
							<circle cx="76" cy="62" r="5" fill="#38BDF8" />
							<circle cx="72" cy="58" r="1.8" fill="#FBBF24" />
							<circle cx="80" cy="59" r="1.8" fill="#A855F7" />
							<circle cx="76" cy="67" r="1.8" fill="#34D399" />
							<path
								d="M72 58 L76 62 L80 59 M76 62 L76 67"
								stroke="#FFFFFF"
								strokeWidth="0.8"
							/>
							{/* Pointing arm */}
							<path
								d="M64 68 Q70 65 72 63"
								stroke="#CBD5E1"
								strokeWidth="2.5"
								strokeLinecap="round"
							/>
						</g>
					)}

					{type === "ai-konsultan" && (
						/* AI Konsultan: Holding Strategy Tablet & Analytics */
						<g>
							<rect
								x="60"
								y="58"
								width="15"
								height="19"
								rx="2"
								fill="#0F172A"
								stroke="#64748B"
								strokeWidth="1"
								transform="rotate(10 60 58)"
							/>
							<rect
								x="63"
								y="62"
								width="9"
								height="1.5"
								rx="0.5"
								fill="#38BDF8"
								transform="rotate(10 60 58)"
							/>
							<rect
								x="63"
								y="66"
								width="7"
								height="1.5"
								rx="0.5"
								fill="#34D399"
								transform="rotate(10 60 58)"
							/>
							<rect
								x="63"
								y="70"
								width="8"
								height="1.5"
								rx="0.5"
								fill="#FBBF24"
								transform="rotate(10 60 58)"
							/>
							{/* Hand holding */}
							<circle
								cx="61"
								cy="67"
								r="2.5"
								fill="#E2E8F0"
								stroke="#64748B"
								strokeWidth="0.8"
							/>
						</g>
					)}

					{type === "mobile-development" && (
						/* Mobile App: Holding Smartphone Device */
						<g>
							<rect
								x="65"
								y="54"
								width="12"
								height="22"
								rx="3"
								fill="#0F172A"
								stroke="#38BDF8"
								strokeWidth="1.2"
								transform="rotate(-5 65 54)"
							/>
							<circle cx="70.5" cy="57" r="0.8" fill="#94A3B8" />
							<rect x="67" y="59" width="8" height="12" rx="1" fill="#1E293B" />
							{/* App UI dots on screen */}
							<circle cx="69" cy="62" r="1" fill="#38BDF8" />
							<circle cx="73" cy="62" r="1" fill="#34D399" />
							<circle cx="69" cy="66" r="1" fill="#FBBF24" />
							<circle cx="73" cy="66" r="1" fill="#F43F5E" />
							{/* Hand holding */}
							<circle
								cx="66"
								cy="65"
								r="2.5"
								fill="#E2E8F0"
								stroke="#64748B"
								strokeWidth="0.8"
							/>
						</g>
					)}

					{type === "web-development" && (
						/* Web Dev: Operating Modern Laptop */
						<g>
							{/* Laptop Screen */}
							<rect
								x="57"
								y="63"
								width="20"
								height="13"
								rx="1.5"
								fill="#0F172A"
								stroke="#38BDF8"
								strokeWidth="1"
							/>
							<rect
								x="59"
								y="65"
								width="16"
								height="9"
								rx="0.8"
								fill="#1E293B"
							/>
							{/* Code brackets < / > on screen */}
							<path
								d="M63 68 L61 70 L63 72"
								stroke="#38BDF8"
								strokeWidth="0.8"
								strokeLinecap="round"
							/>
							<path
								d="M67 68 L69 70 L67 72"
								stroke="#34D399"
								strokeWidth="0.8"
								strokeLinecap="round"
							/>
							{/* Laptop Base / Keyboard */}
							<path
								d="M54 76 L80 76 L78 78 L56 78 Z"
								fill="#94A3B8"
								stroke="#64748B"
								strokeWidth="0.8"
							/>
						</g>
					)}
				</svg>
			</div>
		);
	};

	return (
		<section
			id="capabilities"
			className="py-20 lg:py-24 relative bg-slate-50/60 dark:bg-[#080b11] border-t border-slate-200 dark:border-white/8 transition-colors"
		>
			{/* Subtle ambient light backdrops */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-radial-gradient pointer-events-none -z-10 opacity-60" />
			<div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />
			<div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none -z-10" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center max-w-5xl mx-auto mb-16 space-y-4">
					<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200/80 dark:border-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
						<Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
						<span>Layanan Terbaik &amp; Solusi Terintegrasi</span>
					</div>

					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-slate-900 dark:text-white tracking-tight leading-tight">
						<span className="text-blue-600 dark:text-blue-400">Konsultasi</span>{" "}
						Gratis,{" "}
						<span className="text-blue-600 dark:text-blue-400">Eksklusif</span>{" "}
						Design dan{" "}
						<span className="text-blue-600 dark:text-blue-400">Solusi</span>
						<br className="hidden md:inline" />{" "}
						<span>Modern adalah Layanan Terbaik Kami</span>
					</h2>

					<p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto flex items-center justify-center gap-2 flex-wrap font-normal">
						<span>Memberikan solusi sesuai dengan kebutuhan bisnis anda.</span>
						<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
							#makeITeasy
						</span>
					</p>
				</div>

				{/* 4 Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
					{services.map((service) => (
						<div
							key={service.id}
							className="group rounded-2xl bg-white dark:bg-[#0e131f] border border-slate-200/90 dark:border-white/8 hover:border-blue-500/50 dark:hover:border-blue-400/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/10 hover:-translate-y-1.5 relative overflow-hidden h-full"
						>
							{/* Top Accent Line on Hover */}
							<div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

							<div className="flex-1 flex flex-col">
								{/* Crowned Robot Mascot Avatar */}
								<div className="mb-5">{renderMascot(service.id)}</div>

								{/* Service Category Tag */}
								<div className="text-center mb-2">
									<span className="inline-block text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20">
										{service.categoryTag}
									</span>
								</div>

								{/* Service Title */}
								<h3 className="text-xl font-bold text-slate-900 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-4">
									{service.title}
								</h3>

								{/* Description Text */}
								<div className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-left mb-6 flex-1">
									{service.description}
								</div>

								{/* Micro-Tags Chip Row */}
								<div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-slate-100 dark:border-white/5">
									{service.tags.map((tag, idx) => (
										<span
											key={idx}
											className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/4 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-white/5"
										>
											{tag}
										</span>
									))}
								</div>
							</div>

							{/* Card Actions */}
							{/* <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2.5">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-[0.98]"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Konsultasi Layanan Ini</span>
                </button>

                <Link
                  href={`/layanan/${service.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-white/3 dark:hover:bg-white/6 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white text-xs font-medium transition-colors border border-slate-200/80 dark:border-white/5"
                >
                  <span>Lihat Detail Layanan</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div> */}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
