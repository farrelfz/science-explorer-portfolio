import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number | string;
  label: string;
  suffix?: string;
  delay?: number;
}

export function AnimatedCounter({ value, label, suffix = "", delay = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const displayRef = useRef<HTMLSpanElement>(null);

  const numericValue = typeof value === "string" ? parseFloat(value.replace(/[^0-9.]/g, "")) : value;
  const hasSuffix = typeof value === "string" && value.includes("+");

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        motionValue.set(numericValue);
      }, delay * 1000);
    }
  }, [inView, numericValue, delay, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (displayRef.current) {
        const formatted = numericValue >= 1000
          ? Math.round(v).toLocaleString()
          : Math.round(v).toString();
        displayRef.current.textContent = formatted + (hasSuffix ? "+" : "") + suffix;
      }
    });
  }, [spring, numericValue, hasSuffix, suffix]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <div className="stat-number text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
        <span ref={displayRef}>0{hasSuffix ? "+" : ""}{suffix}</span>
      </div>
      <p className="text-xs font-medium text-muted-foreground text-center">{label}</p>
    </div>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: FadeInProps) {
  const dirMap = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { y: 0, x: 24 },
    right: { y: 0, x: -24 },
    none: { y: 0, x: 0 },
  };
  const { x, y } = dirMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.08 }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="label-science mb-4 w-fit"
    >
      {children}
    </motion.div>
  );
}
