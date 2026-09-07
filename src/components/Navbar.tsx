"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  Cpu, 
  ChevronDown, 
  Sparkles, 
  Server, 
  Compass, 
  Smartphone, 
  Apple, 
  Globe,
  ArrowRight
} from "lucide-react";
import { ALL_SERVICES } from "@/data/landingData";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "ai-integrator":
        return <Cpu className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />;
      case "ai-konsultan":
        return <Sparkles className="w-4 h-4 text-violet-500 dark:text-violet-400" />;
      case "konsultan-it":
        return <Compass className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />;
      case "software-house-jakarta":
        return <Server className="w-4 h-4 text-blue-500 dark:text-blue-400" />;
      case "android-development":
        return <Smartphone className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />;
      case "ios-development":
        return <Apple className="w-4 h-4 text-rose-500 dark:text-rose-400" />;
      case "web-development":
        return <Globe className="w-4 h-4 text-amber-500 dark:text-amber-400" />;
      default:
        return <Cpu className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-[#080b11]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/8 py-3 shadow-xs dark:shadow-2xl"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-linear-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/35 transition-all">
              <div className="w-full h-full bg-white dark:bg-[#090d16] rounded-[10px] flex items-center justify-center transition-colors">
                <Cpu className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300" />
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-[15px] sm:text-base tracking-tight text-slate-900 dark:text-white font-mono flex items-center">
                  BUSYRA<span className="text-indigo-500 dark:text-indigo-400">.</span>TECH
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-md bg-indigo-500/10 dark:bg-white/4 border border-indigo-500/20 dark:border-white/10 text-indigo-600 dark:text-indigo-300 font-semibold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Enterprise
                </span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 hidden sm:block tracking-widest font-mono uppercase">
                AI &amp; Systems Integrator
              </p>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-white/4 border border-slate-200/90 dark:border-white/8 p-1.5 rounded-full backdrop-blur-xl shadow-xs dark:shadow-none transition-all">
            <Link
              href="/"
              className="text-[13px] font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white px-3.5 py-1.5 rounded-full hover:bg-slate-100/90 dark:hover:bg-white/8 transition-all"
            >
              Beranda
            </Link>

            {/* Layanan Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                  servicesDropdownOpen
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/90 dark:bg-white/8"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/90 dark:hover:bg-white/8"
                }`}
              >
                <span>Layanan</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-indigo-500" : "text-slate-400"}`} />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl bg-white dark:bg-[#0c101c] border border-slate-200 dark:border-white/10 shadow-2xl p-2.5 z-50 text-left space-y-1 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500 font-bold border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <span>7 Layanan Rekayasa Utama</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">Sovereign</span>
                  </div>

                  <div className="space-y-0.5 max-h-90 overflow-y-auto pt-1">
                    {ALL_SERVICES.map((srv) => (
                      <Link
                        key={srv.slug}
                        href={`/layanan/${srv.slug}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors group"
                      >
                        <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-600/20 group-hover:scale-105 transition-all shrink-0">
                          {getServiceIcon(srv.slug)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-semibold truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {srv.title}
                          </div>
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono truncate">
                            {srv.category}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-white/5">
                    <Link
                      href="/layanan"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-center justify-center gap-1.5 text-center text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 p-2 rounded-xl hover:bg-indigo-50/50 dark:hover:bg-white/5 transition-colors font-mono"
                    >
                      <span>Jelajahi Semua Layanan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Portofolio Link (NO ICON as requested) */}
            <Link
              href="/portofolio"
              className="text-[13px] font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white px-3.5 py-1.5 rounded-full hover:bg-slate-100/90 dark:hover:bg-white/8 transition-all"
            >
              Portofolio
            </Link>

            <Link
              href="/#process"
              className="text-[13px] font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white px-3.5 py-1.5 rounded-full hover:bg-slate-100/90 dark:hover:bg-white/8 transition-all"
            >
              Proses Rekayasa
            </Link>

            <Link
              href="/#tech-stack"
              className="text-[13px] font-medium text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white px-3.5 py-1.5 rounded-full hover:bg-slate-100/90 dark:hover:bg-white/8 transition-all"
            >
              Tech Stack
            </Link>
          </nav>

          {/* Right Action: Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle className="rounded-full" />
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle className="rounded-lg" />
            <button
              onClick={onOpenConsultation}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white shadow-sm"
            >
              RFQ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-white dark:bg-[#0e131f] border border-slate-200 dark:border-white/10 shadow-2xl space-y-3 text-left animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium"
              >
                Beranda
              </Link>
              <Link
                href="/layanan"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>Layanan Kami (7 Pilar)</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">Semua</span>
              </Link>
              <Link
                href="/portofolio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                Portofolio (11+ Proyek)
              </Link>
              <Link
                href="/#process"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium"
              >
                Proses Rekayasa
              </Link>
              <Link
                href="/#tech-stack"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium"
              >
                Tech Stack
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-white/5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-3 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30 active:scale-95 transition-all cursor-pointer"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
