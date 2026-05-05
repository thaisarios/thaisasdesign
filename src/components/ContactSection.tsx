import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useT } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useT();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" ref={ref} className="py-32 relative" style={{ background: "linear-gradient(180deg, hsl(270,30%,8%), hsl(330,30%,10%))" }}>
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="font-mono-alt text-sm uppercase tracking-[0.3em] text-primary">{t.contact.tag}</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mt-6 mb-6">
            {t.contact.titleA}<br /><span className="text-secondary">{t.contact.titleB}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-12">{t.contact.subtitle}</p>
          <a href="mailto:thaisashalders@gmail.com" data-hover className="inline-block font-mono-alt text-lg md:text-xl uppercase tracking-wider text-primary border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
            thaisashalders@gmail.com
          </a>
          <div className="mt-6">
            <a
              href="https://wa.me/5521975956999"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="inline-block font-mono-alt text-sm uppercase tracking-wider text-secondary border border-secondary/50 px-5 py-2.5 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              WhatsApp · +55 21 97595-6999
            </a>
          </div>
          <div className="flex justify-center gap-8 mt-12">
            <a href="https://www.linkedin.com/in/thaisa-shalders/" target="_blank" rel="noopener noreferrer" data-hover className="font-mono-alt text-sm uppercase tracking-wider text-foreground/40 hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://www.behance.net/thaisa-shalders" target="_blank" rel="noopener noreferrer" data-hover className="font-mono-alt text-sm uppercase tracking-wider text-foreground/40 hover:text-secondary transition-colors">Behance</a>
          </div>
        </motion.div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-32 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono-alt text-xs text-foreground/30 uppercase tracking-wider">© 2026 Thaisa Shalders</span>
        <span className="font-mono-alt text-xs text-foreground/30 uppercase tracking-wider">{t.common.footer.made}</span>
      </div>
    </section>
  );
};

export default ContactSection;