"use client";

/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { BookOpen, Download } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Newsletter } from "@/components/pages/home/sections/Newsletter";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import {
    BrandSection,
    SectionHeading,
    lightCardClass,
    revealUp,
} from "@/components/pages/shared/section-primitives";
import { formatPostDate, useMagazines } from "@/lib/content";
import { magazineBanner } from "./data";

export function MagazinePage() {
    const { data: issues, isPending, isError } = useMagazines();

    return (
        <ReactLenis root>
            <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
                <Header />

                <main>
                    {/* Hero Section */}
                    <BrandSection circles="bottom" className="pt-36 sm:pt-36">
                        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                            <motion.div {...revealUp}>
                                <SectionHeading as="h1" badge="Preacher's Kid Magazine" title="SOM Magazine" tone="dark" />
                                <p className="mt-8 max-w-md text-base leading-relaxed text-white/80">
                                    Stay updated with Preachers Kids Magazines as we explore deep spiritual truths, life-changing testimonies, and powerful articles that shape our ministry journey.
                                </p>
                            </motion.div>

                            <motion.div
                                className="relative aspect-video overflow-hidden rounded-3xl bg-[#1E1B4B] shadow-2xl shadow-black/30"
                                initial={{ opacity: 0, scale: 0.94 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <img
                                    src={magazineBanner}
                                    alt="SOM Magazine"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </BrandSection>

                    {/* Magazine Issues Section */}
                    <section className="bg-gray-50 py-24 sm:py-28">
                        <div className="mx-auto max-w-7xl px-6 md:px-12">
                            <motion.div {...revealUp}>
                                <SectionHeading badge="Issues" title="Past Issues" />
                            </motion.div>

                            {isPending || isError || issues.length === 0 ? (
                                <p className="mt-12 text-sm text-slate-500">
                                    {isPending
                                        ? "Loading issues…"
                                        : isError
                                            ? "Issues couldn’t be loaded. Please try again later."
                                            : "No issues published yet."}
                                </p>
                            ) : (
                                <div className="mt-12 grid gap-6 md:grid-cols-3">
                                    {issues.map((issue, index) => (
                                        <motion.article
                                            key={issue.id}
                                            className={cn("flex flex-col overflow-hidden", lightCardClass)}
                                            initial={{ opacity: 0, y: 28 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <Link
                                                href={`/magazine/${issue.slug}`}
                                                className="group relative block aspect-3/4 overflow-hidden bg-slate-100"
                                                aria-label={`Open ${issue.title}`}
                                            >
                                                <img
                                                    src={issue.coverUrl}
                                                    alt={`${issue.title} cover`}
                                                    loading="lazy"
                                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </Link>

                                            <div className="flex flex-1 flex-col p-6">
                                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                                                    {formatPostDate(issue.publishedAt)}
                                                </p>
                                                <h2 className="mt-3 text-lg font-semibold text-slate-900">
                                                    <Link href={`/magazine/${issue.slug}`} className="hover:text-indigo-600">
                                                        {issue.title}
                                                    </Link>
                                                </h2>
                                                {issue.subtitle && <p className="mt-1 text-sm font-medium text-slate-500">{issue.subtitle}</p>}

                                                <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-slate-600">
                                                    {issue.highlights.map((highlight) => (
                                                        <li key={highlight}>{highlight}</li>
                                                    ))}
                                                </ul>

                                                {(issue.author || issue.readingTime) && (
                                                    <div className="mt-6 flex gap-6 border-t border-slate-100 pt-4 text-xs text-slate-500">
                                                        {issue.author && (
                                                            <span><span className="font-semibold text-slate-700">Text</span> {issue.author}</span>
                                                        )}
                                                        {issue.readingTime && (
                                                            <span><span className="font-semibold text-slate-700">Duration</span> {issue.readingTime}</span>
                                                        )}
                                                    </div>
                                                )}

                                                <div className="mt-6 flex flex-wrap gap-3">
                                                        <Link
                                                            href={`/magazine/${issue.slug}`}
                                                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-[#8A7DFF] px-4 py-2 text-sm font-medium text-white transition-shadow hover:shadow-lg hover:shadow-indigo-500/30"
                                                        >
                                                            <BookOpen className="h-4 w-4" />
                                                            Read issue
                                                        </Link>
                                                        {issue.fileUrl && (
                                                            <a
                                                                href={issue.fileUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                                                            >
                                                                <Download className="h-4 w-4" />
                                                                Download PDF
                                                            </a>
                                                        )}
                                                </div>
                                            </div>
                                        </motion.article>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                </main>

                <Newsletter />
                <Footer />
            </div>
        </ReactLenis>
    );
};
