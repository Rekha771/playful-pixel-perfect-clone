import {
  UserRound,
  Map,
  Building2,
  TrendingUp,
  PiggyBank,
  FileCheck,
  Plane,
  Heart,
} from "lucide-react";
import doodleStar from "@/assets/doodle-star.png";

const features = [
  { icon: UserRound, title: "Personalized Counselling", desc: "1-on-1 sessions tailored to your interests, strengths, and goals.", color: "bg-coral/30" },
  { icon: Map, title: "Career Roadmap", desc: "A clear, step-by-step plan from school to your first job.", color: "bg-mint/40" },
  { icon: Building2, title: "College Selection", desc: "Smart shortlists matched to your scores, budget, and preferences.", color: "bg-sky/40" },
  { icon: TrendingUp, title: "Rank-Based Predictions", desc: "Data-driven college predictions using past cutoffs & trends.", color: "bg-lavender/40" },
  { icon: PiggyBank, title: "Scholarship Guidance", desc: "Discover & apply for scholarships you actually qualify for.", color: "bg-accent/40" },
  { icon: FileCheck, title: "Admission Support", desc: "End-to-end help with forms, documents, and counselling rounds.", color: "bg-coral/30" },
  { icon: Plane, title: "Abroad Guidance", desc: "Universities, SOPs, visas — a smooth journey overseas.", color: "bg-mint/40" },
  { icon: Heart, title: "Parent Consultation", desc: "We bring families together for confident decisions.", color: "bg-lavender/40" },
];

export const Features = () => (
  <section id="why" className="relative overflow-hidden bg-background py-24">
    <img src={doodleStar} alt="" className="absolute right-10 top-20 h-10 w-10 animate-spin-slow opacity-70" />
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
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={f.title}
            style={{ animationDelay: `${i * 60}ms` }}
            className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-playful animate-fade-in"
          >
            <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl ${f.color} ring-1 ring-primary/10`}>
              <f.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
            </div>
            <h3 className="font-display text-lg font-bold">{f.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);