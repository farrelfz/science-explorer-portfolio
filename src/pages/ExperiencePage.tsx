import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { experiences } from "@/data/portfolio";
import { FadeIn, SectionLabel } from "@/components/ui/AnimationPrimitives";
import { Award, BookOpen, GraduationCap, Trophy, Users } from "lucide-react";

const typeConfig: Record<string, { label: string; icon: typeof Award; color: string; accent: string }> = {
  achievement: {
    label: "Achievements",
    icon: Trophy,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    accent: "from-amber-500 to-orange-500",
  },
  training: {
    label: "Training & Certifications",
    icon: BookOpen,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    accent: "from-blue-500 to-cyan-500",
  },
  organization: {
    label: "Organizations",
    icon: Users,
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    accent: "from-indigo-500 to-blue-500",
  },
};

const categories = ["All", "achievement", "training", "organization"] as const;
type Category = (typeof categories)[number];

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState<Category>("All");

  useEffect(() => {
    document.title = "Experience — Muhamad Farrel Dava Fauzan";
  }, []);

  const filtered = activeTab === "All" ? experiences : experiences.filter((e) => e.type === activeTab);

  const counts = Object.fromEntries(
    categories.slice(1).map((c) => [c, experiences.filter((e) => e.type === c).length])
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-14 bg-hero-light relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15 pointer-events-none" />
          <div className="container-max relative z-10">
            <FadeIn>
              <div className="label-science mb-6 w-fit flex items-center gap-1.5">
                <GraduationCap size={12} />
                Academic & Non-Academic
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-5 leading-tight">
                Experience &{" "}
                <span className="text-gradient-science">Achievements</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
                Pelatihan, sertifikasi, pencapaian kompetisi, dan keterlibatan organisasi
                yang relevan selama masa perkuliahan — semua linear dengan riset,
                teknologi pendidikan, dan analitik data.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Summary row */}
        <section className="py-8 border-b bg-card/50">
          <div className="container-max">
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              {(Object.entries(typeConfig) as [string, typeof typeConfig[string]][]).map(([key, cfg]) => {
                const Icon = cfg.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as Category)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-200 ${
                      activeTab === key ? `${cfg.color} scale-105` : "bg-card hover:bg-muted/50"
                    }`}
                  >
                    <Icon size={18} className={activeTab === key ? "" : "text-muted-foreground"} />
                    <span className="text-lg font-extrabold">{counts[key]}</span>
                    <span className="text-[10px] text-center font-medium text-muted-foreground leading-tight">{cfg.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="py-6 border-b sticky top-[64px] z-30 bg-background/90 backdrop-blur-xl">
          <div className="container-max">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const label = cat === "All" ? "All" : typeConfig[cat].label;
                const count = cat === "All" ? experiences.length : counts[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border inline-flex items-center gap-1.5 ${
                      activeTab === cat
                        ? "bg-foreground text-background border-foreground"
                        : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                    }`}
                  >
                    {label}
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono ${activeTab === cat ? "bg-background/20" : "bg-muted"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="section-padding">
          <div className="container-max">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((exp, i) => {
                  const cfg = typeConfig[exp.type] ?? typeConfig.training;
                  const Icon = cfg.icon;
                  return (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="group flex flex-col h-full p-6 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    >
                      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${exp.color}`} />

                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{exp.icon}</div>
                        <span className="font-mono text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                          {exp.year}
                        </span>
                      </div>

                      <span className={`inline-flex items-center gap-1 w-fit px-2.5 py-1 rounded-full text-[10px] font-bold border mb-3 ${cfg.color}`}>
                        <Icon size={10} /> {cfg.label}
                      </span>

                      <h3 className="text-sm font-bold text-foreground leading-snug mb-1 group-hover:text-[hsl(180_70%_38%)] dark:group-hover:text-[hsl(180_70%_60%)] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground mb-3 font-medium">{exp.organization}</p>

                      <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[9px] font-medium bg-muted text-muted-foreground border border-border/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
