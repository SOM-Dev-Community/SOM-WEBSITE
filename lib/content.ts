"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ApiError, apiGet } from "@/lib/api";

// ───────────── Types (mirror the API responses) ─────────────

export type EventStatus = "live" | "upcoming" | "past" | "on-demand";
export type EventCategory = "SERVICE" | "CONFERENCE" | "WORKSHOP" | "PREMIUM";

export type SiteEvent = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string | null;
  category: EventCategory;
  status: EventStatus;
  /** ISO timestamps; null for on-demand events. */
  startsAt: string | null;
  endsAt: string | null;
  timezone: string;
  externalUrl: string | null;
  isPkn: boolean;
  featured: boolean;
};

export type PostCategory = { id: string; name: string; slug: string; postCount: number };

export type PostSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImageUrl: string | null;
  videoUrl: string | null;
  authorName: string;
  authorRole: string | null;
  readingMinutes: number | null;
  featured: boolean;
  publishedAt: string;
  category: { name: string; slug: string } | null;
};

export type Post = PostSummary & { content: string; updatedAt: string };

export type MagazineIssue = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  coverUrl: string;
  highlights: string[];
  /** Page images in reading order */
  pages: string[];
  author: string | null;
  readingTime: string | null;
  /** Downloadable PDF */
  fileUrl: string | null;
  /** Online reader */
  readUrl: string | null;
  publishedAt: string;
};

export type Testimony = {
  id: string;
  name: string;
  location: string | null;
  /** Short quote for the cards */
  quote: string;
  /** Headline and full story for the featured testimony */
  title: string | null;
  body: string | null;
  thumbnailUrl: string | null;
  videoUrl: string | null;
  featured: boolean;
};

export type SiteVideo = {
  id: string;
  title: string;
  description: string | null;
  thumbnailUrl: string | null;
  /** Embeddable player link or an uploaded video file */
  embedUrl: string;
  collection: string;
};

export type ProductAvailability = "AVAILABLE" | "COMING_SOON";

export type Product = {
  id: string;
  /** Short name, used on the Explore page */
  title: string;
  /** Home page card headline */
  tagline: string | null;
  description: string;
  imageUrl: string | null;
  /** lucide-react icon name, e.g. "GraduationCap" */
  icon: string | null;
  actionLabel: string;
  href: string | null;
  availability: ProductAvailability;
  showOnHome: boolean;
  showOnExplore: boolean;
  sortOrder: number;
};

export type Paginated<T> ={ items: T[]; page: number; pageSize: number; total: number; totalPages: number };

// ───────────── Queries ─────────────

export type EventsQuery = {
  category?: EventCategory;
  status?: EventStatus[];
  network?: "pkn";
  limit?: number;
};

export function useEvents({ category, status, network, limit }: EventsQuery) {
  return useQuery({
    queryKey: ["events", { category, status, network, limit }],
    queryFn: () =>
      apiGet<{ items: SiteEvent[] }>("/events", {
        category: category?.toLowerCase(),
        status: status?.join(","),
        network,
        limit,
      }),
    select: (data) => data.items,
    // Statuses are time-based; refresh so "upcoming" flips to "live" without a reload.
    refetchInterval: 60_000,
  });
}

export function usePosts({ category, page, pageSize }: { category?: string; page: number; pageSize?: number }) {
  return useQuery({
    queryKey: ["posts", { category, page, pageSize }],
    queryFn: () => apiGet<Paginated<PostSummary>>("/posts", { category, page, pageSize }),
    placeholderData: keepPreviousData,
  });
}

/** Resolves to null when nothing is featured (the API answers 404). */
export function useFeaturedPost() {
  return useQuery({
    queryKey: ["posts", "featured"],
    queryFn: () =>
      apiGet<PostSummary>("/posts/featured").catch((error) => {
        if (error instanceof ApiError && error.status === 404) return null;
        throw error;
      }),
  });
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: ["posts", "detail", slug],
    queryFn: () => apiGet<Post>(`/posts/${encodeURIComponent(slug)}`),
    retry: (count, error) => !(error instanceof ApiError && error.status === 404) && count < 2,
  });
}

export function usePostCategories() {
  return useQuery({
    queryKey: ["post-categories"],
    queryFn: () => apiGet<{ items: PostCategory[] }>("/post-categories"),
    select: (data) => data.items,
  });
}

export function useMagazines() {
  return useQuery({
    queryKey: ["magazines"],
    queryFn: () => apiGet<{ items: MagazineIssue[] }>("/magazines"),
    select: (data) => data.items,
  });
}

export function useMagazine(slug: string) {
  return useQuery({
    queryKey: ["magazines", "detail", slug],
    queryFn: () => apiGet<MagazineIssue>(`/magazines/${encodeURIComponent(slug)}`),
    retry: (count, error) => !(error instanceof ApiError && error.status === 404) && count < 2,
  });
}

/** Resolves to null when no issue is published yet (the API answers 404). */
export function useLatestMagazine() {
  return useQuery({
    queryKey: ["magazines", "latest"],
    queryFn: () =>
      apiGet<MagazineIssue>("/magazines/latest").catch((error) => {
        if (error instanceof ApiError && error.status === 404) return null;
        throw error;
      }),
  });
}

/** `featured: true` for the featured testimony, `false` for the cards. */
export function useTestimonies({ featured, limit }: { featured?: boolean; limit?: number }) {
  return useQuery({
    queryKey: ["testimonies", { featured, limit }],
    queryFn: () =>
      apiGet<{ items: Testimony[] }>("/testimonies", {
        featured: featured === undefined ? undefined : String(featured),
        limit,
      }),
    select: (data) => data.items,
  });
}

export function useVideos(collection: string) {
  return useQuery({
    queryKey: ["videos", collection],
    queryFn: () => apiGet<{ items: SiteVideo[] }>("/videos", { collection }),
    select: (data) => data.items,
  });
}

export function useProducts(placement: "home" | "explore") {
  return useQuery({
    queryKey: ["products", placement],
    queryFn: () => apiGet<{ items: Product[] }>("/products", { placement }),
    select: (data) => data.items,
  });
}

// ───────────── Formatting ─────────────

/** Uploaded video files play natively; other video links are embeddable players. */
export function isVideoFile(url: string) {
  return /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(url) || /res\.cloudinary\.com\/[^/]+\/video\/upload\//.test(url);
}

// Intl renders Africa/Lagos as "GMT+1"; the ministry's audience knows it as WAT.
const TIMEZONE_LABELS: Record<string, string> = { "Africa/Lagos": "WAT" };

/** e.g. "Sun, Oct 5, 3:00 PM WAT" in the event's own timezone. */
export function formatEventTime(event: Pick<SiteEvent, "startsAt" | "timezone">) {
  if (!event.startsAt) return "On demand";
  const label = TIMEZONE_LABELS[event.timezone];
  const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: event.timezone,
    ...(label ? {} : { timeZoneName: "short" }),
  }).format(new Date(event.startsAt));
  return label ? `${formatted} ${label}` : formatted;
}

/** Day/month and year parts for date badges, in the event's timezone. */
export function eventDateParts(event: Pick<SiteEvent, "startsAt" | "timezone">) {
  if (!event.startsAt) return null;
  const date = new Date(event.startsAt);
  return {
    dayMonth: new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: event.timezone }).format(date),
    year: new Intl.DateTimeFormat("en-US", { year: "numeric", timeZone: event.timezone }).format(date),
  };
}

export function formatPostDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(iso));
}

const toCalendarStamp = (iso: string) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

/** Google Calendar "add event" link, or null for events without times. */
export function googleCalendarUrl(event: SiteEvent) {
  if (!event.startsAt || !event.endsAt) return null;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    details: event.description,
    dates: `${toCalendarStamp(event.startsAt)}/${toCalendarStamp(event.endsAt)}`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

const escapeIcs = (value: string) => value.replace(/\\/g, "\\\\").replace(/([,;])/g, "\\$1").replace(/\r?\n/g, "\\n");

/** data: URI for an .ics file, or null for events without times. */
export function icsHref(event: SiteEvent) {
  if (!event.startsAt || !event.endsAt) return null;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Loveworld Sons of Ministry//Events//EN",
    "BEGIN:VEVENT",
    `UID:${event.id}@loveworldsonsofministry.org`,
    `DTSTAMP:${toCalendarStamp(new Date().toISOString())}`,
    `DTSTART:${toCalendarStamp(event.startsAt)}`,
    `DTEND:${toCalendarStamp(event.endsAt)}`,
    `SUMMARY:${escapeIcs(event.title)}`,
    `DESCRIPTION:${escapeIcs(event.description)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
}
