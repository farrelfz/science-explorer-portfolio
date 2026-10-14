import { Link } from "react-router-dom";
import { writings } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { ArrowRight } from "lucide-react";

export function WritingPreview() {
  return (
    <section id="writing" className="section-padding bg-muted/20 border-t">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-3xl sm:text-4xl text-foreground mt-2 leading-tight">
                Writing &amp; <span className="h-editorial italic text-accent-text">Perspectives</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl leading-relaxed">
                Pemikiran kritis mengenai perubahan konseptual fisika, etika epistemik AI dalam penelitian, dan dinamika komunikasi sains publik.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="left">
            <Link
              to="/writing"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-text hover:underline whitespace-nowrap"
            >
              View All Articles
              <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {writings.map((article) => (
            <StaggerItem key={article.id}>
              <ArticleCard article={article} headingLevel="h3" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
