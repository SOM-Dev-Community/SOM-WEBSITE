"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { upcomingEvents } from "../data";
import { ArrowIcon, SectionHeading, gradientButtonClass, revealUp } from "./shared";

export function UpcomingEventsSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div {...revealUp}>
          <SectionHeading badge="Join us" title="Upcoming Events" />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <motion.article
              key={`${event.title}-${index}`}
              className="flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-[#8A7DFF] px-6 py-4 text-white">
                <p className="text-lg font-bold uppercase tracking-wide">{event.date}</p>
                <p className="text-xs text-white/75">{event.year}</p>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-slate-900">{event.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{event.description}</p>

                <Button className={`${gradientButtonClass} mt-6 py-5 px-6 text-sm`} asChild>
                  <Link href={event.href}>
                    <span>Register Now</span>
                    <ArrowIcon />
                  </Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
