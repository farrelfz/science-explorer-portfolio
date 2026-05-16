import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { writingArticles } from "@/data/portfolio";
import { FadeIn, SectionLabel, StaggerContainer, StaggerItem } from "@/components/ui/AnimationPrimitives";
import { ArrowRight, BookOpen, Clock, PenLine } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Education Policy": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  "AI & Learning": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  "Simulation & Learning": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  "Pedagogy": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  "Research & Policy": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "Behind the Build": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  "Science Communication": "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  "Learning Science": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
};

const allCategories = ["All", ...Array.from(new Set(writingArticles.map((a) => a.category)))];

const WritingPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "Writing — Farrel Dava | Physics Education & Learning Science";
  }, []);

  const filtered = activeCategory === "All"
    ? writingArticles
    : writingArticles.filter((a) => a.category === activeCategory);

  const featured = writingArticles.filter((a) => a.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-hero-light relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15 pointer-events-none" />
          <div className="container-max relative z-10">
            <FadeIn>
              <div className="label-research mb-6 w-fit flex items-center gap-1.5">
                <PenLine size={12} />
                Essays & Perspectives
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-5 leading-tight">
                Writing &{" "}
                <span className="text-gradient-warm">Insights</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                Essays, perspectives, and science communication on physics education, AI, learning science,
                and the future of how we understand the world. Not academic papers — just honest thinking.
              </p>
            </FadeIn>

            {/* Distinction note */}
            <FadeIn delay={0.3}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
                {[
                  { icon: "🔬", label: "Research", desc: "Active investigations & ongoing studies", href: "/research" },
                  { icon: "📄", label: "Publications", desc: "Peer-reviewed & DOI-indexed papers", href: "/publications" },
                  { icon: "✍️", label: "Writing", desc: "Essays, perspectives & science comm.", href: "/writing", active: true },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all duration-200 ${
                      item.active
                        ? "border-[hsl(180_70%_38%/0.4)] bg-[hsl(180_70%_38%/0.06)]"
                        : "border-border hover:border-foreground/20 hover:bg-muted/50"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <div className={`text-xs font-bold ${item.active ? "text-[hsl(180_70%_30%)] dark:text-[hsl(180_70%_60%)]" : "text-foreground"}`}>
                        {item.label}
                      </div>
                      <div className="text-[10px] text-muted-foreground">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Featured articles */}
        <section className="section-padding-sm border-b">
          <div className="container-max">
            <SectionLabel>Featured</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-3xl text-foreground mt-2 mb-8">Selected Pieces</h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featured.map((article) => (
                <StaggerItem key={article.id}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group flex flex-col h-full p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold border ${categoryColors[article.category] || ""}`}>
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono ml-auto">
                        <Clock size={9} />
                        {article.readingTime}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-foreground leading-snug mb-3 flex-1 group-hover:text-[hsl(180_70%_30%)] dark:group-hover:text-[hsl(180_70%_60%)] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-[10px] font-mono text-muted-foreground">{article.date}</span>
                      <Link
                        to={article.url}
                        className="ml-auto flex items-center gap-1 text-xs font-bold text-foreground hover:text-[hsl(180_70%_38%)] transition-colors group/link"
                      >
                        Read <ArrowRight size={11} className="transition-transform group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* All articles */}
        <section className="section-padding">
          <div className="container-max">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-foreground text-background border-foreground"
                      : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-4"
              >
                {filtered.map((article, i) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="group flex flex-col sm:flex-row gap-5 p-6 rounded-2xl border bg-card hover:shadow-md hover:border-foreground/15 transition-all duration-300"
                  >
                    {/* Number */}
                    <div className="flex-shrink-0 font-mono text-xs font-bold text-muted-foreground w-6 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold border ${categoryColors[article.category] || ""}`}>
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono">
                          <Clock size={9} /> {article.readingTime}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground">{article.date}</span>
                      </div>
                      <h3 className="text-sm font-bold text-foreground leading-snug mb-2 group-hover:text-[hsl(180_70%_30%)] dark:group-hover:text-[hsl(180_70%_60%)] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {article.tags.map((tag) => (
                          <span key={tag} className="badge-tag text-[10px]">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Read link */}
                    <div className="flex-shrink-0 self-center">
                      <Link
                        to={article.url}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border text-xs font-bold text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted transition-all"
                      >
                        <BookOpen size={12} />
                        Read
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WritingPage;
