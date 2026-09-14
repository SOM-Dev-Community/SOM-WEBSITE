import { imageList } from "@/public/images_list";

// NOTE: The testimonies, events and videos below are placeholder content taken from the Figma design.
// Replace them with real entries (and real video links) before this page goes live.

export const SOM_VIDEO_EMBED = "https://player.vimeo.com/video/1100718405?h=b886da83be";

export type Testimony = {
  quote: string;
  name: string;
  location: string;
};

export type PknEvent = {
  date: string;
  year: string;
  title: string;
  description: string;
  href: string;
};

export type PknVideo = {
  title: string;
  description: string;
  thumbnail: string;
  embedUrl: string;
};

export const featuredTestimony = {
  title: "Testimony of Supernatural Healing",
  body: "Share the full story of this testimony here: what happened, how God moved, and the change it brought to this preacher's kid and their family.",
  name: "Sam Christine",
  location: "CE, Nigeria",
  thumbnail: imageList.image_2.src,
  embedUrl: SOM_VIDEO_EMBED,
};

export const testimonies: Testimony[] = [
  {
    quote: "Being part of SOM has helped me connect with others who understand my unique experience.",
    name: "Sarah Johnson",
    location: "CE, Texas",
  },
  {
    quote: "The resources and support here have been invaluable in my journey.",
    name: "Michael Chen",
    location: "CE, California",
  },
  {
    quote: "Found my second family through SOM's community events.",
    name: "Rachel Thompson",
    location: "CE, New York",
  },
  {
    quote: "Being part of SOM has helped me connect with others who understand my unique experience.",
    name: "Sarah Johnson",
    location: "CE, Texas",
  },
  {
    quote: "The resources and support here have been invaluable in my journey.",
    name: "Michael Chen",
    location: "CE, California",
  },
  {
    quote: "Found my second family through SOM's community events.",
    name: "Rachel Thompson",
    location: "CE, New York",
  },
];

export const upcomingEvents: PknEvent[] = [
  {
    date: "Mar 15",
    year: "2025",
    title: "Fortify Summit",
    description: "Join us for our biggest event of the year!",
    href: "/events",
  },
  {
    date: "Apr 5",
    year: "2025",
    title: "Virtual Meetup",
    description: "Monthly online gathering for PKN members.",
    href: "/events",
  },
  {
    date: "May 20",
    year: "2025",
    title: "Leadership Workshop",
    description: "Special workshop for young leaders.",
    href: "/events",
  },
];

export const pknVideos: PknVideo[] = [
  {
    title: "Finding Your Identity",
    description: "Keynote speech from PKN Summit 2024",
    thumbnail: imageList.pks_1.src,
    embedUrl: SOM_VIDEO_EMBED,
  },
  {
    title: "Worship Night",
    description: "Evening session highlights",
    thumbnail: imageList.b_2.src,
    embedUrl: SOM_VIDEO_EMBED,
  },
  {
    title: "Group Sessions",
    description: "Community building workshops",
    thumbnail: imageList.pks_2.src,
    embedUrl: SOM_VIDEO_EMBED,
  },
  {
    title: "Finding Your Identity",
    description: "Keynote speech from PKN Summit 2024",
    thumbnail: imageList.b_1.src,
    embedUrl: SOM_VIDEO_EMBED,
  },
  {
    title: "Worship Night",
    description: "Evening session highlights",
    thumbnail: imageList.wsa_2.src,
    embedUrl: SOM_VIDEO_EMBED,
  },
  {
    title: "Group Sessions",
    description: "Community building workshops",
    thumbnail: imageList.b_4.src,
    embedUrl: SOM_VIDEO_EMBED,
  },
];

export const latestMagazine = {
  title: "SOM Magazine 2024",
  cover: "https://i.postimg.cc/JzdHsSWm/MAG3.jpg",
};
