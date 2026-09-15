"use client";

import { motion } from "framer-motion";
import { CalendarPlus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowIcon,
  SectionHeading,
  gradientButtonClass,
  lightCardClass,
  revealUp,
} from "@/components/pages/shared/section-primitives";
import {
  formatEventTime,
  googleCalendarUrl,
  icsHref,
  useEvents,
  type SiteEvent,
} from "@/lib/content";

export function UpcomingEventsSection() {
  const { data: events, isPending, isError } = useEvents({ status: ["live", "upcoming"], limit: 6 });

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div {...revealUp} className="flex flex-col items-center text-center">
          <SectionHeading badge="Join us" title="Upcoming Events" align="center" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600">
            Join millions of believers around the world for spirit-filled, life-transforming moments.
          </p>
        </motion.div>

        {isPending || isError || events.length === 0 ? (
          <p className="mt-14 text-center text-sm text-slate-500">
            {isPending
              ? "Loading events…"
              : isError
                ? "Events couldn’t be loaded. Please try again later."
                : "No upcoming events right now. Check back soon."}
          </p>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {events.map((event, index) => {
              const isLive = event.status === "live";

              return (
                <motion.article
                  key={event.id}
                  className={cn("flex flex-col p-6 lg:p-8", lightCardClass)}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
                        isLive ? "border-red-100 bg-red-50 text-red-600" : "border-indigo-100 bg-indigo-50 text-indigo-700"
                      )}
                    >
                      {isLive ? "Live Now" : "Upcoming"}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {formatEventTime(event)}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-900">{event.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{event.description}</p>

                  <EventActions event={event} />
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function EventActions({ event }: { event: SiteEvent }) {
  if (event.status === "live") {
    return (
      <Button asChild className={`${gradientButtonClass} mt-8 py-5 px-6 text-sm`}>
        <a href="#live">
          <span>Watch Live</span>
          <ArrowIcon />
        </a>
      </Button>
    );
  }

  const googleUrl = googleCalendarUrl(event);
  const ics = icsHref(event);
  if (!googleUrl || !ics) return null;

  return (
    <div className="mt-8 flex flex-col gap-3">
      <Button asChild className={`${gradientButtonClass} py-5 px-6 text-sm`}>
        <a href={googleUrl} target="_blank" rel="noopener noreferrer">
          <CalendarPlus className="h-4 w-4" />
          <span>Add to Calendar</span>
        </a>
      </Button>
      <a
        href={ics}
        download={`${event.slug}.ics`}
        className="w-fit text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800"
      >
        Add to device calendar (.ics)
      </a>
    </div>
  );
}
