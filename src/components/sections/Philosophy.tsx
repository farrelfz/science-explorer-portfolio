import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/AnimationPrimitives";
import { getIcon } from "@/lib/icons";
import { Quote } from "lucide-react";

export function Philosophy() {
  return (
    <section id="philosophy" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: label + header */}
          <div>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-4xl sm:text-5xl lg:text-[3.5rem] text-foreground mb-6 leading-[1.05]">
                A Philosophy
                <br />
                <span className="text-accent-text">of Learning</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                My work at the intersection of physics, AI, and education is guided by a set of
                deeply held convictions about how humans learn, how technology should serve learning,
                and what education should ultimately enable.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-5 rounded-2xl border bg-card">
                <Quote size={20} className="text-muted-foreground/40 mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "The goal of education is not to fill a bucket but to light a fire — and in physics,
                  every equation is a window into a universe that can be experienced, not just calculated."
                </p>
                <p className="text-xs font-medium text-muted-foreground/60 mt-3">— Farrel Dava</p>
              </div>
            </FadeIn>
          </div>

          {/* Right: philosophy pillars */}
          <div className="flex flex-col gap-4">
            {profile.philosophy.map((item, i) => {
              const Icon = getIcon(item.icon);
              return (
              <FadeIn key={item.id} delay={i * 0.12} direction="left">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex gap-5 p-5 rounded-2xl border bg-card hover:border-accent/40 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 size-12 rounded-xl flex items-center justify-center"
                    style={{ background: "hsl(var(--muted))" }}>
                    <Icon size={20} className="text-accent-text" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1.5 leading-snug">
                      {item.statement}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.elaboration}
                    </p>
                  </div>

                  {/* Indicator line */}
                  <div className="ml-auto self-stretch w-0.5 rounded-full bg-muted group-hover:bg-gradient-to-b group-hover:from-accent group-hover:to-[hsl(217_91%_60%)] transition-all duration-300 min-w-[2px]" />
                </motion.div>
              </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
