import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/AnimationPrimitives";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Target, Zap } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    if (project) document.title = `${project.title} — Farrel Dava`;
    else navigate("/projects");
  }, [project, navigate]);

  if (!project) return null;

  const currentIdx = projects.findIndex((p) => p.id === id);
  const prev = projects[currentIdx - 1];
  const next = projects[currentIdx + 1];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className={`absolute inset-0 opacity-10 dark:opacity-20 bg-gradient-to-br ${project.color} pointer-events-none`} />
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
          <div className="container-narrow relative z-10">
            <FadeIn>
              <Link to="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 group">
                <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" />
                All Projects
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `linear-gradient(135deg, ${project.color.split(" ")[1]?.replace("from-", "").replace("/", "")}, transparent)` }}>
                  {project.category}
                </span>
                <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1 className="h-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-3 leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">{project.subtitle}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                    style={{ background: "hsl(180 70% 35%)" }}>
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border text-foreground bg-card hover:bg-muted transition-all">
                    <Github size={14} /> Source Code
                  </a>
                )}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="pb-20">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 flex flex-col gap-10">

                {/* Overview */}
                <FadeIn>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs">01</span>
                      Overview
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </FadeIn>

                {/* Problem */}
                <FadeIn delay={0.1}>
                  <div className="p-6 rounded-2xl border-l-4 bg-rose-500/5 border-rose-500/40">
                    <h2 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                      <Target size={16} className="text-rose-500" />
                      Problem Statement
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                </FadeIn>

                {/* Research Basis */}
                <FadeIn delay={0.15}>
                  <div className="p-6 rounded-2xl border-l-4 bg-violet-500/5 border-violet-500/40">
                    <h2 className="text-base font-bold text-foreground mb-3">📚 Research Background</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.researchBasis}</p>
                  </div>
                </FadeIn>

                {/* Impact */}
                <FadeIn delay={0.2}>
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">Impact & Outcomes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.impact.map((imp, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-card">
                          <Zap size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground font-medium">{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-6">
                {/* Status */}
                <FadeIn direction="left">
                  <div className="p-5 rounded-2xl border bg-card">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">Project Info</h3>
                    <div className="flex flex-col gap-3">
                      <div>
                        <div className="text-[10px] text-muted-foreground mb-1">Status</div>
                        <span className="text-xs font-semibold text-foreground">{project.status}</span>
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground mb-1">Year</div>
                        <span className="text-xs font-semibold font-mono text-foreground">{project.year}</span>
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground mb-1">Category</div>
                        <span className="text-xs font-semibold text-foreground">{project.category}</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Tech Stack */}
                <FadeIn direction="left" delay={0.1}>
                  <div className="p-5 rounded-2xl border bg-card">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="badge-tag text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                {/* Tags */}
                <FadeIn direction="left" delay={0.2}>
                  <div className="p-5 rounded-2xl border bg-card">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">Research Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-[hsl(180_70%_38%/0.08)] text-[hsl(180_70%_30%)] dark:text-[hsl(180_70%_60%)] border border-[hsl(180_70%_38%/0.2)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Project navigation */}
        <section className="py-10 border-t">
          <div className="container-max">
            <div className="flex items-center justify-between gap-4">
              {prev ? (
                <Link to={`/projects/${prev.id}`}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
                  <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Previous</div>
                    <div className="text-sm font-semibold text-foreground">{prev.title}</div>
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link to={`/projects/${next.id}`}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group text-right">
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Next</div>
                    <div className="text-sm font-semibold text-foreground">{next.title}</div>
                  </div>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
