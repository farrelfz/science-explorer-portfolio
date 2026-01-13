// Portfolio Data - Edit konten di sini untuk update seluruh website
// Portfolio Data - Edit this file to update all website content

export const siteConfig = {
  name: "FisikaSeru",
  title: "FisikaSeru | EdTech Engineer & Physics Education Designer",
  description: "Portfolio profesional pengembang edukasi sains dan teknologi pendidikan. Membangun platform pembelajaran fisika interaktif dan virtual lab.",
  url: "https://fisikaseru.com",
  ogImage: "/og-image.png",
};

export const profile = {
  name: "Ahmad Fauzan",
  role: "EdTech Engineer & Physics Education Designer",
  tagline: "Mengubah konsep fisika kompleks menjadi pengalaman belajar yang interaktif dan menyenangkan",
  location: "Jakarta, Indonesia",
  email: "hello@fisikaseru.com",
  cvUrl: "/assets/CV.pdf",
  avatar: "/avatar.jpg",
  bio: `Saya adalah pengembang edukasi sains dengan fokus pada menciptakan platform pembelajaran yang menggabungkan teknologi modern dengan pedagogi berbasis riset. Dengan latar belakang fisika dan pengembangan web, saya membangun simulasi interaktif dan virtual lab yang membantu siswa memahami konsep-konsep abstrak melalui eksperimen virtual.`,
  values: `Saya percaya bahwa pemikiran ilmiah (scientific thinking), literasi data (data literacy), dan penalaran berbasis model (model-based reasoning) adalah keterampilan esensial abad 21. Setiap proyek yang saya kerjakan bertujuan untuk membangun kapasitas berpikir kritis dan kemampuan memecahkan masalah melalui pendekatan hands-on dan inquiry-based learning.`,
  stats: {
    yearsExperience: 5,
    projectsCompleted: 20,
    publications: 8,
    studentsReached: "10K+",
  },
  socials: {
    github: "https://github.com/fisikaseru",
    linkedin: "https://linkedin.com/in/fisikaseru",
    googleScholar: "https://scholar.google.com/citations?user=xxxxx",
    twitter: "https://twitter.com/fisikaseru",
  },
};

