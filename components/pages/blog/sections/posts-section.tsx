"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  InitialsAvatar,
  SectionHeading,
  lightCardClass,
  revealUp,
} from "@/components/pages/shared/section-primitives";
import { formatPostDate, usePostCategories, usePosts } from "@/lib/content";

const ALL_POSTS = { label: "All Posts", slug: undefined as string | undefined };

export function PostsSection() {
  const [activeSlug, setActiveSlug] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(1);

  const { data: categories } = usePostCategories();
  const { data, isPending, isError, isPlaceholderData } = usePosts({ category: activeSlug, page });

  const topics = [
    ALL_POSTS,
    ...(categories ?? [])
      .filter((category) => category.postCount > 0)
      .map((category) => ({ label: category.name, slug: category.slug })),
  ];

  const selectTopic = (slug: string | undefined) => {
    setActiveSlug(slug);
    setPage(1);
  };

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.div {...revealUp}>
            <SectionHeading badge="Read" title="Explore Topics" />
          </motion.div>

          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter posts by topic">
            {topics.map((topic) => {
              const isActive = topic.slug === activeSlug;

              return (
                <button
                  key={topic.label}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => selectTopic(topic.slug)}
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

        {isPending || isError || data.items.length === 0 ? (
          <p className="mt-12 text-sm text-slate-500">
            {isPending
              ? "Loading articles…"
              : isError
                ? "Articles couldn’t be loaded. Please try again later."
                : "No articles in this topic yet."}
          </p>
        ) : (
          <>
            <div className={cn("mt-12 grid gap-6 md:grid-cols-3 transition-opacity", isPlaceholderData && "opacity-60")}>
              {data.items.map((post, index) => (
                <motion.article
                  key={post.id}
                  className={cn("group relative flex flex-col overflow-hidden", lightCardClass)}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    {post.coverImageUrl && (
                      <img
                        src={post.coverImageUrl}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    {post.category && (
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">{post.category.name}</p>
                    )}
                    <h3 className="mt-3 text-lg font-semibold text-slate-900">
                      {/* Stretched link: the whole card is clickable */}
                      <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>

                    <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
                      <InitialsAvatar name={post.authorName} className="h-8 w-8 text-[0.65rem]" />
                      <span className="font-medium text-slate-700">{post.authorName}</span>
                      <span aria-hidden="true">•</span>
                      <span>{formatPostDate(post.publishedAt)}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {data.totalPages > 1 && (
              <nav className="mt-12 flex items-center justify-center gap-4 text-sm" aria-label="Pagination">
                <button
                  type="button"
                  onClick={() => setPage((current) => current - 1)}
                  disabled={page <= 1}
                  className="cursor-pointer rounded-full border border-slate-200 px-5 py-2 font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>
                <span className="text-slate-500">
                  Page {data.page} of {data.totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => setPage((current) => current + 1)}
                  disabled={page >= data.totalPages}
                  className="cursor-pointer rounded-full border border-slate-200 px-5 py-2 font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </nav>
            )}
          </>
        )}
      </div>
    </section>
  );
}
