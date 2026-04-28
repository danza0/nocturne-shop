"use client";

import { motion } from "framer-motion";

const text =
  "NØCTURNE — український streetwear бренд, що народжується з тиші та темряви міста. Ми створюємо одяг для тих, хто йде власним шляхом: незалежних, гордих, нічних. Кожна річ — це форма висловлення, мінімалістична, чесна, безкомпромісна.";

export default function About() {
  const words = text.split(" ");

  return (
    <section
      id="about"
      className="relative py-32 md:py-48 px-6 md:px-10 border-b border-white/10"
    >
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-3"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/50">
            01 / Філософія
          </span>
        </motion.div>

        <div className="md:col-span-9">
          <p className="text-[clamp(1.5rem,3.2vw,3rem)] leading-[1.2] tracking-[-0.01em] font-light">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.15 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-30%" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.025,
                  ease: "easeOut",
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
