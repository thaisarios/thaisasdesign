import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7 },
};

const NAVY = "#0A0F1F";
const NAVI_GREEN = "#3DFF8C";
const NAVI_MAGENTA = "#E940A8";
const OFFWHITE = "#F4F4F5";

const meta = [
  { label: "Sociedade", value: "Thaisa Shalders + Luciana Vivarelli" },
  { label: "Papel", value: "Co-fundadora · Product Designer" },
  { label: "Frentes", value: "UX/UI · Web · Sistemas · Design Systems" },
  { label: "Status", value: "MVP no ar · 2026" },
];

const palette = [
  { name: "Navy profundo", hex: NAVY, dark: true },
  { name: "Verde elétrico", hex: NAVI_GREEN, dark: false },
  { name: "Magenta", hex: NAVI_MAGENTA, dark: true },
  { name: "Off-white", hex: OFFWHITE, dark: false },
];

const dupla = [
  {
    nome: "Thaisa",
    role: "Product Designer · UX/UI",
    color: NAVI_MAGENTA,
    bullets: [
      "Pesquisa, arquitetura e prototipagem",
      "Design systems e guias visuais",
      "Web, mobile e sistemas internos",
    ],
    quote: "Faço pontes entre ideias e pessoas.",
  },
  {
    nome: "Luciana",
    role: "Full-Stack Developer",
    color: NAVI_GREEN,
    bullets: [
      "React, Vue, Flutter e Node",
      "Python e integrações modernas",
      "Front-end com foco em acessibilidade",
    ],
    quote: "Interfaces que unem estética e usabilidade.",
  },
];

const servicos = [
  { titulo: "UX/UI Design", desc: "Web, mobile, sistemas internos." },
  { titulo: "Desenvolvimento Full-Stack", desc: "React, Vue, Node, Python." },
  { titulo: "Pesquisa & Prototipagem", desc: "Validar antes de investir pesado." },
  { titulo: "Design Systems", desc: "Guias visuais consistentes e escaláveis." },
  { titulo: "Performance & SEO", desc: "Código limpo, técnico e otimizado." },
  { titulo: "Manutenção contínua", desc: "Evolução depois do lançamento." },
];

const processo = [
  { n: "01", t: "Conversa", d: "Entender o problema e alinhar escopo antes de qualquer pixel." },
  { n: "02", t: "Pesquisa & estratégia", d: "User research, arquitetura da informação e direção criativa." },
  { n: "03", t: "Design + Dev em paralelo", d: "Protótipo navegável e base técnica caminhando juntos." },
  { n: "04", t: "Entrega & evolução", d: "Handoff sem fricção e acompanhamento pós-lançamento." },
];

