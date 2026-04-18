"use client";

import type { MotionValue, PanInfo } from "framer-motion";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { useState } from "react";
import Image from "next/image";

type Props = {
  images?: string[];
  maxItems?: number;
};

// Use absolute paths referencing the public directory
const FALLBACK_IMAGES = [
  "/assets/PKS1.jpg",
  "/assets/PKS2.jpg",
  "/assets/WSA2.jpg",
  "/assets/WSA3.jpg",
  "/assets/B1.jpg",
  "/assets/B2.jpg",
  "/assets/banner-2.jpg",
  "/assets/som.webp",
];

const TRACK_START = {
  x: -385,
  y: 134.75,
  z: 462,
};

const TRACK_STEP = {
  x: 240,
  y: -84,
  z: -288,
};

const FRONT_WRAP = 11;
const BACK_WRAP = 15;
const TRACK_LENGTH = FRONT_WRAP + BACK_WRAP;

const OFFSET_SPRING = {
  stiffness: 160,
  damping: 30,
  mass: 0.45,
};

const VELOCITY_SPRING = {
  stiffness: 150,
  damping: 32,
  mass: 0.35,
};

export default function HeroVelocityGallery({
  images,
  maxItems = TRACK_LENGTH,
}: Props) {
  const galleryImages =
    images && images.length > 0 ? images : FALLBACK_IMAGES;
  const planeCount = Math.max(TRACK_LENGTH, maxItems);

  const offset = useMotionValue(0);
  const smoothOffset = useSpring(offset, OFFSET_SPRING);
  const velocity = useVelocity(smoothOffset);
  const smoothVelocity = useSpring(velocity, VELOCITY_SPRING);

  const [isDragging, setIsDragging] = useState(false);

  const nudgeOffset = (delta: number) => {
    offset.set(offset.get() + delta);
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    nudgeOffset(event.deltaY * 0.0036);
  };

  const handlePan = (
    _event: PointerEvent | MouseEvent | TouchEvent,
    info: PanInfo,
  ) => {
    const dominantDelta =
      Math.abs(info.delta.x) > Math.abs(info.delta.y)
        ? -info.delta.x
        : info.delta.y;

    if (dominantDelta !== 0) {
      nudgeOffset(dominantDelta * 0.0085);
    }
  };

  return (
    <motion.div
      onWheel={handleWheel}
      onPan={handlePan}
      onPanStart={() => setIsDragging(true)}
      onPanEnd={() => setIsDragging(false)}
      className="relative w-full "
      style={{
        height: "min(82vh, 760px)",
        minHeight: 460,
        touchAction: "none",
        userSelect: "none",
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <div className="absolute inset-0" />

      <div
        className="relative flex h-full w-full items-center justify-center overflow-hidden"
        style={{
          perspective: "2000px",
          perspectiveOrigin: "10% 10%",
        }}
      >
        <motion.div
          className="relative flex h-full w-full items-center justify-center"
          style={{
            y: 100,
            transformStyle: "preserve-3d",
          }}
        >
          {Array.from({ length: planeCount }, (_, index) => (
            <Plane
              key={`${index}-${galleryImages[index % galleryImages.length]}`}
              index={index}
              offset={smoothOffset}
              velocity={smoothVelocity}
              src={galleryImages[index % galleryImages.length]}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

type PlaneProps = {
  index: number;
  offset: MotionValue<number>;
  velocity: MotionValue<number>;
  src: string; // Strictly strings now since we are using public paths
};

function Plane({ index, offset, velocity, src }: PlaneProps) {
  const hover = useMotionValue(0);
  const hoverLift = useSpring(hover, {
    stiffness: 260,
    damping: 28,
    mass: 0.28,
  });

  const slot = useTransform(offset, (value) =>
    wrap(-FRONT_WRAP, BACK_WRAP, index - value),
  );

  // Modern pattern: read values via .get() to avoid TS Tuple errors
  const wave = useTransform(() => {
    const currentSlot = slot.get();
    const currentVelocity = velocity.get();
    const amplitude = Math.min(90, Math.abs(currentVelocity) * 18);
    return Math.sin(currentSlot * 0.85) * amplitude;
  });

  const x = useTransform(
    slot,
    (currentSlot) => TRACK_START.x + TRACK_STEP.x * currentSlot,
  );
  
  const y = useTransform(() => {
    return (
      TRACK_START.y +
      TRACK_STEP.y * slot.get() -
      wave.get() * 0.32 -
      hoverLift.get() * 18
    );
  });
  
  const z = useTransform(() => {
    return (
      TRACK_START.z +
      TRACK_STEP.z * slot.get() +
      wave.get() +
      hoverLift.get() * 170
    );
  });

  const rotateY = useTransform(() => {
    return -50 + wave.get() * 0.03 + hoverLift.get() * 4;
  });

  const scale = useTransform(hoverLift, [0, 1], [1, 1.03]);
  
  const brightness = useTransform(() => {
    return (
      1 + Math.min(0.18, Math.abs(wave.get()) * 0.0018) + hoverLift.get() * 0.12
    );
  });
  
  const filter = useTransform(brightness, (value) => `brightness(${value})`);

  const boxShadow = useTransform(() => {
    const currentWave = wave.get();
    const currentHover = hoverLift.get();
    const blur = 50 + Math.abs(currentWave) * 0.12 + currentHover * 28;
    const spread = -12 + currentHover * 6;
    const alpha = 0.25 + currentHover * 0.18;

    return `0 25px ${blur}px ${spread}px rgba(0, 0, 0, ${alpha})`;
  });

  return (
    <motion.div
      onHoverStart={() => hover.set(1)}
      onHoverEnd={() => hover.set(0)}
      style={{
        position: "absolute",
        width: "clamp(220px, 24vw, 320px)",
        aspectRatio: "5 / 6",
        x,
        y,
        z,
        rotateY,
        scale,
        filter,
        boxShadow,
        transformStyle: "preserve-3d",
        willChange: "transform, filter",
        backfaceVisibility: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <Image
          src={src}
          alt={`Gallery plane ${index + 1}`}
          fill
          draggable={false}
          style={{
            objectFit: "cover",
            display: "block",
            pointerEvents: "none",
          }}
        />
      </div>
    </motion.div>
  );
}