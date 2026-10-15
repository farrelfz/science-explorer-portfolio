import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { Mail } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact — Farrel Dava";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader
          className="pt-32 pb-8 bg-hero-light relative overflow-hidden"
          gridClass="absolute inset-0 bg-grid opacity-30 dark:opacity-15 pointer-events-none"
          labelClass="label-research"
          labelIcon={Mail}
          labelIconAriaHidden
          label="Get in Touch"
          titleClass="h-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-5 leading-tight"
          title={<>Let's <span className="text-accent-text">Connect</span></>}
          leadClass="text-base text-muted-foreground max-w-xl leading-relaxed"
          lead="Research collaborations, EdTech partnerships, speaking invitations, or just a great conversation about the future of physics education — I'm open to all of it."
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
