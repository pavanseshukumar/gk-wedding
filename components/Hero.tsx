"use client";

import { motion } from "framer-motion";
import { CalendarHeart, ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
} as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden rounded-[36px] border border-border/40 bg-card/90 px-6 pb-24 pt-24 shadow-[var(--shadow-soft)] backdrop-blur-soft transition-colors md:px-14 lg:grid lg:min-h-[80vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-20 lg:pb-24 lg:pt-28"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
          alt="Softly lit wedding floral arrangement"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <span className="absolute inset-0 bg-gradient-to-br from-ivory/80 via-ivory/50 to-transparent dark:from-slate/80 dark:via-slate/60" />
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4)_0,transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(31,35,45,0.65)_0,transparent_65%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col gap-8"
      >
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-background/90 px-4 py-1.5 text-xs uppercase tracking-[0.4em] text-muted-foreground shadow-sm shadow-primary/15">
          <CalendarHeart className="size-4 text-primary" />
          14 · February · 2026
        </span>
        <div className="space-y-6 text-balance">
          <p className="text-sm uppercase tracking-[0.45em] text-muted-foreground">
            Together with their families
          </p>
          <motion.h1
            className="font-heading text-5xl leading-tight text-foreground sm:text-6xl md:text-7xl"
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Girish <span className="text-primary">&</span> Kavya
          </motion.h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            invite you to share in the joy of their wedding celebration in the
            city of Bengaluru. An evening of heartfelt vows, curated melodies,
            and timeless memories awaits.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Button
            asChild
            className="rounded-full bg-primary/90 px-7 py-3 text-base font-semibold tracking-wide shadow-glow transition hover:bg-primary"
          >
            <a href="#details" className="flex items-center gap-2">
              View the details
              <ArrowRight className="size-5" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Reception follows immediately after the ceremony.
          </p>
        </div>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-12 flex flex-col items-end gap-6 lg:mt-0"
      >
        <div className="relative h-[420px] w-full overflow-hidden rounded-[32px] border border-border/40 bg-white/30 p-1 shadow-[var(--shadow-soft)] backdrop-blur-xl dark:bg-white/10 lg:h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=900&q=80"
            alt="Bride and groom embracing in a sunlit garden"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="rounded-[28px] object-cover object-center"
          />
        </div>
        <div className="w-full rounded-[28px] border border-border/50 bg-background/80 px-6 py-5 text-right shadow-sm shadow-primary/10 backdrop-blur-soft">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Venue
          </p>
          <p className="mt-2 font-heading text-2xl text-foreground">
            The Glasshouse Pavilion
          </p>
          <p className="text-sm text-muted-foreground">
            Palace Grounds, Bengaluru
          </p>
        </div>
      </motion.aside>
    </section>
  );
}

