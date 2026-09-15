"use client";

import { motion } from "framer-motion";
import { useVideos } from "@/lib/content";
import { SectionHeading, VideoThumbnail, revealUp } from "./shared";

export function VideosSection() {
  const { data: videos, isError } = useVideos("pkn");

  // No published videos yet: leave the section out.
  if (videos?.length === 0) return null;

  return (
    <section className="bg-gray-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div {...revealUp}>
          <SectionHeading badge="Watch" title="Preachers Kid Videos" />
        </motion.div>

        {isError ? (
          <p className="mt-12 text-sm text-slate-500">Videos couldn’t be loaded. Please try again later.</p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos?.map((video, index) => (
              <motion.article
                key={video.id}
                className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <VideoThumbnail title={video.title} thumbnail={video.thumbnailUrl} embedUrl={video.embedUrl} />
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900">{video.title}</h3>
                  {video.description && <p className="mt-1 text-sm text-slate-500">{video.description}</p>}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
