import { ArrowRight, Sparkles, Users, Calendar, Compass } from "lucide-react";
import doodleStar from "@/assets/doodle-star.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-24 text-primary-foreground">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-coral/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 star-bg opacity-60" />

      {/* floating doodles */}
      <img
        src={doodleStar}
        alt=""
        className="pointer-events-none absolute top-32 left-12 h-12 w-12 animate-float-y opacity-90"
      />
      <img
        src={doodleStar}
        alt=""
        className="pointer-events-none absolute bottom-32 right-16 h-8 w-8 animate-spin-slow opacity-80"
      />

      {/* "Top rated" sticky badge top-right */}
      <div className="absolute right-6 top-28 hidden md:flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground shadow-playful animate-wiggle">
        <Sparkles className="h-3.5 w-3.5" /> Top rated · 4.9★
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80 backdrop-blur">
          <Sparkles className="h-3 w-3 text-accent" />
          Career counselling for Indian students
        </div>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
          The right career
          <br />
          shouldn't be a{" "}
          <span className="relative inline-block">
            <span className="relative z-10 italic text-accent">guess.</span>
            <svg
              viewBox="0 0 200 18"
              className="absolute -bottom-2 left-0 h-3 w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M2 12 Q 50 2, 100 10 T 198 8"
                stroke="hsl(var(--accent))"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          Honest, structured, one-on-one career counselling — using real data, real
          conversations, and zero pressure. So you own the path you choose.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#book"
            className="btn-playful inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground"
          >
            Request Your First Session <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#what"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/10"
          >
            <Compass className="h-4 w-4" /> Explore What We Do
          </a>
        </div>

        {/* Stat cards */}
        <div className="mt-14 grid grid-cols-3 gap-4 md:gap-6">
          {[
            { icon: Users, value: "500+", label: "Students Guided", color: "bg-accent" },
            { icon: Calendar, value: "8 Yrs", label: "In Practice", color: "bg-mint" },
            { icon: Compass, value: "40+", label: "Paths Mapped", color: "bg-coral" },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{ animationDelay: `${i * 120}ms` }}
              className="group rounded-2xl bg-card p-5 text-card-foreground shadow-playful animate-fade-in transition-transform hover:-translate-y-1"
            >
              <div
                className={`mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full ${s.color} text-primary`}
              >
                <s.icon className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="font-display text-3xl font-bold md:text-4xl">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};