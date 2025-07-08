import React, { useState } from "react";
import EventCard from "./EventCard";
import "../Styles/EventCard.css";
import event1 from "../assets/event1.avif";
import event2 from "../assets/event2.avif";
import event3 from "../assets/event3.avif";

const eventsData = [
  {
    image: event1,
    title: "Leadership Summit",
    date: "Fri 09 Feb 2024",
    location: "Online",
    description: "Join us for a transformative online experience with industry leaders and inspiring speakers."
  },
  {
    image: event2,
    title: "Family Retreat",
    date: "Sat 10 Feb 2024",
    location: "Local",
    description: "Reconnect with family and friends at our annual retreat filled with fun and fellowship."
  },
  {
    image: event3,
    title: "Youth Conference",
    date: "Sun 11 Feb 2024",
    location: "Virtual",
    description: "Empower the next generation at our dynamic virtual youth conference with engaging speakers and activities."
  }
];

const filters = ["View all", "Workshops", "Conferences", "Webinars", "Retreats"];

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState("View all");

  // For demonstration, all events are shown regardless of filter.
  // You can add filtering logic if you want.
  return (
    <section className="events-section">
      <div className="events-header">
        <div className="events-subtitle">Events</div>
        <h1 className="events-title">Upcoming</h1>
        <p className="events-desc">
          Join us for our exciting upcoming events designed to inspire and engage our community.
        </p>
      </div>
      <div className="events-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`events-filter-btn${activeFilter === filter ? " active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="events-list">
        {eventsData.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
