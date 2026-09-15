"use client";

/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useProducts } from '@/lib/content';
import { ProductAction } from '@/components/pages/shared/product-action';
import { ProductIcon } from '@/components/pages/shared/product-icon';
import {
  SectionHeading,
  lightCardClass,
  revealUp,
} from '@/components/pages/shared/section-primitives';

export const ProductGrid = () => {
  const { data: products, isError } = useProducts('home');

  // Nothing to promote yet: leave the section out rather than show an empty heading.
  if (products?.length === 0) return null;

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

        {isError ? (
          <p className="mt-14 text-center text-sm text-slate-500">Products couldn’t be loaded. Please try again later.</p>
        ) : (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products?.map((product, index) => (
              <motion.article
                key={product.id}
                className={cn("flex flex-col overflow-hidden", lightCardClass)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-indigo-50 text-indigo-400">
                      <ProductIcon name={product.icon} className="h-12 w-12" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {product.tagline ?? product.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>
                  <ProductAction product={product} className="mt-6" />
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
