import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { publications } from "@/data/portfolio";
import { FadeIn, SectionLabel, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";

const typeColors: Record<string, string> = {
  "Journal Article": "from-blue-500/15 to-indigo-500/15 border-blue-500/20 text-blue-600 dark:text-blue-400",
  "Conference Paper": "from-violet-500/15 to-purple-500/15 border-violet-500/20 text-violet-600 dark:text-violet-400",
};

const PublicationsPage = () => {
  useEffect(() => {
    document.title = "Publications — Farrel Dava | Physics Education Researcher";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-hero-light relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15 pointer-events-none" />
          <div className="container-max relative z-10">
            <FadeIn>
              <div className="label-research mb-6 w-fit">📄 Academic Output</div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-5 leading-tight">
                Publications &{" "}
                <span className="text-gradient-warm">Research</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
                Peer-reviewed articles, conference proceedings, and academic contributions
                at the intersection of physics education, AI, and learning technology.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-max">
            <StaggerContainer className="flex flex-col gap-5">
              {publications.map((pub, i) => (
                <StaggerItem key={pub.id}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="group flex gap-4 p-7 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300"
                  >
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold border bg-gradient-to-r ${typeColors[pub.type] || ""}`}>
                          {pub.type}
                        </span>
                        <span className="text-xs font-bold font-mono text-muted-foreground">{pub.year}</span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {pub.status}
                        </span>
                      </div>

                      <h2 className="text-base font-bold text-foreground leading-snug mb-2 group-hover:text-[hsl(180_70%_30%)] dark:group-hover:text-[hsl(180_70%_60%)] transition-colors">
                        {pub.title}
                      </h2>

                      <p className="text-xs text-muted-foreground mb-1">
                        <span className="font-semibold">{pub.authors}</span>
                      </p>
                      <p className="text-xs text-muted-foreground italic mb-4">{pub.journal}</p>

                      {pub.abstract && (
                        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3 border-l-2 border-border pl-3">
                          {pub.abstract}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-1.5">
                        {pub.tags.map((tag) => (
                          <span key={tag} className="badge-tag text-[10px]">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-xl border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                        title="View Publication">
                        <ExternalLink size={14} />
                      </a>
                      <button
                        className="w-9 h-9 flex items-center justify-center rounded-xl border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                        title="Cite"
                        onClick={() => {
                          const citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}. https://doi.org/${pub.doi}`;
                          navigator.clipboard?.writeText(citation);
                        }}
                      >
                        <Quote size={14} />
                      </button>
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

export default PublicationsPage;
