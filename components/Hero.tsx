"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";
import { Flower2, CalendarDays, ArrowRight, Timer } from "lucide-react";
import Image from "next/image";

import mainImage from "@/public/images/main1.jpg";

import { Button } from "@/components/ui/button";

const textReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 1, 0.34, 1] },
  },
} as const;

export function Hero() {
  const muhurtham = useMemo(() => new Date("2025-11-23T05:25:00+05:30"), []);
  const [timeLeft, setTimeLeft] = useState(() => formatTimeLeft(muhurtham));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(formatTimeLeft(muhurtham));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [muhurtham]);

  const calendarLink =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Girish+%26+Kalyani+Wedding+Sumuhurtham&dates=20251122T235500Z/20251123T015500Z&details=Join+Girish+Dandiboyena+and+Kalyani+Pandilla+for+their+sumuhurtham+ceremony.&location=Railway+Club+Function+Hall%2C+Vijayawada";

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden rounded-[40px] border border-border/50 bg-card/90 px-6 pb-24 pt-28 shadow-[var(--shadow-soft)] backdrop-blur-soft md:px-12 lg:grid lg:min-h-[80vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-16 lg:pt-32"
    >

      <div className="absolute inset-0 -z-20">
        {/* <Image
          src="https://images.unsplash.com/photo-1617957743091-4bb4c44ff17f?auto=format&fit=crop&w=1600&q=80"
          alt="Sacred hindu wedding mandap with traditional decor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        /> */}
        <span className="absolute inset-0 bg-gradient-to-br from-[#fef1d0]/75 via-background/70 to-transparent dark:from-[#2a120d]/75 dark:via-[#1e0d0a]/70" />
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,196,124,0.55)_0,transparent_68%)] dark:bg-[radial-gradient(circle_at_top,rgba(120,48,20,0.65)_0,transparent_72%)]" />
        <span className="absolute inset-0 bg-[linear-gradient(140deg,rgba(242,171,64,0.35)_0%,rgba(255,247,234,0)_60%)] dark:bg-[linear-gradient(150deg,rgba(156,68,28,0.55)_0%,rgba(28,14,11,0)_60%)]" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={textReveal}
        className="relative z-10 flex flex-col gap-8"
      >
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-background/80 px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.48em] text-muted-foreground shadow-sm shadow-primary/10">
          <Flower2 className="size-4 text-primary" />
          శ్రీ గణేశాయ నమః
        </span>

        <div className="space-y-6 text-balance">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">
            Under the blessings of all our guiding deities
          </p>
          <motion.h1
            className="font-heading text-5xl leading-tight text-foreground sm:text-6xl md:text-[4.2rem]"
            transition={{ delay: 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            Girish <span className="text-primary">&</span> Kalyani
          </motion.h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            invite you to their traditional Telugu Hindu wedding, where sacred mantras, jasmine
            garlands, and the glowing agni kundam bless the promise of a shared tomorrow.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Button
            asChild
            className="rounded-full bg-primary px-8 py-3 text-base font-semibold tracking-wide shadow-glow hover:bg-primary/95"
          >
            <a href="#details" className="flex items-center gap-2">
              View auspicious timings
              <ArrowRight className="size-5" />
            </a>
          </Button>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <a
              href={calendarLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary shadow-inner shadow-primary/20 transition hover:bg-primary/25"
            >
              <CalendarDays className="size-5" />
              <span className="sr-only">Add to calendar</span>
            </a>
            <div className="leading-tight">
              <button
                type="button"
                onClick={() => {
                  window.open(calendarLink, "_blank", "noopener,noreferrer");
                }}
                className="font-semibold text-foreground underline-offset-4 transition hover:text-primary hover:underline"
              >
                23 November 2025 · 05:25 AM
              </button>
              <p>Sumuhurtham</p>
            </div>
            <Button
              asChild
              size="sm"
              className="w-full rounded-full bg-primary px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground shadow-glow transition hover:bg-primary/90 sm:w-auto"
            >
              <a href={calendarLink} target="_blank" rel="noreferrer">
                Save the date
              </a>
            </Button>
          </div>
        </div>

      </motion.div>

      <motion.aside
        className="relative z-10 mt-14 flex flex-col items-end gap-6 lg:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="relative h-[480px] w-full overflow-hidden rounded-[36px] border border-border/50 bg-background/5 p-1 shadow-[var(--shadow-soft)] backdrop-blur-soft dark:bg-background/50 sm:h-[520px] lg:h-[620px]">
          <Image
            src={mainImage}
            alt="Girish and Kalyani wedding portrait"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="rounded-[30px] object-cover object-center transition-transform duration-[1600ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-primary/15" />
          <div className="absolute inset-x-5 bottom-5">
            <div className="rounded-[26px] border border-primary/30 bg-background/70 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur-soft">
              <div className="flex flex-col items-center gap-3 text-primary sm:flex-row sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/15">
                    <Timer className="size-5" />
                  </span>
                  <div className="text-left sm:text-center">
                    <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                      Countdown to Muhurtham
                    </p>
                  </div>
                </div>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-center font-heading text-xl text-foreground sm:grid-cols-4">
                {timeLeft.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 px-4 py-3 shadow-sm shadow-primary/15"
                  >
                    <dt className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-1 text-2xl sm:text-[2rem]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}

type TimeUnit = {
  label: string;
  value: string;
};

function formatTimeLeft(target: Date): TimeUnit[] {
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return [
    { label: "Days", value: days.toString().padStart(2, "0") },
    { label: "Hours", value: hours.toString().padStart(2, "0") },
    { label: "Minutes", value: minutes.toString().padStart(2, "0") },
    { label: "Seconds", value: seconds.toString().padStart(2, "0") },
  ];
}

