"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Newsletter } from '@/components/pages/home/sections/Newsletter';
import { cn } from '@/lib/utils';
import { imageList } from '@/public/images_list';
import {
    BrandSection,
    SectionHeading,
    lightCardClass,
    revealUp,
} from '@/components/pages/shared/section-primitives';

const paragraphs = [
    "As a believer, you are called to make a lasting impact in your world. Impact is not just about big actions, but about consistent, positive influence in the lives of those around you. Every word you speak, every act of kindness, and every step of faith can transform lives and bring glory to God.",
    "Jesus made an impact everywhere He went—healing the sick, teaching the multitudes, and showing compassion to the lost. You are empowered by the Holy Spirit to do the same and even greater works. Your life is a testimony of God’s love and power in action.",
    "Don’t underestimate the power of your influence. Whether you’re leading a group, helping a neighbor, or simply living out your faith with integrity, you are making a difference. Let your light shine so brightly that others are drawn to Christ through you.",
    "Remember, true impact is measured not just by what you achieve, but by the lives you touch and the legacy you leave. Be intentional about sowing seeds of hope, faith, and love everywhere you go.",
    "Today, ask yourself: How can I be a greater blessing to my world? Step out in faith, take action, and watch God use you to bring transformation and lasting impact!",
];

export function ImpactPage() {
    return (
        <ReactLenis root>
            <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
                <Header />

                <main>
                    {/* Hero Section */}
                    <BrandSection circles="bottom" className="pt-36 sm:pt-36 pb-36 sm:pb-40">
                        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                            <motion.div {...revealUp}>
                                <SectionHeading as="h1" badge="Impact" title="Be About Impact" tone="dark" />
                                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                                    Impact, influence, transformation
                                </p>
                            </motion.div>

                            <motion.div
                                className="relative aspect-4/3 overflow-hidden rounded-3xl bg-[#1E1B4B] shadow-2xl shadow-black/30"
                                initial={{ opacity: 0, scale: 0.94 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Image
                                    src={imageList.pks_2.src}
                                    alt="Impact in Action"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </BrandSection>

                    {/* Content Section */}
                    <section className="relative z-10 -mt-20 px-6 pb-24 sm:pb-28">
                        <motion.article
                            {...revealUp}
                            className={cn("mx-auto max-w-3xl p-8 sm:p-12", lightCardClass, "rounded-4xl")}
                        >
                            <blockquote className="border-l-4 border-indigo-500 pl-5 text-lg font-semibold italic leading-relaxed text-indigo-700">
                                &ldquo;And whatsoever ye do, do it heartily, as to the Lord, and not unto men&rdquo;
                                <cite className="mt-2 block text-sm font-medium not-italic text-slate-500">Colossians 3:23</cite>
                            </blockquote>

                            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                                {paragraphs.map((paragraph) => (
                                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.article>
                    </section>
                </main>

                <Newsletter />
                <Footer />
            </div>
        </ReactLenis>
    );
};
