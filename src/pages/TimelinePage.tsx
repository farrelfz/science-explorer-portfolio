import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";

const TimelinePage = () => {
  useEffect(() => {
    document.title = "Timeline — Farrel Dava | Journey";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader
          className="pt-32 pb-12 bg-hero-light relative overflow-hidden"
          gridClass="absolute inset-0 bg-grid opacity-30 dark:opacity-15 pointer-events-none"
          labelClass="label-science"
          labelIcon={Clock}
          labelIconAriaHidden
          label="Journey"
          titleClass="h-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-5 leading-tight"
          title={<>The <span className="text-accent-text">Timeline</span></>}
          leadClass="text-base text-muted-foreground max-w-xl leading-relaxed"
          lead="A chronological story of research, building, publishing, and growth — from first simulations to founding a physics education ecosystem."
        />
        <TimelineSection />
      </main>
      <Footer />
    </div>
  );
};

export default TimelinePage;
