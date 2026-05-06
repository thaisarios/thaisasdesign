import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import { useT } from "@/i18n/LanguageContext";
import capa from "@/assets/projects/pdf-cinema/capa1.png";
import desktop1 from "@/assets/projects/pdf-cinema/desktop.png";
import desktop2 from "@/assets/projects/pdf-cinema/desktop2.png";
import desktop3 from "@/assets/projects/pdf-cinema/desktop3.png";
import tablet1 from "@/assets/projects/pdf-cinema/tablet1.png";
import tablet3 from "@/assets/projects/pdf-cinema/tablet3.png";
import mobile3 from "@/assets/projects/pdf-cinema/mobile3.png";
import mobileMenu from "@/assets/projects/pdf-cinema/mobile-menu.png";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7 },
};

const ProjectPdfCinema = () => {
  const { t } = useT();
  const c = t.pdfCase;
  const common = t.common;

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <CustomCursor />

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/20">
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4 min-w-0">
            <Link to="/" data-hover aria-label={common.back} className="flex items-center gap-2 font-mono-alt text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-accent transition-colors shrink-0">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{common.back}</span>
            </Link>
            <span className="font-mono-alt text-xs text-muted-foreground/40 hidden sm:inline">·</span>
            <span className="font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground hidden sm:block truncate">
              {c.caseCount}
            </span>
          </div>
          <Link to="/" data-hover className="font-display text-sm font-bold tracking-tight shrink-0 mr-[68px] md:mr-[80px]">
            THAISA <span className="text-accent">S</span>
          </Link>
        </div>
      </header>

      <section className="min-h-screen relative flex flex-col justify-end pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-mono-alt text-sm uppercase tracking-[0.3em] text-accent mb-8">
            {c.kicker}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight max-w-5xl break-words hyphens-auto">
            {c.h1a} <span className="text-primary">{c.h1b}</span>.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            {c.heroP}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.4 }} className="mt-16 rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
            <img src={capa} alt="PDF Cinema" className="w-full h-auto block" loading="eager" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {c.meta.map((m: any) => (
              <div key={m.label}>
                <p className="font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{m.label}</p>
                <p className="font-display text-lg md:text-xl font-semibold text-foreground">{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="md:col-span-4">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-primary mb-4">{c.challengeTag}</p>
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
            <img src={desktop1} alt="" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="mt-4 font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.homeDesktop}</p>
        </motion.div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-accent mb-4">{c.iaTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{c.iaTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{c.iaP}</p>
            <div className="flex flex-wrap gap-2">
              {c.categorias.map((cat: string, i: number) => (
                <span key={cat} className={`font-mono-alt text-xs uppercase tracking-[0.2em] px-3 py-2 rounded-full border ${i % 2 === 0 ? "border-primary/40 text-primary" : "border-accent/40 text-accent"}`}>
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/30">
            <img src={desktop2} alt="" className="w-full h-auto block" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(270,30%,10%)] to-[hsl(330,30%,12%)]">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/30 order-2 md:order-1">
            <img src={desktop3} alt="" className="w-full h-auto block" loading="lazy" />
          </motion.div>
          <motion.div {...fadeUp} className="order-1 md:order-2">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-primary mb-4">{c.visualTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{c.visualTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.visualP}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-primary mb-4">{c.systemTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{c.systemTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.systemP}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div {...fadeUp} className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm">
              <p className="font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">{c.paletteLabel}</p>
              <div className="space-y-3">
                {[
                  { hex: "#0A0A0F" },
                  { hex: "#FF2E92" },
                  { hex: "#00D4FF" },
                  { hex: "#F4F4F5" },
                  { hex: "#1F1F26" },
                ].map((sw, i) => (
                  <div key={sw.hex} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg border border-border/30 shrink-0" style={{ background: sw.hex }} />
                    <div className="flex-1 flex justify-between items-baseline">
                      <span className="font-display text-sm font-semibold">{c.paletteNames[i]}</span>
                      <span className="font-mono-alt text-xs text-muted-foreground">{sw.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm">
              <p className="font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">{c.typeLabel}</p>
              <div className="mb-8">
                <p className="font-display text-3xl font-extrabold leading-tight">Sora</p>
                <p className="font-mono-alt text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{c.typeSub}</p>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <button type="button" className="font-mono-alt text-xs uppercase tracking-wider px-5 py-2.5 rounded-full text-background" style={{ background: "#FF2E92" }}>
                  {c.btnPrimary}
                </button>
                <button type="button" className="font-mono-alt text-xs uppercase tracking-wider px-5 py-2.5 rounded-full border" style={{ borderColor: "#00D4FF", color: "#00D4FF" }}>
                  {c.btnSecondary}
                </button>
              </div>
            </motion.div>
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
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden border border-border/30"><img src={tablet1} alt="" className="w-full h-auto block" loading="lazy" /></div>
            <div className="rounded-2xl overflow-hidden border border-border/30"><img src={tablet3} alt="" className="w-full h-auto block" loading="lazy" /></div>
          </motion.div>
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="col-span-1 md:col-start-2 rounded-2xl overflow-hidden border border-border/30"><img src={mobile3} alt="" className="w-full h-auto block" loading="lazy" /></div>
            <div className="col-span-1 rounded-2xl overflow-hidden border border-border/30"><img src={mobileMenu} alt="" className="w-full h-auto block" loading="lazy" /></div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-primary mb-4">{c.resultTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">{c.resultTitle}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.resultados.map((r: any, i: number) => (
              <motion.div key={r.kpi} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm">
                <p className="font-display text-4xl md:text-5xl font-bold text-accent mb-4">{r.kpi}</p>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative text-center">
          <motion.h2 {...fadeUp} className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            {c.ctaTitleA} <span className="text-primary">{c.ctaTitleB}</span>
          </motion.h2>
          <motion.p {...fadeUp} className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">{c.ctaP}</motion.p>
          <motion.div {...fadeUp} className="flex flex-wrap gap-4 justify-center">
            <a href="https://pdfcinema.com/" target="_blank" rel="noopener noreferrer" data-hover className="font-mono-alt text-sm uppercase tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              {c.ctaSite} <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link to="/projetos/csc-digital" data-hover className="font-mono-alt text-sm uppercase tracking-wider border border-accent text-accent px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              {common.nextCase}
            </Link>
            <Link to="/" data-hover className="font-mono-alt text-sm uppercase tracking-wider border border-foreground/20 text-foreground/70 px-6 py-3 rounded-full hover:border-foreground/50 hover:text-foreground transition-colors">
              {common.backToWorks}
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

export default ProjectPdfCinema;
