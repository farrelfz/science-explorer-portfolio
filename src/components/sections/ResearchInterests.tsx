import { motion } from "framer-motion";
import { researchInterests } from "@/data/portfolio";
import { FadeIn, SectionLabel, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";

export function ResearchInterests() {
  return (
    <section id="research-interests" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel>Research Focus</SectionLabel>
          <FadeIn delay={0.1}>
            <h2 className="h-display text-4xl sm:text-5xl text-foreground mt-2 mb-4">
              Areas of <span className="text-gradient-primary">Investigation</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-base leading-relaxed">
              Six interconnected research clusters forming a coherent vision for
              transforming physics education through technology and rigorous inquiry.
            </p>
          </FadeIn>
        </div>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchInterests.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`research-node bg-gradient-to-br ${item.color} ${item.borderColor}`}
              >
                {/* Icon */}
                <div className="text-3xl">{item.icon}</div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-background/60 text-muted-foreground border border-border/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
