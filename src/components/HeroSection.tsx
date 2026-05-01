import { motion } from "framer-motion";
import Marquee from "./Marquee";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent/15 blur-2xl" />

      <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono-alt text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-6">
            Product Designer
          </p>
        </motion.div>

        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tight"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <span className="text-primary">Thaisa</span>
          <br />
          <span className="text-foreground">S</span>
          <span className="text-secondary">halders</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-lg text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Criando experiências digitais que fogem do óbvio.
          <br />
          <span className="text-accent font-medium">Tecnologia, inovação e um toque de irreverência.</span>
        </motion.p>

        <motion.div
          className="mt-12 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="#projetos"
            data-hover
            className="font-mono-alt text-sm uppercase tracking-wider border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            data-hover
            className="font-mono-alt text-sm uppercase tracking-wider border border-foreground/20 text-foreground/70 px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-all duration-300"
          >
            Contato
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <Marquee />
      </motion.div>
    </section>
  );
};

export default HeroSection;