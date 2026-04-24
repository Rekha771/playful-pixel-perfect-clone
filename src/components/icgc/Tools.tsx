import { Target, Brain, Compass, BarChart3, Wallet, Scale, ArrowRight } from "lucide-react";

const tools = [
  { icon: Target, title: "College Predictor", desc: "Instant rank-based predictions.", accent: "bg-accent" },
  { icon: Brain, title: "Career Quiz", desc: "Find your strength in 5 mins.", accent: "bg-coral" },
  { icon: Compass, title: "Stream Selector", desc: "Science, Commerce or Arts?", accent: "bg-mint", highlight: true },
  { icon: BarChart3, title: "Rank Analyzer", desc: "Benchmark your performance.", accent: "bg-sky" },
  { icon: Wallet, title: "Scholarship Checker", desc: "Find scholarships you qualify for.", accent: "bg-lavender" },
  { icon: Scale, title: "Compare Colleges", desc: "Side-by-side comparison.", accent: "bg-accent" },
];

export const Tools = () => (
  <section id="tools" className="relative overflow-hidden bg-gradient-soft py-24">
    <div className="absolute inset-0 doodle-grid opacity-40" />
    <div className="relative mx-auto max-w-7xl px-6">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Interactive career tools
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
          Try our smart tools — <span className="italic text-foreground/70">free</span>
        </h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t, i) => (
          <button
            key={t.title}
            style={{ animationDelay: `${i * 70}ms` }}
            className={`group relative overflow-hidden rounded-2xl p-6 text-left shadow-card transition-all hover:-translate-y-1 hover:shadow-playful animate-fade-in ${
              t.highlight ? "bg-mint border-2 border-primary" : "bg-card border border-border"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className={`grid h-11 w-11 place-items-center rounded-xl ${t.accent} text-primary shadow-[2px_2px_0_0_hsl(var(--primary))]`}>
                <t.icon className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <span className="rounded-full bg-primary/5 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary/60">
                Tool {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{t.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            <div className="mt-5 flex items-center gap-2 text-sm font-bold text-primary">
              Try Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>
);