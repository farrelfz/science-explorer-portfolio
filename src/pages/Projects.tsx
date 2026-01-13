import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, categories, siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type Project = typeof projects[0];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.title = `Proyek | ${siteConfig.name}`;
  }, []);

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects;
    return projects.filter((p) => p.category.includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container-wide">
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>

            <h1 className="heading-1 text-foreground mb-4">Semua Proyek</h1>
            <p className="body-large max-w-2xl">
              Koleksi proyek yang mencakup pengembangan web, simulasi fisika, platform edukasi, dan riset pendidikan.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                !selectedCategory
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              Semua
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group card-elevated overflow-hidden cursor-pointer opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-cta/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-accent/30">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-1 bg-cta text-cta-foreground text-xs font-medium rounded">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.category.map((cat) => (
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
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="badge-tech text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="badge-tech text-xs">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Tidak ada proyek dalam kategori ini.</p>
            </div>
          )}
        </div>
      </main>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedProject.category.map((cat) => (
                    <span key={cat} className="badge-category text-xs">
                      {cat}
                    </span>
                  ))}
                </div>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.summary}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-cta/20 rounded-lg flex items-center justify-center">
                  <span className="text-6xl font-bold text-accent/30">
                    {selectedProject.title.charAt(0)}
                  </span>
                </div>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">🎯 Problem</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.problem}</p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">💡 Solution</h4>
                    <p className="text-sm text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Role */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">👤 My Role</h4>
                  <p className="text-muted-foreground">{selectedProject.role}</p>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">📈 Impact & Results</h4>
                  <ul className="space-y-2">
                    {selectedProject.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">🛠 Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="badge-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  {selectedProject.demoUrl && (
                    <Button asChild>
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button variant="outline" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;
