"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { light_glassmorphism } from "@/components/layout/header/constants";
import { SlidingChipTabs } from "@/components/ui/sliding-chip-tabs";
import { Spotlight, SpotLightItem } from "@/components/ui/spotlight";
import { ArrowIcon, gradientButtonClass } from "@/components/pages/shared/section-primitives";
import { formatEventTime, useEvents, type EventsQuery } from "@/lib/content";

const TABS: { label: string; query: EventsQuery }[] = [
  { label: "View All", query: {} },
  { label: "Upcoming", query: { status: ["live", "upcoming"] } },
  { label: "On-Demand", query: { status: ["on-demand", "past"] } },
  { label: "Workshops", query: { category: "WORKSHOP" } },
  { label: "Premium", query: { category: "PREMIUM" } },
];

const UPCOMING = TABS[1];

export const EventsSection = () => {
  const [pickedTab, setPickedTab] = React.useState<string | null>(null);

  // Open on "Upcoming", but fall back to everything when nothing is scheduled rather than show an empty list.
  const upcoming = useEvents(UPCOMING.query);
  const activeTab = pickedTab ?? (upcoming.data?.length === 0 ? "View All" : UPCOMING.label);
  const tab = TABS.find((t) => t.label === activeTab) ?? UPCOMING;
  const { data: events, isPending, isError } = useEvents(tab.query);

  return (
    <motion.section
      id="events"
      className="py-24 bg-black text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black/60 to-black/90 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#5400782e_1px,transparent_1px),linear-gradient(to_bottom,#5400782e_1px,transparent_1px)] bg-[size:23px_17px] "></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(6,9,104,1)_100%)]"></div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 lg:w-9/12"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, type: 'spring', stiffness: 60 }}
      >
        <motion.div
          className="text-center mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-white/75 backdrop-blur-sm">
            Events
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-slate-300">
            Mark your calendars! Don’t miss these powerful gatherings designed
            to equip and inspire.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <SlidingChipTabs
            items={TABS.map(({ label }) => ({
              value: label,
              label,
            }))}
            value={activeTab}
            onValueChange={setPickedTab}
            className="flex-wrap justify-center gap-2 sm:gap-4"
            tabClassName="rounded-full px-5 py-2 font-semibold duration-300"
            activeTabClassName="text-white"
            inactiveTabClassName="bg-transparent text-white/80 hover:text-white"
            cursorClassName="h-full rounded-full bg-white/10"
            chipLayoutId="events-active-chip"
            chipClassName="rounded-full bg-gradient-to-r from-indigo-600 to-[#8A7DFF] shadow-lg shadow-indigo-500/30"
          />
        </motion.div>

        {/* Event Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* The Spotlight component acts as the container for the proximity effect */}
          <Spotlight className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
            {isPending ? (
              <div className="text-center text-slate-400">Loading events…</div>
            ) : isError ? (
              <div className="text-center text-slate-400">Events couldn’t be loaded. Please try again later.</div>
            ) : events.length === 0 ? (
              <div className="text-center text-slate-400">No events found for this category.</div>
            ) : (
              events.map((event, idx) => (
                // SpotLightItem wraps each individual card
                <SpotLightItem key={event.id} className="rounded-3xl" spotColor="rgba(6,9,104,0.2)">
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    className={cn(
                      light_glassmorphism,
                      "flex flex-col md:flex-row bg-gray-900/40  rounded-3xl overflow-hidden shadow-lg"
                    )}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: 0.1 * idx }}
                  >
                    <div
                      className="w-full md:w-48 h-48 md:h-auto bg-cover bg-center bg-slate-900"
                      style={event.imageUrl ? { backgroundImage: `url(${event.imageUrl})` } : undefined}
                    />
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 p-6 flex-1">
                      <div>
                        {(event.status === "live" || event.status === "upcoming") && (
                          <p
                            className={cn(
                              "mb-2 text-xs font-semibold uppercase tracking-[0.2em]",
                              event.status === "live" ? "text-red-400" : "text-indigo-300"
                            )}
                          >
                            {event.status === "live" ? "Live now" : formatEventTime(event)}
                          </p>
                        )}
                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                        <p className="text-slate-300 lg:w-2/3">{event.description}</p>
                      </div>
                      {event.externalUrl ? (
                        <Button asChild className={`${gradientButtonClass} shrink-0 py-5 px-6 text-sm`}>
                          <a href={event.externalUrl} target="_blank" rel="noopener noreferrer">
                            <span>Learn More</span>
                            <ArrowIcon />
                          </a>
                        </Button>
                      ) : (
                        <span className="inline-flex h-fit w-fit shrink-0 items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </motion.div>
                </SpotLightItem>
              ))
            )}
          </Spotlight>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
