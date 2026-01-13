import { Heart, Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { profile, siteConfig } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: profile.socials.github },
    { icon: Linkedin, label: "LinkedIn", href: profile.socials.linkedin },
    { icon: BookOpen, label: "Google Scholar", href: profile.socials.googleScholar },
    { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  ];

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
              {siteConfig.name}
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background hover:bg-accent/10 flex items-center justify-center transition-colors group border"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Built with */}
        <div className="text-center mt-8 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-cta fill-cta" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
