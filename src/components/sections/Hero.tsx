import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HeroArtifact } from "@/components/ui/HeroArtifact";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-light"
    >
      {/* Graph-paper field — the artifact is drawn onto this, not into a card */}
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-25 pointer-events-none" />

      {/* Main content */}
      <motion.div style={{ y: yContent, opacity }} className="container-max relative z-10 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left: identity, positioning, one primary action */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <Avatar className="size-10">
                <AvatarImage src={profile.avatar} alt={profile.name} />
                <AvatarFallback className="text-sm font-bold">FD</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium text-muted-foreground">
                {profile.institution} · {profile.department}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-black tracking-tight text-foreground mb-5 leading-[1.03]"
              style={{ fontSize: "clamp(2.4rem, 4.6vw, 3.9rem)", letterSpacing: "-0.035em" }}
            >
              Muhamad Farrel
              <br />
              Dava Fauzan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg font-semibold text-foreground/90 mb-3"
            >
              Physics Education Researcher · EdTech Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mb-8"
            >
              {profile.tagline}
            </motion.p>

            {/* One primary action, one secondary — no third competing weight */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg">
                <Link to="/research">
                  Read the research
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Mail data-icon="inline-start" />
                  Get in touch
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex items-center gap-4 text-xs text-muted-foreground"
            >
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Github size={14} aria-hidden="true" />
                GitHub
              </a>
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter profile"
                className="transition-colors hover:text-foreground"
              >
                X / Twitter
              </a>
            </motion.div>
          </div>

          {/* Right: the artifact leads */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <HeroArtifact />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
