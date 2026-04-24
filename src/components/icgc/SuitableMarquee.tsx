const items = [
  "NEET · MBBS · BDS · AYUSH",
  "JEE · MHT-CET · BITSAT",
  "CUET · State CETs",
  "Engineering Branch Selection",
  "Diploma → Direct 2nd Year",
  "Study Abroad · SOP · LOR · Visa",
  "Scholarships · Loans",
  "Form Filling · Round Strategy",
  "Document Verification",
  "Parent Counselling",
];

export const SuitableMarquee = () => {
  const loop = [...items, ...items];
  return (
    <section id="suitable" className="border-y border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Counselling that covers everything you'll actually face
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-3">
          {loop.map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};