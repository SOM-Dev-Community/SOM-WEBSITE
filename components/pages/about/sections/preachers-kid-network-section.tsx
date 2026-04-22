"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PreachersKidNetworkSection() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-6 md:px-12 py-16 md:py-32 bg-transparent max-w-7xl mx-auto overflow-hidden">

            {/* Left Side: Animated Video iframe */}
            <div className="w-full lg:w-1/2 max-w-xl lg:max-w-none aspect-video shrink-0">
                <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-600/30 aspect-video flex items-center justify-center bg-black w-full h-full"
                    initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1, delay: 0.3, type: 'spring', bounce: 0.4 }}
                >
                    <iframe
                        src="https://player.vimeo.com/video/1100718405?h=b886da83be"
                        width="100%"
                        height="100%"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Experience SOM Vimeo Video"
                        className="w-full h-full rounded-3xl"
                    ></iframe>
                </motion.div>
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full lg:w-1/2 max-w-xl lg:max-w-none text-sm text-slate-600">

                {/* Pill Badge with adjusted background color for light theme */}
                <div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-indigo-700 backdrop-blur-sm">
                    Join the Preachers Kid Network
                </div>

                <h2 className="text-2xl md:text-3xl uppercase font-bold text-slate-800 tracking-wide">
                    The Preachers Kid Network
                </h2>

                <div className="w-24 h-1 mt-4 rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>

                <div className="mt-8 space-y-5 leading-relaxed">
                    <p>
                        (PKN) is a network birthed by the Holy Ghost to reach out to children of ministers from all around the world. This network connects all ministers&apos; children to one another, with one goal and one vision; reaching the world with the investment of our personalities.
                    </p>

                    <p>
                        Not only do we get to reach the world, but we also receive God&apos;s word for us specifically as preachers&apos; kids. We get to understand what God&apos;s plans are for us, what He wants us to do and doing it as one body!
                    </p>
                </div>
                <Button
                    className="group flex w-fit items-center gap-3 mt-10 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-6 px-8 rounded-full text-white font-medium"
                    asChild
                >
                    <Link href="/pkn">
                        <span>Learn more</span>
                        <svg
                            width="13"
                            height="12"
                            viewBox="0 0 13 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="currentColor"
                            />
                        </svg>
                    </Link>
                </Button>
            </div>

        </section>
    );
}