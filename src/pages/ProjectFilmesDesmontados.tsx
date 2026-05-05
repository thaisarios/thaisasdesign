import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
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

const FD_ORANGE = "hsl(25,95%,55%)";
const FD_BEIGE = "#F0EAD6";
const FD_INK = "#1A1612";

const meta = [
  { label: "Cliente", value: "Filmes Desmontados" },
  { label: "Papel", value: "Product Designer" },
  { label: "Entregas", value: "UX/UI · Web Design" },
  { label: "Ano", value: "2025" },
];

const navChips = ["Sobre", "Direção", "Assistente de Direção", "Contato"];

const palette = [
  { name: "Bege película", hex: FD_BEIGE, dark: false },
  { name: "Preto cena", hex: FD_INK, dark: true },
  { name: "Laranja assinatura", hex: "#F26B1F", dark: true },
  { name: "Off-white", hex: "#FAF7F0", dark: false },
];

const resultados = [
  { kpi: "1 endereço", desc: "Portfólio centralizado, antes espalhado entre redes sociais e WeTransfers." },
  { kpi: "2 papéis", desc: "Direção e assistência de direção convivendo lado a lado, sem hierarquia forçada." },
  { kpi: "100% leve", desc: "Site estático, carregamento instantâneo e SEO limpo pra ser achado por produtoras." },
];

const ProjectFilmesDesmontados = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <CustomCursor />

      {/* Top nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/20">
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link
            to="/"
            data-hover
            aria-label="Voltar para a home"
            className="flex items-center gap-2 font-mono-alt text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <Link to="/" data-hover className="font-display text-sm font-bold tracking-tight">
            THAISA <span className="text-accent">S</span>
          </Link>
          <span className="font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground hidden md:block">
            Case 03 / 04
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen relative flex flex-col justify-end pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono-alt text-sm uppercase tracking-[0.3em] text-secondary mb-8"
          >
            [03] · Filmes Desmontados
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight max-w-5xl"
          >
            Direção em <span className="text-secondary">primeiro plano</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Site-portfólio para o estúdio Filmes Desmontados — onde cada projeto é
            um corte, e cada categoria, um plano-sequência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-16 rounded-2xl overflow-hidden border border-border/30 shadow-2xl"
          >
            <img src={desktop1} alt="Hero do site Filmes Desmontados com vídeo reel" className="w-full h-auto block" loading="eager" />
          </motion.div>
        </div>
      </section>

      {/* META */}
      <section className="py-20 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {meta.map((m) => (
              <div key={m.label}>
                <p className="font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  {m.label}
                </p>
                <p className="font-display text-lg md:text-xl font-semibold">{m.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DESAFIO */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="md:col-span-4">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-secondary mb-4">
              O desafio
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Apresentar todos os projetos em um só lugar.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              O trabalho do estúdio estava espalhado entre redes sociais, WeTransfers
              e currículos avulsos. Faltava um endereço único, sóbrio, que reunisse
              direção e assistência de direção sem virar dois sites.
            </p>
            <p>
              A meta era construir um portfólio que falasse a língua do cinema —
              calmo, com respiro entre cenas — e ainda fosse fácil de navegar pra
              produtoras, festivais e clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MOCKUP DESKTOP FULL */}
      <section className="py-12">
        <motion.div {...fadeUp} className="container mx-auto px-6 md:px-12">
          <div className="rounded-2xl overflow-hidden border border-border/30">
            <img src={desktop2} alt="Página de Direção do Filmes Desmontados — case Menino de Areia" className="w-full h-auto block" loading="lazy" />
          </div>
          <p className="mt-4 font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Página de Direção — case "Menino de Areia"
          </p>
        </motion.div>
      </section>

      {/* ESTRUTURA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Estrutura
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              Dois papéis, mesma hierarquia.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              O Murilo é diretor <em>e</em> assistente de direção — e o site respeita
              isso. As duas frentes ocupam o mesmo peso na navegação, sem subordinar
              uma à outra. Quatro seções, uma promessa: encontrar qualquer projeto em
              dois cliques.
            </p>
            <div className="flex flex-wrap gap-2">
              {navChips.map((c, i) => (
                <span
                  key={c}
                  className={`font-mono-alt text-xs uppercase tracking-[0.2em] px-3 py-2 rounded-full border ${
                    i % 2 === 0 ? "border-secondary/40 text-secondary" : "border-accent/40 text-accent"
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/30">
            <img src={desktop3} alt="Página Sobre + Contato com a ilustração marcante do estúdio" className="w-full h-auto block" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* LINGUAGEM VISUAL + PALETA NATIVA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(25,30%,10%)] to-[hsl(25,20%,15%)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-secondary mb-4">
              Linguagem visual
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              Bege como película, laranja como assinatura.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O site parece um catálogo de festival — e é essa a intenção. Paleta
              quente, tipografia sóbria e muito branco entre as cenas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {palette.map((s) => (
              <motion.div
                key={s.hex}
                {...fadeUp}
                className="rounded-2xl overflow-hidden border border-border/30"
              >
                <div className="aspect-square flex items-end p-5" style={{ background: s.hex }}>
                  <span
                    className="font-mono-alt text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: s.dark ? "#FAF7F0" : "#1A1612" }}
                  >
                    {s.hex}
                  </span>
                </div>
                <div className="p-4 bg-card/40 backdrop-blur-sm">
                  <p className="font-display text-sm font-semibold">{s.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIVO */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Responsividade
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              Mesma narrativa, do cinema ao bolso.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Layout que se adapta sem perder pose: hero, listagens e contato
              funcionam igual em qualquer tela.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border/30">
              <img src={mobile1} alt="Mobile — página de Direção" className="w-full h-auto block" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/30">
              <img src={mobile2} alt="Mobile — listagem de Assistência de Direção" className="w-full h-auto block" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-24 md:py-32 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-secondary mb-4">
              Resultado
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Um portfólio que cabe num link só.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {resultados.map((r, i) => (
              <motion.div
                key={r.kpi}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">{r.kpi}</p>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative text-center">
          <motion.h2 {...fadeUp} className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            Quer ver no ar? <span className="text-secondary">Roda.</span>
          </motion.h2>
          <motion.div {...fadeUp} className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://filmesdesmontados.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="font-mono-alt text-sm uppercase tracking-wider bg-secondary text-secondary-foreground px-6 py-3 rounded-full hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
            >
              Ver site no ar <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.behance.net/gallery/219143529/Filmes-Desmontados-Portfolio-Website"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="font-mono-alt text-sm uppercase tracking-wider border border-accent text-accent px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Case no Behance
            </a>
            <Link
              to="/projetos/navi"
              data-hover
              className="font-mono-alt text-sm uppercase tracking-wider border border-foreground/20 text-foreground/70 px-6 py-3 rounded-full hover:border-foreground/50 hover:text-foreground transition-colors"
            >
              Próximo case →
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border/20 py-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-between gap-4 font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>© 2026 Thaisa S</span>
          <span>Feito com café e Figma</span>
        </div>
      </footer>
    </div>
  );
};

export default ProjectFilmesDesmontados;
