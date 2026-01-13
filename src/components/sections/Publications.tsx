import { FileText, Award, ExternalLink, Trophy } from "lucide-react";
import { publications, achievements } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Publications() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="publications" className="section-padding">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <span 
            className={cn(
              "inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
          >
            Publikasi & Penghargaan
          </span>
          <h2 
            className={cn(
              "heading-2 text-foreground mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Kontribusi & Pencapaian
          </h2>
          <p 
            className={cn(
              "body-large max-w-2xl mx-auto opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Publikasi riset dan penghargaan yang telah diraih
          </p>
        </div>

        <div 
          className={cn(
            "max-w-4xl mx-auto opacity-0",
            isInView && "animate-fade-in"
          )}
          style={{ animationDelay: "0.3s" }}
        >
          <Tabs defaultValue="publications" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="publications" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Publikasi
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Penghargaan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="publications" className="space-y-4">
              {publications.map((pub) => (
                <div
                  key={pub.id}
                  className="card-elevated p-5 group hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="badge-tech">{pub.type}</span>
                        <span className="text-sm text-muted-foreground">{pub.year}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                      <p className="text-sm text-accent">{pub.journal}</p>
                    </div>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg hover:bg-accent/10 transition-colors"
                      aria-label="View DOI"
                    >
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-accent" />
                    </a>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="card-elevated p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cta/20 to-accent/20 flex items-center justify-center">
                      <Award className="h-6 w-6 text-cta" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-accent">{ach.year}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{ach.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{ach.organization}</p>
                      <p className="text-sm text-muted-foreground">{ach.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
