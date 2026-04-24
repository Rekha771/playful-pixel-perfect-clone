import { CalendarDays, MessagesSquare, GraduationCap } from "lucide-react";
import doodlePlanet from "@/assets/doodle-planet.png";
import doodleStar from "@/assets/doodle-star.png";

const steps = [
  {
    icon: CalendarDays,
    title: "Request Your First Session",
    desc: "Tell us your stage and concern. Free, no pressure, no upselling.",
    bg: "bg-accent",
  },
  {
    icon: MessagesSquare,
    title: "Get Honest Guidance",
    desc: "Map your direction, exams, colleges and budget — based on real data.",
    bg: "bg-mint",
  },
  {
    icon: GraduationCap,
    title: "Lock the Right Seat",
    desc: "We stay with you through forms, rounds and admission — till it's done.",
    bg: "bg-coral",
  },
];

export const Steps = () => (
  <section className="relative overflow-hidden bg-background py-24">
    <div className="absolute inset-0 doodle-grid opacity-30" />
    <img src={doodleStar} alt="" className="absolute right-12 top-24 h-10 w-10 animate-spin-slow opacity-80" />
    <img src={doodlePlanet} alt="" className="absolute bottom-10 left-10 h-16 w-16 animate-float-y opacity-90" />

    <div className="relative mx-auto max-w-6xl px-6">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          ✦ How it works ✦
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
          Three steps to <span className="italic text-accent-foreground bg-accent px-2 rounded-md -rotate-1 inline-block">clarity</span>
        </h2>
      </div>

      <div className="relative mt-20 grid gap-12 md:grid-cols-3">
        {/* dotted connector */}
        <svg
          className="pointer-events-none absolute left-0 top-12 hidden w-full md:block"
          height="20"
          viewBox="0 0 800 20"
          preserveAspectRatio="none"
        >
          <path
            d="M 100 10 Q 250 -10, 400 10 T 700 10"
            stroke="hsl(var(--accent))"
            strokeWidth="2"
            strokeDasharray="4 6"
            fill="none"
          />
        </svg>

        {steps.map((s, i) => (
          <div key={s.title} className="relative text-center">
            <div className="mx-auto mb-5 inline-block">
              <div className={`relative grid h-20 w-20 place-items-center rounded-2xl ${s.bg} text-primary shadow-playful rotate-[-4deg]`}>
                <s.icon className="h-9 w-9" strokeWidth={2.2} />
                <span className="absolute -right-3 -top-3 grid h-7 w-7 place-items-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
            </div>
            <h3 className="font-display text-xl font-bold">{s.title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);