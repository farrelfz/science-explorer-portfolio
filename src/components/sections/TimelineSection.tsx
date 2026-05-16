import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "@/data/portfolio";
import { FadeIn, SectionLabel } from "@/components/ui/AnimationPrimitives";
import { Code2, FileText, GraduationCap, Star, Trophy } from "lucide-react";

const typeConfig: Record<string, { icon: React.ReactNode; color: string; dot: string; gradient: string }> = {
  research:    { icon: <Star size={14} />,       color: "text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/20", dot: "bg-violet-500",  gradient: "from-violet-500 to-purple-500" },
  project:     { icon: <Code2 size={14} />,      color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",        dot: "bg-blue-500",    gradient: "from-blue-500 to-indigo-500" },
  publication: { icon: <FileText size={14} />,   color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20", dot: "bg-emerald-500", gradient: "from-emerald-500 to-teal-500" },
  achievement: { icon: <Trophy size={14} />,     color: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",    dot: "bg-amber-500",   gradient: "from-amber-500 to-orange-500" },
  education:   { icon: <GraduationCap size={14} />, color: "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20",    dot: "bg-rose-500",    gradient: "from-rose-500 to-pink-500" },
};

function TimelineCard({ item, index }: { item: (typeof timeline)[number]; index: number }) {
  const cfg = typeConfig[item.type] ?? typeConfig.project;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative flex-shrink-0 w-72 sm:w-80 p-5 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 overflow-hidden ${item.highlight ? "ring-1 ring-border" : ""}`}
    >
      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cfg.gradient}`} />

      {/* Year */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs font-bold text-muted-foreground">{item.year}</span>
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${cfg.color}`}>
          {cfg.icon}
          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
        </span>
      </div>

      <h3 className="text-sm font-bold text-foreground mb-1.5 group-hover:text-[hsl(180_70%_35%)] dark:group-hover:text-[hsl(180_70%_60%)] transition-colors leading-snug">
        {item.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>

      {/* Dot indicator */}
      <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full ${cfg.dot} opacity-50`} />
    </motion.div>
  );
}

export function TimelineSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="timeline" className="section-padding overflow-hidden">
      <div className="container-max mb-8">
        <SectionLabel>Journey</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="h-display text-4xl sm:text-5xl text-foreground mt-2 mb-2">
            The <span className="text-gradient-primary">Timeline</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Key milestones in research, projects, publications, and education.
          </p>
        </FadeIn>
      </div>

      {/* Horizontal scroll container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-6 px-6 md:px-12 no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {timeline.map((item, i) => (
            <div key={item.id} style={{ scrollSnapAlign: "start" }}>
              <TimelineCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
