"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { eventDateParts, useEvents } from "@/lib/content";
import { ArrowIcon, SectionHeading, gradientButtonClass, revealUp } from "./shared";

export function UpcomingEventsSection() {
  const { data: events, isPending, isError } = useEvents({ network: "pkn", status: ["live", "upcoming"], limit: 3 });

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div {...revealUp}>
          <SectionHeading badge="Join us" title="Upcoming Events" />
        </motion.div>

        {isPending || isError || events.length === 0 ? (
          <p className="mt-12 text-sm text-slate-500">
            {isPending
              ? "Loading events…"
              : isError
                ? "Events couldn’t be loaded. Please try again later."
                : "No upcoming PKN events right now. Check back soon."}
          </p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {events.map((event, index) => {
              const date = eventDateParts(event);
              const label = (
                <>
                  <span>Register Now</span>
                  <ArrowIcon />
                </>
              );

              return (
                <motion.article
                  key={event.id}
                  className="flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)]"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="bg-gradient-to-r from-indigo-600 to-[#8A7DFF] px-6 py-4 text-white">
                    <p className="text-lg font-bold uppercase tracking-wide">
                      {event.status === "live" ? "Live now" : date?.dayMonth}
                    </p>
                    <p className="text-xs text-white/75">{date?.year}</p>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-slate-900">{event.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{event.description}</p>

                    <Button className={`${gradientButtonClass} mt-6 py-5 px-6 text-sm`} asChild>
                      {event.externalUrl ? (
                        <a href={event.externalUrl} target="_blank" rel="noopener noreferrer">
                          {label}
                        </a>
                      ) : (
                        <Link href="/events">{label}</Link>
                      )}
                    </Button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
