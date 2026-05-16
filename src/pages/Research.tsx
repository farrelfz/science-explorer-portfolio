import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { researchInterests } from "@/data/portfolio";
import { FadeIn, SectionLabel, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { Brain, FlaskConical, GitBranch, LineChart } from "lucide-react";

const researchClusters = [
  {
    id: "rc-1",
    num: "01",
    icon: Brain,
    title: "Human Learning & Cognition",
    subtitle: "How people understand physics",
    gradient: "from-blue-600 to-indigo-600",
    glow: "hsl(217 91% 60% / 0.15)",
    border: "border-blue-500/25",
    bg: "from-blue-500/8 to-indigo-500/8",
    topics: ["Conceptual Understanding", "Misconception Analysis", "Cognitive Load", "Mental Models", "Schema Theory"],
  },
  {
    id: "rc-2",
    num: "02",
    icon: Brain,
    title: "AI & Intelligent Systems",
    subtitle: "Machines that scaffold learning",
    gradient: "from-violet-600 to-purple-600",
    glow: "hsl(263 70% 60% / 0.15)",
    border: "border-violet-500/25",
    bg: "from-violet-500/8 to-purple-500/8",
    topics: ["Intelligent Tutoring", "Adaptive Learning", "NLP in Education", "LLM Alignment", "AI Safety in EdTech"],
  },
  {
    id: "rc-3",
    num: "03",
    icon: FlaskConical,
    title: "Interactive Technology",
    subtitle: "Physics made explorable",
    gradient: "from-cyan-600 to-teal-600",
    glow: "hsl(180 70% 38% / 0.15)",
    border: "border-cyan-500/25",
    bg: "from-cyan-500/8 to-teal-500/8",
    topics: ["Physics Simulation", "WebGL Rendering", "Real-time Systems", "Scientific Visualization", "Virtual Labs"],
  },
  {
    id: "rc-4",
    num: "04",
    icon: LineChart,
    title: "Assessment & Analytics",
    subtitle: "Data-driven learning insights",
    gradient: "from-amber-600 to-orange-600",
    glow: "hsl(38 92% 50% / 0.15)",
    border: "border-amber-500/25",
    bg: "from-amber-500/8 to-orange-500/8",
    topics: ["Item Response Theory", "Learning Analytics", "Formative Assessment", "Diagnostic Classification", "Psychometrics"],
  },
];

const activeProjects = [
  {
    id: "ap-1",
    title: "PERC Engine",
    description: "Physics Education Research Corpus Engine — automated large-scale literature synthesis and knowledge graph construction.",
    status: "Active",
    phase: "Phase 2: Metadata Ingestion",
  },
  {
    id: "ap-2",
    title: "IBL Effectiveness Study",
    description: "Longitudinal quasi-experimental study on inquiry-based virtual laboratory effects on physics conceptual understanding (N=300).",
    status: "Data Collection",
    phase: "Semester 3/4 Cohort",
  },
  {
    id: "ap-3",
    title: "AIH Fisika v2",
    description: "Next-generation AI physics tutor with fine-tuned domain model, misconception detection, and adaptive Socratic dialogue.",
    status: "Design",
    phase: "Framework Architecture",
  },
];

const ResearchPage = () => {
  useEffect(() => {
    document.title = "Research — Farrel Dava | Physics Education Researcher";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-hero-light">
          <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20 pointer-events-none" />
          <div className="absolute inset-0 opacity-50">
            <ParticleCanvas particleCount={40} interactive={false} />
          </div>
          <div className="container-max relative z-10">
            <FadeIn>
              <div className="label-research mb-6 w-fit">
                <FlaskConical size={12} />
                Research Laboratory
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 max-w-4xl leading-tight">
                Investigating the{" "}
                <span className="text-gradient-primary">Science of Learning</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
                My research sits at the intersection of physics education, cognitive science, and
                intelligent technology — working toward a unified theory of technologically-mediated
                scientific learning.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Research Clusters */}
        <section className="section-padding">
          <div className="container-max">
            <SectionLabel>Research Clusters</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-3xl sm:text-4xl text-foreground mt-2 mb-3">
                Four Interconnected Domains
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-sm text-muted-foreground max-w-lg mb-10 leading-relaxed">
                Each domain is distinct yet deeply connected — findings in one domain directly inform practice in all others.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {researchClusters.map((cluster, idx) => {
                const Icon = cluster.icon;
                return (
                  <StaggerItem key={cluster.id}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 280, damping: 22 }}
                      className={`group relative flex flex-col rounded-3xl border ${cluster.border} bg-gradient-to-br ${cluster.bg} overflow-hidden hover:shadow-2xl transition-all duration-300`}
                      style={{ boxShadow: `0 0 0 0 ${cluster.glow}` }}
                    >
                      {/* Top gradient strip */}
                      <div className={`h-1 w-full bg-gradient-to-r ${cluster.gradient}`} />

                      {/* Header area */}
                      <div className="flex items-start justify-between p-6 pb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <span
                              className={`inline-flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br ${cluster.gradient} text-white`}
                            >
                              <Icon size={16} strokeWidth={2} />
                            </span>
                            <span className="font-mono text-[10px] font-bold text-muted-foreground tracking-widest">
                              DOMAIN {cluster.num}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-foreground leading-tight mb-0.5">
                            {cluster.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">{cluster.subtitle}</p>
                        </div>
                        {/* Large decorative number */}
                        <span
                          className={`font-mono text-6xl font-black opacity-8 bg-gradient-to-br ${cluster.gradient} bg-clip-text text-transparent select-none pointer-events-none`}
                          style={{ opacity: 0.08 }}
                        >
                          {cluster.num}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className={`mx-6 h-px bg-gradient-to-r ${cluster.gradient} opacity-20`} />

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 p-6 pt-4">
                        {cluster.topics.map((topic, ti) => (
                          <motion.span
                            key={topic}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 + ti * 0.04, duration: 0.3 }}
                            viewport={{ once: true }}
                            className="px-3 py-1.5 rounded-xl bg-background/70 border border-border/60 text-xs font-medium text-foreground hover:bg-background transition-colors cursor-default"
                          >
                            {topic}
                          </motion.span>
                        ))}
                      </div>

                      {/* Glow on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                        style={{ background: `radial-gradient(ellipse at 50% 0%, ${cluster.glow} 0%, transparent 70%)` }}
                      />
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Research Interests Detail */}
        <section className="section-padding bg-muted/20">
          <div className="container-max">
            <SectionLabel>Active Investigations</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-3xl sm:text-4xl text-foreground mt-2 mb-10">
                Current Research Projects
              </h2>
            </FadeIn>
            <div className="flex flex-col gap-4">
              {activeProjects.map((proj, i) => (
                <FadeIn key={proj.id} delay={i * 0.1}>
                  <div className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl border bg-card hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 font-mono text-xs font-bold text-muted-foreground pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-sm font-bold text-foreground">{proj.title}</h3>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {proj.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">{proj.description}</p>
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                        <GitBranch size={10} />
                        {proj.phase}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Research Interests grid reuse */}
        <section className="section-padding">
          <div className="container-max">
            <SectionLabel>Research Interests</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-3xl sm:text-4xl text-foreground mt-2 mb-10">
                Six Areas of Focus
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {researchInterests.map((item) => (
                <StaggerItem key={item.id}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`research-node bg-gradient-to-br ${item.color} ${item.borderColor}`}
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground mb-1.5">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-background/60 text-muted-foreground border border-border/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchPage;
