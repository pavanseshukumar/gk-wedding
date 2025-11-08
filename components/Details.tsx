"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Clock4, MapPin, Music2 } from "lucide-react";

const details = [
  {
    title: "Wedding Ceremony",
    time: "Saturday, 14 February 2026 · 5:30 PM",
    description: "Sunset vows framed by candlelight and the fragrance of jasmine.",
    icon: CalendarCheck,
  },
  {
    title: "Reception Soirée",
    time: "7:00 PM onwards",
    description: "Curated courses, champagne toasts, and a live ensemble.",
    icon: Music2,
  },
  {
    title: "Venue",
    time: "The Glasshouse Pavilion, Palace Grounds, Bengaluru",
    description: "Complimentary valet and shuttle service available from the main gate.",
    icon: MapPin,
  },
  {
    title: "Suggested Arrival",
    time: "Please join us by 5:00 PM",
    description: "Settle in, greet loved ones, and enjoy a welcome tea ritual.",
    icon: Clock4,
  },
] as const;

export function Details() {
  return (
    <section id="details" className="mt-24 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-3 text-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Event Details
        </p>
        <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
          A heartfelt evening to remember
        </h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          Dress in muted florals or classic evening attire. Allow yourself to be
          wrapped in the warmth of music, memories, and moonlit gardens.
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {details.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/85 p-7 shadow-[var(--shadow-soft)] backdrop-blur-soft"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:bg-primary/20 dark:bg-primary/20 dark:group-hover:bg-primary/35" />
              <div className="relative flex flex-col gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner shadow-primary/20">
                  <Icon className="size-5" />
                </span>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground/90">
                    {item.time}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

