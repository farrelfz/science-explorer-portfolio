import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { getIcon } from "@/lib/icons";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

/**
 * Recognition — awards, funding, and selected programmes.
 *
 * Deliberately NOT a second pass over `projects`: the homepage already shows
 * every flagship project in FeaturedProjects. This surface carries a different
 * content set (achievements) so the visitor learns something new instead of
 * re-reading titles they already scrolled past.
 */
export function Recognition() {
  return (
    <section id="recognition" className="section-padding border-t bg-muted/20">
      <div className="container-max">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-3xl text-foreground sm:text-4xl">
                Awards &amp; <span className="text-accent-text">Recognition</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Kompetisi ilmiah nasional, pendanaan program mahasiswa, dan program
                terpilih yang mendanai dan mengakui kerja penelitian serta
                pengembangan produk pendidikan ini.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-accent-text hover:underline"
            >
              Full Experience &amp; Awards
              <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <StaggerItem key={item.id}>
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="flex h-full flex-col gap-3 rounded-2xl border bg-card p-6 transition-colors duration-300 hover:border-accent/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-text">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <Badge variant="secondary" className="shrink-0 text-[10px] font-semibold uppercase tracking-wider">
                      {item.level}
                    </Badge>
                  </div>

                  <h3 className="text-sm font-bold leading-snug text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-auto text-xs text-muted-foreground">
                    {item.organizer} · {item.year}
                  </p>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
