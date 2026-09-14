"use client";

/* eslint-disable @next/next/no-img-element */

import React from "react";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
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
import { magazineBanner, magazineIssues } from "./data";

export function MagazinePage() {
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

                            <div className="mt-12 grid gap-6 md:grid-cols-3">
                                {magazineIssues.map((issue, index) => (
                                    <motion.article
                                        key={issue.title}
                                        className={cn("flex flex-col overflow-hidden", lightCardClass)}
                                        initial={{ opacity: 0, y: 28 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="relative aspect-3/4 overflow-hidden bg-slate-100">
                                            <img
                                                src={issue.cover}
                                                alt={`${issue.title} cover`}
                                                loading="lazy"
                                                className="absolute inset-0 h-full w-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col p-6">
                                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">{issue.date}</p>
                                            <h2 className="mt-3 text-lg font-semibold text-slate-900">{issue.title}</h2>

                                            <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-slate-600">
                                                {issue.highlights.map((highlight) => (
                                                    <li key={highlight}>{highlight}</li>
                                                ))}
                                            </ul>

                                            <div className="mt-6 flex gap-6 border-t border-slate-100 pt-4 text-xs text-slate-500">
                                                <span><span className="font-semibold text-slate-700">Text</span> {issue.author}</span>
                                                <span><span className="font-semibold text-slate-700">Duration</span> {issue.duration}</span>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <Newsletter />
                <Footer />
            </div>
        </ReactLenis>
    );
};
