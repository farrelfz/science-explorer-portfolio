import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Teaching as TeachingSection } from "@/components/sections/Experience";
import { FadeIn } from "@/components/ui/AnimationPrimitives";
import { BookOpen } from "lucide-react";

const TeachingPage = () => {
  useEffect(() => {
    document.title = "Teaching — Farrel Dava | Physics Education";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-hero-light">
          <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20 pointer-events-none" />
          <div className="container-max relative z-10">
            <FadeIn>
              <div className="label-science mb-6 w-fit flex items-center gap-1.5">
                <BookOpen size={12} />
                Pedagogy & Practice
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 max-w-4xl leading-tight">
                Engineering <span className="text-gradient-science">Understanding</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
                My approach to teaching physics is grounded in cognitive science and human-centered learning design. I don't just teach equations; I help students construct robust mental models of the physical world.
              </p>
            </FadeIn>
          </div>
        </section>
        
        {/* Teaching Section imported from Experience component */}
        <TeachingSection />
        
      </main>
      <Footer />
    </div>
  );
};

export default TeachingPage;
