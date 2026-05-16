import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { publications } from "@/data/portfolio";
import { FadeIn, SectionLabel, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { ArrowRight, BookMarked, ExternalLink, Quote } from "lucide-react";

const typeColors: Record<string, string> = {
  "Journal Article": "from-blue-500/15 to-indigo-500/15 border-blue-500/20 text-blue-600 dark:text-blue-400",
  "Conference Paper": "from-violet-500/15 to-purple-500/15 border-violet-500/20 text-violet-600 dark:text-violet-400",
};

export function Publications() {
  return (
    <section id="publications" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Academic Work</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-4xl sm:text-5xl text-foreground mt-2">
                Publications &{" "}
                <span className="text-gradient-warm">Research</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="left">
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group whitespace-nowrap"
            >
              View all publications
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Publications list */}
        <StaggerContainer className="flex flex-col gap-4">
          {publications.map((pub, i) => (
            <StaggerItem key={pub.id}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group flex flex-col sm:flex-row gap-5 p-6 rounded-2xl border bg-card hover:shadow-md transition-all duration-300"
              >
                {/* Index */}
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-xs font-bold text-muted-foreground font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold border bg-gradient-to-r ${typeColors[pub.type] || ""}`}>
                      {pub.type}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{pub.year}</span>
                  </div>

                  <h3 className="text-sm font-bold text-foreground leading-snug mb-2 group-hover:text-[hsl(180_70%_30%)] dark:group-hover:text-[hsl(180_70%_60%)] transition-colors">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-muted-foreground mb-1">
                    <span className="font-medium">{pub.authors}</span>
                  </p>
                  <p className="text-xs text-muted-foreground italic mb-3">{pub.journal}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span key={tag} className="badge-tag text-[10px]">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col items-center gap-2 flex-shrink-0">
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-lg border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                    title="View DOI"
                  >
                    <ExternalLink size={13} />
                  </a>
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                    title="Cite"
                  >
                    <Quote size={13} />
                  </button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
