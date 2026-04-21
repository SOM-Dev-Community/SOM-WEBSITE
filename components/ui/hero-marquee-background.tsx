"use client";

/* eslint-disable @next/next/no-img-element */

import { memo, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { imageList } from "@/public/images_list";

type HeroMarqueeBackgroundProps = {
  backgroundImages?: string[];
  marqueeImages?: string[];
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

type HorizontalDirection = "left" | "right";
type VerticalDirection = "up" | "down";

const BACKGROUND_CYCLE_MS = 7000;
const BACKGROUND_FADE_SECONDS = 1.8;
const LOOP_GAP_REM = 1;
const LOOP_OFFSET = `calc(-50% - ${LOOP_GAP_REM / 2}rem)`;

const LAYER_IMAGE_STYLE = {
  willChange: "transform, opacity",
  backfaceVisibility: "hidden" as const,
  transform: "translateZ(0)",
};

const TRACK_STYLE = {
  willChange: "transform",
  transform: "translateZ(0)",
};

const DEFAULT_BACKGROUND_IMAGES = [
  imageList.b_1.src,
  imageList.image_2.src,
  imageList.b_4.src,
  imageList.image_1.src,
  imageList.b_2.src,
];

const DEFAULT_MARQUEE_IMAGES = [
  imageList.b_1.src,
  imageList.b_2.src,
  imageList.b_3.src,
  imageList.b_4.src,
  imageList.b_5.src,
  imageList.image_1.src,
  imageList.image_2.src,
  imageList.image_3.src,
  imageList.image_4.src,
  imageList.image_5.src,
  imageList.pco_1.src,
  imageList.pco_2.src,
];

export default function HeroMarqueeBackground({
  backgroundImages = DEFAULT_BACKGROUND_IMAGES,
  marqueeImages = DEFAULT_MARQUEE_IMAGES,
  headline = "Equipping believers to build transformational communities.",
  subheadline = "A layered hero with a cinematic backdrop, seamless marquee motion, and content that stays readable on every screen.",
  ctaLabel,
  ctaHref,
}: HeroMarqueeBackgroundProps) {
  const safeBackgroundImages =
    backgroundImages.length > 0 ? backgroundImages : DEFAULT_BACKGROUND_IMAGES;
  const safeMarqueeImages =
    marqueeImages.length > 0 ? marqueeImages : DEFAULT_MARQUEE_IMAGES;

  return (
    <section className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-slate-950 text-white">
      <BackgroundSlideshow images={safeBackgroundImages} />
      <MarqueeGrid images={safeMarqueeImages} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(5, 8, 20, 0.12) 0%, rgba(5, 8, 20, 0.48) 42%, rgba(5, 8, 20, 0.78) 100%), linear-gradient(to bottom, rgba(5, 8, 20, 0.18) 0%, rgba(5, 8, 20, 0.42) 35%, rgba(5, 8, 20, 0.78) 72%, rgba(5, 8, 20, 0.92) 100%)",
        }}
      />

      <HeroContent
        headline={headline}
        subheadline={subheadline}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
      />
    </section>
  );
}

function BackgroundSlideshow({ images }: { images: string[] }) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [state, setState] = useState<{ current: number; previous: number | null }>({
    current: 0,
    previous: null,
  });

  useEffect(() => {
    if (shouldReduceMotion || images.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setState((currentState) => ({
        current: (currentState.current + 1) % images.length,
        previous: currentState.current,
      }));
    }, BACKGROUND_CYCLE_MS);

    return () => window.clearInterval(intervalId);
  }, [images.length, shouldReduceMotion]);

  useEffect(() => {
    if (state.previous === null) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setState((currentState) =>
        currentState.previous === null
          ? currentState
          : { ...currentState, previous: null },
      );
    }, BACKGROUND_FADE_SECONDS * 1000);

    return () => window.clearTimeout(timeoutId);
  }, [state.previous]);

  return (
    <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence initial={false}>
        {state.previous !== null && (
          <motion.img
            key={`background-outgoing-${state.previous}`}
            alt=""
            aria-hidden="true"
            src={images[state.previous]}
            className="absolute inset-[-4%] h-[108%] w-[108%] object-cover blur-sm"
            initial={{ opacity: 1, scale: 1.04 }}
            animate={{
              opacity: 0,
              scale: shouldReduceMotion ? 1.04 : 1.1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: {
                duration: BACKGROUND_FADE_SECONDS,
                ease: "linear",
              },
              scale: {
                duration: shouldReduceMotion ? 0 : BACKGROUND_CYCLE_MS / 1000,
                ease: "linear",
              },
            }}
            style={LAYER_IMAGE_STYLE}
            draggable={false}
          />
        )}
      </AnimatePresence>

      <motion.img
        key={`background-current-${state.current}`}
        alt=""
        aria-hidden="true"
        src={images[state.current]}
        className="absolute inset-[-4%] h-[108%] w-[108%] object-cover blur-sm"
        initial={{
          opacity: state.previous === null ? 1 : 0,
          scale: 1,
        }}
        animate={{
          opacity: 1,
          scale: shouldReduceMotion ? 1 : 1.1,
        }}
        transition={{
          opacity: {
            duration: state.previous === null ? 0 : BACKGROUND_FADE_SECONDS,
            ease: "linear",
          },
          scale: {
            duration: shouldReduceMotion ? 0 : BACKGROUND_CYCLE_MS / 1000,
            ease: "linear",
          },
        }}
        style={LAYER_IMAGE_STYLE}
        draggable={false}
        fetchPriority={state.current === 0 ? "high" : "auto"}
      />

      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}

