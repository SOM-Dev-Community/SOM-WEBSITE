"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { ArrowLeft, BookOpen, Download } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/pages/home/sections/Newsletter";
import { BrandSection, revealUp } from "@/components/pages/shared/section-primitives";
import { ApiError } from "@/lib/api";
import { cn } from "@/lib/utils";
import { formatPostDate, useMagazine, type MagazineIssue } from "@/lib/content";

/** A single page sits in one column; a landscape image is a two-page spread and spans both. */
function MagazinePageImage({ src, index, title }: { src: string; index: number; title: string }) {
    const [spread, setSpread] = useState(false);

    return (
        <motion.figure
            className={cn("overflow-hidden bg-slate-100 shadow-lg shadow-slate-900/10", spread && "sm:col-span-2")}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <img
                src={src}
                alt={`${title}, page ${index + 1}`}
                loading={index < 2 ? "eager" : "lazy"}
                className="block h-auto w-full"
                onLoad={(event) => {
                    const image = event.currentTarget;
                    setSpread(image.naturalWidth > image.naturalHeight);
                }}
            />
        </motion.figure>
    );
}

function IssueLinks({ issue, tone }: { issue: MagazineIssue; tone: "dark" | "light" }) {
    if (!issue.readUrl && !issue.fileUrl) return null;
    return (
        <div className="mt-10 flex flex-wrap gap-3">
            {issue.readUrl && (
                <a
                    href={issue.readUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5",
                        tone === "dark" ? "bg-white text-[#4B2AAD] hover:bg-white/90" : "bg-[#4B2AAD] text-white hover:bg-[#3d2290]"
                    )}
                >
                    <BookOpen className="h-4 w-4" />
                    Read online
                </a>
            )}
            {issue.fileUrl && (
                <a
                    href={issue.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors",
                        tone === "dark" ? "border-white/40 text-white hover:bg-white/10" : "border-slate-300 text-slate-700 hover:bg-slate-50"
                    )}
                >
                    <Download className="h-4 w-4" />
                    Download PDF
                </a>
            )}
        </div>
    );
}

export function MagazineIssuePage() {
    const { slug } = useParams<{ slug: string }>();
    const { data: issue, error, isPending } = useMagazine(slug);

    return (
        <ReactLenis root>
            <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
                <Header />

                <main>
                    {isPending ? (
                        <BrandSection circles="none" className="pt-36 sm:pt-36">
                            <p className="text-center text-white/70">Loading issue…</p>
                        </BrandSection>
                    ) : error || !issue ? (
                        <BrandSection circles="none" className="pt-36 sm:pt-36">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-3xl font-bold">
                                    {error instanceof ApiError && error.status === 404 ? "Issue not found" : "Issue unavailable"}
                                </h1>
                                <p className="mt-4 text-white/75">
                                    {error instanceof ApiError && error.status === 404
                                        ? "This issue may have been moved or unpublished."
                                        : "The issue couldn’t be loaded. Please try again later."}
                                </p>
                                <Link href="/magazine" className="mt-8 font-medium text-white/80 hover:text-white">
                                    ← Back to all issues
                                </Link>
                            </div>
                        </BrandSection>
                    ) : (
                        <>
                            <BrandSection circles="none" className="pt-32 sm:pt-32">
                                <Link
                                    href="/magazine"
                                    aria-label="Back to all issues"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                                >
                                    <ArrowLeft className="h-6 w-6" />
                                </Link>

                                <div className="mt-6 grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
                                    <motion.div {...revealUp}>
                                        <h1 className="text-4xl font-bold uppercase tracking-tight md:text-6xl">{issue.title}</h1>
                                        {issue.subtitle && (
                                            <p className="mt-3 text-2xl font-semibold text-white/90 md:text-3xl">{issue.subtitle}</p>
                                        )}
                                        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                                            {issue.author && (
                                                <div className="flex gap-2">
                                                    <dt className="font-semibold">Text</dt>
                                                    <dd className="text-white/75">{issue.author}</dd>
                                                </div>
                                            )}
                                            <div className="flex gap-2">
                                                <dt className="font-semibold">Date</dt>
                                                <dd className="text-white/75">{formatPostDate(issue.publishedAt)}</dd>
                                            </div>
                                            {issue.readingTime && (
                                                <div className="flex gap-2">
                                                    <dt className="font-semibold">Read</dt>
                                                    <dd className="text-white/75">{issue.readingTime}</dd>
                                                </div>
                                            )}
                                        </dl>
                                        <IssueLinks issue={issue} tone="dark" />
                                    </motion.div>

                                    <motion.img
                                        src={issue.coverUrl}
                                        alt={`${issue.title} cover`}
                                        className="w-full max-w-xs justify-self-center shadow-2xl shadow-black/40 lg:max-w-sm"
                                        initial={{ opacity: 0, scale: 0.94 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                </div>
                            </BrandSection>

                            <section className="py-16 sm:py-24">
                                <div className="mx-auto max-w-6xl px-6 md:px-12">
                                    {issue.pages.length > 0 ? (
                                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                            {issue.pages.map((page, index) => (
                                                <MagazinePageImage key={`${index}-${page}`} src={page} index={index} title={issue.title} />
                                            ))}
                                        </div>
                                    ) : (
                                        // No page images uploaded yet: show what the issue covers instead of an empty page.
                                        <div className="mx-auto max-w-3xl">
                                            <h2 className="text-2xl font-bold text-slate-900">In this issue</h2>
                                            <ul className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                                                {issue.highlights.map((highlight) => (
                                                    <li key={highlight} className="border-l-4 border-indigo-500 pl-4">
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                            <IssueLinks issue={issue} tone="light" />
                                        </div>
                                    )}
                                </div>
                            </section>
                        </>
                    )}
                </main>

                <Newsletter />
                <Footer />
            </div>
        </ReactLenis>
    );
}
