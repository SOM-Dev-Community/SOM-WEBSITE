"use client";

/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ArrowIcon,
  SectionHeading,
  gradientButtonClass,
  lightCardClass,
  revealUp,
} from '@/components/pages/shared/section-primitives';

type Product = {
  title: string;
  description: string;
  image: string;
  action: string;
  /** Internal path or external URL. Products without one show "Coming soon". */
  href?: string;
};

const products: Product[] = [
  {
    title: 'Discover the Best Resources for Your Spiritual Journey',
    description: 'Our array of spiritual products, including insights and revelations...',
    image: 'https://i.postimg.cc/DZLF1B8p/Worship.jpg',
    action: 'Learn More',
    href: '/explore',
  },
  {
    title: 'SOMLA: Your Gateway to Spiritual Growth and Learning',
    description: 'Word ministries focused on the teachings of Jesus...',
    image: 'https://i.postimg.cc/nVqcmcmV/SOMLA.jpg',
    action: 'Sign Up',
    href: 'https://somla.loveworldsonsofministry.org/',
  },
  {
    title: 'SOM TV: Inspiring Content for Your Spiritual Journey',
    description: 'Watch inspiring content that enriches your spiritual experience...',
    image: 'https://i.postimg.cc/vmmcLFsq/Evang.jpg',
    action: 'Watch',
  },
  {
    title: '4:12 Podcast: Your Gateway to learning and entertainment',
    description: 'Start inspiring prayers in various spoken and gathered churches...',
    image: 'https://i.postimg.cc/NjjgZ6zL/set.jpg',
    action: 'Listen',
  },
  {
    title: "Preacher's Kid Magazine",
    description: 'An innovative and progressive brand, with excellence and power in our approach and attitude to life',
    image: 'https://i.postimg.cc/NjsMBq5s/PKF.png',
    action: 'Learn More',
    href: '/magazine',
  },
];

export const ProductGrid = () => {
  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div {...revealUp}>
          <SectionHeading
            badge="Products"
            title="Explore Our Exciting Range of SOM Products Tailored for You"
            align="center"
            className="mx-auto max-w-3xl"
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              className={cn("flex flex-col overflow-hidden", lightCardClass)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {product.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {product.description}
                </p>
                <ProductAction product={product} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

function ProductAction({ product }: { product: Product }) {
  if (!product.href) {
    return (
      <span className="mt-6 inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
        Coming soon
      </span>
    );
  }

  const label = (
    <>
      <span>{product.action}</span>
      <ArrowIcon />
    </>
  );

  return (
    <Button asChild className={`${gradientButtonClass} mt-6 py-5 px-6 text-sm`}>
      {product.href.startsWith('http') ? (
        <a href={product.href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <Link href={product.href}>{label}</Link>
      )}
    </Button>
  );
}
