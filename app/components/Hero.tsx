"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HERO_IMAGE = "/looks/hero.jpg";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "8px"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden"
    >
      <motion.div
        style={{ y, scale, filter: blur as unknown as string }}
        className="absolute inset-0"
      >
        <Image
          src={HERO_IMAGE}
          alt="NOCTURNE — model"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black" />
        <div className="absolute inset-0 noise" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <h1 className="font-semibold leading-[0.9] tracking-[-0.02em] text-[clamp(2.75rem,11vw,9rem)]">
            NØCTURNE
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-sm md:text-base tracking-[0.12em] uppercase text-white/80"
        >
          Більше ніж одяг.
          <br />
          Твій шлях — твоя гордість.
        </motion.p>

        <motion.a
          href="#lookbook"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.6 }}
          className="absolute bottom-10 inset-x-0 mx-auto text-[10px] tracking-[0.4em] uppercase text-white/60 hover:text-white transition-colors duration-500"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            Scroll ↓
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
