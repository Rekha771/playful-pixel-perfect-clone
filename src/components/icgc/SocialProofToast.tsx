import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

const events = [
  { name: "Karthik from Chennai", action: "just got admission help" },
  { name: "Ananya from Pune", action: "booked her first session" },
  { name: "Rohan from Mumbai", action: "got his college shortlist" },
  { name: "Meera from Nashik", action: "found a scholarship match" },
  { name: "Aditya from Nagpur", action: "started CUET planning" },
];

export const SocialProofToast = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    const show = setTimeout(() => setVisible(true), 4000);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % events.length);
        setVisible(true);
      }, 400);
    }, 7000);
    return () => {
      clearTimeout(show);
      clearInterval(interval);
    };
  }, [closed]);

  if (closed || !visible) return null;
  const e = events[index];

  return (
    <div className="fixed bottom-5 left-5 z-40 flex items-center gap-3 rounded-2xl border border-border bg-card p-3 pr-4 shadow-playful animate-fade-in max-w-[320px]">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mint/40">
        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
      </div>
      <div className="min-w-0">
        <div className="truncate text-sm font-bold">{e.name}</div>
        <div className="text-xs text-muted-foreground">{e.action}</div>
      </div>
      <button
        onClick={() => setClosed(true)}
        className="ml-1 grid h-6 w-6 place-items-center rounded-full text-muted-foreground hover:bg-muted"
        aria-label="Close"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};