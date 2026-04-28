"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Look = {
  src: string;
  alt: string;
  title: string;
  ref: string;
  span?: string;
  ratio: string;
};

const looks: Look[] = [
  {
    src: "/looks/look-01.jpg",
    alt: "NØCTURNE Hoodie — front",
    title: "Shadow Hoodie",
    ref: "N°01",
    span: "md:col-span-7 md:row-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/looks/look-02.jpg",
    alt: "NØCTURNE Hoodie — back print",
    title: "Be Proud",
    ref: "N°02",
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/looks/look-03.jpg",
    alt: "NØCTURNE — seated portrait",
    title: "Silent Sit",
    ref: "N°03",
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/looks/look-04.jpg",
    alt: "NØCTURNE Hoodie — hood up",
    title: "Hooded",
    ref: "N°04",
    span: "md:col-span-6",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/looks/look-05.jpg",
    alt: "NØCTURNE — pocket detail",
    title: "Pocket Detail",
    ref: "N°05",
    span: "md:col-span-6",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/looks/look-06.jpg",
    alt: "NØCTURNE — campaign portrait",
    title: "Drop 01",
    ref: "N°06",
    span: "md:col-span-12",
    ratio: "aspect-[16/9]",
  },
];

export default function Lookbook() {
  return (
    <section
      id="lookbook"
      className="relative py-24 md:py-40 px-6 md:px-10 border-b border-white/10"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-[10px] tracking-[0.4em] uppercase text-white/50 mb-3">
              02 / Колекція
            </span>
            <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.02em]">
              Lookbook
            </h2>
          </motion.div>
          <span className="hidden md:block text-xs tracking-[0.3em] uppercase text-white/40">
            FW / 26
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5">
          {looks.map((look, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 1.1,
                delay: (i % 2) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden bg-[#111] ${look.span ?? "md:col-span-4"} ${look.ratio}`}
            >
              <Image
                src={look.src}
                alt={look.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 md:p-7 flex items-end justify-between text-white">
                <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">
                    {look.ref}
                  </div>
                  <div className="text-lg md:text-xl font-medium">
                    {look.title}
                  </div>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-xs tracking-[0.3em] uppercase">
                  →
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
