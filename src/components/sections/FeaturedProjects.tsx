import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, callout } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="section-padding">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <span 
            className={cn(
              "inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
          >
            Proyek Unggulan
          </span>
          <h2 
            className={cn(
              "heading-2 text-foreground mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Karya Terbaru
          </h2>
          <p 
            className={cn(
              "body-large max-w-2xl mx-auto opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Proyek-proyek yang menggabungkan teknologi modern dengan pedagogi berbasis riset
          </p>
        </div>

        {/* Callout Banner */}
        <div 
          className={cn(
            "bg-gradient-to-r from-accent/10 via-accent/5 to-cta/10 rounded-2xl p-6 md:p-8 mb-12 border border-accent/20 opacity-0",
            isInView && "animate-fade-in"
          )}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {callout.title}
              </h3>
              <p className="text-muted-foreground">{callout.description}</p>
            </div>
            <Button
              variant="outline"
              className="whitespace-nowrap border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {callout.cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group card-elevated overflow-hidden opacity-0",
                isInView && "animate-fade-in"
              )}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-cta/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent/30">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.slice(0, 2).map((cat) => (
                    <span key={cat} className="text-xs font-medium text-accent">
                      {cat}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.summary}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="badge-tech text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {project.demoUrl && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div 
          className={cn(
            "text-center opacity-0",
            isInView && "animate-fade-in"
          )}
          style={{ animationDelay: "0.7s" }}
        >
          <Button asChild size="lg" variant="outline">
            <Link to="/projects">
              Lihat Semua Proyek
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
