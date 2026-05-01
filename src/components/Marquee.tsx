const Marquee = () => {
  const items = [
    "UX/UI Design",
    "Product Design",
    "Figma",
    "Inovação",
    "Design Systems",
    "Prototipação",
    "User Research",
    "Design Thinking",
    "Estratégia",
    "Irreverência",
  ];

  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-4">
      <span className="text-sm md:text-base font-mono-alt uppercase tracking-widest text-foreground/70">
        {item}
      </span>
      <span className="text-primary text-lg">✦</span>
    </span>
  ));

  return (
    <div className="w-full overflow-hidden border-y border-border/30 py-4">
      <div className="flex animate-marquee gap-4 whitespace-nowrap">
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;