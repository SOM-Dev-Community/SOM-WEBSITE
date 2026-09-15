"use client";

import { motion } from "framer-motion";
import { useProducts } from "@/lib/content";
import { ProductAction } from "@/components/pages/shared/product-action";
import { ProductIcon } from "@/components/pages/shared/product-icon";
import { DarkSection, SectionHeading, revealUp } from "@/components/pages/shared/section-primitives";

export function ProductsSection() {
  const { data: products, isPending, isError } = useProducts("explore");

  return (
    <DarkSection>
      <motion.div {...revealUp} className="flex flex-col items-center text-center">
        <SectionHeading as="h1" badge="Explore" title="Explore Our Products" tone="dark" align="center" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Discover a suite of tools and media built to inspire, empower, and deepen your walk with God.
        </p>
      </motion.div>

      {isPending || isError || products.length === 0 ? (
        <p className="mt-16 text-center text-sm text-slate-400">
          {isPending ? "Loading products…" : isError ? "Products couldn’t be loaded. Please try again later." : "Products are coming soon."}
        </p>
      ) : (
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              className="flex flex-col rounded-3xl bg-white p-6 text-slate-600 shadow-2xl shadow-indigo-600/20 lg:p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-600">
                <ProductIcon name={product.icon} className="h-7 w-7" />
              </span>

              <h2 className="mt-6 text-lg font-semibold text-slate-900">{product.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed">{product.description}</p>

              <ProductAction product={product} className="mt-8" />
            </motion.article>
          ))}
        </div>
      )}
    </DarkSection>
  );
}
