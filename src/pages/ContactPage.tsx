import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { FadeIn } from "@/components/ui/AnimationPrimitives";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact — Farrel Dava";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-8 bg-hero-light relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15 pointer-events-none" />
          <div className="container-max relative z-10">
            <FadeIn>
              <div className="label-research mb-6 w-fit">✉️ Get in Touch</div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl text-foreground mb-5 leading-tight">
                Let's <span className="text-gradient-science">Connect</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
                Research collaborations, EdTech partnerships, speaking invitations, or just a great conversation
                about the future of physics education — I'm open to all of it.
              </p>
            </FadeIn>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
