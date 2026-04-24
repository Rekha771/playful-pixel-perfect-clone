import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string; chips?: string[] };

const SCRIPT: Record<string, { reply: string; chips?: string[] }> = {
  __start__: {
    reply: "Hey! 👋 I'm Disha, your career buddy. What's on your mind?",
    chips: ["I'm in Class 12", "Diploma student", "JEE/NEET help", "Just exploring"],
  },
  "I'm in Class 12": {
    reply: "Got it! Which stream are you in?",
    chips: ["PCM", "PCB", "Commerce", "Arts"],
  },
  "Diploma student": {
    reply: "Nice — direct 2nd year is a great option. Want me to map colleges for you?",
    chips: ["Yes, show colleges", "Tell me about jobs", "Book a session"],
  },
  "JEE/NEET help": {
    reply: "Try our College Predictor 👆 — drop your rank and I'll show realistic options.",
    chips: ["Open Predictor", "Book a session"],
  },
  "Just exploring": {
    reply: "Love that 💛 Take the 5-min Career Quiz — it's free.",
    chips: ["Take Quiz", "Book a session"],
  },
  PCM: { reply: "Engineering, Architecture, Defense, Data Science — lots of paths! Want me to narrow it down?", chips: ["Yes please", "Book a session"] },
  PCB: { reply: "MBBS, BDS, Allied Health, Biotech, Nursing… each has very different prep. Shall we map them?", chips: ["Yes, map them", "Book a session"] },
  Commerce: { reply: "CA, BBA, Economics, Law, Finance — money-minded paths galore. Curious about any?", chips: ["CA route", "BBA route", "Book a session"] },
  Arts: { reply: "Design, Psychology, Media, Law, UPSC — Arts has serious career heat. 🔥", chips: ["Tell me more", "Book a session"] },
  "Yes please": { reply: "Cool — a 15-min free session works best for this. Should I set it up?", chips: ["Book a session"] },
  "Yes, map them": { reply: "Done. Let's do it on a quick call so I can see your scores too.", chips: ["Book a session"] },
  "CA route": { reply: "CA Foundation → Inter → Final. Avg 4 yrs if you're disciplined. ✨", chips: ["Book a session"] },
  "BBA route": { reply: "Aim for IIM-I/NMIMS/Christ. Entrance prep starts in Class 11. 📚", chips: ["Book a session"] },
  "Tell me more": { reply: "Each path needs a different aptitude check. Free quiz takes 5 mins.", chips: ["Take Quiz", "Book a session"] },
  "Yes, show colleges": { reply: "Use the Predictor on the right — pick MHT-CET and drop percentile.", chips: ["Book a session"] },
  "Tell me about jobs": { reply: "Diploma + 2 yrs experience = ₹3.5–6 LPA in core. With B.Tech, 6–14 LPA.", chips: ["Book a session"] },
  "Take Quiz": { reply: "Scroll down to the Tools section — Career Quiz is the second card. ⬇️", chips: ["Book a session"] },
  "Open Predictor": { reply: "It's right at the top — green badge that says 'Try it free' 👆", chips: ["Book a session"] },
  "Book a session": { reply: "Brilliant 🎉 Scroll to the booking form — takes 30 seconds. See you there!", chips: [] },
};

export const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [unread, setUnread] = useState(1);
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: SCRIPT.__start__.reply, chips: SCRIPT.__start__.chips },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // auto-open teaser after 8s
  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 12000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  useEffect(() => {
    if (open) setUnread(0);
  }, [open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMsgs((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const node =
        SCRIPT[trimmed] ?? {
          reply:
            "Good question — that's worth a real conversation. Want to book a free 15-min session?",
          chips: ["Book a session"],
        };
      setMsgs((m) => [...m, { from: "bot", text: node.reply, chips: node.chips }]);
      setTyping(false);
      if (!open) setUnread((u) => u + 1);
    }, 700);
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className={`fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-playful transition-all hover:scale-105 ${
          open ? "rotate-90" : ""
        }`}
      >
        {open ? <X className="h-6 w-6" strokeWidth={2.5} /> : <MessageCircle className="h-6 w-6" strokeWidth={2.5} />}
        {!open && unread > 0 && (
          <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1.5 text-[10px] font-bold text-coral-foreground">
            {unread}
          </span>
        )}
        {!open && pulse && (
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
        )}
      </button>

      {/* teaser bubble */}
      {!open && pulse && (
        <div className="fixed bottom-6 right-24 z-50 hidden max-w-[220px] animate-fade-in items-center gap-2 rounded-2xl rounded-br-sm border border-border bg-card px-3.5 py-2.5 text-xs font-medium text-foreground shadow-playful md:flex">
          <Sparkles className="h-3.5 w-3.5 text-accent shrink-0" />
          Hey! Confused about your career? Ask me 👋
        </div>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[520px] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-3xl border-2 border-primary bg-card text-card-foreground shadow-playful animate-fade-in">
          {/* header */}
          <div className="flex items-center gap-3 bg-primary p-4 text-primary-foreground">
            <div className="relative grid h-10 w-10 place-items-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground">
              D
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-primary bg-emerald-400" />
            </div>
            <div className="flex-1">
              <div className="font-display text-sm font-bold">Disha · Career Buddy</div>
              <div className="text-[10px] text-primary-foreground/70">Usually replies instantly</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-secondary/40 p-4">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[85%]">
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed animate-fade-in ${
                      m.from === "user"
                        ? "rounded-br-sm bg-primary text-primary-foreground"
                        : "rounded-bl-sm border border-border bg-card text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.from === "bot" && m.chips && m.chips.length > 0 && i === msgs.length - 1 && !typing && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.chips.map((c) => (
                        <button
                          key={c}
                          onClick={() => send(c)}
                          className="rounded-full border border-primary bg-card px-3 py-1 text-[11px] font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-border bg-card px-3.5 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/60 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/60 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/60" />
                </div>
              </div>
            )}
          </div>

          {/* input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border bg-card p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 rounded-full border-2 border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground disabled:opacity-50"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};