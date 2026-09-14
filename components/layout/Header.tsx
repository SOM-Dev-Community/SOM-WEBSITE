"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { HeaderBrand } from "./header/HeaderBrand";
import { HeaderDesktopNav } from "./header/HeaderDesktopNav";
import { HeaderMobileMenu } from "./header/HeaderMobileMenu";
import { HeaderWatchLiveButton } from "./header/HeaderWatchLiveButton";
import { HEADER_Z } from "./header/constants";
import { useNavTheme } from "./header/use-nav-theme";

type HeaderProps = {
  position?: "fixed" | "absolute" | "relative";
};

export const Header = ({ position = "fixed" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navTheme = useNavTheme(headerRef);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // White text over dark backgrounds; dark text over light ones and while the mobile menu is open.
  const isOverlayStyle = navTheme === "dark" && !isMenuOpen;
  // Once content scrolls under a fixed header, give it a frosted bar so text never sits directly on content.
  const showBar = isScrolled && position === "fixed";

  return (
    <header
      ref={headerRef}
      className={cn(
        HEADER_Z.shell,
        "inset-x-0 top-0 px-4 pt-4 sm:px-6 lg:px-8",
        position
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "relative rounded-[28px] border transition-all duration-300",
            !showBar && "border-transparent",
            showBar && isOverlayStyle &&
              "border-white/10 bg-slate-950/45 shadow-[0_18px_45px_rgba(2,6,23,0.35)] backdrop-blur-xl",
            showBar && !isOverlayStyle &&
              "border-slate-200/70 bg-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl"
          )}
        >
          <div className="relative flex h-20 items-center justify-between gap-4 px-4 sm:px-6">
            <HeaderBrand isOverlayStyle={isOverlayStyle} />
            <HeaderDesktopNav isOverlayStyle={isOverlayStyle} />

            <div className="hidden lg:block">
              <HeaderWatchLiveButton className="px-5" />
            </div>

            <Button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-200 lg:hidden",
                isOverlayStyle
                  ? "border-white/20 bg-white/12 text-white hover:bg-white/18"
                  : "border-slate-200 bg-slate-50 text-slate-800 hover:bg-white"
              )}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>

        <HeaderMobileMenu
          isOpen={isMenuOpen}
          isOverlayStyle={isOverlayStyle}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  );
};
