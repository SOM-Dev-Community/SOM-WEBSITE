"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import HeroHoneycombGallery from "./hero/HeroHoneycombGallery"; // Adjust path if needed
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.22]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0.95, 0.45]);
  const meshY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const secondaryGlowY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -54]);
  const indicatorY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const handleGetStarted = () => {
    router.push("/Contact");
  };

  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
          opacity: backgroundOpacity,
        }}
        className="absolute inset-[-8%] bg-cover bg-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/banner-2.jpg")' }}
        />
      </motion.div>

      <motion.div
        style={{ y: meshY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(96,165,250,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.08)_1px,transparent_1px)] bg-[size:5rem_5rem]"
      />

      <motion.div
        style={{ y: glowY }}
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-[120px]"
      />
      <motion.div
        style={{ y: secondaryGlowY }}
        className="absolute bottom-0 right-[-8%] h-[24rem] w-[24rem] rounded-full bg-blue-500/25 blur-[140px]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.54),rgba(2,6,23,0.18)_28%,rgba(2,6,23,0.72)_78%,rgba(2,6,23,0.94))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_28%)]" />

      <motion.div
        style={{ y: contentY }}
        // Added overflow-hidden on the Y axis contextually to prevent scrolling artifacts if scaled high
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-20 pt-32 sm:px-10 lg:px-8"
      >
        {/* UPDATED: Changed to flex-col on mobile/tablet, and flex-row on lg desktop */}
        <div className="flex w-full flex-col items-center gap-14 lg:flex-row lg:justify-between lg:gap-12">
          
          {/* LEFT SIDE: Text Content (50% width on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 70 }}
            className="mx-auto w-full max-w-3xl text-center lg:mx-0 lg:w-[45%] lg:text-left xl:w-1/2"
          >
            <motion.h1
              className="text-5xl font-black leading-[0.95] tracking-[-0.04em] drop-shadow-[0_12px_28px_rgba(2,6,23,0.55)] sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
              >
                Loveworld
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent"
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
              >
                Sons of Ministry
              </motion.span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-200/92 sm:text-xl lg:mx-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.85, delay: 0.28 }}
            >
              Raising ministers&apos; children for the expansion of the Gospel
              through encounters, training, and a global community of bold young
              ministers.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center lg:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.14, delayChildren: 0.5 } },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="min-w-44 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_22px_45px_rgba(37,99,235,0.35)] transition-all duration-300 hover:bg-blue-700"
                >
                  Get Started
                </Button>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="https://www.kingsch.at/p/VzhtcVA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="min-w-44 rounded-2xl border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white shadow-[0_20px_40px_rgba(15,23,42,0.32)] backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-950"
                  >
                    Watch Video
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Honeycomb Gallery (50% width on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              type: "spring",
              stiffness: 60,
            }}
            className="relative flex w-full justify-center lg:w-[55%] xl:w-1/2 lg:justify-end"
          >
            <HeroHoneycombGallery />
          </motion.div>
          
        </div>
      </motion.div>

      <motion.div
        style={{ y: indicatorY }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 justify-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.button
          onClick={scrollToEvents}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm tracking-[0.24em] text-white/80 backdrop-blur-md transition-colors duration-300 hover:text-white"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="text-base"
          >
            ↓
          </motion.span>
          <span>Scroll to Events</span>
        </motion.button>
      </motion.div>
    </section>
  );
};