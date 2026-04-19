export const HEADER_Z = {
  scrim: "z-40",
  shell: "z-50",
  panel: "z-10",
  background: "z-0",
  cursor: "z-0",
  chip: "z-10",
  item: "z-10",
  label: "z-20",
} as const;

export const navLinks = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About Us" },
  { link: "/preacher-kids", label: "Preachers Network" },
  { link: "/explore", label: "Explore" },
  { link: "/blog", label: "Blog" },
] as const;

export const dark_glassmorphism =
  "border-white/20 bg-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur-xl";

export const light_glassmorphism =
  "border-white/70 bg-white/80 shadow-[0_20px_55px_rgba(15,23,42,0.18)] backdrop-blur-2xl";
