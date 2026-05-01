import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Pesquisa & Descoberta",
    description:
      "Mergulho no contexto do problema. Entrevistas, benchmarks, análise de dados — entendo o cenário antes de propor qualquer solução.",
    color: "text-primary",
    borderColor: "border-primary/30",
  },
  {
    number: "02",
    title: "Estratégia & Arquitetura",
    description:
      "Defino a estrutura da solução. Jornadas, fluxos, hierarquia de informação — o esqueleto que sustenta a experiência.",
    color: "text-secondary",
    borderColor: "border-secondary/30",
  },
  {
    number: "03",
    title: "Design & Prototipação",
    description:
      "Transformo estratégia em interfaces. Wireframes, design system, protótipos interativos — do conceito ao pixel.",
    color: "text-accent",
    borderColor: "border-accent/30",
  },
  {
    number: "04",
    title: "Testes & Iteração",
    description:
      "Valido com pessoas reais. Testes de usabilidade, feedback, métricas — itero até o design realmente funcionar.",
    color: "text-[hsl(45,90%,60%)]",
    borderColor: "border-[hsl(45,90%,60%)]/30",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processo" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-mono-alt text-sm uppercase tracking-[0.3em] text-secondary">
            Meu processo
          </span>
          <div className="flex-1 h-px bg-border/30" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              data-hover
              className={`p-8 rounded-2xl border ${step.borderColor} bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Large background number */}
              <span className="absolute -top-4 -right-2 font-display text-[6rem] font-bold text-foreground/[0.03] select-none leading-none">
                {step.number}
              </span>

              <span className={`font-mono-alt text-xs uppercase tracking-[0.3em] ${step.color}`}>
                Etapa {step.number}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mt-3 mb-4 group-hover:translate-x-1 transition-transform">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;