import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Teaching as TeachingSection } from "@/components/sections/Teaching";
import { BookOpen } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";

const TeachingPage = () => {
  useEffect(() => {
    document.title = "Teaching — Farrel Dava | Physics Education";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <PageHeader
          className="relative pt-32 pb-20 overflow-hidden bg-hero-light"
          gridClass="absolute inset-0 bg-grid opacity-40 dark:opacity-20 pointer-events-none"
          labelClass="label-science"
          labelIcon={BookOpen}
          labelIconSize={12}
          label="Pedagogy & Practice"
          titleClass="h-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 max-w-4xl leading-tight"
          title={<>Engineering <span className="text-accent-text">Understanding</span></>}
          leadClass="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8"
          lead="My approach to teaching physics is grounded in cognitive science and human-centered learning design. I don't just teach equations; I help students construct robust mental models of the physical world."
        />
        
        {/* Teaching Section imported from Experience component */}
        <TeachingSection />
        
      </main>
      <Footer />
    </div>
  );
};

export default TeachingPage;
