import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/dopaigblc/image/upload/v1766912976/banner-2_iljm9k.jpg")',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2 }}
    >
      {/* Gradient Overlay with animated shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/5 to-black/90 backdrop-blur-0 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-6 sm:px-10 text-white text-center"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 60 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            className="block"
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
          >
            LOVEWORLD SONS OF MINISTRY
          </motion.span>
          <motion.span
            className="block"
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
          >
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-white/90 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Raising Minister's Children For The Expansion Of The Gospel.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 1.2,
              },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              onClick={GetStarted}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="https://www.kingsch.at/p/VzhtcVA" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-blue-700 hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
              >
                Watch Video
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator or Events Anchor */}
      <motion.div
        className="absolute bottom-8 w-full flex justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.button
          onClick={scrollToEvents}
          className="text-white/80 hover:text-white text-sm tracking-wider flex items-center gap-2 transition-colors duration-300"
          whileHover={{ scale: 1.1, color: '#fff' }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="inline-block"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
          <span>Scroll to Events</span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};
