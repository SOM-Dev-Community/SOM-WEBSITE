"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

// Building blocks shared by the PKN, Explore and Blog pages.

export const revealUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export const gradientButtonClass =
  "group flex w-fit items-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 bg-gradient-to-r from-indigo-600 to-[#8A7DFF] rounded-full text-white font-medium";

export const lightCardClass =
  "rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)]";

type SectionHeadingProps = {
  title: string;
  badge?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  title,
  badge,
  tone = "light",
  align = "left",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={cn("flex flex-col", align === "center" ? "items-center text-center" : "items-start", className)}>
      {badge && (
        <div
          className={cn(
            "mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] backdrop-blur-sm",
            isDark ? "border-white/15 bg-white/8 text-white/75" : "border-indigo-200 bg-indigo-50 text-indigo-700"
          )}
        >
          {badge}
        </div>
      )}

      <Heading
        className={cn(
          "text-2xl md:text-3xl uppercase font-bold tracking-wide",
          isDark ? "text-white" : "text-slate-800"
        )}
      >
        {title}
      </Heading>

      <div className="w-24 h-1 mt-4 rounded-full bg-linear-to-r from-indigo-600 to-[#DDD9FF]"></div>
    </div>
  );
}

/** Dark grid-backed section used at the top of pages (sits under the fixed header). */
export function DarkSection({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-slate-950 text-slate-50 pt-36 pb-24 sm:pb-28 lg:pb-32",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#260bca2e_1px,transparent_1px),linear-gradient(to_bottom,#260bca2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_55%_75%_at_50%_0%,#000_60%,transparent_80%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(130%_125%_at_50%_10%,rgba(255,255,255,0)_40%,rgba(28,15,179,0.55)_100%)]"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">{children}</div>
    </section>
  );
}

type BrandSectionProps = {
  children: ReactNode;
  className?: string;
  /** Decorative navy circles; "bottom" keeps the top-left clear for the header. */
  circles?: "both" | "bottom" | "none";
};

/** Brand-purple section with the decorative circles from the SOM magazine design. */
export function BrandSection({ children, className, circles = "both" }: BrandSectionProps) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-[#4B2AAD] text-white py-24 sm:py-28", className)}>
      {circles === "both" && (
        <div aria-hidden="true" className="absolute -left-28 -top-28 -z-10 hidden h-72 w-72 rounded-full bg-[#1E1B4B] ring-[20px] ring-white sm:block"></div>
      )}
      {circles !== "none" && (
        <div aria-hidden="true" className="absolute -bottom-44 -right-24 -z-10 hidden h-96 w-96 rounded-full bg-[#1E1B4B] ring-[20px] ring-white sm:block"></div>
      )}

      <div className="mx-auto max-w-7xl px-6 md:px-12">{children}</div>
    </section>
  );
}

export function InitialsAvatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-[#8A7DFF] text-sm font-semibold text-white",
        className
      )}
    >
      {initials}
    </span>
  );
}

export function ArrowIcon() {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
        fill="currentColor"
      />
    </svg>
  );
}

type VideoThumbnailProps = {
  title: string;
  thumbnail: string;
  embedUrl: string;
  sizes: string;
  className?: string;
};

// Shows the thumbnail with a play button; swaps in the video player on click.
export function VideoThumbnail({ title, thumbnail, embedUrl, sizes, className }: VideoThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={cn("relative aspect-video overflow-hidden bg-black", className)}>
      {isPlaying ? (
        <iframe
          src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
          className="absolute inset-0 h-full w-full"
        ></iframe>
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group absolute inset-0 cursor-pointer"
          aria-label={`Play ${title}`}
        >
          <Image
            src={thumbnail}
            alt=""
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-slate-950/25 transition-colors duration-300 group-hover:bg-slate-950/40" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-indigo-600 shadow-xl shadow-indigo-900/30 transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-6 w-6 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
