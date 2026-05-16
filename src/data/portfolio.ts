// ============================================================
// PORTFOLIO DATA — Muhamad Farrel Dava Fauzan
// ============================================================

export const siteConfig = {
  name: "Farrel Dava",
  title: "Muhamad Farrel Dava Fauzan — Researcher × Educator × Builder × Designer",
  description:
    "Physics Education undergraduate at Universitas Negeri Jakarta. Building the future of scientific learning through AI, simulation, and human-centered educational technology.",
  url: "https://farreldava.com",
  ogImage: "/og-image.png",
  keywords: [
    "Physics Education",
    "Educational Technology",
    "AI in Education",
    "Interactive Simulation",
    "Scientific Visualization",
    "Learning Science",
    "EdTech",
    "Universitas Negeri Jakarta",
  ],
};

export const profile = {
  name: "Muhamad Farrel Dava Fauzan",
  shortName: "Farrel Dava",
  role: "Researcher · Educator · Builder · Writer · Data Analyst",
  tagline:
    "Building the Future of Physics Learning Through Research, AI, and Interactive Experiences.",
  secondaryTagline:
    "Researching, Building, and Writing Better Ways to Learn Science.",
  location: "Jakarta, Indonesia",
  institution: "Universitas Negeri Jakarta",
  department: "Physics Education",
  email: "mfarreldava23@gmail.com",
  cvUrl: "/assets/CV_FarrelDava.pdf",
  avatar: "/avatar.jpg",
  bio: `I am a Physics Education undergraduate at Universitas Negeri Jakarta, operating at the intersection of educational research, artificial intelligence, and interactive simulation. My work focuses on redesigning how students experience and internalize physics — moving beyond memorization into genuine scientific understanding through technology-mediated inquiry.`,
  philosophy: [
    {
      id: "phi-1",
      statement: "Physics should be experienced, not memorized.",
      elaboration:
        "True understanding emerges from interaction, experimentation, and discovery — not passive consumption of equations.",
      icon: "⚛️",
    },
    {
      id: "phi-2",
      statement: "AI should guide curiosity, not replace thinking.",
      elaboration:
        "Intelligent systems must scaffold inquiry, surface questions, and amplify human reasoning — never short-circuit it.",
      icon: "🤖",
    },
    {
      id: "phi-3",
      statement: "Technology should empower meaningful learning.",
      elaboration:
        "Every tool I build serves a pedagogical purpose — grounded in research, validated by practice, and designed for impact.",
      icon: "🔬",
    },
  ],
  stats: {
    researchProjects: 6,
    projectsBuilt: 12,
    publications: 4,
    articlesWritten: 8,
    studentsImpacted: "2K+",
  },
  socials: {
    github: "https://github.com/farrelfz",
    linkedin: "https://linkedin.com/in/farreldava",
    googleScholar: "https://scholar.google.com/citations?user=farreldava",
    instagram: "https://instagram.com/farreldava",
    researchgate: "https://researchgate.net/profile/FarrelDava",
    whatsapp: "https://wa.me/6281234567890",
  },
};

export const researchInterests = [
  {
    id: "ri-1",
    title: "Physics Education Research",
    description:
      "Investigating conceptual understanding, misconceptions, and pedagogical frameworks in physics learning at secondary and tertiary levels.",
    icon: "⚛️",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    tags: ["Conceptual Learning", "Inquiry-Based", "Misconceptions"],
  },
  {
    id: "ri-2",
    title: "AI in Education",
    description:
      "Designing intelligent tutoring systems, adaptive learning algorithms, and AI-augmented feedback mechanisms for physics learners.",
    icon: "🧠",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    tags: ["ITS", "Adaptive Learning", "NLP", "LLMs"],
  },
  {
    id: "ri-3",
    title: "Scientific Visualization",
    description:
      "Creating high-fidelity visual representations of abstract physical phenomena through WebGL, Three.js, and custom rendering pipelines.",
    icon: "🌌",
    color: "from-cyan-500/20 to-teal-500/20",
    borderColor: "border-cyan-500/30",
    tags: ["WebGL", "Three.js", "Data Visualization"],
  },
  {
    id: "ri-4",
    title: "Interactive Simulation",
    description:
      "Engineering real-time physics simulations that translate mathematical models into explorable, controllable, and observable environments.",
    icon: "🔧",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
    tags: ["Physics Engines", "Real-time", "WebAssembly"],
  },
  {
    id: "ri-5",
    title: "Learning Analytics",
    description:
      "Applying data science to understand student learning trajectories, identify gaps, and generate actionable pedagogical insights.",
    icon: "📊",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
    tags: ["Learning Traces", "Predictive Models", "Dashboards"],
  },
  {
    id: "ri-6",
    title: "Human-Centered Learning Design",
    description:
      "Applying HCI principles, cognitive load theory, and UX research to design educational interfaces that feel effortless and effective.",
    icon: "🎯",
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "border-rose-500/30",
    tags: ["HCI", "Cognitive Load", "UX Research"],
  },
];

