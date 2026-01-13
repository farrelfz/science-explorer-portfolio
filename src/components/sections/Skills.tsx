import { Code2, Server, Wrench, Atom, FlaskConical } from "lucide-react";
import { skills } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const skillCategories = [
  { key: "frontend" as const, label: "Frontend", icon: Code2 },
  { key: "backend" as const, label: "Backend", icon: Server },
  { key: "simulation" as const, label: "Simulasi", icon: Atom },
  { key: "tools" as const, label: "Tools", icon: Wrench },
  { key: "research" as const, label: "Research", icon: FlaskConical },
];

export function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <span 
            className={cn(
              "inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
          >
            Keahlian
          </span>
          <h2 
            className={cn(
              "heading-2 text-foreground mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Tech Stack & Skills
          </h2>
          <p 
            className={cn(
              "body-large max-w-2xl mx-auto opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Teknologi dan keahlian yang saya gunakan untuk membangun produk edtech
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.key}
                className={cn(
                  "card-elevated p-6 opacity-0",
                  isInView && "animate-fade-in"
                )}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills[category.key].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
