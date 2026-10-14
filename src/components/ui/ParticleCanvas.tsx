import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
}

interface ParticleCanvasProps {
  className?: string;
  particleCount?: number;
  interactive?: boolean;
}

// Module-scope constant so the useCallback dependency list stays stable.
const PARTICLE_COLORS = [
  "hsl(180, 70%, 48%)",
  "hsl(217, 91%, 65%)",
  "hsl(263, 70%, 65%)",
  "hsl(180, 70%, 60%)",
  "hsl(217, 70%, 75%)",
];

export function ParticleCanvas({
  className = "",
  particleCount = 80,
  interactive = true,
}: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animationRef = useRef<number>(0);
  const isDark = useRef(false);

  const initParticles = useCallback((w: number, h: number) => {
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }));
  }, [particleCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    isDark.current = document.documentElement.classList.contains("dark");

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Cache CSS-pixel size; avoids a forced layout read (getBoundingClientRect)
    // on every animation frame.
    let cssW = 0;
    let cssH = 0;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      cssW = width;
      cssH = height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      // resetTransform before scaling so repeated resizes don't compound DPR.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(width, height);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const onMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    if (interactive) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      canvas.addEventListener("mouseleave", onMouseLeave, { passive: true });
    }

    const drawLine = (p1: Particle, p2: Particle, dist: number, maxDist: number) => {
      const alpha = (1 - dist / maxDist) * 0.2;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = isDark.current
        ? `rgba(100, 180, 220, ${alpha})`
        : `rgba(60, 130, 180, ${alpha * 0.6})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, cssW, cssH);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const maxDist = 120;
      const mouseInfluence = 80;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse interaction
        if (interactive) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseInfluence) {
            const force = (1 - dist / mouseInfluence) * 0.03;
            p.vx -= dx * force;
            p.vy -= dy * force;
          }
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Dampen
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Wrap edges
        if (p.x < 0) p.x = cssW;
        if (p.x > cssW) p.x = 0;
        if (p.y < 0) p.y = cssH;
        if (p.y > cssH) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const alpha = isDark.current ? p.opacity + 0.1 : p.opacity * 0.7;
        ctx.fillStyle = p.color.replace("hsl(", "hsla(").replace(")", `, ${alpha})`);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) drawLine(p, p2, dist, maxDist);
        }
      }
    };

    let running = false;
    let cleanupIo: (() => void) | undefined;
    const animate = () => {
      drawFrame();
      animationRef.current = requestAnimationFrame(animate);
    };

    const start = () => {
      if (running || prefersReduced) return;
      running = true;
      animationRef.current = requestAnimationFrame(animate);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(animationRef.current);
    };

    if (prefersReduced) {
      // Respect reduced motion: render a single static frame, no rAF loop.
      drawFrame();
    } else {
      // Only animate while the canvas is on screen.
      const io = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? start() : stop()),
        { threshold: 0 }
      );
      io.observe(canvas);
      start();
      cleanupIo = () => io.disconnect();
    }

    return () => {
      stop();
      cleanupIo?.();
      window.removeEventListener("resize", resize);
      if (interactive) {
        window.removeEventListener("mousemove", onMouseMove);
        canvas.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [initParticles, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`particle-canvas ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
