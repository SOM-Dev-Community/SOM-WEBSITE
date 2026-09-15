"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowIcon,
  DarkSection,
  InitialsAvatar,
  SectionHeading,
  gradientButtonClass,
  revealUp,
} from "@/components/pages/shared/section-primitives";
import { formatPostDate, useFeaturedPost } from "@/lib/content";

export function FeaturedPostSection() {
  const { data: post } = useFeaturedPost();

  return (
    <DarkSection>
      <motion.div {...revealUp}>
        <SectionHeading as="h1" badge="Loveworld Sons of Ministry" title="SOM Impact Blog" tone="dark" align="center" />
      </motion.div>

      {post && (
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="relative aspect-4/3 overflow-hidden rounded-3xl bg-slate-900 shadow-2xl shadow-indigo-600/30"
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            {/* Plain img: cover images can come from any host the CMS allows, not just next.config's list */}
            {post.coverImageUrl && (
              <img
                src={post.coverImageUrl}
                alt={post.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
          </motion.div>

          <motion.div {...revealUp} className="text-sm text-slate-300">
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-gradient-to-r from-indigo-600 to-[#8A7DFF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Featured
              </span>
              <span className="text-xs text-slate-400">{formatPostDate(post.publishedAt)}</span>
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-indigo-400">
              {post.title}
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed">{post.excerpt}</p>

            <div className="mt-8 flex items-center gap-3">
              <InitialsAvatar name={post.authorName} className="h-10 w-10 text-xs" />
              <div>
                <p className="font-semibold text-white">{post.authorName}</p>
                {post.authorRole && <p className="text-xs text-slate-400">{post.authorRole}</p>}
              </div>
            </div>

            <Button asChild className={`${gradientButtonClass} mt-10 py-5 px-6 text-sm`}>
              <Link href={`/blog/${post.slug}`}>
                <span>Read Article</span>
                <ArrowIcon />
              </Link>
            </Button>
          </motion.div>
        </div>
      )}
    </DarkSection>
  );
}
