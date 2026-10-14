import {
  Atom,
  Award,
  BookOpen,
  Brain,
  ChartColumn,
  CircleDot,
  Clock,
  Cog,
  Cpu,
  Database,
  FlaskConical,
  GitBranch,
  Globe,
  GraduationCap,
  Laptop,
  Layers,
  Lightbulb,
  Mail,
  Medal,
  Megaphone,
  Microscope,
  Moon,
  Orbit,
  Rocket,
  Search,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Stable icon keys → lucide-react components.
 * `src/data/portfolio.ts` stores these keys in its `icon` string fields;
 * render them anywhere via `getIcon(key)`.
 */
export const PORTFOLIO_ICONS: Record<string, LucideIcon> = {
  atom: Atom,
  award: Award,
  book: BookOpen,
  brain: Brain,
  chart: ChartColumn,
  circledot: CircleDot,
  clock: Clock,
  cog: Cog,
  cpu: Cpu,
  database: Database,
  flask: FlaskConical,
  gitbranch: GitBranch,
  globe: Globe,
  graduation: GraduationCap,
  laptop: Laptop,
  layers: Layers,
  lightbulb: Lightbulb,
  mail: Mail,
  medal: Medal,
  megaphone: Megaphone,
  microscope: Microscope,
  moon: Moon,
  orbit: Orbit,
  rocket: Rocket,
  search: Search,
  sparkles: Sparkles,
  target: Target,
  trophy: Trophy,
  users: Users,
  zap: Zap,
};

const FALLBACK_ICON: LucideIcon = Sparkles;

export function getIcon(key: string): LucideIcon {
  return PORTFOLIO_ICONS[key] ?? FALLBACK_ICON;
}