export const projects = [
  {
    id: "fisikaseru",
    title: "FisikaSeru",
    subtitle: "Physics Learning Platform",
    summary:
      "A comprehensive physics learning ecosystem combining interactive simulations, AI tutoring, and inquiry-based pedagogy for Indonesian high school students.",
    description:
      "FisikaSeru reimagines physics education for Indonesian learners through a web-native platform integrating 30+ interactive simulations, an AI-powered tutor, and a structured inquiry framework aligned with the Kurikulum Merdeka. The platform bridges the gap between abstract physics equations and intuitive understanding.",
    problem:
      "Indonesian high school students consistently rank among the lowest globally in physics conceptual understanding, largely due to rote memorization approaches, inaccessible labs, and disconnected curriculum design.",
    researchBasis:
      "Grounded in Ausubel's Meaningful Learning theory, Vygotsky's ZPD, and Inquiry-Based Learning (IBL) frameworks. Validated through pre-post quasi-experimental studies with 200+ participants.",
    techStack: ["React", "TypeScript", "Three.js", "Supabase", "OpenAI API", "Tailwind CSS"],
    category: "EdTech Platform",
    tags: ["Simulation", "AI", "IBL", "Web"],
    status: "Active",
    featured: true,
    year: 2024,
    impact: [
      "2,000+ registered students",
      "35% improvement in conceptual test scores",
      "40+ interactive simulations deployed",
      "Used across 15 schools in Jakarta",
    ],
    demoUrl: "https://fisikaseru.com",
    githubUrl: "https://github.com/farrelfz/fisikaseru",
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: "aih-fisika",
    title: "AIH Fisika",
    subtitle: "AI-Powered Physics Homework Assistant",
    summary:
      "An intelligent homework assistance system that guides students through physics problem-solving using Socratic dialogue, step-by-step scaffolding, and conceptual feedback.",
    description:
      "AIH Fisika (AI Helper Fisika) is a conversational AI system specifically fine-tuned for Indonesian physics curriculum. Unlike generic AI tools, it refuses to give direct answers — instead, it scaffolds reasoning through targeted questions, identifies misconceptions, and guides students to construct understanding independently.",
    problem:
      "Students use AI tools like ChatGPT to get answers, bypassing actual learning. This creates an illusion of understanding while deepening knowledge gaps.",
    researchBasis:
      "Built on Socratic method principles, cognitive tutoring theory (Anderson et al.), and self-regulated learning frameworks. Uses chain-of-thought prompting engineered for physics pedagogy.",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "LangChain", "PostgreSQL", "Vercel AI SDK"],
    category: "AI Education",
    tags: ["AI", "LLM", "Scaffolding", "Physics"],
    status: "Beta",
    featured: true,
    year: 2024,
    impact: [
      "500+ weekly active users",
      "92% user satisfaction rating",
      "Covers full SMA physics curriculum",
      "Average session depth: 8 exchanges",
    ],
    demoUrl: "https://aih.fisikaseru.com",
    githubUrl: "https://github.com/farrelfz/aih-fisika",
    color: "from-violet-600 to-purple-700",
  },
  {
    id: "risetify",
    title: "Risetify",
    subtitle: "Research Management & Automation Platform",
    summary:
      "A full-stack research infrastructure platform for automating literature collection, metadata ingestion, citation analysis, and research pipeline management for physics education scholars.",
    description:
      "Risetify is a research-grade automation platform built to solve the fragmentation of academic research workflows. It integrates with Semantic Scholar, CrossRef, and OpenAlex APIs to build living knowledge bases, automate systematic literature reviews, and generate scientometric dashboards.",
    problem:
      "Physics education researchers spend 60%+ of their time on administrative research tasks — manually collecting papers, managing citations, and organizing literature — leaving insufficient time for actual scientific thinking.",
    researchBasis:
      "Inspired by systematic review methodologies (PRISMA), bibliometric analysis frameworks, and knowledge graph theory. Designed for the Physics Education Research Corpus (PERC) Engine project.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Neo4j", "React", "Docker", "Celery"],
    category: "Research Automation",
    tags: ["Research", "Automation", "NLP", "Knowledge Graph"],
    status: "In Development",
    featured: true,
    year: 2025,
    impact: [
      "Automates 80% of literature collection",
      "Processes 10,000+ papers per run",
      "Integrated citation network visualization",
      "Used by 3 research groups",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/farrelfz/risetify",
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: "sipanen",
    title: "SIPANEN",
    subtitle: "Physics Assessment & Analytics Engine",
    summary:
      "An adaptive assessment engine that generates, administers, and analyzes physics tests using Item Response Theory and machine learning to produce actionable learning diagnostics.",
    description:
      "SIPANEN (Sistem Penilaian dan Analitik Pembelajaran) is a psychometrically-grounded assessment platform for physics education. It uses IRT-based item calibration, adaptive testing algorithms, and ML-powered misconception detection to produce granular diagnostic reports for both students and teachers.",
    problem:
      "Current physics assessments in Indonesia measure recall, not understanding. Teachers lack tools to identify specific misconceptions and cannot differentiate instruction effectively at scale.",
    researchBasis:
      "Built on Item Response Theory (Rasch model), diagnostic classification models, and cognitive diagnostic assessment (CDA) frameworks. Validated with item bank of 500+ calibrated physics items.",
    techStack: ["Python", "R", "React", "TypeScript", "PostgreSQL", "FastAPI"],
    category: "Assessment Technology",
    tags: ["Assessment", "IRT", "Analytics", "Adaptive"],
    status: "Research Phase",
    featured: true,
    year: 2025,
    impact: [
      "500-item calibrated question bank",
      "Covers all SMA physics topics",
      "IRT-based adaptive testing",
      "Misconception clustering via ML",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/farrelfz/sipanen",
    color: "from-orange-600 to-amber-700",
  },
  {
    id: "milikanlab",
    title: "MilikanLab",
    subtitle: "Virtual Millikan Oil Drop Experiment",
    summary:
      "A high-fidelity virtual recreation of Millikan's oil drop experiment with real noise modeling, measurement uncertainty, and authentic laboratory protocol to teach charge quantization.",
    description:
      "MilikanLab recreates the historic 1909 experiment in a browser-based virtual environment. Students operate authentic controls (voltage, plate separation, droplet selection), measure terminal velocities, and derive the elementary charge — with realistic measurement noise that teaches uncertainty analysis alongside the physics.",
    problem:
      "The Millikan experiment is foundational for teaching charge quantization but is expensive, hazardous with real oil, and mechanically complex. Most students never perform it.",
    researchBasis:
      "Physics-accurate simulation using Stokes' law, viscous drag modeling, and statistical noise injection validated against NIST elementary charge data. Pedagogically designed using authentic scientific practice frameworks.",
    techStack: ["React", "TypeScript", "Canvas API", "Framer Motion", "MathJax"],
    category: "Virtual Laboratory",
    tags: ["Simulation", "Virtual Lab", "Classical Physics"],
    status: "Complete",
    featured: true,
    year: 2023,
    impact: [
      "Used in 8 universities",
      "Physics-accurate noise modeling",
      "Full measurement uncertainty workflow",
      "1,200+ experiment runs logged",
    ],
    demoUrl: "https://milikanlab.fisikaseru.com",
    githubUrl: "https://github.com/farrelfz/milikanlab",
    color: "from-cyan-600 to-blue-700",
  },
  {
    id: "pyrolab",
    title: "PyroLab",
    subtitle: "Thermodynamics & Heat Transfer Simulator",
    summary:
      "An interactive thermodynamics simulation suite covering heat transfer mechanisms, gas laws, carnot cycles, and entropy — with real-time parameter control and data export.",
    description:
      "PyroLab provides a unified simulation environment for thermodynamics education, featuring six interconnected modules: conduction/convection/radiation visualizers, ideal gas behavior, PV diagram explorer, Carnot cycle animator, and entropy production tracker. All simulations export data for further analysis.",
    problem:
      "Thermodynamics is persistently the lowest-performing topic in Indonesian physics education, with abstract concepts like entropy and Carnot efficiency rarely understood beyond formula memorization.",
    researchBasis:
      "Built on first-principles thermodynamic equations. Pedagogically structured around Energy-Interaction Models (EIM) and supported by research on conceptual change in heat and temperature.",
    techStack: ["React", "TypeScript", "D3.js", "Canvas API", "Recharts"],
    category: "Virtual Laboratory",
    tags: ["Simulation", "Thermodynamics", "Data Visualization"],
    status: "Complete",
    featured: true,
    year: 2023,
    impact: [
      "6 simulation modules",
      "Real-time data export (CSV/JSON)",
      "Used in 5 universities",
      "Aligned with SNBT physics syllabus",
    ],
    demoUrl: "https://pyrolab.fisikaseru.com",
    githubUrl: "https://github.com/farrelfz/pyrolab",
    color: "from-rose-600 to-red-700",
  },
];

