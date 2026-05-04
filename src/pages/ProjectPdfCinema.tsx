import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
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

const meta = [
  { label: "Cliente", value: "Pedro Ferreira (.pdf)" },
  { label: "Papel", value: "Lead Product Designer" },
  { label: "Entregas", value: "UX/UI · Web Design · IA" },
  { label: "Ano", value: "2025" },
];

const categorias = ["Publicidade", "Cinema", "Televisão", "Internet", "Eventos", "Drone"];

const resultados = [
  { kpi: "PT / EN", desc: "Site bilíngue pra atender clientes BR e gringos sem fricção." },
  { kpi: "6 frentes", desc: "Arquitetura escalável organizada por linguagem audiovisual." },
  { kpi: "1 clique", desc: "Contato direto via formulário e redes — sem labirinto." },
];

const ProjectPdfCinema = () => {
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
            className="flex items-center gap-2 font-mono-alt text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <Link to="/" data-hover className="font-display text-sm font-bold tracking-tight">
            THAISA <span className="text-accent">S</span>
          </Link>
          <span className="font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground hidden md:block">
            Case 01 / 04
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen relative flex flex-col justify-end pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono-alt text-sm uppercase tracking-[0.3em] text-accent mb-8"
          >
            [01] · PDF Cinema
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight max-w-5xl"
          >
            Cinema vira <span className="text-primary">interface</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Site-portfólio para o assistente de direção e videomaker Pedro Ferreira —
            onde cada scroll parece um corte de cena.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-16 rounded-2xl overflow-hidden border border-border/30 shadow-2xl"
          >
            <img
              src={capa}
              alt="Capa do site PDF Cinema mostrando hero com vídeo e thumbnails dos trabalhos"
              className="w-full h-auto block"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* META GRID */}
      <section className="py-20 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {meta.map((m) => (
              <div key={m.label}>
                <p className="font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  {m.label}
                </p>
                <p className="font-display text-lg md:text-xl font-semibold text-foreground">
                  {m.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DESAFIO */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="md:col-span-4">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-primary mb-4">
              O desafio
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Vender um trabalho audiovisual em 5 segundos de scroll.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              O Pedro tinha um portfólio extenso espalhado entre redes sociais, drives e
              currículos em PDF. Faltava um lugar único pra centralizar — e que respirasse
              cinema sem parecer mais um site genérico de produtora.
            </p>
            <p>
              A meta era clara: criar um produto digital que mostrasse o trabalho dele com
              a mesma sofisticação visual das obras que ele dirige, e que ainda fosse
              fácil de navegar pra diretores, produtores e clientes em busca de talento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MOCKUP DESKTOP FULL */}
      <section className="py-12">
        <motion.div
          {...fadeUp}
          className="container mx-auto px-6 md:px-12"
        >
          <div className="rounded-2xl overflow-hidden border border-border/30">
            <img
              src={desktop1}
              alt="Mockup desktop da home do PDF Cinema com carrossel e grid de projetos"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
          <p className="mt-4 font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Home — desktop
          </p>
        </motion.div>
      </section>

      {/* ARQUITETURA DA INFORMAÇÃO */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Arquitetura da informação
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              Seis categorias, uma navegação.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Organizei o trabalho do Pedro por linguagem audiovisual — não por
              cliente — pra que o visitante encontre o que procura em dois cliques.
              Cada categoria virou uma porta de entrada com peso visual próprio.
            </p>
            <div className="flex flex-wrap gap-2">
              {categorias.map((c, i) => (
                <span
                  key={c}
                  className={`font-mono-alt text-xs uppercase tracking-[0.2em] px-3 py-2 rounded-full border ${
                    i % 2 === 0
                      ? "border-primary/40 text-primary"
                      : "border-accent/40 text-accent"
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/30">
            <img
              src={desktop2}
              alt="Mockup desktop mostrando categorias e grid de vídeos do PDF Cinema"
              className="w-full h-auto block"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* LINGUAGEM VISUAL */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(270,30%,10%)] to-[hsl(330,30%,12%)]">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border/30 order-2 md:order-1">
            <img
              src={desktop3}
              alt="Mockup desktop da página Sobre do PDF Cinema com formulário de contato"
              className="w-full h-auto block"
              loading="lazy"
            />
          </motion.div>
          <motion.div {...fadeUp} className="order-1 md:order-2">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Linguagem visual
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              Neon nos detalhes, cinema na base.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rosa e azul neon como acentos, preto cinematográfico como base. Tipografia
              Sora pra um ar tech, scroll suave e transições sutis pra deixar o conteúdo
              ser o protagonista. Nada compete com a obra do Pedro — tudo emoldura.
            </p>
          </motion.div>
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
              Mesma narrativa, qualquer tela.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sem versão "mobile light". O site mantém impacto visual e fluidez de
              navegação em desktop, tablet e celular — porque cliente também rola
              feed no metrô.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden border border-border/30">
              <img src={tablet1} alt="Mockup tablet da home do PDF Cinema" className="w-full h-auto block" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/30">
              <img src={tablet3} alt="Mockup tablet do grid de projetos do PDF Cinema" className="w-full h-auto block" loading="lazy" />
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="col-span-1 md:col-start-2 rounded-2xl overflow-hidden border border-border/30">
              <img src={mobile3} alt="Mockup mobile do detalhe de projeto" className="w-full h-auto block" loading="lazy" />
            </div>
            <div className="col-span-1 rounded-2xl overflow-hidden border border-border/30">
              <img src={mobileMenu} alt="Mockup mobile do menu de navegação" className="w-full h-auto block" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="py-24 md:py-32 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="font-mono-alt text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Resultado
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Um produto que trabalha pelo Pedro 24/7.
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
                <p className="font-display text-4xl md:text-5xl font-bold text-accent mb-4">
                  {r.kpi}
                </p>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative text-center">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-8"
          >
            Curtiu? <span className="text-primary">Tá no ar.</span>
          </motion.h2>
          <motion.p {...fadeUp} className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Dá uma volta pelo site e me conta o que achou — ou bora pro próximo case.
          </motion.p>
          <motion.div {...fadeUp} className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://pdfcinema.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="font-mono-alt text-sm uppercase tracking-wider bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Ver site no ar <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              to="/#projetos"
              data-hover
              className="font-mono-alt text-sm uppercase tracking-wider border border-accent text-accent px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Próximo case →
            </Link>
            <Link
              to="/"
              data-hover
              className="font-mono-alt text-sm uppercase tracking-wider border border-foreground/20 text-foreground/70 px-6 py-3 rounded-full hover:border-foreground/50 hover:text-foreground transition-colors"
            >
              Voltar pros trabalhos
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

export default ProjectPdfCinema;
