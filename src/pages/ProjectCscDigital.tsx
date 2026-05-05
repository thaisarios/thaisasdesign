import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
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

const meta = [
  { label: "Papel", value: "Product Designer" },
  { label: "Time", value: "Squad de 5" },
  { label: "Método", value: "Discovery + Design" },
  { label: "Ano", value: "2021" },
];

const discovery = [
  {
    step: "01",
    title: "Suposições + CSD",
    desc: "Listei certezas, suposições e dúvidas com o time. Priorizei o que tinha mais impacto e menos conhecimento — esse virou o roteiro da pesquisa.",
  },
  {
    step: "02",
    title: "Pesquisa quantitativa",
    desc: "77 famílias responderam em 2 dias. Descoberta-chave: 51% só usa a CSC pra controle de vacina. As outras funções viram desuso.",
  },
  {
    step: "03",
    title: "Pesquisa qualitativa",
    desc: "5 entrevistas em profundidade pra entender o porquê. As respostas viraram dor concreta — e dor concreta vira feature priorizada.",
  },
];

const aprendizados = [
  {
    kpi: "Suposição ≠ dado",
    desc: "O método CSD me ensinou a separar o que eu acho do que o usuário vive.",
  },
  {
    kpi: "Testar > supor",
    desc: "4 testes de usabilidade mudaram 6 decisões de UI antes do alta-fidelidade.",
  },
  {
    kpi: "Sistema ancorado",
    desc: "Estender o guia do Governo, em vez de reinventar, acelerou cada iteração.",
  },
];

const tags = ["UX Research", "Mobile App", "Discovery", "Design System"];

