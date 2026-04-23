"use client"

import React, { useEffect, useState } from "react";
import { StickyGallery } from "./sticky_gallery/sticky_gallery";
import { cn } from "@/lib/utils";
import { light_glassmorphism } from "@/components/layout/header/constants";
import { LiquidGlassCard } from "@/components/liquid-glass";
import { motion, AnimatePresence } from "framer-motion";
import StatCounter from "@/components/ui/stat_counter";
import { imageList, optimizedImageList } from "@/public/images_list";
import { BlurVignette, BlurVignetteArticle } from "@/components/blur-vignette";

const images = [
  imageList.image_2.src,
  imageList.image_3.src,
  imageList.image_4.src,
  imageList.image_5.src,
];
const optimizedImages = [
  optimizedImageList.image_2.src,
  optimizedImageList.image_3.src,
  optimizedImageList.image_4.src,
  optimizedImageList.image_5.src,
];

function BackgroundSlideshow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.img
        key={index}
        src={images[index]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ willChange: "opacity, filter" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </AnimatePresence>
  );
}

export function StickyGallerySection(): React.JSX.Element {
  return (
    <section className="text-white relative w-full bg-slate-950">

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <BlurVignette
          radius="24px"
          inset="10px"
          transitionLength="100px"
          blur="15px"
          className="h-full"
        >
          <BackgroundSlideshow images={images} />
          <BlurVignetteArticle />
        </BlurVignette>

        <div className="absolute inset-0 h-full w-full bg-[#0f172a] z-10 opacity-50 backdrop-blur-2xl">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#6633ee2e_1px,transparent_1px),linear-gradient(to_bottom,#6633ee2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_45%_60%_at_50%_100%,#000_45%,transparent_115%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,0.65)_100%)]"></div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[1fr] relative z-10">

        <div className="sticky top-0 min-h-[60vh] lg:h-screen py-12 lg:py-0 flex items-center justify-center z-20 pointer-events-none px-4">
          <LiquidGlassCard draggable={false} className="overflow-hidden w-full max-w-lg shrink-0 pointer-events-auto shadow-2xl">
            <div className={cn(light_glassmorphism, "bg-white/10 p-6 md:p-8 z-1 flex flex-col items-center text-center gap-3 md:gap-4")}>

              <div className="flex flex-col items-center">
                <StatCounter
                  value={10}
                  className="items-center"
                  valueSize="4rem" 
                  valueColor="#ffffff"
                  fontWeight={700}
                />
                <h1 className="text-xl md:text-3xl font-bold tracking-tight leading-tight text-white mt-2">
                  Years of Bold Faith <br className="hidden md:block" /> & Global Impact
                </h1>
              </div>

              <div className="w-16 h-1 bg-white/20 rounded-full my-2" />

              <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-sm">
                A decade of life-transforming conferences, impactful ministry, bold innovations, and undeniable exploits. Built on family, love, and friendship—united by one vision.
              </p>

              <p className="text-xs md:text-sm font-semibold text-white/90 tracking-widest uppercase mt-2">
                Raising champions. Transforming lives.
              </p>

            </div>
          </LiquidGlassCard>
        </div>

        <div className="overflow-x-hidden z-10 flex justify-center w-full py-10 lg:py-0">
          <StickyGallery images={optimizedImages} />
        </div>
      </div>
    </section>
  );
}