"use client"

import React, { useEffect, useState } from "react";
import { StickyGallery } from "./sticky_gallery/sticky_gallery";
import { cn } from "@/lib/utils";
import { light_glassmorphism } from "@/components/layout/header/constants";
import { LiquidGlassCard } from "@/components/liquid-glass";
import { motion, AnimatePresence } from "framer-motion";
import StatCounter from "@/components/ui/stat_counter";
import { imageList } from "@/public/images_list";
import { BlurVignette, BlurVignetteArticle } from "@/components/blur-vignette";

const images = [
  imageList.image_2.src,
  imageList.image_3.src,
  imageList.image_4.src,
  imageList.image_5.src,
]


export function StickyGallerySection(): React.JSX.Element {
  const [index, setIndex] = useState(0);

  // Slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Changes image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='text-white relative w-full bg-slate-950'>
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <BlurVignette
          radius='24px'
          inset='10px'
          transitionLength='100px'
          blur='15px'
          className='h-full'
        >
          <AnimatePresence>
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(20px)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <BlurVignetteArticle />
        </BlurVignette>
        {/* <div className="absolute inset-0 bg-slate-950/40 z-10" /> */}
        <div className="absolute inset-0 h-full w-full bg-[#0f172a] z-10 opacity-50 backdrop-blur-2xl">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#6633ee2e_1px,transparent_1px),linear-gradient(to_bottom,#6633ee2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_45%_60%_at_50%_100%,#000_45%,transparent_115%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(102,51,238,0.65)_100%)]"></div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-[1fr] relative z-10'>

        <div className='sticky top-0 h-screen flex items-center justify-center z-20 pointer-events-none px-4'>
          <LiquidGlassCard className="overflow-hidden w-full max-w-125 shrink-0 pointer-events-auto">
            <div className={cn(light_glassmorphism, "bg-white/10 p-8 z-1 flex flex-col items-center text-center gap-2")}>

              <div className="flex flex-col items-center">
                <StatCounter
                  value={10}
                  className="items-center"
                  suffix="+"
                  valueSize="5rem"
                  valueColor="#ffffff"
                  fontWeight={700}
                />
                <h1 className='text-xl md:text-3xl font-bold tracking-tight leading-tight text-white'>
                  Years of Bold Faith <br className="hidden md:block" /> & Global Impact
                </h1>
              </div>

              <div className="w-16 h-1 bg-white/20 rounded-full" />

              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
                A decade of life-transforming conferences, impactful ministry, bold innovations, and undeniable exploits.
                Built on family, love, and friendship—united by one vision.
              </p>

              <p className="text-sm md:text-base font-semibold text-white tracking-wide uppercase">
                Raising champions. Transforming lives. Advancing God’s purpose.
              </p>

            </div>
          </LiquidGlassCard>
        </div>
        <div className="overflow-x-hidden z-10 flex justify-center w-full">
          <StickyGallery images={images} />
        </div>
      </div>
    </section>
  )
}