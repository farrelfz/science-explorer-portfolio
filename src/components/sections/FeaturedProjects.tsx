import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FadeIn, SectionLabel, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { ArrowRight, ExternalLink, Github, Layers, Zap } from "lucide-react";

const statusColors: Record<string, string> = {
  Active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Beta: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Complete: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  "In Development": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "Research Phase": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Flagship Projects</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-4xl sm:text-5xl text-foreground mt-2 leading-tight">
                Things I've <span className="text-gradient-science">Built</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="left">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group whitespace-nowrap"
            >
              View all projects
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Projects grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isLarge = index === 0;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative flex flex-col rounded-2xl border bg-card overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
        isLarge ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Gradient header */}
      <div
        className={`h-2 w-full bg-gradient-to-r ${project.color} opacity-80`}
      />

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${statusColors[project.status] || ""}`}>
            {project.status}
          </span>
          <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-1 leading-snug group-hover:text-gradient-science transition-all">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-muted-foreground mb-3">{project.subtitle}</p>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
          {project.summary}
        </p>

        {/* Impact bullets */}
        {project.impact.slice(0, 2).map((imp) => (
          <div key={imp} className="flex items-start gap-2 mb-1.5">
            <Zap size={11} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <span className="text-xs text-muted-foreground">{imp}</span>
          </div>
        ))}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="badge-tag text-[11px]">{tech}</span>
          ))}
          {project.techStack.length > 4 && (
            <span className="badge-tag text-[11px]">+{project.techStack.length - 4}</span>
          )}
        </div>

        {/* Footer actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-[hsl(180_70%_38%)] transition-colors group/link"
          >
            <Layers size={12} />
            Case Study
            <ArrowRight size={11} className="transition-transform group-hover/link:translate-x-0.5" />
          </Link>
          <div className="flex items-center gap-2 ml-auto">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-lg border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
                <Github size={12} />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center rounded-lg border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all">
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
