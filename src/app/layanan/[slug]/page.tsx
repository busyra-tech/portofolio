import React from "react";
import { notFound } from "next/navigation";
import { ALL_SERVICES } from "../../../data/landingData";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = ALL_SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Layanan Tidak Ditemukan - Busyra Tech" };

  return {
    title: `${service.title} - Busyra Tech`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = ALL_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} allServices={ALL_SERVICES} />;
}
