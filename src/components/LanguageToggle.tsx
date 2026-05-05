import { useT } from "@/i18n/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useT();

  const cls = (active: boolean) =>
    `font-mono-alt text-xs uppercase tracking-[0.25em] transition-colors ${
      active ? "text-accent" : "text-foreground/40 hover:text-foreground/70"
    }`;

  return (
    <div
      className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] flex items-center gap-1.5 select-none"
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        data-hover
        aria-pressed={lang === "pt"}
        onClick={() => setLang("pt")}
        className={cls(lang === "pt")}
      >
        PT
      </button>
      <span className="font-mono-alt text-xs text-foreground/25">/</span>
      <button
        type="button"
        data-hover
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        className={cls(lang === "en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;