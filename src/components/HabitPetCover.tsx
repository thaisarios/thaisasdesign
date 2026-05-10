import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import egg from "@/assets/projects/habitpet/egg.png";
import blobBaby from "@/assets/projects/habitpet/blob-baby.png";
import catBaby from "@/assets/projects/habitpet/cat-baby.png";
import dragonBaby from "@/assets/projects/habitpet/dragon-baby.png";
import dinoBaby from "@/assets/projects/habitpet/dino-baby.png";

const PETS = [
  { src: egg, name: "egg" },
  { src: blobBaby, name: "blob" },
  { src: catBaby, name: "cat" },
  { src: dragonBaby, name: "dragon" },
  { src: dinoBaby, name: "dino" },
];

const STATUS = [
  { label: "FOM", color: "#FF6FB5" },
  { label: "ENE", color: "#5BE3F0" },
  { label: "FEL", color: "#FFB84D" },
  { label: "SAU", color: "#B8FF5B" },
];

const pixel = { imageRendering: "pixelated" as const };

const HabitPetCover = () => {
  const [stage, setStage] = useState(0);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const a = setInterval(() => setStage((s) => (s + 1) % PETS.length), 1800);
    const b = setInterval(() => setPulse((p) => p + 1), 2400);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col" style={{ background: "#FFE6F1" }}>
      {/* Title bar */}
      <div className="h-7 flex items-center px-3 gap-2 shrink-0" style={{ background: "#FF6FB5" }}>
        <span className="font-mono-alt text-[10px] text-white tracking-[0.25em]">★ HABITPET.EXE</span>
        <div className="ml-auto flex gap-1">
          <span className="w-2 h-2 bg-white/70" />
          <span className="w-2 h-2 bg-white/70" />
          <span className="w-2 h-2 bg-white/70" />
        </div>
      </div>

      {/* Game screen */}
      <div className="flex-1 flex items-center justify-center p-3 sm:p-4 min-h-0">
        <div
          className="relative w-full h-full rounded-md overflow-hidden flex items-center justify-center"
          style={{ background: "#B8E994", border: "2px solid #1A1612" }}
        >
          {/* Sky dots / scanline feel */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, #1A1612 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          />

          {/* Floor line */}
          <div className="absolute bottom-3 left-3 right-3 h-[2px]" style={{ background: "#1A1612", opacity: 0.4 }} />

          {/* Pet */}
          <div className="relative w-[45%] h-[55%] flex items-end justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={PETS[stage].name}
                src={PETS[stage].src}
                alt=""
                className="w-full h-full object-contain"
                style={pixel}
                loading="lazy"
                initial={{ opacity: 0, scale: 0.6, y: 12 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                  transition: {
                    opacity: { duration: 0.25 },
                    scale: { duration: 0.35, ease: "backOut" },
                    y: { duration: 1.1, repeat: Infinity, ease: "easeInOut" },
                  },
                }}
                exit={{ opacity: 0, scale: 1.2, transition: { duration: 0.2 } }}
              />
            </AnimatePresence>

            {/* +1 floating indicator */}
            <AnimatePresence>
              <motion.span
                key={pulse}
                initial={{ opacity: 0, y: 0, scale: 0.7 }}
                animate={{ opacity: [0, 1, 1, 0], y: -28, scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute -top-1 right-0 font-mono-alt text-[11px] font-bold"
                style={{ color: "#FF6FB5", textShadow: "1px 1px 0 #1A1612" }}
              >
                +1 ♡
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Sparkles */}
          <motion.span
            className="absolute top-3 left-4 text-[10px]"
            animate={{ opacity: [0.2, 1, 0.2], rotate: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: "#FFEB3B" }}
          >
            ✦
          </motion.span>
          <motion.span
            className="absolute top-5 right-5 text-[12px]"
            animate={{ opacity: [1, 0.3, 1], rotate: [0, -20, 0] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            style={{ color: "#FFEB3B" }}
          >
            ✦
          </motion.span>
        </div>
      </div>

      {/* Status bars */}
      <div className="px-3 pb-3 pt-1 grid grid-cols-4 gap-2 shrink-0">
        {STATUS.map((s, i) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="font-mono-alt text-[8px] tracking-[0.15em]" style={{ color: "#1A1612", opacity: 0.7 }}>
              {s.label}
            </span>
            <div className="h-2 border border-[#1A1612] bg-white/60 overflow-hidden">
              <motion.div
                className="h-full"
                style={{ background: s.color }}
                animate={{ width: ["30%", "95%", "60%", "85%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitPetCover;