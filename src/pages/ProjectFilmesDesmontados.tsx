import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import { useT } from "@/i18n/LanguageContext";
import desktop1 from "@/assets/projects/filmes-desmontados/desktop1.png";
import desktop2 from "@/assets/projects/filmes-desmontados/desktop2.png";
import desktop3 from "@/assets/projects/filmes-desmontados/desktop3.png";
import mobile1 from "@/assets/projects/filmes-desmontados/mobile1.png";
import mobile2 from "@/assets/projects/filmes-desmontados/mobile2.png";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7 },
};

const FD_BEIGE = "#F0EAD6";
const FD_INK = "#1A1612";

const paletteColors = [
  { hex: FD_BEIGE, dark: false },
  { hex: FD_INK, dark: true },
  { hex: "#F26B1F", dark: true },
  { hex: "#FAF7F0", dark: false },
];

const ProjectFilmesDesmontados = () => {
  const { t } = useT();
  const c = t.filmesCase;
  const common = t.common;

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <CustomCursor />

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/20">
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
            <Link to="/" data-hover aria-label={common.back} className="flex items-center gap-2 font-mono-alt text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-secondary transition-colors shrink-0">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{common.back}</span>
            </Link>
            <span className="font-mono-alt text-xs text-muted-foreground/40 hidden sm:inline">·</span>
            <span className="font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground hidden sm:block truncate">{c.caseCount}</span>
          </div>
          <Link to="/" data-hover className="font-display text-sm font-bold tracking-tight shrink-0">
            THAISA <span className="text-accent">S</span>
          </Link>
          <div className="flex-1 min-w-0" aria-hidden="true" />
        </div>
      </header>

      <section className="min-h-screen relative flex flex-col justify-end pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-mono-alt text-sm uppercase tracking-[0.3em] text-secondary mb-8">{c.kicker}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight max-w-5xl break-words hyphens-auto">
            {c.h1a} <span className="text-secondary">{c.h1b}</span>.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">{c.heroP}</motion.p>
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.4 }} className="mt-16 rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
            <img src={desktop1} alt="" className="w-full h-auto block" loading="eager" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {c.meta.map((m: any) => (
              <div key={m.label}>
                <p className="font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{m.label}</p>
                <p className="font-display text-lg md:text-xl font-semibold">{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="md:col-span-4">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-secondary mb-4">{c.challengeTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">{c.challengeTitle}</h2>
          </motion.div>
          <motion.div {...fadeUp} className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{c.challengeP1}</p>
            <p>{c.challengeP2}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <motion.div {...fadeUp} className="container mx-auto px-6 md:px-12">
          <div className="rounded-2xl overflow-hidden border border-border/30">
            <img src={desktop2} alt="" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="mt-4 font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.mockupCaption}</p>
        </motion.div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-accent mb-4">{c.structTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{c.structTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {c.structP1a}<em>{c.structP1b}</em>{c.structP1c}
            </p>
            <div className="flex flex-wrap gap-2">
              {c.navChips.map((chip: string, i: number) => (
                <span key={chip} className={`font-mono-alt text-xs uppercase tracking-[0.2em] px-3 py-2 rounded-full border ${i % 2 === 0 ? "border-secondary/40 text-secondary" : "border-accent/40 text-accent"}`}>
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/30">
            <img src={desktop3} alt="" className="w-full h-auto block" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(25,30%,10%)] to-[hsl(25,20%,15%)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-secondary mb-4">{c.visualTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{c.visualTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.visualP}</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {paletteColors.map((s, i) => (
              <motion.div key={s.hex} {...fadeUp} className="rounded-2xl overflow-hidden border border-border/30">
                <div className="aspect-square flex items-end p-5" style={{ background: s.hex }}>
                  <span className="font-mono-alt text-[10px] uppercase tracking-[0.2em]" style={{ color: s.dark ? "#FAF7F0" : "#1A1612" }}>{s.hex}</span>
                </div>
                <div className="p-4 bg-card/40 backdrop-blur-sm">
                  <p className="font-display text-sm font-semibold">{c.paletteNames[i]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-accent mb-4">{c.respTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{c.respTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.respP}</p>
          </motion.div>
          <motion.div {...fadeUp} className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border/30"><img src={mobile1} alt="" className="w-full h-auto block" loading="lazy" /></div>
            <div className="rounded-2xl overflow-hidden border border-border/30"><img src={mobile2} alt="" className="w-full h-auto block" loading="lazy" /></div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-secondary mb-4">{c.resultTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">{c.resultTitle}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.resultados.map((r: any, i: number) => (
              <motion.div key={r.kpi} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm">
                <p className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">{r.kpi}</p>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative text-center">
          <motion.h2 {...fadeUp} className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            {c.ctaTitleA} <span className="text-secondary">{c.ctaTitleB}</span>
          </motion.h2>
          <motion.div {...fadeUp} className="flex flex-wrap gap-4 justify-center">
            <a href="https://filmesdesmontados.com/" target="_blank" rel="noopener noreferrer" data-hover className="font-mono-alt text-sm uppercase tracking-wider bg-secondary text-secondary-foreground px-6 py-3 rounded-full hover:bg-secondary/90 transition-colors inline-flex items-center gap-2">
              {c.ctaSite} <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="https://www.behance.net/gallery/219143529/Filmes-Desmontados-Portfolio-Website" target="_blank" rel="noopener noreferrer" data-hover className="font-mono-alt text-sm uppercase tracking-wider border border-accent text-accent px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              {common.caseOnBehance}
            </a>
            <Link to="/projetos/navi" data-hover className="font-mono-alt text-sm uppercase tracking-wider border border-foreground/20 text-foreground/70 px-6 py-3 rounded-full hover:border-foreground/50 hover:text-foreground transition-colors">
              {common.nextCase}
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border/20 py-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-between gap-4 font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>{common.footer.copy}</span>
          <span>{common.footer.made}</span>
        </div>
      </footer>
    </div>
  );
};

export default ProjectFilmesDesmontados;
