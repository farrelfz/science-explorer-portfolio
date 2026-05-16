import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { publications, profile } from "@/data/portfolio";
import { FadeIn, SectionLabel, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { ArrowRight, BookMarked, ExternalLink, Quote, GraduationCap, Library, BookOpen } from "lucide-react";

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

        {/* Academic Profile */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm mb-12">
            <div className="w-24 h-24 rounded-2xl bg-muted border overflow-hidden flex-shrink-0">
              <img src="/avatar-placeholder.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1">Farrel Dava</h3>
              <p className="text-sm text-muted-foreground mb-4">Physics Education Researcher • Universitas Sebelas Maret</p>
              <div className="flex flex-wrap gap-4 text-xs font-medium">
                <a href={profile.socials.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-emerald-500 transition-colors">
                  <GraduationCap size={14} /> Google Scholar
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-green-500 transition-colors">
                  <Library size={14} /> ORCID: 0000-0002-XXXX-XXXX
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-blue-500 transition-colors">
                  <BookOpen size={14} /> ResearchGate
                </a>
              </div>
            </div>
            <div className="flex flex-row md:flex-col gap-4 md:text-right w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-border md:pl-8 mt-4 md:mt-0">
              <div>
                <div className="text-2xl font-black text-foreground">12</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Citations</div>
              </div>
              <div>
                <div className="text-2xl font-black text-foreground">3</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">H-Index</div>
              </div>
            </div>
          </div>
        </FadeIn>

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
