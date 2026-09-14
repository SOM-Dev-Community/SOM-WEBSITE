"use client";

/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Newsletter } from '@/components/pages/home/sections/Newsletter';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import HeroMarqueeBackground from '@/components/ui/hero-marquee-background';
import { ReactLenis } from 'lenis/react'
import { SectionHeading, lightCardClass, revealUp } from '@/components/pages/shared/section-primitives';
import { WhoAreWeSection } from './sections/who-are-we-section';
import { MissionPurposeVisionSection } from './sections/mission-purpose-vision-section';
import { ImageCarouselSection } from './sections/image-carousel-section';
import { PreachersKidNetworkSection } from './sections/preachers-kid-network-section';
import { ImageGallerySection } from './sections/image-gallery-section';

const teamMembers = [
    {
        name: 'Pastor Chris Oyakhilome',
        role: 'President of Loveworld Nation',
        image: 'https://i.postimg.cc/gkDzMS4f/President.jpg',
    },
    {
        name: 'Pastor Sandra Oyakhilome Meduteni',
        role: 'SOM Co-Ordinator',
        image: 'https://i.postimg.cc/Cxg88Q5X/Director.jpg',
    },
];

export function AboutPage() {
    return (
        <ReactLenis root>

            <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
                <Header />


                <main className='bg-gray-50'>
                    {/* Hero Section */}
                    <HeroMarqueeBackground
                        headline='God&lsquo;s Trained Soldiers'
                        subheadline='Raising ministers children for the expansion of the Gospel through encounters, training, and a global community of bold young ministers.'
                    />
                    <WhoAreWeSection />
                    <MissionPurposeVisionSection />
                    <PreachersKidNetworkSection />
                    <div className="relative h-full w-full bg-slate-950 text-slate-50 py-24 sm:py-28 lg:py-32 grid gap-4 sm:gap-6 md:gap-8">
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#260bca2e_1px,transparent_1px),linear-gradient(to_bottom,#260bca2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_55%_75%_at_50%_100%,#000_75%,transparent_80%)]"></div>
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(130%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(28,15,179,1)_100%)]"></div>
                        <ImageCarouselSection />
                        <ImageGallerySection />
                    </div>
                </main>

                {/* Leadership Team */}
                <section className="bg-white py-24 sm:py-28">
                    <div className="mx-auto max-w-5xl px-6 md:px-12">
                        <motion.div {...revealUp}>
                            <SectionHeading badge="Leadership" title="Our Leadership Team" align="center" />
                        </motion.div>

                        <div className="mt-14 grid gap-8 sm:grid-cols-2">
                            {teamMembers.map((member, index) => (
                                <motion.figure
                                    key={member.name}
                                    className={cn("overflow-hidden", lightCardClass)}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full object-cover object-top"
                                        />
                                    </div>
                                    <figcaption className="p-6 text-center">
                                        <p className="text-lg font-semibold text-slate-900">{member.name}</p>
                                        <p className="mt-1 text-sm font-medium text-indigo-600">{member.role}</p>
                                    </figcaption>
                                </motion.figure>
                            ))}
                        </div>
                    </div>
                </section>

                {/* App Section */}
                <section data-nav-theme="dark" className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-600 via-[#4B2AAD] to-indigo-950 py-24 text-white sm:py-28">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-12 lg:grid-cols-2">
                        <motion.div {...revealUp}>
                            <SectionHeading badge="SOM Community" title="Get the SOM Mobile App" tone="dark" />
                            <p className="mt-8 max-w-md text-base leading-relaxed text-white/85">
                                Stay connected with our spiritual content and testimonials anytime, anywhere.
                            </p>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Button asChild className="rounded-full bg-slate-950 px-6 py-6 text-white hover:bg-slate-800">
                                    <a
                                        href='https://apps.apple.com/gb/app/som-community/id6474561995'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        App Store
                                    </a>
                                </Button>
                                <Button asChild className="rounded-full bg-white px-6 py-6 text-[#4B2AAD] hover:bg-white/90">
                                    <a
                                        href="https://web.lwappstore.com/share/lW-sA-D70-KC946"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Loveworld App Store
                                    </a>
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <img
                                src="https://i.postimg.cc/m2HdhYRX/Phone-View-removebg-preview.png"
                                alt="The SOM Community app on a phone"
                                className="h-96 w-auto object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </section>

                <Newsletter />
                <Footer />
            </div>
        </ReactLenis>
    );
};
