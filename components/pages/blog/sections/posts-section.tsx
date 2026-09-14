"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  InitialsAvatar,
  SectionHeading,
  lightCardClass,
  revealUp,
} from "@/components/pages/shared/section-primitives";
import { blogPosts, blogTopics } from "../data";

export function PostsSection() {
  const [activeTopic, setActiveTopic] = useState(blogTopics[0]);

  const posts = activeTopic.category
    ? blogPosts.filter((post) => post.category === activeTopic.category)
    : blogPosts;

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.div {...revealUp}>
            <SectionHeading badge="Read" title="Explore Topics" />
          </motion.div>

          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter posts by topic">
            {blogTopics.map((topic) => {
              const isActive = topic.label === activeTopic.label;

              return (
                <button
                  key={topic.label}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveTopic(topic)}
                  className={cn(
                    "cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-[#8A7DFF] text-white shadow-lg shadow-indigo-500/30"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                  )}
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              className={cn("flex flex-col overflow-hidden", lightCardClass)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">{post.category}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{post.description}</p>

                <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
                  <InitialsAvatar name={post.author} className="h-8 w-8 text-[0.65rem]" />
                  <span className="font-medium text-slate-700">{post.author}</span>
                  <span aria-hidden="true">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
