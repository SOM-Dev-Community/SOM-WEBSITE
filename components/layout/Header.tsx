import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { HeaderBrand } from "./header/HeaderBrand";
import { HeaderDesktopNav } from "./header/HeaderDesktopNav";
import { HeaderMobileMenu } from "./header/HeaderMobileMenu";
import { HeaderWatchLiveButton } from "./header/HeaderWatchLiveButton";
import { HEADER_Z } from "./header/constants";

type HeaderProps = {
  type?: "default" | "transparent";
  position?: "fixed" | "absolute" | "relative";
  scrollEnabled?: boolean;
};

export const Header = ({
  type = "default",
  position = "fixed",
  scrollEnabled = true,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    if (scrollEnabled) {
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollEnabled]);

  // useEffect(() => {
  //   setIsMenuOpen(false);
  // }, [location.pathname]);

  const isOverlayStyle = type === "default" && !isScrolled && !isMenuOpen;

  return (
    <header
      className={cn(
        HEADER_Z.shell,
        "inset-x-0 top-0 px-4 pt-4 sm:px-6 lg:px-8",
        position
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative">
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
