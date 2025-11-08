"use client";

import { motion } from "framer-motion";

export function InvitationText() {
  return (
    <section
      id="invitation"
      className="relative mt-24 rounded-[32px] border border-border/40 bg-card/80 px-6 py-16 shadow-[var(--shadow-soft)] backdrop-blur-soft transition-colors sm:px-10 lg:px-16 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.21, 1, 0.32, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          With joyful hearts
        </p>
        <h2 className="mt-6 font-heading text-4xl leading-snug text-foreground sm:text-5xl">
          “In the quiet hush of twilight, beneath a canopy of stars, we vow to
          promise a lifetime of tomorrows.”
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 1.1 }}
          className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          We warmly welcome you to witness our vows and celebrate a new chapter
          woven with hope, gratitude, and the gentle presence of loved ones who
          have shaped our story.
        </motion.p>
      </motion.div>
      <div className="pointer-events-none absolute inset-x-10 -bottom-6 hidden h-16 rounded-full bg-gradient-to-t from-primary/20 to-transparent blur-3xl md:block" />
    </section>
  );
}

