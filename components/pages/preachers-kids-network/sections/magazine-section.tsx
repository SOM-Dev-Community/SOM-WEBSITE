"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLatestMagazine } from "@/lib/content";
import { ArrowIcon, SectionHeading, revealUp } from "./shared";

const buttonClass =
  "group flex w-fit items-center gap-3 mt-10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 transition-all duration-300 bg-white hover:bg-white/90 py-6 px-8 rounded-full text-[#4B2AAD] font-medium";

export function MagazineSection() {
  const { data: issue } = useLatestMagazine();


  return (
    <section className="relative isolate overflow-hidden bg-[#4B2AAD] py-24 text-white sm:py-28">
      {/* Decorative circles */}
      <div aria-hidden="true" className="absolute -left-28 -top-28 -z-10 hidden h-72 w-72 rounded-full bg-[#1E1B4B] ring-[20px] ring-white sm:block"></div>
      <div aria-hidden="true" className="absolute -bottom-44 -right-24 -z-10 hidden h-96 w-96 rounded-full bg-[#1E1B4B] ring-[20px] ring-white sm:block"></div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
        <motion.div {...revealUp}>
          <SectionHeading badge="SOM Magazine" title="Get Our Latest Magazine" tone="dark" />
          <p className="mt-8 max-w-md text-sm leading-relaxed text-white/80">
            {issue
              ? `${issue.title} is out now — inspiring stories and resources from Preacher's Kid Magazine.`
              : "Download the latest edition of Preacher's Kid Magazine for inspiring stories and resources."}
          </p>
          <Button className={buttonClass} asChild>
            <Link href={issue ? `/magazine/${issue.slug}` : "/magazine"}>
              <span>{issue ? "Read the latest issue" : "Read More"}</span>
              <ArrowIcon />
            </Link>
          </Button>
        </motion.div>

        {issue && (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.4 }}
          >
            <div className="relative aspect-3/4 w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
              {/* Plain img: cover images can be hosted anywhere the CMS allows */}
              <img
                src={issue.coverUrl}
                alt={`${issue.title} cover`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
