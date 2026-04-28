"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          className="text-xl md:text-2xl font-semibold tracking-[0.18em] hover:opacity-70 transition-opacity duration-500"
        >
          NØCTURNE
        </a>
        <a
          href="https://www.instagram.com/nocturne._shop/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="group relative w-10 h-10 grid place-items-center hover:opacity-70 transition-opacity duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-5 h-5"
          >
            <rect x="3" y="3" width="18" height="18" rx="4.5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
          </svg>
        </a>
      </div>
    </motion.nav>
  );
}
