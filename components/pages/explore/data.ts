import { BookOpen, GraduationCap, Headphones, Tv, type LucideIcon } from "lucide-react";

export type Product = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Internal path or external URL. Products without one show "Coming soon". */
  href?: string;
};

export const products: Product[] = [
  {
    title: "SOMLA",
    description: "Your gateway to comprehensive biblical education and spiritual growth.",
    icon: GraduationCap,
    href: "https://somla.loveworldsonsofministry.org/",
  },
  {
    title: "SOM TV",
    description: "Stream inspiring content and educational videos anytime, anywhere.",
    icon: Tv,
  },
  {
    title: "4:12 Podcast",
    description: "Listen to thought-provoking discussions and spiritual insights on the go.",
    icon: Headphones,
  },
  {
    title: "Preacher's Kid Magazine",
    description: "Engaging stories and articles for the next generation of believers.",
    icon: BookOpen,
    href: "/magazine",
  },
];
