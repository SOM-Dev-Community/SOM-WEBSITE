import { NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { HEADER_Z, navLinks } from "./constants";
import { HeaderWatchLiveButton } from "./HeaderWatchLiveButton";

type HeaderMobileMenuProps = {
  isOpen: boolean;
  isOverlayStyle: boolean;
  onClose: () => void;
};

export function HeaderMobileMenu({
  isOpen,
  isOverlayStyle,
  onClose,
}: HeaderMobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Button
        type="button"
        aria-label="Close menu overlay"
        className={cn("fixed inset-0 lg:hidden", HEADER_Z.scrim)}
        onClick={onClose}
      />

      <div
        className={cn(
          HEADER_Z.panel,
          "relative mt-3 overflow-hidden rounded-2xl border p-1 backdrop-blur-2xl lg:hidden",
          isOverlayStyle
            ? "border-white/20 bg-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl"
            : "border-white/70 bg-white/90 shadow-[0_20px_55px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
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

        <div className={cn(HEADER_Z.item, "relative")}>
          <nav className="space-y-1">
            {navLinks.map(({ link, label }) => (
              <NavLink
                key={link}
                to={link}
                end={link === "/"}
                className={({ isActive }) =>
                  cn(
                    "block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "bg-blue-600 text-white shadow-[0_12px_24px_rgba(37,99,235,0.22)]"
                      : isOverlayStyle
                        ? "text-white/80 hover:bg-white/10 hover:text-white"
                        : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-3 border-t border-slate-200/80 pt-3">
            <HeaderWatchLiveButton className="w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}
