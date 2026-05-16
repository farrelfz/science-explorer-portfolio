import { Link } from "react-router-dom";
import { Atom, Github, Linkedin, BookOpen, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { profile, navigation } from "@/data/portfolio";

const socialLinks = [
  { icon: Github, href: profile.socials.github, label: "GitHub" },
  { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: BookOpen, href: profile.socials.googleScholar, label: "Google Scholar" },
  { icon: Instagram, href: profile.socials.instagram, label: "Instagram" },
];

const footerNav = [
  {
    heading: "Work",
    links: [
      { label: "Research", href: "/research" },
      { label: "Projects", href: "/projects" },
      { label: "Publications", href: "/publications" },
      { label: "Laboratory", href: "/laboratory" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Teaching", href: "/teaching" },
      { label: "Timeline", href: "/timeline" },
      { label: "Writing", href: "/writing" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-card/50 backdrop-blur-sm overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="container-max relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(180_70%_38%)] to-[hsl(217_91%_60%)]" />
                <Atom size={18} className="relative z-10 text-white" strokeWidth={2} />
              </div>
              <span className="text-base font-bold tracking-tight">Farrel Dava</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Physics Education undergraduate at Universitas Negeri Jakarta — building the future of scientific learning through research, AI, and interactive experiences.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-center w-9 h-9 rounded-lg border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Nav groups */}
          {footerNav.map((group) => (
            <div key={group.heading}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                {group.heading}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gradient mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} Muhamad Farrel Dava Fauzan. Built with research-grade attention to detail.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for collaboration
            </span>
            <a
              href={profile.cvUrl}
              download
              className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Download CV <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
