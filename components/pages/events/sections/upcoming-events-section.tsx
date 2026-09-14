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
import { upcomingEvents, type LiveEvent } from "../data";

export function UpcomingEventsSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div {...revealUp} className="flex flex-col items-center text-center">
          <SectionHeading badge="Join us" title="Upcoming Events" align="center" />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600">
            Join millions of believers around the world for spirit-filled, life-transforming moments.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event, index) => {
            const isLive = event.status === "Live Now";

            return (
              <motion.article
                key={event.title}
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
                    {event.status}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5" />
                    {event.time}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">{event.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{event.description}</p>

                <EventActions event={event} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EventActions({ event }: { event: LiveEvent }) {
  if (event.status === "Live Now") {
    return (
      <Button asChild className={`${gradientButtonClass} mt-8 py-5 px-6 text-sm`}>
        <a href="#live">
          <span>Watch Live</span>
          <ArrowIcon />
        </a>
      </Button>
    );
  }

  if (!event.calendarDates) return null;

  const [start, end] = event.calendarDates.split("/");
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&dates=${event.calendarDates}`;
  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.title}\nDESCRIPTION:${event.description}\nDTSTART:${start}\nDTEND:${end}\nEND:VEVENT\nEND:VCALENDAR`;

  return (
    <div className="mt-8 flex flex-col gap-3">
      <Button asChild className={`${gradientButtonClass} py-5 px-6 text-sm`}>
        <a href={googleUrl} target="_blank" rel="noopener noreferrer">
          <CalendarPlus className="h-4 w-4" />
          <span>Add to Calendar</span>
        </a>
      </Button>
      <a
        href={`data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`}
        download={`${event.title.replace(/\s+/g, "_")}.ics`}
        className="w-fit text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800"
      >
        Add to device calendar (.ics)
      </a>
    </div>
  );
}
