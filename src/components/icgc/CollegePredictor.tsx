import { useMemo, useState } from "react";
import { GraduationCap, Sparkles, ArrowRight, RotateCcw, MapPin, Trophy } from "lucide-react";

type Exam = "JEE" | "NEET" | "MHT-CET" | "CLAT";

const examConfig: Record<Exam, { max: number; unit: string; tone: string }> = {
  JEE: { max: 1_200_000, unit: "rank", tone: "bg-accent text-accent-foreground" },
  NEET: { max: 1_500_000, unit: "rank", tone: "bg-coral text-coral-foreground" },
  "MHT-CET": { max: 100, unit: "percentile", tone: "bg-mint text-mint-foreground" },
  CLAT: { max: 80_000, unit: "rank", tone: "bg-lavender text-lavender-foreground" },
};

const colleges: Record<Exam, { name: string; chance: (v: number) => number; tag: string }[]> = {
  JEE: [
    { name: "IIT Bombay — CSE", tag: "Tier 1", chance: (v) => (v < 500 ? 92 : v < 2000 ? 55 : 8) },
    { name: "NIT Trichy — ECE", tag: "Tier 1", chance: (v) => (v < 4000 ? 88 : v < 10000 ? 60 : 18) },
    { name: "IIIT Hyderabad — CSD", tag: "Tier 1", chance: (v) => (v < 3000 ? 85 : v < 8000 ? 58 : 15) },
    { name: "VJTI Mumbai — CSE", tag: "State Tier 1", chance: (v) => (v < 15000 ? 80 : 35) },
  ],
  NEET: [
    { name: "AIIMS Delhi — MBBS", tag: "Tier 1", chance: (v) => (v < 100 ? 95 : v < 1000 ? 50 : 5) },
    { name: "Maulana Azad MC — MBBS", tag: "Tier 1", chance: (v) => (v < 800 ? 90 : v < 3000 ? 55 : 12) },
    { name: "Govt Medical College, Pune", tag: "State Tier 1", chance: (v) => (v < 8000 ? 85 : v < 25000 ? 50 : 18) },
    { name: "BJ Medical College", tag: "State Tier 1", chance: (v) => (v < 12000 ? 80 : 35) },
  ],
  "MHT-CET": [
    { name: "COEP Pune — CSE", tag: "Tier 1", chance: (v) => (v > 99.5 ? 92 : v > 98 ? 60 : 15) },
    { name: "VJTI Mumbai — IT", tag: "Tier 1", chance: (v) => (v > 99 ? 88 : v > 97 ? 55 : 18) },
    { name: "PICT Pune — CSE", tag: "Tier 2", chance: (v) => (v > 98 ? 85 : v > 95 ? 60 : 25) },
    { name: "MIT WPU — Direct 2nd Yr", tag: "Diploma", chance: (v) => (v > 90 ? 90 : 65) },
  ],
  CLAT: [
    { name: "NLSIU Bangalore", tag: "Tier 1", chance: (v) => (v < 80 ? 95 : v < 300 ? 50 : 5) },
    { name: "NALSAR Hyderabad", tag: "Tier 1", chance: (v) => (v < 200 ? 88 : v < 700 ? 55 : 15) },
    { name: "NLU Delhi", tag: "Tier 1", chance: (v) => (v < 250 ? 85 : v < 1000 ? 55 : 18) },
    { name: "GNLU Gandhinagar", tag: "Tier 2", chance: (v) => (v < 1500 ? 80 : 35) },
  ],
};

const chanceColor = (c: number) =>
  c >= 75 ? "bg-mint text-primary" : c >= 40 ? "bg-accent text-accent-foreground" : "bg-coral text-coral-foreground";

const chanceLabel = (c: number) => (c >= 75 ? "High" : c >= 40 ? "Moderate" : "Stretch");

export const CollegePredictor = () => {
  const [exam, setExam] = useState<Exam>("JEE");
  const [value, setValue] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const cfg = examConfig[exam];
  const numeric = Number(value);
  const isValid = value !== "" && !Number.isNaN(numeric) && numeric > 0 && numeric <= cfg.max;

  const results = useMemo(() => {
    if (!submitted || !isValid) return [];
    return colleges[exam]
      .map((c) => ({ ...c, chance: c.chance(numeric) }))
      .sort((a, b) => b.chance - a.chance);
  }, [submitted, exam, numeric, isValid]);

  const reset = () => {
    setSubmitted(false);
    setValue("");
  };

  return (
    <div className="relative rounded-3xl bg-card text-card-foreground shadow-playful">
      {/* header strip */}
      <div className="flex items-center justify-between rounded-t-3xl border-b border-border bg-secondary/60 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-4 w-4" />
          </div>
          <div>
            <div className="font-display text-sm font-bold">College Predictor</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Live · 2025 cutoffs
            </div>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-mint/30 px-2.5 py-1 text-[10px] font-bold text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Free
        </span>
      </div>

      <div className="p-5">
        {!submitted ? (
          <>
            <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Choose your exam
            </label>
            <div className="mt-2 grid grid-cols-4 gap-1.5">
              {(Object.keys(examConfig) as Exam[]).map((e) => (
                <button
                  key={e}
                  onClick={() => {
                    setExam(e);
                    setValue("");
                  }}
                  className={`rounded-xl px-2 py-2 text-xs font-bold transition-all ${
                    exam === e
                      ? `${examConfig[e].tone} shadow-[2px_2px_0_0_hsl(var(--primary))]`
                      : "bg-secondary text-muted-foreground hover:bg-secondary/70"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>

            <label className="mt-5 block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Your {cfg.unit}
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-xl border-2 border-border bg-background px-3 py-2 focus-within:border-primary">
              <input
                type="number"
                inputMode="numeric"
                placeholder={cfg.unit === "percentile" ? "e.g. 99.2" : "e.g. 4500"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full bg-transparent font-display text-lg font-bold outline-none placeholder:text-muted-foreground/60"
              />
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {cfg.unit}
              </span>
            </div>

            <button
              disabled={!isValid}
              onClick={() => setSubmitted(true)}
              className="btn-playful mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Sparkles className="h-4 w-4" /> Predict my colleges
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="mt-3 text-center text-[10px] text-muted-foreground">
              Demo predictor · For full analysis, book a free 15-min call.
            </p>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {exam} · {value} {cfg.unit}
                </div>
                <div className="mt-1 flex items-center gap-1.5 font-display text-base font-bold">
                  <Trophy className="h-4 w-4 text-accent" /> {results.length} colleges matched
                </div>
              </div>
              <button
                onClick={reset}
                className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1.5 text-[11px] font-bold text-foreground hover:bg-secondary/70"
              >
                <RotateCcw className="h-3 w-3" /> Reset
              </button>
            </div>

            <div className="mt-3 space-y-2">
              {results.map((r, i) => (
                <div
                  key={r.name}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="flex items-center justify-between rounded-xl border border-border bg-background p-3 animate-fade-in"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 truncate text-sm font-bold">
                      <MapPin className="h-3 w-3 text-muted-foreground shrink-0" />
                      <span className="truncate">{r.name}</span>
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {r.tag}
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${chanceColor(
                      r.chance,
                    )}`}
                  >
                    {r.chance}% · {chanceLabel(r.chance)}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#book"
              className="btn-playful mt-4 flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground"
            >
              Get a real strategy session <ArrowRight className="h-4 w-4" />
            </a>
          </>
        )}
      </div>
    </div>
  );
};