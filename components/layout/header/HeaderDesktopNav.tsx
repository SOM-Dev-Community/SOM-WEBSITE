"use client";

import { useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { HEADER_Z, light_glassmorphism, navLinks } from "./constants";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type HeaderDesktopNavProps = {
  isOverlayStyle: boolean;
};

export function HeaderDesktopNav({
  isOverlayStyle,
}: HeaderDesktopNavProps) {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav
      onMouseLeave={() => {
        setPosition((previous) => ({
          ...previous,
          opacity: 0,
        }));
      }}
      className={cn(
        "relative hidden overflow-hidden rounded-[28px] border p-1 transition-all duration-300 lg:flex lg:items-center lg:gap-1",
        isOverlayStyle
          ? "border-white/20 bg-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl"
          : light_glassmorphism
      )}
    >
      <div
        className={cn(
          HEADER_Z.background,
          "pointer-events-none absolute inset-0",
          isOverlayStyle
            ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04)_45%,rgba(96,165,250,0.12))]"
            : "bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(239,246,255,0.92)_40%,rgba(219,234,254,0.7))]"
        )}
      />

      {navLinks.map(({ link, label }) => (
        <HeaderNavLinkTab
          key={link}
          href={link}
          isOverlayStyle={isOverlayStyle}
          setPosition={setPosition}
        >
          {label}
        </HeaderNavLinkTab>
      ))}

      <Cursor position={position} isOverlayStyle={isOverlayStyle} />
    </nav>
  );
}

type HeaderNavLinkTabProps = React.ComponentProps<typeof Link> & {
  children: ReactNode;
  setPosition: Dispatch<SetStateAction<Position>>;
  isOverlayStyle: boolean;
};

function HeaderNavLinkTab({
  children,
  setPosition,
  isOverlayStyle,
  href,
  ...props
}: HeaderNavLinkTabProps) {
  const pathname = usePathname();

  // Logic to determine active state:
  // Exact match for the root "/", otherwise checks if the current pathname starts with the link's href
  const isActive = href === "/" ? pathname === href : pathname?.startsWith(href.toString());

  return (
    <Link
      href={href}
      {...props}
      onMouseEnter={(event) => {
        const element = event.currentTarget;
        const { width } = element.getBoundingClientRect();

        setPosition({
          left: element.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={cn(
        HEADER_Z.item,
        "relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
        isActive
          ? "text-white shadow-[0_10px_24px_rgba(37,99,235,0.32)]"
          : isOverlayStyle
            ? "text-white/80 hover:text-white"
            : "text-slate-700 hover:text-blue-700"
      )}
    >
      <span className={cn(HEADER_Z.label, "relative")}>{children}</span>
      <ActiveChip active={isActive} />
    </Link>
  );
}

function Cursor({
  position,
  isOverlayStyle,
}: {
  position: Position;
  isOverlayStyle: boolean;
}) {
  return (
    <motion.span
      animate={position}
      className={cn(
        HEADER_Z.cursor,
        "absolute rounded-full py-4",
        isOverlayStyle
          ? "bg-white/10 shadow-[0_12px_24px_rgba(255,255,255,0.1)]"
          : "bg-blue-50 shadow-[0_12px_24px_rgba(37,99,235,0.1)]"
      )}
    />
  );
}

function ActiveChip({ active }: { active: boolean }) {
  return active ? (
    <motion.span
      layoutId="active-chip"
      className={cn(
        HEADER_Z.chip,
        "absolute inset-0 rounded-full bg-blue-600 shadow-[0_10px_24px_rgba(37,99,235,0.32)]"
      )}
    />
  ) : null;
}