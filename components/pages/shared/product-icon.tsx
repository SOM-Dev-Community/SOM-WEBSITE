import {
  BookOpen,
  Calendar,
  Church,
  Globe,
  GraduationCap,
  HandHeart,
  Headphones,
  Heart,
  Library,
  Mic,
  MonitorPlay,
  Newspaper,
  Podcast,
  Radio,
  Smartphone,
  Sparkles,
  Tv,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

// Products store their icon as a name. Only these icons are bundled; keep the list in sync with
// cms/components/product-icon.tsx, which offers the same names to editors.
const PRODUCT_ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Calendar,
  Church,
  Globe,
  GraduationCap,
  HandHeart,
  Headphones,
  Heart,
  Library,
  Mic,
  MonitorPlay,
  Newspaper,
  Podcast,
  Radio,
  Smartphone,
  Sparkles,
  Tv,
  Users,
  Video,
};

/** Unknown or missing names fall back to a generic icon rather than rendering nothing. */
export function ProductIcon({ name, className }: { name: string | null; className?: string }) {
  const Icon = (name && PRODUCT_ICONS[name]) || Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
