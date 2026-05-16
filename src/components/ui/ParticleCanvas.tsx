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

  const colors = [
    "hsl(180, 70%, 48%)",
    "hsl(217, 91%, 65%)",
    "hsl(263, 70%, 65%)",
    "hsl(180, 70%, 60%)",
    "hsl(217, 70%, 75%)",
  ];

  const initParticles = useCallback((w: number, h: number) => {
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [particleCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    isDark.current = document.documentElement.classList.contains("dark");

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
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

    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

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
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

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

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
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
