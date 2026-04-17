import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// NOTE: See step 2 below about optimizing these imports!
import BASE_IMAGE_SRC from "@/assets/PCO_2.jpg";
import IMAGE_1 from "@/assets/B_2.jpg";
import IMAGE_2 from "@/assets/B_4.jpg";
import IMAGE_3 from "@/assets/B2.jpg";
import IMAGE_4 from "@/assets/PCO_2.jpg";
import IMAGE_5 from "@/assets/PKS2.jpg";
import IMAGE_6 from "@/assets/WSA3.jpg";
import IMAGE_7 from "@/assets/B_3.jpg";
import IMAGE_8 from "@/assets/B1.jpg";
import IMAGE_9 from "@/assets/GRP_1.jpg";
import IMAGE_10 from "@/assets/PCO_1.jpg";
import IMAGE_11 from "@/assets/PKS1.jpg";
import IMAGE_12 from "@/assets/WSA2.jpg";

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const IMAGE_LIST = [
  { id: "01", src: IMAGE_1 },
  { id: "02", src: IMAGE_2 },
  { id: "03", src: IMAGE_3 },
  { id: "04", src: IMAGE_4 },
  { id: "05", src: IMAGE_5 },
  { id: "06", src: IMAGE_6 },
  { id: "07", src: IMAGE_7 },
  { id: "08", src: IMAGE_8 },
  { id: "09", src: IMAGE_9 },
  { id: "10", src: IMAGE_10 },
  { id: "11", src: IMAGE_11 },
  { id: "12", src: IMAGE_12 },
  { id: "13", src: IMAGE_1 },
  { id: "14", src: IMAGE_2 },
  { id: "15", src: IMAGE_3 },
  { id: "16", src: IMAGE_4 },
  { id: "17", src: IMAGE_5 },
  { id: "18", src: IMAGE_6 },
];

const TILE_LAYOUT = [
  { id: "01", x: 1, y: 0 },
  { id: "02", x: 2, y: 0 },
  { id: "03", x: 3, y: 0 },
  { id: "04", x: 0.5, y: 1 },
  { id: "05", x: 1.5, y: 1 },
  { id: "06", x: 2.5, y: 1 },
  { id: "07", x: 3.5, y: 1 },
  { id: "08", x: 0, y: 2 },
  { id: "09", x: 1, y: 2 },
  { id: "10", x: 2, y: 2 },
  { id: "11", x: 3, y: 2 },
  { id: "13", x: 0.5, y: 3 },
  { id: "14", x: 1.5, y: 3 },
  { id: "15", x: 2.5, y: 3 },
  { id: "16", x: 3.5, y: 3 },
  { id: "17", x: 1, y: 4 },
  { id: "18", x: 2, y: 4 },
  { id: "19", x: 3, y: 4 },
];

export default function HeroHoneycombGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageSrc = typeof BASE_IMAGE_SRC === "string" ? BASE_IMAGE_SRC : (BASE_IMAGE_SRC as any)?.src;

  const BOARD_STYLE = {
    "--tile-w": "clamp(4.2rem, 18vw, 9.5rem)",
    "--tile-h": "calc(var(--tile-w) * 1.1547)",
    "--gap-x": "clamp(0.1rem, 0.1vw, 0.1rem)",
    "--step-y": "calc(var(--tile-h) * 0.75 + (var(--gap-x) * 0.5))",
    "--board-w": "calc((var(--tile-w) * 5) + (var(--gap-x) * 4))",
    "--board-h": "calc((var(--tile-h) * 4) + (var(--gap-x) * 2))",
  } as CSSProperties;

  return (
    <div className="flex w-full items-center justify-center lg:justify-end">
      <div
        className="relative"
        style={{
          ...BOARD_STYLE,
          width: "var(--board-w)",
          height: "var(--board-h)",
        }}
      >
        {TILE_LAYOUT.map((position, index) => {
          const leftOffset = `calc(${position.x} * (var(--tile-w) + var(--gap-x)))`;
          const topOffset = `calc(${position.y} * var(--step-y))`;

          return (
            <button
              key={position.id}
              onClick={() => setIsModalOpen(true)}
              className="absolute block p-0 outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              style={{
                left: leftOffset,
                top: topOffset,
                width: "var(--tile-w)",
                height: "var(--tile-h)",
                perspective: 1200,
              }}
            >
              <motion.div
                className="relative h-full w-full cursor-pointer"
                style={{ 
                  transformStyle: "preserve-3d",
                  willChange: "transform" // PERF FIX: GPU Acceleration hint
                }}
                whileHover={{ rotateY: 180, scale: 1.05 }}
                // PERF FIX: Smoother transition that requires fewer calc frames
                transition={{ type: "spring", stiffness: 90, damping: 15, mass: 1 }}
              >
                {/* FRONT FACE */}
                <div
                  className="absolute inset-0 overflow-hidden bg-slate-800"
                  style={{
                    clipPath: HEX_CLIP,
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: "auto var(--board-h)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `calc(-1 * ${leftOffset}) calc(-1 * ${topOffset})`,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="absolute inset-0 border-[1px] border-white/5" style={{ clipPath: HEX_CLIP }} />
                </div>

                {/* BACK FACE */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600"
                  style={{
                    clipPath: HEX_CLIP,
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="absolute inset-[2px] flex items-center justify-center bg-slate-950" style={{ clipPath: HEX_CLIP }}>
                    <img
                      src={IMAGE_LIST[index].src}
                      alt={`Gallery tile ${position.id}`}
                      className="h-full w-auto object-cover"
                      loading="lazy"    // PERF FIX: Delays loading until necessary
                      decoding="async"  // PERF FIX: Prevents main-thread blocking during decoding
                    />
                  </div>
                </div>
              </motion.div>
            </button>
          );
        })}
      </div>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative max-w-5xl overflow-hidden rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={imageSrc} 
                alt="Modal View" 
                className="max-h-[85vh] w-auto object-contain shadow-2xl"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}