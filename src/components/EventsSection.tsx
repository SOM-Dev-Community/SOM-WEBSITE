import React from "react";
import { Button } from "@/components/ui/button";

export const EventsSection = () => {
  const [activeTab, setActiveTab] = React.useState("Upcoming");
  const eventData = [
    
    {
      title: "August Global Communion Service",
      desc: "A divine moment to fellowship in the Spirit and partake in communion together.",
      image: "https://i.postimg.cc/HnbxsTwx/images.jpg",
      category: "Upcoming",
    },
    {
      title: "Healing Streams Live Healing Service",
      desc: "Experience miracles and divine healing with Pastor Chris — invite others too.",
      image: "https://i.postimg.cc/76Fhk5Td/HSLHS.jpg",
      category: "Upcoming",
    },{
      title: "SOMC 2025",
      desc: "Join us for a powerful evening with God's word and fellowship.",
      image: "src/assets/logo-sm.png",
      category: "On-Demand",
    },
    {
      title : "Preachers Kids Summit",
      desc : "A special event for the children of ministers to grow in faith and fellowship.",
      image : "https://i.postimg.cc/vZ0mmqVW/PKS1.jpg",
      category: "On-Demand"
    },
    {
      title: "Fortify Conference",
      desc: "A transformative event focused on spiritual growth and faith building for ministers children.",
      image: "https://i.postimg.cc/1z43VGGb/PKS2.jpg",
      category: "On-Demand",
    },
    {
      title: "Leadership Workshop 2025",
      desc: "Sharpen your leadership skills with hands-on activities and expert speakers.",
      image: "https://i.postimg.cc/CMCS1ryz/WSA3.jpg",
      category: "Workshops",
    },
    {
      title: "Creative Ministry Workshop",
      desc: "Explore new ways to engage your ministry through creativity and innovation.",
      image: "https://i.postimg.cc/8P1DrdDw/WSA2.jpg",
      category: "Workshops",
    },
    {
      title: "SOMLA",
      desc: "Join us in the Sons of Ministry Leadership Academy to enhance your leadership skills.",
      image: "https://i.postimg.cc/nVqcmcmV/SOMLA.jpg",
      category: "Premium",
      Link: "https://somla.loveworldsonsofministry.org/"
    }
  ];

  const tabs = ["View All", "Upcoming", "On-Demand", "Workshops", "Premium"];
  const filteredEvents = activeTab === "View All" ? eventData : eventData.filter(e => e.category === activeTab);

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 animate-fade-in lg:w-9/12">
        <div className="text-center mb-16">
          <p className="text-gray-200 text-base font-semibold mb-6"> Events</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide animate-slide-in-left">
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-gray-300 animate-fade-in-up delay-150">
            Mark your calendars! Don’t miss these powerful gatherings designed
            to equip and inspire.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in delay-300">
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${activeTab === tab
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : " bg-transparent text-white hover:bg-gray-800"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 animate-fade-in-up delay-500">
          {filteredEvents.length === 0 ? (
            <div className="text-center text-gray-400">No events found for this category.</div>
          ) : (
            filteredEvents.map(({ title, desc, image, Link }, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row bg-gray-900 border border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-900/40 transition-shadow duration-300"
              >
                <div
                  className="w-full md:w-48 h-48 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="flex flex-col lg:flex-row justify-between p-6 flex-1">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-300 mb-6 lg:w-2/3">{desc}</p>
                  </div>
                  {Link ? (
                    <a
                      href={Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full md:w-fit bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-transform duration-300 hover:scale-105 mt-2 md:mt-0 md:self-center">
                        Save My Spot
                      </Button>
                    </a>
                  ) : (
                    <Button className="w-full md:w-fit bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-transform duration-300 hover:scale-105 mt-2 md:mt-0 md:self-center">
                      Save My Spot
                    </Button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
