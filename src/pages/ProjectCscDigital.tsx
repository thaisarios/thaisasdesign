import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import { useT } from "@/i18n/LanguageContext";
import capa from "@/assets/projects/csc-digital/capa-csc.png";
import noticia from "@/assets/projects/csc-digital/noticia1.png";
import telas from "@/assets/projects/csc-digital/telas-prototipo.png";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7 },
};

const CSC_BLUE = "hsl(210,80%,60%)";

const ProjectCscDigital = () => {
  const { t } = useT();
  const c = t.cscCase;
  const common = t.common;

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <CustomCursor />

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/20">
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link to="/" data-hover aria-label={common.back} className="flex items-center gap-2 font-mono-alt text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {common.back}
          </Link>
          <Link to="/" data-hover className="font-display text-sm font-bold tracking-tight">
            THAISA <span className="text-accent">S</span>
          </Link>
          <span className="font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground hidden md:block">{c.caseCount}</span>
        </div>
      </header>

      <section className="min-h-screen relative flex flex-col justify-end pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30" style={{ background: CSC_BLUE }} />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-mono-alt text-sm uppercase tracking-[0.3em] mb-8" style={{ color: CSC_BLUE }}>{c.kicker}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight max-w-5xl">
            {c.h1a} <span style={{ color: CSC_BLUE }}>{c.h1b}</span>.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">{c.heroP}</motion.p>
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.4 }} className="mt-16 rounded-2xl overflow-hidden border border-border/30 shadow-2xl">
            <img src={capa} alt="CSC Digital" className="w-full h-auto block" loading="eager" />
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
          <motion.div {...fadeUp} className="mt-10 flex flex-wrap gap-2">
            {c.tags.map((tag: string) => (
              <span key={tag} className="font-mono-alt text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-foreground/10 text-foreground/50">{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="md:col-span-5">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4" style={{ color: CSC_BLUE }}>{c.problemTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">{c.problemTitle}</h2>
          </motion.div>
          <motion.div {...fadeUp} className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{c.problemP1}</p>
            <p>{c.problemP2}</p>
            <div className="rounded-xl overflow-hidden border border-border/30 bg-white p-4">
              <img src={noticia} alt="" className="w-full h-auto block" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="md:col-span-4">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4" style={{ color: CSC_BLUE }}>{c.roleTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">{c.roleTitle}</h2>
          </motion.div>
          <motion.ul {...fadeUp} className="md:col-span-7 md:col-start-6 space-y-4 text-lg text-muted-foreground">
            {c.roleItems.map((item: string) => (
              <li key={item} className="flex gap-4 leading-relaxed">
                <span className="font-mono-alt text-xs mt-2 shrink-0" style={{ color: CSC_BLUE }}>●</span>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4" style={{ color: CSC_BLUE }}>{c.discoveryTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{c.discoveryTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.discoveryP}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {c.discovery.map((d: any, i: number) => (
              <motion.div key={d.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm">
                <p className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4" style={{ color: CSC_BLUE }}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-xl font-bold mb-3">{d.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-6">
            {c.stats.map((d: any) => (
              <div key={d.kpi} className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm">
                <p className="font-display text-5xl md:text-6xl font-extrabold leading-none mb-4" style={{ color: CSC_BLUE }}>{d.kpi}</p>
                <p className="font-display text-lg font-semibold mb-1">{d.label}</p>
                <p className="font-mono-alt text-xs uppercase tracking-[0.2em] text-muted-foreground">{d.sub}</p>
              </div>
            ))}
          </motion.div>
          <p className="mt-6 font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.researchCaption}</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(210,40%,10%)] to-[hsl(210,30%,14%)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4" style={{ color: CSC_BLUE }}>{c.personaTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{c.personaTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.personaP}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.personas.map((p: any) => (
              <motion.div key={p.name} {...fadeUp} className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-display text-2xl font-bold" style={{ background: `${CSC_BLUE}33`, color: CSC_BLUE }}>
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold">{p.name}, {p.age}</p>
                    <p className="text-sm text-muted-foreground">{p.ctx}</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {p.points.map(([label, text]: [string, string]) => (
                    <li key={label}>
                      <p className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-1" style={{ color: CSC_BLUE }}>{label}</p>
                      <p className="text-foreground/80 leading-relaxed">{text}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4" style={{ color: CSC_BLUE }}>{c.journeyTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{c.journeyTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.journeyP}</p>
          </motion.div>
          <motion.div {...fadeUp} className="relative">
            <div className="hidden md:block absolute top-5 left-0 right-0 h-px" style={{ background: `${CSC_BLUE}55` }} />
            <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
              {c.journey.map((e: any, i: number) => (
                <div key={e.step} className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-mono-alt text-xs font-bold mb-4 relative z-10" style={{ background: CSC_BLUE, color: "hsl(var(--background))" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-display text-lg font-bold mb-3">{e.step}</p>
                  <p className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-1" style={{ color: CSC_BLUE }}>{c.journeyGoal}</p>
                  <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{e.goal}</p>
                  <p className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-1 text-muted-foreground">{c.journeyPain}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.pain}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4" style={{ color: CSC_BLUE }}>{c.hmwTag}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">{c.hmwTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.hmwP}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.hmw.map((row: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm space-y-4">
                <div>
                  <p className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-2 text-muted-foreground">{c.hmwLabels.pain}</p>
                  <p className="text-foreground/80 leading-relaxed">{row.pain}</p>
                </div>
                <div>
                  <p className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: CSC_BLUE }}>{c.hmwLabels.hmw}</p>
                  <p className="font-display text-lg font-semibold leading-snug">{row.hmw}</p>
                </div>
                <div>
                  <p className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-2 text-muted-foreground">{c.hmwLabels.sol}</p>
                  <p className="text-foreground/80 leading-relaxed">{row.sol}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4" style={{ color: CSC_BLUE }}>{c.systemTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{c.systemTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.systemP}</p>
          </motion.div>
          <motion.div {...fadeUp} className="flex flex-wrap items-center gap-2">
            <p className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mr-2" style={{ color: CSC_BLUE }}>{c.paletteLabel}</p>
            {[
              { name: "Primary", hex: "#1351B4" },
              { name: "Primary 80", hex: "#2670E8" },
              { name: "Accent", hex: "#FF8A3D" },
              { name: "Soft", hex: "#FFD9B3" },
              { name: "Success", hex: "#168821" },
              { name: "Warning", hex: "#FFCD07" },
              { name: "Danger", hex: "#E52207" },
              { name: "Ink", hex: "#1B1B1B" },
            ].map((sw) => (
              <div key={sw.hex} title={`${sw.name} · ${sw.hex}`} className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full border border-border/30 bg-card/40">
                <span className="w-5 h-5 rounded-full border border-foreground/10 shrink-0" style={{ background: sw.hex }} />
                <span className="font-mono-alt text-[10px] uppercase tracking-wider text-foreground/70">{sw.hex}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(210,50%,12%)] to-[hsl(210,30%,16%)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4" style={{ color: CSC_BLUE }}>{c.protoTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">{c.protoTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{c.protoP}</p>
          </motion.div>
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/30">
            <img src={telas} alt="" className="w-full h-auto block" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4" style={{ color: CSC_BLUE }}>{c.learnTag}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">{c.learnTitle}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {c.learnings.map((r: any, i: number) => (
              <motion.div key={r.kpi} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm">
                <p className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: CSC_BLUE }}>{r.kpi}</p>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp} className="font-display text-2xl md:text-3xl font-semibold leading-snug max-w-3xl">
            {c.learnQuoteA} <span style={{ color: CSC_BLUE }}>{c.learnQuoteB}</span>{c.learnQuoteC}
          </motion.p>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: `radial-gradient(circle at 30% 50%, ${CSC_BLUE} 0%, transparent 60%)` }} />
        <div className="container mx-auto px-6 md:px-12 relative text-center">
          <motion.h2 {...fadeUp} className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            {c.ctaTitleA} <span style={{ color: CSC_BLUE }}>{c.ctaTitleB}</span>{c.ctaTitleC}
          </motion.h2>
          <motion.p {...fadeUp} className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">{c.ctaP}</motion.p>
          <motion.div {...fadeUp} className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.behance.net/gallery/219069437/CSC-Digital-Caderneta-de-Saude-da-Crianca" target="_blank" rel="noopener noreferrer" data-hover className="font-mono-alt text-sm uppercase tracking-wider px-6 py-3 rounded-full text-background inline-flex items-center gap-2 transition-opacity hover:opacity-90" style={{ background: CSC_BLUE }}>
              {c.ctaBehance} <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="https://thaisarios.medium.com/ajudando-respons%C3%A1veis-a-acompanhar-a-sa%C3%BAde-e-o-desenvolvimento-de-seus-filhos-2354fd960151" target="_blank" rel="noopener noreferrer" data-hover className="font-mono-alt text-sm uppercase tracking-wider border px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors hover:bg-foreground/5" style={{ borderColor: CSC_BLUE, color: CSC_BLUE }}>
              {c.ctaMedium} <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link to="/projetos/filmes-desmontados" data-hover className="font-mono-alt text-sm uppercase tracking-wider border border-foreground/20 text-foreground/70 px-6 py-3 rounded-full hover:border-foreground/50 hover:text-foreground transition-colors">
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

export default ProjectCscDigital;
