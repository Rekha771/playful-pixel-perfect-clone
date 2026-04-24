import { useMemo, useState } from "react";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  RotateCcw,
  MapPin,
  Trophy,
  Hash,
  Users,
  Layers,
  Compass,
  Loader2,
} from "lucide-react";

type Exam = "JEE Main" | "NEET" | "CUET" | "BITSAT";
type Category = "General" | "OBC" | "SC" | "ST" | "EWS";
type Domain = "Computer Science" | "Electronics" | "Mechanical" | "Medical" | "Business";
type StateOpt = "Any State" | "Maharashtra" | "Delhi" | "Karnataka" | "Tamil Nadu";

const examTone: Record<Exam, string> = {
  "JEE Main": "bg-accent text-accent-foreground",
  NEET: "bg-coral text-coral-foreground",
  CUET: "bg-mint text-mint-foreground",
  BITSAT: "bg-lavender text-lavender-foreground",
};

const exams: Exam[] = ["JEE Main", "NEET", "CUET", "BITSAT"];
const categories: Category[] = ["General", "OBC", "SC", "ST", "EWS"];
const domains: Domain[] = ["Computer Science", "Electronics", "Mechanical", "Medical", "Business"];
const states: StateOpt[] = ["Any State", "Maharashtra", "Delhi", "Karnataka", "Tamil Nadu"];

const collegePool: { name: string; state: StateOpt; domain: Domain; exam: Exam; baseRank: number; tag: string }[] = [
  { name: "IIT Bombay — CSE", state: "Maharashtra", domain: "Computer Science", exam: "JEE Main", baseRank: 500, tag: "Tier 1" },
  { name: "NIT Trichy — ECE", state: "Tamil Nadu", domain: "Electronics", exam: "JEE Main", baseRank: 4000, tag: "Tier 1" },
  { name: "IIIT Hyderabad — CSD", state: "Any State", domain: "Computer Science", exam: "JEE Main", baseRank: 3000, tag: "Tier 1" },
  { name: "VJTI Mumbai — CSE", state: "Maharashtra", domain: "Computer Science", exam: "JEE Main", baseRank: 15000, tag: "State Tier 1" },
  { name: "DTU Delhi — Mechanical", state: "Delhi", domain: "Mechanical", exam: "JEE Main", baseRank: 12000, tag: "Tier 1" },
  { name: "AIIMS Delhi — MBBS", state: "Delhi", domain: "Medical", exam: "NEET", baseRank: 100, tag: "Tier 1" },
  { name: "Maulana Azad MC — MBBS", state: "Delhi", domain: "Medical", exam: "NEET", baseRank: 800, tag: "Tier 1" },
  { name: "Govt Medical College, Pune", state: "Maharashtra", domain: "Medical", exam: "NEET", baseRank: 8000, tag: "State Tier 1" },
  { name: "BJ Medical College", state: "Maharashtra", domain: "Medical", exam: "NEET", baseRank: 12000, tag: "State Tier 1" },
  { name: "BITS Pilani — CSE", state: "Any State", domain: "Computer Science", exam: "BITSAT", baseRank: 2000, tag: "Tier 1" },
  { name: "BITS Goa — ECE", state: "Any State", domain: "Electronics", exam: "BITSAT", baseRank: 5000, tag: "Tier 1" },
  { name: "DU — Shri Ram College of Commerce", state: "Delhi", domain: "Business", exam: "CUET", baseRank: 1500, tag: "Tier 1" },
  { name: "Christ University — BBA", state: "Karnataka", domain: "Business", exam: "CUET", baseRank: 8000, tag: "Tier 1" },
  { name: "Hindu College — Eco (H)", state: "Delhi", domain: "Business", exam: "CUET", baseRank: 2200, tag: "Tier 1" },
  { name: "RV College Bangalore — CSE", state: "Karnataka", domain: "Computer Science", exam: "JEE Main", baseRank: 9000, tag: "Tier 1" },
];

const categoryFactor: Record<Category, number> = {
  General: 1,
  EWS: 0.85,
  OBC: 0.65,
  SC: 0.35,
  ST: 0.3,
};

const chanceColor = (c: number) =>
  c >= 75 ? "bg-mint text-primary" : c >= 40 ? "bg-accent text-accent-foreground" : "bg-coral text-coral-foreground";
const chanceLabel = (c: number) => (c >= 75 ? "High" : c >= 40 ? "Moderate" : "Stretch");
const chanceEmoji = (c: number) => (c >= 75 ? "🎯" : c >= 40 ? "✨" : "🚀");

