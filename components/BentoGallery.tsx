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
    src: "https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1200&q=80",
    alt: "Bride and groom walking through a sunlit courtyard",
    colSpan: "md:col-span-7",
    rowSpan: "row-span-2",
    priority: true,
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80",
    alt: "Close-up of wedding rings resting on silk ribbon",
    colSpan: "md:col-span-5",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80",
    alt: "Elegant table setting with florals and candles",
    colSpan: "md:col-span-5",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Couple sharing a laugh during golden hour",
    colSpan: "md:col-span-7",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    alt: "Soft focus bouquet of blush roses",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1523861751938-12104a12711a?auto=format&fit=crop&w=900&q=80",
    alt: "Champagne glasses ready for a toast",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1518621736915-f3b1c0419b4c?auto=format&fit=crop&w=900&q=80",
    alt: "Candlelit aisle with floral arrangements",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
];

export function BentoGallery() {
  return (
    <section
      id="gallery"
      className="mt-24 space-y-10 overflow-hidden rounded-[32px] border border-border/40 bg-card/80 p-6 shadow-[var(--shadow-soft)] backdrop-blur-soft transition-colors sm:p-10 lg:p-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.85, ease: [0.21, 1, 0.32, 1] }}
        className="max-w-3xl space-y-3"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Our Story in Frames
        </p>
        <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
          Moments stitched together in light
        </h2>
        <p className="text-base text-muted-foreground sm:text-lg">
          From the first stolen glance to the afterglow of celebrations, a
          glimpse into the chapters that lead us here.
        </p>
      </motion.div>
      <div className="grid auto-rows-[180px] grid-cols-1 gap-5 sm:auto-rows-[220px] md:grid-cols-12 md:auto-rows-[200px] lg:auto-rows-[240px]">
        {galleryTiles.map(({ src, alt, colSpan, rowSpan, priority }, index) => (
          <motion.div
            key={src + index}
            initial={{ opacity: 0, scale: 0.95 }}
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
              className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-black/50" />
            <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-background/75 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground shadow-sm shadow-primary/10">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

