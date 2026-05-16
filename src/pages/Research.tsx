import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { researchInterests } from "@/data/portfolio";
import { FadeIn, SectionLabel, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { ArrowRight, BookOpen, FlaskConical, GitBranch, Lightbulb, Network } from "lucide-react";

const researchClusters = [
  {
    id: "rc-1",
    title: "Human Learning & Cognition",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/20",
    topics: ["Conceptual Understanding", "Misconception Analysis", "Cognitive Load", "Mental Models", "Schema Theory"],
  },
  {
    id: "rc-2",
    title: "AI & Intelligent Systems",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
    topics: ["Intelligent Tutoring", "Adaptive Learning", "NLP in Education", "LLM Alignment", "AI Safety in EdTech"],
  },
  {
    id: "rc-3",
    title: "Interactive Technology",
    color: "from-cyan-500/20 to-teal-500/20",
    border: "border-cyan-500/20",
    topics: ["Physics Simulation", "WebGL Rendering", "Real-time Systems", "Scientific Visualization", "Virtual Labs"],
  },
  {
    id: "rc-4",
    title: "Assessment & Analytics",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
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
              <h2 className="h-display text-3xl sm:text-4xl text-foreground mt-2 mb-10">
                Four Interconnected Domains
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {researchClusters.map((cluster) => (
                <StaggerItem key={cluster.id}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className={`p-6 rounded-2xl border bg-gradient-to-br ${cluster.color} ${cluster.border} transition-all duration-300 hover:shadow-lg`}
                  >
                    <h3 className="text-base font-bold text-foreground mb-4">{cluster.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cluster.topics.map((topic) => (
                        <span key={topic} className="px-2.5 py-1 rounded-lg bg-background/60 text-xs font-medium text-foreground border border-border/60">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
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
