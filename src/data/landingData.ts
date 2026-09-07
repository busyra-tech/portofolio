export interface ClientLogo {
  name: string;
  category: 'Pemerintahan & BUMN' | 'Korporasi & Manufaktur' | 'Teknologi & Finansial';
  shortDesc: string;
}

export interface ServicePillar {
  id: string;
  tag: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  metrics: string;
  techStack: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  title: string;
  overview: string;
  impactMetrics: { label: string; value: string }[];
  architectureHighlights: string[];
  techStack?: string[];
  summaryBadge?: string;
  productionStatus?: string;
  challengeSummary?: string;
  solutionSummary?: string;
}

export interface DetailedService {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
  description: string;
  heroHighlight: string;
  coreProblemsSolved: string[];
  keyDeliverables: string[];
  techStack: string[];
  metrics: string;
  caseStudyRef?: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'Pemerintahan & BUMN' | 'Corporate' | 'Lainnya';
  shortDesc: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  deliverables: string[];
  techStack: string[];
}

export interface TechItem {
  name: string;
  category: 'AI & LLM' | 'Backend & Data' | 'Frontend & Mobile' | 'Cloud & DevOps';
  badge: string;
  description: string;
}

export interface ProcessStep {
  stepNumber: string;
  phase: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const COMPANY_INFO = {
  name: "Busyra Tech",
  legalName: "Busyra Tech",
  tagline: "Enterprise Software Engineering & Production AI Integrator",
  address: "Menara Rajawali Lantai 7-1, Kawasan Mega Kuningan, Jakarta Selatan, 12950",
  whatsappNumber: "6289681353660",
  email: "contact@busyratech.web.id",
  phoneDisplay: "+62 896-8135-3660",
};

export const STATS = [
  { value: "150+", label: "Enterprise Projects Deployed", note: "Tanpa insiden kritis" },
  { value: "99.98%", label: "System Availability SLA", note: "Zero unplanned downtime" },
  { value: "40+", label: "BUMN & Enterprise Clients", note: "Termasuk kementerian RI" },
  { value: "<3.5ms", label: "Core API P99 Latency", note: "Arsitektur Go & Microservices" },
];

export const CLIENTS: ClientLogo[] = [
  { name: "Kementerian Keuangan RI", category: "Pemerintahan & BUMN", shortDesc: "Portal & Digital Transformation" },
  { name: "PT Honda Precision Parts", category: "Korporasi & Manufaktur", shortDesc: "Supply Chain & PO Automation" },
  { name: "PT Mitsubishi Electric", category: "Korporasi & Manufaktur", shortDesc: "Industrial IoT Dashboard" },
  { name: "BNPB Republik Indonesia", category: "Pemerintahan & BUMN", shortDesc: "Disaster Monitoring Systems" },
  { name: "Kominfo / Komdigi", category: "Pemerintahan & BUMN", shortDesc: "Public Sector Tech Integrator" },
  { name: "PT Honda Power Products", category: "Korporasi & Manufaktur", shortDesc: "Distributor & Warranty Systems" },
  { name: "PT Pupuk Kalimantan Timur", category: "Pemerintahan & BUMN", shortDesc: "Enterprise Asset Tracking" },
  { name: "NTT Data", category: "Teknologi & Finansial", shortDesc: "Global Tech Collaboration" },
  { name: "Generali Indonesia", category: "Teknologi & Finansial", shortDesc: "Fintech & Policy Workflow" },
  { name: "Akebono Brake Astra", category: "Korporasi & Manufaktur", shortDesc: "Manufacturing Quality Apps" },
  { name: "SP Denso Indonesia", category: "Korporasi & Manufaktur", shortDesc: "Internal Organization Platform" },
  { name: "Perpustakaan Nasional RI", category: "Pemerintahan & BUMN", shortDesc: "Digital Repository Archival" },
];

export const SERVICES: ServicePillar[] = [
  {
    id: "ai-integrator",
    tag: "Production AI",
    title: "AI Integrator & Autonomous Agents",
    tagline: "Dari prototype eksperimental menuju pipeline AI kelas produksi yang aman, berdaulat, dan terukur.",
    description: "Kami tidak sekadar memasang API ChatGPT. Kami membangun RAG berdaulat (on-premise / private cloud), fine-tuned domain models, semantic search vector pipelines, hingga agen otonom untuk otomasi alur kerja korporasi dengan guardrails ketat.",
    capabilities: [
      "Custom Fine-tuned LLM & Local Model Deployment (Ollama / vLLM)",
      "High-Precision Private RAG dengan pgvector / Qdrant",
      "Computer Vision untuk Quality Control & Deteksi Anomali Manufaktur",
      "Automated Workflow Agents dengan Human-in-the-loop Guardrails",
    ],
    metrics: "+68% Efisiensi Alur Kerja",
    techStack: ["Python", "PyTorch", "LangChain", "vLLM", "DeepSeek", "PostgreSQL pgvector"],
  },
  {
    id: "enterprise-backend",
    tag: "High-Throughput Systems",
    title: "Mission-Critical Web & Cloud Platform",
    tagline: "Sistem web tangguh dengan arsitektur microservices yang mampu menangani puluhan ribu transaksi per detik.",
    description: "Kami merancang arsitektur backend berkinerja tinggi menggunakan Go, Node.js, dan Rust. Menjamin konkurensi masif, latency P99 di bawah milidetik, integritas data ACID tingkat finansial, dan skalabilitas horizontal otomatis.",
    capabilities: [
      "Microservices Architecture & Event-Driven Systems (Kafka / RabbitMQ)",
      "High-Concurrency API Gateway & Zero-Downtime Releases",
      "Database Optimization, Sharding & Distributed Caching (Redis Cluster)",
      "Enterprise Grade Auth, RBAC & Multi-Tenant Partitioning",
    ],
    metrics: "25k+ Req/s Throughput",
    techStack: ["Go (Golang)", "Next.js 16", "PostgreSQL", "Redis", "Kafka", "Docker"],
  },
  {
    id: "mobile-engineering",
    tag: "Native & Cross-Platform",
    title: "High-Performance Mobile Apps",
    tagline: "Aplikasi mobile kelas perbankan dan industri untuk Android & iOS dengan performa 60fps tanpa kompromi.",
    description: "Pengembangan aplikasi mobile kelas industri dengan sinkronisasi offline-first, enkripsi biometrik perangkat keras, analitik real-time, dan antarmuka responsif yang teruji pada jutaan interaksi harian.",
    capabilities: [
      "Multiplatform Development (Flutter / Kotlin Multiplatform) & Native iOS/Android",
      "Offline-First Data Architecture dengan Local SQLite / Isar Sync",
      "Hardware Integration (BLE, RFID, Barcode Scanners, Thermal Printers)",
      "Biometric Security, Keystore Hardening, & Obfuscated Builds",
    ],
    metrics: "<1.2s Cold Launch Time",
    techStack: ["Flutter", "Kotlin", "Swift", "Dart", "Firebase", "WebSockets"],
  },
  {
    id: "it-advisory",
    tag: "Strategic Governance",
    title: "Enterprise Architecture & Legacy Modernization",
    tagline: "Audit arsitektur sistem menyeluruh, refactoring monolit, dan pengawalan transformasi digital institusi.",
    description: "Membantu dewan direksi, CTO, dan pimpinan IT instansi merombak sistem legacy yang lambat dan rentan. Kami mendampingi migrasi cloud tanpa downtime, audit keamanan SOC2/ISO 27001, serta pembuatan blueprint arsitektur masa depan.",
    capabilities: [
      "Legacy Codebase Refactoring & Monolith-to-Microservices Roadmap",
      "Infrastructure-as-Code (Terraform) & Zero-Trust Cloud Architecture",
      "Security Audits, Penetration Testing & Vulnerability Assessment",
      "Continuous Delivery CI/CD Pipeline Modernization",
    ],
    metrics: "100% Zero-Loss Migration",
    techStack: ["Terraform", "Kubernetes", "AWS / GCP", "Vault", "SonarQube", "Datadog"],
  },
];

// Recreated 7 Services exactly mirroring majapahit.id with enterprise Anti-Slop depth
export const ALL_SERVICES: DetailedService[] = [
  {
    slug: "ai-integrator",
    title: "AI Integrator",
    shortTitle: "AI Integrator",
    category: "Artificial Intelligence",
    tagline: "Integrasikan kecerdasan buatan langsung ke dalam core operasional bisnis secara efisien dan berdaulat.",
    heroHighlight: "Implementasi Private RAG, Fine-Tuned Domain Models & Agen Otonom Produksi",
    description:
      "Kami membantu enterprise mengadopsi Artificial Intelligence secara riil, bukan sekadar wrapper API pihak ketiga. Mulai dari model on-premise, vector database terdistribusi, hingga autonomous workflow agents yang memiliki guardrails ketat tanpa risiko kebocoran data rahasia perusahaan.",
    coreProblemsSolved: [
      "Menghentikan ketergantungan pada model publik yang berisiko membocorkan rahasia institusi",
      "Mengotomatisasi ekstraksi dokumen ribuan format (invoice, PO, regulasi) dengan akurasi 99.9%",
      "Menghubungkan data silo di berbagai database internal ke dalam satu asisten analitik real-time",
      "Menjamin waktu inferensi sub-detik untuk transaksi layanan pelanggan masif",
    ],
    keyDeliverables: [
      "Private On-Premise / Hybrid LLM Deployment (vLLM / Ollama)",
      "High-Precision Vector Database Engine (pgvector / Qdrant)",
      "Automated Semantic Document Parser & OCR Pipeline",
      "Custom Enterprise Governance & Anti-Hallucination Guardrails",
    ],
    techStack: ["Python", "PyTorch", "vLLM", "DeepSeek", "pgvector", "LangChain", "Docker"],
    metrics: "+68% Efisiensi Alur Kerja",
  },
  {
    slug: "ai-konsultan",
    title: "AI Konsultan",
    shortTitle: "AI Konsultan",
    category: "Strategic Advisory",
    tagline: "Formulasi roadmap adopsi AI terukur, kalkulasi ROI yang realistis, dan mitigasi risiko implementasi.",
    heroHighlight: "Studi Kelayakan Teknis, Desain Arsitektur Data, dan Tata Kelola Etika AI",
    description:
      "Banyak inisiatif AI enterprise berakhir gagal karena ketidaksesuaian ekspektasi dan ketiadaan data pipeline yang siap. Konsultan AI Busyra Tech mendampingi C-level dan direksi untuk memetakan use case dengan dampak finansial tertinggi sebelum satu baris kode pun ditulis.",
    coreProblemsSolved: [
      "Menghindari pemborosan anggaran untuk proyek AI tanpa ROI bisnis yang jelas",
      "Audit kesiapan data internal (data readiness & sanitation)",
      "Perumusan standar kepatuhan etika, regulasi privasi, dan keamanan data",
      "Pemilihan antara membeli solusi SaaS vs membangun model privat",
    ],
    keyDeliverables: [
      "Dokumen AI Feasibility & Opportunity Matrix",
      "Data Infrastructure Maturity Assessment",
      "Roadmap Implementasi Bertahap (PoC to Scale)",
      "Estimasi Biaya Komputasi & GPU TCO (Total Cost of Ownership)",
    ],
    techStack: ["Architecture RFC", "Data Pipeline Modeling", "GPU Benchmarks", "Security Audit"],
    metrics: "100% Alignment Terhadap KPI Bisnis",
  },
  {
    slug: "konsultan-it",
    title: "IT Konsultan",
    shortTitle: "IT Konsultan",
    category: "Strategic Advisory",
    tagline: "Audit arsitektur sistem menyeluruh, perencanaan transformasi digital, dan pengawalan proyek strategis.",
    heroHighlight: "Modernisasi Sistem Warisan, Zero-Downtime Migration & Kepatuhan ISO 27001",
    description:
      "Memberikan arahan strategis independen untuk peremajaan infrastruktur IT, pemisahan arsitektur monolitik yang lambat menjadi microservices, serta pengawalan standarisasi keamanan informasi bagi lembaga pemerintahan dan korporasi.",
    coreProblemsSolved: [
      "Menyelesaikan bottleneck sistem lama yang sering down saat lonjakan trafik",
      "Menghilangkan risiko kegagalan migrasi database skala terabyte",
      "Mempersiapkan sistem untuk sertifikasi keamanan dan audit BPK/Kemenkeu",
      "Evaluasi vendor teknologi pihak ketiga secara independen dan objektif",
    ],
    keyDeliverables: [
      "Laporan Comprehensive Architecture Audit & Bottleneck Analysis",
      "C-Level Strategic Digital Transformation Blueprint",
      "Disaster Recovery & High Availability Plan",
      "Panduan Standarisasi Keamanan Informasi (ISO/IEC 27001 Ready)",
    ],
    techStack: ["Terraform", "Kubernetes", "AWS / GCP", "Enterprise Architecture Frameworks"],
    metrics: "Zero-Loss Risk Migration",
  },
  {
    slug: "software-house-jakarta",
    title: "Software House",
    shortTitle: "Software House",
    category: "Custom Software",
    tagline: "Pembangunan software custom skala industri dengan rekayasa disiplin tinggi dan garansi performa.",
    heroHighlight: "Rekayasa Sistem Kustom End-to-End untuk BUMN & Korporasi Multinasional",
    description:
      "Kami adalah software house berbasis Jakarta yang dipercaya oleh institusi pemerintah dan perusahaan otomotif global. Kami tidak menggunakan template murahan; setiap baris kode dibangun bespoke untuk menyesuaikan proses bisnis unik Anda.",
    coreProblemsSolved: [
      "Menyediakan sistem yang 100% pas dengan proses kerja internal tanpa kompromi software generic",
      "Menghilangkan biaya lisensi tahunan berulang dari vendor asing yang tidak fleksibel",
      "Menjamin kepemilikan source code dan hak kekayaan intelektual (IP) sepenuhnya milik klien",
      "Menyediakan tim pengembang dedikasi dengan SLA respon siaga",
    ],
    keyDeliverables: [
      "Full Source Code & Repository Handover dengan Dokumentasi Lengkap",
      "Arsitektur Backend Skalabel berbasis Go / Node.js",
      "Automated CI/CD Pipeline & Staging Environment",
      "Garansi Bug-Free & Dukungan Pemeliharaan Pasca-Peluncuran",
    ],
    techStack: ["Go", "Next.js", "TypeScript", "PostgreSQL", "Docker", "Redis"],
    metrics: "150+ Proyek Sukses Meluncur",
  },
  {
    slug: "android-development",
    title: "Android Development",
    shortTitle: "Android Dev",
    category: "Mobile Engineering",
    tagline: "Aplikasi Android native dan multiplatform berkinerja tinggi, responsif, dan hemat daya baterai.",
    heroHighlight: "Aplikasi Android Industri: Integrasi Barcode, IoT Sensor, GPS & Biometrik",
    description:
      "Pengembangan aplikasi Android yang dirancang khusus untuk ekosistem perangkat di Indonesia. Diuji di berbagai rentang spesifikasi hardware, mendukung operasi offline-first saat tidak ada jaringan, dan memiliki keamanan enkripsi tingkat perbankan.",
    coreProblemsSolved: [
      "Aplikasi lambat atau crash pada perangkat Android spesifikasi menengah ke bawah",
      "Kebutuhan operasional lapangan tanpa koneksi internet yang stabil",
      "Integrasi hardware khusus seperti barcode scanner thermal, printer Bluetooth, dan reader RFID",
      "Perlindungan aplikasi dari ancaman reverse engineering, tampering, dan root device",
    ],
    keyDeliverables: [
      "Aplikasi Android siap rilis Play Store (AAB & APK Teroptimasi)",
      "Database Lokal Offline-First dengan Protokol Sinkronisasi Otomatis",
      "Driver Integrasi Hardware Eksternal (POS, Barcode, Bluetooth)",
      "Keamanan Aplikasi dengan ProGuard / R8 Obfuscation",
    ],
    techStack: ["Kotlin", "Flutter", "Jetpack Compose", "SQLite / Room", "BLE"],
    metrics: "<1.2s Waktu Buka Dingin",
  },
  {
    slug: "ios-development",
    title: "iOS Development",
    shortTitle: "iOS Dev",
    category: "Mobile Engineering",
    tagline: "Aplikasi iOS premium dengan kepatuhan ketat Apple Human Interface Guidelines dan performa 120Hz ProMotion.",
    heroHighlight: "Pengalaman Apple Ekosistem: FaceID, Metal Graphics, WidgetKit & CoreML",
    description:
      "Menghadirkan pengalaman aplikasi iOS kelas dunia untuk pengguna iPhone dan iPad eksekutif. Mengedepankan animasi fluid 60-120fps, integrasi hardware Apple native, privasi ketat App Tracking Transparency, dan proses approval App Store yang mulus.",
    coreProblemsSolved: [
      "Penolakan review App Store akibat ketidakpatuhan terhadap pedoman Apple yang ketat",
      "Performa animasi yang patah-patah pada layar berkecepatan refresh tinggi",
      "Integrasi keamanan biometrik Face ID / Touch ID yang aman tanpa celah",
      "Dukungan sinkronisasi real-time antar perangkat ekosistem Apple",
    ],
    keyDeliverables: [
      "Source Code Swift Native / Flutter iOS Terverifikasi",
      "Integrasi App Store Connect & TestFlight Beta Distribution",
      "Desain UI/UX Mengikuti Standar Apple Human Interface Guidelines",
      "Enkripsi Data Sensitif Menggunakan iOS Secure Enclave & Keychain",
    ],
    techStack: ["Swift", "SwiftUI", "Flutter", "CoreData", "CoreML"],
    metrics: "99.9% Bebas Crash",
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    category: "Web Engineering",
    tagline: "Platform web modern berbasis SSR/JAMstack, kecepatan pemuatan kilat, dan optimasi SEO teknis mendalam.",
    heroHighlight: "Web Aplikasi Enterprise, Portal E-Commerce & Dashboard Operasional Real-time",
    description:
      "Dari portal publik kementerian dengan jutaan pengunjung hingga dashboard analitik korporasi yang sarat data. Kami memanfaatkan arsitektur modern Next.js dan micro-frontends untuk menghadirkan kecepatan loading di bawah 1 detik dan indeks SEO yang mendominasi mesin pencari.",
    coreProblemsSolved: [
      "Website lambat yang menurunkan ranking Google dan kehilangan calon klien potensial",
      "Tampilan web rusak atau tidak proporsional di perangkat smartphone",
      "Kerapuhan keamanan terhadap serangan SQL Injection, XSS, dan serangan DDoS",
      "Kesulitan mengelola konten secara mandiri oleh tim internal tanpa skill coding",
    ],
    keyDeliverables: [
      "Web Aplikasi Responsif dengan Skor Lighthouse 95+ di Semua Metrik",
      "Pusat Manajemen Konten (Headless CMS) yang Ramah Pengguna",
      "Arsitektur Keamanan Berlapis (Cloudflare WAF, Content Security Policy)",
      "Optimasi SEO Teknis (Schema.org JSON-LD, Sitemap Otomatis, OpenGraph)",
    ],
    techStack: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "Node.js"],
    metrics: "<0.8s First Contentful Paint",
  },
];

