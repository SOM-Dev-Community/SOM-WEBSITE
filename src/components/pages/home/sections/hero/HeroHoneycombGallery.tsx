"use client";

import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import imageB1 from "@/assets/B1.jpg";
import imageB2 from "@/assets/B2.jpg";
import imagePKS1 from "@/assets/PKS1.jpg";
import imagePKS2 from "@/assets/PKS2.jpg";
import imageWSA2 from "@/assets/WSA2.jpg";
import imageWSA3 from "@/assets/WSA3.jpg";

type GalleryItem = {
  alt: string;
  id: string;
  src: string;
};

const HEX_CLIP =
  "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)";

const BASE_IMAGE = imagePKS1;

const ITEMS: GalleryItem[] = [
  { id: "01", src: imagePKS1, alt: "Conference audience in worship" },
  { id: "02", src: imagePKS2, alt: "Ministering at a gathering" },
  { id: "03", src: imageWSA2, alt: "Young ministers on stage" },
  { id: "04", src: imageWSA3, alt: "Stage lights over the audience" },
  { id: "05", src: imageB1, alt: "Ministry teaching moment" },
  { id: "06", src: imageB2, alt: "Worship scene at an event" },
  { id: "07", src: imagePKS2, alt: "Prayer session in progress" },
];

const POSITIONS = [
  { x: 0, y: 0 },
  { x: 50, y: 0 },
  { x: 100, y: 0 },
  { x: 25, y: 50 },
  { x: 75, y: 50 },
  { x: 0, y: 100 },
  { x: 50, y: 100 },
];

const TILE_LAYOUT = [
  { left: "0px", top: "0px" },
  { left: "calc(var(--tile-w) + var(--gap-x))", top: "0px" },
  { left: "calc((var(--tile-w) + var(--gap-x)) * 2)", top: "0px" },
  { left: "calc(var(--tile-w) / 2 + var(--gap-x) / 2)", top: "var(--step-y)" },
  { left: "calc(var(--tile-w) * 1.5 + var(--gap-x) * 1.5)", top: "var(--step-y)" },
  { left: "0px", top: "calc(var(--step-y) * 2)" },
  { left: "calc(var(--tile-w) + var(--gap-x))", top: "calc(var(--step-y) * 2)" },
];

const BOARD_STYLE = {
  "--tile-w": "clamp(6rem, 9vw, 8.5rem)",
  "--tile-h": "calc(var(--tile-w) * 1.1547)",
  "--gap-x": "clamp(0.4rem, 0.8vw, 0.8rem)",
  "--step-y": "calc(var(--tile-h) * 0.75)",
} as CSSProperties;

export default function HeroHoneycombGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full justify-end px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative ml-auto w-full max-w-[34rem]">
        <div
          className="relative ml-auto"
          style={{
            ...BOARD_STYLE,
            width: "calc(var(--tile-w) * 3 + var(--gap-x) * 2)",
            height: "calc(var(--tile-h) + var(--step-y) * 2)",
          }}
        >
          {ITEMS.map((item, index) => {
            const slice = POSITIONS[index];
            const position = TILE_LAYOUT[index];

            return (
              <motion.button
                key={item.id}
                type="button"
                aria-label={`Open image ${item.id}`}
                className="absolute block rounded-[0.15rem] border border-white/10 bg-transparent p-0 shadow-[0_0_2rem_rgba(0,0,0,0.18)] outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                style={{
                  left: position.left,
                  top: position.top,
                  width: "var(--tile-w)",
                  height: "var(--tile-h)",
                  perspective: 1200,
                }}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                onClick={() => setOpenIndex(index)}
              >
                <motion.div
                  className="relative h-full w-full"
                  style={{ transformStyle: "preserve-3d", transform: "translateZ(0)" }}
                  whileHover={{ rotateY: 180, scale: 1.05 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="absolute inset-0 overflow-hidden border border-white/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                    style={{
                      clipPath: HEX_CLIP,
                      backgroundImage: `url(${BASE_IMAGE})`,
                      backgroundSize: "300% 300%",
                      backgroundPosition: `${slice.x}% ${slice.y}%`,
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
                    <div
                      className="absolute inset-[0.4rem] border border-white/10"
                      style={{ clipPath: HEX_CLIP }}
                    />
                  </div>

                  <div
                    className="absolute inset-0 flex items-center justify-center bg-slate-950/90 text-white"
                    style={{
                      clipPath: HEX_CLIP,
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <span className="text-3xl font-semibold">+</span>
                  </div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-[1.5rem] bg-slate-950 shadow-2xl"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={ITEMS[openIndex].src}
                alt={ITEMS[openIndex].alt}
                className="h-full w-full max-h-[90vh] object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
}
