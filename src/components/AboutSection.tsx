import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { label: "UX/UI Design", icon: "🎨" },
  { label: "Product Design", icon: "💡" },
  { label: "Design Systems", icon: "⚙️" },
  { label: "User Research", icon: "🔍" },
  { label: "Prototipação", icon: "✏️" },
  { label: "Figma", icon: "🖌️" },
];

const AboutSection = () => {
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
            Sobre mim
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
              Design é sobre{" "}
              <span className="text-primary">pessoas</span>,<br />
              não apenas pixels.
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Oi! Eu sou a Thaisa — Product Designer apaixonada por criar experiências
                digitais que fazem sentido e encantam. Acredito que bom design vem da
                empatia, da curiosidade e de uma boa dose de ousadia.
              </p>
              <p>
                Transito entre UX research, design de interfaces e estratégia de produto,
                sempre buscando soluções que combinam inovação com impacto real.
              </p>
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
          >
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  data-hover
                  className="p-5 rounded-xl border border-foreground/5 bg-foreground/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <span className="text-2xl mb-3 block group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <span className="font-mono-alt text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Photo placeholder */}
            <div className="mt-6 aspect-square max-w-[200px] rounded-2xl border border-foreground/5 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <span className="text-4xl">👩‍💻</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;