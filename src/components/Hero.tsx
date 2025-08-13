import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {

  const navigate = useNavigate();

  const GetStarted = () => {
    navigate('/Contact');
  };

  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://i.postimg.cc/ZnW0rnbq/banner-2.jpg")',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/5 to-black/90 backdrop-blur-0 blur-sm" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 sm:px-10 text-white text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
          <span className="block animate-slide-in-left">LOVEWORLD SONS OF MINISTRY</span>
          <span className="block animate-slide-in-right delay-150"></span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-white/90 drop-shadow-md animate-fade-in delay-300">
          Raising Minister's Children For The Expansion Of The Gospel.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 animate-fade-in delay-500">
          <Button
          onClick={GetStarted}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>

          <a href="https://www.kingsch.at/p/cUJHTzd" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-blue-700 hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
            >
              Watch Video
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator or Events Anchor */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up delay-700">
        <button 
          onClick={scrollToEvents}
          className="text-white/80 hover:text-white text-sm tracking-wider flex items-center gap-2 transition-colors duration-300"
        >
          <span className="inline-block animate-bounce delay-75">↓</span>
          <span>Scroll to Events</span>
        </button>
      </div>
    </section>
  );
};
