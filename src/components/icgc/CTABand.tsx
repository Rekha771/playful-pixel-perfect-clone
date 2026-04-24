import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import doodleStar from "@/assets/doodle-star.png";

export const CTABand = () => (
  <section className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground">
    <div className="absolute inset-0 star-bg opacity-50" />
    <img src={doodleStar} alt="" className="absolute left-12 top-12 h-10 w-10 animate-float-y opacity-90" />
    <img src={doodleStar} alt="" className="absolute right-16 bottom-12 h-8 w-8 animate-spin-slow opacity-80" />

    <div className="relative mx-auto max-w-3xl px-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
        <Sparkles className="h-3 w-3" /> Limited counselling slots — Mon–Sat, 10 AM–7 PM IST
      </div>
      <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
        Start with one <span className="highlight-amber">honest</span>
        <br />conversation.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-primary-foreground/75">
        No pressure. No upselling. Just clarity — so you choose a path you'll actually own.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="#book" className="btn-playful inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground">
          Request Your First Session <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="https://wa.me/918378900007"
          className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/10"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Us
        </a>
      </div>
    </div>
  </section>
);