export const publications = [
  {
    id: "pub-1",
    title:
      "Effectiveness of Inquiry-Based Virtual Laboratory on Students' Conceptual Understanding of Newton's Laws",
    authors: "Fauzan, M.F.D., Pratama, D., & Sari, R.",
    journal: "Jurnal Pendidikan Fisika Indonesia",
    year: 2024,
    doi: "10.15294/jpfi.v20i1.xxxxx",
    type: "Journal Article",
    status: "Published",
    abstract:
      "This quasi-experimental study investigates the effectiveness of an inquiry-based virtual laboratory intervention on conceptual understanding of Newton's Laws among 11th-grade students (N=156). Results indicate statistically significant improvements (d=0.78) in post-test scores compared to conventional instruction.",
    tags: ["IBL", "Virtual Lab", "Newton's Laws", "Quasi-experimental"],
  },
  {
    id: "pub-2",
    title:
      "Designing AI-Scaffolded Physics Problem Solving: A Socratic Dialogue Framework",
    authors: "Fauzan, M.F.D. & Rahmat, A.",
    journal: "Indonesian Journal of Science Education",
    year: 2024,
    doi: "10.15294/ijse.v13i2.xxxxx",
    type: "Journal Article",
    status: "Published",
    abstract:
      "We propose and evaluate a Socratic dialogue framework for AI-scaffolded physics problem solving, implemented as a conversational AI tutor. A mixed-methods study (N=89) demonstrates improved self-regulation and reduced answer-seeking behavior.",
    tags: ["AI Tutoring", "Socratic Method", "LLM", "Self-regulation"],
  },
  {
    id: "pub-3",
    title:
      "Learning Analytics Dashboard for Identifying Physics Misconceptions: A Teacher-Centered Design Study",
    authors: "Fauzan, M.F.D., Wahyuni, S., & Kusuma, A.",
    journal: "Proceedings of ICPE 2023",
    year: 2023,
    doi: "10.1088/icpe.2023.xxxxx",
    type: "Conference Paper",
    status: "Published",
    abstract:
      "This design study presents a teacher-facing analytics dashboard for real-time misconception identification in physics classrooms. We report on three design iterations with 12 physics teachers across Jakarta.",
    tags: ["Learning Analytics", "Misconceptions", "Dashboard", "Design Study"],
  },
  {
    id: "pub-4",
    title:
      "Item Response Theory Calibration of a Physics Conceptual Inventory for Indonesian Secondary Education",
    authors: "Fauzan, M.F.D. & Supriyadi, B.",
    journal: "Jurnal Penelitian Pendidikan IPA",
    year: 2023,
    doi: "10.29303/jppipa.v9i3.xxxxx",
    type: "Journal Article",
    status: "Published",
    abstract:
      "We report the IRT calibration of a 60-item physics conceptual inventory for Indonesian SMA students using the Rasch model (N=412). Item fit statistics, discrimination parameters, and differential item functioning analyses are presented.",
    tags: ["IRT", "Rasch Model", "Assessment", "Psychometrics"],
  },
];