const ProjectCscDigital = () => {
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
            Case 02 / 04
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen relative flex flex-col justify-end pt-32 pb-16 overflow-hidden">
        <div
          className="absolute top-1/3 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30"
          style={{ background: CSC_BLUE }}
        />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono-alt text-sm uppercase tracking-[0.3em] mb-8"
            style={{ color: CSC_BLUE }}
          >
            [02] · CSC Digital
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight max-w-5xl"
          >
            Caderneta de Saúde da Criança,{" "}
            <span style={{ color: CSC_BLUE }}>agora no bolso</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Como transformei 90 páginas de papel em um app que cabe na rotina de
            família brasileira — partindo da pesquisa, não da tela.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-16 rounded-2xl overflow-hidden border border-border/30 shadow-2xl"
          >
            <img
              src={capa}
              alt="Capa do projeto CSC Digital com o app exibido em vários celulares"
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

          <motion.div {...fadeUp} className="mt-10 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="font-mono-alt text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-foreground/10 text-foreground/50"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* O PROBLEMA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="md:col-span-5">
            <p
              className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: CSC_BLUE }}
            >
              O problema
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              90 páginas, 10 anos de uso. Adivinha quantas famílias mantêm em dia.
            </h2>
          </motion.div>
          <motion.div
            {...fadeUp}
            className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              A Caderneta de Saúde da Criança (CSC) é distribuída pelo Governo no
              nascimento e deveria acompanhar a criança até os 10 anos —
              registrando vacinas, consultas, marcos de desenvolvimento e
              orientações pra família.
            </p>
            <p>
              Na prática, a maioria usa só pra controle de vacina. E mesmo nisso,
              metade das crianças brasileiras não recebeu todas as doses que
              deveria em 2020.
            </p>
            <div className="rounded-xl overflow-hidden border border-border/30 bg-white p-4">
              <img
                src={noticia}
                alt="Manchete do G1 sobre cobertura vacinal infantil em queda no Brasil em 2020"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEU PAPEL */}
      <section className="py-20 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <motion.div {...fadeUp} className="md:col-span-4">
            <p
              className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: CSC_BLUE }}
            >
              Meu papel
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Pesquisa, jornada e interface, em squad de cinco.
            </h2>
          </motion.div>
          <motion.ul
            {...fadeUp}
            className="md:col-span-7 md:col-start-6 space-y-4 text-lg text-muted-foreground"
          >
            {[
              "Conduzi pesquisa quantitativa (77 famílias) e entrevistas qualitativas.",
              "Mapeei a jornada do usuário e ajudei a priorizar pontos de dor com matriz impacto×esforço.",
              "Co-desenhei wireframes, alta fidelidade e o sistema visual do app.",
              "Rodei 2 rodadas de teste de usabilidade e iterei o protótipo a partir delas.",
            ].map((item) => (
              <li key={item} className="flex gap-4 leading-relaxed">
                <span
                  className="font-mono-alt text-xs mt-2 shrink-0"
                  style={{ color: CSC_BLUE }}
                >
                  ●
                </span>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* DISCOVERY */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p
              className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: CSC_BLUE }}
            >
              Discovery
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              Antes de desenhar uma tela, ouvimos 77 famílias.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A pesquisa não é overhead — é o que evita resolver o problema errado.
              O processo virou um funil: do achismo do time pra dado, e do dado pra
              decisão de produto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {discovery.map((d, i) => (
              <motion.div
                key={d.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm"
              >
                <p
                  className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4"
                  style={{ color: CSC_BLUE }}
                >
                  {d.step}
                </p>
                <h3 className="font-display text-xl font-bold mb-3">{d.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-6">
            {[
              { kpi: "77", label: "famílias respondendo", sub: "amostra quantitativa" },
              { kpi: "51%", label: "só usa pra vacina", sub: "as outras funções viram desuso" },
              { kpi: "2 dias", label: "de coleta", sub: "questionário online + redes" },
            ].map((d) => (
              <div
                key={d.kpi}
                className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm"
              >
                <p
                  className="font-display text-5xl md:text-6xl font-extrabold leading-none mb-4"
                  style={{ color: CSC_BLUE }}
                >
                  {d.kpi}
                </p>
                <p className="font-display text-lg font-semibold mb-1">{d.label}</p>
                <p className="font-mono-alt text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {d.sub}
                </p>
              </div>
            ))}
          </motion.div>
          <p className="mt-6 font-mono-alt text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Pesquisa quantitativa · 77 respostas · 2 dias de coleta
          </p>
        </div>
      </section>

      {/* PERSONA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(210,40%,10%)] to-[hsl(210,30%,14%)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <p
              className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: CSC_BLUE }}
            >
              Quem é a família
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              Gabriela esquece a caderneta. Ronaldo nem sempre tem acesso.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Casal, classe média, três filhos, rotina cheia. Dividem
              responsabilidades — o que significa que o histórico de saúde precisa
              caber no bolso de duas pessoas ao mesmo tempo. O app foi desenhado
              pra resolver os dois lados.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                initial: "G",
                name: "Gabriela",
                age: "47",
                ctx: "Mãe de 3, trabalha fora, divide cuidados com o marido.",
                points: [
                  ["Dor", "Esquece a caderneta em casa quando vai à consulta."],
                  ["Tarefa", "Acompanhar vacinas e marcos das três crianças."],
                  ["Necessidade", "Histórico médico no celular, sempre à mão."],
                ],
              },
              {
                initial: "R",
                name: "Ronaldo",
                age: "42",
                ctx: "Pai presente, leva os filhos ao pediatra com frequência.",
                points: [
                  ["Dor", "Nem sempre tem acesso à caderneta física."],
                  ["Tarefa", "Confirmar vacinas e remédios já administrados."],
                  ["Necessidade", "Conta sincronizada com a Gabriela."],
                ],
              },
            ].map((p) => (
              <motion.div
                key={p.name}
                {...fadeUp}
                className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-display text-2xl font-bold"
                    style={{ background: `${CSC_BLUE}33`, color: CSC_BLUE }}
                  >
                    {p.initial}
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold">
                      {p.name}, {p.age}
                    </p>
                    <p className="text-sm text-muted-foreground">{p.ctx}</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {p.points.map(([label, text]) => (
                    <li key={label}>
                      <p
                        className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-1"
                        style={{ color: CSC_BLUE }}
                      >
                        {label}
                      </p>
                      <p className="text-foreground/80 leading-relaxed">{text}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JORNADA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <p
              className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: CSC_BLUE }}
            >
              Jornada do usuário
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              Quatro etapas que se repetem ao longo de 10 anos.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Agendamento, consulta, imunização e cuidados. Em cada uma, mapeei
              objetivo, ação e oportunidade — esses pontos viraram features
              priorizadas no app.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            {/* linha conectora — só desktop */}
            <div
              className="hidden md:block absolute top-5 left-0 right-0 h-px"
              style={{ background: `${CSC_BLUE}55` }}
            />
            <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
              {[
                {
                  step: "Agendamento",
                  goal: "Marcar consulta com o pediatra.",
                  pain: "Datas espalhadas em papéis, agenda do celular e memória.",
                },
                {
                  step: "Consulta",
                  goal: "Levar histórico atualizado.",
                  pain: "Caderneta esquecida em casa ou desatualizada.",
                },
                {
                  step: "Imunização",
                  goal: "Manter vacinas em dia.",
                  pain: "Não saber qual a próxima dose nem quando.",
                },
                {
                  step: "Cuidados",
                  goal: "Acompanhar marcos e orientações.",
                  pain: "Conteúdo da CSC pouco consultado no dia a dia.",
                },
              ].map((e, i) => (
                <div key={e.step} className="relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-mono-alt text-xs font-bold mb-4 relative z-10"
                    style={{ background: CSC_BLUE, color: "hsl(var(--background))" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-display text-lg font-bold mb-3">{e.step}</p>
                  <p
                    className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-1"
                    style={{ color: CSC_BLUE }}
                  >
                    Objetivo
                  </p>
                  <p className="text-sm text-foreground/80 mb-3 leading-relaxed">{e.goal}</p>
                  <p
                    className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-1 text-muted-foreground"
                  >
                    Dor mapeada
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.pain}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW MIGHT WE */}
      <section className="py-24 md:py-32 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <p
              className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: CSC_BLUE }}
            >
              Do problema à solução
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
              "Como poderíamos facilitar o uso de todas as funções da CSC pelas
              famílias brasileiras?"
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Listei dor por dor e reformulei em pergunta de design. Cada solução
              passou por uma matriz de impacto×esforço — só virou feature o que
              entregava muito com pouco.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                pain: "Famílias esquecem datas de vacina.",
                hmw: "Como lembrar sem ser invasivo?",
                sol: "Notificações por idade da criança.",
              },
              {
                pain: "Caderneta de papel fica em casa.",
                hmw: "Como tornar o histórico portátil?",
                sol: "Prontuário e vacinas no app, offline.",
              },
              {
                pain: "Pais dividem o cuidado dos filhos.",
                hmw: "Como sincronizar entre responsáveis?",
                sol: "Conta familiar compartilhada.",
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm space-y-4"
              >
                <div>
                  <p
                    className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-2 text-muted-foreground"
                  >
                    Dor
                  </p>
                  <p className="text-foreground/80 leading-relaxed">{c.pain}</p>
                </div>
                <div>
                  <p
                    className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-2"
                    style={{ color: CSC_BLUE }}
                  >
                    How might we
                  </p>
                  <p className="font-display text-lg font-semibold leading-snug">
                    {c.hmw}
                  </p>
                </div>
                <div>
                  <p
                    className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mb-2 text-muted-foreground"
                  >
                    Solução priorizada
                  </p>
                  <p className="text-foreground/80 leading-relaxed">{c.sol}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SISTEMA VISUAL */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p
              className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: CSC_BLUE }}
            >
              Sistema visual
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              Azul institucional, com o tempero certo.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mantive o azul do guia de estilo do Governo pra preservar
              familiaridade e seriedade. Estendi com uma paleta secundária quente
              e cores de aviso próprias — o suficiente pra desengessar sem
              descaracterizar.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-wrap items-center gap-2">
            <p
              className="font-mono-alt text-[10px] uppercase tracking-[0.25em] mr-2"
              style={{ color: CSC_BLUE }}
            >
              Paleta
            </p>
            {[
              { name: "Primary", hex: "#1351B4" },
              { name: "Primary 80", hex: "#2670E8" },
              { name: "Accent", hex: "#FF8A3D" },
              { name: "Soft", hex: "#FFD9B3" },
              { name: "Success", hex: "#168821" },
              { name: "Warning", hex: "#FFCD07" },
              { name: "Danger", hex: "#E52207" },
              { name: "Ink", hex: "#1B1B1B" },
            ].map((c) => (
              <div
                key={c.hex}
                title={`${c.name} · ${c.hex}`}
                className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full border border-border/30 bg-card/40"
              >
                <span
                  className="w-5 h-5 rounded-full border border-foreground/10 shrink-0"
                  style={{ background: c.hex }}
                />
                <span className="font-mono-alt text-[10px] uppercase tracking-wider text-foreground/70">
                  {c.hex}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROTÓTIPO ALTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(210,50%,12%)] to-[hsl(210,30%,16%)]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-12">
            <p
              className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: CSC_BLUE }}
            >
              Protótipo de alta
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
              Protótipo navegável, validado em duas rodadas.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cadastro de perfil, agenda, vacinas, histórico médico, diário e
              campanhas. O fluxo todo passou por testes com usuários reais —
              cada ajuste vinha de uma observação, não de um achismo.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-2xl overflow-hidden border border-border/30"
          >
            <img
              src={telas}
              alt="Conjunto de telas do protótipo de alta fidelidade do CSC Digital"
              className="w-full h-auto block"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* APRENDIZADOS */}
      <section className="py-24 md:py-32 border-t border-border/20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p
              className="font-mono-alt text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: CSC_BLUE }}
            >
              Aprendizados
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              O que esse case me deu pros próximos.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {aprendizados.map((r, i) => (
              <motion.div
                key={r.kpi}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm"
              >
                <p
                  className="font-display text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: CSC_BLUE }}
                >
                  {r.kpi}
                </p>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp}
            className="font-display text-2xl md:text-3xl font-semibold leading-snug max-w-3xl"
          >
            Esse projeto me ensinou a tratar pesquisa como{" "}
            <span style={{ color: CSC_BLUE }}>ferramenta de produto</span> — não
            como entregável bonito.
          </motion.p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${CSC_BLUE} 0%, transparent 60%)`,
          }}
        />
        <div className="container mx-auto px-6 md:px-12 relative text-center">
          <motion.h2
            {...fadeUp}
            className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-8"
          >
            Quer ver{" "}
            <span style={{ color: CSC_BLUE }}>o processo inteiro</span>?
          </motion.h2>
          <motion.p {...fadeUp} className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Tem versão resumida no Behance e o making-of completo no Medium —
            escolhe o seu ritmo.
          </motion.p>
          <motion.div {...fadeUp} className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.behance.net/gallery/219069437/CSC-Digital-Caderneta-de-Saude-da-Crianca"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="font-mono-alt text-sm uppercase tracking-wider px-6 py-3 rounded-full text-background inline-flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: CSC_BLUE }}
            >
              Ver no Behance <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://thaisarios.medium.com/ajudando-respons%C3%A1veis-a-acompanhar-a-sa%C3%BAde-e-o-desenvolvimento-de-seus-filhos-2354fd960151"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="font-mono-alt text-sm uppercase tracking-wider border px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors hover:bg-foreground/5"
              style={{ borderColor: CSC_BLUE, color: CSC_BLUE }}
            >
              Ler no Medium (10 min) <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              to="/projetos/filmes-desmontados"
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

export default ProjectCscDigital;