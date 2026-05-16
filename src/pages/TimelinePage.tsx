import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { FadeIn } from "@/components/ui/AnimationPrimitives";

const TimelinePage = () => {
  useEffect(() => {
    document.title = "Timeline — Farrel Dava | Journey";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-12 bg-hero-light relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15 pointer-events-none" />
          <div className="container-max relative z-10">
            <FadeIn>
              <div className="label-science mb-6 w-fit">🕐 Journey</div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-5 leading-tight">
                The <span className="text-gradient-primary">Timeline</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
                A chronological story of research, building, publishing, and growth —
                from first simulations to founding a physics education ecosystem.
              </p>
            </FadeIn>
          </div>
        </section>
        <TimelineSection />
      </main>
      <Footer />
    </div>
  );
};

export default TimelinePage;