export const projects = [
  {
    id: "fisikaseru-virtual-lab",
    title: "FisikaSeru Virtual Lab",
    summary: "Platform laboratorium virtual fisika interaktif untuk SMA dengan 50+ simulasi eksperimen",
    description: `Platform pembelajaran fisika berbasis web yang memungkinkan siswa melakukan eksperimen virtual secara interaktif. Dilengkapi dengan 50+ simulasi dari mekanika hingga fisika modern.`,
    problem: "Banyak sekolah tidak memiliki akses ke laboratorium fisika yang lengkap, membatasi pengalaman hands-on siswa dalam memahami konsep-konsep abstrak.",
    solution: "Membangun platform virtual lab yang accessible dari browser manapun, dengan simulasi realistis berbasis WebGL dan PhET-inspired pedagogy.",
    role: "Full-stack Developer & Lead Designer",
    impact: [
      "Digunakan oleh 50+ sekolah di Indonesia",
      "10,000+ siswa aktif bulanan",
      "Peningkatan 40% skor pemahaman konsep",
      "Finalist Inovasi Pendidikan Kemendikbud 2024",
    ],
    techStack: ["React", "TypeScript", "Three.js", "WebGL", "Tailwind CSS", "Supabase"],
    category: ["Web", "Simulasi", "Edukasi"],
    thumbnail: "/projects/virtual-lab.jpg",
    images: ["/projects/virtual-lab-1.jpg", "/projects/virtual-lab-2.jpg"],
    demoUrl: "https://lab.fisikaseru.com",
    githubUrl: "https://github.com/fisikaseru/virtual-lab",
    featured: true,
  },
  {
    id: "physics-motion-simulator",
    title: "Physics Motion Simulator",
    summary: "Simulasi gerak kinematika dan dinamika dengan visualisasi real-time grafik dan vektor",
    description: "Aplikasi web untuk memvisualisasikan konsep gerak dalam fisika dengan grafik posisi, kecepatan, dan percepatan secara real-time.",
    problem: "Siswa kesulitan menghubungkan persamaan kinematika dengan representasi visual gerak benda.",
    solution: "Simulator interaktif dengan kontrol parameter dan visualisasi grafik simultan.",
    role: "Developer & UI Designer",
    impact: [
      "5,000+ pengguna aktif",
      "Digunakan di 20+ universitas",
      "Rating 4.8/5 dari pengguna",
    ],
    techStack: ["React", "D3.js", "Framer Motion", "TypeScript"],
    category: ["Web", "Simulasi", "Edukasi"],
    thumbnail: "/projects/motion-sim.jpg",
    images: [],
    demoUrl: "https://motion.fisikaseru.com",
    githubUrl: "https://github.com/fisikaseru/motion-sim",
    featured: true,
  },
  {
    id: "stem-learning-dashboard",
    title: "STEM Learning Dashboard",
    summary: "Dashboard analytics untuk monitoring progress belajar siswa dengan AI-powered insights",
    description: "Platform dashboard untuk guru dan siswa melacak progress pembelajaran STEM dengan visualisasi data dan rekomendasi personalisasi.",
    problem: "Guru kesulitan memantau progress individual 30+ siswa dan memberikan feedback tepat waktu.",
    solution: "Dashboard terintegrasi dengan analytics dan AI untuk identifikasi learning gaps.",
    role: "Frontend Lead",
    impact: [
      "Menghemat 5 jam/minggu waktu guru",
      "Peningkatan 25% engagement siswa",
    ],
    techStack: ["Next.js", "Recharts", "PostgreSQL", "OpenAI API"],
    category: ["Web", "Edukasi", "UI/UX"],
    thumbnail: "/projects/dashboard.jpg",
    images: [],
    demoUrl: "https://dashboard.fisikaseru.com",
    githubUrl: "",
    featured: true,
  },
  {
    id: "quantum-mechanics-viz",
    title: "Quantum Mechanics Visualizer",
    summary: "Visualisasi interaktif konsep mekanika kuantum untuk mahasiswa tingkat dasar",
    description: "Aplikasi edukasi untuk memvisualisasikan fungsi gelombang, probabilitas, dan konsep kuantum lainnya.",
    problem: "Mekanika kuantum sangat abstrak dan sulit divisualisasikan dengan metode tradisional.",
    solution: "Visualisasi 3D interaktif dengan penjelasan step-by-step.",
    role: "Solo Developer",
    impact: [
      "Digunakan di 5 universitas",
      "Paper diterbitkan di jurnal pendidikan fisika",
    ],
    techStack: ["React", "Three.js", "GLSL Shaders", "MathJax"],
    category: ["Simulasi", "Riset", "Edukasi"],
    thumbnail: "/projects/quantum.jpg",
    images: [],
    demoUrl: "https://quantum.fisikaseru.com",
    githubUrl: "https://github.com/fisikaseru/quantum-viz",
    featured: false,
  },
  {
    id: "physics-ar-app",
    title: "Physics AR Experience",
    summary: "Aplikasi augmented reality untuk eksperimen fisika di ruang kelas",
    description: "Aplikasi mobile AR yang memungkinkan siswa melihat fenomena fisika di lingkungan nyata.",
    problem: "Konsep fisika seperti medan listrik dan magnet tidak terlihat oleh mata.",
    solution: "AR overlay untuk visualisasi field lines dan force vectors di ruang nyata.",
    role: "Lead Developer",
    impact: [
      "10,000+ downloads di Play Store",
      "Featured di Google for Education",
    ],
    techStack: ["Unity", "ARCore", "C#", "Firebase"],
    category: ["Simulasi", "Edukasi"],
    thumbnail: "/projects/ar-physics.jpg",
    images: [],
    demoUrl: "",
    githubUrl: "https://github.com/fisikaseru/physics-ar",
    featured: false,
  },
  {
    id: "research-data-platform",
    title: "Physics Education Research Platform",
    summary: "Platform kolaborasi riset pendidikan fisika dengan tools analisis data terintegrasi",
    description: "Platform untuk peneliti pendidikan fisika mengumpulkan, menganalisis, dan berbagi data riset.",
    problem: "Fragmentasi data dan tools riset pendidikan fisika menghambat kolaborasi.",
    solution: "Platform terpusat dengan standar data dan tools analisis built-in.",
    role: "Technical Lead",
    impact: [
      "Digunakan oleh 15 institusi riset",
      "100+ dataset terpublikasi",
    ],
    techStack: ["Python", "FastAPI", "React", "PostgreSQL", "Docker"],
    category: ["Riset", "Web"],
    thumbnail: "/projects/research-platform.jpg",
    images: [],
    demoUrl: "https://research.fisikaseru.com",
    githubUrl: "",
    featured: false,
  },
];

