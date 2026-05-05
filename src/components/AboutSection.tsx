import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useT } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useT();
  const skills = t.about.skills as string[];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(270,30%,8%), hsl(270,25%,11%))" }}
    >
      <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-[100px]" />
      <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-primary/10 blur-[80px]" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-mono-alt text-sm uppercase tracking-[0.3em] text-accent">
            {t.about.tag}
          </span>
          <div className="flex-1 h-px bg-border/30" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {t.about.titleA}{" "}
              <span className="text-primary">{t.about.titleB}</span>{t.about.titleC}
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/thaisa-shalders/"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="font-mono-alt text-sm uppercase tracking-wider text-foreground/50 hover:text-primary transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.behance.net/thaisa-shalders"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="font-mono-alt text-sm uppercase tracking-wider text-foreground/50 hover:text-secondary transition-colors"
              >
                Behance ↗
              </a>
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  data-hover
                  className="font-mono-alt text-sm uppercase tracking-wider px-4 py-2 rounded-full border border-foreground/10 text-foreground/60 hover:border-primary/40 hover:text-primary transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Abstract visual block */}
            <div className="aspect-[3/2] max-w-[320px] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(330,85%,60%,0.3),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(25,95%,55%,0.2),transparent_50%)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;