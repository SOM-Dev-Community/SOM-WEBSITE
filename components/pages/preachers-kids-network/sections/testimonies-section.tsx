"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTestimonies } from "@/lib/content";
import { DarkSection, InitialsAvatar, SectionHeading, VideoThumbnail, revealUp } from "./shared";

export function TestimoniesSection() {
  const featuredQuery = useTestimonies({ featured: true, limit: 1 });
  const cardsQuery = useTestimonies({ featured: false });
  const featured = featuredQuery.data?.[0];
  const cards = cardsQuery.data ?? [];

  const loading = featuredQuery.isPending || cardsQuery.isPending;
  const failed = featuredQuery.isError || cardsQuery.isError;
  const hasMedia = Boolean(featured?.videoUrl || featured?.thumbnailUrl);

  return (
    <DarkSection>
      <motion.div {...revealUp}>
        <SectionHeading as="h1" badge="Preachers Kids Network" title="Testimonies" tone="dark" align="center" />
      </motion.div>

      {/* Featured testimony */}
      {featured && (
        <div className={cn("mt-16 grid items-center gap-12 lg:gap-20", hasMedia && "lg:grid-cols-2")}>
          <motion.div {...revealUp} className={cn("text-sm text-slate-300", !hasMedia && "mx-auto max-w-2xl text-center")}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-400">
              {featured.title ?? `${featured.name}’s testimony`}
            </h2>
            <p className={cn("mt-6 whitespace-pre-line leading-relaxed", hasMedia && "max-w-xl")}>
              {featured.body ?? featured.quote}
            </p>
            <p className="mt-8 font-semibold text-white">{featured.name}</p>
            {featured.location && <p className="text-xs text-slate-400">{featured.location}</p>}
          </motion.div>

          {hasMedia && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
            >
              {featured.videoUrl ? (
                <VideoThumbnail
                  title={featured.title ?? featured.name}
                  thumbnail={featured.thumbnailUrl}
                  embedUrl={featured.videoUrl}
                  className="rounded-3xl shadow-2xl shadow-indigo-600/30"
                />
              ) : (
                <img
                  src={featured.thumbnailUrl ?? ""}
                  alt=""
                  className="aspect-video w-full rounded-3xl object-cover shadow-2xl shadow-indigo-600/30"
                />
              )}
            </motion.div>
          )}
        </div>
      )}

      {/* Testimony cards */}
      {cards.length > 0 && (
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((testimony, index) => (
            <motion.figure
              key={testimony.id}
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
                {testimony.location && <p className="text-xs text-slate-400">{testimony.location}</p>}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      )}

      {!loading && !featured && cards.length === 0 && (
        <p className="mt-12 text-center text-sm text-slate-400">
          {failed ? "Testimonies couldn’t be loaded. Please try again later." : "Testimonies will be shared here soon."}
        </p>
      )}
    </DarkSection>
  );
}
