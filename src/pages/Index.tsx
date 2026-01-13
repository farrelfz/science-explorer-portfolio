import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Experience } from "@/components/sections/Experience";
import { Publications } from "@/components/sections/Publications";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { siteConfig, profile } from "@/data/portfolio";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title and meta
    document.title = siteConfig.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", siteConfig.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = siteConfig.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Experience />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
