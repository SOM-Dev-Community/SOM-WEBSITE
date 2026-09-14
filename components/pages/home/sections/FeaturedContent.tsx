"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollAnimation } from '@/components/scroll-animation';
import {
  ArrowIcon,
  gradientButtonClass,
  lightCardClass,
} from '@/components/pages/shared/section-primitives';

export const FeaturedContent = () => {
  return (
    <motion.section
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <ScrollAnimation
            direction='left'
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-indigo-700">
              Latest Feature
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Discover Our Latest Insights <br />
              <span className="text-indigo-600">and Stories</span>
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Stay updated with Preachers Kids Magazines as we explore deep spiritual truths, life-changing testimonies, and powerful articles that shape our ministry journey.
            </p>

            {/* Featured Article Card */}
            <div className={cn("p-6 mb-8 max-w-xl", lightCardClass)}>
              <div className="flex flex-col space-y-4">
                <span className="w-max rounded-full bg-gradient-to-r from-indigo-600 to-[#8A7DFF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Featured Post
                </span>

                <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                  Be About Soulwinning
                </h3>

                <div className="text-sm text-slate-500 flex items-center space-x-2">
                  <span>Evangelism</span>
                  <span aria-hidden="true">•</span>
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            <Button asChild className={`${gradientButtonClass} py-6 px-8`}>
              <Link href="/impact">
                <span>Read More</span>
                <ArrowIcon />
              </Link>
            </Button>
          </ScrollAnimation>

          {/* Video Section */}
          <ScrollAnimation
            direction='right'
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-indigo-600/30 aspect-video flex items-center justify-center bg-black">
              <iframe
                src="https://player.vimeo.com/video/1100719005?h=1a533c78b1"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="SOM Vimeo Video"
                className="w-full h-full rounded-3xl"
              ></iframe>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </motion.section>
  );
};
