import { motion } from "framer-motion";
import { timeline } from "@/data/portfolio";
import { FadeIn, SectionLabel } from "@/components/ui/AnimationPrimitives";
import { BookOpen, Code2, FileText, GraduationCap, Star, Trophy } from "lucide-react";

const typeIcons: Record<string, React.ReactNode> = {
  research: <Star size={14} />,
  project: <Code2 size={14} />,
  publication: <FileText size={14} />,
  achievement: <Trophy size={14} />,
  education: <GraduationCap size={14} />,
};

const typeColors: Record<string, string> = {
  research: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  project: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  publication: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  achievement: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  education: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

const dotColors: Record<string, string> = {
  research: "bg-violet-500",
  project: "bg-blue-500",
  publication: "bg-emerald-500",
  achievement: "bg-amber-500",
  education: "bg-rose-500",
};

export function TimelineSection() {
  return (
    <section id="timeline" className="section-padding bg-muted/20">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <SectionLabel>Journey</SectionLabel>
          <FadeIn delay={0.1}>
            <h2 className="h-display text-4xl sm:text-5xl text-foreground mt-2">
              The <span className="text-gradient-primary">Timeline</span>
            </h2>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(180_70%_38%)] via-border to-transparent" />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content block */}
                  <div className={`pl-16 sm:pl-0 sm:w-[calc(50%-28px)] ${isLeft ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className={`p-4 rounded-2xl border bg-card hover:shadow-md transition-all duration-300 ${item.highlight ? "border-foreground/10" : ""}`}
                    >
                      {/* Year + type */}
                      <div className={`flex items-center gap-2 mb-2 ${isLeft ? "sm:justify-end" : ""}`}>
                        <span className="font-mono text-xs font-bold text-muted-foreground">{item.year}</span>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${typeColors[item.type]}`}>
                          {typeIcons[item.type]}
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-foreground mb-1.5">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-4 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full border-2 border-background ${dotColors[item.type]} ${item.highlight ? "w-4 h-4 shadow-md" : ""}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
