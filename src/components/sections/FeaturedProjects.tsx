import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding bg-muted/20 border-t">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2">
                Flagship <span className="text-accent-text">Projects</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mt-2 leading-relaxed">
                Sistem perangkat lunak riset, knowledge graph, analitik diskursus ilmiah, dan platform pembelajaran fisika interaktif berbasis bukti empiris.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent-text hover:underline whitespace-nowrap"
            >
              View Full Architecture &amp; Projects
              <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Projects grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} variant="featured" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
