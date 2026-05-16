import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, FlaskConical, Github, Linkedin, PenLine } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { AnimatedCounter } from "@/components/ui/AnimationPrimitives";

// Rotating words for the tagline
const rotatingWords = ["Research", "Education", "Engineering", "Writing", "Design"];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden" style={{ minWidth: "10ch" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient-primary inline-block"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-light"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20 pointer-events-none" />

      {/* Particle system */}
      <div className="absolute inset-0">
        <ParticleCanvas particleCount={70} interactive={true} />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20 dark:opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(217 91% 60%) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full opacity-10 dark:opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(263 70% 60%) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="container-max relative z-10 pt-28 pb-32"
      >
        <div className="max-w-5xl">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border tracking-wide"
              style={{
                background: "hsl(180 70% 38% / 0.08)",
                borderColor: "hsl(180 70% 38% / 0.25)",
                color: "hsl(180 70% 28%)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Physics Education · Universitas Negeri Jakarta
            </span>
          </motion.div>

          {/* Name — large editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-extrabold tracking-tight text-foreground mb-6 leading-[1.02]"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)", letterSpacing: "-0.03em" }}
          >
            Muhamad Farrel
            <br />
            <span className="text-gradient-primary">Dava Fauzan</span>
          </motion.h1>

          {/* Rotating tagline — one clean line, no × × × */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="text-xl sm:text-2xl font-semibold text-foreground/80 mb-5 flex items-baseline gap-3 flex-wrap"
            style={{ letterSpacing: "-0.01em" }}
          >
            Building the future of physics learning through{" "}
            <RotatingWord />
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10"
            style={{ fontWeight: 400 }}
          >
            Physics Education undergraduate at UNJ — researching how humans learn science,
            building AI-powered learning tools, writing about educational futures,
            and designing simulations that make physics visceral.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-16"
          >
            <Link
              to="/research"
              id="hero-cta-research"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, hsl(231 64% 28%), hsl(217 91% 45%))" }}
            >
              <FlaskConical size={15} />
              Explore Research
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/projects"
              id="hero-cta-projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 border hover:-translate-y-0.5 hover:bg-muted"
              style={{
                borderColor: "hsl(var(--border))",
                color: "hsl(var(--foreground))",
                background: "hsl(var(--card))",
              }}
            >
              View Projects
            </Link>

            <Link
              to="/writing"
              id="hero-cta-writing"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-muted-foreground hover:text-foreground transition-all duration-200"
            >
              <PenLine size={14} />
              Read Writing
            </Link>

            <a
              href={profile.cvUrl}
              download
              id="hero-cta-cv"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
            >
              <Download size={14} />
              Download CV
            </a>
          </motion.div>

          {/* Stats — with more weight */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-8 pt-8 border-t border-border"
          >
            <AnimatedCounter value={profile.stats.researchProjects} label="Research Projects" delay={0.85} />
            <div className="w-px h-8 bg-border hidden sm:block" />
            <AnimatedCounter value={profile.stats.projectsBuilt} label="Platforms Built" delay={0.95} />
            <div className="w-px h-8 bg-border hidden sm:block" />
            <AnimatedCounter value={profile.stats.publications} label="Publications" delay={1.05} />
            <div className="w-px h-8 bg-border hidden sm:block" />
            <AnimatedCounter value={profile.stats.articlesWritten} label="Essays Written" delay={1.15} />
          </motion.div>
        </div>
      </motion.div>

      {/* Social sidebar — xl only */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 z-10"
      >
        <div className="w-px h-12 bg-border" />
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground border hover:border-foreground/30 hover:bg-muted transition-all duration-200"
        >
          <Github size={15} />
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground border hover:border-foreground/30 hover:bg-muted transition-all duration-200"
        >
          <Linkedin size={15} />
        </a>
        <div className="w-px h-12 bg-border" />
      </motion.div>

      {/* Scroll indicator — pinned to bottom, won't overlap stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 pointer-events-none"
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/25 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-muted-foreground/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
