"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
};

const baseImages: CarouselImage[] = [
  {
    src: "/images/1.JPG",
    alt: "Portrait of Girish and Kalyani sharing a laugh during the pre-wedding shoot",
  },
  {
    src: "/images/2.JPG",
    alt: "Bride getting ready with delicate jewellery details",
  },
  {
    src: "/images/3.JPG",
    alt: "Groom adjusting his sherwani with a candid smile",
  },
  {
    src: "/images/4.JPG",
    alt: "Couple holding hands during the outdoor session",
  },
  {
    src: "/images/5.JPG",
    alt: "Family celebrating with vibrant garlands",
  },
  {
    src: "/images/6.JPG",
    alt: "Traditional decor with kalash and floral backdrop",
  },
  {
    src: "/images/7.JPG",
    alt: "Close-up of mehendi adorned hands forming a heart",
  },
  {
    src: "/images/8.JPG",
    alt: "Bride twirling in her saree during the golden hour",
  },
  {
    src: "/images/9.JPG",
    alt: "Groom sharing a light moment with his best man",
  },
  {
    src: "/images/10.JPG",
    alt: "Candid moment of the couple under floral canopy",
  },
  {
    src: "/images/11.JPG",
    alt: "Intricate wedding decor with jasmine strings",
  },
  {
    src: "/images/12.JPG",
    alt: "Bride and groom exchanging garlands joyfully",
  },
  {
    src: "/images/13.JPG",
    alt: "Parents blessing the couple with akshata",
  },
  {
    src: "/images/14.JPG",
    alt: "Kids playing around the mandapam with sparklers",
  },
  {
    src: "/images/16.JPG",
    alt: "Bride adjusting her bangles beside a mirror",
  },
  {
    src: "/images/17.JPG",
    alt: "Groom receiving blessings from elders",
  },
  {
    src: "/images/18.JPG",
    alt: "Wide shot of the mandapam decorated with lights",
  },
  {
    src: "/images/19.JPG",
    alt: "Couple laughing during the reception toast",
  },
  {
    src: "/images/20.JPG",
    alt: "Bridal accessories neatly arranged on silk cloth",
  },
  {
    src: "/images/22.JPG",
    alt: "Close-up of turmeric and kumkum thalis",
  },
  {
    src: "/images/23.JPG",
    alt: "Couple posing with their parents on the stage",
  },
  {
    src: "/images/24.JPG",
    alt: "Aerial view of guests seated for the ceremony",
  },
  {
    src: "/images/25.JPG",
    alt: "Sangeet performance with friends cheering",
  },

];

const AUTOPLAY_INTERVAL = 6000;

export function GalleryCarousel() {
  const images = useMemo(() => shuffle(baseImages).slice(0, 15), []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [images.length]);

  const goTo = (index: number) => {
    setCurrentIndex((index + images.length) % images.length);
  };

  return (
    <section
      id="gallery"
      className="mt-24 space-y-10 overflow-hidden rounded-[34px] border border-border/50 bg-card/85 p-6 shadow-[var(--shadow-soft)] backdrop-blur-soft sm:p-10 lg:p-14"
    >
      <p className="text-center text-[0.55rem] font-medium tracking-[0.42em] text-primary/70 sm:text-[0.6rem]">
        శ్రీ రాస్తు, శుభమాస్తు, అవిఘ్నమస్తు
      </p>

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
          From turmeric-hued laughter to the echo of mridangam beats—the ceremonies are framed in warm golds and rose-tinted memories.
        </p>
      </motion.div>

      <div className="relative">
        <div className="overflow-hidden rounded-[32px] border border-border/60 bg-background/70 shadow-[var(--shadow-soft)]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map(({ src, alt }, index) => (
              <div
                key={src}
                className="relative aspect-[3/2] w-full flex-shrink-0 sm:aspect-[5/3] lg:aspect-[16/9]"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1280px) 70vw, (min-width: 1024px) 80vw, 100vw"
                  className="object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60" />
                <span className="pointer-events-none absolute bottom-6 left-6 rounded-full bg-background/85 px-4 py-1 text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground shadow-sm shadow-primary/10">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(currentIndex - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-background/80 px-3 py-2 text-lg text-muted-foreground shadow-md transition hover:border-primary/60 hover:text-primary"
          aria-label="Previous photo"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => goTo(currentIndex + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-background/80 px-3 py-2 text-lg text-muted-foreground shadow-md transition hover:border-primary/60 hover:text-primary"
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            type="button"
            key={`dot-${index}`}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-6 bg-primary" : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <p className="text-center text-[0.55rem] font-medium tracking-[0.44em] text-muted-foreground/85 sm:text-[0.6rem]">
        Sri Rastu, Subhamastu, Avighnamastu
      </p>
    </section>
  );
}

function shuffle<T>(array: readonly T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
