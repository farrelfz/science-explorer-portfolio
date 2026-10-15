import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { experiences, achievements } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/AnimationPrimitives";
import { getIcon } from "@/lib/icons";
import { CheckCircle, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";

const ExperiencePage = () => {
  useEffect(() => {
    document.title = "Experience & Achievements — Muhamad Farrel Dava Fauzan";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <PageHeader
          className="pt-32 pb-16 bg-hero-light relative overflow-hidden"
          gridClass="absolute inset-0 bg-grid opacity-30 dark:opacity-15 pointer-events-none"
          labelClass="label-science"
          labelIcon={GraduationCap}
          label="Academic & Educational Roles"
          titleClass="h-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-5 leading-tight"
          title={<>Professional Experience & <br />
            <span className="text-accent-text">Selected Achievements</span></>}
          leadClass="text-base text-muted-foreground max-w-2xl leading-relaxed"
          lead="Peran nyata dalam memfasilitasi riset siswa (KIR/OPSI), pengajaran fisika terintegrasi STEM di sekolah menengah, dan kepemimpinan komunikasi ilmiah mahasiswa."
        />

        {/* Section 4: Professional Experience */}
        <section className="section-padding border-t">
          <div className="container-max">
            <div className="mb-10">
              <h2 className="h-display text-3xl sm:text-4xl text-foreground mt-2">
                Professional & Academic Roles
              </h2>
            </div>

            <div className="flex flex-col gap-8 mb-20">
              {experiences.map((exp, idx) => {
                const Icon = getIcon(exp.icon);
                return (
                <FadeIn key={exp.id} delay={idx * 0.1}>
                  <div className="p-8 sm:p-10 rounded-2xl border bg-card shadow-sm flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-5">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-muted text-accent-text">
                            <Icon size={20} aria-hidden="true" />
                          </span>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground leading-tight">{exp.role}</h3>
                            <div className="text-sm font-semibold text-accent-text mt-0.5">
                              {exp.organization}
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full border bg-muted/70 text-foreground self-start sm:self-center">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <div className="text-xs font-bold text-foreground uppercase tracking-wider mb-2.5">
                        Key Responsibilities & Deliverables:
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                        {exp.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 p-3 rounded-xl bg-muted/40 text-xs text-foreground/75">
                            <CheckCircle size={14} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="badge-tag text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
                );
              })}
            </div>

            {/* Section 6: Selected Achievements */}
            <div>
              <div className="mb-8">
                <h2 className="h-display text-3xl sm:text-4xl text-foreground mt-2">
                  Selected Achievements
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Pengakuan dan pendanaan kompetisi ilmiah tingkat nasional maupun universitas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {achievements.map((ach) => {
                  const Icon = getIcon(ach.icon);
                  return (
                  <div key={ach.id} className="p-6 rounded-2xl border bg-card flex items-start gap-4">
                    <span className="inline-flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-muted text-accent-text">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-muted text-foreground/70 border">
                          {ach.level}
                        </span>
                        <span className="text-xs font-bold text-muted-foreground">{ach.year}</span>
                      </div>
                      <h4 className="font-bold text-base text-foreground leading-snug">{ach.title}</h4>
                      <p className="text-xs text-muted-foreground">{ach.organizer}</p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
