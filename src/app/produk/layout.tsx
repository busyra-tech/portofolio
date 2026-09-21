import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk & Platform Digital Siap Pakai | Busyra Tech",
  description:
    "Jajaran platform SaaS dan solusi digital siap pakai dari Busyra Tech untuk otomasi niaga, pencatatan keuangan cerdas, dan manajemen operasional UMKM.",
  keywords: [
    "produk digital siap pakai",
    "saas indonesia",
    "software house produk",
    "bot toko telegram whatsapp",
    "aplikasi keuangan keluarga",
    "pos kasir umkm",
  ],
  openGraph: {
    title: "Produk & Platform Digital Siap Pakai | Busyra Tech",
    description:
      "Platform SaaS yang kami bangun dan operasikan — dirancang untuk menyelesaikan masalah nyata dengan teknologi modern.",
    type: "website",
    locale: "id_ID",
  },
};

export default function ProdukLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
