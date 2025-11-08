"use client";

import { motion } from "framer-motion";
import { AlarmClock, CalendarDays, MapPin, Music2, Sunrise } from "lucide-react";

const details = [
  {
    title: "Nalugu & Haldi",
    date: "21 November 2025",
    time: "11:00 AM onwards",
    venue: "Terrace at Girish's family courtyard, Vijayawada",
    icon: Sunrise,
    mapUrl: "https://maps.app.goo.gl/pZeAxVj8gn5RsKWi9",
  },
  {
    title: "Pellikoduku",
    date: "22 November 2025",
    time: "10:00 AM onwards",
    venue: "Girish's family courtyard, Vijayawada",
    icon: Sunrise,
    mapUrl: "https://maps.app.goo.gl/pZeAxVj8gn5RsKWi9",
  },
  {
    title: "Wedding Reception",
    date: "22 November 2025",
    time: "07:00 PM onwards",
    venue: "Railway Club Function Hall, Vijayawada",
    icon: Music2,
    mapUrl: "https://maps.app.goo.gl/aXyddkcDkhzqd6cg8",
  },
  {
    title: "Wedding Sumuhurtham",
    date: "23 November 2025",
    time: "05:25 AM",
    venue: "Railway Club Function Hall, Vijayawada",
    icon: AlarmClock,
    mapUrl: "https://maps.app.goo.gl/aXyddkcDkhzqd6cg8",
  },
] as const;

export function Details() {
  return (
    <section id="details" className="mt-24 space-y-10">
      <div className="flex justify-evenly text-[0.55rem] font-semibold tracking-[0.3em] text-primary sm:text-[0.6rem]">
        <span>శ్రీరస్తు</span>
        <span>శుభమస్తు</span>
        <span>అవిఘ్నమస్తు</span>
      </div>

      <motion.div
        className="flex flex-col items-center gap-3 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.21, 1, 0.34, 1] }}
      >
        <p className="text-[0.65rem] uppercase tracking-[0.45em] text-muted-foreground">
          Auspicious schedule
        </p>
        <h2 className="font-heading text-4xl text-foreground sm:text-5xl">
          Rituals woven through tradition
        </h2>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Arrive in traditional attire. Priests will guide each ritual while we
          cherish every blessing and joyous chorus from our loved ones.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {details.map(({ icon: Icon, ...item }, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: index * 0.08,
              duration: 0.7,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="group relative overflow-hidden rounded-[30px] border border-border/55 bg-card/85 p-7 shadow-[var(--shadow-soft)] backdrop-blur-soft transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:scale-[1.02]"
          >
            <div className="absolute -right-10 -top-14 size-36 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:bg-primary/25 dark:bg-primary/20" />
            <div className="relative flex flex-col gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary shadow-inner shadow-primary/20">
                <Icon className="size-5" />
              </span>
              <div className="space-y-2.5">
                <h3 className="font-heading text-2xl text-foreground text-center sm:text-left">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground/95 sm:justify-start">
                  <CalendarDays className="size-4 flex-shrink-0" />
                  <span>{item.date}{" "}{item.time}</span>
                </div>
                  
                <div className="mt-1.5 flex items-start gap-2 text-xs text-primary sm:text-sm">
                  <MapPin className="mt-[1px] size-[1.2rem] flex-shrink-0 text-primary" />
                  <div className="flex flex-col items-start">
                    <span className="max-w-[18ch] text-left uppercase tracking-[0.2em] text-primary/90 sm:max-w-[22ch]">
                      {item.venue}
                    </span>
                    <a
                      href={item.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 rounded-full border border-primary/40 px-3 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.36em] text-primary transition hover:border-primary hover:bg-primary/10"
                    >
                      Click here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
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