const ProjectNavi = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden" style={{ background: NAVY }}>
      <CustomCursor />

      {/* Top nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/20">
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link
            to="/"
            data-hover
            aria-label="Voltar para a home"
            className="flex items-center gap-2 font-mono-alt text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <span className="font-mono-alt text-xs uppercase tracking-[0.3em]" style={{ color: NAVI_GREEN }}>
            [04] · .navi
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" style={{ background: NAVY }}>
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono-alt text-sm uppercase tracking-[0.3em]" style={{ color: NAVI_MAGENTA }}>
                [04]
              </span>
              <span className="font-mono-alt text-sm uppercase tracking-[0.3em] text-white/40">·</span>
              <span className="font-mono-alt text-sm uppercase tracking-[0.3em] text-white/60">
                sociedade
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-white max-w-5xl">
              Quando design e dev sentam{" "}
              <span style={{ color: NAVI_GREEN }}>na mesma mesa</span>.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              .navi nasceu da nossa vontade — Thaisa (design) + Luciana (dev) — de oferecer
              experiências digitais inteiras, sem o vai-e-vem clássico entre quem desenha e quem implementa.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{ borderColor: `${NAVI_GREEN}40`, background: `${NAVI_GREEN}10` }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: NAVI_GREEN }} />
              <span className="font-mono-alt text-xs uppercase tracking-wider" style={{ color: NAVI_GREEN }}>
                Em construção · 2026
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* META GRID */}
      <section className="py-16 border-y border-white/10" style={{ background: "#070B16" }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {meta.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="font-mono-alt text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-2">
                  {item.label}
                </span>
                <p className="text-white/90 text-sm md:text-base leading-snug">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 md:py-32" style={{ background: NAVY }}>
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div {...fadeUp}>
            <span className="font-mono-alt text-xs uppercase tracking-[0.3em]" style={{ color: NAVI_MAGENTA }}>
              Por que .navi
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-10 text-white leading-tight">
              Design e dev andando juntos, do começo ao fim.
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Na maioria dos projetos digitais, design e desenvolvimento trabalham desconectados —
                o resultado é retrabalho, fricção e produtos que não cumprem o que prometeram no Figma.
              </p>
              <p>
                A .navi é nossa aposta no contrário: uma dupla pequena, integrada, com a mesma régua
                de qualidade do primeiro briefing à última linha de código. Pesquisa, design, front e back
                conversando o tempo inteiro — porque é assim que produto bom acontece.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DUPLA */}
      <section className="py-24 md:py-32 border-y border-white/10" style={{ background: "#070B16" }}>
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-16">
            <span className="font-mono-alt text-xs uppercase tracking-[0.3em]" style={{ color: NAVI_GREEN }}>
              A dupla
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-white">
              Duas cabeças, uma régua.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {dupla.map((p, i) => (
              <motion.div
                key={p.nome}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-display font-bold" style={{ color: p.color }}>·</span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white">{p.nome}</h3>
                </div>
                <p className="font-mono-alt text-xs uppercase tracking-[0.25em] text-white/50 mb-6">
                  {p.role}
                </p>
                <ul className="space-y-2 mb-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-white/75 text-sm">
                      <span style={{ color: p.color }}>—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-display italic text-white/60 text-base border-l-2 pl-4" style={{ borderColor: p.color }}>
                  "{p.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 md:py-32" style={{ background: NAVY }}>
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-16">
            <span className="font-mono-alt text-xs uppercase tracking-[0.3em]" style={{ color: NAVI_MAGENTA }}>
              O que fazemos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-white max-w-3xl">
              Do primeiro insight ao deploy.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {servicos.map((s, i) => (
              <motion.div
                key={s.titulo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="p-8 hover:bg-white/[0.04] transition-colors"
                style={{ background: NAVY }}
              >
                <span className="font-mono-alt text-[10px] uppercase tracking-[0.3em]" style={{ color: NAVI_GREEN }}>
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-3 mb-2">
                  {s.titulo}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LINGUAGEM VISUAL */}
      <section className="py-24 md:py-32 border-y border-white/10" style={{ background: "#070B16" }}>
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-16 max-w-3xl">
            <span className="font-mono-alt text-xs uppercase tracking-[0.3em]" style={{ color: NAVI_GREEN }}>
              Linguagem visual
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-white">
              Tecnologia com personalidade.
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Navy profundo, verde elétrico e magenta — uma paleta que respira tecnologia
              sem deixar de lado o que faz a gente parar pra olhar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {palette.map((c, i) => (
              <motion.div
                key={c.hex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl overflow-hidden border border-white/10"
              >
                <div className="aspect-[4/3]" style={{ background: c.hex }} />
                <div className="p-4 bg-white/[0.02]">
                  <p className="font-display text-sm text-white">{c.name}</p>
                  <p className="font-mono-alt text-xs text-white/40 mt-1">{c.hex}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 md:py-32" style={{ background: NAVY }}>
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="mb-16">
            <span className="font-mono-alt text-xs uppercase tracking-[0.3em]" style={{ color: NAVI_MAGENTA }}>
              Como trabalhamos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-white">
              Quatro passos, zero handoff capenga.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {processo.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <span className="font-display text-5xl font-bold" style={{ color: i % 2 === 0 ? NAVI_GREEN : NAVI_MAGENTA }}>
                  {p.n}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-4 mb-2">{p.t}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-white/10" style={{ background: "#070B16" }}>
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
              Quer ver o que estamos <span style={{ color: NAVI_GREEN }}>construindo</span>?
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://navy-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="inline-flex items-center gap-2 font-mono-alt text-sm uppercase tracking-wider px-6 py-3 rounded-full text-[#070B16] transition-transform hover:scale-105"
                style={{ background: NAVI_GREEN }}
              >
                Site .navi
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                to="/"
                data-hover
                className="inline-flex items-center gap-2 font-mono-alt text-sm uppercase tracking-wider px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar pro portfólio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectNavi;