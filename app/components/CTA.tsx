"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="order"
      className="relative py-32 md:py-56 px-6 md:px-10 border-b border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/looks/cta-bg.jpg"
          alt=""
          fill
          aria-hidden
          loading="lazy"
          sizes="100vw"
          className="object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      </div>

      <div className="relative mx-auto max-w-[1400px] text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="block text-[10px] tracking-[0.4em] uppercase text-white/50 mb-8"
        >
          03 / Замовлення
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,8vw,9rem)] font-semibold leading-[0.95] tracking-[-0.02em] mb-14"
        >
          Будь
          <br />
          гордим.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          <a
            href="https://t.me/ncturne_shop_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-5 border border-white px-10 md:px-14 py-5 md:py-6 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative tracking-[0.4em] uppercase text-base md:text-lg font-medium transition-colors duration-700 group-hover:text-black">
              Замовити
            </span>
            <span className="relative w-12 h-px bg-white group-hover:bg-black transition-colors duration-700" />
            <span className="relative transition-colors duration-700 group-hover:text-black">
              →
            </span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 text-xs tracking-[0.3em] uppercase text-white/40"
        >
          Через Telegram-бот · Доставка по Україні
        </motion.p>
      </div>
    </section>
  );
}
