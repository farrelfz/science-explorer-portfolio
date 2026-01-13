import { MapPin, BookOpen, Lightbulb, Target } from "lucide-react";
import { profile, education } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-wide" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Bio & Values */}
          <div>
            <span 
              className={cn(
                "inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 opacity-0",
                isInView && "animate-fade-in"
              )}
            >
              Tentang Saya
            </span>
            
            <h2 
              className={cn(
                "heading-2 text-foreground mb-6 opacity-0",
                isInView && "animate-fade-in"
              )}
              style={{ animationDelay: "0.1s" }}
            >
              Membangun jembatan antara sains dan teknologi
            </h2>

            {/* Avatar & Location */}
            <div 
              className={cn(
                "flex items-center gap-4 mb-8 opacity-0",
                isInView && "animate-fade-in"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-cta flex items-center justify-center text-white text-2xl font-bold">
                {profile.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-foreground">{profile.name}</p>
                <p className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </p>
              </div>
            </div>

            <p 
              className={cn(
                "body-regular mb-6 opacity-0",
                isInView && "animate-fade-in"
              )}
              style={{ animationDelay: "0.3s" }}
            >
              {profile.bio}
            </p>

            {/* Values */}
            <div 
              className={cn(
                "bg-card p-6 rounded-xl border shadow-card opacity-0",
                isInView && "animate-fade-in"
              )}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-foreground">Nilai & Fokus</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {profile.values}
              </p>
            </div>
          </div>

          {/* Right: Education & Interests */}
          <div>
            {/* Education Timeline */}
            <div 
              className={cn(
                "mb-10 opacity-0",
                isInView && "animate-fade-in-right"
              )}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-5 w-5 text-accent" />
                <h3 className="heading-3 text-foreground">Pendidikan</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.id} className="relative pl-6 border-l-2 border-accent/30">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent" />
                    <p className="text-sm text-accent font-medium">{edu.period}</p>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Interests */}
            <div 
              className={cn(
                "bg-card p-6 rounded-xl border shadow-card opacity-0",
                isInView && "animate-fade-in-right"
              )}
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-foreground">Minat Riset</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Physics Education Research",
                  "Interactive Simulations",
                  "Virtual Laboratories",
                  "Model-Based Learning",
                  "Data Literacy Education",
                  "AI in Education",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="badge-tech"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