export const timeline = [
  {
    id: "tl-1",
    year: "2025",
    title: "Physics Education Research Corpus Engine",
    description:
      "Initiated Risetify — an automated research infrastructure for large-scale physics education knowledge synthesis.",
    type: "research",
    highlight: true,
  },
  {
    id: "tl-2",
    year: "2024",
    title: "AIH Fisika — AI Homework Assistant",
    description:
      "Launched AI-powered Socratic tutoring system. Paper accepted at Indonesian Journal of Science Education.",
    type: "project",
    highlight: true,
  },
  {
    id: "tl-3",
    year: "2024",
    title: "FisikaSeru Platform Launch",
    description:
      "Deployed full learning ecosystem. Reached 2,000 registered students across 15 schools in Jakarta.",
    type: "project",
    highlight: true,
  },
  {
    id: "tl-4",
    year: "2024",
    title: "Journal Publication — JPFI",
    description:
      "Published first-author research on IBL virtual laboratory effectiveness. Quasi-experimental study with N=156.",
    type: "publication",
    highlight: false,
  },
  {
    id: "tl-5",
    year: "2023",
    title: "ICPE 2023 — Conference Presentation",
    description:
      "Presented learning analytics dashboard research. Received recognition for design methodology.",
    type: "achievement",
    highlight: false,
  },
  {
    id: "tl-6",
    year: "2023",
    title: "MilikanLab & PyroLab Complete",
    description:
      "Delivered two flagship virtual laboratory simulations. Adopted by 5+ universities.",
    type: "project",
    highlight: false,
  },
  {
    id: "tl-7",
    year: "2022",
    title: "Enrolled — Physics Education, UNJ",
    description:
      "Began undergraduate studies at Universitas Negeri Jakarta, Physics Education department.",
    type: "education",
    highlight: true,
  },
  {
    id: "tl-8",
    year: "2022",
    title: "First Open Source Simulation",
    description:
      "Released first public physics simulation. Gained traction in Indonesian physics education community.",
    type: "project",
    highlight: false,
  },
];

