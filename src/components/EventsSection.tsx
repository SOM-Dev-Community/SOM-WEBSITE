import React from 'react';
import { Button } from '@/components/ui/button';

export const EventsSection = () => {
  const events = [
    {
      title: "SOMC 2025",
      desc: "Join us for a powerful evening with God's word and fellowship.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "August Global Communion Service",
      desc: "A divine moment to fellowship in the Spirit and partake in communion together.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Healing Streams Live Healing Service",
      desc: "Experience miracles and divine healing with Pastor Chris — invite others too.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide animate-slide-in-left">
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-gray-300 animate-fade-in-up delay-150">
            Mark your calendars! Don’t miss these powerful gatherings designed to equip and inspire.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in delay-300">
          {["Upcoming", "On-Demand", "Workshops", "Premium"].map((tab, idx) => (
            <Button
              key={tab}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                idx === 0
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-white/10 border border-white text-white hover:bg-blue-700'
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-up delay-500">
          {events.map(({ title, desc, image }, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/40 transition-shadow duration-300"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-300 mb-6">{desc}</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-transform duration-300 hover:scale-105">
                  Save My Spot
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