function MarqueeGrid({ images }: { images: string[] }) {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const shouldReduceMotion = useReducedMotion() ?? false;

  if (isDesktop === null) {
    return <StaticGrid images={images} />;
  }

  if (isDesktop) {
    const columns = buildTracks(images, 5, 5);

    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 flex items-stretch justify-center gap-4 overflow-hidden px-4 py-5 sm:px-6 lg:px-8"
      >
        {columns.map((columnImages, index) => (
          <MarqueeColumn
            key={`desktop-column-${index}`}
            images={columnImages}
            direction={index % 2 === 0 ? "up" : "down"}
            duration={18 + index * 2}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </div>
    );
  }

  const rows = buildTracks(images, 4, 6);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 grid grid-rows-4 gap-4 overflow-hidden px-4 py-6"
    >
      {rows.map((rowImages, index) => (
        <MarqueeRow
          key={`mobile-row-${index}`}
          images={rowImages}
          direction={index % 2 === 0 ? "left" : "right"}
          duration={20 + index * 2}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </div>
  );
}

const MarqueeRow = memo(function MarqueeRow({
  images,
  direction,
  duration,
  shouldReduceMotion,
}: {
  images: string[];
  direction: HorizontalDirection;
  duration: number;
  shouldReduceMotion: boolean;
}) {
  const duplicatedImages = [...images, ...images];
  const animateX =
    direction === "left" ? ["0px", LOOP_OFFSET] : [LOOP_OFFSET, "0px"];

  return (
    <div className="min-h-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        className="flex h-full w-max gap-4 will-change-transform"
        animate={shouldReduceMotion ? { x: 0 } : { x: animateX }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
              duration,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }
        }
        style={TRACK_STYLE}
      >
        {duplicatedImages.map((src, index) => (
          <MarqueeCard
            key={`${direction}-row-${index}-${src}`}
            src={src}
            className="h-full aspect-[3/4] w-auto"
          />
        ))}
      </motion.div>
    </div>
  );
});

const MarqueeColumn = memo(function MarqueeColumn({
  images,
  direction,
  duration,
  shouldReduceMotion,
}: {
  images: string[];
  direction: VerticalDirection;
  duration: number;
  shouldReduceMotion: boolean;
}) {
  const duplicatedImages = [...images, ...images];
  const animateY = direction === "up" ? ["0px", LOOP_OFFSET] : [LOOP_OFFSET, "0px"];

  return (
    <div className="min-w-0 flex-1 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        className="flex w-full flex-col gap-4 will-change-transform"
        animate={shouldReduceMotion ? { y: 0 } : { y: animateY }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
              duration,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }
        }
        style={TRACK_STYLE}
      >
        {duplicatedImages.map((src, index) => (
          <MarqueeCard
            key={`${direction}-column-${index}-${src}`}
            src={src}
            className="aspect-3/4 w-full"
          />
        ))}
      </motion.div>
    </div>
  );
});

function MarqueeCard({ src, className }: { src: string; className: string }) {
  return (
    <div className={`relative shrink-0 overflow-hidden rounded-2xl bg-white/10 shadow-2xl ${className}`}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}

const HeroContent = memo(function HeroContent({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
}: {
  headline: string;
  subheadline: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <motion.div
      className="relative z-30 mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center sm:px-8"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-white/75 backdrop-blur-sm">
      Loveworld Sons of Ministry
      </div>

      <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
        {headline}
      </h1>

      <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/78 sm:text-lg">
        {subheadline}
      </p>
      {ctaHref ?
        <a
          href={ctaHref}
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white px-6 text-sm font-semibold text-slate-950 transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          {ctaLabel}
        </a>
        : null
      }
    </motion.div>
  );
});

function StaticGrid({ images }: { images: string[] }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 grid grid-cols-3 gap-4 overflow-hidden px-4 py-6 opacity-80 sm:grid-cols-5 sm:px-6 lg:px-8"
    >
      {images.slice(0, 10).map((src, index) => (
        <div
          key={`static-grid-${index}-${src}`}
          className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/10 shadow-2xl"
        >
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateMatch);
      return () => mediaQuery.removeEventListener("change", updateMatch);
    }

    mediaQuery.addListener(updateMatch);
    return () => mediaQuery.removeListener(updateMatch);
  }, [query]);

  return matches;
}

function buildTracks(images: string[], trackCount: number, itemsPerTrack: number) {
  return Array.from({ length: trackCount }, (_, trackIndex) =>
    Array.from(
      { length: itemsPerTrack },
      (_, itemIndex) => images[(trackIndex * 2 + itemIndex) % images.length],
    ),
  );
}