// Recreated All Portfolio items directly from majapahit.id
export const ALL_PORTFOLIO: PortfolioItem[] = [
  {
    id: "po-system",
    slug: "po-system",
    title: "PO System (Purchase Order Automation)",
    client: "PT Honda Precision Parts Manufacturing",
    category: "Corporate",
    shortDesc: "Sistem Otomasi Verifikasi PO & Pengadaan Logistik Manufaktur Presisi",
    fullOverview:
      "Sistem enterprise yang menggantikan proses verifikasi purchase order manual ribuan part presisi per hari dengan pipeline pengadaan cerdas yang terintegrasi langsung ke ERP korporat dan vendor rekanan secara real-time.",
    challenge:
      "Ribuan dokumen purchase order yang masuk dari ratusan supplier manufaktur diproses secara manual, menyebabkan keterlambatan konfirmasi produksi, duplikasi entri data, dan kesulitan rekonsiliasi faktur.",
    solution:
      "Busyra Tech merancang portal PO digital berbasis web terenkripsi dengan alur verifikasi multi-tier, pencocokan otomatis antara PO, Surat Jalan, dan Invoice, serta audit trail tamper-proof.",
    impactMetrics: [
      { label: "Waktu Proses Verifikasi", value: "-74%" },
      { label: "Akurasi Rekonsiliasi Data", value: "99.9%" },
      { label: "Supplier Terhubung", value: "120+ Vendor" },
    ],
    deliverables: [
      "Web Portal PO System Honda Precision Parts",
      "Modul Validasi & Otomasi Approval Bertingkat",
      "Integrasi API ke Sistem ERP Utama Perusahaan",
      "Audit Trail & Laporan Kepatuhan Finansial",
    ],
    techStack: ["Next.js", "Node.js Microservices", "PostgreSQL", "Docker", "Tailwind CSS"],
  },
  {
    id: "barcode-system",
    slug: "barcode-system",
    title: "Barcode System & Asset Tracking",
    client: "PT Honda Power Products Indonesia",
    category: "Corporate",
    shortDesc: "Sistem Manajemen Inventaris & Pelacakan Unit Berbasis Barcode Presisi",
    fullOverview:
      "Aplikasi operasional pergudangan dan jalur produksi untuk melacak serial number unit mesin power products mulai dari perakitan pabrik, pengecekan QC, hingga distribusi ke dealer resmi di seluruh Indonesia.",
    challenge:
      "Pencatatan inventaris manual rawan kesalahan human error, menyebabkan ketidaksesuaian stok fisik dengan data gudang serta memperlambat proses klaim garansi produk.",
    solution:
      "Pembangunan aplikasi mobile pemindai barcode terintegrasi ke sistem cloud sentral dengan pembaruan status inventaris per detik.",
    impactMetrics: [
      { label: "Kecepatan Pemindaian Unit", value: "<0.3 Detik" },
      { label: "Akurasi Stok Gudang", value: "100%" },
      { label: "Unit Terlacak Real-time", value: "500,000+" },
    ],
    deliverables: [
      "Aplikasi Pemindai Barcode Industri (Android)",
      "Dashboard Manajemen Inventaris & Gudang Terpusat",
      "Modul Verifikasi Serial Number & Validasi Garansi",
    ],
    techStack: ["Flutter", "Go (Golang)", "PostgreSQL", "Redis", "Android Zebra SDK"],
  },
  {
    id: "digitalent-scholarship",
    slug: "digitalent-scholarship",
    title: "Digitalent Scholarship Platform",
    client: "Kementerian Komunikasi dan Digital (Komdigi)",
    category: "Pemerintahan & BUMN",
    shortDesc: "Portal Nasional Seleksi & Manajemen Pelatihan Talenta Digital Indonesia",
    fullOverview:
      "Infrastruktur portal beasiswa nasional yang melayani ratusan ribu pendaftar program talenta digital di seluruh pelosok Indonesia dengan seleksi otomatis, tes kemampuan online, dan penerbitan sertifikat digital terverifikasi.",
    challenge:
      "Lonjakan trafik ratusan ribu peserta secara serentak pada periode pembukaan beasiswa sering membuat server mengalami crash dan antrean pemrosesan dokumen yang macet.",
    solution:
      "Perancangan ulang arsitektur cloud serverless berskala dinamis, sistem antrean pesan asynchronous, dan sistem autentikasi aman berskala nasional.",
    impactMetrics: [
      { label: "Peserta Terkelola per Batch", value: "100,000+" },
      { label: "Kapasitas Lonjakan Trafik", value: "10x Spike" },
      { label: "Waktu Uptime Pendaftaran", value: "99.99%" },
    ],
    deliverables: [
      "Portal Publik Pendaftaran Digitalent",
      "Dashboard Penilaian & Seleksi Komite Beasiswa",
      "Mesin Ujian Daring Terdistribusi dengan Anti-Cheating",
      "Generator Sertifikat Digital Terenkripsi",
    ],
    techStack: ["Next.js", "PHP Laravel Microservices", "MySQL Cluster", "AWS Cloud", "Docker"],
  },
  {
    id: "aktiv-covid",
    slug: "aktiv-covid",
    title: "Aktiv — Selfcare & Crisis Tracking Apps",
    client: "Badan Nasional Penanggulangan Bencana (BNPB)",
    category: "Pemerintahan & BUMN",
    shortDesc: "Aplikasi Pemantauan Pasien Mandiri & Distribusi Bantuan Tanggap Bencana",
    fullOverview:
      "Sistem pemantauan kesehatan mandiri dan pelacakan logistik penanganan krisis bencana nasional yang menghubungkan pasien isolasi, relawan medis, dan satgas logistik dalam satu ekosistem terpadu.",
    challenge:
      "Kebutuhan mendesak untuk mendata jutaan kondisi harian masyarakat yang isolasi mandiri dengan keterbatasan tenaga medis lapangan.",
    solution:
      "Pembangunan aplikasi mobile yang ringan dengan tele-monitoring berkala, integrasi konsultasi dokter sukarelawan, dan pelacakan distribusi paket obat secara transparan.",
    impactMetrics: [
      { label: "Masyarakat Terbantu", value: "250,000+" },
      { label: "Waktu Tanggap Darurat", value: "-60%" },
      { label: "Distribusi Paket Obat Akurat", value: "99.8%" },
    ],
    deliverables: [
      "Aplikasi Pasien Mobile (Android & iOS)",
      "Pusat Komando Satgas BNPB & Peta Geospasial Kasus",
      "Sistem Antrean Telekonsultasi Medis Cepat",
    ],
    techStack: ["Flutter", "Node.js", "MongoDB", "Google Maps API", "Redis"],
  },
  {
    id: "beasiswa-kominfo",
    slug: "beasiswa-kominfo",
    title: "Sistem Seleksi Beasiswa S2/S3 Kominfo",
    client: "Kementerian Komunikasi dan Digital (Komdigi)",
    category: "Pemerintahan & BUMN",
    shortDesc: "Sistem Seleksi & Administrasi Beasiswa Pendidikan Lanjutan Luar & Dalam Negeri",
    fullOverview:
      "Platform seleksi akademik, verifikasi berkas portofolio, dan penilaian wawancara komite untuk beasiswa jenjang master dan doktoral di universitas terkemuka dunia.",
    challenge:
      "Kerahasiaan data pendaftar dan transparansi penilaian juri lintas universitas mitra dalam dan luar negeri.",
    solution:
      "Penerapan modul blind review dengan enkripsi identitas peserta, rubric penilaian digital terstandar, dan audit trail pergerakan skor.",
    impactMetrics: [
      { label: "Akurasi Verifikasi Berkas", value: "100%" },
      { label: "Penghematan Waktu Sidang Juri", value: "-50%" },
      { label: "Kampus Mitra Terintegrasi", value: "50+ Univ" },
    ],
    deliverables: [
      "Portal Pendaftaran Beasiswa Pascasarjana",
      "Sistem Penilaian Blind Review untuk Reviewer Akademik",
      "Dashboard Integrasi Nilai & Ranking Otomatis",
    ],
    techStack: ["Laravel", "Vue.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "sensor-apps",
    slug: "sensor-apps",
    title: "System Sensor Apps & Telemetry",
    client: "Sensync Technology",
    category: "Corporate",
    shortDesc: "Platform Telemetri IoT & Pemantauan Sensor Lingkungan Real-time",
    fullOverview:
      "Platform pemantauan sensor industri berbasis IoT untuk mengukur getaran mesin, temperatur, dan kelembaban di fasilitas pabrik manufaktur dengan alert threshold instan.",
    challenge:
      "Ribuan paket data sensor per detik harus divisualisasikan secara real-time tanpa membuat browser atau aplikasi seluler menjadi lambat.",
    solution:
      "Pemanfaatan WebSockets dan Time-Series Database untuk streaming data sensor berkecepatan tinggi dengan grafik WebGL interaktif.",
    impactMetrics: [
      { label: "Sensor Aktif Terhubung", value: "2,000+ Nodes" },
      { label: "Latensi Streaming Data", value: "<50ms" },
      { label: "Deteksi Dini Kerusakan Mesin", value: "98.5%" },
    ],
    deliverables: [
      "Dashboard Pemantauan Sensor IoT Industri",
      "Aplikasi Notifikasi Alert Seluler Teknisi",
      "Mesin Analitik Prediksi Perawatan Mesin",
    ],
    techStack: ["React", "Go (Golang)", "TimescaleDB", "MQTT", "WebSockets"],
  },
  {
    id: "audit-system",
    slug: "audit-system",
    title: "Enterprise Audit & Governance System",
    client: "Bomba Group",
    category: "Corporate",
    shortDesc: "Sistem Audit Kepatuhan Tambang, Energi & Logistik Multinasional",
    fullOverview:
      "Sistem audit kepatuhan operasional terdistribusi untuk grup korporasi sektor pertambangan dan energi yang mencakup puluhan entitas anak usaha.",
    challenge:
      "Proses audit internal masih menggunakan lembar kerja spreadsheet yang terpisah-pisah, rawan manipulasi tanggal, dan sulit dikompilasi ke laporan dewan komisaris.",
    solution:
      "Pembangunan platform audit digital terpusat dengan bukti temuan berbasis foto bertanda air lokasi GPS, penomoran otomatis, dan approval hierarkis.",
    impactMetrics: [
      { label: "Waktu Penyusunan Laporan Audit", value: "Dari 3 Minggu -> 2 Hari" },
      { label: "Kepatuhan Regulasi Lingkungan", value: "100%" },
      { label: "Anak Perusahaan Terkelola", value: "18 Entitas" },
    ],
    deliverables: [
      "Aplikasi Web Audit Manajemen Bomba Group",
      "Mobile App Inspeksi Lapangan Offline-Ready",
      "Generator Laporan Audit Otomatis Format Dewan Direksi",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "S3 Storage"],
  },
  {
    id: "igrs",
    slug: "igrs",
    title: "Indonesia Game Rating System (IGRS)",
    client: "Kementerian Komunikasi dan Digital (Komdigi)",
    category: "Pemerintahan & BUMN",
    shortDesc: "Sistem Klasifikasi & Klasifikasi Usia Game Resmi Nasional",
    fullOverview:
      "Portal resmi regulasi klasifikasi usia video game yang beredar di wilayah Republik Indonesia, menyediakan asesmen mandiri penerbit game lokal dan internasional.",
    challenge:
      "Meningkatnya distribusi game lintas negara membutuhkan platform klasifikasi yang mematuhi standar hukum perlindungan anak Indonesia dengan alur verifikasi ketat.",
    solution:
      "Pembangunan portal interaktif untuk publisher game internasional mengajukan self-assessment, verifikasi komite penilai, serta penerbitan sertifikat rating resmi.",
    impactMetrics: [
      { label: "Judul Game Terklasifikasi", value: "3,500+" },
      { label: "Publisher Game Terdaftar", value: "450+ Studios" },
      { label: "Waktu Verifikasi Rating", value: "-45%" },
    ],
    deliverables: [
      "Portal Publik Direktori Rating IGRS",
      "Dashboard Asesmen Publisher Game",
      "Panel Verifikasi Komite Ahli Kominfo",
    ],
    techStack: ["Laravel", "Bootstrap", "MySQL", "Rest API"],
  },
  {
    id: "preservasi-perpusnas",
    slug: "preservasi-perpusnas",
    title: "Preservasi & Repositori Naskah Kuno",
    client: "Perpustakaan Nasional Republik Indonesia",
    category: "Pemerintahan & BUMN",
    shortDesc: "Sistem Digitalisasi & Preservasi Arsip Naskah Kuno Nusantara",
    fullOverview:
      "Platform pengarsipan dan preservasi digital naskah-naskah kuno bersejarah Nusantara dengan resolusi tinggi, penandaan metadata semantik, dan akses bagi peneliti global.",
    challenge:
      "Naskah kuno fisik yang rapuh dan terancam rusak memerlukan digitalisasi arsip gambar ultra-resolusi tinggi tanpa membebani bandwidth publik.",
    solution:
      "Penerapan teknologi visualisasi gambar berbasis deep-zoom pyramid (IIIF standard), metadata berstandar Dublin Core, dan perlindungan watermark digital.",
    impactMetrics: [
      { label: "Naskah Kuno Terpreservasi", value: "40,000+ Lembar" },
      { label: "Kecepatan Render Deep-Zoom", value: "<1 Detik" },
      { label: "Peneliti Global Mengakses", value: "30+ Negara" },
    ],
    deliverables: [
      "Viewer Naskah Kuno Resolusi Tinggi",
      "Pusat Katalog Digital Berstandar Perpustakaan Internasional",
      "Sistem Restorasi Catatan Metadata Kurator",
    ],
    techStack: ["Next.js", "Python", "IIIF Image Server", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "hris",
    slug: "hris",
    title: "Enterprise HRIS & Workforce Intelligence",
    client: "Busyra Tech & Enterprise Clients",
    category: "Corporate",
    shortDesc: "Sistem Manajemen SDM, Payroll Otomatis & Analitik Kinerja Karyawan",
    fullOverview:
      "Platform HRIS terintegrasi yang menangani absensi biometrik multi-cabang, kalkulasi pajak PPh 21 kompleks, approval cuti/lembur berjenjang, dan analitik produktivitas berbasis AI.",
    challenge:
      "Pengelolaan ribuan karyawan di banyak lokasi cabang sering mengalami selisih absensi, kecurangan fake GPS, dan kesalahan kalkulasi payroll lembur.",
    solution:
      "Pembangunan aplikasi mobile presensi dengan pengenalan wajah anti-spoofing, kalkulator payroll deterministik, dan integrasi transfer bank korporat.",
    impactMetrics: [
      { label: "Karyawan Aktif Terkelola", value: "5,000+" },
      { label: "Waktu Proses Payroll Bulanan", value: "15 Menit" },
      { label: "Kepatuhan Pajak Karyawan", value: "100%" },
    ],
    deliverables: [
      "Aplikasi Presensi Karyawan (iOS & Android)",
      "Dashboard HR Administrator & Penggajian Terpusat",
      "Modul KPI & Penilaian Kinerja Karyawan",
    ],
    techStack: ["Flutter", "Go (Golang)", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "crm-apps",
    slug: "crm-apps",
    title: "Omnichannel CRM & Sales Automation",
    client: "Busyra Tech & Enterprise Clients",
    category: "Corporate",
    shortDesc: "Platform CRM Omnichannel dengan Integrasi WhatsApp API & Penugasan AI",
    fullOverview:
      "Aplikasi CRM modern yang menyatukan percakapan prospek dari WhatsApp, email, dan website ke dalam satu antarmuka kolaboratif tim sales dengan bot auto-dispatch cerdas.",
    challenge:
      "Prospek bisnis lambat direspon karena tersebar di WhatsApp nomor pribadi sales individual, sehingga peluang closing penjualan banyak yang hilang.",
    solution:
      "Penyatuan official WhatsApp Business API dengan fitur routing otomatis ke sales yang sedang online, pipeline visual Kanban, dan analitik konversi real-time.",
    impactMetrics: [
      { label: "Peningkatan Kecepatan Respon", value: "+85%" },
      { label: "Konversi Prospek Menjadi Klien", value: "+42%" },
      { label: "Pesan Terkirim per Hari", value: "50,000+" },
    ],
    deliverables: [
      "Dashboard CRM Omnichannel Kolaboratif",
      "Bot Penjawab Prospek Awal & Kualifikasi Kebutuhan",
      "Pipeline Manajemen Penjualan Kanban Visual",
    ],
    techStack: ["React", "Node.js", "MongoDB", "WhatsApp Business API", "WebSockets"],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "po-system",
    client: "PT Honda Precision Parts Manufacturing",
    category: "Industrial Automation & Supply Chain",
    title: "Sistem Otomasi Verifikasi PO & Pengadaan Logistik Presisi",
    overview: "Menggantikan proses verifikasi purchase order manual ribuan part presisi per hari dengan pipeline pengadaan cerdas yang terintegrasi ke ERP dan vendor supplier secara instan.",
    productionStatus: "Production SLA 99.98% Live",
    summaryBadge: "Otomasi Manufaktur",
    challengeSummary: "Verifikasi dokumen PO & invoice ribuan komponen presisi memakan waktu hingga 48 jam dengan risiko ketidaksesuaian nomor part dan duplikasi tagihan vendor.",
    solutionSummary: "Pipeline OCR multi-model dengan neural parser otomatis, validasi 3-way matching terhadap ERP secara real-time, dan ledger audit trail anti-fraud.",
    impactMetrics: [
      { label: "Pengurangan Waktu Pemrosesan", value: "-74%" },
      { label: "Akurasi Verifikasi Dokumen", value: "99.9%" },
      { label: "Vendor Terintegrasi Real-time", value: "120+" },
    ],
    architectureHighlights: [
      "OCR Berbasis AI untuk ekstraksi invoice & delivery note otomatis",
      "Sinkronisasi data multi-tier dengan audit trail tamper-proof",
      "Pencegahan duplikasi tagihan vendor secara otomatis",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Apache Kafka", "Docker", "SAP Connector"],
  },
  {
    id: "enterprise-hris",
    client: "Busyra Tech & Enterprise Clients",
    category: "Enterprise Workforce Platform",
    title: "Sistem Manajemen SDM & Penggajian Terdistribusi Skala Besar",
    overview: "Platform HRIS terintegrasi yang menangani absensi biometrik multi-cabang, kalkulasi pajak PPh 21 kompleks, approval workflow hirarkis, dan analitik produktivitas berbasis AI.",
    productionStatus: "Active Workforce >5k Users",
    summaryBadge: "Platform Enterprise",
    challengeSummary: "Skalabilitas penggajian bulanan sering bottleneck akibat aturan lembur berjenjang, multi-cabang zona waktu, dan regulasi pajak PPh 21 TER yang dinamis.",
    solutionSummary: "Mesin kalkulasi payroll modular deterministik dengan worker pool Go, biometrik anti-spoofing terenkripsi AES-256, dan dashboard analitik eksekutif.",
    impactMetrics: [
      { label: "Karyawan Aktif Terkelola", value: "5,000+" },
      { label: "Waktu Proses Payroll Bulanan", value: "15 Menit" },
      { label: "Kepatuhan Regulasi Tenaga Kerja", value: "100%" },
    ],
    architectureHighlights: [
      "Mesin kalkulasi payroll deterministik dengan idempotency key",
      "Mobile check-in dengan geofencing anti-fake GPS dan deteksi liveness biometrik",
      "Pusat pelaporan terenkripsi AES-256 untuk data privasi karyawan",
    ],
    techStack: ["Go (Golang)", "Next.js", "PostgreSQL", "Redis Cluster", "AES-256 GCM", "Kubernetes"],
  },
  {
    id: "gov-knowledge-hub",
    client: "Instansi Kementerian RI & BNPB",
    category: "Public Sector & Crisis Governance",
    title: "Sistem Repositori Regulasi & Pemantauan Bencana Terpadu",
    overview: "Infrastruktur portal pengetahuan publik yang mengonsolidasikan ratusan ribu dokumen regulasi dan peta sebaran bencana dengan kecepatan pencarian semantik sub-detik.",
    productionStatus: "National Security Certified",
    summaryBadge: "Sistem Pemerintahan",
    challengeSummary: "Pencarian ribuan regulasi dan pemetaan mitigasi bencana tersebar di puluhan format PDF tidak terstruktur, lambat diakses saat situasi krisis nasional.",
    solutionSummary: "Arsitektur hybrid full-text + vector embeddings (pgvector) dengan cluster failover otomatis dan visualisasi spasial berbasis WebGL tanpa lag.",
    impactMetrics: [
      { label: "Dokumen Terindeks Semantik", value: "150,000+" },
      { label: "Kecepatan Pencarian Rata-rata", value: "85ms" },
      { label: "Ketahanan Lonjakan Trafik", value: "10x Spike" },
    ],
    architectureHighlights: [
      "Pencarian berbasis semantic hybrid (Full-text search + Vector Embeddings)",
      "High-availability cluster cloud bersertifikasi kepatuhan data pemerintah",
      "Dasbor interaktif peta geospasial real-time berbasis WebGL",
    ],
    techStack: ["vLLM Sovereign", "pgvector", "PostgreSQL", "MapLibre WebGL", "Node.js", "Redis"],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    phase: "Discovery & Blueprint",
    duration: "Minggu 1 - 2",
    title: "Pemetaan Kebutuhan & Desain Arsitektur",
    description:
      "Menganalisis proses bisnis mendalam, identifikasi constraint data, pemilihan model AI yang tepat, dan penyusunan RFC (Request for Comments) arsitektur sistem.",
    deliverables: ["Dokumen System Architecture RFC", "Database Schema & API Contract", "AI Feasibility & ROI Benchmark"],
  },
  {
    stepNumber: "02",
    phase: "Interactive Prototyping",
    duration: "Minggu 2 - 4",
    title: "Desain Pengalaman Pengguna (Design System)",
    description:
      "Perancangan UI/UX presisi tinggi berorientasi efisiensi kerja. Semua interaksi disimulasikan dalam prototype interaktif sebelum satu baris kode pun ditulis.",
    deliverables: ["Figma High-Fidelity Prototype", "Component Design System", "User Journey & Usability Test Report"],
  },
  {
    stepNumber: "03",
    phase: "Core Sprint Execution",
    duration: "Minggu 4 - 10",
    title: "Pengembangan Paralel & AI Integration",
    description:
      "Pengembangan front-end dan backend microservices secara paralel, pelatihan/finetuning dataset AI, dan integrasi pipeline data real-time dengan review mingguan.",
    deliverables: ["Weekly Staging Deployments", "Fine-Tuned AI Weight & API Checkpoints", "Test Coverage > 85%"],
  },
  {
    stepNumber: "04",
    phase: "Quality & Security Hardening",
    duration: "Minggu 10 - 12",
    title: "Stress Test, Pen-Test & QA Rigor",
    description:
      "Uji beban konkurensi tinggi, audit keamanan penetration test pihak ketiga, verifikasi boundary condition AI (anti-hallucination), dan uji ketahanan disaster recovery.",
    deliverables: ["Load Testing Benchmark Report", "Security Vulnerability Clearance", "UAT Sign-off Report"],
  },
  {
    stepNumber: "05",
    phase: "Deployment & Hypercare",
    duration: "Continuous",
    title: "Zero-Downtime Launch & 24/7 SLA",
    description:
      "Peluncuran produksi menggunakan rolling deployment, monitoring telemetry real-time, tuning berkala model AI, dan garansi dukungan teknis siaga.",
    deliverables: ["CI/CD Production Release", "Observability Dashboard (Grafana/APM)", "SLA Support Agreement 24/7"],
  },
];

export const TECH_ITEMS: TechItem[] = [
  { name: "Python / PyTorch", category: "AI & LLM", badge: "Core ML", description: "Pelatihan model dan fine-tuning embedding khusus enterprise" },
  { name: "vLLM / Ollama", category: "AI & LLM", badge: "Inference Engine", description: "Inference LLM berkecepatan tinggi dengan kuantisasi memori hemat" },
  { name: "pgvector / Qdrant", category: "AI & LLM", badge: "Vector Database", description: "Penyimpanan vector embedding berkecepatan sub-10ms untuk RAG" },
  { name: "DeepSeek & OpenAI API", category: "AI & LLM", badge: "Frontier Models", description: "Integrasi model penalaran cerdas dengan guardrails kustom" },
  { name: "Go (Golang)", category: "Backend & Data", badge: "Microservices", description: "Layanan microservices berkinerja tinggi, thread-safe, dan latency rendah" },
  { name: "PostgreSQL", category: "Backend & Data", badge: "Primary Relational", description: "RDBMS ACID-compliant dengan partisi tabel berskala gigabyte" },
  { name: "Redis Cluster", category: "Backend & Data", badge: "In-Memory Cache", description: "Cache terdistribusi, rate limiter API, dan pub/sub event bus" },
  { name: "Apache Kafka", category: "Backend & Data", badge: "Event Streaming", description: "Message streaming terdistribusi untuk jutaan event tanpa antrean macet" },
  { name: "Next.js 16 (App Router)", category: "Frontend & Mobile", badge: "Web Platform", description: "SSR, streaming UI, dan arsitektur web modern yang terindeks SEO" },
  { name: "Flutter", category: "Frontend & Mobile", badge: "Cross-Platform", description: "Satu codebase untuk iOS, Android, dan desktop dengan rendering Impeller 60fps" },
  { name: "TypeScript & React 19", category: "Frontend & Mobile", badge: "Type Safety", description: "Kode frontend bebas crash dengan static type verification menyeluruh" },
  { name: "Swift & Kotlin Native", category: "Frontend & Mobile", badge: "Native OS", description: "Akses hardware low-level (Bluetooth, NFC, biometric, background worker)" },
  { name: "Kubernetes (K8s)", category: "Cloud & DevOps", badge: "Container Orchestration", description: "Auto-scaling horizontal dan self-healing cluster di cloud" },
  { name: "Docker", category: "Cloud & DevOps", badge: "Containerization", description: "Standardisasi runtime aplikasi dari staging lokal hingga live produksi" },
  { name: "Terraform", category: "Cloud & DevOps", badge: "IaC", description: "Manajemen infrastruktur berbasis kode yang terdokumentasi & reproducible" },
  { name: "Prometheus & Grafana", category: "Cloud & DevOps", badge: "Telemetry", description: "Monitoring kesehatan server, metrik P99, dan alerting real-time" },
];

export const MEDIA_COVERAGE = [
  { name: "Kompas", title: "Peran Busyra Tech dalam Mendorong Transformasi Digital Bisnis di Indonesia" },
  { name: "Detik", title: "Konsultan AI Ungkap Strategi Mencegah Kegagalan Proyek AI di Tingkat Enterprise" },
  { name: "Tribun News", title: "Mitra Strategis Rekayasa Software & Solusi Otomasi Industri Nasional" },
  { name: "Teknologi.id", title: "Tren Adopsi Alur Kerja Otonom Berbasis AI untuk Perusahaan Skala Besar" },
];

export const TESTIMONIALS = [
  {
    quote: "Busyra Tech memberikan standar rekayasa software yang sangat disiplin. Mulai dari desain skema arsitektur hingga deployment produksi, prosesnya transparan dan bebas dari kendala downtime.",
    author: "VP of Digital Innovation",
    org: "Korporasi Manufaktur Otomotif",
  },
  {
    quote: "Bukan hanya janji AI, tetapi integrasi nyata yang langsung menghemat ratusan jam kerja divisi operasional kami setiap bulannya. Sangat direkomendasikan untuk proyek skala enterprise.",
    author: "Head of Information Technology",
    org: "BUMN Sektor Logistik & Energi",
  },
];