export const experiences = [
  {
    id: "exp-1",
    position: "EdTech Engineer & Co-Founder",
    company: "FisikaSeru Labs",
    location: "Jakarta",
    period: "2022 - Sekarang",
    type: "Full-time",
    highlights: [
      "Memimpin pengembangan platform virtual lab dengan 50+ simulasi fisika interaktif",
      "Membangun tim developer 5 orang dan menerapkan agile methodology",
      "Mengintegrasikan AI untuk personalisasi learning path siswa",
      "Mencapai 10,000+ pengguna aktif bulanan dalam 18 bulan",
    ],
  },
  {
    id: "exp-2",
    position: "Frontend Developer",
    company: "EduTech Indonesia",
    location: "Bandung",
    period: "2020 - 2022",
    type: "Full-time",
    highlights: [
      "Mengembangkan UI/UX untuk platform learning management system",
      "Optimasi performa frontend hingga 60% lebih cepat",
      "Implementasi design system untuk konsistensi 20+ produk",
      "Mentoring 3 junior developer",
    ],
  },
  {
    id: "exp-3",
    position: "Research Assistant",
    company: "Physics Education Research Group - ITB",
    location: "Bandung",
    period: "2018 - 2020",
    type: "Part-time",
    highlights: [
      "Riset tentang efektivitas simulasi komputer dalam pembelajaran fisika",
      "Mengembangkan prototipe simulasi untuk eksperimen pendidikan",
      "Publikasi 3 paper di jurnal nasional terakreditasi",
      "Presentasi di 2 konferensi internasional",
    ],
  },
  {
    id: "exp-4",
    position: "Teaching Assistant",
    company: "Departemen Fisika - ITB",
    location: "Bandung",
    period: "2017 - 2019",
    type: "Part-time",
    highlights: [
      "Asisten praktikum Fisika Dasar untuk 120+ mahasiswa per semester",
      "Mengembangkan modul praktikum berbasis inquiry",
      "Mendapat penghargaan Best Teaching Assistant 2018",
    ],
  },
];

export const education = [
  {
    id: "edu-1",
    degree: "M.Sc. Physics Education",
    institution: "Institut Teknologi Bandung",
    period: "2020 - 2022",
    description: "Fokus riset: Computer-based simulations for physics learning",
  },
  {
    id: "edu-2",
    degree: "B.Sc. Physics",
    institution: "Institut Teknologi Bandung",
    period: "2015 - 2019",
    description: "Cum Laude, GPA 3.85/4.00",
  },
];

export const publications = [
  {
    id: "pub-1",
    title: "Effectiveness of Virtual Laboratory in Developing Scientific Process Skills",
    authors: "Fauzan, A., Pratama, D., & Wijaya, S.",
    journal: "Journal of Physics Education Research",
    year: 2024,
    doi: "10.1088/xxxxx",
    type: "Journal Article",
  },
  {
    id: "pub-2",
    title: "Model-Based Reasoning in Interactive Physics Simulations",
    authors: "Fauzan, A. & Rahman, H.",
    journal: "International Journal of Science Education",
    year: 2023,
    doi: "10.1080/xxxxx",
    type: "Journal Article",
  },
  {
    id: "pub-3",
    title: "Designing Effective Physics Simulations: A Framework",
    authors: "Fauzan, A.",
    journal: "Proceeding of ICPE 2023",
    year: 2023,
    doi: "10.1088/xxxxx",
    type: "Conference Paper",
  },
  {
    id: "pub-4",
    title: "Data Literacy in Physics Education: Challenges and Opportunities",
    authors: "Fauzan, A., Susanto, B., & Lee, K.",
    journal: "Physics Education Journal",
    year: 2022,
    doi: "10.1088/xxxxx",
    type: "Journal Article",
  },
];

export const achievements = [
  {
    id: "ach-1",
    title: "Finalist - Inovasi Pendidikan Kemendikbud",
    organization: "Kementerian Pendidikan dan Kebudayaan",
    year: 2024,
    description: "Top 10 inovasi pendidikan tingkat nasional untuk FisikaSeru Virtual Lab",
  },
  {
    id: "ach-2",
    title: "Google for Education Innovator",
    organization: "Google",
    year: 2023,
    description: "Dipilih sebagai salah satu dari 50 innovator pendidikan Asia Tenggara",
  },
  {
    id: "ach-3",
    title: "Best Paper Award - ICPE 2023",
    organization: "International Conference on Physics Education",
    year: 2023,
    description: "Penghargaan paper terbaik kategori Educational Technology",
  },
  {
    id: "ach-4",
    title: "Medali Emas - OSN Fisika",
    organization: "Olimpiade Sains Nasional",
    year: 2014,
    description: "Peraih medali emas tingkat nasional",
  },
];

export const skills = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
  backend: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Supabase", "Firebase"],
  tools: ["Figma", "Git", "Docker", "Vercel", "AWS"],
  simulation: ["WebGL", "GLSL", "Unity", "PhET", "p5.js"],
  research: ["Data Analysis", "Python (scipy, numpy)", "R", "LaTeX", "SPSS"],
};

export const categories = ["Web", "Simulasi", "Edukasi", "Riset", "UI/UX"];

export const navigation = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Publikasi", href: "#publications" },
  { label: "Skill", href: "#skills" },
  { label: "Kontak", href: "#contact" },
];

export const callout = {
  title: "🚀 Sedang Membangun",
  description: "Platform virtual lab generasi baru dengan AI tutor dan real-time collaboration untuk pembelajaran fisika yang lebih engaging.",
  cta: {
    label: "Pelajari Lebih Lanjut",
    href: "#projects",
  },
};
