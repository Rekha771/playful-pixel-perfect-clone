import { Quote, ArrowRight, Sparkles } from "lucide-react";

const stories = [
  {
    name: "Saanvi Deshpande",
    tag: "PCB / NEET",
    color: "bg-mint",
    avatar: "SD",
    before: "Low confidence in score, parents leaning towards private medical at any cost.",
    after: "Honest rank-mapping helped lock a Govt MBBS seat through state counselling.",
    outcome: "Govt Medical College, Maharashtra",
  },
  {
    name: "Aarav Patil",
    tag: "Diploma → Engineering",
    color: "bg-accent",
    avatar: "AP",
    before: "Polytechnic diploma — no clarity if direct second-year was a smart move.",
    after: "Mapped tier-wise colleges + branch fit. Joined CSE via direct second-year.",
    outcome: "Top Maharashtra Engg College",
  },
  {
    name: "Khushi Joshi",
    tag: "Class 12 — Undecided",
    color: "bg-lavender",
    avatar: "KJ",
    before: "Confused between Commerce, Law and Design. No one in family had answers.",
    after: "Aptitude + interest analysis → CLAT prep started early. Cracked it.",
    outcome: "National Law University",
  },
];

export const Stories = () => (
  <section className="relative overflow-hidden bg-background py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
          Real students · Real outcomes
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
          From confusion to <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, hsl(var(--coral)) 0%, hsl(320 90% 70%) 50%, hsl(var(--lavender)) 100%)",
            }}
          >
            confirmed seat.
          </span>
        </h2>
      </div>

      <div className="mt-16 grid gap-7 md:grid-cols-3">
        {stories.map((s, i) => (
          <article
            key={s.name}
            style={{ animationDelay: `${i * 100}ms` }}
            className="group relative rounded-3xl border-2 border-primary bg-card p-6 shadow-playful transition-all hover:-translate-y-1 animate-fade-in"
          >
            <Quote className="absolute right-5 top-5 h-6 w-6 text-accent/60" strokeWidth={2.5} />
            <div className="flex items-center gap-3">
              <div className={`grid h-12 w-12 place-items-center rounded-full ${s.color} font-display text-sm font-bold text-primary`}>
                {s.avatar}
              </div>
              <div>
                <div className="font-display text-base font-bold">{s.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.tag}</div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Where they were
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">{s.before}</p>
            </div>

            <div className="my-5 flex items-center gap-2">
              <div className="h-px flex-1 bg-accent/40" />
              <ArrowRight className="h-4 w-4 text-accent" strokeWidth={2.5} />
              <div className="h-px flex-1 bg-accent/40" />
            </div>

            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                Where they are now
              </div>
              <p className="mt-1.5 text-sm font-semibold leading-relaxed text-foreground">
                {s.after}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-dashed border-border pt-4 text-xs font-bold text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {s.outcome}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
