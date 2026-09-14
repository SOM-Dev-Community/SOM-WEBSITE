"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { SectionHeading, revealUp } from "@/components/pages/shared/section-primitives";
import { eventHighlights } from "../data";

export function HighlightsSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div {...revealUp} className="flex flex-col items-center text-center">
          <SectionHeading badge="Gallery" title="Moments Captured" align="center" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600">
            Relive the beautiful highlights from our past events filled with joy, worship, and fellowship.
          </p>
        </motion.div>

        {/* Masonry columns so photos of different shapes sit together without gaps */}
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {eventHighlights.map((src, index) => (
            <motion.div
              key={`${src}-${index}`}
              className="group relative mb-6 break-inside-avoid overflow-hidden rounded-3xl bg-slate-200 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={src}
                alt={`Event highlight ${index + 1}`}
                loading="lazy"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
