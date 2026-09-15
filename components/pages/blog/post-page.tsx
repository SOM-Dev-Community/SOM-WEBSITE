"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import Markdown, { type Components } from "react-markdown";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/pages/home/sections/Newsletter";
import {
  DarkSection,
  InitialsAvatar,
  revealUp,
} from "@/components/pages/shared/section-primitives";
import { PostVideo } from "@/components/pages/shared/post-video";
import { ApiError } from "@/lib/api";
import { formatPostDate, usePost } from "@/lib/content";

// Article bodies are Markdown. react-markdown ignores raw HTML, so CMS content can't inject markup.
const markdownComponents: Components = {
  p: (props) => <p className="leading-8" {...props} />,
  h2: (props) => <h2 className="pt-4 text-2xl font-bold tracking-tight text-slate-900" {...props} />,
  h3: (props) => <h3 className="pt-2 text-xl font-semibold text-slate-900" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-indigo-500 pl-5 text-lg font-semibold italic leading-relaxed text-indigo-700 [&>p]:leading-relaxed"
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc space-y-2 pl-6" {...props} />,
  ol: (props) => <ol className="list-decimal space-y-2 pl-6" {...props} />,
  a: ({ href, ...props }) => (
    <a
      href={href}
      className="font-medium text-indigo-600 underline underline-offset-4 hover:text-indigo-800"
      {...(href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    />
  ),
  img: ({ alt, ...props }) => <img alt={alt ?? ""} className="rounded-2xl" loading="lazy" {...props} />,
};

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, error, isPending } = usePost(slug);

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
        <Header />

        <main>
          {isPending ? (
            <DarkSection>
              <p className="text-center text-slate-400">Loading article…</p>
            </DarkSection>
          ) : error || !post ? (
            <DarkSection>
              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-bold text-white">
                  {error instanceof ApiError && error.status === 404 ? "Article not found" : "Article unavailable"}
                </h1>
                <p className="mt-4 text-slate-300">
                  {error instanceof ApiError && error.status === 404
                    ? "This article may have been moved or unpublished."
                    : "The article couldn’t be loaded. Please try again later."}
                </p>
                <Link href="/blog" className="mt-8 font-medium text-indigo-300 hover:text-white">
                  ← Back to the blog
                </Link>
              </div>
            </DarkSection>
          ) : (
            <>
              <DarkSection>
                <motion.div {...revealUp} className="mx-auto flex max-w-3xl flex-col items-center text-center">
                  <Link href="/blog" className="text-sm font-medium text-indigo-300 hover:text-white">
                    ← All articles
                  </Link>
                  {post.category && (
                    <span className="mt-8 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-white/75">
                      {post.category.name}
                    </span>
                  )}
                  <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">{post.title}</h1>
                  <div className="mt-8 flex items-center gap-3 text-left text-sm">
                    <InitialsAvatar name={post.authorName} className="h-10 w-10 text-xs" />
                    <div>
                      <p className="font-semibold text-white">{post.authorName}</p>
                      <p className="text-xs text-slate-400">
                        {[post.authorRole, formatPostDate(post.publishedAt), post.readingMinutes && `${post.readingMinutes} min read`]
                          .filter(Boolean)
                          .join(" · ")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </DarkSection>

              <article className="relative z-10 mx-auto -mt-16 max-w-3xl px-6 pb-24 sm:pb-28">
                {post.videoUrl ? (
                  <div className="aspect-video overflow-hidden rounded-3xl bg-black shadow-2xl shadow-indigo-600/30">
                    <PostVideo url={post.videoUrl} title={post.title} poster={post.coverImageUrl} />
                  </div>
                ) : post.coverImageUrl ? (
                  <img
                    src={post.coverImageUrl}
                    alt=""
                    className="aspect-video w-full rounded-3xl object-cover shadow-2xl shadow-indigo-600/30"
                  />
                ) : null}

                <div className="mt-12 space-y-6 text-base text-slate-600">
                  <Markdown components={markdownComponents}>{post.content}</Markdown>
                </div>
              </article>
            </>
          )}
        </main>

        <Newsletter />
        <Footer />
      </div>
    </ReactLenis>
  );
}
