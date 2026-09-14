"use client";

import { motion } from "framer-motion";
import BroadcastPlayer from "@/components/broadcast_player";
import { DarkSection, SectionHeading, revealUp } from "@/components/pages/shared/section-primitives";

export function LiveBroadcastSection() {
  return (
    <DarkSection>
      <motion.div {...revealUp} className="flex flex-col items-center text-center">
        <SectionHeading as="h1" badge="Live Events" title="Experience the Spirit" tone="dark" align="center" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Be a part of upcoming global events, and relive the highlights of past gatherings with other believers.
        </p>
      </motion.div>

      <motion.div
        id="live"
        className="mx-auto mt-14 max-w-5xl scroll-mt-32 overflow-hidden rounded-3xl shadow-2xl shadow-indigo-600/30"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <BroadcastPlayer />
      </motion.div>
    </DarkSection>
  );
}
