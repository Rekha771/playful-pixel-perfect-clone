import { ArrowRight, Sparkles, Compass, Target } from "lucide-react";
import doodleStar from "@/assets/doodle-star.png";
import { CollegePredictor } from "./CollegePredictor";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 text-primary-foreground">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-coral/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 star-bg opacity-60" />

      {/* floating doodles */}
      <img
        src={doodleStar}
        alt=""
        className="pointer-events-none absolute top-32 left-8 h-10 w-10 animate-float-y opacity-90"
      />
      <img
        src={doodleStar}
        alt=""
        className="pointer-events-none absolute bottom-32 right-16 h-8 w-8 animate-spin-slow opacity-80"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.15fr_1fr]">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80 backdrop-blur">
            <Sparkles className="h-3 w-3 text-accent" />
            Career counselling for Indian students
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-[5.5rem]">
            The right career
            <br />
            shouldn't be a{" "}
            <span className="relative inline-block">
              <span
                className="relative z-10 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, hsl(var(--coral)) 0%, hsl(320 90% 70%) 45%, hsl(var(--lavender)) 100%)",
                }}
              >
                guess.
              </span>
              <svg
                viewBox="0 0 200 18"
                className="absolute -bottom-3 left-0 h-3 w-full"
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

          <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
            Honest, structured, one-on-one career counselling — using real data, real
            conversations, and zero pressure. So you own the path you choose.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="btn-playful inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground"
            >
              Request Your First Session <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#what"
              className="inline-flex items-center gap-2 rounded-2xl border border-primary-foreground/25 bg-primary-foreground/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/10"
            >
              <Compass className="h-4 w-4" /> Explore What We Do
            </a>
          </div>

          {/* Mini stats inline */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-primary-foreground">500+</span>
              <span>Students guided</span>
            </div>
            <span className="h-4 w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-primary-foreground">8 Yrs</span>
              <span>In practice</span>
            </div>
            <span className="h-4 w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold text-primary-foreground">4.9★</span>
              <span>Rated by parents</span>
            </div>
          </div>
        </div>

        {/* RIGHT — College Predictor */}
        <div className="relative">
          <div className="absolute -top-4 -right-2 z-10 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-playful animate-wiggle">
            <Target className="h-3 w-3" /> Try it free
          </div>
          <CollegePredictor />
        </div>
      </div>
    </section>
  );
};