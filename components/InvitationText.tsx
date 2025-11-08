"use client";

import { motion } from "framer-motion";

export function InvitationText() {
  return (
    <section
      id="invitation"
      className="relative mt-24 rounded-[34px] border border-border/45 bg-card/85 px-6 py-20 shadow-[var(--shadow-soft)] backdrop-blur-soft sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="mb-6 flex justify-evenly text-[0.55rem] font-semibold tracking-[0.3em] text-primary sm:text-[0.6rem]">
        <span>శ్రీరస్తు</span>
        <span>శుభమస్తు</span>
        <span>అవిఘ్నమస్తు</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.34, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          సాదరంగా ఆహ్వానం • शुभ मंगलम्
        </p>
        <h2 className="mt-6 font-heading text-4xl leading-snug text-foreground sm:text-5xl">
          “సప్తపది ప్రతి అడుగులో ప్రేమతో, అగ్ని వెలుగులో మా కొత్త జర్నీ స్టార్ట్ అవుతోంది.”
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.15, duration: 1 }}
          className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          With every sacred step of the Saptapadi and in the warm glow of the holy fire, we are stepping into a new chapter of our lives. Surrounded by blessings, love, and the promise of togetherness, our beautiful journey begins.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="mt-10 space-y-2 text-sm text-muted-foreground sm:text-base"
        >
          <p className="font-heading text-2xl text-primary sm:text-3xl">
            {/* Girish Dandiboyena & Kalyani Pandilla */} Invited by
          </p>
          <p>Sri Gangaiah Dandiboyena & Smt. Sarojini Dandiboyena</p>
          {/* <p>D/o Sri Kondaiah Pandilla & Smt. Kondamma Pandilla</p>
          <p className="uppercase tracking-[0.35em] text-primary/80">
            November 22, 2025 · Vijayawada, Andhra Pradesh
          </p> */}
        </motion.div>
      </motion.div>

      <div className="mt-10 flex justify-evenly text-[0.55rem] font-semibold tracking-[0.32em] text-muted-foreground/85 sm:text-[0.6rem]">
        <span>Sri Rastu</span>
        <span>Subhamastu</span>
        <span>Avighnamastu</span>
      </div>
      <div className="pointer-events-none absolute inset-x-16 -bottom-8 hidden h-20 rounded-full bg-primary/15 blur-3xl md:block" />
    </section>
  );
}

