export function MarqueeSection() {
  const words = [
    "PASSION",
    "MÉCANIQUE",
    "DRIFT",
    "RIDERS",
    "GARAGE",
    "ADRÉNALINE",
    "COMMUNAUTÉ",
    "PERFORMANCE",
    "FRANCE",
    "CRÉATION",
  ]

  return (
    <section className="py-8 bg-primary overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words].map((word, index) => (
          <span
            key={index}
            className="mx-8 text-2xl sm:text-3xl font-black text-primary-foreground/90 uppercase tracking-wider"
          >
            {word}
            <span className="mx-8 text-primary-foreground/40">•</span>
          </span>
        ))}
      </div>
    </section>
  )
}
