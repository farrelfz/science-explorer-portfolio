import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, FlaskConical, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";

// Rotating words — kept on same line, clipped so no wrap
const rotatingWords = ["Research", "Education", "Engineering", "Writing", "Data"];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Fixed width so it never wraps or shifts layout
  return (
    <span
      className="relative inline-flex overflow-hidden align-bottom"
      style={{ width: "11ch", height: "1.2em" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[index]}
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -32, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient-primary absolute inset-0 whitespace-nowrap"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// Stat card with icon + value + label
function StatCard({ value, label, icon, delay }: { value: string | number; label: string; icon: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-1 px-4 py-3 rounded-2xl border bg-card/80 backdrop-blur-sm hover:bg-card hover:shadow-md transition-all duration-300"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-xl font-extrabold text-foreground tracking-tight leading-none">{value}</span>
      <span className="text-[10px] text-muted-foreground font-medium text-center leading-tight whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

const socialItems = [
  { icon: Github, href: profile.socials.github, label: "GitHub" },
  { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: profile.socials.instagram, label: "Instagram" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  { icon: MessageCircle, href: profile.socials.whatsapp, label: "WhatsApp" },
];

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
          className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-20 dark:opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(217 91% 60%) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full opacity-10 dark:opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(263 70% 60%) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="container-max relative z-10 pt-28 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-7"
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

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-extrabold tracking-tight text-foreground mb-5 leading-[1.02]"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)", letterSpacing: "-0.03em" }}
            >
              Muhamad Farrel
              <br />
              <span className="text-gradient-primary">Dava Fauzan</span>
            </motion.h1>

            {/* Tagline — rotating word stays inline, no wrap */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-lg sm:text-xl font-semibold text-foreground/80 mb-4 flex items-center gap-2 flex-nowrap whitespace-nowrap overflow-hidden"
              style={{ letterSpacing: "-0.01em" }}
            >
              <span className="flex-shrink-0">Building physics learning through</span>
              <RotatingWord />
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-9"
            >
              Physics Education undergraduate at UNJ — researching how humans learn science,
              building AI-powered learning tools, and designing simulations that make physics visceral.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <Link
                to="/projects"
                id="hero-cta-projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, hsl(231 64% 28%), hsl(217 91% 45%))" }}
              >
                <FlaskConical size={14} />
                View Projects
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/research"
                id="hero-cta-research"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 border hover:-translate-y-0.5 hover:bg-muted"
                style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--foreground))", background: "hsl(var(--card))" }}
              >
                Explore Research
              </Link>

              <a
                href={profile.cvUrl}
                download
                id="hero-cta-cv"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-dashed hover:border-solid transition-all duration-200"
                style={{ borderColor: "hsl(180 70% 38% / 0.5)", color: "hsl(180 70% 30%)" }}
              >
                <Download size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Stat cards — visual grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8 border-t border-border"
            >
              <div className="grid grid-cols-4 gap-2 max-w-sm">
                <StatCard value={profile.stats.researchProjects} label="Research Projects" icon="🔬" delay={0.85} />
                <StatCard value={profile.stats.projectsBuilt} label="Platforms Built" icon="⚙️" delay={0.9} />
                <StatCard value={profile.stats.publications} label="Publications" icon="📄" delay={0.95} />
                <StatCard value={profile.stats.articlesWritten} label="Essays Written" icon="✍️" delay={1.0} />
              </div>
            </motion.div>
          </div>

          {/* Right: Photo card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div
                className="absolute -inset-10 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ background: "radial-gradient(circle, hsl(263 70% 60%) 0%, hsl(180 70% 38%) 60%, transparent 100%)" }}
              />
              <div
                className="relative w-72 h-80 xl:w-80 xl:h-[420px] rounded-3xl overflow-hidden border shadow-2xl"
                style={{ background: "linear-gradient(160deg, hsl(231 64% 18%), hsl(263 70% 22%), hsl(180 70% 18%))" }}
              >
                <img
                  src="/avatar-placeholder.png"
                  alt="Muhamad Farrel Dava Fauzan"
                  className="w-full h-full object-cover object-center mix-blend-luminosity opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[hsl(231_64%_12%)] to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white font-bold text-sm">Muhamad Farrel Dava Fauzan</div>
                  <div className="text-white/60 text-xs mt-0.5">Physics Education · UNJ</div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-10 px-3.5 py-2.5 rounded-2xl border bg-card/95 backdrop-blur-sm shadow-lg"
              >
                <div className="text-[10px] text-muted-foreground mb-0.5">Researcher at</div>
                <div className="text-xs font-bold text-foreground">UNJ Jakarta</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -right-8 bottom-16 px-3.5 py-2.5 rounded-2xl border bg-card/95 backdrop-blur-sm shadow-lg"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Open to Collaborate</div>
                </div>
              </motion.div>

              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-2 border-dashed border-[hsl(180_70%_38%/0.3)] opacity-60" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
