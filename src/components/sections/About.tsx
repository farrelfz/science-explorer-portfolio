import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { FadeIn, SectionLabel } from "@/components/ui/AnimationPrimitives";
import { GraduationCap, MapPin, Microscope, Sparkles } from "lucide-react";

const identityPillars = [
  { icon: Microscope, label: "Researcher", desc: "Physics Education & Learning Science" },
  { icon: GraduationCap, label: "Educator", desc: "Pedagogy & Curriculum Design" },
  { icon: Sparkles, label: "Builder", desc: "EdTech Platforms & AI Tools" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual identity block */}
          <FadeIn direction="right">
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 p-8 rounded-3xl border bg-card shadow-xl">
                {/* Avatar placeholder + initials */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, hsl(180 70% 38%), hsl(217 91% 60%), hsl(263 70% 60%))" }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">FD</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Muhamad Farrel Dava Fauzan</div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                      <MapPin size={11} />
                      {profile.location}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{profile.department} · {profile.institution}</div>
                  </div>
                </div>

                {/* Identity pillars */}
                <div className="flex flex-col gap-3">
                  {identityPillars.map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(180_70%_38%/0.15)] to-[hsl(217_91%_60%/0.15)] flex items-center justify-center">
                        <Icon size={15} className="text-[hsl(180_70%_35%)] dark:text-[hsl(180_70%_55%)]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground">{label}</div>
                        <div className="text-[10px] text-muted-foreground">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative orbs */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 dark:opacity-10 blur-xl pointer-events-none"
                  style={{ background: "hsl(263 70% 60%)" }} />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-15 dark:opacity-10 blur-2xl pointer-events-none"
                  style={{ background: "hsl(217 91% 60%)" }} />
              </div>

              {/* Floating stat pills */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-8 z-20 px-4 py-2.5 rounded-2xl border bg-card shadow-lg"
              >
                <div className="text-xs font-bold text-foreground">{profile.stats.studentsImpacted}</div>
                <div className="text-[10px] text-muted-foreground">Students Reached</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-6 bottom-16 z-20 px-4 py-2.5 rounded-2xl border bg-card shadow-lg"
              >
                <div className="text-xs font-bold text-foreground">{profile.stats.publications} Papers</div>
                <div className="text-[10px] text-muted-foreground">Published</div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right: bio */}
          <div>
            <SectionLabel>About</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-4xl sm:text-5xl text-foreground mt-2 mb-6 leading-tight">
                At the Edge of{" "}
                <span className="h-editorial italic text-gradient-primary">Physics</span>
                {" "}&{" "}
                <span className="h-editorial italic text-gradient-science">Technology</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {profile.bio}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                My interdisciplinary work spans <strong className="text-foreground font-semibold">Physics Education Research</strong>,{" "}
                <strong className="text-foreground font-semibold">AI-augmented learning systems</strong>,{" "}
                <strong className="text-foreground font-semibold">interactive simulation engineering</strong>, and{" "}
                <strong className="text-foreground font-semibold">human-centered EdTech product design</strong>.
                Every project I undertake is grounded in evidence, driven by curiosity, and designed for real impact.
              </p>
            </FadeIn>

            {/* Core identity tags */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-2">
                {[
                  "Physics Education",
                  "AI in Education",
                  "Learning Science",
                  "HCI",
                  "Interactive Simulation",
                  "Scientific Visualization",
                  "Research Automation",
                  "Product Strategy",
                ].map((tag) => (
                  <span key={tag} className="badge-tag text-xs">{tag}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
