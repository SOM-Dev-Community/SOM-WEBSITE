import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, memo, useCallback } from "react";
import Image from "next/image";

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
const BASE_IMAGE_SRC = "/assets/PCO_2.jpg";

const IMAGE_LIST = [
  { id: "01", src: "/assets/B_2.jpg" },
  { id: "02", src: "/assets/B_4.jpg" },
  { id: "03", src: "/assets/B2.jpg" },
  { id: "04", src: "/assets/PCO_2.jpg" },
  { id: "05", src: "/assets/PKS2.jpg" },
  { id: "06", src: "/assets/WSA3.jpg" },
  { id: "07", src: "/assets/B_3.jpg" },
  { id: "08", src: "/assets/B1.jpg" },
  { id: "09", src: "/assets/GRP_1.jpg" },
  { id: "10", src: "/assets/PCO_1.jpg" },
  { id: "11", src: "/assets/PKS1.jpg" },
  { id: "12", src: "/assets/WSA2.jpg" },
  { id: "13", src: "/assets/B_2.jpg" },
  { id: "14", src: "/assets/B_4.jpg" },
  { id: "15", src: "/assets/B2.jpg" },
  { id: "16", src: "/assets/PCO_2.jpg" },
  { id: "17", src: "/assets/PKS2.jpg" },
  { id: "18", src: "/assets/WSA3.jpg" },
];

const TILE_LAYOUT = [
  { id: "01", x: 1, y: 0 }, { id: "02", x: 2, y: 0 }, { id: "03", x: 3, y: 0 },
  { id: "04", x: 0.5, y: 1 }, { id: "05", x: 1.5, y: 1 }, { id: "06", x: 2.5, y: 1 }, { id: "07", x: 3.5, y: 1 },
  { id: "08", x: 0, y: 2 }, { id: "09", x: 1, y: 2 }, { id: "10", x: 2, y: 2 }, { id: "11", x: 3, y: 2 },
  { id: "13", x: 0.5, y: 3 }, { id: "14", x: 1.5, y: 3 }, { id: "15", x: 2.5, y: 3 }, { id: "16", x: 3.5, y: 3 },
  { id: "17", x: 1, y: 4 }, { id: "18", x: 2, y: 4 }, { id: "19", x: 3, y: 4 },
];

// 1. MEMOIZED TILE COMPONENT: Prevents re-rendering all 18 items when the modal opens
const HoneycombTile = memo(({ 
  position, 
  index, 
  onClick 
}: { 
  position: typeof TILE_LAYOUT[0], 
  index: number, 
  onClick: (src: string) => void 
}) => {
  const leftOffset = `calc(${position.x} * (var(--tile-w) + var(--gap-x)))`;
  const topOffset = `calc(${position.y} * var(--step-y))`;
  const tileImageSrc = IMAGE_LIST[index].src;

  return (
    <button
      onClick={() => onClick(tileImageSrc)}
      className="absolute block p-0 outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      style={{
        left: leftOffset,
        top: topOffset,
        width: "var(--tile-w)",
        height: "var(--tile-h)",
        perspective: "1000px", // Adds 3D depth to the rotation
      }}
    >
      <motion.div
        className="relative h-full w-full cursor-pointer"
        style={{ 
          transformStyle: "preserve-3d",
          willChange: "transform" // 2. GPU HINT: Hardware accelerates the animation
        }}
        whileHover={{ rotateY: 180, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }} // Slightly tighter spring for snappiness
      >
        {/* FRONT FACE: Mosaic Background */}
        <div
          className="absolute inset-0 bg-slate-800"
          style={{
            clipPath: HEX_CLIP,
            backgroundImage: `url(${BASE_IMAGE_SRC})`,
            backgroundSize: "auto var(--board-h)",
            backgroundPosition: `calc(-1 * ${leftOffset}) calc(-1 * ${topOffset})`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden", // 3. SAFARI FIX
          }}
        />

        {/* BACK FACE: Individual Optimized Image */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-600"
          style={{
            clipPath: HEX_CLIP,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden", // 3. SAFARI FIX
          }}
        >
          <div className="relative h-[95%] w-[95%] overflow-hidden" style={{ clipPath: HEX_CLIP }}>
            <Image
              src={tileImageSrc}
              alt={`Gallery tile ${position.id}`}
              fill
              sizes="(max-width: 768px) 30vw, 15vw"
              quality={65} // 4. PERFORMANCE: Lower quality for tiny thumbnails loads much faster
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </button>
  );
});

// Explicit display name for React DevTools
HoneycombTile.displayName = "HoneycombTile";

// --- MAIN COMPONENT ---
export default function HeroHoneycombGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 5. CACHED HANDLER: Prevents the memoized tiles from thinking the function changed on re-render
  const handleTileClick = useCallback((src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  }, []);

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
        style={{ ...BOARD_STYLE, width: "var(--board-w)", height: "var(--board-h)" }}
      >
        {TILE_LAYOUT.map((position, index) => (
          <HoneycombTile 
            key={position.id} 
            position={position} 
            index={index} 
            onClick={handleTileClick} 
          />
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative h-[85vh] w-[90vw] max-w-5xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Expanded view"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                quality={90} // Keep modal quality high
                className="object-contain drop-shadow-2xl"
                priority // Modal image loads immediately
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}