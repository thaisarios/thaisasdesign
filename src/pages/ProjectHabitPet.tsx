import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import { useT } from "@/i18n/LanguageContext";
import egg from "@/assets/projects/habitpet/egg.png";
import blobBaby from "@/assets/projects/habitpet/blob-baby.png";
import blobAdult from "@/assets/projects/habitpet/blob-adult.png";
import catBaby from "@/assets/projects/habitpet/cat-baby.png";
import dragonBaby from "@/assets/projects/habitpet/dragon-baby.png";
import dinoBaby from "@/assets/projects/habitpet/dino-baby.png";
import accShades from "@/assets/projects/habitpet/acc-shades.png";
import hatCrown from "@/assets/projects/habitpet/hat-crown.png";
import decorTv from "@/assets/projects/habitpet/decor-tv.png";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.7 },
};

const PINK = "#FF6FB5";
const CYAN = "#5BE3F0";
const LIME = "#B8FF5B";
const CREAM = "#FFF5F8";
const INK = "#1A1612";

const pixel = { imageRendering: "pixelated" as const };

const ProjectHabitPet = () => {
  const { t } = useT();
  const c = t.habitpetCase;
  const common = t.common;

  const evolution = [
    { src: egg, label: c.petLabels?.egg ?? "Egg" },
    { src: blobBaby, label: c.petLabels?.baby ?? "Baby" },
    { src: blobAdult, label: c.petLabels?.adult ?? "Adult" },
  ];
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStage((s) => (s + 1) % evolution.length), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-x-hidden" style={{ background: CREAM, color: INK }}>
      <CustomCursor />

      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{ background: `${CREAM}cc`, borderColor: `${INK}1a` }}
      >
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center gap-4">
          <Link
            to="/"
            data-hover
            aria-label={common.back}
            className="flex items-center gap-2 font-mono-alt text-xs uppercase tracking-[0.25em] hover:opacity-70 transition-opacity shrink-0"
            style={{ color: INK }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{common.back}</span>
          </Link>
          <span className="font-mono-alt text-xs hidden sm:inline" style={{ color: `${INK}55` }}>·</span>
          <span className="font-mono-alt text-xs uppercase tracking-[0.3em] hidden sm:block truncate" style={{ color: PINK }}>
            {c.kicker}
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono-alt text-sm uppercase tracking-[0.3em]" style={{ color: PINK }}>[05]</span>
              <span className="font-mono-alt text-sm uppercase tracking-[0.3em]" style={{ color: `${INK}40` }}>·</span>
              <span className="font-mono-alt text-sm uppercase tracking-[0.3em]" style={{ color: `${INK}80` }}>{c.heroBadge}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] max-w-5xl break-words">
              {c.h1a} <span style={{ color: PINK }}>{c.h1b}</span>.
            </h1>
            <p className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: `${INK}b3` }}>
              {c.heroP}
            </p>
            <div
              className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{ borderColor: `${PINK}55`, background: `${PINK}15` }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: PINK }} />
              <span className="font-mono-alt text-xs uppercase tracking-wider" style={{ color: PINK }}>{c.statusBadge}</span>
            </div>
          </motion.div>

          {/* Hero visual: pixel egg in retro window */}
          <motion.div
            className="mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden border-2 shadow-xl" style={{ borderColor: INK }}>
              <div className="h-9 flex items-center px-4 gap-2" style={{ background: PINK }}>
                <span className="font-mono-alt text-[11px] uppercase tracking-[0.25em] text-white">★ HABITPET.EXE</span>
                <div className="ml-auto flex gap-1.5">
                  <span className="w-3 h-3 bg-white/80" />
                  <span className="w-3 h-3 bg-white/80" />
                  <span className="w-3 h-3 bg-white/80" />
                </div>
              </div>
              <div className="p-8 md:p-12 flex items-center justify-center" style={{ background: LIME }}>
                <div className="relative w-40 md:w-56 h-40 md:h-56">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={stage}
                      src={evolution[stage].src}
                      alt={evolution[stage].label}
                      className="absolute inset-0 w-full h-full object-contain"
                      style={pixel}
                      initial={{ opacity: 0, scale: 0.7, y: 10 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -8, 0],
                        transition: {
                          opacity: { duration: 0.25 },
                          scale: { duration: 0.35, ease: "backOut" },
                          y: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                        },
                      }}
                      exit={{ opacity: 0, scale: 1.15, transition: { duration: 0.25 } }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meta strip */}
      <section className="py-16 border-y-2" style={{ background: INK, borderColor: INK }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {c.meta.map((item: any, i: number) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="font-mono-alt text-[10px] uppercase tracking-[0.3em] block mb-2" style={{ color: `${CREAM}66` }}>
                  {item.label}
                </span>
                <p className="text-sm md:text-base leading-snug" style={{ color: CREAM }}>{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div {...fadeUp}>
            <span className="font-mono-alt text-xs uppercase tracking-[0.3em]" style={{ color: PINK }}>{c.conceitoTag}</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-10 leading-tight break-words">
              {c.conceitoTitle}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: `${INK}b3` }}>
              <p>{c.conceitoP1}</p>
              <p>{c.conceitoP2}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mechanic — status bars */}
      <section className="py-24 md:py-32 border-y" style={{ background: "#FFEAF4", borderColor: `${INK}1a` }}>
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-14">
            <span className="font-mono-alt text-xs uppercase tracking-[0.3em]" style={{ color: PINK }}>{c.mecTag}</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight break-words">
              {c.mecTitle}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: `${INK}b3` }}>{c.mecP}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {c.statusList.map((s: any, i: number) => {
              const colors = [PINK, CYAN, "#FFB84D", LIME, "#9B7BFF"];
              return (
                <motion.div
                  key={s.nome}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="p-5 rounded-lg border-2"
                  style={{ borderColor: INK, background: CREAM }}
                >
                  <span className="font-mono-alt text-[10px] uppercase tracking-[0.3em] block mb-3" style={{ color: `${INK}66` }}>
                    Status 0{i + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold mb-2">{s.nome}</h3>
                  <p className="text-sm mb-4" style={{ color: `${INK}99` }}>{s.desc}</p>
                  <div className="flex gap-1">
                    {Array.from({ length: 8 }).map((_, j) => (
                      <span
                        key={j}
                        className="flex-1 h-3 border"
                        style={{
                          background: j < 6 ? colors[i] : `${INK}10`,
                          borderColor: INK,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pets — collection / evolution */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-14">
            <span className="font-mono-alt text-xs uppercase tracking-[0.3em]" style={{ color: PINK }}>{c.petsTag}</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight break-words">
              {c.petsTitle}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: `${INK}b3` }}>{c.petsP}</p>
          </motion.div>

          {/* Evolution row */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
            {[
              { src: egg, label: c.petLabels.egg, bg: LIME },
              { src: blobBaby, label: c.petLabels.baby, bg: CYAN },
              { src: blobAdult, label: c.petLabels.adult, bg: PINK },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg border-2 overflow-hidden"
                style={{ borderColor: INK }}
              >
                <div className="aspect-square flex items-center justify-center p-6" style={{ background: p.bg }}>
                  <img src={p.src} alt={p.label} className="w-full h-full object-contain" style={pixel} />
                </div>
                <div className="px-3 py-2 text-center" style={{ background: CREAM }}>
                  <span className="font-mono-alt text-[10px] uppercase tracking-[0.25em]" style={{ color: `${INK}99` }}>
                    {p.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other species */}
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[catBaby, dragonBaby, dinoBaby].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="aspect-square rounded-lg border-2 flex items-center justify-center p-6"
                style={{ borderColor: INK, background: i === 0 ? "#FFEAA7" : i === 1 ? "#FFB6D9" : "#A8E6CF" }}
              >
                <img src={src} alt="" className="w-full h-full object-contain" style={pixel} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UI / Visual language */}
      <section className="py-24 md:py-32 border-y-2" style={{ background: INK, borderColor: INK, color: CREAM }}>
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-3xl mb-14">
            <span className="font-mono-alt text-xs uppercase tracking-[0.3em]" style={{ color: PINK }}>{c.uiTag}</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight break-words">
              {c.uiTitle}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: `${CREAM}b3` }}>{c.uiP}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Palette */}
            <div>
              <span className="font-mono-alt text-[10px] uppercase tracking-[0.3em] block mb-4" style={{ color: `${CREAM}66` }}>
                {c.paletteLabel}
              </span>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { hex: PINK, name: c.paletteNames[0] },
                  { hex: CYAN, name: c.paletteNames[1] },
                  { hex: LIME, name: c.paletteNames[2] },
                  { hex: CREAM, name: c.paletteNames[3] },
                ].map((p) => (
                  <div key={p.hex} className="rounded-md overflow-hidden border-2" style={{ borderColor: CREAM }}>
                    <div className="h-20" style={{ background: p.hex }} />
                    <div className="px-3 py-2 flex items-center justify-between" style={{ background: `${CREAM}10` }}>
                      <span className="font-mono-alt text-[10px] uppercase tracking-wider">{p.name}</span>
                      <span className="font-mono-alt text-[9px] opacity-60">{p.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Items showcase */}
            <div>
              <span className="font-mono-alt text-[10px] uppercase tracking-[0.3em] block mb-4" style={{ color: `${CREAM}66` }}>
                {c.lojaTag}
              </span>
              <div className="grid grid-cols-3 gap-3">
                {[hatCrown, accShades, decorTv].map((src, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-md flex items-center justify-center p-4 border-2"
                    style={{ background: CREAM, borderColor: CREAM }}
                  >
                    <img src={src} alt="" className="w-full h-full object-contain" style={pixel} />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: `${CREAM}99` }}>{c.lojaP}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div {...fadeUp} className="mb-14">
            <span className="font-mono-alt text-xs uppercase tracking-[0.3em]" style={{ color: PINK }}>{c.roadmapTag}</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight break-words">
              {c.roadmapTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {c.roadmap.map((r: any, i: number) => {
              const accents = [PINK, CYAN, LIME];
              return (
                <motion.div
                  key={r.fase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-lg border-2"
                  style={{ borderColor: INK, background: CREAM }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full" style={{ background: accents[i] }} />
                    <span className="font-mono-alt text-[10px] uppercase tracking-[0.3em]" style={{ color: `${INK}66` }}>
                      Fase 0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{r.fase}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: `${INK}99` }}>{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t-2" style={{ background: PINK, borderColor: INK }}>
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white break-words">
              {c.ctaTitleA} <span style={{ color: INK }}>{c.ctaTitleB}</span>{c.ctaTitleC}
            </h2>
            <p className="mt-6 text-lg max-w-xl mx-auto" style={{ color: "#ffffffcc" }}>{c.ctaP}</p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="https://goal-pet-quest.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="inline-flex items-center gap-2 font-mono-alt text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                style={{ background: INK, color: CREAM }}
              >
                {c.ctaSite} <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                to="/"
                data-hover
                className="inline-flex items-center gap-2 font-mono-alt text-sm uppercase tracking-wider px-6 py-3 rounded-full border-2 transition-colors hover:bg-white/10"
                style={{ borderColor: "#ffffff", color: "#ffffff" }}
              >
                <ArrowLeft className="w-4 h-4" /> {c.ctaBack}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectHabitPet;