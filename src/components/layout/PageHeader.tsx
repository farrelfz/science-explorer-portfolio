import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/AnimationPrimitives";

/**
 * Shared page-header hero used by all top-level content pages.
 *
 * Renders a `<section>` with the `bg-hero-light` background, the `bg-grid`
 * texture overlay, a small label pill (with a Lucide icon), a FadeIn-wrapped
 * `h1` title, and an optional lead paragraph — the common scaffold that was
 * previously duplicated across every page under src/pages/.
 *
 * All visual details are passed via props so each page keeps its exact
 * original appearance (grid opacity, paddings, label style, title size, etc.).
 */
interface PageHeaderProps {
  /** Class name(s) of the label pill, e.g. "label-research". */
  labelClass: string;
  /** Text shown inside the label pill. */
  label: string;
  /** Lucide icon rendered inside the label pill. */
  labelIcon: LucideIcon;
  /** Size (px) of the label pill icon. */
  labelIconSize?: number;
  /** Whether the label icon carries `aria-hidden="true"`. Leave undefined to omit the attribute (matching original markup). */
  labelIconAriaHidden?: boolean;
  /** Title (h1) content. Accepts JSX so pages can embed accent spans. */
  title: React.ReactNode;
  /** Full `className` of the h1, e.g. size/mb/max-w utilities. */
  titleClass: string;
  /** Optional lead paragraph content. Accepts JSX. */
  lead?: React.ReactNode;
  /** Full `className` of the lead paragraph, e.g. max-w/mb utilities. */
  leadClass?: string;
  /** Extra class(es) appended to the `<section>`, e.g. "pt-32 pb-16". */
  className?: string;
  /** Full class string of the grid-texture overlay div. */
  gridClass?: string;
  /** Optional extra background layer rendered between grid and container. */
  background?: React.ReactNode;
}

export function PageHeader({
  labelClass,
  label,
  labelIcon: Icon,
  labelIconSize = 13,
  labelIconAriaHidden,
  title,
  titleClass,
  lead,
  leadClass,
  className,
  gridClass,
  background,
}: PageHeaderProps) {
  return (
    <section className={className}>
      <div className={gridClass} />
      {background}
      <div className="container-max relative z-10">
        <FadeIn>
          <div className={`${labelClass} mb-6 w-fit flex items-center gap-1.5`}>
            <Icon size={labelIconSize} aria-hidden={labelIconAriaHidden} />
            {label}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className={titleClass}>{title}</h1>
        </FadeIn>
        {lead !== undefined && (
          <FadeIn delay={0.2}>
            <p className={leadClass}>{lead}</p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
