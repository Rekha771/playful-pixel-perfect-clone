import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How does ICGC counselling actually work?",
    a: "We start with a free 1-on-1 conversation to understand your stage, scores, interests and concerns. Then we map your options using real cutoff data, share an honest direction, and stay with you through forms, rounds and final admission.",
  },
  { q: "Is the first session free?", a: "Yes — your first session is 100% free, with zero pressure to buy anything afterwards." },
  { q: "Can my parents join the session?", a: "Absolutely. In fact, we encourage it. Decisions stick when families are aligned." },
  { q: "Which exams and pathways do you cover?", a: "NEET, JEE, MHT-CET, BITSAT, CUET, State CETs, CLAT, design entrances, study abroad, diploma → direct second year, and more." },
  { q: "I'm a diploma / polytechnic student. Do you help me too?", a: "Yes. We have dedicated tracks for diploma students — direct second year admissions, lateral entry, and job-vs-study clarity." },
  { q: "Where are you based and do you offer online sessions?", a: "We're based in Sambhajinagar, Maharashtra. Sessions are available both in-person and online, Mon–Sat, 10 AM–7 PM IST." },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Questions, answered <span className="highlight-amber">honestly.</span>
          </h2>
        </div>
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card shadow-card">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/50"
                >
                  <span className="font-display text-base font-semibold text-foreground">{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? "bg-accent text-accent-foreground" : "bg-muted text-foreground"}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground animate-fade-in">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};