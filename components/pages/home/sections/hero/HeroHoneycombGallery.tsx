import type { CSSProperties } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState, useEffect, memo, useCallback } from "react";
import Image from "next/image";
import { imageList, optimizedImageList } from "@/public/images_list";
import { XIcon } from "lucide-react";

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

const FLIP_SPRING = { type: "spring", stiffness: 120, damping: 15 } as const; // Slightly tighter spring for snappiness

const TILE_VARIANTS: Variants = {
  rest: { rotateY: 0, scale: 1, transition: FLIP_SPRING },
  flipped: { rotateY: 180, scale: 1.05, transition: FLIP_SPRING },
};

// The back-face photo can't be seen until the tile turns past 90° anyway. Keeping it at opacity 0 while the
// tile rests stops browsers from reporting a hidden photo as the page's Largest Contentful Paint (LCP).
const BACK_IMAGE_VARIANTS: Variants = {
  rest: { opacity: 0, transition: { duration: 0, delay: 0.6 } },
  flipped: { opacity: 1, transition: { duration: 0 } },
};
const BASE_IMAGE_SRC = "/assets/PCO_2.jpg";

// `thumb` is Cloudinary's resized copy for the small flipped tile; `full` is only loaded in the modal.
const IMAGE_LIST = [
  { id: "01", thumb: optimizedImageList.b_1.src, full: imageList.b_1.src },
  { id: "02", thumb: optimizedImageList.b_2.src, full: imageList.b_2.src },
  { id: "03", thumb: optimizedImageList.b_3.src, full: imageList.b_3.src },
  { id: "04", thumb: optimizedImageList.b_4.src, full: imageList.b_4.src },
  { id: "05", thumb: optimizedImageList.pks_1.src, full: imageList.pks_1.src },
  { id: "06", thumb: optimizedImageList.pks_2.src, full: imageList.pks_2.src },
  { id: "07", thumb: optimizedImageList.pks_3.src, full: imageList.pks_3.src },
  { id: "08", thumb: optimizedImageList.b_1.src, full: imageList.b_1.src },
  { id: "09", thumb: optimizedImageList.wsa_2.src, full: imageList.wsa_2.src },
  { id: "10", thumb: optimizedImageList.pco_1.src, full: imageList.pco_1.src },
  { id: "11", thumb: optimizedImageList.pks_1.src, full: imageList.pks_1.src },
  { id: "12", thumb: optimizedImageList.wsa_2.src, full: imageList.wsa_2.src },
  { id: "13", thumb: optimizedImageList.b_2.src, full: imageList.b_2.src },
  { id: "14", thumb: optimizedImageList.b_4.src, full: imageList.b_4.src },
  { id: "15", thumb: optimizedImageList.b_2.src, full: imageList.b_2.src },
  { id: "16", thumb: optimizedImageList.pco_2.src, full: imageList.pco_2.src },
  { id: "17", thumb: optimizedImageList.pks_2.src, full: imageList.pks_2.src },
  { id: "18", thumb: optimizedImageList.wsa_3.src, full: imageList.wsa_3.src },
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
  loadBackImage,
  onClick
}: {
  position: typeof TILE_LAYOUT[0],
  index: number,
  loadBackImage: boolean,
  onClick: (src: string) => void
}) => {
  const leftOffset = `calc(${position.x} * (var(--tile-w) + var(--gap-x)))`;
  const topOffset = `calc(${position.y} * var(--step-y))`;
  const tile = IMAGE_LIST[index];
  // The back face is hidden until the tile flips, so its image waits until the page is idle or the tile is hovered.
  const [isPrimed, setIsPrimed] = useState(false);
  const showBackImage = loadBackImage || isPrimed;

  return (
    <button
      onClick={() => onClick(tile.full)}
      onPointerEnter={() => setIsPrimed(true)}
      onFocus={() => setIsPrimed(true)}
      className="absolute block p-0 outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      style={{
        left: leftOffset,
        top: topOffset,
        width: "var(--tile-w)",
        height: "var(--tile-h)",
        perspective: "1000px", // Adds 3D depth to the rotation
      }}
    >
      {/* No permanent will-change: Framer Motion promotes the tile only while it is flipping,
          instead of keeping 18 GPU layers alive for the whole visit. */}
      <motion.div
        className="relative h-full w-full cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        variants={TILE_VARIANTS}
        initial="rest"
        animate="rest"
        whileHover="flipped"
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
          <motion.div
            variants={BACK_IMAGE_VARIANTS}
            className="relative h-[95%] w-[95%] overflow-hidden"
            style={{ clipPath: HEX_CLIP }}
          >
            {showBackImage && (
              <Image
                src={tile.thumb}
                alt={`Gallery tile ${position.id}`}
                fill
                sizes="(max-width: 768px) 30vw, 15vw"
                unoptimized // Cloudinary already serves a resized, compressed copy
                className="object-cover"
              />
            )}
          </motion.div>
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
  const [loadBackImages, setLoadBackImages] = useState(false);

  // Fetch the hidden back-face images once the hero has loaded and the browser is idle,
  // so they never compete with the first paint.
  useEffect(() => {
    let idleId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(() => setLoadBackImages(true), { timeout: 3000 });
      } else {
        setLoadBackImages(true);
      }
    }, 1500);

    return () => {
      window.clearTimeout(timeoutId);
      if (idleId !== undefined && "cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
    };
  }, []);

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
            loadBackImage={loadBackImages}
            onClick={handleTileClick}
          />
        ))}
      </div>
      {/* MODAL */}
      <AnimatePresence initial={false} mode="sync">
        {isModalOpen && selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              key={`backdrop-${selectedImage}`}
              className="fixed inset-0 z-60 w-screen bg-white/80 dark:bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Wrapper (Takes full screen, centers the child modal) */}
            <motion.div
              key="dialog"
              className="fixed inset-0 z-70 flex items-center justify-center pointer-events-none p-4 sm:p-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Actual Modal Content Container */}
              <motion.div
                layoutId={`dialog-${selectedImage}`}
                className="pointer-events-auto relative flex flex-col overflow-hidden bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-3xl w-full max-w-4xl h-[80vh]"
                tabIndex={-1}
              >
                <motion.div
                  layoutId={`dialog-img-${selectedImage}`}
                  className="relative w-full h-full"
                >
                  <Image
                    src={selectedImage}
                    alt="Expanded view"
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    quality={90}
                    unoptimized
                    className="object-cover pointer-events-none"
                    priority
                  />
                </motion.div>

                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-4 top-4 z-10 p-2 text-neutral-800 dark:text-neutral-200 bg-white/60 dark:bg-black/60 hover:bg-white dark:hover:bg-black backdrop-blur-md rounded-full transition-all duration-200 shadow-sm cursor-pointer"
                  type="button"
                  aria-label="Close dialog"
                >
                  <XIcon size={24} />
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
