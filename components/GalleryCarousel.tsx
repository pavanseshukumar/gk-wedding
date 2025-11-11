"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
};

const imageNumbers = Array.from({ length: 31 }, (_, index) => index + 2); // 2 - 32 inclusive

const baseImages: CarouselImage[] = imageNumbers.map((number) => ({
  src: `/images/${number}.jpg`,
  alt: `Wedding memory ${number}`,
}));

const AUTOPLAY_INTERVAL = 3000;

export function GalleryCarousel() {
  const [images, setImages] = useState<CarouselImage[]>(() => baseImages.slice(0, 15));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setImages(() => shuffle(baseImages).slice(0, 15));
  }, []);

  useEffect(() => {
    if (images.length === 0) {
      return;
    }

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
      <div className="flex justify-evenly text-[0.55rem] font-semibold tracking-[0.3em] text-primary sm:text-[0.6rem]">
        <span>శ్రీరస్తు</span>
        <span>శుభమస్తు</span>
        <span>అవిఘ్నమస్తు</span>
      </div>

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
          Glimpses of our joyful moments.
        </h2>
        <p className="text-base text-muted-foreground sm:text-lg">
        These aren’t just frames, they’re memories we’re choosing to hold on to forever.
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

      <div className="flex justify-evenly text-[0.55rem] font-semibold tracking-[0.32em] text-muted-foreground/85 sm:text-[0.6rem]">
        <span>Sri Rastu</span>
        <span>Subhamastu</span>
        <span>Avighnamastu</span>
      </div>
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
