import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { FadeIn, SectionLabel } from "@/components/ui/AnimationPrimitives";
import { Github, Instagram, Linkedin, Mail, MapPin, MessageSquare, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Left info */}
          <div className="lg:col-span-2">
            <SectionLabel>Contact</SectionLabel>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-4xl sm:text-5xl text-foreground mt-2 mb-6 leading-tight">
                Let's <span className="text-gradient-science">Connect</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Whether you're a researcher, educator, institution, or fellow builder — I'm always
                open to meaningful conversations about physics education, EdTech, and collaborative work.
              </p>
            </FadeIn>

            {/* Contact details */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <a href={`mailto:${profile.email}`} className="text-sm font-medium text-foreground hover:text-[hsl(180_70%_38%)] transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} className="text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-sm font-medium text-foreground">{profile.location}</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Socials */}
            <FadeIn delay={0.4}>
              <div className="flex items-center gap-2">
                {[
                  { icon: Github, href: profile.socials.github, label: "GitHub" },
                  { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
                  { icon: Instagram, href: profile.socials.instagram, label: "Instagram" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted text-xs font-medium transition-all">
                    <Icon size={13} />
                    {label}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: form */}
          <FadeIn delay={0.2} direction="left" className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-3xl border bg-card shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 text-2xl">✅</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">Your email client should have opened. Looking forward to connecting.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-foreground">Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(180_70%_38%/0.4)] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-foreground">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(180_70%_38%/0.4)] transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-foreground">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Research collaboration, partnership, etc."
                      className="w-full px-4 py-3 rounded-xl border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(180_70%_38%/0.4)] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-foreground">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project, research, or idea..."
                      className="w-full px-4 py-3 rounded-xl border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(180_70%_38%/0.4)] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    id="contact-submit"
                    className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, hsl(180 70% 35%), hsl(217 91% 55%))" }}
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
