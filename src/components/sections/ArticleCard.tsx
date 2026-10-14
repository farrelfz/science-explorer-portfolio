import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, PenLine } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Writing } from "@/data/portfolio";

interface ArticleCardProps {
  article: Writing;
  /** Rendered heading level — `h2` on the writing index, `h3` inside the homepage preview. */
  headingLevel?: "h2" | "h3";
}

/**
 * Single source of truth for article cards, shared by WritingPreview (homepage)
 * and the /writing index.
 */
export function ArticleCard({ article, headingLevel = "h3" }: ArticleCardProps) {
  const Heading = headingLevel;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <article className="group flex h-full flex-col justify-between rounded-2xl border bg-card p-6 sm:p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-lg">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <Badge variant="secondary" className="text-[10px] font-mono font-bold uppercase tracking-wider">
              {article.category}
            </Badge>
            <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
              <Clock size={11} aria-hidden="true" /> {article.readingTime}
            </span>
          </div>

          <Heading className="mb-3 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-accent-text sm:text-xl">
            {article.title}
          </Heading>

          <p className="mb-6 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
          <span className="font-mono text-xs text-muted-foreground">{article.date}</span>
          <Link
            to={`/writing/${article.slug}`}
            className="group/link flex items-center gap-1.5 text-xs font-bold text-foreground transition-colors hover:text-accent"
          >
            <PenLine size={13} aria-hidden="true" />
            Read Article
            <ArrowRight
              size={12}
              aria-hidden="true"
              className="transition-transform group-hover/link:translate-x-0.5"
            />
          </Link>
        </div>
      </article>
    </motion.div>
  );
}
