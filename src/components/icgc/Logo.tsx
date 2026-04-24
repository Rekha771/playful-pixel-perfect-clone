import { Compass } from "lucide-react";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-2.5">
    <div className="relative">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground shadow-[3px_3px_0_0_hsl(var(--primary))]">
        <Compass className="h-5 w-5" strokeWidth={2.5} />
      </div>
    </div>
    <div className="leading-tight">
      <div className={`font-display text-lg font-bold ${light ? "text-primary-foreground" : "text-primary"}`}>ICGC</div>
      <div className={`text-[10px] uppercase tracking-wider ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
        Indian Career Guidance Council
      </div>
    </div>
  </div>
);