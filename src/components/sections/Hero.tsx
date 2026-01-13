import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cta/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-8 opacity-0 animate-fade-in"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium">Available for collaboration</span>
          </div>

          {/* Name & Title */}
          <h1 
            className="heading-1 text-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {profile.name}
          </h1>
          
          <p 
            className="text-xl sm:text-2xl font-medium text-accent mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {profile.role}
          </p>

          {/* Tagline */}
          <p 
            className="body-large max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {profile.tagline}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={handleScrollToProjects}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all"
            >
              Lihat Proyek
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-foreground/20 hover:bg-foreground/5"
            >
              <a href={profile.cvUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Unduh CV
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              onClick={handleScrollToContact}
              className="hover:bg-cta/10 hover:text-cta"
            >
              <Mail className="mr-2 h-4 w-4" />
              Hubungi
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                {profile.stats.yearsExperience}+
              </div>
              <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                {profile.stats.projectsCompleted}+
              </div>
              <div className="text-sm text-muted-foreground">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                {profile.stats.publications}
              </div>
              <div className="text-sm text-muted-foreground">Publikasi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                {profile.stats.studentsReached}
              </div>
              <div className="text-sm text-muted-foreground">Siswa Terjangkau</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