export const CollegePredictor = () => {
  const [exam, setExam] = useState<Exam>("JEE Main");
  const [category, setCategory] = useState<Category>("General");
  const [air, setAir] = useState("");
  const [domain, setDomain] = useState<Domain>("Computer Science");
  const [stateSel, setStateSel] = useState<StateOpt>("Any State");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const numeric = Number(air);
  const isValid = air !== "" && !Number.isNaN(numeric) && numeric > 0;

  const results = useMemo(() => {
    if (!submitted || !isValid) return [];
    const adjustedRank = numeric * categoryFactor[category];
    return collegePool
      .filter((c) => c.exam === exam)
      .filter((c) => c.domain === domain)
      .filter((c) => stateSel === "Any State" || c.state === stateSel || c.state === "Any State")
      .map((c) => {
        const ratio = adjustedRank / c.baseRank;
        let chance = 95;
        if (ratio > 1) chance = Math.max(8, Math.round(95 - (ratio - 1) * 55));
        else chance = Math.min(95, Math.round(70 + (1 - ratio) * 30));
        return { ...c, chance };
      })
      .sort((a, b) => b.chance - a.chance)
      .slice(0, 5);
  }, [submitted, isValid, numeric, category, exam, domain, stateSel]);

  const handlePredict = () => {
    if (!isValid) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const reset = () => {
    setSubmitted(false);
    setAir("");
  };

  // progress bar (psychology: completion drive)
  const filled = [exam, category, air !== "", domain, stateSel].filter(Boolean).length;
  const progress = Math.round((filled / 5) * 100);

  return (
    <div className="relative rounded-3xl bg-card text-card-foreground shadow-playful">
      {/* header */}
      <div className="flex items-center justify-between rounded-t-3xl border-b border-border bg-secondary/60 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="h-4 w-4" />
          </div>
          <div>
            <div className="font-display text-base font-bold leading-tight">College Predictor</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Find your best-fit colleges in seconds
            </div>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-mint/40 px-2.5 py-1 text-[10px] font-bold text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Free
        </span>
      </div>

      {/* progress bar */}
      {!submitted && (
        <div className="px-5 pt-4">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            <span>Profile {progress}% complete</span>
            <span className="text-primary">{progress === 100 ? "Ready!" : `${5 - filled} left`}</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gradient-to-r from-coral via-accent to-mint transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="p-5">
        {!submitted ? (
          <>
            {/* Rank | Score tab */}
            <div className="mb-3 inline-flex rounded-xl bg-secondary p-1 text-[11px] font-bold">
              <button className="rounded-lg bg-card px-3 py-1.5 text-foreground shadow-sm">Rank</button>
              <button className="rounded-lg px-3 py-1.5 text-muted-foreground hover:text-foreground">Score</button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Exam Type" icon={<Sparkles className="h-3 w-3" />}>
                <NativeSelect value={exam} onChange={(v) => setExam(v as Exam)} options={exams} />
              </Field>
              <Field label="Category" icon={<Users className="h-3 w-3" />}>
                <NativeSelect value={category} onChange={(v) => setCategory(v as Category)} options={categories} />
              </Field>

              <Field label="AIR" icon={<Hash className="h-3 w-3" />}>
                <input
                  type="number"
                  inputMode="numeric"
                  placeholder="e.g. 4500"
                  value={air}
                  onChange={(e) => setAir(e.target.value)}
                  className="h-9 w-full rounded-lg border-2 border-border bg-background px-3 text-sm font-bold outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/60 placeholder:font-normal"
                />
              </Field>
              <Field label="Domain Interest" icon={<Layers className="h-3 w-3" />}>
                <NativeSelect value={domain} onChange={(v) => setDomain(v as Domain)} options={domains} />
              </Field>

              <div className="col-span-2">
                <Field label="Preferred State" icon={<Compass className="h-3 w-3" />}>
                  <NativeSelect value={stateSel} onChange={(v) => setStateSel(v as StateOpt)} options={states} />
                </Field>
              </div>
            </div>

            <button
              disabled={!isValid || loading}
              onClick={handlePredict}
              className={`btn-playful mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
                exam ? examTone[exam] : "bg-primary text-primary-foreground"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Crunching cutoffs…
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" /> Predict My College
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="mt-3 text-center text-[10px] text-muted-foreground">
              🔒 No signup needed · Based on 2025 cutoff trends
            </p>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {exam} · {category} · AIR {air}
                </div>
                <div className="mt-1 flex items-center gap-1.5 font-display text-base font-bold">
                  <Trophy className="h-4 w-4 text-accent" />{" "}
                  {results.length > 0 ? `${results.length} colleges matched` : "No exact matches"}
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
              {results.length === 0 && (
                <div className="rounded-xl border-2 border-dashed border-border p-4 text-center text-sm text-muted-foreground">
                  Try widening your state or domain to see matches.
                </div>
              )}
              {results.map((r, i) => (
                <div
                  key={r.name}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="flex items-center justify-between rounded-xl border border-border bg-background p-3 animate-fade-in transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 truncate text-sm font-bold">
                      <MapPin className="h-3 w-3 text-muted-foreground shrink-0" />
                      <span className="truncate">{r.name}</span>
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {r.tag} · {r.state}
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${chanceColor(r.chance)}`}
                  >
                    {chanceEmoji(r.chance)} {r.chance}% · {chanceLabel(r.chance)}
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

const Field = ({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div>
    <label className="mb-1 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
      {icon}
      {label}
    </label>
    {children}
  </div>
);

const NativeSelect = ({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-9 w-full appearance-none rounded-lg border-2 border-border bg-background px-3 pr-7 text-sm font-bold outline-none transition-colors focus:border-primary"
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
    <svg
      className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);