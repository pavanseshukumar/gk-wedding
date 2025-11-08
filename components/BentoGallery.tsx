"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type GalleryTile = {
  src: string;
  alt: string;
  colSpan: string;
  rowSpan: string;
  priority?: boolean;
};

const galleryTiles: GalleryTile[] = [
  {
    src: "https://images.unsplash.com/photo-1513863323965-57c31c9e8120?auto=format&fit=crop&w=1400&q=80",
    alt: "Bride and groom showered with akshata during ritual",
    colSpan: "md:col-span-7",
    rowSpan: "row-span-2",
    priority: true,
  },
  {
    src: "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=900&q=80",
    alt: "Sacred kalash and mangalasnanam setup with flowers",
    colSpan: "md:col-span-5",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=900&q=80",
    alt: "Brass lamps and temple bells adorning the mandapam",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1580380720405-8d1a7c5210aa?auto=format&fit=crop&w=1200&q=80",
    alt: "Bride and groom laughing during saptapadi ritual",
    colSpan: "md:col-span-8",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=900&q=80",
    alt: "Traditional South Indian feast served on banana leaf",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1578924617441-612b03466e3b?auto=format&fit=crop&w=900&q=80",
    alt: "Sacred fire and kalash setup for vedic rituals",
    colSpan: "md:col-span-5",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80",
    alt: "Henna decorated hands holding turmeric and kumkum",
    colSpan: "md:col-span-3",
    rowSpan: "row-span-1",
  },
];

export function BentoGallery() {
  return (
    <section
      id="gallery"
      className="mt-24 space-y-10 overflow-hidden rounded-[34px] border border-border/50 bg-card/85 p-6 shadow-[var(--shadow-soft)] backdrop-blur-soft sm:p-10 lg:p-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.85, ease: [0.21, 1, 0.32, 1] }}
        className="max-w-3xl space-y-3"
      >
        <p className="text-[0.65rem] uppercase tracking-[0.48em] text-muted-foreground">
          Captured keepsakes
        </p>
        <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
          Glimpses of our joyful Telugu soiree
        </h2>
        <p className="text-base text-muted-foreground sm:text-lg">
          From turmeric-hued laughter to the echo of mridangam beats—the ceremonies
          are framed in warm golds and rose-tinted memories.
        </p>
      </motion.div>

      <div className="grid auto-rows-[180px] grid-cols-1 gap-5 sm:auto-rows-[220px] md:auto-rows-[210px] md:grid-cols-12 lg:auto-rows-[240px]">
        {galleryTiles.map(({ src, alt, colSpan, rowSpan, priority }, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.06, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className={`group relative overflow-hidden rounded-[28px] border border-border/50 bg-background/60 ${colSpan} ${rowSpan}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 40vw, 100vw"
              className="object-cover object-center transition-transform duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-black/45" />
            <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-background/80 px-4 py-1 text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground shadow-sm shadow-primary/10">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

