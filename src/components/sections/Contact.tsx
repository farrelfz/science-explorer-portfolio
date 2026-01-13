import { useState } from "react";
import { Mail, Send, Github, Linkedin, BookOpen, MapPin, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (since no backend)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi. Saya akan membalas secepatnya.",
    });

    // Reset form after delay
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: profile.socials.github },
    { icon: Linkedin, label: "LinkedIn", href: profile.socials.linkedin },
    { icon: BookOpen, label: "Google Scholar", href: profile.socials.googleScholar },
    { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <span 
            className={cn(
              "inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
          >
            Kontak
          </span>
          <h2 
            className={cn(
              "heading-2 text-foreground mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Mari Berkolaborasi
          </h2>
          <p 
            className={cn(
              "body-large max-w-2xl mx-auto opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Tertarik untuk bekerja sama atau punya pertanyaan? Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div 
            className={cn(
              "opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-gradient-to-br from-accent/10 via-transparent to-cta/10 rounded-2xl p-8 border border-accent/20 h-full">
              <h3 className="heading-3 text-foreground mb-6">Hubungi Saya</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a 
                      href={`mailto:${profile.email}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Lokasi</p>
                    <p className="text-muted-foreground">{profile.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <p className="text-sm font-medium text-foreground mb-4">Temukan saya di</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-secondary hover:bg-accent/10 flex items-center justify-center transition-colors group"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={cn(
              "opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            <form 
              onSubmit={handleSubmit}
              className="card-elevated p-8"
            >
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Nama Anda"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@contoh.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subjek pesan"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tulis pesan Anda..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Terkirim!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <span className="animate-pulse">Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Kirim Pesan
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Atau langsung email ke{" "}
                  <a 
                    href={`mailto:${profile.email}`}
                    className="text-accent hover:underline"
                  >
                    {profile.email}
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
