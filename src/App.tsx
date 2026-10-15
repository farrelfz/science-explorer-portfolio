import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import { FloatingSocials } from "./components/layout/FloatingSocials";

// Route-level code splitting — each page becomes its own chunk.
const Index = lazy(() => import("./pages/Index"));
const ResearchPage = lazy(() => import("./pages/Research"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const PublicationsPage = lazy(() => import("./pages/PublicationsPage"));
const WritingPage = lazy(() => import("./pages/WritingPage"));
const WritingDetail = lazy(() => import("./pages/WritingDetail"));
const TimelinePage = lazy(() => import("./pages/TimelinePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TeachingPage = lazy(() => import("./pages/TeachingPage"));
const LaboratoryPage = lazy(() => import("./pages/LaboratoryPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

function RouteFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="size-8 rounded-full border-2 border-border border-t-primary animate-spin" />
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<RouteFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/research" element={<PageTransition><ResearchPage /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="/projects/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/teaching" element={<PageTransition><TeachingPage /></PageTransition>} />
        <Route path="/laboratory" element={<PageTransition><LaboratoryPage /></PageTransition>} />
        <Route path="/publications" element={<PageTransition><PublicationsPage /></PageTransition>} />
        <Route path="/writing" element={<PageTransition><WritingPage /></PageTransition>} />
        <Route path="/writing/:slug" element={<PageTransition><WritingDetail /></PageTransition>} />
        <Route path="/timeline" element={<PageTransition><TimelinePage /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><ExperiencePage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

const App = () => (
  <TooltipProvider>
    <LazyMotion features={() => import("@/lib/motion-features").then((m) => m.domMax)} strict>
      <Sonner />
      {/* basename follows the Vite base: "/" in dev, the Pages subpath in prod */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <FloatingSocials />
        <AppRoutes />
      </BrowserRouter>
    </LazyMotion>
  </TooltipProvider>
);

export default App;
