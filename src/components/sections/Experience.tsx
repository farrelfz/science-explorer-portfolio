import { Briefcase, Building2, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <span 
            className={cn(
              "inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
          >
            Pengalaman
          </span>
          <h2 
            className={cn(
              "heading-2 text-foreground mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Perjalanan Profesional
          </h2>
          <p 
            className={cn(
              "body-large max-w-2xl mx-auto opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Pengalaman dalam pengembangan teknologi pendidikan dan riset
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={cn(
                "relative pl-8 pb-12 last:pb-0 opacity-0",
                isInView && "animate-fade-in"
              )}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/20" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <Briefcase className="h-3 w-3 text-accent-foreground" />
              </div>

              {/* Content Card */}
              <div className="card-elevated p-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
