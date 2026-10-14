import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timeline } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/AnimationPrimitives";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Code2, FileText, GraduationCap, Star, Trophy, ChevronLeft, ChevronRight } from "lucide-react";

const typeConfig: Record<string, { icon: React.ReactNode; color: string; dot: string; gradient: string }> = {
  research:    { icon: <Star size={16} />,       color: "text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/20", dot: "bg-violet-500",  gradient: "from-violet-500 to-purple-500" },
  project:     { icon: <Code2 size={16} />,      color: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",        dot: "bg-blue-500",    gradient: "from-blue-500 to-indigo-500" },
  publication: { icon: <FileText size={16} />,   color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20", dot: "bg-emerald-500", gradient: "from-emerald-500 to-teal-500" },
  achievement: { icon: <Trophy size={16} />,     color: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",    dot: "bg-amber-500",   gradient: "from-amber-500 to-orange-500" },
  education:   { icon: <GraduationCap size={16} />, color: "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20",    dot: "bg-rose-500",    gradient: "from-rose-500 to-pink-500" },
};

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % timeline.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + timeline.length) % timeline.length);
  };

  const currentItem = timeline[activeIndex];
  const cfg = typeConfig[currentItem.type] ?? typeConfig.project;

  return (
    <section id="timeline" className="section-padding overflow-hidden">
      <div className="container-max mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-4xl sm:text-5xl text-foreground mt-2 mb-2">
                Milestones & <span className="text-accent-text">History</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                Key milestones in research, projects, publications, and education.
              </p>
            </FadeIn>
          </div>
          
          {/* Navigation Controls */}
          <FadeIn delay={0.3} className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              aria-label="Previous milestone"
              className="rounded-full"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              aria-label="Next milestone"
              className="rounded-full"
            >
              <ChevronRight />
            </Button>
          </FadeIn>
        </div>
      </div>

      <div className="container-max">
        <div className="relative h-[320px] sm:h-[280px] w-full max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "absolute inset-0 p-8 sm:p-10 rounded-2xl border bg-card overflow-hidden",
                currentItem.highlight && "ring-2 ring-accent/50"
              )}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cfg.gradient}`} />
              
              <div className="flex flex-col h-full justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-2xl font-black text-muted-foreground/60">{currentItem.year}</span>
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border ${cfg.color}`}>
                    {cfg.icon}
                    {currentItem.type.charAt(0).toUpperCase() + currentItem.type.slice(1)}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {currentItem.title}
                </h3>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {currentItem.description}
                </p>
                
                {/* Dot indicator */}
                <div className={`absolute bottom-6 right-6 size-3 rounded-full ${cfg.dot} opacity-50`} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Progress Dots */}
        <div className="flex justify-center items-center gap-1 mt-8">
          {timeline.map((_, i) => (
            <Button
              key={i}
              variant="ghost"
              onClick={() => {
                setDirection(i > activeIndex ? 1 : -1);
                setActiveIndex(i);
              }}
              className="size-11 rounded-full p-0 group/dot hover:bg-transparent"
              aria-label={`Go to milestone ${i + 1}`}
            >
              <span
                className={cn(
                  "block rounded-full transition-all duration-300",
                  i === activeIndex
                    ? "h-2 w-8 bg-accent"
                    : "size-2 bg-muted-foreground/30 group-hover/dot:bg-muted-foreground/50"
                )}
              />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
