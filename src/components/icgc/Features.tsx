import { useState } from "react";
import {
  UserRound,
  Map,
  Building2,
  TrendingUp,
  PiggyBank,
  FileCheck,
  Plane,
  Heart,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import doodleStar from "@/assets/doodle-star.png";

type Feature = {
  icon: typeof UserRound;
  title: string;
  desc: string;
  color: string;
  iconBg: string;
  stat: string;
  statLabel: string;
  bullets: string[];
  emoji: string;
};

const features: Feature[] = [
  {
    icon: UserRound,
    title: "Personalized Counselling",
    desc: "1-on-1 sessions tailored to your interests, strengths, and goals.",
    color: "bg-coral/20",
    iconBg: "bg-coral text-coral-foreground",
    stat: "500+",
    statLabel: "Students guided",
    bullets: ["Aptitude + interest mapping", "Strengths inventory", "Goal-setting framework"],
    emoji: "💬",
  },
  {
    icon: Map,
    title: "Career Roadmap",
    desc: "A clear, step-by-step plan from school to your first job.",
    color: "bg-mint/30",
    iconBg: "bg-mint text-mint-foreground",
    stat: "12 mo",
    statLabel: "Avg planning horizon",
    bullets: ["Milestone calendar", "Backup pathways", "Skill-build checklist"],
    emoji: "🗺️",
  },
  {
    icon: Building2,
    title: "College Selection",
    desc: "Smart shortlists matched to your scores, budget, and preferences.",
    color: "bg-sky/30",
    iconBg: "bg-sky text-sky-foreground",
    stat: "200+",
    statLabel: "Colleges in DB",
    bullets: ["Cutoff comparison", "Budget filtering", "Hostel & culture notes"],
    emoji: "🏛️",
  },
  {
    icon: TrendingUp,
    title: "Rank-Based Predictions",
    desc: "Data-driven college predictions using past cutoffs & trends.",
    color: "bg-lavender/30",
    iconBg: "bg-lavender text-lavender-foreground",
    stat: "94%",
    statLabel: "Accuracy rate",
    bullets: ["3-year cutoff trends", "Category-wise data", "Probability scoring"],
    emoji: "📊",
  },
  {
    icon: PiggyBank,
    title: "Scholarship Guidance",
    desc: "Discover & apply for scholarships you actually qualify for.",
    color: "bg-accent/25",
    iconBg: "bg-accent text-accent-foreground",
    stat: "₹2L+",
    statLabel: "Avg saved",
    bullets: ["Eligibility matcher", "Application templates", "Deadline tracker"],
    emoji: "💰",
  },
  {
    icon: FileCheck,
    title: "Admission Support",
    desc: "End-to-end help with forms, documents, and counselling rounds.",
    color: "bg-coral/20",
    iconBg: "bg-coral text-coral-foreground",
    stat: "100%",
    statLabel: "Form accuracy",
    bullets: ["Document checklist", "Round-wise strategy", "Mock interviews"],
    emoji: "📝",
  },
  {
    icon: Plane,
    title: "Abroad Guidance",
    desc: "Universities, SOPs, visas — a smooth journey overseas.",
    color: "bg-mint/30",
    iconBg: "bg-mint text-mint-foreground",
    stat: "15+",
    statLabel: "Countries covered",
    bullets: ["Uni shortlisting", "SOP & LOR review", "Visa interview prep"],
    emoji: "✈️",
  },
  {
    icon: Heart,
    title: "Parent Consultation",
    desc: "We bring families together for confident decisions.",
    color: "bg-lavender/30",
    iconBg: "bg-lavender text-lavender-foreground",
    stat: "4.9★",
    statLabel: "Parent rating",
    bullets: ["Family alignment session", "ROI conversations", "Honest expectations"],
    emoji: "👨‍👩‍👧",
  },
];

export const Features = () => {
  const [active, setActive] = useState<number | null>(null);
  const [explored, setExplored] = useState<Set<number>>(new Set());

  const handleHover = (i: number) => {
    setActive(i);
    setExplored((prev) => new Set(prev).add(i));
  };

  const exploredCount = explored.size;
  const total = features.length;

  return (
    <section id="why" className="relative overflow-hidden bg-background py-24">
      <img src={doodleStar} alt="" className="absolute right-10 top-20 h-10 w-10 animate-spin-slow opacity-70" />
      <img src={doodleStar} alt="" className="absolute left-8 bottom-32 h-8 w-8 animate-float-y opacity-60" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            ✦ Why choose ICGC ✦
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Everything you need to
            <br /> choose with{" "}
            <span className="highlight-amber">confidence</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            From your first doubt to your final admission — we walk with you the whole way.
          </p>

          {/* gamified progress strip — psychology: completion + curiosity */}
          <div className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-card">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs font-bold">
              You've explored{" "}
              <span className="text-primary">
                {exploredCount}/{total}
              </span>{" "}
              services
            </span>
            <div className="flex gap-1">
              {features.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-3 rounded-full transition-all ${
                    explored.has(i) ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const isActive = active === i;
            const isExplored = explored.has(i);
            return (
              <button
                key={f.title}
                onMouseEnter={() => handleHover(i)}
                onFocus={() => handleHover(i)}
                onMouseLeave={() => setActive(null)}
                style={{ animationDelay: `${i * 60}ms` }}
                className={`group relative overflow-hidden rounded-2xl border-2 ${
                  isActive ? "border-primary" : "border-border"
                } bg-card p-5 text-left shadow-card transition-all duration-300 hover:-translate-y-2 hover:rotate-[-0.5deg] hover:shadow-playful animate-fade-in`}
              >
                {/* color wash on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${f.color}`}
                />

                {/* explored checkmark — reward signal */}
                {isExplored && (
                  <div className="absolute right-3 top-3 z-10 grid h-5 w-5 place-items-center rounded-full bg-mint text-primary animate-fade-in">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                )}

                <div className="relative z-[1]">
                  <div className="flex items-center justify-between">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-xl ${f.iconBg} shadow-[3px_3px_0_0_hsl(var(--primary))] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]`}
                    >
                      <f.icon className="h-5 w-5" strokeWidth={2.4} />
                    </div>
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                      {f.emoji}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold leading-tight">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>

                  {/* stat strip — credibility anchor */}
                  <div className="mt-3 flex items-baseline gap-1.5 border-t border-dashed border-border pt-3">
                    <span className="font-display text-xl font-bold text-primary">{f.stat}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {f.statLabel}
                    </span>
                  </div>

                  {/* expand-on-hover bullets — info gap / curiosity */}
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
                    <ul className="overflow-hidden">
                      <div className="mt-3 space-y-1.5">
                        {f.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-1.5 text-[11px] font-medium text-foreground/80">
                            <CheckCircle2 className="h-3 w-3 shrink-0 text-primary" />
                            {b}
                          </li>
                        ))}
                      </div>
                    </ul>
                  </div>

                  <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* social-proof CTA — loss aversion */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-primary/20 bg-secondary/40 p-5 text-center sm:flex-row sm:text-left">
          <div className="text-3xl">🎓</div>
          <p className="flex-1 text-sm">
            <span className="font-bold">3 students</span> just booked a free session in the last hour. Your slot is still open.
          </p>
          <a
            href="#book"
            className="btn-playful inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground"
          >
            Claim mine <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};