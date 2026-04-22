"use client";

import { motion } from "framer-motion";
import HybridCarousel from "@/components/hybrid-carousel";

const revealUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function ImageCarouselSection() {
  return (
    <section >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:px-16">
        <motion.div {...revealUp} className="mx-auto max-w-3xl text-center">
          {/* <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-700 sm:text-sm">
            Image Gallery
          </p> */}
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            10 Years of Bold Faith &amp; Global Impact
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-slate-200 sm:text-lg">
            A decade of life-transforming conferences, impactful ministry, bold innovations, and undeniable exploits.
          </p>
          <p className="mt-3 text-pretty text-sm leading-7 text-slate-300 sm:text-base">
            Built on family, love, and friendship, united by one vision.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-sky-300 sm:text-sm">
            Raising champions. Transforming lives.
          </p>
        </motion.div>

        <motion.div
          {...revealUp}
          transition={{ ...revealUp.transition, delay: 0.08 }}
          className="w-full"
        >
          <HybridCarousel className="max-w-none" />
        </motion.div>
      </div>
    </section>
  );
}
