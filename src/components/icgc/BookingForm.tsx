import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const bullets = [
  "First session is 100% free",
  "Online or in-person (Sambhajinagar)",
  "Parents are welcome on the call",
  "Information kept fully confidential",
];

export const BookingForm = () => {
  const [tab, setTab] = useState<"step1" | "step2">("step1");

  return (
    <section id="book" className="relative overflow-hidden bg-background py-24">
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
      <div className="absolute -right-20 bottom-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Request your first session
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Start with one <span className="highlight-amber">honest</span>
            <br />conversation.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Fill in the form. We will reach out within 24 hours to schedule your session — Mon to Sat, 10 AM to 7 PM IST.
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-mint text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (tab === "step1") setTab("step2");
            else toast.success("Thanks! We'll reach out within 24 hours.");
          }}
          className="rounded-3xl border border-border bg-card p-6 shadow-playful"
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {(["step1", "step2"] as const).map((s, i) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setTab(s)}
                  className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                    tab === s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  Step {i + 1}
                </button>
              ))}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              ~ 1 minute
            </span>
          </div>

          {tab === "step1" ? (
            <div className="space-y-4 animate-fade-in">
              <Field label="Student name" placeholder="e.g. Riya Sharma" />
              <Field label="Email address" placeholder="you@example.com" type="email" />
              <Field label="Phone number" placeholder="+91 ..." type="tel" />
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <SelectField label="Current stage" options={["Class 11", "Class 12", "After 12th", "Diploma student", "Other"]} />
              <SelectField label="Main concern" options={["Stream selection", "College selection", "Exam strategy", "Study abroad", "Scholarships"]} />
              <Field label="Tell us briefly" placeholder="A line about where you're stuck..." />
            </div>
          )}

          <button
            type="submit"
            className="btn-playful mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-bold text-accent-foreground"
          >
            {tab === "step1" ? "Continue" : "Submit Request"} <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            By submitting you agree to be contacted by ICGC. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
};

const Field = ({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <label className="block">
    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
      {label}
    </span>
    <input
      required
      {...props}
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-accent/40"
    />
  </label>
);

const SelectField = ({ label, options }: { label: string; options: string[] }) => (
  <label className="block">
    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
      {label}
    </span>
    <select
      required
      defaultValue=""
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-accent/40"
    >
      <option value="" disabled>Select…</option>
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  </label>
);