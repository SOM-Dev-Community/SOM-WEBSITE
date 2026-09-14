"use client";

import { useEffect, useState, type RefObject } from "react";
import { usePathname } from "next/navigation";

export type NavTheme = "light" | "dark";

/**
 * Detects whether the page behind the header is light or dark, so the header can
 * switch between dark and white text. Updates on scroll, resize and route change.
 *
 * Detection reads the first solid background colour behind the header. Sections whose
 * background is an image or gradient (no solid colour) should declare it explicitly:
 * <section data-nav-theme="dark">.
 */
export function useNavTheme(headerRef: RefObject<HTMLElement | null>): NavTheme {
  const [theme, setTheme] = useState<NavTheme>("dark");
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const header = headerRef.current;
        if (!header) return;

        const rect = header.getBoundingClientRect();
        if (rect.bottom <= 0) return;

        setTheme(themeBehind(header, Math.max(1, rect.top + rect.height / 2)));
      });
    };

    update();
    // Page sections fade/slide in after mount; re-check once they've settled.
    const settleTimeout = window.setTimeout(update, 700);

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settleTimeout);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [headerRef, pathname]);

  return theme;
}

function themeBehind(header: HTMLElement, y: number): NavTheme {
  // Sample in the page gutter so cards inside a section don't flip the header.
  for (const element of document.elementsFromPoint(8, y)) {
    if (header.contains(element)) continue;

    const declared = element.getAttribute("data-nav-theme");
    if (declared === "light" || declared === "dark") return declared;

    const rgba = toRgba(getComputedStyle(element).backgroundColor);
    if (rgba && rgba[3] > 0.5) {
      const brightness = (0.299 * rgba[0] + 0.587 * rgba[1] + 0.114 * rgba[2]) / 255;
      return brightness > 0.6 ? "light" : "dark";
    }
  }

  return "light";
}

let colorContext: CanvasRenderingContext2D | null = null;

// Paints the colour onto a 1x1 canvas so every CSS colour format (rgb, oklch, lab…) reads back as sRGB bytes.
function toRgba(color: string): [number, number, number, number] | null {
  if (!color || color === "transparent") return null;

  colorContext ??= Object.assign(document.createElement("canvas"), { width: 1, height: 1 }).getContext("2d", {
    willReadFrequently: true,
  });
  if (!colorContext) return null;

  colorContext.clearRect(0, 0, 1, 1);
  colorContext.fillStyle = color;
  colorContext.fillRect(0, 0, 1, 1);

  const [r, g, b, a] = colorContext.getImageData(0, 0, 1, 1).data;
  return [r, g, b, a / 255];
}
