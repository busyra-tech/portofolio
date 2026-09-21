import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio & Rekam Jejak Rekayasa Sistem | Busyra Tech",
  description:
    "Eksplorasi portofolio rekayasa software enterprise, cloud backend berkinerja tinggi, dan integrasi AI produksi oleh Busyra Tech untuk Kementerian RI, BUMN, dan korporasi multinasional.",
  keywords: [
    "portofolio software house",
    "portofolio developer ai",
    "studi kasus enterprise",
    "rekam jejak busyra tech",
    "klien kementerian ri bumn",
    "sistem enterprise indonesia",
  ],
  openGraph: {
    title: "Portofolio & Rekam Jejak Rekayasa Sistem | Busyra Tech",
    description:
      "Studi kasus nyata dan sistem produksi yang kami bangun untuk kementerian, BUMN, dan korporasi manufaktur presisi.",
    type: "website",
    locale: "id_ID",
  },
};

export default function PortofolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
