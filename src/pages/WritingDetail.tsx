import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { writingArticles } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/AnimationPrimitives";
import { ArrowLeft, Clock, CalendarDays } from "lucide-react";

const WritingDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find article by checking if the URL matches the current slug
  const article = writingArticles.find((a) => a.url === `/writing/${slug}`);

  useEffect(() => {
    if (article) document.title = `${article.title} — Farrel Dava`;
    else navigate("/writing");
  }, [article, navigate]);

  if (!article) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Article Header */}
        <article className="pt-32 pb-20">
          <div className="container-narrow">
            <FadeIn>
              <Link to="/writing" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mb-10 group">
                <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" />
                Back to Writing
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold border bg-card text-foreground">
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                  <Clock size={12} /> {article.readingTime}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                  <CalendarDays size={12} /> {article.date}
                </span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.15}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight font-display">
                {article.title}
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12 font-medium italic border-l-4 border-[hsl(180_70%_35%)] pl-6">
                {article.excerpt}
              </p>
            </FadeIn>
            
            {/* Article Content Placeholder */}
            <FadeIn delay={0.25}>
              <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none prose-headings:font-display prose-a:text-[hsl(180_70%_40%)]">
                <p className="lead">
                  This is a placeholder for the full article content. The actual essay for "{article.title}" would be placed here.
                </p>
                <h2>Introduction</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
                </p>
                <p>
                  Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.
                </p>
                <h2>Core Argument</h2>
                <p>
                  Donec in magna volutpat, vehicula velit ac, commodo massa. In hac habitasse platea dictumst. Quisque tincidunt ipsum at nisl euismod, nec suscipit elit auctor. Praesent ut nulla fringilla, efficitur mauris ac, vulputate mauris.
                </p>
                <blockquote>
                  "The real crisis is upstream: we teach physics as a collection of formulas rather than a way of making sense of reality."
                </blockquote>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras eleifend leo magna, in accumsan lorem dapibus vel. Mauris in lorem imperdiet, ullamcorper mauris ut, scelerisque velit.
                </p>
                <h2>Conclusion</h2>
                <p>
                  Aliquam erat volutpat. Fusce finibus eget odio nec porta. Nunc rhoncus lectus purus, vel sodales est facilisis ultricies. Duis viverra tellus et interdum accumsan. Curabitur convallis scelerisque lacus.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-2">
                <span className="text-sm font-bold text-foreground mr-2">Tags:</span>
                {article.tags.map(tag => (
                  <span key={tag} className="badge-tag text-xs">{tag}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default WritingDetail;
