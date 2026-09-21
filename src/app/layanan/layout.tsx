import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Rekayasa Software & Integrasi AI | Busyra Tech",
  description:
    "Layanan arsitektur sistem, pengembangan aplikasi web & mobile enterprise, integrasi model AI produksi, dan otomatisasi workflow bisnis oleh Busyra Tech.",
  keywords: [
    "layanan rekayasa software",
    "jasa integrasi ai",
    "konsultan it enterprise",
    "pembuatan aplikasi mobile",
    "arsitektur cloud backend",
  ],
  openGraph: {
    title: "Layanan Rekayasa Software & Integrasi AI | Busyra Tech",
    description:
      "Solusi rekayasa perangkat lunak dan integrasi AI tingkat produksi untuk institusi dan korporasi terkemuka.",
    type: "website",
    locale: "id_ID",
  },
};

export default function LayananLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
