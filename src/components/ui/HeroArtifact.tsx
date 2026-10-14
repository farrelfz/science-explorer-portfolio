import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

/**
 * HeroArtifact — a live projectile-motion plot rendered as inline SVG.
 *
 * This is the artifact, not decoration: it computes a real trajectory with the
 * same kinematic model the Physics Playground uses (vacuum, no drag), draws the
 * path, the velocity components at launch, and surfaces the classic
 * "range is maximal at 45°" misconception — the exact subject this portfolio is
 * about. Values are illustrative defaults (v₀ = 30 m/s, θ = 45°, g = 9.81).
 */
const V0 = 30; // m/s
const THETA = 45; // degrees
const G = 9.81; // m/s²

const W = 520;
const H = 300;
const PAD = { top: 28, right: 28, bottom: 44, left: 46 };

export function HeroArtifact() {
  const rad = (THETA * Math.PI) / 180;
  const v0x = V0 * Math.cos(rad);
  const v0y = V0 * Math.sin(rad);
  const flightTime = (2 * v0y) / G;
  const range = v0x * flightTime;
  const maxHeight = (v0y * v0y) / (2 * G);

  const [t, setT] = useState(0);
  const rafRef = useRef<number>(0);
  const startedRef = useRef(false);

  // Animate a single sweep of the trajectory, then hold the final state.
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setT(flightTime);
      return;
    }
    const duration = 2200;
    let start = 0;
    const tick = (now: number) => {
      if (!startedRef.current) {
        start = now;
        startedRef.current = true;
      }
      const p = Math.min((now - start) / duration, 1);
      // easeOutCubic for a settled, non-bouncy arrival
      const eased = 1 - Math.pow(1 - p, 3);
      setT(eased * flightTime);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [flightTime]);

  const plotW = W - PAD.left - PAD.right;
  const plotH = H - PAD.top - PAD.bottom;

  // Scale so the full arc fits with headroom.
  const maxX = range * 1.08;
  const maxY = maxHeight * 1.35;

  const path = useMemo(() => {
    const sx = (x: number) => PAD.left + (x / maxX) * plotW;
    const sy = (y: number) => PAD.top + plotH - (y / maxY) * plotH;
    const pts: string[] = [];
    const steps = 80;
    for (let i = 0; i <= steps; i++) {
      const tt = (flightTime * i) / steps;
      const x = v0x * tt;
      const y = v0y * tt - 0.5 * G * tt * tt;
      pts.push(`${i === 0 ? "M" : "L"} ${sx(x).toFixed(1)} ${sy(Math.max(y, 0)).toFixed(1)}`);
    }
    return pts.join(" ");
  }, [flightTime, v0x, v0y, maxX, maxY, plotW, plotH]);

  // Scale helpers (module-stable maths; used only during render).
  const sx = (x: number) => PAD.left + (x / maxX) * plotW;
  const sy = (y: number) => PAD.top + plotH - (y / maxY) * plotH;

  const curX = v0x * t;
  const curY = Math.max(v0y * t - 0.5 * G * t * t, 0);
  const apex = Math.abs(t - flightTime / 2) < 0.12;

  return (
    <div className="w-full rounded-2xl border bg-card p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-text">
            Live trajectory
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          v₀ = {V0} m/s · θ = {THETA}° · g = {G} m/s²
        </span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label={`Projectile trajectory at ${THETA} degrees and ${V0} metres per second: range ${range.toFixed(1)} metres, maximum height ${maxHeight.toFixed(1)} metres.`}
      >
        {/* Plot frame — the grid now sits under a real subject */}
        <rect
          x={PAD.left}
          y={PAD.top}
          width={plotW}
          height={plotH}
          className="fill-muted/30 stroke-border"
          strokeWidth={1}
          rx={8}
        />

        {/* Horizontal gridlines + height labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((f) => {
          const yVal = maxY * f;
          const py = sy(yVal);
          return (
            <g key={`h-${f}`}>
              <line
                x1={PAD.left}
                y1={py}
                x2={PAD.left + plotW}
                y2={py}
                className="stroke-border/60"
                strokeWidth={1}
                strokeDasharray="3 4"
              />
              <text
                x={PAD.left - 8}
                y={py + 3}
                textAnchor="end"
                className="fill-muted-foreground font-mono"
                fontSize={9}
              >
                {yVal.toFixed(0)}
              </text>
            </g>
          );
        })}

        {/* Ground line */}
        <line
          x1={PAD.left}
          y1={sy(0)}
          x2={PAD.left + plotW}
          y2={sy(0)}
          className="stroke-accent"
          strokeWidth={2}
        />

        {/* Trajectory path */}
        <path
          d={path}
          fill="none"
          className="stroke-accent"
          strokeWidth={2}
          strokeDasharray="5 4"
          opacity={0.55}
        />

        {/* Apex marker */}
        <line
          x1={sx(range / 2)}
          y1={sy(maxHeight)}
          x2={sx(range / 2)}
          y2={sy(0)}
          className="stroke-primary/40"
          strokeWidth={1}
          strokeDasharray="2 3"
        />
        <text
          x={sx(range / 2) + 6}
          y={sy(maxHeight) + 12}
          className="fill-primary font-mono font-semibold"
          fontSize={10}
        >
          h = {maxHeight.toFixed(1)} m
        </text>

        {/* Launch velocity components */}
        <g opacity={0.9}>
          <line
            x1={sx(0)}
            y1={sy(0)}
            x2={sx(0) + 34}
            y2={sy(0)}
            className="stroke-primary"
            strokeWidth={1.8}
          />
          <line
            x1={sx(0)}
            y1={sy(0)}
            x2={sx(0)}
            y2={sy(0) - 34}
            className="stroke-primary"
            strokeWidth={1.8}
          />
          <text x={sx(0) + 38} y={sy(0) + 4} className="fill-primary font-mono" fontSize={9}>
            v₀ₓ
          </text>
          <text x={sx(0) - 6} y={sy(0) - 38} textAnchor="end" className="fill-primary font-mono" fontSize={9}>
            v₀ᵧ
          </text>
        </g>

        {/* Projectile */}
        <circle cx={sx(curX)} cy={sy(curY)} r={7} className="fill-primary" />
        <circle cx={sx(curX)} cy={sy(curY)} r={12} className="fill-primary/25" />

        {/* Range annotation */}
        <line
          x1={sx(0)}
          y1={sy(0) + 20}
          x2={sx(range)}
          y2={sy(0) + 20}
          className="stroke-muted-foreground"
          strokeWidth={1}
        />
        <text
          x={sx(range / 2)}
          y={sy(0) + 34}
          textAnchor="middle"
          className="fill-muted-foreground font-mono"
          fontSize={10}
        >
          R = {range.toFixed(1)} m
        </text>

        {/* Axis labels */}
        <text x={W / 2} y={H - 6} textAnchor="middle" className="fill-muted-foreground font-mono" fontSize={9}>
          horizontal distance (m)
        </text>
      </svg>

      {/* The pedagogical payoff — his actual research subject */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.5 }}
        className="mt-3 flex items-start gap-2 rounded-xl border border-accent/25 bg-accent/5 p-3"
      >
        <Lightbulb size={15} className="mt-0.5 shrink-0 text-accent-text" aria-hidden="true" />
        <p className="text-[11px] leading-relaxed text-foreground/80">
          {apex ? (
            <>
              <span className="font-semibold">At the apex</span>, vertical velocity is zero — a
              misconception many students carry. Only the horizontal component remains.
            </>
          ) : (
            <>
              Range is maximal at 45° only in a vacuum. Add air resistance and the optimal angle
              drops below 45° — the kind of misconception this research maps.
            </>
          )}
        </p>
      </motion.div>
    </div>
  );
}
