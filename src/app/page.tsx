"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CapabilitiesBento } from "@/components/CapabilitiesBento";
import { EngineeringProcess } from "@/components/EngineeringProcess";
import { TechStackMatrix } from "@/components/TechStackMatrix";
import { CaseStudies } from "@/components/CaseStudies";
import { TestimonialsAndMedia } from "@/components/TestimonialsAndMedia";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";

export default function Home() {
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080b11] text-slate-900 dark:text-[#f8fafc] flex flex-col selection:bg-indigo-600 selection:text-white transition-colors">
      {/* Top Floating Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation("Konsultasi Umum via Navbar")} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Live Terminal Simulation */}
        <Hero onOpenConsultation={() => handleOpenConsultation("Konsultasi Arsitektur Hero")} />

        {/* Core Capabilities Bento Grid */}
        <CapabilitiesBento onSelectService={(serviceTitle) => handleOpenConsultation(`Kebutuhan Layanan: ${serviceTitle}`)} />

        {/* 5-Step Engineering Pipeline Workflow */}
        <EngineeringProcess />

        {/* Modern Interactive Tech Radar & Matrix */}
        <TechStackMatrix onOpenConsultation={() => handleOpenConsultation("Konsultasi Arsitektur Tech Stack")} />

        {/* Production Case Studies (Honda, HRIS, GovTech) */}
        <CaseStudies onSelectProject={(projectTitle) => handleOpenConsultation(`Studi Kasus Kebutuhan Serupa: ${projectTitle}`)} />

        {/* Media Mentions & Executive Quotes */}
        <TestimonialsAndMedia />

        {/* Final Conversion CTA Section */}
        <CTASection onOpenConsultation={() => handleOpenConsultation("CTA Final Landing Page")} />
      </main>

      {/* Enterprise Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation("Footer Consultation Link")} />

      {/* Interactive RFQ & WhatsApp Dispatcher Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseConsultation}
        defaultProjectContext={projectContext}
      />
    </div>
  );
}
