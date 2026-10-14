import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Atom, Search, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { QuickCVModal } from "@/components/ui/QuickCVModal";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastY.current;
    setHidden(diff > 0 && y > 120);
    setScrolled(y > 20);
    lastY.current = y;
  });

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass border-b py-3 shadow-sm"
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <div className="container-max flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center size-8 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-[hsl(217_91%_60%)] opacity-90 group-hover:opacity-100 transition-opacity" />
              <Atom size={16} className="relative z-10 text-white" strokeWidth={2} />
            </div>
            <span className="text-sm font-bold tracking-tight text-foreground">Farrel Dava</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.slice(0, 7).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                {isActive(item.href) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-muted"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA & Search & Theme */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCvOpen(true)}
              className="rounded-xl bg-card/70 hover:bg-muted hover:text-foreground shadow-sm"
              title="Lihat Ringkasan CV Akademik"
            >
              <FileText className="text-primary" />
              Quick CV
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setPaletteOpen(true)}
              className="rounded-xl bg-card/70 hover:bg-muted hover:text-foreground font-medium text-muted-foreground shadow-sm"
              title="Cari (Ctrl + K)"
              aria-label="Cari riset atau proyek"
            >
              <Search className="text-primary" />
              <span>Cari...</span>
              <kbd className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-muted text-muted-foreground border border-border/80">
                ⌘K
              </kbd>
            </Button>

            <Button
              asChild
              size="sm"
              className="rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-sm"
            >
              <Link to="/contact">Let's Connect</Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-1.5">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setPaletteOpen(true)}
              className="rounded-lg border bg-card hover:bg-muted"
              aria-label="Cari (Ctrl + K)"
            >
              <Search />
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-lg bg-muted/80 hover:bg-muted"
                  aria-label="Toggle menu"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-20 pb-8 flex flex-col">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigasi</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1">
                  {navigation.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.1 }}
                    >
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                          isActive(item.href)
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Link to="/contact">Let's Connect</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      {/* Global Command Palette */}
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />

      {/* Global Quick CV Modal */}
      <QuickCVModal open={cvOpen} onOpenChange={setCvOpen} />
    </>
  );
}