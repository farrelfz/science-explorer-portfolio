import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/AnimationPrimitives";
import { ArrowRight, ExternalLink, Github, Layers, Zap } from "lucide-react";

const statusColors: Record<string, string> = {
  Active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Beta: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Complete: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  "In Development": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "Research Phase": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

const allCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "Projects — Farrel Dava | EdTech Builder";
  }, []);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-hero-light relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15 pointer-events-none" />
          <div className="container-max relative z-10">
            <FadeIn>
              <div className="label-science mb-6 w-fit">⚗️ Engineering Lab</div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-5 leading-tight">
                Things I've <span className="text-gradient-science">Built</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
                Six flagship products at the intersection of physics education, AI, and interactive simulation —
                each grounded in research and designed for real-world impact.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 border-b sticky top-[64px] z-30 bg-background/90 backdrop-blur-xl">
          <div className="container-max">
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-foreground text-background border-foreground"
                      : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-padding">
          <div className="container-max">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="group flex flex-col rounded-2xl border bg-card overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Gradient bar */}
                    <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

                    <div className="flex flex-col flex-1 p-7">
                      {/* Meta */}
                      <div className="flex items-center justify-between mb-5">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${statusColors[project.status]}`}>
                          {project.status}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                      </div>

                      <h2 className="text-xl font-bold text-foreground mb-1">{project.title}</h2>
                      <p className="text-xs font-medium text-muted-foreground mb-3">{project.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{project.summary}</p>

                      {/* Research basis excerpt */}
                      <div className="p-3.5 rounded-xl bg-muted/50 border border-border/60 mb-5">
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-bold text-muted-foreground shrink-0">Research basis:</span>
                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.researchBasis}</p>
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="flex flex-col gap-1.5 mb-5">
                        {project.impact.slice(0, 2).map((imp) => (
                          <div key={imp} className="flex items-start gap-2">
                            <Zap size={11} className="text-amber-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-muted-foreground">{imp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack.slice(0, 5).map((t) => (
                          <span key={t} className="badge-tag text-[10px]">{t}</span>
                        ))}
                        {project.techStack.length > 5 && (
                          <span className="badge-tag text-[10px]">+{project.techStack.length - 5}</span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <Link to={`/projects/${project.id}`}
                          className="flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-[hsl(180_70%_38%)] transition-colors group/l">
                          <Layers size={12} />
                          Full Case Study
                          <ArrowRight size={11} className="transition-transform group-hover/l:translate-x-0.5" />
                        </Link>
                        <div className="flex items-center gap-2 ml-auto">
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                              className="w-7 h-7 flex items-center justify-center rounded-lg border text-muted-foreground hover:text-foreground transition-all">
                              <Github size={12} />
                            </a>
                          )}
                          {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                              className="w-7 h-7 flex items-center justify-center rounded-lg border text-muted-foreground hover:text-foreground transition-all">
                              <ExternalLink size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
