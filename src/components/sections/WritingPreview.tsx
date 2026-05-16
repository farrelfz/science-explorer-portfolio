import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { writingArticles } from "@/data/portfolio";
import { FadeIn, SectionLabel, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { ArrowRight, Clock, PenLine } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Education Policy": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  "AI & Learning": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  "Simulation & Learning": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  "Pedagogy": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "Research & Policy": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "Behind the Build": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  "Science Communication": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  "Learning Science": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "Poetry": "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  "Short Story": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  "Berita & Artikel": "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
};

export function WritingPreview() {
  const featured = writingArticles.filter((a) => a.featured).slice(0, 3);

  return (
    <section id="writing" className="section-padding bg-muted/20">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Writing</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-4xl sm:text-5xl text-foreground mt-2 leading-tight">
                Essays &{" "}
                <span className="h-editorial italic text-gradient-warm">Perspectives</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm text-muted-foreground mt-3 max-w-md leading-relaxed">
                Not academic papers. Honest thinking about physics education, AI, learning science,
                and the future of how we understand the world.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} direction="left">
            <Link
              to="/writing"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group whitespace-nowrap"
            >
              All {writingArticles.length} articles
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Featured grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((article) => (
            <StaggerItem key={article.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex flex-col h-full p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300"
              >
                {/* Meta */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold border ${categoryColors[article.category] || ""}`}>
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono ml-auto">
                    <Clock size={9} /> {article.readingTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-foreground leading-snug mb-3 flex-1 group-hover:text-[hsl(263_70%_50%)] dark:group-hover:text-[hsl(263_70%_70%)] transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-border">
                  <span className="text-[10px] font-mono text-muted-foreground">{article.date}</span>
                  <Link
                    to={article.url}
                    className="ml-auto flex items-center gap-1 text-xs font-bold text-foreground hover:text-[hsl(263_70%_50%)] transition-colors group/link"
                  >
                    <PenLine size={11} />
                    Read
                    <ArrowRight size={11} className="transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
