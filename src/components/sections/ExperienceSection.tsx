import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { FadeIn, SectionLabel, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { Award, BookOpen, GraduationCap, Link, Users } from "lucide-react";

const typeConfig: Record<string, { label: string; icon: typeof Award; color: string }> = {
  achievement: { label: "Achievement", icon: Award, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  training:    { label: "Training & Certification", icon: BookOpen, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
  organization:{ label: "Organization", icon: Users, color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Experience & Achievements</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-4xl sm:text-5xl text-foreground mt-2 leading-tight">
                Journey Through{" "}
                <span className="h-editorial italic text-gradient-science">University</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm text-muted-foreground mt-3 max-w-lg leading-relaxed">
                Pelatihan, pencapaian, dan keterlibatan organisasi yang relevan dengan riset,
                teknologi pendidikan, dan analitik data selama masa perkuliahan.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {experiences.map((exp) => {
            const cfg = typeConfig[exp.type] ?? typeConfig.training;
            const Icon = cfg.icon;
            return (
              <StaggerItem key={exp.id}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex flex-col h-full p-5 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradient top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.color}`} />

                  {/* Icon + Year */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{exp.icon}</div>
                    <span className="font-mono text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                      {exp.year}
                    </span>
                  </div>

                  {/* Type badge */}
                  <span className={`inline-flex items-center gap-1 w-fit px-2 py-0.5 rounded-full text-[9px] font-bold border mb-3 ${cfg.color}`}>
                    <Icon size={9} /> {cfg.label}
                  </span>

                  {/* Title & Org */}
                  <h3 className="text-sm font-bold text-foreground leading-snug mb-1 group-hover:text-[hsl(180_70%_38%)] dark:group-hover:text-[hsl(180_70%_60%)] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mb-3 font-medium">{exp.organization}</p>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md text-[9px] font-medium bg-muted text-muted-foreground border border-border/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
