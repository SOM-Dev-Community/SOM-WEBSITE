"use client";

import { motion } from "framer-motion";
import { featuredTestimony, testimonies } from "../data";
import { DarkSection, InitialsAvatar, SectionHeading, VideoThumbnail, revealUp } from "./shared";

export function TestimoniesSection() {
  return (
    <DarkSection>
      <motion.div {...revealUp}>
        <SectionHeading as="h1" badge="Preachers Kids Network" title="Testimonies" tone="dark" align="center" />
      </motion.div>

      {/* Featured testimony */}
      <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div {...revealUp} className="text-sm text-slate-300">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-400">
            {featuredTestimony.title}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed">{featuredTestimony.body}</p>
          <p className="mt-8 font-semibold text-white">{featuredTestimony.name}</p>
          <p className="text-xs text-slate-400">{featuredTestimony.location}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
        >
          <VideoThumbnail
            title={featuredTestimony.title}
            thumbnail={featuredTestimony.thumbnail}
            embedUrl={featuredTestimony.embedUrl}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-3xl shadow-2xl shadow-indigo-600/30"
          />
        </motion.div>
      </div>

      {/* Testimony cards */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonies.map((testimony, index) => (
          <motion.figure
            key={`${testimony.name}-${index}`}
            className="flex flex-col rounded-3xl bg-white p-6 text-slate-600 shadow-2xl shadow-indigo-600/20"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <InitialsAvatar name={testimony.name} className="mx-auto" />
            <blockquote className="mt-5 flex-1 text-sm leading-relaxed">
              &ldquo;{testimony.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5">
              <p className="text-sm font-semibold text-indigo-600">{testimony.name}</p>
              <p className="text-xs text-slate-400">{testimony.location}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </DarkSection>
  );
}
