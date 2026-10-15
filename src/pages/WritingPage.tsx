import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { writings } from "@/data/portfolio";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FileText, PenLine } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";

const categories = ["All", ...Array.from(new Set(writings.map((w) => w.category)))];

const WritingPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    document.title = "Writing & Perspectives — Muhamad Farrel Dava Fauzan";
  }, []);

  const filtered = activeCategory === "All"
    ? writings
    : writings.filter((w) => w.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <PageHeader
          className="pt-32 pb-16 bg-hero-light relative overflow-hidden"
          gridClass="absolute inset-0 bg-grid opacity-30 dark:opacity-15 pointer-events-none"
          labelClass="label-research"
          labelIcon={PenLine}
          labelIconSize={12}
          label="Critical Perspectives & Essays"
          titleClass="h-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-5 leading-tight"
          title={<>Writing & <span className="text-accent-text">Perspectives</span></>}
          leadClass="text-base text-muted-foreground max-w-2xl leading-relaxed"
          lead="Tulisan konseptual, analisis pedagogi, dan catatan teknis di seputar pendidikan fisika, penerapan kecerdasan buatan, dan komunikasi sains."
        />

        {/* Filter & Articles */}
        <section className="section-padding border-t">
          <div className="container-max">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-xl border font-semibold",
                    activeCategory === cat
                      ? "border-foreground bg-foreground text-background hover:bg-foreground hover:text-background"
                      : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:bg-card hover:text-foreground"
                  )}
                >
                  {cat}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.length === 0 && (
                <div className="md:col-span-2 flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border py-20 text-center">
                  <FileText size={28} className="text-muted-foreground" aria-hidden="true" />
                  <p className="text-sm font-semibold text-foreground">
                    Belum ada tulisan di kategori ini
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveCategory("All")}
                  >
                    Tampilkan semua tulisan
                  </Button>
                </div>
              )}
              {filtered.map((item) => (
                <ArticleCard key={item.id} article={item} headingLevel="h2" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WritingPage;
