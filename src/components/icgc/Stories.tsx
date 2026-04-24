import { Quote, GraduationCap } from "lucide-react";

const stories = [
  {
    name: "Saanvi Deshpande",
    tag: "PCB · NEET",
    color: "bg-coral",
    avatar: "S",
    before: "Low confidence after first NEET attempt — unsure if medicine was even the right path.",
    after: "MBBS seat at Govt Medical College, Maharashtra — through honest counselling and a backup plan.",
    outcome: "Govt Medical College, Maharashtra",
  },
  {
    name: "Aarav Patil",
    tag: "Diploma · Engg",
    color: "bg-sky",
    avatar: "A",
    before: "Polytechnic diploma student, confused between job market and continuing studies.",
    after: "Joined CSE via direct second year at a top Maharashtra engineering college.",
    outcome: "Top Maharashtra Engg College",
  },
  {
    name: "Khushi Joshi",
    tag: "Class 12 · Arts",
    color: "bg-lavender",
    avatar: "K",
    before: "Undecided between Commerce, Law and Design — felt pressured from every side.",
    after: "Cracked CLAT prep with focused guidance — got into a National Law University.",
    outcome: "National Law University",
  },
];

export const Stories = () => (
  <section className="relative overflow-hidden bg-gradient-soft py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Real students · Real outcomes
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
          From confusion to <br />
          <span className="highlight-amber">confirmed seat.</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {stories.map((s, i) => (
          <article
            key={s.name}
            style={{ animationDelay: `${i * 100}ms` }}
            className="group relative rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-2 hover:shadow-playful animate-fade-in"
          >
            <Quote className="absolute right-5 top-5 h-6 w-6 text-accent" />
            <div className="flex items-center gap-3">
              <div className={`grid h-12 w-12 place-items-center rounded-full ${s.color} font-display text-xl font-bold text-primary`}>
                {s.avatar}
              </div>
              <div>
                <div className="font-display text-base font-bold">{s.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.tag}</div>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-coral">Before</div>
                <p className="mt-1 leading-relaxed text-foreground/80">{s.before}</p>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">After</div>
                <p className="mt-1 leading-relaxed text-foreground/80">{s.after}</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-xl bg-accent/20 px-3 py-2.5 text-xs font-bold text-primary">
              <GraduationCap className="h-4 w-4" /> {s.outcome}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);