export const teachingFramework = [
  {
    id: "tf-1",
    name: "Inquiry-Based Learning",
    abbr: "IBL",
    description:
      "Students formulate questions, investigate phenomena, and construct knowledge through guided experimentation — moving from observation to theory.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "tf-2",
    name: "Bloom's Taxonomy",
    abbr: "BT",
    description:
      "Instructional design scaffolded across cognitive levels — from foundational Remember/Understand to higher-order Analyze/Evaluate/Create.",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "tf-3",
    name: "Scaffolded Instruction",
    abbr: "SI",
    description:
      "Temporary support structures (hints, prompts, worked examples) that bridge the Zone of Proximal Development and fade as competence grows.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "tf-4",
    name: "Meaningful Learning",
    abbr: "ML",
    description:
      "Ausubel's framework: new knowledge must connect to existing cognitive structures. Concept maps, analogies, and prior knowledge activation are central.",
    color: "from-orange-500 to-amber-600",
  },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Writing", href: "/writing" },
  { label: "Timeline", href: "/timeline" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

// ============================================================
// CONTENT TAXONOMY DISTINCTION:
//
// RESEARCH   = active scientific investigations, ongoing studies,
//              methodology, research clusters, living projects
// PUBLICATIONS = peer-reviewed, DOI-indexed, formally published
//                academic papers (journal articles, conference papers)
// WRITING    = essays, perspectives, science communication, build
//              logs, opinion pieces — Farrel as public intellectual
// ============================================================

export const writingArticles = [
  {
    id: "wr-1",
    title: "Why Physics Education Needs a Complete Redesign — Not Just Better Tools",
    excerpt:
      "We keep grafting technology onto broken pedagogy and calling it innovation. The real crisis is upstream: we teach physics as a collection of formulas rather than a way of making sense of reality.",
    category: "Education Policy",
    tags: ["Pedagogy", "Reform", "EdTech"],
    readingTime: "8 min",
    date: "2025-03",
    featured: true,
    url: "/writing/physics-education-redesign",
  },
  {
    id: "wr-2",
    title: "The Problem with AI Tutors That Just Give Answers",
    excerpt:
      "Large language models are extraordinarily good at telling students the answer. That's precisely what makes them dangerous as learning tools if deployed without pedagogical intent.",
    category: "AI & Learning",
    tags: ["AI", "LLMs", "Tutoring", "Socratic Method"],
    readingTime: "6 min",
    date: "2025-01",
    featured: true,
    url: "/writing/ai-tutors-answers-problem",
  },
  {
    id: "wr-3",
    title: "Simulation Is Not Reality — And That's the Point",
    excerpt:
      "When students use a virtual Millikan experiment, they're not doing the experiment. They're doing something arguably more valuable: reasoning through an idealized model.",
    category: "Simulation & Learning",
    tags: ["Simulation", "Virtual Lab", "Epistemology"],
    readingTime: "5 min",
    date: "2024-11",
    featured: false,
    url: "/writing/simulation-not-reality",
  },
  {
    id: "wr-4",
    title: "Inquiry-Based Learning Isn't Just 'Letting Students Explore'",
    excerpt:
      "The most common misimplementation of IBL is treating it as unstructured discovery. Real IBL is architectural — every question, constraint, and pause is designed.",
    category: "Pedagogy",
    tags: ["IBL", "Inquiry", "Curriculum Design"],
    readingTime: "7 min",
    date: "2024-09",
    featured: false,
    url: "/writing/ibl-not-unstructured",
  },
  {
    id: "wr-5",
    title: "The Quiet Crisis in Indonesian Physics Education Data",
    excerpt:
      "We make sweeping policy decisions about physics curriculum reform with almost no longitudinal data on what students actually understand. Here's what's missing.",
    category: "Research & Policy",
    tags: ["Indonesia", "Learning Analytics", "Policy"],
    readingTime: "9 min",
    date: "2024-07",
    featured: true,
    url: "/writing/indonesia-physics-data-crisis",
  },
  {
    id: "wr-6",
    title: "Building Risetify: When a Researcher Gets Tired of Manual Literature Reviews",
    excerpt:
      "After spending 40 hours on a single systematic review, I decided to automate the pipeline. This is the story of Risetify — the frustrations and what I learned.",
    category: "Behind the Build",
    tags: ["Risetify", "Research Automation", "Build Log"],
    readingTime: "10 min",
    date: "2024-05",
    featured: false,
    url: "/writing/building-risetify",
  },
  {
    id: "wr-7",
    title: "What Entropy Actually Is (And Why Teachers Get It Wrong)",
    excerpt:
      "Entropy is not disorder. It's not chaos. It's a precise measure of microscopic states. Let's fix one of the most persistent misconceptions in physics education.",
    category: "Science Communication",
    tags: ["Thermodynamics", "Entropy", "Science Communication"],
    readingTime: "6 min",
    date: "2024-03",
    featured: false,
    url: "/writing/what-entropy-actually-is",
  },
  {
    id: "wr-8",
    title: "The Student Who Understood Quantum Mechanics Through Dance",
    excerpt:
      "An unexpected lesson in multimodal learning — and why the constraint of a single representational format (equations) limits who gets to understand physics.",
    category: "Learning Science",
    tags: ["Multimodal Learning", "Quantum Mechanics", "Representation"],
    readingTime: "4 min",
    date: "2024-01",
    featured: false,
    url: "/writing/quantum-mechanics-through-dance",
  },
  // Poetry & Literary
  {
    id: "wr-9",
    title: "Di Batas Sinar dan Bayang — Puisi tentang Gelombang Cahaya",
    excerpt:
      "Antara dualitas partikel dan gelombang, ada puisi yang menunggu untuk ditulis. Cahaya adalah metafora terbaik untuk segala sesuatu yang tidak bisa sepenuhnya dipahami.",
    category: "Poetry",
    tags: ["Puisi", "Cahaya", "Fisika & Sastra"],
    readingTime: "3 min",
    date: "2025-02",
    featured: false,
    url: "/writing/di-batas-sinar-dan-bayang",
  },
  {
    id: "wr-10",
    title: "Gravitasi Perasaan — Kumpulan Puisi",
    excerpt:
      "Seperti massa yang saling tarik-menarik, ada gaya tak terlihat dalam setiap hubungan. Puisi-puisi yang lahir dari persimpangan fisika dan rasa manusia.",
    category: "Poetry",
    tags: ["Puisi", "Gravitasi", "Koleksi"],
    readingTime: "5 min",
    date: "2024-10",
    featured: false,
    url: "/writing/gravitasi-perasaan",
  },
  // Short stories (cerpen)
  {
    id: "wr-11",
    title: "Lab Malam Itu — Cerpen",
    excerpt:
      "Seorang mahasiswa fisika, sebuah simulasi yang tiba-tiba hidup, dan pertanyaan yang tidak bisa dijawab oleh persamaan apapun. Cerita pendek tentang batas antara sains dan imajinasi.",
    category: "Short Story",
    tags: ["Cerpen", "Fiksi Ilmiah", "Mahasiswa"],
    readingTime: "12 min",
    date: "2025-04",
    featured: true,
    url: "/writing/lab-malam-itu",
  },
  {
    id: "wr-12",
    title: "Persamaan yang Belum Terbukti — Cerpen",
    excerpt:
      "Dua peneliti muda, satu dugaan besar, dan realita bahwa sains tidak selalu berjalan lurus. Cerpen tentang kebenaran, kegagalan, dan mengapa kita tetap mencoba.",
    category: "Short Story",
    tags: ["Cerpen", "Penelitian", "Drama"],
    readingTime: "15 min",
    date: "2024-08",
    featured: false,
    url: "/writing/persamaan-yang-belum-terbukti",
  },
  // News articles
  {
    id: "wr-13",
    title: "UNJ Luncurkan Platform Simulasi Fisika Berbasis AI Pertama di Indonesia",
    excerpt:
      "Mahasiswa Pendidikan Fisika Universitas Negeri Jakarta berhasil mengembangkan platform pembelajaran fisika interaktif yang mengintegrasikan kecerdasan buatan dan simulasi 3D untuk siswa SMA.",
    category: "Berita & Artikel",
    tags: ["UNJ", "EdTech", "AI", "Berita"],
    readingTime: "4 min",
    date: "2024-12",
    featured: false,
    url: "/writing/unj-platform-fisika-ai",
  },
  {
    id: "wr-14",
    title: "Krisis Pembelajaran Fisika: Mengapa Nilai PISA Indonesia Stagnan?",
    excerpt:
      "Analisis mendalam terhadap tren hasil PISA Indonesia dalam literasi sains selama satu dekade terakhir — dan apa yang perlu berubah dalam kurikulum nasional kita.",
    category: "Berita & Artikel",
    tags: ["PISA", "Kurikulum", "Analisis Data", "Kebijakan"],
    readingTime: "7 min",
    date: "2024-06",
    featured: false,
    url: "/writing/krisis-pisa-fisika-indonesia",
  },
];

// ============================================================
// EXPERIENCES — Academic & Non-Academic (University era)
// Only entries relevant to research, education, tech, and data
// ============================================================

export const experiences = [
  // Academic Achievements
  {
    id: "exp-1",
    type: "achievement",
    title: "1st Place — Lomba Inovasi Media Pembelajaran Fisika",
    organization: "Himpunan Mahasiswa Fisika UNJ",
    year: "2024",
    description: "Meraih juara pertama dalam kompetisi inovasi media pembelajaran fisika tingkat nasional dengan proyek simulasi virtual lab berbasis web.",
    tags: ["Kompetisi", "Virtual Lab", "Pendidikan Fisika"],
    color: "from-amber-500 to-orange-500",
    icon: "🏆",
  },
  {
    id: "exp-2",
    type: "achievement",
    title: "Best Paper — International Conference on Physics Education 2023",
    organization: "ICPE 2023",
    year: "2023",
    description: "Paper tentang learning analytics dashboard untuk identifikasi miskonsepsi fisika mendapat penghargaan best paper dari panel reviewer internasional.",
    tags: ["Konferensi", "Publikasi", "Internasional"],
    color: "from-violet-500 to-purple-500",
    icon: "📄",
  },
  {
    id: "exp-3",
    type: "training",
    title: "Google Data Analytics Professional Certificate",
    organization: "Google / Coursera",
    year: "2024",
    description: "Menyelesaikan sertifikasi data analytics dari Google — mencakup SQL, R programming, Tableau, dan end-to-end data analysis workflow.",
    tags: ["Data Analytics", "SQL", "R", "Tableau"],
    color: "from-blue-500 to-cyan-500",
    icon: "📊",
  },
  {
    id: "exp-4",
    type: "training",
    title: "Pelatihan Riset Pendidikan & Metodologi Kuantitatif",
    organization: "Universitas Negeri Jakarta — LPPM",
    year: "2023",
    description: "Pelatihan intensif selama 40 jam tentang desain penelitian kuasi-eksperimental, analisis IRT dengan R, dan penulisan artikel ilmiah.",
    tags: ["Metodologi", "IRT", "R", "Riset"],
    color: "from-emerald-500 to-teal-500",
    icon: "🔬",
  },
  {
    id: "exp-5",
    type: "organization",
    title: "Kepala Divisi Teknologi — Himpunan Mahasiswa Fisika",
    organization: "HMF UNJ",
    year: "2023–2024",
    description: "Memimpin divisi teknologi dalam organisasi kemahasiswaan — mengkoordinasi pengembangan website HMF, platform event, dan digitalisasi administrasi.",
    tags: ["Kepemimpinan", "Web Dev", "Organisasi"],
    color: "from-indigo-500 to-blue-500",
    icon: "🎓",
  },
  {
    id: "exp-6",
    type: "training",
    title: "Bangkit Academy 2024 — Machine Learning Path",
    organization: "Google · GoTo · Traveloka (Bangkit)",
    year: "2024",
    description: "Program bootcamp ML intensif 5 bulan — mempelajari TensorFlow, Computer Vision, NLP, dan deployment model ML ke Google Cloud.",
    tags: ["Machine Learning", "TensorFlow", "NLP", "Cloud"],
    color: "from-rose-500 to-pink-500",
    icon: "🤖",
  },
  {
    id: "exp-7",
    type: "achievement",
    title: "Finalis GEMASTIK XVII — Kategori Pengembangan Perangkat Lunak",
    organization: "Kemendikbud-Ristek / Puspresnas",
    year: "2024",
    description: "Mewakili UNJ sebagai finalis Gemastik XVII dengan proyek FisikaSeru — kompetisi teknologi terbesar untuk mahasiswa seluruh Indonesia.",
    tags: ["Gemastik", "Kompetisi Nasional", "EdTech"],
    color: "from-cyan-500 to-blue-500",
    icon: "🏅",
  },
  {
    id: "exp-8",
    type: "training",
    title: "Workshop Penulisan Ilmiah & Science Communication",
    organization: "Indonesian Young Scientist Association",
    year: "2023",
    description: "Workshop intensif tentang science communication, penulisan artikel populer ilmiah, dan strategi publikasi di jurnal terindeks Scopus.",
    tags: ["Science Comm", "Penulisan", "Publikasi"],
    color: "from-orange-500 to-amber-500",
    icon: "✍️",
  },
];
