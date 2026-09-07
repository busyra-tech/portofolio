import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Busyra Tech — Enterprise Software Engineering & Production AI Integrator",
  description:
    "Jasa pembuatan aplikasi enterprise, cloud backend berkinerja tinggi, dan integrasi AI otonom di Indonesia. Dipercaya Kementerian Keuangan, Honda Precision Parts, Mitsubishi Electric, dan BNPB.",
  keywords: [
    "jasa pembuatan aplikasi",
    "developer ai indonesia",
    "ai integrator indonesia",
    "software house jakarta",
    "enterprise software development",
    "konsultan ai indonesia",
    "busyra tech",
  ],
  authors: [{ name: "Busyra Tech" }],
  openGraph: {
    title: "Busyra Tech — Enterprise Software Engineering & Production AI Integrator",
    description:
      "Rekayasa perangkat lunak skala enterprise & integrasi AI produksi. Solusi berkinerja tinggi untuk BUMN, instansi pemerintah, dan korporasi.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('busyra-theme');
                  var root = document.documentElement;
                  if (theme === 'light') {
                    root.classList.remove('dark');
                    root.classList.add('light');
                    root.style.colorScheme = 'light';
                  } else {
                    root.classList.add('dark');
                    root.classList.remove('light');
                    root.style.colorScheme = 'dark';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-(--background) text-(--foreground) transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
