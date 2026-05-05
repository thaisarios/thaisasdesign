import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useT } from "@/i18n/LanguageContext";

const styling = [
  { color: "text-primary", borderColor: "border-primary/30" },
  { color: "text-secondary", borderColor: "border-secondary/30" },
  { color: "text-accent", borderColor: "border-accent/30" },
  { color: "text-[hsl(45,90%,60%)]", borderColor: "border-[hsl(45,90%,60%)]/30" },
];

const ProcessSection = () => {
  const { t } = useT();
  const steps = (t.process.steps as { title: string; description: string }[]).map((s, i) => ({
    number: String(i + 1).padStart(2, "0"),
    title: s.title,
    description: s.description,
    ...styling[i],
  }));
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
            {t.process.tag}
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
                {t.process.stepLabel} {step.number}
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