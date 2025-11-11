"use client";

import { useMemo } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

type GalleryTile = {
  src: string;
  alt: string;
  colSpan: string;
  rowSpan: string;
  priority?: boolean;
};

const baseGalleryTiles: GalleryTile[] = [
  {
    src: "/images/1.jpg",
    alt: "Portrait of Girish and Kalyani sharing a laugh during the pre-wedding shoot",
    colSpan: "md:col-span-7",
    rowSpan: "row-span-2",
    priority: true,
  },
  {
    src: "/images/2.JPG",
    alt: "Bride getting ready with delicate jewellery details",
    colSpan: "md:col-span-5",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/3.JPG",
    alt: "Groom adjusting his sherwani with a candid smile",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/4.JPG",
    alt: "Couple holding hands during the outdoor session",
    colSpan: "md:col-span-8",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/5.JPG",
    alt: "Family celebrating with vibrant garlands",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/6.JPG",
    alt: "Traditional decor with kalash and floral backdrop",
    colSpan: "md:col-span-5",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/7.JPG",
    alt: "Close-up of mehendi adorned hands forming a heart",
    colSpan: "md:col-span-3",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/8.JPG",
    alt: "Bride twirling in her saree during the golden hour",
    colSpan: "md:col-span-6",
    rowSpan: "row-span-2",
  },
  {
    src: "/images/9.JPG",
    alt: "Groom sharing a light moment with his best man",
    colSpan: "md:col-span-6",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/10.JPG",
    alt: "Candid moment of the couple under floral canopy",
    colSpan: "md:col-span-5",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/11.JPG",
    alt: "Intricate wedding decor with jasmine strings",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/12.JPG",
    alt: "Bride and groom exchanging garlands joyfully",
    colSpan: "md:col-span-8",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/13.JPG",
    alt: "Parents blessing the couple with akshata",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/14.JPG",
    alt: "Kids playing around the mandapam with sparklers",
    colSpan: "md:col-span-3",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/16.JPG",
    alt: "Bride adjusting her bangles beside a mirror",
    colSpan: "md:col-span-6",
    rowSpan: "row-span-2",
  },
  {
    src: "/images/17.JPG",
    alt: "Groom receiving blessings from elders",
    colSpan: "md:col-span-5",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/18.JPG",
    alt: "Wide shot of the mandapam decorated with lights",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/19.JPG",
    alt: "Couple laughing during the reception toast",
    colSpan: "md:col-span-7",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/20.JPG",
    alt: "Bridal accessories neatly arranged on silk cloth",
    colSpan: "md:col-span-5",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/22.JPG",
    alt: "Close-up of turmeric and kumkum thalis",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/23.JPG",
    alt: "Couple posing with their parents on the stage",
    colSpan: "md:col-span-6",
    rowSpan: "row-span-1",
  },
  {
    src: "/images/24.JPG",
    alt: "Aerial view of guests seated for the ceremony",
    colSpan: "md:col-span-5",
    rowSpan: "row-span-2",
  },
  {
    src: "/images/25.JPG",
    alt: "Sangeet performance with friends cheering",
    colSpan: "md:col-span-4",
    rowSpan: "row-span-1",
  },
];

export function BentoGallery() {
  const galleryTiles = useMemo(
    () => shuffle(baseGalleryTiles).slice(0, 15),
    []
  );

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

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

