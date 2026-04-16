import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, NavLinkProps, useLocation } from "react-router-dom";
import { ArrowRight, Menu, TvMinimalPlay, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeaderProps = {
  type?: "default" | "transparent";
  position?: "fixed" | "absolute" | "relative";
  scrollEnabled?: boolean;
};

const navLinks = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About Us" },
  { link: "/preachers", label: "Preachers Network" },
  { link: "/explore", label: "Explore" },
  { link: "/blog", label: "Blog" },
  // { link: "/events", label: "Live Events" },
];

export const dark_glassmorphism = "border-white/20 bg-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl";
export const light_glassmorphism = "border-white/70 bg-white/80 shadow-[0_20px_55px_rgba(15,23,42,0.18)] backdrop-blur-2xl";


export const Header = ({ type = "default", position = "fixed", scrollEnabled = true }: HeaderProps) => {
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
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isOverlayStyle = type === "default" && !isScrolled && !isMenuOpen;

  return (
    <>
      {isMenuOpen ? (
        <Button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : null}

      <header className={cn("inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8", position)}>
        <div className="mx-auto max-w-7xl">
          <div
            className={cn(
              "relative",
            )}
          >
            <div className="relative flex h-20 items-center justify-between gap-4 px-4 sm:px-6">
              <Link to="/" className="group flex min-w-0 items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 shadow-[0_10px_24px_rgba(37,99,235,0.18)] ring-1 ring-blue-100/80 transition-transform duration-300 group-hover:scale-[1.03]">
                  <img
                    src="https://i.postimg.cc/SQPp9f9c/logo-sm.png"
                    alt="SOM Logo"
                    className="h-9 w-auto"
                  />
                </div>

                <div className="hidden min-w-0 sm:block">
                  <p
                    className={cn(
                      "text-[0.65rem] font-semibold uppercase tracking-[0.28em]",
                      isOverlayStyle ? "text-white/70" : "text-blue-600/75",
                    )}
                  >
                    Loveworld
                  </p>
                  <p
                    className={cn(
                      "truncate text-sm font-semibold",
                      isOverlayStyle ? "text-white" : "text-slate-900",
                    )}
                  >
                    Sons of Ministry
                  </p>
                </div>
              </Link>
              <NavLinks isOverlayStyle={isOverlayStyle} />

              <div className="hidden lg:block">
                <Button
                  asChild
                  className="h-11 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 px-5 text-white shadow-[0_14px_30px_rgba(37,99,235,0.26)] hover:from-blue-700 hover:via-blue-600 hover:to-sky-500"
                >
                  <Link to="/events">
                    <TvMinimalPlay className="size-4" />
                    Watch Live
                  </Link>
                </Button>
              </div>

              <Button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-200 lg:hidden",
                  isOverlayStyle
                    ? "border-white/20 bg-white/12 text-white hover:bg-white/18"
                    : "border-slate-200 bg-slate-50 text-slate-800 hover:bg-white",
                )}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </Button>
            </div>
          </div>
          {isMenuOpen ? (
            <div
              className={cn("relative z-20 mt-3 rounded-2xl p-1 overflow-hidden border backdrop-blur-2xl lg:hidden",
                isOverlayStyle
                  ? "border-white/20 bg-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl"
                  : "border-white/70 bg-white/90 shadow-[0_20px_55px_rgba(15,23,42,0.18)] backdrop-blur-2xl",

              )}>
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 -z-10",
                  isOverlayStyle
                    ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04)_45%,rgba(96,165,250,0.12))]"
                    : "bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(239,246,255,0.92)_40%,rgba(219,234,254,0.7))]",
                )}
              />
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
                            ? "text-white/80 hover:text-white hover:bg-white/10"
                            : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                      )
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-3 border-t border-slate-200/80 pt-3">
                <Button
                  asChild
                  className="h-11 w-full rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] hover:from-blue-700 hover:via-blue-600 hover:to-sky-500"
                >
                  <Link to="/events">
                    <TvMinimalPlay className="size-4" />
                    Watch Live
                  </Link>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
};

const Cursor = ({ position, isOverlayStyle }: { position: Position; isOverlayStyle: boolean }) => {
  return (
    <motion.span
      animate={{
        ...position,
      }}
      className={cn(
        "absolute z-0 rounded-full py-4",
        isOverlayStyle ? "bg-white/10 shadow-[0_12px_24px_rgba(255,255,255,0.1)]" : "bg-blue-50 shadow-[0_12px_24px_rgba(37,99,235,0.1)]",
      )}
    />
  );
};

const ActiveChip = ({ active, isOverlayStyle }: { active: boolean; isOverlayStyle: boolean }) => {
  return (
    <motion.span
      layoutId="active-chip"
      className={cn(
        "absolute z-10 inset-0 rounded-full transition-all duration-300",
        active
          ? "bg-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.32)]"
          : "bg-transparent",
      )}
    />
  );
}
const NavLinks = ({ isOverlayStyle }: { isOverlayStyle: boolean }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });


  return (
    <nav
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={
        cn("hidden relative p-1 overflow-hidden lg:flex lg:items-center lg:gap-1 rounded-[28px] border transition-all duration-300",
          isOverlayStyle
            ? "border-white/20 bg-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl"
            : "border-white/70 bg-white/80 shadow-[0_20px_55px_rgba(15,23,42,0.18)] backdrop-blur-2xl",

        )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0",
          isOverlayStyle
            ? "bg-[linear-gradient(135deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04)_45%,rgba(96,165,250,0.12))]"
            : "bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(239,246,255,0.92)_40%,rgba(219,234,254,0.7))]",
        )}
      />
      {
        navLinks.map(({ link, label }) => (
          <NavLinkTab
            key={link}
            to={link}
            end={link === "/"}
            isOverlayStyle={isOverlayStyle}
            setPosition={setPosition}
          >
            {label}
          </NavLinkTab>
        ))
      }
      <Cursor position={position} isOverlayStyle={isOverlayStyle} />
    </nav >
  )
}

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type NavLinkTabProps = NavLinkProps & {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  isOverlayStyle: boolean;
  isActive?: boolean;
};

export const NavLinkTab = ({
  children,
  setPosition,
  isActive,
  isOverlayStyle,
  ...props
}: NavLinkTabProps) => {
  return (
    <NavLink
      {...props}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        const { width } = el.getBoundingClientRect();
        setPosition({
          left: el.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={({ isActive }) =>
        cn(
          "rounded-full z-10 relative px-4 py-2 text-sm font-semibold transition-all duration-200",
          isActive
            ? "text-white shadow-[0_10px_24px_rgba(37,99,235,0.32)]"
            : isOverlayStyle
              ? "text-white/80 hover:text-white"
              : "text-slate-700 hover:text-blue-700"
        )
      }
    >
      {(props) => (
        <>
          <span className="relative z-20">
            {children}
          </span>
          <ActiveChip active={props.isActive} isOverlayStyle={isOverlayStyle} />
        </>
      )}
    </NavLink>
  );
};