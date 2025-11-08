"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import Image from "next/image";

import groomImage from "@/public/images/groom.jpg";
import brideImage from "@/public/images/bride.jpg";

const heartPath =
  "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z";
const spineSegments = Array.from({ length: 5 }, (_, index) => index);
const mobileSpineSegments = Array.from({ length: 3 }, (_, index) => index);

const profiles = [
  {
    name: "Girish Dandiboyena",
    role: "Srivaru",
    family: "S/o Sri Gangaiah Dandiboyena & Smt. Sarojini Dandiboyena",
    location: "Vijayawada · Andhra Pradesh",
    image: groomImage,
  },
  {
    name: "Kalyani Pandilla",
    role: "Srimathi",
    family: "D/o Sri Kondaiah Pandilla & Smt. Kondamma Pandilla",
    location: "Bengaluru · Karnataka",
    image: brideImage,
  },
] as const;

export function CoupleSpotlight() {
  return (
    <section
      id="couple"
      className="relative mt-24 rounded-[34px] border border-border/50 bg-card/85 px-6 py-20 shadow-[var(--shadow-soft)] backdrop-blur-soft sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="mb-6 flex justify-evenly text-[0.55rem] font-semibold tracking-[0.3em] text-primary sm:text-[0.6rem]">
        <span>శ్రీరస్తు</span>
        <span>శుభమస్తు</span>
        <span>అవిఘ్నమస్తు</span>
      </div>

      <div className="flex flex-col gap-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.21, 1, 0.34, 1] }}
          className="mx-auto inline-flex items-center gap-2 rounded-full bg-background/80 px-4 py-1 text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground shadow-sm shadow-primary/15"
        >
          <Sparkles className="size-4 text-primary" />
          మా కథ
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.05, duration: 0.8, ease: [0.21, 1, 0.34, 1] }}
          className="font-heading text-4xl text-foreground sm:text-5xl"
        >
          Two souls, one sacred rhythm
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg"
        >
          From temple corridors to late-night conversations, every shared laugh, prayer, and playlist
          has led us to this mandapam moment.
        </motion.p>
      </div>

      <div className="relative mt-12">
        <div className="grid gap-0 lg:grid-cols-2 lg:gap-6">
          {profiles.map((profile, index) => (
            <Fragment key={profile.name}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
                className="group relative overflow-hidden rounded-[30px] border border-border/55 bg-background/85 shadow-[var(--shadow-soft)] backdrop-blur-soft"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex flex-col items-center gap-6 p-8 text-center">
                  <div className="relative h-52 w-52 overflow-hidden rounded-[26px] border border-border/60 bg-background/75 shadow-inner shadow-primary/10 sm:h-60 sm:w-56">
                    <Image
                      src={profile.image}
                      alt={`${profile.name} portrait`}
                      fill
                      sizes="(min-width: 1024px) 260px, 45vw"
                      className="object-cover object-center transition-transform duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] [transform:scaleX(-1)_scale(1.12)] group-hover:[transform:scaleX(-1)_scale(1.24)]"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                      <Heart className="size-4 text-primary" />
                      {profile.role}
                    </p>
                    <h3 className="font-heading text-3xl text-foreground sm:text-4xl">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-muted-foreground sm:text-base">{profile.family}</p>
                    <p className="text-xs uppercase tracking-[0.32em] text-primary/80">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </motion.article>
              {index === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ delay: 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-center justify-center lg:hidden"
                >
                  <div className="flex w-full items-stretch justify-center gap-3 px-6">
                    {mobileSpineSegments.map((segment) => (
                      <motion.svg
                        key={segment}
                        viewBox="0 0 120 180"
                        className="h-full w-16 text-primary/80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M60 10V80" opacity={0.35} />
                        <path d="M60 100V170" opacity={0.35} />
                        <path d={heartPath} transform="translate(48 80) scale(1.15)" opacity={0.85} />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 transform lg:flex">
          <div className="relative flex h-full w-32 flex-col items-center">
            <span className="absolute left-1/2 top-6 h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-primary/60 via-primary/20 to-primary/60" />
            <div className="flex h-full flex-col justify-evenly py-10">
              {spineSegments.map((segment) => (
                <motion.svg
                  key={segment}
                  viewBox="0 0 120 60"
                  className="h-16 w-24 text-primary/75"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    d="M8 30H38"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      delay: segment * 0.15,
                      duration: 1.2,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                  />
                  <motion.path
                    d="M82 30H112"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      delay: segment * 0.15 + 0.1,
                      duration: 1.2,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                  />
                  <motion.path
                    d={heartPath}
                    transform="translate(48 12) scale(1.05)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      delay: segment * 0.18 + 0.2,
                      duration: 2.4,
                      ease: [0.25, 1, 0.5, 1],
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 0.8,
                    }}
                  />
                </motion.svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-evenly text-[0.55rem] font-semibold tracking-[0.32em] text-muted-foreground/85 sm:text-[0.6rem]">
        <span>Sri Rastu</span>
        <span>Subhamastu</span>
        <span>Avighnamastu</span>
      </div>
    </section>
  );
}

