"use client";

import React, { useState } from "react";
import { X, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_INFO, ALL_SERVICES } from "@/data/landingData";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectContext?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultProjectContext = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    emailOrWa: "",
    serviceType: ALL_SERVICES[0]?.title || "AI Integrator",
    timeline: "1 - 3 Bulan",
    description: defaultProjectContext ? `Terkait kebutuhan: ${defaultProjectContext}` : "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [prevContext, setPrevContext] = useState(defaultProjectContext);

  // Sync description when context changes without cascading effect
  if (prevContext !== defaultProjectContext) {
    setPrevContext(defaultProjectContext);
    setFormData((prev) => ({
      ...prev,
      description: defaultProjectContext ? `Terkait kebutuhan: ${defaultProjectContext}` : "",
    }));
  }

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare structured WhatsApp text
    const message = 
`Halo Busyra Tech, saya ingin konsultasi terkait proyek software & solusi AI.

*Nama:* ${formData.name || "-"}
*Instansi / Perusahaan:* ${formData.company || "-"}
*Kontak:* ${formData.emailOrWa || "-"}
*Kategori Layanan:* ${formData.serviceType}
*Estimasi Timeline:* ${formData.timeline}

*Deskripsi Kebutuhan:*
${formData.description || "Mohon informasi lebih lanjut mengenai penjadwalan sesi discovery arsitektur."}`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
      onClose();
      setIsSubmitted(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#0e131f] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto transition-colors">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono">
            <Sparkles className="w-3 h-3" />
            <span>Direct Architecture Consultation</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Mulai Diskusi Teknis dengan Engineering Lead
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Isi formulir singkat di bawah ini. Tim arsitektur kami akan langsung merespons dan menyiapkan ringkasan diskusi via WhatsApp resmi dalam 15 menit.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Contoh: Budi Santoso"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/4 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                Perusahaan / Instansi
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Contoh: PT Industri Maju / Kementerian"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/4 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                Nomor WhatsApp / Email Aktif *
              </label>
              <input
                type="text"
                required
                value={formData.emailOrWa}
                onChange={(e) => setFormData({ ...formData, emailOrWa: e.target.value })}
                placeholder="0812-xxxx-xxxx atau email"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/4 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                Kategori Layanan
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0a0e17] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
              >
                {ALL_SERVICES.map((srv) => (
                  <option
                    key={srv.slug}
                    value={srv.title}
                    className="bg-white dark:bg-[#0e131f] text-slate-900 dark:text-white"
                  >
                    {srv.title} ({srv.category})
                  </option>
                ))}
                <option
                  value="Konsultasi Kustom & Lainnya"
                  className="bg-white dark:bg-[#0e131f] text-slate-900 dark:text-white"
                >
                  Konsultasi Kustom &amp; Lainnya
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
              Estimasi Target Waktu Launching
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["< 1 Bulan", "1 - 3 Bulan", "3 - 6 Bulan", "Retainer Partner"].map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setFormData({ ...formData, timeline: t })}
                  className={`py-2 px-3 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                    formData.timeline === t
                      ? "bg-indigo-600 border-indigo-500 text-white font-bold"
                      : "bg-slate-50 dark:bg-white/2 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
              Ringkasan Kebutuhan / Deskripsi Masalah
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Jelaskan gambaran sistem yang ingin dibangun atau masalah bottleneck yang sedang dialami..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/4 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/25 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{isSubmitted ? "Menghubungkan ke WhatsApp..." : "Kirim & Lanjutkan ke WhatsApp Resmi"}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono text-center pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            <span>Data Anda dilindungi kerahasiaannya di bawah NDA (Non-Disclosure Agreement).</span>
          </div>
        </form>
      </div>
    </div>
  );
};
