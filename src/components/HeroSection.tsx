import { motion } from "framer-motion";
import Marquee from "./Marquee";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MessageCircle, Mail } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useT();
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
          <p className="font-mono-alt text-sm md:text-base uppercase tracking-[0.3em] text-accent mb-6">
            {t.hero.role}
          </p>
        </motion.div>

        <motion.h1
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tight"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <span className="text-primary">Thaisa</span>{" "}
          <span className="text-accent">S</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-lg text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.hero.tagline1}
          <br />
          <span className="text-accent font-medium">{t.hero.tagline2}</span>
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
            {t.hero.seeProjects}
          </a>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                data-hover
                className="font-mono-alt text-sm uppercase tracking-wider border border-accent/50 text-accent px-6 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                {t.hero.contact}
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-2 bg-card border-border/40">
              <a
                href="https://wa.me/5521975956999"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm hover:bg-accent/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-accent" />
                <span>{t.hero.whatsapp}</span>
              </a>
              <a
                href="mailto:thaisashalders@gmail.com"
                data-hover
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>{t.hero.email}</span>
              </a>
            </PopoverContent>
          </Popover>
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