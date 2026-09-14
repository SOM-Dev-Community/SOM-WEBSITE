import { imageList } from "@/public/images_list";

export type LiveEvent = {
  title: string;
  description: string;
  time: string;
  status: "Live Now" | "Upcoming";
  /** Calendar window in UTC, formatted start/end, e.g. 20250820T180000Z/20250820T200000Z */
  calendarDates?: string;
};

// NOTE: both reminders still use the placeholder window carried over from the original page (20 Aug 2025).
// Set each event's real start/end before relying on the calendar buttons.
export const upcomingEvents: LiveEvent[] = [
  {
    title: "Your Loveworld Specials",
    description: "An immersive teaching session with Pastor Chris, bringing deep revelations from the Word of God.",
    time: "6:00 PM WAT",
    status: "Live Now",
  },
  {
    title: "Global Communion Service",
    description: "Join believers around the world in a time of fellowship, worship, and the breaking of bread.",
    time: "Oct 5, 3:00 PM WAT",
    status: "Upcoming",
    calendarDates: "20250820T180000Z/20250820T200000Z",
  },
  {
    title: "Praise Night With Pastor Chris",
    description: "A night filled with spirit-lifting songs, worship, and prophetic declarations.",
    time: "Sept 21, 2:00 PM WAT",
    status: "Upcoming",
    calendarDates: "20250820T180000Z/20250820T200000Z",
  },
];

export const eventHighlights = [
  imageList.pks_1.src,
  imageList.pks_2.src,
  imageList.pks_3.src,
  imageList.b_1.src,
  imageList.b_2.src,
  imageList.wsa_1.src,
  imageList.wsa_2.src,
];
