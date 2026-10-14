import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Mode Terang (Clean Academic)" : "Mode Gelap (Scientific Terminal)"}
      className={cn("rounded-xl border bg-card/80 hover:bg-muted text-foreground shadow-sm", className)}
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="flex items-center justify-center text-foreground"
      >
        {isDark ? (
          <Sun className="text-amber-400" />
        ) : (
          <Moon className="text-slate-700" />
        )}
      </motion.div>
    </Button>
  );
}