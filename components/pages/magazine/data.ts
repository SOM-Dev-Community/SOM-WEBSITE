export type MagazineIssue = {
  date: string;
  title: string;
  cover: string;
  highlights: string[];
  author: string;
  duration: string;
};

export const magazineBanner = "https://i.postimg.cc/SxfMffzs/B2.jpg";

// NOTE: "Jakob Gronberg" and the "1 Min" durations came from the original page and look like template
// placeholders. Confirm or replace them.
export const magazineIssues: MagazineIssue[] = [
  {
    date: "16 March 2022",
    title: "SOM Magazine 2022",
    cover: "https://i.postimg.cc/dQ8C5WGm/MAG1.jpg",
    highlights: [
      "LOCATE YOURSELF IN GOD'S PURPOSE",
      "THE LOVEWORLD SONS OF MINISTRY: WHO WE ARE",
      "The Prolific PK: Inspiring stories and testimonies from Preacher's Kids. Discover how purpose and identity are shaped in Christ.",
    ],
    author: "Jakob Gronberg",
    duration: "1 Min",
  },
  {
    date: "16 March 2023",
    title: "SOM Magazine 2023",
    cover: "https://i.postimg.cc/fRb0TDpB/MAG2.jpg",
    highlights: [
      "The Word & I: An exclusive interview with PK. Explore the power of God's Word in everyday life.",
      "March 2023 Issue: Real-life experiences, faith journeys, and practical wisdom for young believers.",
    ],
    author: "Jakob Gronberg",
    duration: "1 Min",
  },
  {
    date: "16 March 2024",
    title: "SOM Magazine 2024",
    cover: "https://i.postimg.cc/JzdHsSWm/MAG3.jpg",
    highlights: [
      "BUILD YOUR LIFE ON THE TRUTH",
      "OUTWITTING THE DECEPTION: Discover research and insights.",
      "LIVE PURPOSEFULLY: An exclusive interview. Practical steps to living a life of purpose and truth in Christ.",
    ],
    author: "Jakob Gronberg",
    duration: "1 Min",
  },
];
